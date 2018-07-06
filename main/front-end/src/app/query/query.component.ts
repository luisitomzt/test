import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { DataService } from '../data.service';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {

  sets: Object;
  dtOptions: any = {};

  constructor(private _userService: UserService, private data: DataService, private route: ActivatedRoute, private location: Location,
     private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
      };
    }

  ngOnInit() {
    this._userService.refreshToken();

    this.getDataset();

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

  getDataset(): void {
    const requieredData = this.route.snapshot.paramMap.get('requieredData');

    this.data.getData('http://localhost:3000/' + requieredData).subscribe(
      data => this.sets = data
    );
  }
  checkData(): Array<string> {
    if (this.sets) {
      const keys = new Array;
      for (const i in this.sets[0]) {
        if (i) {
          keys.push(i);
        }
      }
      return keys;
    }
  }




}
