import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
import { NotFoundComponent } from './layout/pages/not-found/not-found.component';
import { AddTaskComponent } from './layout/pages/add-task/add-task.component';
import { DetailsComponent } from './layout/pages/details/details.component';

export const routes: Routes = [
    { path:""  , redirectTo: 'home', pathMatch:'full' },
    { path:"home"  , component: HomeComponent ,title:'home' },
    {path:"details/:id", component:DetailsComponent ,title:'details'},
    {path:"details", component:DetailsComponent},
    { path:'add-task', component: AddTaskComponent ,title:'add_task'},
    { path:'**' , component: NotFoundComponent ,title:'not_found'}
];
