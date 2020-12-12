import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('on init')
  }

  handleLogin() {
    console.log(this.username)
    console.log(this.password )

    if(this.username === "shreyas" && this.password === "password") {
        this.invalidLogin = false
        this.router.navigate(["welcome", this.username])
        
    } else {
        this.invalidLogin = true
    }
  }

}
