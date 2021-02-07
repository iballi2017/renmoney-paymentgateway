import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/shared/model/user';
import { PaymentService } from 'src/app/shared/service/payment.service';

@Component({
  selector: 'app-form-response-modal',
  templateUrl: './form-response-modal.component.html',
  styleUrls: ['./form-response-modal.component.scss']
})
export class FormResponseModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormResponseModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
}
