/**ANGULAR*/
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

/**DEPENDENCIES*/
import { debounceTime, takeUntil } from 'rxjs';

/**SERVICES*/
import { UnsubscriberService } from 'src/app/shared/services/unsubscriber.service';

/**MATERIAL*/
import { MaterialModule } from 'src/app/material.module';

@Component({
    selector: 'app-patient-form',
    templateUrl: './patient-form.component.html',
    styleUrls: ['./patient-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, MaterialModule],
})
export class PatientFormComponent implements OnInit {
    protected patientForm!: FormGroup;

    private readonly DEBOUNCE_TIME = 200;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly unsubscriberService: UnsubscriberService,
    ) {}

    ngOnInit(): void {
        this.initForm();
        this.listenToPhoneNumberControl();
        this.logPatientData();
    }

    /**✅ Example submit*/
    protected onSubmit(): void {
        if (this.patientForm.valid) {
            console.log('Patient data:', this.patientForm.value);
        }
    }

    private initForm(): void {
        this.patientForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
            email: ['', [Validators.required, Validators.email]],
            city: ['', Validators.required],
            age: [null, [Validators.required, Validators.min(1)]],
        });
    }

    /**✅ Example of listening to control value changes*/
    private listenToPhoneNumberControl(): void {
        this.phoneNumber?.valueChanges
            .pipe(debounceTime(this.DEBOUNCE_TIME), takeUntil(this.unsubscriberService.destroy$))
            .subscribe((value: string) => {
                console.log('Phone number changes:', value);
            });
    }

    /**✅ Example usage*/
    private logPatientData(): void {
        console.log('firstName:', this.firstName?.value);
        console.log('lastName:', this.lastName?.value);
        console.log('phoneNumber:', this.phoneNumber?.value);
        console.log('email:', this.email?.value);
        console.log('city:', this.city?.value);
        console.log('age:', this.age?.value);
    }

    private get firstName(): AbstractControl | null {
        return this.patientForm.get('firstName');
    }

    private get lastName(): AbstractControl | null {
        return this.patientForm.get('lastName');
    }

    private get phoneNumber() {
        return this.patientForm.get('phoneNumber');
    }

    private get email() {
        return this.patientForm.get('email');
    }

    private get city() {
        return this.patientForm.get('city');
    }

    private get age() {
        return this.patientForm.get('age');
    }
}
