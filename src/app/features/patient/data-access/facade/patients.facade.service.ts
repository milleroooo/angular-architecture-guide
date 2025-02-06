/**ANGULAR*/
import { Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { Subject, tap } from 'rxjs';
import { filter } from 'rxjs/operators';

/**SERVICES*/
import { PatientsInfrastructureService } from '../infrastructure/patients.infrastructure.service';

/**UTILS*/
import { PatientDto } from '../../util/interfaces/patient.interface';
import { mapPatientsToModel } from '../../util/functions/customer.mapper';

@Injectable({ providedIn: 'root' })
export class PatientsFacadeService {
    private readonly _patients$ = new Subject<PatientDto[]>();
    public readonly patients$ = this._patients$
        .asObservable()
        .pipe(filter((patients: PatientDto[]) => !!patients));

    constructor(private readonly infrastructureService: PatientsInfrastructureService) {}

    /**✅  Return void if we dont need to impact at results
           Retrun a Observable<PatientDto> if we need to impact at results
    */
    findAll(): void {
        this.infrastructureService
            .findAll()
            .pipe(
                tap((patients: PatientDto[]) => {
                    this._patients$.next(mapPatientsToModel(patients));
                }),
            )
            .subscribe();
    }
}
