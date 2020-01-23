import { Component, OnInit } from '@angular/core';
import {CarService} from "../../service/car.service";
import {CarDTO} from "../../dto/cars/car.dto";
import {ResponseCarDTO} from "../../dto/cars/response.car.dto";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDTO[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.findCars();
  }

  findCars() {
    this.carService.findAll(0).subscribe((s: ResponseCarDTO) => {
      this.cars = s.cars
      console.log(s)
    })
  }


}
