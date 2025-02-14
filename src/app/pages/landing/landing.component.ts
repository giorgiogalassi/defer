import { Component } from "@angular/core";

@Component({
  selector: "app-landing",
  template: `
    <section class="title">
      <h1><span>&#64;defer</span> demo!</h1>
    </section>
  `,
  styles: `
    .title {
      text-align: center;

      margin-top: 32px;

      & h1 {
        font-size: 3.125rem;
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
      }

      & span {
        color: var(--primary);
        font-family: "Roboto Mono", monospace;
      }
    }
  `,
})
export default class LandingComponent {}
