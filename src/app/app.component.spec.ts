/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Routes} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';

describe('AppComponent', () => {
		let fake_routes: Routes = [
			{ path: '**', component: HomeComponent }
		];
		let fixture: ComponentFixture<AppComponent>;
		let comp: AppComponent;
		let de:	DebugElement;
		let el:	HTMLElement;

		// async beforeEach
		beforeEach(async(() => {
			TestBed.configureTestingModule({
					schemas: [
						CUSTOM_ELEMENTS_SCHEMA
					],
					declarations: [
						AppComponent,
						HomeComponent,
					],
					imports: [
						HttpModule,
						RouterTestingModule.withRoutes(fake_routes)
					],
					providers: [
						RoutesModule
					]
			});
			// WebPack developers need not call compileComponents because it inlines templates and css as part of the
			// automated build process that precedes running the test.
			// .compileComponents(); compile template and css
		}));

		it('should create the app', async(() => {
			fixture = TestBed.createComponent(AppComponent);
			comp = fixture.debugElement.componentInstance;
			expect(comp).toBeTruthy();
		}));
});
