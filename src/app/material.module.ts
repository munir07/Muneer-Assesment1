import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';


const MODULES = [
    MatToolbarModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FlexLayoutModule, MatCardModule, MatIconModule, MatRadioModule,
    MatMomentDateModule, MatDatepickerModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }