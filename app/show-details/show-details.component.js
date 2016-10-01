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
var router_1 = require('@angular/router');
var show_service_1 = require('../services/show.service');
var ShowDetailsComponent = (function () {
    function ShowDetailsComponent(showService, route) {
        this.showService = showService;
        this.route = route;
    }
    ShowDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this.showService.getShows()
                .subscribe(function (shows) { return _this.shows = shows; }, function () {
            }, function () {
                _this.show = _this.shows.filter(function (s) { return s.imdbID === id; })[0];
                console.log(_this.show);
            });
        });
    };
    ShowDetailsComponent = __decorate([
        core_1.Component({
            selector: 'show-details',
            templateUrl: 'app/show-details/show-details.component.html',
            styleUrls: ['app/show-details/show-details.component.css']
        }), 
        __metadata('design:paramtypes', [show_service_1.ShowService, router_1.ActivatedRoute])
    ], ShowDetailsComponent);
    return ShowDetailsComponent;
}());
exports.ShowDetailsComponent = ShowDetailsComponent;
//# sourceMappingURL=show-details.component.js.map