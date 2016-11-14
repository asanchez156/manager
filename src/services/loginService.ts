import {Injectable} from "@angular/core";

import { HomePage } from '../pages/home/home';

@Injectable()
export class LoginService {
  private logged : boolean;
  private nextPage : any;

  constructor() {
    this.logged = false;
    this.nextPage = HomePage;
  }

  setLogged(logged) {
    this.logged = logged;
  }

  isLogged() {
    return this.logged;
  }

  setNextPage(nextPage){
    this.nextPage = nextPage;
  }

  getNextPage(){
    return this.nextPage;
  }

}