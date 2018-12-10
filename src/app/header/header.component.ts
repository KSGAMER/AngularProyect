import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../guards/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@Output() featureSelected = new EventEmitter<string>();
  constructor(private authService: AuthService, private route: Router) { }

 // onSelect(feature: string){
   // this.featureSelected.emit(feature);
  //}

  ngOnInit() {
  }

  log() {
    if(this.authService.isloggedIn == false) {
      this.route.navigate(['/sigin']);
    } else {
      this.authService.isUserLoggedOut();
    }
  }
}
