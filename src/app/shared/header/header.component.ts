import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, style, animate, transition, state, group } from '@angular/animations';
import {HeaderServiceService} from "../service/header-service.service";
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger(
        'enterAnimation', [
          transition(':enter', [
            style({ height: '0', overflow: 'hidden'}),
            animate('100ms ease-out', style({height: '278px'}))
          ]),
          transition(':leave', [
            style({ height: '278px', overflow: 'hidden' }),
            animate('100ms ease-in', style({height: '0'}))
          ])
        ]
    )
  ]
})

export class HeaderComponent implements OnInit {
  path = '';
  navigations;
  showDropdawnUser;
  langs = [
    {title: 'English', key: 'en'},
    {title: 'Français', key: 'fr'},
    {title: 'Português', key: 'pr'},
    {title: 'Español', key: 'es'},
    {title: 'русский', key: 'ru'},
    {title: 'عربى', key: 'ab'},
    {title: '日本語', key: 'jp'},
    {title: '한국어', key: 'kr'},
    {title: '中文', key: 'ch'},
  ];

  selectedLang = 'EN';
  showLangLarge;



  constructor(public translate: TranslateService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private headerServiceService:HeaderServiceService,
    private userservice: UserService
  ) {


    router.events.subscribe((val) => {
      console.log(location.path());

      this.path = location.path();
    });

  }
  user;
  ngOnInit() {
    this.user = this.headerServiceService.getUser();
  }

  changeLang(lang){
    this.translate.use(lang);
    this.showLangLarge = false;
    this.selectedLang = lang.toUpperCase();
  }

  go(name){
    this.showDropdawnUser = false;
    this.navigations = false;
    this.router.navigate([name]);
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

}
