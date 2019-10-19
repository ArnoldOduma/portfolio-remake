import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  year;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private af: FirebaseService
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.getDate();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  getDate() {
    const date = new Date();
    this.year = date.getFullYear();
  }

  onSubmit() {
    const { name, email, message } = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    const formRequest = { name, email, message, date, html };

    // this.af.database.list('/messages').push(formRequest);
    this.af.createMessage(formRequest);
    this.form.reset();

  }
  
}
