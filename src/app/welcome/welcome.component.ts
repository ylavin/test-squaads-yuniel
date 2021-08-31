import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  acceder(url: string) {
    this.navigateTo(url);
  }

  public navigateTo(url: string) {
    this.router.navigate([url]);
  }

}
