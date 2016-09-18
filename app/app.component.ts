import { Component,ViewChild } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    @ViewChild('form') public form;

    public submitted = false;

    public person = {
        firstName: "",
        lastName: "",
        age: 0,
        address: "",
        suburb: "",
        state: "",
        country: ""
    };

    public personProperties = {
        firstName: {
            required: true
        },
        lastName: {
            required: true
        },
        address: {
            required: true,
            type: "string",
            large: true
        },
        suburb: {
            required: true
        },
        state: {
            required: true
        },
        country: {
            required: true
        }

    };

    public saveDetails() {
        this.submitted = true;
        var data = <any>new FormData(this.form.nativeElement);
        console.log({
                firstName: data.get('firstName'),
                lastName: data.get('lastName'),
                address: {
                    street: data.get('address'),
                    suburb: data.get('suburb'),
                    state: data.get('state'),
                    country: data.get('country')
                }
        });
    }

}