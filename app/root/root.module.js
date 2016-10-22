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
var http_1 = require('@angular/http');
var root_component_1 = require('./root.component');
var show_index_component_1 = require('../show-index/show-index.component');
var show_list_component_1 = require('../show-list/show-list.component');
var nav_component_1 = require('../nav/nav.component');
var finished_shows_component_1 = require('../finished-shows/finished-shows.component');
var show_details_component_1 = require('../show-details/show-details.component');
var show_component_1 = require('../show/show.component');
var search_overlay_component_1 = require('../search-overlay/search-overlay.component');
var root_routing_1 = require('./root.routing');
var show_service_1 = require('../services/show.service');
var RootModule = (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                root_routing_1.routing
            ],
            declarations: [
                root_component_1.RootComponent,
                show_index_component_1.ShowIndexComponent,
                show_list_component_1.ShowListComponent,
                nav_component_1.NavComponent,
                finished_shows_component_1.FinishedShowsComponent,
                show_details_component_1.ShowDetailsComponent,
                show_component_1.ShowComponent,
                search_overlay_component_1.SearchOverlayComponent,
                root_routing_1.routedComponents
            ],
            providers: [
                show_service_1.ShowService
            ],
            bootstrap: [root_component_1.RootComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RootModule);
    return RootModule;
}());
exports.RootModule = RootModule;
//# sourceMappingURL=root.module.js.map