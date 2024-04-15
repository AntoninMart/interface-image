import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconsComponent } from './icons/icons.component';
// import { CrudComponent } from 'src/app/client/components/crud/crud.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'icons', data: { breadcrumb: 'Prime Icons' }, component: IconsComponent },
        // { path: 'icons', component: CrudComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
