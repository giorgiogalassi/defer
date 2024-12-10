import { NgStyle } from "@angular/common";
import { Component, model, OnInit } from "@angular/core";

import UserComponent from "../user/user.component";

@Component({
  imports: [NgStyle, UserComponent],
  selector: "app-sidebar",
  styleUrls: ["./sidebar.component.scss"],
  template: `
    <section
      [class.close]="status()"
      [ngStyle]="{
        'box-shadow': status() ? 'none' : '1px 0px 30px 0px #eeeeeeff',
      }"
    >
      <ul>
        @for (voice of menu; track $index) {
          <li (click)="close()">
            <span class="material-symbols-outlined">{{ voice.icon }}</span>
            <p>{{ voice.label }}</p>
          </li>
        }
      </ul>

      @defer (on viewport; hydrate never) {
        <app-user
          [user]="{
            name: 'Giorgio',
            surname: 'Galassi',
            workTitle: 'Senior Frotnend Engenieer',
            companyName: 'Onpier',
          }"
        />
      } @placeholder (minimum 1s) {
        <p>Loading...</p>
      }
    </section>
  `,
})
export default class SidebarComponent implements OnInit {
  status = model<boolean>(true);

  menu = [
    {
      icon: "home",
      label: "Home",
    },
    {
      icon: "more",
      label: "About",
    },
    {
      icon: "settings",
      label: "Settings",
    },
    {
      icon: "logout",
      label: "Logout",
    },
  ];

  ngOnInit(): void {
    if (this.status()) setTimeout(() => this.status.set(false), 200);
  }

  close() {
    this.status.set(true);
  }
}
