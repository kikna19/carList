import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CarsService{

  CARS_URL = 'https://vpic.nhtsa.dot.gov/api//vehicles/GetModelsForMake/';

  constructor(
    private http: HttpClient
  ) {
  }


  getCars(model:string){
   return this.http.get(`${this.CARS_URL}${model}?format=json`)
  }

}
