import { Component, signal } from '@angular/core';
import { Title } from "../../components/shared/title/title";

@Component({
  selector: 'app-contador',
  imports: [Title],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  count = signal(0);

  increment(){
    this.count.update((n) => n + 1);
  }

  decrement(){
    this.count.update((n) => n - 1);
  }

  reset(){
    this.count.update((n) => n = 0 );
  }
}
