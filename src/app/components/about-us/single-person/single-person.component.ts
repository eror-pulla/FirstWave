import { Component, OnInit , Input, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-person',
  templateUrl: './single-person.component.html',
  styleUrls: ['./single-person.component.scss'],  
  encapsulation: ViewEncapsulation.None

})
export class SinglePersonComponent implements OnInit {
  memberId: number | undefined;
  member: any;
  constructor(private route: ActivatedRoute) { }
  members= [
    { 
      id: 1 ,
      name: 'Michal Kosinski',
      position: 'General Manager',
      image: "member1.svg",
      description:"Michal Kosinski is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."
    },
    { 
      id: 2 ,
      name: 'Eror Ferizi',
      position: 'Software Developer',
      image: "member2.svg",
      description:"Eror Ferizi is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."

    },
    { 
      id: 3 ,
      name: 'Ardit Imeri',
      position: 'UI/UX',
      image: "member3.svg",
      description:"Ardit Imeri is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."

    },
    { 
      id: 4 ,
      name: 'Erion Hajdari',
      position: '3D Design',
      image: "member4.svg",
      description:"Erion Hajdari is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."

    },
    { 
      id: 5 ,
      name: 'Valdrin Sherifi',
      position: 'Product Design',
      image: "member5.svg",
      description:"Valdrin Sherifi is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."

    },
    { 
      id: 6 ,
      name: 'John Doe',
      position: 'Project Manager',
      image: "member6.svg",
      description:"John Doe is an Associate Professor in Organizational Behavior at Stanford’s Graduate School of Business and studies job-person fit and humans using cutting-edge computational methods."

    },

  ]
  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.memberId = +params['id'];
      this.member = this.members.find(member => member.id === this.memberId); 
  });
  }

}
