/**ANGULAR*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'patients',
        loadChildren: () =>
            import('./features/patient/views/patient-view.routes').then((m) => m.PATIENT_ROUTES),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
