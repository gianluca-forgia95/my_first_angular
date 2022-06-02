import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false
  approveString = false
  serverCreationStatus = 'No server created'
  serverName = ""
  userName = ""

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000 )

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Server name is: ' + this.serverName
  }
  onUpdateServerName( event: Event) {
    this.userName =  (<HTMLInputElement>event.target).value
  }

  resetString() {
    this.userName = ""
  }

}
