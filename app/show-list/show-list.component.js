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
var ShowListComponent = (function () {
    function ShowListComponent(showService, router) {
        this.showService = showService;
        this.router = router;
    }
    ShowListComponent.prototype.ngOnInit = function () { this.getShows(); };
    ShowListComponent.prototype.getShows = function () {
        var _this = this;
        this.showService.getShows()
            .subscribe(function (shows) { return _this.myShows = shows; }, function (error) { return _this.errorMessage = error; });
    };
    ShowListComponent.prototype.onSelectShow = function (show) {
        this.selectedShow = show;
        // this.router.navigate(['/detail',show.imdbID]);
    };
    ShowListComponent = __decorate([
        core_1.Component({
            selector: 'show-list',
            templateUrl: 'app/show-list/show-list.component.html',
        }), 
        __metadata('design:paramtypes', [show_service_1.ShowService, router_1.Router])
    ], ShowListComponent);
    return ShowListComponent;
}());
exports.ShowListComponent = ShowListComponent;
//# sourceMappingURL=show-list.component.js.map