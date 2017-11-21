import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LayoutMainComponent } from './main.component';
import { KgModule } from '@kion/kg-library-angular';


describe('LayoutMainComponent', () => {
	let component: LayoutMainComponent;
	let fixture: ComponentFixture<LayoutMainComponent>;
	let de: DebugElement;
	let el: HTMLElement;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutMainComponent],
			imports: [
				RouterTestingModule,
				KgModule.forRoot()
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutMainComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	describe('Sanity check', ()=> {
		it('should create', () => {
			expect(component).toBeTruthy();
		});
	});

	describe('Layout elements', ()=> {
		it('should have a kg-view-main element', () => {
			de = fixture.debugElement.query(By.css('kg-view-main'));
			el = de.nativeElement;
			expect(de).toBeTruthy();
		});

		it('should have a router-outlet', () => {
			de = fixture.debugElement.query(By.css('router-outlet'));
			el = de.nativeElement;
			expect(de).toBeTruthy();
		});
	});
});
