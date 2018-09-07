import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  processForm(theForm: NgForm) {
    console.log(theForm.value);
    this.route.navigate(['/Thanks'])
  }
}
