import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css']
})
export class ThanksComponent implements OnInit {

  userName: string;
  userGender: string;
  userTitle: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.name;
    this.userGender = this.activatedRoute.snapshot.params.gender;
    if (this.userGender == "Male") {
      this.userTitle = "Mr";
    } else {
      this.userTitle = "Ms";
    }
    console.log(this.userName);
    console.log(this.userTitle);
  }
}
