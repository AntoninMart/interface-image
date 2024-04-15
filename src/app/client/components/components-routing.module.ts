import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrudPdfComponent } from './crud-pdf/crud-pdf.component';
import { PlayComponent } from './play/play.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CrudPdfComponent },
        { path: 'play', component: PlayComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ComponentsRoutingModule { }
