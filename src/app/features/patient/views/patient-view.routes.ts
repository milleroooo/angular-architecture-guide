import { Routes } from '@angular/router';
import { PatientViewComponent } from './patient-view.component';
import { PatientSettingsComponent } from './containers/patient-settings/patient-settings.component';
import { PatientDetailsComponent } from './containers/patient-details/patient-details.component';

export const PATIENT_ROUTES: Routes = [
    { path: '', component: PatientViewComponent },
    { path: 'patient-details/:id', component: PatientDetailsComponent },
    { path: 'patient-settings/:id', component: PatientSettingsComponent },
];
