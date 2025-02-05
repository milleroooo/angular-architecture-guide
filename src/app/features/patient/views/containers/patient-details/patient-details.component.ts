import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-patient-details',
    templateUrl: './patient-details.component.html',
    styleUrls: ['./patient-details.component.css'],
    standalone: true,
    imports: [MaterialModule],
})
export class PatientDetailsComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
