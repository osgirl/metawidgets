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
var core_1 = require("@angular/core");
var metawidget = require('metawidget');
require('metaboot');
/**
 * Usage: <div [metawidget]="{name: "Damian"}" [config]="{}"></div>
 */
var MetaWidgetDirective = (function () {
    function MetaWidgetDirective(elementRef) {
        this.elementRef = elementRef;
        this.data = {};
        this.config = {};
        this.properties = {};
    }
    MetaWidgetDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.config.inspector = new metawidget.inspector.CompositeInspector([
            new metawidget.inspector.PropertyTypeInspector(),
            function (toInspect, type, names) {
                return {
                    properties: _this.properties
                };
            }
        ]);
        this.mw = new metawidget.Metawidget(this.elementRef.nativeElement, this.config);
        this.mw.toInspect = this.data;
        this.mw.buildWidgets();
    };
    MetaWidgetDirective.prototype.ngOnChanges = function () {
        if (this.mw) {
            this.mw.toInspect = this.data;
            this.mw.buildWidgets();
        }
    };
    __decorate([
        core_1.Input('metawidget'), 
        __metadata('design:type', Object)
    ], MetaWidgetDirective.prototype, "data", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MetaWidgetDirective.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MetaWidgetDirective.prototype, "properties", void 0);
    MetaWidgetDirective = __decorate([
        core_1.Directive({
            selector: '[metawidget]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MetaWidgetDirective);
    return MetaWidgetDirective;
}());
exports.MetaWidgetDirective = MetaWidgetDirective;
//# sourceMappingURL=metawidget.directive.js.map