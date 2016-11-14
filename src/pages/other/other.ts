import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http } from '@angular/http';
import { LoginService } from '../../services/loginService';
import { MessageService } from '../../services/messageService';

import { Geolocation } from 'ionic-native';

class Data {
  user: string;
  msg: string;
}

@Component({
  	templateUrl: 'other.html',
    selector: 'page-other'
})

export class OtherPage {

  coord : string = '';
  data: Data;
  response : { 
      status: number, 
      msg: string, 
      user: string, 
      contacts: Array<string>
    };

  constructor(
    private http : Http,
  	private loginService: LoginService,
    private messageService: MessageService,
    private navCtrl: NavController
   	 ) { 
      this.coord = '';
      this.data = new Data();
      this.data.user = '';
      this.data.msg = '';
  	}
 	
 getLocation() {
   Geolocation.getCurrentPosition().then((resp) => {
       this.coord = resp.coords.latitude + "," + resp.coords.longitude;
       this.messageService.showMessage(this.coord);
       //this.sendLocation();
      }).catch((error) => {
        this.messageService.showMessage('Error getting location: '+ JSON.stringify(error));
      });

      let watch = Geolocation.watchPosition();
      watch.subscribe((data) => {
       // data can be a set of coordinates, or an error (if an error occurred).
       // data.coords.latitude
       // data.coords.longitude
      });
 }

sendLocation() {
   let domain = 'http://85.86.165.252/indaba/';
   this.data.user='Andoni';
   this.data.msg=this.coord;

   this.http.post(domain + 'sendMessage.php', JSON.stringify(this.data))
    .subscribe(res => { 
       try{
         this.response = res.json();
         if (this.response.status ==0 ){
             this.messageService.showMessage('Sent');
         }else{
           this.messageService.showMessage('Error, try again later.');
         }
       } catch (e){
         this.messageService.showMessage('Error, try again later.');
       }
    }, error => {
        this.messageService.showMessage('No server connection');
    });   	
  }
}
