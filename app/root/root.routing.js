"use strict";
var router_1 = require('@angular/router');
var shows_component_1 = require('../shows/shows.component');
var finished_shows_component_1 = require('../finished-shows/finished-shows.component');
var show_details_component_1 = require('../show-details/show-details.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/shows',
        pathMatch: 'full'
    },
    {
        path: 'shows',
        component: shows_component_1.ShowsComponent
    },
    {
        path: 'finished',
        component: finished_shows_component_1.FinishedShowsComponent
    },
    {
        path: 'details/:id',
        component: show_details_component_1.ShowDetailsComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [shows_component_1.ShowsComponent, finished_shows_component_1.FinishedShowsComponent];
//# sourceMappingURL=root.routing.js.map