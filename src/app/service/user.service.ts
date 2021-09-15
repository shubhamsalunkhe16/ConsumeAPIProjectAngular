import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  public fetchUser(username: any) {
    return this.http.get('http://localhost:9293/user/' + username);
  }

  public setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      return null;
    }
  }

  public isLanguageEN() {
    let user = this.getUser();
    let userLaguage = user.language;
    if (userLaguage == 'EN') {
      return true;
    } else if (userLaguage == 'DE') {
      return false;
    } else {
      console.log('Error invalid language ');
      return '';
    }
  }
}
