import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent {

  constructor(private router: Router) { }

  onClick() {
    this.router.navigate([``])
  }
}
