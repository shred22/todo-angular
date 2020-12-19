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
  customMessage: string

  constructor(private activatedRoute: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params['name']
  }

  getWelcomeMessage() {
    this.welcomeDataService.executeHelloService(this.username).subscribe(
      response => this.handleSuccessfulResponse(response.message)
    )
  }

  handleSuccessfulResponse(response) {
    console.log(response)
    this.customMessage = response
  }

}
