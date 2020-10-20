import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyMessagesComponent} from './pages/my-messages/my-messages.component';
import {MessagesConversationComponent} from './pages/messages-conversation/messages-conversation.component';
import {MessagesService} from "./logic/services/messages.service";
import {MessageApiService} from "./logic/services/message-api.service";
import {MessagesRoutingModule} from "./messages-routing.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {reducer} from "./logic/reducers/messages.reducers";
import {MessagesEffects} from "./logic/effects/messages.effects";
import {ConvListComponent} from './components/conv-list/conv-list.component';
import {NewMessageComponent} from "./components/new-message/new-message.component";
import {ConvItemListComponent} from "./components/conv-item-list/conv-item-list.component";
import {ConvExpandedComponent} from "./components/conv-expanded/conv-expanded.component";
import {MatDividerModule} from "@angular/material/divider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {AppCommonModule} from "../common/common.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [MyMessagesComponent, MessagesConversationComponent, ConvListComponent, NewMessageComponent, ConvItemListComponent, ConvExpandedComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    StoreModule.forFeature('messages', reducer),
    EffectsModule.forFeature([MessagesEffects]),
    MatDividerModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AppCommonModule,
    MatButtonModule,
  ], providers: [
    MessagesService,
    MessageApiService,
  ]
})
export class MessagesModule {
}
