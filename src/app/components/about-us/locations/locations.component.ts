import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  imageUrl: string;
  title: string;
  phone: string;
  email: string;
  location: string;
}

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  
  contacts: ContactInfo[] = [
    {
      imageUrl: 'dallas.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
    {
      imageUrl: 'nyc.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
    {
      imageUrl: 'nyc2.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
    {
      imageUrl: 'nyc3.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
    {
      imageUrl: 'nyc4.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
    {
      imageUrl: 'nyc5.svg',
      title: 'Head Office and USA West Coast',
      phone: '123-456-7890',
      email: 'contact1@example.com',
      location: 'One Harbor Drive, Suite 300, Sausalito, CA, 94965 United States of America'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
