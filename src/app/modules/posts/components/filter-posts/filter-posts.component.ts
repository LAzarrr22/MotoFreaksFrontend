import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {PostType} from "../../logic/enums/post-type.enum";

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.scss']
})
export class FilterPostsComponent implements OnInit {
  @Input()
  postTypeList = [];
  @Output()
  filterTypeEvent = new EventEmitter<PostType>();
  form: FormGroup;
  @Output()
  applyCarFilterEvent = new EventEmitter<Map<string, string>>();
  @Output()
  clearFilterEvent = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      type: new FormControl('ALL'),
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
}
