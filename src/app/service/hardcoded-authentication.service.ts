import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    //console.log('before '+ this.isUserLoggedIn());
    if(username==="Bipin"&& password==='1111'){
      sessionStorage.setItem('authenticaterUser',username);
      //console.log('After '+ this.isUserLoggedIn());
      return true;
    }
    return false;
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
