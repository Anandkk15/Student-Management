
import { Component, EventEmitter, Input, Output, input } from "@angular/core";
import { StudentModel } from "../model";


@Component({
  selector: 'app-student-item',
  standalone: true,
  imports: [],
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.scss'
})
export class StudentItemComponent  {
 @Input() student!:StudentModel;
 @Output() deleteEvent  = new EventEmitter<any>();
 constructor() {
}
deleteRow(i:number){
   this.deleteEvent.emit(this.student);
}
}
