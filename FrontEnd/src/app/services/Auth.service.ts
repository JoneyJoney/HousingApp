import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any)
{
  let userarray = [];
  if(localStorage.getItem('Users'))
  {
    console.log(user);
    userarray = JSON.parse(localStorage.getItem('Users'));
    console.log(userarray);

  }
  return userarray.find(p => p.username === user.propname && p.password === user.proppassword);
}

}
