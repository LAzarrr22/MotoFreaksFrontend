import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../logic/services/challenges.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {Actions, ofType} from "@ngrx/effects";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ChallengeStateEnum} from "../../logic/enums/challenge-state.enum";
import {map} from "rxjs/operators";
import {ChallengeLoadFail, CHALLENGES_LOAD_FAIL} from "../../logic/actions/challenges.actions";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  challengeStateShows = {
    ALL: 'All',
    FILLED: 'Already filled',
    UNFILLED: 'Not yet filled',
  };
  challengesListObs: Observable<ChallengeDtoModel[]>
  filterOpen: boolean = false;
  myId: string;
  errorMessageObs: Observable<string>;
  isModerator: boolean = false;
  isAdmin: boolean = false;
  form: FormGroup;
  currentCarFilter: Map<string, string>;
  currentStateFilter: Map<string, string>;
  challengeStates=ChallengeStateEnum;
  challengeStateList:string[];
  challengeIsLoading: Observable<boolean>

  constructor(private challengesService: ChallengesService, private menuService: MenuService,
              private profileService: ProfileService, private actions: Actions,
              private router: Router, private authService: AuthService, private formBuilder: FormBuilder) {
    this.errorMessageObs= this.actions.pipe(ofType(CHALLENGES_LOAD_FAIL), map((action: ChallengeLoadFail) => action.payload));
  }

  ngOnInit(): void {
    this.challengeIsLoading=this.challengesService.isLoading();
    this.challengeStateList= Object.keys(this.challengeStates)
    this.menuService.activeRoute.next(ActiveRoute.CHALLENGE)
    this.myId = this.profileService.getMyId();
    this.challengesListObs = this.challengesService.getAllChallenges()
    this.isModerator = this.authService.isModerator()
    this.form = this.formBuilder.group({
      general: new FormControl(''),
      state: new FormControl('')
    })
    this.isAdmin = this.authService.isAdmin();
    window.scrollTo(0, 0)
  }

  goToCreate() {
    this.router.navigate([AppPath.CHALLENGE_CREATE])
  }

  goToMerge(id:string) {
    this.router.navigate([AppPath.CHALLENGE_MERGE, {id: id}]);
  }

  openFilter() {
    this.filterOpen = !this.filterOpen;
  }

  applyCarFilter(params: Map<string, string>) {
    this.currentCarFilter=params;
    this.refreshChallenges()
  }
  filledChange() {
    if(ChallengeStateEnum[this.form.controls.state.value]!=ChallengeStateEnum.ALL){
      let paramMap = new Map<string, string>();
      paramMap.set('state', ChallengeStateEnum[this.form.controls.state.value].valueOf());
      this.currentStateFilter = paramMap;
    }else {
      this.currentStateFilter = null;
    }
    this.refreshChallenges()
  }

  clearFilter() {
    this.currentCarFilter=null;
    this.refreshChallenges()
  }

  isGeneral() {
    return this.form.controls.general.value;
  }

  deleteChallenge(id:string){
    this.challengesService.deleteChallenge(id);
    this.refreshChallenges()
  }

  refreshChallenges(){
    if (this.isGeneral()) {
      this.challengesListObs = this.challengesService.getAllGeneralChallenges(this.currentCarFilter, this.currentStateFilter)
    }else{
      this.challengesListObs = this.challengesService.getAllChallenges(this.currentCarFilter, this.currentStateFilter)
    }
  }

}
