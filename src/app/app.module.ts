import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiPatientHeaderComponent } from './features/patient/views/ui/ui-patient-header/ui-patient-header.component';
import { UiPatientFooterComponent } from './features/patient/views/ui/ui-patient-footer/ui-patient-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent,
        UiPatientHeaderComponent,
        UiPatientFooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
