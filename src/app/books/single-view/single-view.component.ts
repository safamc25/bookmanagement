import { Component, OnInit } from '@angular/core';
import { BookService } from '../bookServices/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit {
  id:any=""
  singleList:any={}
  hoveredStar: number = 0;
  selectedStar: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];
 
 constructor(private bs:BookService,private route:ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe((data:any)=>{
     this.id=data.id
    //  console.log(this.id);

    this.bs.getBook().subscribe((response:any)=>{
      console.log(response);
      
      this.singleList=response.find((i:any)=>i.id==this.id)
      console.log(this.singleList);
      
    })
     
    })
   
  }
 
}
