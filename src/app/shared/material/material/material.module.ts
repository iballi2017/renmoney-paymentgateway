import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,MatButtonModule,MatDialogModule,MatIconModule,MatStepperModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatBottomSheetModule
  ],
  exports: [
    MatToolbarModule,MatButtonModule,MatDialogModule,MatIconModule,MatStepperModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatBottomSheetModule
  ]
})
export class MaterialModule { }
