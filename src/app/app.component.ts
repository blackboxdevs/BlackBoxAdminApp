import { Component } from '@angular/core';
import {SessionService} from "./services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'adminapp';

	constructor(
		private sessionService: SessionService,
		private router: Router
	) {
		sessionService.hasActiveSession();
	}
}
