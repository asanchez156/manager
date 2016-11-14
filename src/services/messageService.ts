import {Injectable} from "@angular/core";

import { LoadingController, ToastController} from 'ionic-angular';


@Injectable()
export class MessageService {
  private loading; 
  
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, ) {
  }

  showMessage(msg){
      let toast = this.toastCtrl.create({
          message: msg,
          duration: 5000,
          position: 'bottom',
          showCloseButton: true,
          closeButtonText: "Done"
      });
      toast.onDidDismiss(() => {
      });
      toast.present();
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      cssClass: 'loading-spinner'
    });
    this.loading.present();
  }

  dismissLoading(){
      this.loading.dismiss();
  }


}