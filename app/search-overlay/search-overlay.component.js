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
var SearchOverlayComponent = (function () {
    function SearchOverlayComponent(showService) {
        this.showService = showService;
        this.searchedShows = [];
        this.overlayEnabledEmitter = new core_1.EventEmitter();
        //this.overlaySearchBox.nativeElement.focus();
    }
    SearchOverlayComponent.prototype.getShows = function () {
        var _this = this;
        return this.showService.getShows()
            .subscribe((function (shows) { return _this.allShows = shows; }), function () {
        }, function () {
            _this.currentShows = _this.allShows.filter(function (show) { return show.UserType === "current"; });
            _this.nextShows = _this.allShows.filter(function (show) { return show.UserType === "next"; });
        });
    };
    SearchOverlayComponent.prototype.ngOnInit = function () {
        this.getShows();
    };
    SearchOverlayComponent.prototype.ngOnChanges = function () {
        if (this.overlayEnabled === true) {
            this.overlaySearchBox.nativeElement.focus();
        }
    };
    SearchOverlayComponent.prototype.closeOverlay = function (event) {
        this.overlayEnabledEmitter.emit(false);
    };
    SearchOverlayComponent.prototype.handleOverlayKeyDown = function (event) {
        if (event.which === 27) {
            this.closeOverlay(null);
        }
    };
    SearchOverlayComponent.prototype.handleOnInputChange = function (text) {
        var _this = this;
        var result = [];
        var result2 = [];
        this.showService.getShows()
            .subscribe((function (shows) { return _this.allShows = shows; }), function () {
        }, function () {
            _this.searchedShows = _this.allShows.filter(function (show) { return show.Title.toLowerCase().indexOf(text.toLowerCase()) !== -1; });
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SearchOverlayComponent.prototype, "overlayEnabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchOverlayComponent.prototype, "overlayEnabledEmitter", void 0);
    __decorate([
        core_1.ViewChild('overlaySearchBox'), 
        __metadata('design:type', Object)
    ], SearchOverlayComponent.prototype, "overlaySearchBox", void 0);
    SearchOverlayComponent = __decorate([
        core_1.Component({
            selector: 'search-overlay',
            templateUrl: 'app/search-overlay/search-overlay.component.html',
            styleUrls: ['app/search-overlay/search-overlay.component.css']
        }), 
        __metadata('design:paramtypes', [show_service_1.ShowService])
    ], SearchOverlayComponent);
    return SearchOverlayComponent;
}());
exports.SearchOverlayComponent = SearchOverlayComponent;
//# sourceMappingURL=search-overlay.component.js.map