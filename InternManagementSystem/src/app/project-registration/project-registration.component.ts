import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';

@Component({
  selector: 'app-project-registration',
  templateUrl: './project-registration.component.html',
  styleUrls: ['./project-registration.component.css']
})
export class ProjectRegistrationComponent implements OnInit {

  private receivedData: any;

  constructor(private route: ActivatedRoute, private dataService: DataShareService) { 
  }

  ngOnInit() {
    // this.route.queryParams.subscribe((data) => {
    //   this.receivedData = JSON.parse(data["project"]);
    // });
    this.receivedData = this.dataService.getData();

    console.log("Received Data", this.receivedData);
  }

  submit(formData){
    console.log("received Data", this.receivedData);
    console.log("formData Data", formData);
  }

  ngDestroy(){
  }



}
