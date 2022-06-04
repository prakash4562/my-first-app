import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
  .online{
    background: blanchedalmond;
  }`]
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

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
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

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green'
  }

}
