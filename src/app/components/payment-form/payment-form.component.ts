import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormDropdown } from 'src/app/shared/interface/form-dropdown';
import { User } from 'src/app/shared/model/user';
import { MessengerService } from 'src/app/shared/service/messenger.service';
import { NigerianstatesService } from 'src/app/shared/service/nigerianstates.service';
import { PaymentService } from 'src/app/shared/service/payment.service';
import { BottomSheetComponent } from '../bottom-sheet/bottom-sheet.component';


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent implements OnInit {
  @Output() serverResponseFromModal = new EventEmitter<object>();
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  serverResponse!: Object;
  errorMsg: any;
  hasSendingDataError = false;
  state: any;
  lgaList: any;

  // test
  testMsg:any;
  lgaExist = true;

  constructor(
    public dialogRef: MatDialogRef<PaymentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User, private _formBuilder: FormBuilder, private _paymentSvc: PaymentService, private _messengerSvc: MessengerService, private _bottomSheet: MatBottomSheet, private _nigerianStateSvc: NigerianstatesService) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      clientNameCtrl: ['', Validators.required],
      clientGenderCtrl: ['', Validators.required],
      clientEmailCtrl: ['', [Validators.required, Validators.email]],
      clientPhoneCtrl: ['', Validators.required],
      clientBvnCtrl: ['', Validators.required],
      clientStateCtrl: ['', Validators.required],
      clientLgaCtrl: ['', Validators.required],
      clientEmploymentStatusCtrl: ['', Validators.required],
      clientMonthlyIncomeCtrl: ['', Validators.required],
      clientDOBCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      clientAddressCtrl: ['', Validators.required],
      residentialStatusCtrl: ['', Validators.required],
      dateMovedInCtrl: ['', Validators.required],
      employmentStatusCtrl: ['', Validators.required],
      educationLevelCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      employerNameCtrl: ['', Validators.required],
      employerSectorCtrl: ['', Validators.required],
      officeAddressCtrl: ['', Validators.required],
      employmentStartDateCtrl: ['', Validators.required],
      workEmailCtrl: ['', [Validators.required, Validators.email]]
    });


    /* list of states */
    this.state = this._nigerianStateSvc.getStates();
  }


  /* list of lga from each state */
  onSelectState(event: any) {
    // console.log(this.state)
    this.state.forEach((state: any) => {
      if (state.name === event.value) {
        // console.log(state.lga);
        if (state.lga) {
          this.lgaList = state.lga
          this.lgaExist = true;
        } else {
          // console.log("no lga for the selected state");
          this.testMsg = "no lga for the selected state";
          this.lgaExist = false;
        }
      }
    });
    // console.log(event.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitForm() {
    const data = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value, this.thirdFormGroup.value);
    console.log(data);
    this._paymentSvc.getRequest(data).subscribe((response: any) => {
      console.log(response)
      if (response) {
        this.serverResponse = response;
        this.serverResponseFromModal.emit(this.serverResponse);
        this.dialogRef.close();
        this._paymentSvc.paymentDataSent = true;
        this._messengerSvc.sendMsg(this._paymentSvc.paymentDataSent)
      }
    },
      (error: any) => {
        this.errorMsg = error
        this._paymentSvc.hasSendingDataError = true
        console.log(error);
        if (this._paymentSvc.hasSendingDataError) {
          this._messengerSvc.sendErrorMsg(error);
          console.log(typeof (error))
          this.openBottomSheet();
          console.log(this._paymentSvc.hasSendingDataError);
        }
      })
  }


  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  gender: FormDropdown[] = [
    { value: 'male-0', viewValue: 'Male' },
    { value: 'female-1', viewValue: 'Female' }
  ];
  lga: FormDropdown[] = [
    { value: 'ikeja-0', viewValue: 'Ikeja' },
    { value: 'agege-1', viewValue: 'Agege' },
    { value: 'Idumota-2', viewValue: 'Idumota' }
  ];
  employmentStatus: FormDropdown[] = [
    { value: 'employed-0', viewValue: 'Employed' },
    { value: 'selfEmployed-1', viewValue: 'Self-Employed' }
  ];
  residentialStatus: FormDropdown[] = [
    { value: 'owner-0', viewValue: 'Owner' },
    { value: 'renting-1', viewValue: 'Renting' }
  ];
  maritalStatus: FormDropdown[] = [
    { value: 'single-0', viewValue: 'Single' },
    { value: 'married-1', viewValue: 'Married' }
  ];
  educationLevel: FormDropdown[] = [
    { value: 'primary-0', viewValue: 'Primary' },
    { value: 'secondary-1', viewValue: 'Secondary' },
    { value: 'graduate-1', viewValue: 'Graduate' }
  ];
  employerSector: FormDropdown[] = [
    { value: 'finance-0', viewValue: 'Finance' },
    { value: 'banking-1', viewValue: 'Banking' },
    { value: 'charity-1', viewValue: 'Charity' }
  ];
}