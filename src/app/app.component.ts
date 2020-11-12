import { DatePipe } from "@angular/common";
import { Component, VERSION } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
  getNewEducationalQualificationRow,
  getNewGraduateCourseProjectRow,
  getNewJobDetailsRow,
  getNewProfileLinkRow,
  getNewTechnicalSkillsRow
} from "./formgroups";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  private resume = new FormGroup({
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
    graduateCourseProjects: new FormArray([getNewGraduateCourseProjectRow()]),
    internships: new FormArray([getNewJobDetailsRow()]),
    workExperience: new FormArray([getNewJobDetailsRow()]),
    coCurricularActivities: new FormGroup({
      line1: new FormControl(""),
      line2: new FormControl(""),
      line3: new FormControl("")
    }),
    profileLinks: new FormArray([getNewProfileLinkRow()]),
    languagesKnown: new FormControl(""),
    date: new FormControl(this.datePipe.transform(Date.now())),
    place: new FormControl("")
  });

  constructor(private datePipe: DatePipe) {}

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

  insertGraduateCourseProject() {
    (this.resume.controls["graduateCourseProjects"] as FormArray).push(
      getNewGraduateCourseProjectRow()
    );
  }

  deleteGraduateCourseProject(projectIndex) {
    (this.resume.controls["graduateCourseProjects"] as FormArray).removeAt(
      projectIndex
    );
  }

  insertNewInternshipDetails() {
    (this.resume.controls["internships"] as FormArray).push(
      getNewJobDetailsRow()
    );
  }

  deleteInternshipDetails(internshipIndex) {
    (this.resume.controls["internships"] as FormArray).removeAt(
      internshipIndex
    );
  }

  insertNewWorkExperienceDetails() {
    (this.resume.controls["workExperience"] as FormArray).push(
      getNewJobDetailsRow()
    );
  }

  deleteWorkExperienceDetails(workIndex) {
    (this.resume.controls["workExperience"] as FormArray).removeAt(workIndex);
  }

  insertProfileLinkRow() {
    (this.resume.controls["profileLinks"] as FormArray).push(
      getNewProfileLinkRow()
    );
  }

  deleteProfileLinkRow(profileLinkIndex) {
    (this.resume.controls["profileLinks"] as FormArray).removeAt(
      profileLinkIndex
    );
  }
}
