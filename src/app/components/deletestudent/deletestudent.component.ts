import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit,OnDestroy {
  stdid = 0;
  myserviceSubscrib:any;

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
    this.myserviceSubscrib.unsubscribe();
  }
  constructor(private myService:StudentsService,private myActivatedRoute: ActivatedRoute,private router:Router) {
    this.stdid = myActivatedRoute.snapshot.params["id"];
    this.myserviceSubscrib = this.myService.deleteStudent(this.stdid).subscribe();
    this.router.navigate(['/students'])

  }
  
  ngOnInit(): void {
  }

}
