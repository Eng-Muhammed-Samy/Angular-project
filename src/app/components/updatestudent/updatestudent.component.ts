import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit,OnDestroy {

  stdid = 0;
  myserviceSubscrib:any;
  stdData:any;

  constructor(private myService:StudentsService,private myActivatedRoute: ActivatedRoute,private router:Router) {
    this.stdid = myActivatedRoute.snapshot.params["id"];
    this.myserviceSubscrib = this.myService.getStudentByID(this.stdid).subscribe((data:any)=>{
      this.stdData=data;
      console.log(data);
    },(err)=>{
      console.log(err);
    });
    

  }
  
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.myserviceSubscrib.unsubscribe();
  }
  updateStudent(name:any,email:any,address:any){
    let student = {name, email, address};
    this.myserviceSubscrib = this.myService.updateStudent(this.stdid,student).subscribe();
    this.router.navigate(['/students'])

  }
  ngOnInit(): void {

  }


}
