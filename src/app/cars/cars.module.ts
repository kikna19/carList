import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {CarsService} from "./service/cars.service";
import {CarsComponent} from "./components/cars.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Store} from "../store";
import {AlertComponent} from "./components/alert/alert.component";
import {MatDialogModule} from "@angular/material/dialog";
import {PurchasedComponent} from "./components/purchased/purchased.component";

@NgModule({
  declarations: [
    CarsComponent,
    AlertComponent,
    PurchasedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [
    CarsComponent
  ],
  providers: [
    CarsService,
    Store
  ]

})
export class CarsModule{

}
