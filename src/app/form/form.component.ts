import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import {AppComponent} from 'src/app/app.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  name;
  eId;
  department;
  email;
  DOJ;
  userModel = new User();
  constructor() { }
  database= [];
  dummy = [];
  ngOnInit(): void {
  }
  Departments =['Finance', 'Marketing', 'Sales', 'IT', 'Human Resources'];
  dError = true;
  validateDepartment(value){
    if(value === 'default'){
      this.dError = true;
    }else{
      this.dError = false;
    }

  }
  isClear=false;
  clearResponse(){
   document.getElementById('myreset').click();
  }
  showTable=false;
  onSubmit(){
    this.showTable=true;
    console.log("submitted");
    this.name = this.userModel.name;
    this.DOJ=this.userModel.DOJ;
    this.department=this.userModel.department;
    this.eId=this.userModel.eId;
    this.email=this.userModel.email;
    
    this.database.push({
      name:this.name,
      eId:this.eId,
      department:this.department,
      email: this.email,
      DOJ:this.DOJ
    });
   console.log(this.database); 
  }
  hideRow=true;
  hideTable(){
    this.showTable = false;
  }
  deleteRecord(index){
    this.database.splice(index,1);
  }
}
