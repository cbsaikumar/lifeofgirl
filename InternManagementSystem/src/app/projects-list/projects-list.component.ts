import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  listOfProjects: string[];

  constructor() { }

  ngOnInit() {
    this.listOfProjects = ['Project1', 'Project2','Project3', 'Project4','Project5'];
  }

}
