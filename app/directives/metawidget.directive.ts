import {Directive, ElementRef, Input, OnChanges, AfterContentInit} from "@angular/core";
import * as metawidget from 'metawidget';
import 'metaboot';

/**
 * Usage: <div [metawidget]="{name: "Damian"}" [config]="{}"></div>
 */
@Directive({
    selector: '[metawidget]'
})
export class MetaWidgetDirective implements OnChanges, AfterContentInit {

    mw: any;
    @Input('metawidget') data: any = {};
    @Input() config: any = {};
    @Input() properties = {};

    constructor(public elementRef: ElementRef) {}

    ngAfterContentInit() {

        this.config.inspector = new (<any>metawidget).inspector.CompositeInspector(
            [
                new (<any>metawidget).inspector.PropertyTypeInspector(),
                ( toInspect, type, names ) => {
                    return {
                        properties: this.properties
                    };

                }
            ]
        );

        this.mw = new metawidget.Metawidget(this.elementRef.nativeElement, this.config);
        this.mw.toInspect = this.data;
        this.mw.buildWidgets();
    }

    ngOnChanges() {
        if (this.mw) {
            this.mw.toInspect = this.data;
            this.mw.buildWidgets();
        }
    }

}