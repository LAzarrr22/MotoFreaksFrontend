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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.postTypeList = ['All', ...this.postTypeList]

    this.form = this.formBuilder.group({
      type: new FormControl(''),
    })
  }

  applyFilter() {


  }

  filterType() {
    if (this.form.controls.type.value === 'All') {
      this.filterTypeEvent.emit(null);
    } else {
      this.filterTypeEvent.emit(PostType[this.form.controls.type.value])
    }
  }
}
