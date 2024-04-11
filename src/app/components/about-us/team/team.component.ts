import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  @Input() members: any;

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
