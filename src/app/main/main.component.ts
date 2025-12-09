import { Component } from '@angular/core';
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatSidenavModule} from '@angular/material/sidenav';
import {RouterOutlet} from "@angular/router";
import {Actionslot} from "../components/actionslot/actionslot";
@Component({
  selector: 'app-main',
	imports: [
		MatDrawerContainer,
		MatDrawer,
		MatDrawerContent,
		RouterOutlet,
		Actionslot
	],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
