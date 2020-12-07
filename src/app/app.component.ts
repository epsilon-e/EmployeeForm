import { Component } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeForm';
  showForm = false;
  displayForm(){
    this.showForm =true;
  }
  
}
