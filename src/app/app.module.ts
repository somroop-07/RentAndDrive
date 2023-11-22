import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddcarComponent } from './admin/addcar/addcar.component';
import { EditbookingComponent } from './admin/editbooking/editbooking.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddvehicleComponent } from './owner/addvehicle/addvehicle.component';
import { FillDetailsComponent } from './owner/fill-details/fill-details.component';
import { CheckoptionsComponent } from './users/checkoptions/checkoptions.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { ChoiceComponent } from './choice/choice.component';
import { BookingsComponent } from './booking/bookings/bookings.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddcarComponent,
    EditbookingComponent,
    AddvehicleComponent,
    FillDetailsComponent,
    CheckoptionsComponent,
    RegistrationComponent,
    HeaderComponent,
    ChoiceComponent,
    BookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
