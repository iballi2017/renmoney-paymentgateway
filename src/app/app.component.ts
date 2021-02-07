import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { FormResponseModalComponent } from './components/form-response-modal/form-response-modal.component';
import { MessengerService } from './shared/service/messenger.service';
import { PaymentService } from './shared/service/payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ren money payment gateway';
  dataSummited: any;
  hasDataSentError: any;
   constructor(public dialog: MatDialog, private _messengerSvc: MessengerService, private _bottomSheet: MatBottomSheet, private _paymentSvc: PaymentService){}
  ngOnInit(){
    // this.openBottomSheet();
    this._messengerSvc.getMsg().subscribe((data:any)=>{
      this.dataSummited = data
      // console.log(this.dataSummited);
      if(this.dataSummited){
        this.openDialog();
      }
    })

    // received message to trigger bottom sheet
    // this._messengerSvc.getErrorMsg().subscribe((data:any)=>{
    //   this.hasDataSentError = data
    //   if(this.hasDataSentError){
    //     this.openBottomSheet();
    //   }
    // })


    this._paymentSvc.getCountries().subscribe(response=>console.log(response));
  }

  
  openDialog(): void {
    const dialogRef = this.dialog.open(FormResponseModalComponent, {
      width: '100vw',
      maxWidth: "384px",
      height: 'auto',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
