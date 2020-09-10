import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invests: User[];

  constructor() {
    const usuario1: User = {
      uid: 1,
      name: 'tefa',
      age: 2,
      email: 'ejar@'
    };
    const usuario2: User = {
      uid: 2,
      name: 'yeison',
      age: 2,
      email: 'yeisonm@'
    };
    const usuario3: User = {
      uid: 3,
      name: 'ruebn',
      age: 2,
      email: 'rubeng@'
    };
    const usuario4 : User = {
      uid: 4,
      name: 'jhonfer',
      age: 2,
      email: 'jhonfer@'
    };

    this.invests = [usuario1, usuario2, usuario3];
  }
  getInvests(){
    return this.invests;
  }
}
