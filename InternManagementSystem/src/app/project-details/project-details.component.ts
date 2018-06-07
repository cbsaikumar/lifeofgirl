import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from '../data-share.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  subscription: any;
  project: string;

  projectData: any;

  constructor(private route: ActivatedRoute, private dataService: DataShareService, private router : Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.project = params['id'];
    });

    this.projectData = {
      'projectTile': 'Life of Girl!!',
      'projectCode': '2120',
      'projectType': 'Fulltime',
      'mentor': 'Karishma Awesome',
      'credits': '4',
      'prerequisites': 'Maths, Biology, Physics, Chemistry',
      'workDuration': '36Hrs.',
      'onsite': 'WFH',
      'startDate': '30/10/1992',
      'eligibility': 'BTech in IIIT',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    };
  }

  apply(data){
    // let navigationExtras : NavigationExtras = {queryParams: {"project" : JSON.stringify(this.projectData)}};

    // this.router.navigate(['./projectRegistration'], navigationExtras);

    this.dataService.setData(data);
    this.router.navigate(['./projectRegistration']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
