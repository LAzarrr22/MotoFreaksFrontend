import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostType} from "../../logic/enums/post-type.enum";
import {PostState} from "../../logic/enums/post-state.enum";

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent implements OnInit {
  typeValues = {
    ALL: 'All',
    ADVICE: 'Advice',
    INFO: 'Info',
    BORROW: 'Borrow',
    ROAD_HELP: 'Road help',
  };

  stateValues = {
    ALL: 'All',
    OPEN: 'Open',
    CLOSED: 'Closed',
  };

  @Input()
  postTypeList = [];
  @Input()
  postStateList = [];
  @Output()
  filterTypeEvent = new EventEmitter<PostType>();
  form: FormGroup;
  @Output()
  applyStateFilterEvent = new EventEmitter<PostState>();
  @Output()
  applyCarFilterEvent = new EventEmitter<Map<string, string>>();
  @Output()
  clearFilterEvent = new EventEmitter();
  @Input()
  errorMessage: string;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      type: new FormControl('ALL'),
      state: new FormControl('ALL'),
    })
  }

  applyFilter() {
  }

  filterType() {
    this.filterTypeEvent.emit(PostType[this.form.controls.type.value])
  }

  applyCarFilter($event: Map<string, string>) {
    this.applyCarFilterEvent.emit($event);
  }

  clearCarFilter() {
    this.clearFilterEvent.emit();
  }

  filterState() {
    this.applyStateFilterEvent.emit(PostState[this.form.controls.state.value])
  }
}
