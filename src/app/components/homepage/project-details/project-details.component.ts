import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  paragraphContent: { [key: number]: { title: string, content: string } } = {};
  cardContent: { [key: number]: { cards: { image: string, text: string }[] } } = {};
  activeButton: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.populateParagraphContent();
    this.populateCardContent();
  }
  setActiveButton(buttonNumber: number): void {
    this.activeButton = buttonNumber;
  }
  populateParagraphContent() {
    this.paragraphContent = {
      1: {
        title: "The whole is greater than the sum of the parts. Opmantek offers MSP Software that is designed to scale.",
        content: "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable."
      },
      2: {
        title: "MSP whole is greater than the sum of the parts.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      3: {
        title: " Opmantek offers Enterprise",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      4: {
        title: "SMB designed to scale.",
        content: " Vulputate ut pharetra sit amet aliquam id. Etiam sit amet nisl purus in mollis. Non nisi est sit amet facilisis magna etiam. Nec tincidunt praesent semper feugiat nibh. Metus dictum at tempor commodo ullamcorper a lacus vestibulum."
      }
    };
  }

  populateCardContent() {
    this.cardContent = {
      1: {
        cards: [
          { image: "interface.svg", text: "Get one step closer to self-improvement and personal growth by learning more about yourself" },
          { image: "interface2.svg", text: "Improve your entrepreneurial skills by discovering your business personality traits" },
          { image: "interface3.svg", text: "Share your entrepreneurial personality test results with your friends and see how you all compare" }
        ]
      },
      2: {
        cards: [
          { image: "interface2.svg", text: "Sed viverra tellus in hac. Metus dictum at tempor commodo ullamcorper a." },
          { image: "interface3.svg", text: "Sit amet purus gravida quis blandit turpis. Ultricies lacus sed turpis tincidunt id aliquet risus." },
          { image: "interface.svg", text: "Viverra orci sagittis eu volutpat odio facilisis mauris. Pharetra vel turpis nunc eget lorem dolor sed. " }
        ]
      },
      3: {
        cards: [
          { image: "interface3.svg", text: "Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Morbi blandit cursus risus at ultrices." },
          { image: "interface.svg", text: "Sit amet purus gravida quis blandit turpis. Ultricies lacus sed turpis tincidunt id aliquet risus." },
          { image: "interface2.svg", text: "Enim tortor at auctor urna nunc id cursus. Libero enim sed faucibus turpis in eu." }
        ]
      },
      4: {
        cards: [
          { image: "interface3.svg", text: "Magna fringilla urna porttitor rhoncus dolor purus non. Libero enim sed." },
          { image: "interface2.svg", text: "Eget mi proin sed libero enim sed faucibus turpis. Magna fringilla urna porttitor rhoncus dolor purus non." },
          { image: "interface.svg", text: "Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim." }
        ]
      }
    };
  }
}
