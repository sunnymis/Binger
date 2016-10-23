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
var show_1 = require('../models/show');
var ShowComponent = (function () {
    function ShowComponent() {
        this.hoverModeEmitter = new core_1.EventEmitter();
    }
    ShowComponent.prototype.ngOnInit = function () {
    };
    ShowComponent.prototype.onFullDetailsClick = function (event) {
        event.stopPropagation();
        this.fullDetailsToggle = !this.fullDetailsToggle;
        this.hoverModeEmitter.emit(this.fullDetailsToggle);
    };
    ShowComponent.prototype.handleOnMouseOver = function (event) {
        if (this.hoverable && this.fullDetailsEnabled) {
            this.fullDetailsToggle = true;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', show_1.Show)
    ], ShowComponent.prototype, "show", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShowComponent.prototype, "fullDetailsEnabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ShowComponent.prototype, "hoverable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ShowComponent.prototype, "hoverModeEmitter", void 0);
    ShowComponent = __decorate([
        core_1.Component({
            selector: 'show-component',
            templateUrl: 'app/show/show.component.html',
            styleUrls: ['app/show/show.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;
//# sourceMappingURL=show.component.js.map