import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  constructor(public activatedRouted:ActivatedRoute) { }

  ngOnInit() {
    var ejemplo=null
    ejemplo=this.activatedRouted.snapshot.paramMap.get('Category')  
    console.log(ejemplo)
  }

}
