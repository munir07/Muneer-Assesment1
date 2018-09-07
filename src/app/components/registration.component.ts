import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../post.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  todaysDate:Date;
  minDate:Date = new Date(1900, 1, 1);
  userData:User;

  constructor(private route:Router, private userSvc:UserService) { }

  ngOnInit() {
    this.todaysDate = new Date();
  }

  processForm(theForm: NgForm) {
    this.userData = theForm.value;

    this.userSvc.addUser(this.userData)
      .subscribe((data:any)=>{
        console.log("post successful => ", data);
      });
    theForm.resetForm();
    this.route.navigate(['/Thanks',this.userData.name, this.userData.gender])
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
