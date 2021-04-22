import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { HttpJWTAuthenticationService } from '../service/http-jwt-authentication.service';
import { HttpBasicAuthenticationService } from '../service/httpBasic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= ""
  password= ""
  errorMessage = "Invalid Credentials .!"

  invalidLogin = false

  constructor(private router: Router, private authService: HardcodedAuthenticationService,
    private basicAuthService: HttpBasicAuthenticationService,
    private jwtAuthService: HttpJWTAuthenticationService,
    public loginSuccessMessage:string) {}

  ngOnInit(): void {

  }

  // handleLogin() {

  //   if(this.basicAuthService.(this.username, this.password)) {
  //       this.invalidLogin = false
  //       this.router.navigate(["welcome", this.username])

  //   } else {
  //       this.invalidLogin = true
  //   }
  // }

  handleBasicAuthLogin() {
    console.log(`Sending JWT Auth with creds ${this.username} and  ${this.password}`)
    this.jwtAuthService.executeJWTAuthService(this.username, this.password)
    .subscribe(
      response => {
        console.log(`Auth Response ${response.message}`)
        this.invalidLogin = false
        this.router.navigate(["welcome", this.username])
      },
      error => {
        console.log("Auth Error Response " + error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuthLogin() {
    console.log(`Sending Auth with creds ${this.username} and  ${this.password}`)
    this.jwtAuthService.executeJWTAuthService(this.username, this.password)
    .subscribe(
      response => {
        console.log(`Auth Response ${response.message}`)
        this.invalidLogin = false
        this.router.navigate(["welcome", this.username])
      },
      error => {
        console.log("Auth Error Response " + error)
        this.invalidLogin = true
      }
    )


  }
}
