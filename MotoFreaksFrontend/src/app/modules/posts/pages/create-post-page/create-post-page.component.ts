import {Component, OnInit} from '@angular/core';
import {PostType} from "../../logic/enums/post-type.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.scss']
})
export class CreatePostPageComponent implements OnInit {

  postTypes = PostType;
  postTypeList = [];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
    window.scrollTo(0, 0)
    this.menuService.activeRoute.next(ActiveRoute.POSTS)
    this.postTypeList = Object.keys(this.postTypes);

  }

}
