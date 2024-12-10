import { Component, signal } from "@angular/core";

@Component({
  selector: "app-event-replay",
  template: `
    <section class="note">
      <p>
        In order to test the <span highlight>EventReplay</span> feature do as
        follows:
      </p>

      <ol>
        <li>
          Be sure that your page is set with
          <span highlight>renderMode: RenderMode.Server</span>
        </li>
        <li>
          Set the network throttle to <span highlight>Regular 4G/LTE</span>
        </li>
        <li>
          <span highlight>click</span> one of the buttons while the page is
          loading
        </li>
      </ol>

      <p>You will see the counter change once the page is fully loaded.</p>
    </section>

    <section class="counter">
      <button (click)="remove()">
        <span class="material-symbols-outlined">remove</span>
      </button>

      {{ value() }}

      <button (click)="add()">
        <span class="material-symbols-outlined">add</span>
      </button>
    </section>
  `,
  styles: `
    .counter {
      display: flex;
      justify-content: center;
      align-items: center;

      gap: 8px;

      margin: 8px;

      & button {
        cursor: pointer;
      }
    }

    .note {
      max-width: 450px;

      border: thick double #32a1ce;
      border-radius: 4px;

      padding: 8px;
      margin: 8px auto;

      & ol,
      li {
        padding: revert;
        margin: revert;
      }

      & span[highlight] {
        font-weight: 400;
        line-height: 2em;
        font-family: "Roboto Mono", monospace;

        background-color: rgb(242, 242, 242);
        border-radius: 4px;

        padding: 2px 4px;
      }
    }
  `,
})
export default class EventReplayComponent {
  value = signal<number>(0);

  add() {
    this.value.update((value) => (value += 1));
  }

  remove() {
    this.value.update((value) => (value -= 1));
  }
}
