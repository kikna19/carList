import {BehaviorSubject} from "rxjs";




export class Store {

  store = new BehaviorSubject<any>([]);
  store$ = this.store.asObservable();
  payed:any[] = [];


  setPay(price: number){
    this.payed = [...this.payed, price];
  }


}
