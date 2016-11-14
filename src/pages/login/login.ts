import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Http } from '@angular/http';

import { LoginService } from '../../services/loginService';
import { MessageService } from '../../services/messageService';

//import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';

class Data {
  username: string;
  pass: string;
}

@Component({
  	templateUrl: 'login.html',
    selector: 'page-login'
})
export class LoginPage {
	data : Data;
	private domain : string ='';
	private response : {status: number};

  	constructor(
  		private http: Http,
      private loginService: LoginService,
      private messageService: MessageService,
      private navCtrl: NavController
  		 ) {
    	this.data = new Data();
    	this.data.username = '';
    	this.data.pass = '';
  	}

  	login(){
      this.loginService.setLogged(true); 
      //this.messageService.showLoading();
      this.navCtrl.setRoot(this.loginService.getNextPage());
      /*
  		this.http.post(this.domain + 'login', JSON.stringify(this.data))
      	//this.http.post('http://beta.json-generator.com/api/json/get/Vyfyujqez', data)
          	.subscribe(res => { 
            	try{
            	   	this.response = res.json();
            	   	if (this.response.status ==0 ){
                     this.loginService.setLogged(true);
                      this.navCtrl.setRoot(HomePage);
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
       // this.messageService.dismissLoading();
    }

    goSignup(){
      this.navCtrl.push(SignupPage);
    }

  	clearLogin(){
  		this.data.username='';
  		this.data.pass='';
  	}  	
}

