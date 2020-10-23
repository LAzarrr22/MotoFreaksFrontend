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


@NgModule({
  declarations: [PostsListComponent, PostItemComponent, CreatePostComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostsEffects]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    CreatePostComponent
  ],
  providers: [
    PostsApiService,
    PostsService,
  ]

})
export class PostsModule {
}
