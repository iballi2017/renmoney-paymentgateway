import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './containers/home/home.component';
import { MaterialModule } from './shared/material/material/material.module';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormResponseModalComponent } from './components/form-response-modal/form-response-modal.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaymentFormComponent,
    FormResponseModalComponent,
    BottomSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
