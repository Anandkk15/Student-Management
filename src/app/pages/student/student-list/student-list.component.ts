import { Component, OnInit, output } from '@angular/core';
import { StudentItemComponent } from '../student-item/student-item.component';
import { StudentService } from '../student.service';
import { StudentModel } from '../model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentItemComponent,NgFor],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent implements OnInit{
  public students:StudentModel[]=[];
  
  constructor(private StudentService:StudentService){
  }
  ngOnInit(): void {
    this.students=this.StudentService.getStudentList()
    console.log(this.students);
  }
  deleteStudent(i:number)
  {
    this.students.splice(i,1);
  }
}
  
  

