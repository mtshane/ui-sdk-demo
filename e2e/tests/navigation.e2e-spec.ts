import { NavigationView } from '../pages/navigation.po';
import { AppComponentView } from '../pages/app.po';


describe('Navigation', function () {

	let view: AppComponentView = new AppComponentView();
	let navView: NavigationView = new NavigationView();

	beforeEach(() => {
		view.navigateTo();
	});

	// describe('Home Component', function () {
	// 	it(`should have a nav-item element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_siblingComponentNavItem()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_homeComponentNavLink()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element with a text of Home`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_homeComponentNavLinkText()).toBe('Home');
	// 	});
	// });
	//
	// describe('The Navlink Components', function () {
	// 	it(`should have a nav-item element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_navlinkComponentNavItem()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_navlinkComponentNavLink()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element with a "Navlink Components" text`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_navlinkComponentNavLinkText()).toBe('NavLink Components');
	// 	});
	// });
	//
	// describe('The Modal Components', function () {
	// 	it(`should have a nav-item element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_modalComponentNavItem()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_modalComponentNavLink()).toBeTruthy();
	// 	});
	//
	// 	it(`should have a nav-link element with a "Modal Components" text`, () => {
	// 		page.navigateTo();
	// 		expect(page.get_modalComponentNavLinkText()).toBe('Modal Component');
	// 	});
	// });
});
