import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'list',
  template:`
    <div mat-dialog-container>
     <div class="orders">
       <h1>your orders</h1>
       <b *ngFor="let i of data.res">
         {{i + ' $'}}
       </b>
     </div>
    </div>
  `,
  styles: [`
    ::ng-deep  .mat-dialog-container{
      width: 100%;
    }
    .orders{
      display: flex;
      align-items: center;
      justify-content: start;
      flex-direction: column;
      h1{
        text-transform: capitalize;
        font-family: Verdana;
      }
      b{
        margin-top: 2rem;
      }

    }
  `]
})

export class PurchasedComponent{
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {res : number[]}
  ) {
  }

}
