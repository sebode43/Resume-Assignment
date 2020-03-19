import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume-assignment';
  name: string = 'Sarah';
  address: string = '1234 Address Street'
  phone: string = '513-555-5555';
  email: string = 'sarah@mail.com';
  h1Color: string = "purple";

}
