import { Component, OnInit } from '@angular/core';
 interface Product {
  imageUrl: string;
  subtitle: string;
  text: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[
    {
      imageUrl: 'product1.svg',
      subtitle: 'Sophisticated Business Rules ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      imageUrl: 'product2.svg',
      subtitle: 'Pre-Configured Out-of-the',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      imageUrl: 'product3.svg',
      subtitle: 'Massively Scalable',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      imageUrl: 'product4.svg',
      subtitle: 'Visible Operational Impact',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      imageUrl: 'product5.svg',
      subtitle: 'Automated Health Live',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
    {
      imageUrl: 'product6.svg',
      subtitle: 'Customizable Alert Escalation ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
