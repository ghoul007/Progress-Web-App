import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker'
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  title = 'app';
  update: Boolean = false;
  constructor(update: SwUpdate, private data:DataService) {
    update.available.subscribe(event => {
      // this.update = true;

      update.activateUpdate().then(() => document.location.reload())
    })
  }


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.data.getUsers().subscribe(res=>{
    this.users = res;
  })
  
}

}
