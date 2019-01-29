import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(Delete:boolean){
    this.isComplete.emit(Delete); 
  }
    upvote(){
      this.quote.upvote ++
    }
    downvote(){
      this.quote.downvote --
    }
  

  constructor() { }

  ngOnInit() {
  }

}



