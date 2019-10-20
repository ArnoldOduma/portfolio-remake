import { Component, OnInit, ErrorHandler } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { FirebaseService } from './services/firebase.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  year;
  form: FormGroup;
  message: string;
  loading: boolean;

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
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])],
      message: ['', Validators.required],
    });
  }
  get mail() {
    return this.form.get('email');
  }
  getDate() {
    const date = new Date();
    this.year = date.getFullYear();
  }

  onSubmit() {
    this.message = '';
    if (this.form.invalid) {
      this.message = 'Please fill all the fields correctly';
    } else if (this.mail.invalid) {
      this.message = 'Enter the correct email format';
    } else {
      this.loading = true;
      const { name, email, message } = this.form.value;
      const dt = new Date();
      const date = dt.toDateString();
      const time = dt.toTimeString(); 
      const html = `
      <div class="mail-cont" style="background: #0097d3;border: 5px solid #F69131;width: 600px;
        max-width: 90%;position: relative;left: 50%;transform: translate(-50%);padding: 10px;">
        <div style=" background: #c0c0c065;border-radius: 5px;padding: 20px;">
          <img src="https://portfolio-937b2.firebaseapp.com/assets/img/logo-1.png" alt="logo" height="50px">
          <div><b>From: </b> ${name}</div>
          <div style="color: #fff;"><b>Email:</b> ${email}</div>
          <div><b>Date: </b> ${date}</div>
          <div><b>Time: </b> ${time}</div>
          <div><b>Message:</b> ${message}</div>
          <a  href="mailto:${email}" style=" margin-top: 10px;display: inline-block;background: #F69131; color: #fff;
          padding: 5px 20px;text-decoration: none;">Reply to ${name} </a>
        </div>
        <div class="f" style="padding: 10px 0;background: black; text-align: center;">
          <a style="color: #fff;" href="https://portfolio-937b2.firebaseapp.com/portfolio">Email sent from Arnold Oduma's Portfolio </a>
        </div>
      </div>
    `;
      const html2 = `
      <div style="background: #0097d3;border: 5px solid #F69131;width: 600px;max-width: 90%;
          position: relative;left: 50%;transform: translate(-50%);padding: 10px;">
        <div style=" background: #c0c0c065;border-radius: 5px;padding: 20px;">
          <img src="https://portfolio-937b2.firebaseapp.com/assets/img/logo-1.png" alt="logo" height="50px">
          <div><b>From: </b> Arnold Oduma</div>
          <div style="color: #fff;"><b>Email:</b> arnoldcliff99@gmail.com</div>
          <div><b>Date: </b> ${date}</div>
          <div><b>Time: </b> ${time}</div>
          <div style="background: #ffffff88;padding: 10px 5px;"> <b>Message:</b>  <br> This is to acknowledge the receipt of your
            message by Arnold. <br> If this was not you please disregard this email</div>
          <a href="mailto:arnoldcliff99@gmail.com" style=" margin-top: 10px;display: inline-block;background: #F69131;padding: 5px 20px;color: #fff;text-decoration: none;">Reply to Arnold </a>
        </div>
        <div class="f" style="padding: 10px 0; background: black; text-align: center;">
          <a href="https://portfolio-937b2.firebaseapp.com/portfolio" style="color: #fff;">Email sent from Arnold Oduma's Portfolio </a>
        </div>
      </div>
    `;
      const formRequest = { name, email, message, date, time, html, html2 };
      this.af.createMessage(formRequest)
        .then(
          (success) => {
            this.message = 'Message sent successfully. I will get back shortly';
            console.log(success);
            this.form.reset();
            this.loading = false;
            setTimeout(() => {
              this.message = '';
            }, 5000)
          }, (err) => {
            this.message = `An error occured , Please Try Again \n ${err.handleError(err)}`;
            this.loading = false;
          }
        );
    }
  }

}
