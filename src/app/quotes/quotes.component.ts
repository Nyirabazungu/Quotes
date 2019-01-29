import { Component, OnInit } from '@angular/core';
import {Quotes } from "../quotes";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title="Quotes"
 constructor() {}
    quotes = [
        new Quotes(
          1,
         
          "Only I can change my life.no one can do it for me.",
          "AUTHOR : CAROL Burnett",
          "Submitted By : Valentino",
          0,
          0,
          new Date(2019,2,28)
        ),
         new Quotes(
            2,
            "It always seems impossible until It is done",
            "AUTHOR : NELSON Mandela",
            "Submitted By : Valentino",
            0,
            0,
            new Date(2019,2,28)
     
          ),
    new Quotes(
            3,
            "If your dreams do not scare you,they are not big enough",
            "AUTHOR : ELLEN Johnson Sirleaf",
            "Submitted By : Valentino",
            0,
            0,  
            new Date (2019,2,28)
          ),
  
    ]
    
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
   
   }
    toogleDetail(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
   
    deleteQuotes(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
          
          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }
 
  
ngOnInit() {
}
}

  
  

