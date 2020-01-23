import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseCarDTO} from "../dto/cars/response.car.dto";
import {environment} from "../../environments/environment";

@Injectable()
export class CarService{

  constructor(private http: HttpClient) {
  }

  public findAll(page: number): Observable<ResponseCarDTO> {
    return this.http.get<ResponseCarDTO>(`${environment.api}cars/findAll?page=${page}`);
  }
}
