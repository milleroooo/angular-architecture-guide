/**ANGULAR*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

/**DEPENDENCIES*/
import { take } from 'rxjs';

/**UTILS*/
import { Patient } from '../../../util/interfaces/patient.interface';

/**MATERIAL*/
import { MaterialModule } from 'src/app/material.module';

/**INTERNALS*/
import { PatientSettingsModalComponent } from '../../ui/modals/patient-settings-modal/patient-settings-modal.component';

@Component({
    selector: 'app-patient-details',
    templateUrl: './patient-details.component.html',
    styleUrls: ['./patient-details.component.scss'],
    standalone: true,
    imports: [MaterialModule, CommonModule],
})
export class PatientDetailsComponent {
    @Input() selectedPatient!: Patient;

    constructor(private readonly matDialog: MatDialog) {}

    protected onOpenPatientSettings(): void {
        const dialogRef = this.matDialog.open(PatientSettingsModalComponent);

        dialogRef.afterClosed().pipe(take(1));
    }
}
