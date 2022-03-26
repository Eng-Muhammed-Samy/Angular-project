import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private MyClient:HttpClient) { }

  BaseURL = "http://localhost:3000/students";
  getAllStudents(){
    return this.MyClient.get(this.BaseURL,{observe:"response"});
  }

  getStudentByID(id:number){
    return this.MyClient.get(`${this.BaseURL}/${id}`);
  }

  AddNewStudent(student:any){
    return this.MyClient.post(this.BaseURL,student);
  }
  public updateStudent(id:any,postData: Object) {
    return this.MyClient.patch(`${this.BaseURL}/${id}`, postData);
  }
  public deleteStudent(id:any) {
    return this.MyClient.delete(`${this.BaseURL}/${id}`);
  }

}
