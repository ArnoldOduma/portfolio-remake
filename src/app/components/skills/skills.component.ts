import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  loading = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000); 
  }

}
