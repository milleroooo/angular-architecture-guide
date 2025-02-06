/**ENUMS*/
import { PatientStatusEnum } from '../enums/patient-status.enum';

export interface PatientDto {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    city: string;
    age: number;
    status: PatientStatusEnum;
}

export interface Patient {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    city: string;
    age: number;
    status: PatientStatusEnum;
}
