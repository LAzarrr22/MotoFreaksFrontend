import {Component, Input, OnInit} from '@angular/core';
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {PostModel} from "../../logic/dto/model/post.model";
import {PostsService} from "../../logic/services/posts.service";
import {UserModel} from "../../../users/logic/dto/response/user-model";
import {UsersService} from "../../../users/logic/services/users.service";
import {PostType} from "../../logic/enums/post-type.enum";
import {ProfileService} from "../../../profiles/logic/services/profile.service";

@Component({
  selector: 'app-all-post-page',
  templateUrl: './all-post-page.component.html',
  styleUrls: ['./all-post-page.component.scss']
})
export class AllPostPageComponent implements OnInit {

  postsListObs: Observable<PostModel[]>
  users: Observable<UserModel[]>
  filterOpen: boolean = false;
  postTypes = PostType;
  postTypeList = [];
  myId: string;
  currentFilterType: PostType;

  @Input()
  onlyMyPosts: boolean = false;

  constructor(private router: Router, private menuService: MenuService,
              private postsService: PostsService, private userService: UsersService,
              private profileService: ProfileService) {
  }

  ngOnInit(): void {
    this.menuService.activeRoute.next(ActiveRoute.POSTS)
    this.postsListObs = this.postsService.getAllPosts();
    this.users = this.userService.getAllUsers();
    this.postTypeList = Object.keys(this.postTypes);
    this.profileService.getMyProfile().subscribe(profile => this.myId = profile.id)
  }

  addNew() {
    this.router.navigate([AppPath.POSTS_CREATE_PATH])
  }

  openFilter() {
    this.filterOpen = !this.filterOpen;
  }

  deletePost(id: string) {
    this.postsService.deletePost(id)
    this.refreshPosts();
  }

  filterType(type: PostType) {
    this.currentFilterType = type;
    this.refreshPosts();
  }

  refreshPosts() {
    if (this.currentFilterType) {
      this.postsListObs = this.postsService.getAllPosts(this.currentFilterType);
    }
  }
}
