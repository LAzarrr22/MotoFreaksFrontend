import {Component, Input, OnInit} from '@angular/core';
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {Router} from "@angular/router";
import {ActiveRoute} from "../../../../shared/enums/active-route.enum";
import {MenuService} from "../../../menu/logic/services/menu.service";
import {Observable} from "rxjs";
import {PostModel} from "../../logic/dto/model/post.model";
import {PostsService} from "../../logic/services/posts.service";
import {PostType} from "../../logic/enums/post-type.enum";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {Actions, ofType} from "@ngrx/effects";
import {map} from "rxjs/operators";
import {AuthService} from "../../../authentication/logic/services/auth.service";
import {FAIL_ACTION, FailAction} from "../../logic/action/posts.action";
import {PostState} from "../../logic/enums/post-state.enum";

@Component({
  selector: 'app-all-post-page',
  templateUrl: './all-post-page.component.html',
  styleUrls: ['./all-post-page.component.scss']
})
export class AllPostPageComponent implements OnInit {

  postsListObs: Observable<PostModel[]>
  filterOpen: boolean = false;
  postTypes = PostType;
  postState = PostState;
  postTypeList = [];
  postStateList = [];
  myId: string;
  currentFilterType: PostType;
  currentCarFilter: Map<string, string>;
  currentStateParam: Map<string, string>;
  isAdmin: boolean = false;
  errorMessage: Observable<string>;
  isLoading: Observable<boolean>;
  @Input()
  postsForProfile: boolean = false;
  @Input()
  idProfileToShow: string;


  constructor(private router: Router, private menuService: MenuService,
              private postsService: PostsService, private profileService: ProfileService,
              private actions: Actions, private authService: AuthService) {
    this.errorMessage = this.actions.pipe(ofType(FAIL_ACTION), map((action: FailAction) => action.payload));
  }

  ngOnInit(): void {
    this.isLoading=this.postsService.isLoading();
    this.postTypeList = Object.keys(this.postTypes);
    this.postStateList = Object.keys(this.postState);
    this.myId = this.profileService.getMyId();

    if (!this.postsForProfile) {
      this.menuService.activeRoute.next(ActiveRoute.POSTS)
      this.postsListObs = this.postsService.getAllPosts();
      window.scrollTo(0, 0)
    } else {
      this.postsListObs = this.postsService.getAllPostByCreatorId(this.idProfileToShow);
    }
    this.isAdmin = this.authService.isAdmin();
    window.scrollTo(0, 0)
  }

  addNew() {
    this.router.navigate([AppPath.POSTS_CREATE_PATH])
  }

  openFilter() {
    this.filterOpen = !this.filterOpen;
  }

  deletePost(id: string) {
    this.postsService.deletePost(id)
    setTimeout(() => {
      this.refreshPosts();
    }, 500)

  }

  resolvePost(id: string) {
    this.postsService.resolvePost(id)
    setTimeout(() => {
      this.refreshPosts();
    }, 500)
  }

  filterType(type: PostType) {
    this.currentFilterType = type;
    this.refreshPosts();
  }

  applyCarFilter(params: Map<string, string>) {
    this.currentCarFilter = params;
    this.refreshPosts();
  }

  applyStateFilter(state: PostState) {
    if(state!=PostState.ALL){
    let paramMap = new Map<string, string>();
    paramMap.set('state', state.valueOf());
    this.currentStateParam = paramMap;
  }else {
      this.currentStateParam = null;
    }
    this.refreshPosts();
  }

  clearCarFilter() {
    this.currentCarFilter = null;
    this.refreshPosts();
  }

  refreshPosts() {
    if (!this.postsForProfile) {
      this.postsListObs = this.postsService.getAllPosts(this.currentFilterType, this.currentCarFilter, this.currentStateParam);
    } else {
      this.postsListObs = this.postsService.getAllPostByCreatorId(this.idProfileToShow, this.currentFilterType, this.currentCarFilter, this.currentStateParam);
    }
  }

}
