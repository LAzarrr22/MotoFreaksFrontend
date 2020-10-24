import {Component, OnInit} from '@angular/core';
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";

@Component({
  selector: 'app-all-post-page',
  templateUrl: './all-post-page.component.html',
  styleUrls: ['./all-post-page.component.scss']
})
export class AllPostPageComponent implements OnInit {

  constructor(private router: Router, private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.POSTS)
  }

  addNew() {
    this.router.navigate([AppPath.POSTS_CREATE_PATH])
  }
}
