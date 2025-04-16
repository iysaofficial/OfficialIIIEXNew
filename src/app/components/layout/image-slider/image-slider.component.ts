import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
  images: string[] = [
    'assets/img/Slider/1.jpg',
    'assets/img/Slider/2.jpg',
    'assets/img/Slider/3.jpg',
    'assets/img/Slider/4.jpg',
    'assets/img/Slider/5.jpg',
    'assets/img/Slider/6.jpg',
    'assets/img/Slider/7.jpg',
    'assets/img/Slider/8.jpg',
    'assets/img/Slider/9.jpg',
    'assets/img/Slider/10.jpg',
  ];
}
