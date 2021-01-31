import { Component, OnInit } from '@angular/core';
import {AppComponent}from '../app.component';
import{FormsModule}from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message="Some Welcome Message"
  welcomeMessageFromService:string
  name=''

constructor(
  private route: ActivatedRoute,
  private service: WelcomeDataService){
  }

  ngOnInit() {
    this.name=this.route.snapshot.params['name'];
    //console.log(this.message) 
  }

  getWelcomeMessage(){
   // console.log(this.service.executeHelloWorldBeanService());

    this.service.executeHelloWorldBeanService().subscribe(
    response =>this.handleSuccessfulResponse(response), 
    error => this.handleErrorResponse(error)
  );
  //console.log('last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter(){
    // console.log(this.service.executeHelloWorldBeanService());
 
     this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
     response =>this.handleSuccessfulResponse(response), 
     error => this.handleErrorResponse(error)
   );
   //console.log('last line of getWelcomeMessage');
   }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService=response.message;
     //console.log(response);
    // console.log(response.message);
  }
  handleErrorResponse(error){
    this.welcomeMessageFromService= error.error.message;
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message); 
  }

}
