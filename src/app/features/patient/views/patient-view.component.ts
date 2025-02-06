/**ANUGLAR*/
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';

/**DEPENDENCIES*/
import { Observable, takeUntil } from 'rxjs';

/**SERVICES*/
import { UnsubscriberService } from 'src/app/shared/services/unsubscriber.service';
import { PatientsFacadeService } from '../data-access/facade/patients.facade.service';

/**UTIL*/
import {
    PATIENT_SUCCESS_MESSAGES,
    PATIENT_ERROR_MESSAGES,
    PATIENT_INFO_MESSAGES,
} from '../util/const/patient-view.messages';
import { PatientStatusEnum } from '../util/enums/patient-status.enum';
import { Patient } from '../util/interfaces/patient.interface';

/**INTERNALS*/
import { PatientDetailsComponent } from './containers/patient-details/patient-details.component';
import { UiPatientHeaderComponent } from './ui/wrappers/ui-patient-header/ui-patient-header.component';
import { UiPatientFooterComponent } from './ui/wrappers/ui-patient-footer/ui-patient-footer.component';
import { PatientFormComponent } from './containers/patient-form/patient-form.component';

/**MATERIAL*/
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.scss'],
    standalone: true,
    imports: [
        MaterialModule,
        CommonModule,
        PatientDetailsComponent,
        PatientFormComponent,
        UiPatientFooterComponent,
        UiPatientHeaderComponent,
    ],
    providers: [PatientsFacadeService, UnsubscriberService],
})
export class PatientViewComponent implements OnInit, AfterViewInit {
    protected arePatientsVisible = false;
    protected arePatientsLoaded = false;
    protected isPatientFormVisible = false;
    protected selectedPatient!: Patient;
    protected patients!: Patient[];

    private readonly successMessages = PATIENT_SUCCESS_MESSAGES;
    private readonly errorMessages = PATIENT_ERROR_MESSAGES;
    private readonly infoMessages = PATIENT_INFO_MESSAGES;

    protected readonly patients$: Observable<Patient[]> = this.patientsFacadeService.patients$;

    constructor(
        private readonly patientsFacadeService: PatientsFacadeService,
        private readonly unsubscriberService: UnsubscriberService,
    ) {}

    /**✅  Life cycle hooks in order they are executed*/
    ngOnInit(): void {
        this.loadPatients();
    }

    ngAfterViewInit(): void {
        this.showViewMessages();
    }

    /**✅  Functions called in template*/
    protected onShowPatients(): void {
        this.arePatientsVisible = !this.arePatientsVisible;
    }

    protected onShowPatientForm(): void {
        this.isPatientFormVisible = !this.isPatientFormVisible;
    }

    protected onShowHealthyPatients(): void {
        if (!this.patients) {
            return;
        }

        this.filterHealthyPatients();
    }

    protected onPatientSelected(selectedPatient: Patient): void {
        this.selectedPatient = selectedPatient;
    }

    /**✅  Internal typescript functions*/
    private loadPatients(): void {
        this.patientsFacadeService.findAll();

        this.patients$
            .pipe(takeUntil(this.unsubscriberService.destroy$))
            .subscribe((patients: Patient[]) => {
                this.patients = patients;
                this.arePatientsLoaded = true;
            });
    }

    private filterHealthyPatients(): void {
        const healthyPatients = this.patients.filter(
            (patient) => patient.status === PatientStatusEnum.HEALTHY,
        );

        this.patients = healthyPatients;
    }

    /**✅ Example massages usage*/
    private showViewMessages(): void {
        console.log(this.successMessages.add);
        console.log(this.errorMessages.actionFailed);
        console.log(this.infoMessages.remove);
    }
}
