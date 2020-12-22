import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {HomeRoutingModule} from "./home-routing.module";
import { NotValidateDialogComponent } from './components/not-validate-dialog/not-validate-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { LastPostComponent } from './components/last-post/last-post.component';
import {PostsModule} from "../posts/posts.module";
import {PostsService} from "../posts/logic/services/posts.service";



@NgModule({
  declarations: [HomePageComponent, NotValidateDialogComponent, LastPostComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    MatButtonModule,
    PostsModule,
  ],
  exports: [
    HomePageComponent
  ],
  providers:[
    PostsService,
  ]
})
export class HomeModule {
}
