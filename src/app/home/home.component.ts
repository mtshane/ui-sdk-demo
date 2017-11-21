import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { KgContentFooterService } from '@kion/kg-library-angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
	constructor(private kgContentFooterService: KgContentFooterService) { }

	ngOnInit() {
		this.kgContentFooterService.showFooter();
	}

}
