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
var show_service_1 = require('../services/show.service');
var FinishedShowsComponent = (function () {
    function FinishedShowsComponent(showService) {
        this.showService = showService;
    }
    FinishedShowsComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    FinishedShowsComponent.prototype.getShows = function () {
        var _this = this;
        return this.showService.getShows()
            .subscribe(function (shows) { return _this.finishedShows =
            shows.filter(function (s) { return s.UserType === 'finished'; }); });
    };
    FinishedShowsComponent = __decorate([
        core_1.Component({
            selector: 'finished-shows',
            templateUrl: 'app/finished-shows/finished-shows.component.html',
            styleUrls: ['app/finished-shows/finished-shows.component.css']
        }), 
        __metadata('design:paramtypes', [show_service_1.ShowService])
    ], FinishedShowsComponent);
    return FinishedShowsComponent;
}());
exports.FinishedShowsComponent = FinishedShowsComponent;
//# sourceMappingURL=finished-shows.component.js.map