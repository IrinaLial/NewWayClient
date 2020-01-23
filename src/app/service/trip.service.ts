import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResponseTripDTO} from '../dto/trips/response.trip.dto';
import {environment} from '../../environments/environment';

@Injectable()
export class TripService {

  constructor(private http: HttpClient) {
  }

  public findAll(page: number): Observable<ResponseTripDTO> {
    return this.http.get<ResponseTripDTO>(`${environment.api}trips/all?page=${page}`);
  }


}
