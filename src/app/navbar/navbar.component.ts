import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  toggleSideBar(){
    document.getElementById('sidebar')?.classList.toggle('w-0');
    document.getElementById('sidebar')?.classList.toggle('w-[20rem]');
  }

  ngOnInit(): void {
  }

}
