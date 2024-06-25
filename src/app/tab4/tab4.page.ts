import { Component, OnInit } from '@angular/core';
import { FireserviceService } from 'src/app/fireservice.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  userDetails: any;

  constructor(private fireService: FireserviceService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.fireService.getUserDetails().subscribe(details => {
      this.userDetails = details;
    }, err => {
      console.log(err);
    });
  }
}