import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'alert',
  template:`
    <div mat-dialog-content class="ask">
      <p>add to cart?</p>
      <div>
        <button mat-button (click)="add()" mat-dialog-close>yes</button>
        <button mat-button mat-dialog-close>no</button>
      </div>
    </div>
  `,
  styles:[
    `.ask{
      display: block;
      text-align: center;
      p{
        text-transform: capitalize;
        font-family: Verdana;
      }
     div{
       button{
         font-family: "Andale Mono";
         text-transform: capitalize;
         margin: .5rem;
       }
       button:nth-child(1){
         background: green;
       }
       button:nth-child(2){
         background: red;
       }
     }
    }`
  ]
})

export class AlertComponent{

  @Output()
  yes = new EventEmitter<boolean>();

  add(){
    this.yes.emit();
  }

}
