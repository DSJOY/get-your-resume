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
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  constructor(private datePipe: DatePipe) {
    this.resume.patchValue({
      heading: "RESUME",
      name: "SAHIT ATTADA",
      address: {
        line1: "Flat No.102, Surya Ratn Appt.",
        line2: "Yendada, Visakhapatnam (A.P.)",
        line3: "Pin: 530045"
      },
      phone: "+918985318033",
      email: "sahitattada@gmail.com",
      careerObjective:
        "To work in tandem with a team in a challenging and competitive environment.",
      educationalQualifications: [
        {
          degree: "B.Tech, CSE",
          board: "MANIT",
          year: "2014-2018",
          percentage: "8.0"
        }
      ],
      technicalSkills: [
        {
          skillCategory: "Software Languages",
          skillList: "C, C++, Java"
        }
      ],
      graduateCourseProjects: [
        {
          projectHeading:
            "Student Result Analysis | Maulana Azad National Institute of Technology | January – April 2016",
          projectDescription: {
            line1:
              "An application for comparing students ‘Performance’ based on Working Outputs",
            line2:
              "The product is developed in a short period of Time and the complexity of it is reduced to its ",
            line3:
              "The comparison is done with the help of Pie-Charts and Bar-Graphs which are created using"
          }
        }
      ],
      internships: [
        {
          orgName: "iBuild Innovations, Hyderabad",
          managerDetails:
            "Mr. Aneesh Kumar (Project Manager, iBuild S/W Services) ",
          role: "Web Development Intern ( Backend Developer )",
          duration: "May 2017 - July 2017",
          jobDescription: {
            line1:
              "Development of Web Applications for iBuild software services",
            line2:
              "Applications are developed with Python as base language and used Python-Django framework",
            line3:
              "APIs are developed with the help of a private pip package called Django-Swagger-Utils and "
          }
        }
      ],
      workExperience: [
        {
          orgName: "iBuild Innovations, Hyderabad",
          managerDetails:
            "Mr. Aneesh Kumar (Project Manager, iBuild S/W Services) ",
          role: "Web Development Intern ( Backend Developer )",
          duration: "May 2017 - July 2017",
          jobDescription: {
            line1:
              "Development of Web Applications for iBuild software services",
            line2:
              "Applications are developed with Python as base language and used Python-Django framework",
            line3:
              "APIs are developed with the help of a private pip package called Django-Swagger-Utils and ",
            line4: "Swagger which was written in JSON/YAML format."
          }
        }
      ],
      coCurricularActivities: {
        line1: "Student Mentor, Senior Students Mentorship Program",
        line2:
          "Student Volunteer, MAARG Society, Maulana Azad National Institute of Technology",
        line3: "2015 Class Representative for Section IA -1"
      },
      profileLinks: [
        {
          appName: "Git Hub",
          profileLink: "https://github.com/DSJOY"
        }
      ],
      languagesKnown: "English, Hindi, Telugu",
      place: "Vizag"
    });
  }

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

  onClickDownload() {
    var docDefinition = {
      content: "This is an sample PDF printed with pdfMake"
    };
    pdfMake.createPdf(docDefinition).print();
  }
}
