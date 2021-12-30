import { Injectable } from '@angular/core';
import { threadId } from 'worker_threads';
import {Student} from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = new Array();

  constructor() {
    this.students.push({
      name: 'Luis Alberto Jacobo',
      controlnumber: '16400936',
      active: true
    });
    this.students.push({
      name: 'Arturo Larios',
      controlnumber: '16400935',
      active: true
    });
    this.students.push({
      name: 'Alma Lopez',
      controlnumber: '16400940',
      active: false
    });
  }

  getStudents(): Student[]{
    return this.students; 
  }

  changeStatus(position: number): void {
    this.students[position].active = !this.students[position].active;
  }

  deleteStudent(position: number): void{
    this.students.splice(position, 1);
  }

  mewStudent(Student: Student): void {
    this.students.push(Student);
  }
  
}
