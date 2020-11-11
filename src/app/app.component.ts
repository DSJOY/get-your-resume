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
    heading: new FormControl(""),
    name: new FormControl(""),
    address: new FormGroup({
      line1: new FormControl(""),
      line2: new FormControl(""),
      line3: new FormControl("")
    }),
    phone: new FormControl(""),
    email: new FormControl(""),
    careerObjective: new FormControl(""),
    educationalQualifications: new FormArray([
      getNewEducationalQualificationRow()
    ]),
    technicalSkills: new FormArray([getNewTechnicalSkillsRow()]),
    graduateCourseProjects: new FormArray([getNewGraduateCourseProjectRow()])
  });

  constructor() {}

  insertEducationalQualificationRow() {
    (this.resume.controls["educationalQualifications"] as FormArray).push(
      getNewEducationalQualificationRow()
    );
  }

  deleteEducationalQualificationRow(degreeIndex) {
    (this.resume.controls["educationalQualifications"] as FormArray).removeAt(
      degreeIndex
    );
  }

  insertTechnicalSkillRow() {
    (this.resume.controls["technicalSkills"] as FormArray).push(
      getNewTechnicalSkillsRow()
    );
  }

  deleteTechnicalSkillRow(skillIndex) {
    (this.resume.controls["technicalSkills"] as FormArray).removeAt(skillIndex);
  }
}
