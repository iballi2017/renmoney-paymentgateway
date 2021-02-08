import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { PaymentService } from 'src/app/shared/service/payment.service';


@Component({
  selector: 'main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit, OnChanges,AfterContentChecked {
checked = true;
  constructor(private _paymentSvc: PaymentService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  	// console.log("ngOnChangesade")
  }
  ngAfterContentChecked(): void{
  	// if(this.checked){
  	// 	console.log(this._paymentSvc._url);
  	// }
  	// if(!this.checked){
  	// 	this._paymentSvc._url = '';
  	// 	console.log(this._paymentSvc._url);
  	// }
  }

}
// 