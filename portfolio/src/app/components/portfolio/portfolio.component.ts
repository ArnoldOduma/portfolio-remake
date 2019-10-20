import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  loading: boolean;
  load = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.loading = false;
    }, 3000);
    setTimeout(() => {
      this.load = false;
      this.loading = true;
    }, 1000);
  }

}
