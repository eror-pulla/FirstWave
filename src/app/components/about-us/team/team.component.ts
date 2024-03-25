import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  members= [
    { 
      id: 1 ,
      name: 'Michal Kosinski',
      position: 'General Manager',
      image: "member1.svg",
    },
    { 
      id: 2 ,
      name: 'Eror Ferizi',
      position: 'Software Developer',
      image: "member2.svg",
    },
    { 
      id: 3 ,
      name: 'Ardit Imeri',
      position: 'UI/UX',
      image: "member3.svg",
    },
    { 
      id: 4 ,
      name: 'Erion Hajdari',
      position: '3D Design',
      image: "member4.svg",
    },
    { 
      id: 5 ,
      name: 'Valdrin Sherifi',
      position: 'Product Design',
      image: "member5.svg",
    },
    { 
      id: 6 ,
      name: 'John Doe',
      position: 'Project Manager',
      image: "member6.svg",
    },

  ]

}
