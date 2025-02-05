import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-patient-settings',
    templateUrl: './patient-settings.component.html',
    styleUrls: ['./patient-settings.component.css'],
    standalone: true,
    imports: [MaterialModule],
})
export class PatientSettingsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
