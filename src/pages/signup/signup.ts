import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';

import { HomePage } from '../home/home';

//import { SignupService } from '../../services/signupService';
import { MessageService } from '../../services/messageService';

class Data {
  name:string
  username: string;
  pass: string;
}

@Component({
  	templateUrl: 'signup.html',
    selector: 'page-signup'
})
export class SignupPage {
	data : Data;
	private domain : string ='';
	private response : {status: number};

  	constructor(
  		private http: Http,
      //private signupService: signupService,
      private messageService: MessageService,
      private navCtrl: NavController
  		 ) {
    	this.data = new Data();
    	this.data.username = '';
    	this.data.pass = '';
      this.data.name ='';
  	}

  	signup(){
      //this.signupService.setLogged(true); 
      this.navCtrl.setRoot(HomePage);
      /*
      this.messageService.showLoading();
  		this.http.post(this.domain + 'signup', JSON.stringify(this.data))
      	//this.http.post('http://beta.json-generator.com/api/json/get/Vyfyujqez', data)
          	.subscribe(res => { 
            	try{
            	   	this.response = res.json();
            	   	if (this.response.status ==0 ){
                     //this.SignupService.setLogged(true);
               		}else{
                
               		}
             	} catch (e){
                this.messageService.showMessage('Try again later.');
             	}
             	this.messageService.dismissLoading();
          	}, error => {
              	this.messageService.dismissLoading();
              	this.messageService.showMessage('Try again later.');
        });*/
    }

    goLogin(){
      this.navCtrl.pop();
    }

  	clearSignup(){
  		this.data.username='';
      this.data.pass='';
      this.data.name='';
  	}
}

