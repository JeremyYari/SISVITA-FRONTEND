import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarSimpleComponent } from './component/navbar-simple/navbar-simple.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarSimpleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '241cc431-sigcon-frontend';
}
