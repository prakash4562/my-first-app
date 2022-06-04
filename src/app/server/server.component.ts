import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit{
  serverId = 12;
  serverStatus = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = '';
  serverCreated = false;

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {

  }

  onServerCreation() {
    this.serverCreated = true
    this.serverCreationStatus = 'Server has been created and it\'s name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
