import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdatestudentComponent } from './components/updatestudent/updatestudent.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { StudentsService } from './services/students/students.service';
import { StudentItemComponent } from './components/student-item/student-item.component';
import { DeletestudentComponent } from './components/deletestudent/deletestudent.component';

let routes:Routes = [

  {path:"",component:StudentsComponent},
  {path:"students",component:StudentsComponent},
  {path:"students/:id",component:StudentsDetailsComponent},
  {path:"addstudent",component:AddStudentComponent},
  {path:"updatestudent/:id",component:UpdatestudentComponent},
  {path:"deletestudent/:id",component:DeletestudentComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    AddStudentComponent,
    UpdatestudentComponent,
    HeaderComponent,
    StudentItemComponent,
    DeletestudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  ],
  providers: [
    StudentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


