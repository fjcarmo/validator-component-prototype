import { Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

export const routes: Routes = [
    {
        path: '',
        component: BaseComponent
    },
    {
        path: 'firstChild',
        component: FirstChildComponent
    },
    {
        path: 'secondChild',
        component: SecondChildComponent
    }
];
