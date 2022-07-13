import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

function sumar(a: number, b: number): number {
  return a + b;
}
sumar(2, 3);
const sumar2 = function (a: number, b: number): number {
  return a + b;
};
sumar2(5, 6);

const sumar3 = (a: number, b: number): number => {
  return a + b;
};
sumar3(7, 8);

const sumar4 = (a: number, b: number): number => a + b;
