import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) {}
  ngOnInit(): void {
    document.getElementById("Home")?.addEventListener("click",()=>{
      this.router.navigate(['/Card',"1"]);
    })
    document.getElementById("HomeImg")?.addEventListener("click",()=>{
      this.router.navigate(['/Card',"1"]);
    })
    document.getElementById("Category")?.addEventListener("click",()=>{
      this.router.navigate(['/category']);
    })
  }



}
