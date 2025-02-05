import { Component, OnInit } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-patient-view',
    templateUrl: './patient-view.component.html',
    styleUrls: ['./patient-view.component.css'],
    standalone: true,
    imports: [MaterialModule],
})
export class PatientViewComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
