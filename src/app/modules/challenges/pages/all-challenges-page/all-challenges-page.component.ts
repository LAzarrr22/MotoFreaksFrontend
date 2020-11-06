import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../logic/services/challenges.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {Actions, ofType} from "@ngrx/effects";
import {GET_ALL_CHALLENGES_BY_CAR_FAIL, GetAllChallengesByCarFail} from "../../logic/actions/challenges.actions";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {AuthService} from "../../../authentication/logic/services/auth.service";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  challengesListObs: Observable<ChallengeDtoModel[]>
  filterOpen: boolean = false;
  myId: string;
  errorMessageObs:Observable<string>;
  isModerator:boolean=false;

  constructor(private challengesService: ChallengesService, private menuService: MenuService,
              private profileService: ProfileService, private actions: Actions,
              private router:Router, private authService:AuthService) {
    this.errorMessageObs = this.actions.pipe(ofType(GET_ALL_CHALLENGES_BY_CAR_FAIL), map((action: GetAllChallengesByCarFail) => action.payload));
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.CHALLENGE)
    this.myId = this.profileService.getMyId();
    this.challengesListObs = this.challengesService.getAllChallenges()
    this.isModerator=this.authService.isModerator()
    window.scrollTo(0, 0)
  }

  goToCreate(){
    this.router.navigate([AppPath.CHALLENGE_CREATE])
  }
  openFilter() {
    this.filterOpen = !this.filterOpen;
  }

  applyCarFilter(params: Map<string, string>) {
    this.challengesListObs = this.challengesService.getAllChallengesByCar(params);
  }

  clearFilter() {
    this.challengesListObs = this.challengesService.getAllChallenges()
  }
}
