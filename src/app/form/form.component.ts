import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import {AppComponent} from 'src/app/app.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user = {
   name:'',
   eId:'',
   department:'',
   email:'',
   DOJ:''
  }

  constructor() { }
  database= [];
  ngOnInit(): void {
  }
  Departments =['Finance', 'Marketing', 'Sales', 'IT', 'Human Resources'];
  dError = true;
 
  userModel = new User();
  
  validateDepartment(value){
    if(value === 'default'){
      this.dError = true;
    }else{
      this.dError = false;
    }

  }
  onSubmit(){
    console.log("submitted");
    //  let userModel1 = new User('userModel.name.value','userModel.eId.value','userModel.department.value','userModel.email.value','userModel.DOJ.value');
    this.database.push(this.userModel);
    console.log(this.database);
  }
}
