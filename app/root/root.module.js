"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var root_component_1 = require('./root.component');
var shows_component_1 = require('../shows/shows.component');
var show_list_component_1 = require('../show-list/show-list.component');
var nav_component_1 = require('../nav/nav.component');
var finished_shows_component_1 = require('../finished-shows/finished-shows.component');
var show_details_component_1 = require('../show-details/show-details.component');
var root_routing_1 = require('./root.routing');
var RootModule = (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                root_routing_1.routing
            ],
            declarations: [
                root_component_1.RootComponent,
                shows_component_1.ShowsComponent,
                show_list_component_1.ShowListComponent,
                nav_component_1.NavComponent,
                finished_shows_component_1.FinishedShowsComponent,
                show_details_component_1.ShowDetailsComponent,
                root_routing_1.routedComponents
            ],
            bootstrap: [root_component_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RootModule);
    return RootModule;
}());
exports.RootModule = RootModule;
//# sourceMappingURL=root.module.js.map