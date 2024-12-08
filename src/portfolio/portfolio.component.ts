import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  @ViewChild('layer') layer!: ElementRef;
  @ViewChildren('picture') picture!: QueryList<ElementRef>;

  imgSrc: string = '';

 
  showPic(imgSrc: string) {
    this.imgSrc = imgSrc;
    this.layer.nativeElement.classList.remove('d-none');
  }


  closeLayer(event: MouseEvent) {
    if (event.target === this.layer.nativeElement) {
      this.layer.nativeElement.classList.add('d-none');
      this.imgSrc = '';
    }
  }
}
