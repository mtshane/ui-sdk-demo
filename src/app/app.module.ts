/***** Angular modules *****/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


/***** Basic app components *****/
import { AppComponent } from './app.component';
import { RoutesModule } from './app-routes';

/***** Layouts *****/
import { LayoutMainComponent } from './layouts/main/main.component';
import { LayoutBasicComponent } from './layouts/basic/basic.component';

/***** Import ui-sdk *****/
import { KgModule } from '@kion/kg-library-angular';

// Utilities must be imported separately and then added to declarations below

/***** Misc imports *****/
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@blox/material'; // Material Design adaptors
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';

@NgModule({
    exports: [
        // CDK
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        ScrollDispatchModule,
        CdkStepperModule,
        CdkTableModule,

        // Material
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatNativeDateModule,
    ]
})
export class NGMaterialModule {}

/***** Misc app pages *****/
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { AlertWizardComponent } from './alert-wizard/alert-wizard.component';



@NgModule({
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	],
	declarations: [
		// App
		AppComponent,

		// Layouts
		LayoutMainComponent,
		LayoutBasicComponent,

		// Misc app pages
		PageNotFoundComponent,
		ForbiddenComponent,
		HomeComponent,
        AlertWizardComponent
	],
	imports: [
		// Angular Imports
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,

		// UI SDK
		KgModule.forRoot(),

		// Misc Imports
		BrowserAnimationsModule,
        NGMaterialModule,
		MaterialModule,

		// Routes (Keep as last module loaded)
		RoutesModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [AppComponent]
})
export class AppModule { }
