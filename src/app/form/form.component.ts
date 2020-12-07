import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Departments =['Finance', 'Marketing', 'Sales', 'IT', 'Human Resources'];

  userModel = new User('dummy','11','IT','a@b','11/12/12');
}
