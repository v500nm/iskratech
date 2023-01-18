import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  ngOnInit(): void {
    
    // var swiper = new Swiper('.blog-slider', {
    //   spaceBetween: 30,
    //   effect: 'fade',
    //   loop: true,
    //   mousewheel: {
    //     invert: false,
    //   },
    //   // autoHeight: true,
    //   pagination: {
    //     el: '.blog-slider__pagination',
    //     clickable: true,
    //   }
    // });
  }
}
