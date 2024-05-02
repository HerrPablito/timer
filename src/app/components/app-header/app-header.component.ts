import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

constructor(private router: Router, private location: Location) {}


  routeToSettings() {
    this.router.navigate(['/settings']);
  }
  routeToStart() {
    this.router.navigate(['/start']);
  }
  routeToPrevious() {
    this.location.back();
  }
  routeToAbout() {
    this.router.navigate(['/about']);
  }
  routeToContact() {
    this.router.navigate(['/contact']);
  }
}
