import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'hextile',
	imports: [],
	templateUrl: './hextile.component.html',
	styleUrl: './hextile.component.scss'
})
export class HextileComponent implements OnInit{
	@Input() fi: string = '';
	@Input() terrain: string = '';
	@Input() faction: string = '';
	@Input() river: string = '';
	show:any = {
		bg: true,
		bgfill: "#eeeeee",
		lake: false,
		river_south_east: false,
		river_north_west: false,
		river_south_west: false,
		river_north_east: false,
		river_west: false,
		river_east: false,
		home_outline: true,
		outline: false,
		mountain: false,
		tundra: false,
		forest: false,
		farm: false,
		village: false,
		factory: false,
		tunnel: false,
		encounter: false,
		leader: false,
		worker_1: false,
		worker_2: false,
		worker_3: false,
		worker_4: false,
		worker_5: false,
		worker_6: false,
		worker_7: false,
		worker_8: false,
		wood: false,
		steel: false,
		food: false,
		oil: false,
		mech_1: false,
		mech_2: false,
		mech_3: false,
		mech_4: false,
		airship: false,
		multi_airship: false,
		path_west: false,
		path_east: false,
		path_south_east: false,
		path_north_west: false,
		path_south_west: false,
		path_north_east: false,
	};
	ngOnInit(): void {
		switch (this.terrain) {
			case 'lake': this.show.bgfill = "blue"; break;
			case 'mountain': this.show.bgfill = "grey"; break;
			case 'forest': this.show.bgfill = "green"; break;
			case 'farm': this.show.bgfill = "goldenrod"; break;
			case 'village': this.show.bgfill = "orangered"; break;
			case 'tundra': this.show.bgfill = "cadetblue"; break;
			case 'factory': this.show.bgfill = "lightsteelblue"; break;
		}
		if (this.terrain) {
			this.show[this.terrain] = true;
		}
		if (this.river) {
			const rivers = this.river.split(',');
			for (const river of rivers) {
				this.show[`river_${river}`] = true;
			}
		}
	}
	// show[this.terrain] = true;
}
