import { Component, VERSION } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
  getNewEducationalQualificationRow,
  getNewGraduateCourseProjectRow,
  getNewTechnicalSkillsRow
} from "./formgroups";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public resume = new FormGroup({
    name: new FormControl(""),
    address: new FormGroup({
      line1: new FormControl(""),
      line2: new FormControl(""),
      line3: new FormControl(""),
      line4: new FormControl("")
    }),
    careerObjective: new FormControl(""),
    educationalQualifications: new FormArray([
      getNewEducationalQualificationRow()
    ]),
    technicalSkills: new FormArray([getNewTechnicalSkillsRow()]),
    graduateCourseProjects: new FormArray([getNewGraduateCourseProjectRow()])
  });

  constructor() {}
}
