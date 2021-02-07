import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MessengerService } from 'src/app/shared/service/messenger.service';
import { PaymentService } from 'src/app/shared/service/payment.service';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  errorMsg: string ="Server error occurs. Try again later!";

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, private _messengerSvc: MessengerService, private _paymentSvc: PaymentService) { }

  ngOnInit(): void {
    this._messengerSvc.getErrorMsg().subscribe((msg:any)=>{
      console.log(msg)
      this.errorMsg = msg;

      console.log(this._paymentSvc.hasSendingDataError);
    })
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
