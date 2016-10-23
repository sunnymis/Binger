import { Routes, RouterModule } from '@angular/router';

import { ShowIndexComponent } from '../show-index/show-index.component';
import { FinishedShowsComponent } from '../finished-shows/finished-shows.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';
import { LandingComponent } from '../landing/landing.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/shows',
		pathMatch: 'full'
	},
	{
		path: 'shows',
		component: ShowIndexComponent
	},
	{
		path: 'finished',
		component: FinishedShowsComponent
	},
	{
		path: 'landing',
		component: LandingComponent
	},
	{
		path: 'details/:id',
		component: ShowDetailsComponent
	}
];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [ShowIndexComponent, FinishedShowsComponent];
