import { Component } from '@angular/core';

@Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
})

export class AppComponent {
    servers = [
            {name: "testServer 2", description: "test description 2"}
    ];

    addNewServer($newServer)
    {
        this.servers.push($newServer);
    }
}
