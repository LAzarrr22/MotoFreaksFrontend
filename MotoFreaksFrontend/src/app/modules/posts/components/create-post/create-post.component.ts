import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationMessageMap} from "../../../../shared/interfaces/validation-message-map";
import {Store} from "@ngrx/store";
import {PostsState} from "../../logic/reducers/posts.reducers";
import {CarModel} from "../../../profiles/logic/dto/models/car.model";
import {ProfileService} from "../../../profiles/logic/services/profile.service";
import {AddressModel} from "../../../profiles/logic/dto/models/address.model";
import {Router} from "@angular/router";
import {AppPath} from "../../../../shared/enums/app-path.enum";
import {AddPost} from "../../logic/action/posts.action";
import {NewPostModel} from "../../logic/dto/request/new-post.model";
import {getMyProfile, MyProfileState} from "../../../profiles/logic/reducers/my-profile.reducers";

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
  otherAddressContainer: boolean = false;
  currentAddressEnabled: boolean = true;
  useOtherAddress: boolean = false;
  currentAddress: AddressModel;
  validationMessages: ValidationMessageMap;

  constructor(private readonly storePosts: Store<PostsState>, private storeProfile: Store<MyProfileState>,
              private formBuilder: FormBuilder,
              private  profileService: ProfileService, private router: Router) {

  }

  ngOnInit(): void {
    this.storeProfile.select(getMyProfile).subscribe(me => {
      this.userCarList = me.carsList
      this.currentAddress = me.address
    });

    this.formBasic = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      address: new FormControl(true),
      car: new FormControl('', [Validators.required]),

    })

    this.formAddress = this.formBuilder.group({
      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
    });
  }

  addPost() {

    if (this.formBasic.valid) {
      this.storePosts.dispatch(new AddPost(new NewPostModel(this.getType(), this.getTitle()
        , this.getBody(), this.currentAddress, this.getCar(this.getCarId()))))
      this.goToAllPosts();
    }
  }

  saveOtherAddress() {
    if (this.formAddress.valid) {
      this.currentAddress = new AddressModel(this.formAddress.controls.country.value, this.formAddress.controls.state.value
        , this.formAddress.controls.city.value, this.formAddress.controls.street.value)
      this.useOtherAddress = true;
      this.otherAddressContainer = !this.otherAddressContainer;
    }
  }

  addCarChange() {
    this.addNewCar = !this.addNewCar;
  }

  addOtherAddress() {
    this.otherAddressContainer = !this.otherAddressContainer;
    this.currentAddressEnabled = !this.currentAddressEnabled;

  }

  goToAllPosts() {
    this.router.navigate([AppPath.POSTS_ALL_PATH])
  }

  backToProfileAddress() {
    this.storeProfile.select(getMyProfile).subscribe(me => this.currentAddress = me.address);
    this.useOtherAddress = false;
    this.otherAddressContainer = false;
    this.currentAddressEnabled = true;
  }

  getCar(id: string) {
    return this.userCarList.find(car => car.id === id)
  }

  getType() {
    return this.formBasic.controls.type.value;
  }

  getTitle() {
    return this.formBasic.controls.title.value;
  }

  getBody() {
    return this.formBasic.controls.body.value;
  }

  getCarId() {
    return this.formBasic.controls.car.value;
  }
}
