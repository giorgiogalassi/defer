import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  template: `
    <button type="button" (click)="add()">Add</button>
    {{ count() }}
    <button type="button" (click)="remove()">Remove</button>
  `,
  styles: ``,
})
export default class CounterComponent {
  count = signal<number>(0);

  add() {
    console.log("Adding...");
    this.count.update((v) => (v += 1));
  }

  remove() {
    console.log("Removing...");
    this.count.update((v) => (v -= 1));
  }
}
