import { Route } from '@angular/router';

import { DashboardChartComponent } from './index';
import { InitUtilsService } from '../../../service/init-utils.service';

export const DashboardChartRoutes: Route[] = [
    {
        path: "dashboard",
        component: DashboardChartComponent,
        canActivate:[
            InitUtilsService
        ]
    }
]