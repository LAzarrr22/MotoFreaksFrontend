import {BehaviorSubject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  activeRoute: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
