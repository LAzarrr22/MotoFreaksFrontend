import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsApiService} from "./logic/services/posts-api.service";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./logic/reducers/posts.reducers";
import {EffectsModule} from "@ngrx/effects";
import {PostsEffects} from "./logic/effects/posts.effects";
import {PostsService} from "./logic/services/posts.service";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('posts', reducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [
    PostsApiService,
    PostsService,
  ]

})
export class PostsModule {
}
