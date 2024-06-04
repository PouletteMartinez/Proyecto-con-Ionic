import { Component, Input } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';
import { List } from '../../interfaces/list.interface';

register();

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() listImgs?: List[];
  @Input() delay?: number;
  @Input() message?: string;
  @Input() disbaledBtn?: boolean;
  
  constructor(private router: Router) {}

  cambia(): void  {
    this.router.navigate(['./home/layout']);
  }

}
