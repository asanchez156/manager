import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { OtherPage } from '../pages/other/other';
import { LoginPage } from '../pages/login/login';
//import { SignupPage } from '../pages/signup/signup';

import { LoginService } from '../services/loginService';
//import { MessageService } from '../services/messageService';

declare var navigator: any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  @ViewChild(Nav) nav: Nav;
  currentPage: any;
  rootPage: any = LoginPage;
  pages: Array<{icon: string, title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public loginService: LoginService,
    public menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      if (loginService.isLogged()){
          this.nav.setRoot(HomePage).
         then(()=>{
           this.currentPage = HomePage;
           });
      }else{
         this.nav.setRoot(LoginPage).
         then(()=>{
           this.currentPage = LoginPage;
           });
      }
      StatusBar.styleBlackOpaque();
      Splashscreen.hide();
    });
  }

  ngOnInit(): void {
    this.pages = [
      {
        icon: 'home',
        title: 'Home',
        component: HomePage
      },
      {
        icon: 'hand',
        title: 'Location',
        component: OtherPage
      }
    ];
  }

  openMenu() {
     this.menuCtrl.open();
  }

  openPage(page) {
    this.menuCtrl.close();
    this.loginService.setNextPage(page.component);
    if (this.currentPage !== page.component) {
      if (!!this.isAuthenticated()){
        this.nav.setRoot(page.component)
        .then(() => {
          this.currentPage = page.component;
        })
        .catch((error) => {
          this.nav.push(LoginPage, {
            redirect: page.component
          });
        });
      }else{
        this.nav.setRoot(LoginPage)
          .then(() => {
            this.currentPage = LoginPage;
          })
      }
    }
  }

  login(): void {
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }

  logout(): void {
    this.menuCtrl.close();
    this.loginService.setNextPage(HomePage);
    this.loginService.setLogged(false);
    this.nav.setRoot(LoginPage);
  }

  isAuthenticated(): boolean {
    if (this.loginService.isLogged()) {
      return true;
    } else {
      return false;
    }
  }
}
