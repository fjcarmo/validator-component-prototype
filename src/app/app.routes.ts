import { Routes } from '@angular/router';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { GroupComponent } from './group/group.component';

export const routes: Routes = [
    {
        path: '',
        component: GroupComponent
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
