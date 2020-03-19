import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  h1Color: string = "purple";
  schools: any[] = [
    {
      school:"MAX Technical",
      major: ".Net Development",
      year: "2020"
    },
    {
      school:"University of Cincinnati",
      major: "Graphic Communication Design",
      year: "2018"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
