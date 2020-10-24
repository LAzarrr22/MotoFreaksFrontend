import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {ValidationMessageMap} from "../../../../shared/interfaces/validation-message-map";
import {Store} from "@ngrx/store";
import {PostsState} from "../../logic/reducers/posts.reducers";
import {CarModel} from "../../../profiles/logic/dto/models/car.model";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {AddressModel} from "../../../profiles/logic/dto/models/address.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  formBasic: FormGroup;
  formAddress: FormGroup;
  @Input()
  postTypeList = [];
  userCarList: CarModel[] = [];
  addNewCar: boolean = false;
  currentAddress: AddressModel;
  errorMessage: Observable<string>
  validationMessages: ValidationMessageMap;

  constructor(private readonly store: Store<PostsState>, private formBuilder: FormBuilder,
              private  profileService: ProfileService, private router: Router) {

  }

  ngOnInit(): void {
    this.profileService.getMyProfile().subscribe(me => this.userCarList = me.carsList);
    this.profileService.getMyProfile().subscribe(me => this.currentAddress = me.address);


    this.formBasic = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      car: new FormControl('', [Validators.required]),

    })

    this.formAddress = this.formBuilder.group({
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl(''),
    });
  }

  addPost() {
    console.dir(this.formBasic)
    console.dir(this.getCar(this.formBasic.controls.car.value))
    console.dir(this.currentAddress)
  }

  getAddressFromProfile() {

  }

  getCar(id: string) {
    return this.userCarList.find(car => car.id === id)
  }

  addCarChange() {
    this.addNewCar = !this.addNewCar;
  }

  goToAllPosts() {
    this.router.navigate([AppPath.POSTS_ALL_PATH])
  }
}
