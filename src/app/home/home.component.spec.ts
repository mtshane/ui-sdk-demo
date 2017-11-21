/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { KgContentFooterService } from '@kion/kg-library-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [
				CUSTOM_ELEMENTS_SCHEMA
			],
			declarations: [
				HomeComponent
			],
			providers: [
				KgContentFooterService
			],
			imports: [
				RouterTestingModule
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});



	describe('Sanity check', ()=> {
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});

	describe('Layout', ()=> {
		let el;

		beforeEach(() => {
			fixture.detectChanges();
		});

		it('should have a view component', () => {
			el = fixture.debugElement.queryAll(By.css('app-root view-main'));
			expect(el).toBeTruthy;
		});

		it('should have a header component', () => {
			el = fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content-header'));
			expect(el).toBeTruthy;
		});

		it('should have a content component', () => {
			el = fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content'));
			expect(el).toBeTruthy;
		});

		it('should have a footer component', () => {
			el = fixture.debugElement.queryAll(By.css('app-root view-main .container-fluid.page .main-wrap .main app-content-footer'));
			expect(el).toBeTruthy;
		});
	});

	// describe('Message component', ()=> {
	// 	let el;
	//
	// 	beforeEach(() => {
	// 		fixture.detectChanges();
	// 	});
	//
	// 	it('should have a message component', () => {
	// 		el = fixture.debugElement.queryAll(By.css('message'));
	// 		expect(el).toBeTruthy;
	// 	});
	//
	// 	it('should not have contents', () => {
	// 		el = fixture.debugElement.queryAll(By.css('message'));
	// 		expect(el.textContent).toBeFalsy();
	// 	});
	//
	// 	it('should not be in an error state', () => {
	// 		el = fixture.debugElement.queryAll(By.css('message div.alert.alert-danger'));
	// 		expect(el.textContent).toBeFalsy();
	// 	});
	//
	// 	it('should not be in a success state', () => {
	// 		el = fixture.debugElement.queryAll(By.css('message div.alert.alert-success'));
	// 		expect(el.textContent).toBeFalsy();
	// 	});
	// });
});
