import { Component, OnInit } from '@angular/core';
import {ListService } from '../services/list.service';
import {List} from '../../../../models/List'
@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  private lists: List[] = [];
  constructor(private listServ: ListService) { }

  ngOnInit() {
    //this.loadLists();
  }

  public loadLists(){
    //get all lists from server and update the lists property
    this.listServ.getAllLists().subscribe(
      response => this.lists = response,
    )
  }

  //deleted list is being filtered out using .filter
  public deleteList(list : List){
    this.listServ.deleteList(list._id).subscribe(
      response => this.lists = this.lists.filter(
        lists => lists !== list),
    )
  }

  public onAddList(newList : List){
    this.lists = this.lists.concat(newList);
  }

}
