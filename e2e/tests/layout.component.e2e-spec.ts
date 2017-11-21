import { browser } from 'protractor';

import { LayoutComponentView } from '../pages/layout.component.view.po';


describe('Layout View', function() {
	let view: LayoutComponentView = new LayoutComponentView();

	beforeEach(() => {
		view.navigateTo();
	});

	describe('Page element', function (){
		it(`should exist`, () => {
			expect(view.get_viewPage()).toBeTruthy()
		});
	});

	describe('Sidebar', function (){
		it(`should exist`, () => {
			expect(view.get_viewSidebarComponent()).toBeTruthy()
		});

		describe('Sidebar toggler', function (){
			it(`should exist`, () => {
				expect(view.get_viewSidebarToggler()).toBeTruthy()
			});

			it(`should close sidebar on click`, () => {
				// Click the link that should close the sidebar
				view.get_viewSidebarToggler().click();

				// Make sure the sidebar now has the "collapsed" classname
				expect(view.get_viewSidebarWrapCollapsed()).toBeTruthy()

				// Wait for animation to complete
				browser.driver.sleep(1000);

				expect(view.get_SidebarWidth()).toEqual('0px');
			});
		});
	});

	describe('App-level header', function (){
		it(`should exist`, () => {
			expect(view.get_viewAppHeader()).toBeTruthy()
		});
	});

	describe('Content header', function (){
		it(`should exist`, () => {
			expect(view.get_viewContentHeader()).toBeTruthy()
		});
	});

	describe('Content area', function (){
		it(`should exist`, () => {
			expect(view.get_viewContentArea()).toBeTruthy()
		});
	});

	describe('Content footer', function (){
		it(`should exist`, () => {
			expect(view.get_viewContentFooter()).toBeTruthy()
		});
	});


});
