import { Route } from '@angular/router';
import { TemplateComponent } from './index';

import { DashboardRoutes } from './body/dashboard/dashboard.routes';
import { DashboardChartRoutes } from './body/dashboard-chart/dashboard-chart.routes';
import { ListSalesRoutes } from './body/sales/list-sales/list-sales.routes';

export const TemplateRoutes: Route[] = [
    {
        path: "secure",
        component: TemplateComponent,
        children: [
            ...DashboardRoutes,
            ...DashboardChartRoutes,
            ...ListSalesRoutes
        ]
    }
]