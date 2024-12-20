import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CarlistComponent } from './components/carlist/carlist.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarlistComponent,CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carsales-nosql1';
}
