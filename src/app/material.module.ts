import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

const MODULES = [
    MatToolbarModule, MatInputModule, MatFormFieldModule, MatButtonModule,
    FlexLayoutModule, MatCardModule, MatIconModule, MatRadioModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})

export class MaterialModule { }