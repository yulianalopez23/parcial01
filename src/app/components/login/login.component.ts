import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../models/user';
import { Respuesta } from '../../models/respuesta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent implements OnInit {

  public user: User;
  public message: String;
  public messagefalse: String;
  public contador = 0;

  constructor(
    private _userService: UserService
  ) { 
    this.user = new User(
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      true
    );
    this.message ='';
    this.messagefalse = '';
  }

  ngOnInit(): void {
  }

  ngSubmit(){
    var response = this._userService.loginUsuario(this.user);
    if(response.state){
      this.message = response.message;
      this.messagefalse = '';
    }else{
      this.messagefalse = response.message;
      this.message = '';
    }   
  }
  ngRegister(){
    var response = this._userService.registrarUsuario(this.user);
    if(response.state){
      this.message = response.message;
      this.messagefalse = '';
    }else{
      this.messagefalse = response.message;
      this.message = '';
    }
  }
  

}
