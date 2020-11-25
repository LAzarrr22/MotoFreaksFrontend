import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsApiService} from "./logic/services/posts-api.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/posts.reducers";
import {EffectsModule} from "@ngrx/effects";
import {PostsEffects} from "./logic/effects/posts.effects";
import {PostsService} from "./logic/services/posts.service";
import {PostsListComponent} from './components/posts-list/posts-list.component';
import {PostItemComponent} from './components/post-item/post-item.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {CreatePostPageComponent} from './pages/create-post-page/create-post-page.component';
import {AllPostPageComponent} from './pages/all-post-page/all-post-page.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {AppCommonModule} from "../common/common.module";
import {FilterPostsComponent} from "./components/filter-posts/filter-posts.component";
import {AngularMaterialModule} from "../../shared/angular-material.module";
import {SharedSectionCarModule} from "../profiles/components/profile-sections/section-cars/shared-section-car.module";
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentsListItemComponent } from './components/comments-list-item/comments-list-item.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [PostsListComponent, PostItemComponent, CreatePostComponent, CreatePostPageComponent, AllPostPageComponent, FilterPostsComponent, CommentsListComponent, CommentsListItemComponent, AddCommentComponent],
    imports: [
        CommonModule,
        PostsRoutingModule,
        StoreModule.forFeature('posts', reducer),
        EffectsModule.forFeature([PostsEffects]),
        AngularMaterialModule,
        AppCommonModule,
        SharedSectionCarModule,
    ],
  exports: [
    CreatePostComponent,
    CreatePostPageComponent,
    AllPostPageComponent
  ],
  providers: [
    PostsApiService,
    PostsService,
  ]

})
export class PostsModule {
}
