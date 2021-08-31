import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {    this.items = [];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ligas',
        icon: 'pi pi-globe',
        command: () => {
          this.navigateTo('leagues')
        }
      },
      {
        label: 'Equipos',
        icon: 'pi pi-users',
        command: () => {
          this.navigateTo('teams')
        }
      },
      {
        label: 'Jugadores',
        icon: 'pi pi-user',
        command: () => {
          this.navigateTo('players')
        }
      }
    ];
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

public goToHome(){
    this.navigateTo('home');
}
}
