/**ANGULAR*/
import { Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { delay, Observable, of } from 'rxjs';

/**UTILS*/
import { PatientDto } from '../../util/interfaces/patient.interface';
import { PatientStatusEnum } from '../../util/enums/patient-status.enum';

const URL = '/api/patients/';

const MOCK_PATIENTS: PatientDto[] = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Kowalski',
        phoneNumber: '123456789',
        email: 'jan.kowalski@example.com',
        city: 'Warszawa',
        age: 30,
        status: PatientStatusEnum.HEALTHY,
    },
    {
        id: 2,
        firstName: 'Anna',
        lastName: 'Nowak',
        phoneNumber: '987654321',
        email: 'anna.nowak@example.com',
        city: 'Kraków',
        age: 25,
        status: PatientStatusEnum.ILL,
    },
    {
        id: 3,
        firstName: 'Piotr',
        lastName: 'Wiśniewski',
        phoneNumber: '555666777',
        email: 'piotr.wisniewski@example.com',
        city: 'Gdańsk',
        age: 40,
        status: PatientStatusEnum.INFECTED,
    },
    {
        id: 4,
        firstName: 'Katarzyna',
        lastName: 'Lewandowska',
        phoneNumber: '222333444',
        email: 'k.lewandowska@example.com',
        city: 'Wrocław',
        age: 35,
        status: PatientStatusEnum.HEALTHY,
    },
    {
        id: 5,
        firstName: 'Michał',
        lastName: 'Zieliński',
        phoneNumber: '111222333',
        email: 'michal.zielinski@example.com',
        city: 'Poznań',
        age: 28,
        status: PatientStatusEnum.ILL,
    },
];

@Injectable({ providedIn: 'root' })
export class PatientsInfrastructureService {
    findAll(): Observable<PatientDto[]> {
        /**real example*/
        // return this.httpClient.get<Patient[]>(URL);

        /**simulation*/
        return of(MOCK_PATIENTS).pipe(delay(1000));
    }
}
