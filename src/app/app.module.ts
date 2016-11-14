import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/other/other';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { LoginService } from '../services/loginService';
import { MessageService } from '../services/messageService';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    LoginPage,
    SignupPage
  ],
  providers: [
    LoginService, 
    MessageService
  ]
})
export class AppModule {}
