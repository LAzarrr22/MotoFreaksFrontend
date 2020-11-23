import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChallengeDtoModel} from "../../logic/dto/response/challenge-dto.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {MatDialog} from "@angular/material/dialog";
import {AddEditSentenceComponent} from "../../../sentences/components/add-edit-sentence/add-edit-sentence.component";
import {ConfirmDeleteComponent} from "../confirm-delete/confirm-delete.component";

@Component({
  selector: 'app-challenges-list-item',
  templateUrl: './challenges-list-item.component.html',
  styleUrls: ['./challenges-list-item.component.scss']
})
export class ChallengesListItemComponent implements OnInit {

  @Input()
  challenge: ChallengeDtoModel;
  @Input()
  creatorName: string;
  @Input()
  creatorLastName: string;
  @Input()
  myId: string
  @Input()
  isAdmin: boolean;
  @Input()
  isModerator: boolean;
  @Output()
  deleteEvent = new EventEmitter<string>();
  @Output()
  mergeEvent = new EventEmitter<string>();


  constructor(private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  goToProfile() {
    if (this.myId === this.challenge.creatorId) {
      this.router.navigate([AppPath.PROFILE_ME_PATH])
    } else {
      this.router.navigate([AppPath.PROFILE_USER_PATH, {id: this.challenge.creatorId}])
    }
  }

  startChallenge() {
    this.router.navigate([AppPath.CHALLENGES_DO_PATH, {id: this.challenge.id}])
  }

  deleteChallenge() {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: String(this.challenge.name)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === this.challenge.name) {
        this.deleteEvent.emit(this.challenge.id)
      }
    });
  }

  mergeChallenge() {
    this.mergeEvent.emit(this.challenge.id)
  }
}
