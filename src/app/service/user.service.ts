import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseUserDTO} from "../dto/users/response.user.dto";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService{
  constructor (private http: HttpClient){

  }
  public findAll(page:number):Observable<ResponseUserDTO>{
    return this.http.get<ResponseUserDTO>(`${environment.api}/findAll?page=${page}`)
  }
}
