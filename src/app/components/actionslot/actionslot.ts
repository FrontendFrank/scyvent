import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {Workerrow} from "./workerrow/workerrow";

@Component({
  selector: 'actionslot',
	imports: [
		MatCard,
		MatCardContent,
		MatCardTitle,
		MatIcon,
		Workerrow
	],
  templateUrl: './actionslot.html',
  styleUrl: './actionslot.scss',
})
export class Actionslot {

}
