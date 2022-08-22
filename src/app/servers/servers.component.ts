import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs';


@Component({
    selector: '[app-servers]',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
    styles: [`
        .fifthLog {
            color: white;
        }
    `]
})
export class ServersComponent implements OnInit {
    allowNewServer = false;
    serverCreationStatus = 'No server created!';
    serverName = 'TestServer';
    serverCreated = false;
    servers = ['TestServer1', 'TestServer2'];
    
    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit(): void {
    }

    onCreateServer () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `The server name: ${this.serverName}, is created!`;
    }

    onUpdateServerName (event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    username = '';

    showPassword = false;
    logs = [];

    onToggleDetails(event: Event) {
        this.showPassword = !this.showPassword;
        this.logs.push(this.logs.length + 1);
    }
}
