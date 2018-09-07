import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  todaysDate:Date;
  minDate:Date = new Date(1900, 1, 1);

  constructor(private route:Router) { }

  ngOnInit() {
    this.todaysDate = new Date();
    console.log(this.todaysDate);
  }

  processForm(theForm: NgForm) {
    console.log(theForm.value);
    this.route.navigate(['/Thanks',"hello", "Male"])
  }

  getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
}
