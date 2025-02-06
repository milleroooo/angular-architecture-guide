/**ANGULAR*/
import { Injectable } from '@angular/core';

/**DEPENDENCIES*/
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UnsubscriberService {
    private readonly _destroy$ = new Subject<void>();
    public readonly destroy$ = this._destroy$.asObservable();

    public ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
