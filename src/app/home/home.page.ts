import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  private stuff$ = of(true).pipe(delay(1000));

  constructor() {}

  onClick() {
    console.log('clicked');
  }
}
