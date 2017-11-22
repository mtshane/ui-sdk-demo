import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import {Validators, FormControl} from '@angular/forms';

@Component({
	selector: 'app-alertwizard',
	templateUrl: './alert-wizard.component.html',
	styleUrls: ['./alert-wizard.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AlertWizardComponent  {

    Title : string;
    Country : string;
    Email : string;

    countries = [
        {value: 'usa-0', viewValue: 'USA'},
        {value: 'china-1', viewValue: 'China'},
        {value: 'india-2', viewValue: 'India'}
    ];

}
