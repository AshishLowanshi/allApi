import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';
import { NgbPaginationModule, NgbAlertModule , NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ApiIntegrationComponent
  ],
  imports: [
    BrowserModule,HttpClientModule ,BrowserAnimationsModule, ToastrModule.forRoot(),ReactiveFormsModule,NgbPaginationModule, NgbAlertModule ,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
