/**ANGULAR*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**MATERIAL*/
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTableModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatListModule,
        MatPaginatorModule,
        MatAutocompleteModule,
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTableModule,
        MatSnackBarModule,
        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatPaginatorModule,
        MatAutocompleteModule,
    ],
})
export class MaterialModule {}
