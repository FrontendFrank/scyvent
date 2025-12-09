import { Routes } from '@angular/router';
import {BoardComponent} from "./components/board/board.component";
import {MainComponent} from "./main/main.component";
export const routes: Routes = [
	{ path: 'board', component: BoardComponent },
	{ path: '', component: MainComponent }
];
