import { Component, OnInit } from '@angular/core';
import { ActiveUrlService } from '../../services/active-url.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  active !: any;

  constructor(private activeUrl : ActiveUrlService){}

  ngOnInit(): void {
    this.activeUrl.activeFilter.subscribe(value => this.active = value);
  }

}
