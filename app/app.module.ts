import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from "./app.component";
import {MetaWidgetDirective} from "./directives/metawidget.directive";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

@NgModule({
    imports: [ BrowserModule, ReactiveFormsModule, FormsModule ],
    declarations: [ AppComponent, MetaWidgetDirective ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
