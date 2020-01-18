import { Component, OnInit } from '@angular/core';
import {TripService} from "../../service/trip.service";
import {ResponseTripDTO} from "../../dto/trips/response.trip.dto";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.findAll(0).subscribe((s: ResponseTripDTO) => {
      console.log(s);
    })
  }

}
