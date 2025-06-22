import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

export const appRoutes: Routes = [
  { path: '', component: About },
  { path: 'skills', component: Skills },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact }
];
