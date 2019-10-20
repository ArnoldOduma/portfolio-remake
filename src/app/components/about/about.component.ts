import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.loading = false;
    }, 1000)
  }

}
