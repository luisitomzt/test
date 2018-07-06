import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  users: Object;
  dtOptions: any = {};

  constructor(private data: DataService, private http: HttpClient) {

   }

  ngOnInit() {

    this.data.getData('').subscribe(
      data => this.users = data
    );
    this.dtOptions = {
      // Declare the use of the extension in the dom parameter
      dom: 'lBfrtip',
      // Configure the buttons
      buttons: [
        'copy',
        'excel'
      ],
      lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']]
    };
  }

    checkData(): Array<string> {
      if (this.users) {
        const keys = new Array;
        for (const i in this.users[0]) {
          if (i) {
            keys.push(i);
          }
        }
        return keys;
      }
    }
    checkDataWithFilter(request): Array<string> {
      const keys = new Array;
      const dato = 'nombre';
        if (this.users) {
          for (const i in this.users[0][request]) {
            if (i) {
              console.log(i);
              keys.push(i);
            }
          }
          return keys;
        }
    }

}
