import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LayoutBasicComponent } from './basic.component';
import { KgModule } from '@kion/kg-library-angular';


describe('LayoutBasicComponent', () => {
	let component: LayoutBasicComponent;
	let fixture: ComponentFixture<LayoutBasicComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutBasicComponent],
			imports: [
				RouterTestingModule,
				KgModule.forRoot()
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutBasicComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
