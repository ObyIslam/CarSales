import { Component,Input, output } from '@angular/core';
import { CarApiService } from '../../services/car-api.service';
import { ICar } from '../../interfaces/car';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})

export class CarComponent {
  @Input() carData?:ICar;
  carImageWidth:number = 300;

  constructor(private _carAPIService:CarApiService){}

  @Output() carDeletedEvent = new EventEmitter<string>()

  deleteCar(carId: string | undefined) { 
    if (carId !== undefined) {
      this._carAPIService.delCarDetails(carId).subscribe(result => {
        console.log(result);
      });
    }
    this.carDeletedEvent.emit("car got deleted");
  }
}
