import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-services/user.service';
import { User } from 'src/app/services/user-services/models/user';
import { Usr } from './usr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  public us:User={username:'',password:''};
  login(form) {
    console.log(form);
    this.userService.login('fahd','fahd123').subscribe(u=>console.log(u));

  }

}
