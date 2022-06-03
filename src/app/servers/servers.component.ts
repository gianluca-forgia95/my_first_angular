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
  serverCreated = false
  servers = ['testServer', 'testServer 2']
  details = "pw is: 10732oghdfghgc"
  clicks = []
  showDetails = false
  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000 )

  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Server name is: ' + this.serverName
  }
  onUpdateServerName( event: Event) {
    this.userName =  (<HTMLInputElement>event.target).value
  }

  resetString() {
    this.userName = ""
  }

  toggleP(event: Event) {
    this.clicks.push(event.type)
    console.log(this.clicks)
    return this.showDetails = !this.showDetails
  }

}
