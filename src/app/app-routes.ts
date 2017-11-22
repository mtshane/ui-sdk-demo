import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/***** Import page layouts *****/
import { LayoutMainComponent } from './layouts/main/main.component';
import { LayoutBasicComponent } from './layouts/basic/basic.component';

/***** Import page modules *****/
// Error pages
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
// Example component pages
import { HomeComponent } from './home/home.component';
import { AlertWizardComponent } from './alert-wizard/alert-wizard.component';

// Pages with main layout (header, footer, nav, content area)
const routes_layout_main = [
	{ path: '', component: HomeComponent },
	{ path: 'alert-wizard', component: AlertWizardComponent }
];

// Pages with basic layout (no header, footer, or nav)
const routes_layout_basic = [
	/* Error routes */
	{ path: 'forbidden', component: ForbiddenComponent },
	{ path: '**', component: PageNotFoundComponent } // 404.  If all else fails, go here.
];

const routes = [
	{ path: '', component: LayoutMainComponent, children: routes_layout_main },
	{ path: '', component: LayoutBasicComponent, children: routes_layout_basic }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	]
})
export class RoutesModule { }
