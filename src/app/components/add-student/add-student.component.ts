import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit ,OnDestroy{

  constructor(private myService:StudentsService,private router:Router) { }
  ngOnInit(): void {
  }

  myserviceSubscrib:any;


  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.myserviceSubscrib.unsubscribe();
  }
  AddStudent(name:any,email:any,address:any){
    let student = {name, email, address};
    this.myserviceSubscrib = this.myService.AddNewStudent(student).subscribe();
    this.router.navigate(['/students'])
  }

}
