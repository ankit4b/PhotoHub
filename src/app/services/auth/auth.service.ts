import { Injectable } from '@angular/core';
import { account, ID } from '../../../lib/appwrite';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedInUser = new BehaviorSubject<any>(null);

  constructor(private router: Router) {}

  async getUser() {
    const status = await account.get();
    this.loggedInUser.next(status);
    console.log('loggedInUser : ', this.loggedInUser);
  }

  async login(email: string, password: string) {
    console.log('inside login');
    await account.createEmailPasswordSession(email, password);
    const status = await account.get();
    this.loggedInUser.next(status);
    console.log('loggedInUser : ', this.loggedInUser);
    this.router.navigateByUrl('');
  }

  async register(email: string, password: string, name: string) {
    console.log('inside register');
    await account.create(ID.unique(), email, password, name);
    this.login(email, password);
  }

  async logout() {
    await account.deleteSession('current');
    this.loggedInUser.next(null);
  }
}
