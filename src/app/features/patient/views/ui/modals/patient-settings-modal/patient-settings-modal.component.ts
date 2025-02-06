/**ANGULAR*/
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

/**MATERIAL*/
import { MaterialModule } from 'src/app/material.module';

/**INTERNALS*/
import { UiPatientFooterComponent } from '../../wrappers/ui-patient-footer/ui-patient-footer.component';
import { UiPatientHeaderComponent } from '../../wrappers/ui-patient-header/ui-patient-header.component';

@Component({
    selector: 'app-patient-settings-modal',
    templateUrl: './patient-settings-modal.component.html',
    styleUrls: ['./patient-settings-modal.component.scss'],
    standalone: true,
    imports: [MaterialModule, CommonModule, UiPatientFooterComponent, UiPatientHeaderComponent],
})
export class PatientSettingsModalComponent {
    constructor(private readonly dialogRef: MatDialogRef<PatientSettingsModalComponent>) {}

    protected onDialogClose(): void {
        this.dialogRef.close();
    }
}
