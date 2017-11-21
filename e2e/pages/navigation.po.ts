import { browser, element, by } from 'protractor';

export class NavigationView {

	/***** Home *****/
	homeComponentNavLink = element(by.id('home-nav-link'));

	get_homeComponentNavLinkText() {
		return this.homeComponentNavLink.getText();
	}

	get_homeComponentNavLink() {
		return this.homeComponentNavLink;
	}

	/***** Navigation *****/
	navlinkComponentNavItem = element(by.id('navlink-components-nav-item'));
	navlinkComponentNavLink = element(by.id('navlink-components-nav-link'));

	get_navlinkComponentNavItem() {
		return this.navlinkComponentNavItem;
	}

	get_navlinkComponentNavLink() {
		return this.navlinkComponentNavLink;
	}

	get_navlinkComponentNavLinkText() {
	return this.navlinkComponentNavLink.getText();
	}

	/***** MultiPopover *****/
	multiPopoverComponentNavItem = element(by.id('multi-popover-nav-item'));
	multiPopoverComponentNavLink = element(by.id('multi-popover-nav-link'));

	get_multiPopoverComponentNavItem() {
		return this.multiPopoverComponentNavItem;
	}

	get_multiPopoverComponentNavLink() {
		return this.multiPopoverComponentNavLink;
	}

	get_multiPopoverComponentNavLinkText() {
		return this.multiPopoverComponentNavLink.getText();
	}

	clickOn_multiPopoverRoute() {
		this.multiPopoverComponentNavLink.click();
	}

	/***** Messages *****/
	messageComponentNavItem = element(by.id('message-component-nav-item'));
	messageComponentNavLink = element(by.id('message-component-nav-link'));

	get_messageComponentNavItem() {
		return this.messageComponentNavItem;
	}

	get_messageComponentNavLink() {
		return this.messageComponentNavLink;
	}

	get_messageComponentNavLinkText() {
		return this.messageComponentNavLink.getText();
	}

	/***** Utilities *****/
	capitalizeComponentNavItem = element(by.id('capitalize-component-nav-item'));
	capitalizeComponentNavLink = element(by.id('capitalize-component-nav-link'));

	get_capitalizeComponentNavItem() {
		return this.capitalizeComponentNavItem;
	}

	get_capitalizeComponentNavLink() {
		return this.capitalizeComponentNavLink;
	}

	get_capitalizeComponentNavLinkText() {
		return this.capitalizeComponentNavLink.getText();
	}

	clickOn_capitalizeRoute() {
		this.capitalizeComponentNavLink.click();

	}

	/***** Modals *****/
	modalComponentNavItem = element(by.id('modal-nav-item'));
	modalComponentNavLink = element(by.id('modal-nav-link'));

	get_modalComponentNavItem() {
		return this.modalComponentNavItem;
	}

	get_modalComponentNavLink() {
		return this.modalComponentNavLink;
	}

	get_modalComponentNavLinkText() {
		return this.modalComponentNavLink.getText();
	}

	clickOn_modalRoute() {
		this.modalComponentNavLink.click();
	}


}
