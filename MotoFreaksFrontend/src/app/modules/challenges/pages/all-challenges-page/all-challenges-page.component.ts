import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../logic/services/challenges.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  challengesListObs: Observable<ChallengeDtoModel[]>
  filterOpen: boolean = false;

  constructor(private challengesService: ChallengesService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.CHALLENGE)

    this.challengesListObs = this.challengesService.getAllChallenges()
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
