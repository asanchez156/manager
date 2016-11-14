import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { Http } from '@angular/http';
import { LoginService } from '../../services/loginService';
import { MessageService } from '../../services/messageService';

@Component({
  	templateUrl: 'home.html',
    selector: 'page-home'
})

export class HomePage {

  constructor(
  	private loginService: LoginService,
    private messageService: MessageService,
    private navCtrl: NavController
   	 ) { 
  	}
 	
  status(){
      this.messageService.showMessage('Status: ' + this.loginService.isLogged());
  }
   	
}
