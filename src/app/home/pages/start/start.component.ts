import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StartComponent {

  constructor(private router: Router) { }

  onClick(): void {
    this.router.navigate(['./home/home']);
  }

}
