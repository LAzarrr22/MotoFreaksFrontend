import {Component, OnInit} from '@angular/core';
import {ChallengesService} from "../../logic/services/challenges.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-all-challenges-page',
  templateUrl: './all-challenges-page.component.html',
  styleUrls: ['./all-challenges-page.component.scss']
})
export class AllChallengesPageComponent implements OnInit {

  constructor(private challengesService: ChallengesService, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.CHALLENGE)

    console.log('all challenges')
    let paramMap = new Map<string, string>();
    // paramMap.set('model','TT');
    // paramMap.set('generation', '8n');
    paramMap.set('company', 'MINI');

    this.challengesService.getAllChallengesByCar(paramMap).subscribe(ch => {

      console.dir(ch)


    })
  }

}
