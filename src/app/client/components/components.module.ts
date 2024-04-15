import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ComponentsRoutingModule } from './components-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        InputTextModule,
        CardModule
    ],
    declarations: []
})
export class ComponentsModule { }
