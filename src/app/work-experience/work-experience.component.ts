import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  h1Color: string = "purple";
  workExperience : any = [
    {
      company: "Paycor",
      job: "Software Analyst",
      time: "Feb. 2020"
    },
    {
      company: "Mercy Health",
      job: "Digital Admin",
      time: "Nov. 2019-Feb. 2020"
    },
    {
      company: "The Partnering Group",
      job: "Graphic Design and Communications Manager",
      time: "May 2018-August 2019"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
