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
var ShowIndexComponent = (function () {
    function ShowIndexComponent(showService) {
        this.showService = showService;
        this.searchedShows = [];
        this.overlayEnabled = false;
    }
    ShowIndexComponent.prototype.getShows = function () {
        var _this = this;
        return this.showService.getShows()
            .subscribe((function (shows) { return _this.allShows = shows; }), function () {
        }, function () {
            _this.currentShows = _this.allShows.filter(function (show) { return show.UserType === "current"; });
            _this.nextShows = _this.allShows.filter(function (show) { return show.UserType === "next"; });
        });
    };
    ShowIndexComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    ShowIndexComponent.prototype.openOverlay = function (event) {
        this.overlayEnabled = true;
        this.overlaySearchBox.nativeElement.focus();
    };
    ShowIndexComponent.prototype.closeOverlay = function (event) {
        this.overlayEnabled = false;
    };
    ShowIndexComponent.prototype.handleOverlayKeyDown = function (event) {
        if (event.which === 27) {
            this.closeOverlay(null);
        }
    };
    ShowIndexComponent.prototype.handleOnInputChange = function (text) {
        var _this = this;
        var result = [];
        var result2 = [];
        this.showService.getShows()
            .subscribe((function (shows) { return _this.allShows = shows; }), function () {
        }, function () {
            _this.searchedShows = _this.allShows.filter(function (show) { return show.Title.toLowerCase().indexOf(text.toLowerCase()) !== -1; });
        });
        console.log(this.searchedShows);
    };
    __decorate([
        core_1.ViewChild('overlaySearchBox'), 
        __metadata('design:type', Object)
    ], ShowIndexComponent.prototype, "overlaySearchBox", void 0);
    ShowIndexComponent = __decorate([
        core_1.Component({
            selector: 'show-index',
            templateUrl: 'app/show-index/show-index.component.html',
            styleUrls: ['app/show-index/show-index.component.css']
        }), 
        __metadata('design:paramtypes', [show_service_1.ShowService])
    ], ShowIndexComponent);
    return ShowIndexComponent;
}());
exports.ShowIndexComponent = ShowIndexComponent;
//# sourceMappingURL=show-index.component.js.map