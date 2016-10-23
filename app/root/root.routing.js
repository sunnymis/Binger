"use strict";
var router_1 = require('@angular/router');
var show_index_component_1 = require('../show-index/show-index.component');
var finished_shows_component_1 = require('../finished-shows/finished-shows.component');
var show_details_component_1 = require('../show-details/show-details.component');
var landing_component_1 = require('../landing/landing.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/shows',
        pathMatch: 'full'
    },
    {
        path: 'shows',
        component: show_index_component_1.ShowIndexComponent
    },
    {
        path: 'finished',
        component: finished_shows_component_1.FinishedShowsComponent
    },
    {
        path: 'landing',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'details/:id',
        component: show_details_component_1.ShowDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [show_index_component_1.ShowIndexComponent, finished_shows_component_1.FinishedShowsComponent];
//# sourceMappingURL=root.routing.js.map