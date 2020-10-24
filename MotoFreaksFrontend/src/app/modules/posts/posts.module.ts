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
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ProfileModule} from "../profiles/profile.module";
import {CreatePostPageComponent} from './pages/create-post-page/create-post-page.component';
import {AllPostPageComponent} from './pages/all-post-page/all-post-page.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [PostsListComponent, PostItemComponent, CreatePostComponent, CreatePostPageComponent, AllPostPageComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostsEffects]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ProfileModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    CreatePostComponent,
    CreatePostPageComponent
  ],
  providers: [
    PostsApiService,
    PostsService,
  ]

})
export class PostsModule {
}
