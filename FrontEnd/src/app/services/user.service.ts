import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { 
}
addUsers(user: User)
{
  let users = [];
  if(localStorage.getItem('Users'))
  {
    users = JSON.parse(localStorage.getItem('Users') as string);
    users = [user, ...users];
  }
  else
  {
    users = [user];
  }
  console.log(users);
  localStorage.setItem('Users',JSON.stringify(users));
} 

}
