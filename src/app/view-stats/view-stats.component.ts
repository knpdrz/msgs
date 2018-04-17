import { Component, OnInit } from '@angular/core';
import {StatsServiceService} from '../services/stats-service.service'
import {StatEntry} from '../../../../models/StatEntry'


@Component({
  selector: 'app-view-stats',
  templateUrl: './view-stats.component.html',
  styleUrls: ['./view-stats.component.css']
})
export class ViewStatsComponent implements OnInit {
  private stats: StatEntry[] = [];
  public isDataReady: boolean = false;
  //constructor(private statsServ: StatsServiceService) { }

  ngOnInit() {
    //this.loadStats();
    this.setMockStats();
  } 

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales:{
      yAxes:[{
        scaleLabel:{
        display:true,
        labelString:'Number of messages'
      }}],
      xAxes:[{
        scaleLabel:{
        display:true,
        labelString:'Hour'
      }}],
    },
    title:{
      display:true,
      text:'Messages with Ziu per hour',
      fontSize:16
    }
  };
  public barChartLabels:string[] = 
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  public barChartLabel:string = "hehe";

  public barChartDataset:any[] =[
   {data:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    label:'hehe'}];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  public setMockStats(){
    let hours = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
    let msgs = [24610, 11200, 4445, 1278, 653, 264, 51, 364, 2392, 3885, 2885, 3006, 5370, 4843, 6314, 4213, 5849, 5590, 8080, 13741, 21573, 32417, 42209, 40576];
    
    let clone = JSON.parse(JSON.stringify(this.barChartDataset));
    clone[0].data = msgs;
    clone[0].label = "with P";
    this.barChartDataset = clone;

    this.isDataReady = true;
    console.log("data ready!");

  }

 /* public loadStats(){
    //get all stats from server and update the stats property
    this.statsServ.getAllStats().subscribe(
      response => {
        this.stats = response.sort((n1,n2)=>n1._id.hour-n2._id.hour);
        
        this.setData();
      });
   }*/

  private setData(){
    let hours = this.stats.map(a => a._id.hour+"");
    this.barChartLabels = hours;
    console.log(hours);

    let msgs = this.stats.map(a => a.count);
    console.log(msgs);

    let clone = JSON.parse(JSON.stringify(this.barChartDataset));
    clone[0].data = msgs;
    clone[0].label = "with P";
    this.barChartDataset = clone;

    this.isDataReady = true;
    console.log("data ready!");
  }
  
 //todo unused
  public randomize():void {
     // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartDataset));
    clone[0].data = data;
    this.barChartDataset = data;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
