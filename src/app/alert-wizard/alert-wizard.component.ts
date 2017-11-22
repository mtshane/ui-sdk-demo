import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { KgContentFooterService } from '@kion/kg-library-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
	selector: 'app-alertwizard',
	templateUrl: './alert-wizard.component.html',
	styleUrls: ['./alert-wizard.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class AlertWizardComponent implements OnInit {

	isLinear = false;
	firstFormGroup : FormGroup;
	secondFormGroup : FormGroup;
	thirdFormGroup : FormGroup;

	constructor(private _formBuilder: FormBuilder, private kgContentFooterService: KgContentFooterService) { }

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			firstCtrl: ['', Validators.required]
		});
		this.secondFormGroup = this._formBuilder.group({
			secondCtrl: ['', Validators.required]
		});
        this.thirdFormGroup = this._formBuilder.group({        });
		this.kgContentFooterService.showFooter();
	}


}
