import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

/**
 * @title Toolbar overview
 */
@Component({
	selector: 'topbar',
	templateUrl: 'topbar.component.html',
	styleUrl: 'topbar.component.scss',
	imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class TopbarComponent {}
