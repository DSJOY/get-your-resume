import { FormControl, FormGroup } from "@angular/forms";

export function getNewEducationalQualificationRow(): FormGroup {
  return new FormGroup({
    degree: new FormControl(''),
    board: new FormControl(''),
    year: new FormControl(''),
    percentage: new FormControl('')
  });
}

export function getNewTechnicalSkillsRow(): FormGroup {
  return new FormGroup({
    skillCategory: new FormControl(''),
    skillList: new FormControl('')
  });
}

export function getNewGraduateCourseProjectRow(): FormGroup {
  return new FormGroup({
    ProjectHeading: new FormControl(''),
    projectDescription: new FormGroup({
      line1: new FormControl(''),
      line2: new FormControl(''),
      line3: new FormControl('')
    })
  });
}