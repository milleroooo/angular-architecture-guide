/**INTERFACES*/
import { Patient, PatientDto } from '../interfaces/patient.interface';

export function mapPatientToModel(patient: Patient): Patient {
    return {
        ...patient,
    };
}

export function mapPatientsToModel(patientsDto: PatientDto[]): Patient[] {
    return patientsDto.map(mapPatientToModel);
}
