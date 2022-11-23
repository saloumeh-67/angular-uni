import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Inject,
  Injector,
  OnInit,
} from "@angular/core";
import { Course } from "./model/course";
import { Observable } from "rxjs";
import { AppConfig, CONFIG_TOKEN } from "./config";
import { COURSES } from "../db-data";
import { CoursesService } from "./courses/courses.service";
import { createCustomElement } from "@angular/elements";
import { CourseTitleComponent } from "./course-title/course-title.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  data = {
    title: "saloumeh",
  };

onLogoClicked(){
    alert('hello world');
}
onKeyUp(newTitle:string){
    this.data.title = newTitle
}
 
}
