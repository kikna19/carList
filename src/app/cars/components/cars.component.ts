import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {BehaviorSubject, fromEvent, iif, Observable, of, Subscription} from "rxjs";
import {
  debounceTime,
  distinctUntilChanged, distinctUntilKeyChanged,
  filter, isEmpty, map,
  pluck,
  switchMap,
} from "rxjs/operators";
import {CarsService} from "../service/cars.service";
import {Store} from "../../store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AlertComponent} from "./alert/alert.component";
import {MatDialog} from "@angular/material/dialog";
import {PurchasedComponent} from "./purchased/purchased.component";
import {empty} from "rxjs/internal/Observer";


@Component({
  selector: 'cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.scss'],
})
export class CarsComponent implements OnInit, AfterViewInit {

  carsList: any[] = [];
  carsStore!: any[];
  totalPrice: any = 0;
  carsArr: any[] = [];


  @ViewChild('carsModel', {static: true}) model!: ElementRef;

  constructor(
    private carService: CarsService,
    private store: Store,
    private snackBar: MatDialog
  ) {
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getCars();
  }


  getCars() {
    fromEvent(this.model.nativeElement, 'keyup').pipe(
      debounceTime(2000),
      pluck('target', 'value'),
      distinctUntilChanged(),
      filter((carName: any) => carName.length >= 3),
      switchMap((carName: any) => {
        return this.carService.getCars(carName)
      }),
    ).subscribe((res: any) => {
      this.carsList = res.Results;
    })
  }

  addCarToCart(item: any) {
    const snackBar = this.snackBar.open(AlertComponent);
    snackBar.componentInstance.yes.subscribe(() => {
      this.carsArr.push(item);
      this.store.store.next(this.carsArr);
      this.store.store$.subscribe((res: any) => {
        this.carsStore = Object.values(res);
        this.totalPrice = this.carsStore.map(item => item.Model_ID).reduce((acc, curr) => {
          return acc + curr
        }, 0)
      })
    })
  }

  pay(total: number) {
    this.store.setPay(total);
    this.store.store.next([]);
    this.carsStore = [];
    this.totalPrice = 0;
    this.carsArr = [];
  }

  clear(){
    this.store.store.next([]);
    this.carsStore = [];
    this.totalPrice = 0;
    this.carsArr = [];
  }

  seeList() {
    this.snackBar.open(PurchasedComponent, {
      width: '40rem',
      height: '30rem',
      data: {res: this.store.payed}
    })
  }


}
