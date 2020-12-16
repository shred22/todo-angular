import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = "Shreyas"
  password= "password"
  errorMessage = "Invalid Credentials .!"
  invalidLogin = false

  constructor(private router: Router, private authService: HardcodedAuthenticationService) {}

  ngOnInit(): void {
    console.log('on init')
  }

  handleLogin() {

    if(this.authService.authenticate(this.username, this.password)) {
        this.invalidLogin = false
        this.router.navigate(["welcome", this.username])
        
    } else {
        this.invalidLogin = true
    }
  }

}
