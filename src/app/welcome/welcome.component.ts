import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: String = ''

  constructor(private activatedRoute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params['name']
  }

  getWelcomeMessage() {
    console.log(this.welcomeDataService.executeHelloService(this.username).subscribe(
      response => this.handleSuccessfulResponse(response.message)
    ))
    console.log("slkjfklsdjflksdjflksdjflkjd")
  }

  handleSuccessfulResponse(response) {
    console.log(response)
  }

}
