import { Routes, RouterModule } from '@angular/router';

import { ShowsComponent } from '../shows/shows.component';
import { FinishedShowsComponent } from '../finished-shows/finished-shows.component';
import { ShowDetailsComponent } from '../show-details/show-details.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/shows',
		pathMatch: 'full'
	},
	{
		path: 'shows',
		component: ShowsComponent
	},
	{
		path: 'finished',
		component: FinishedShowsComponent
	},
	{
		path: 'details/:id',
		component: ShowDetailsComponent
	}
];

export const routing = RouterModule.forRoot(appRoutes);
export const routedComponents = [ShowsComponent, FinishedShowsComponent];
