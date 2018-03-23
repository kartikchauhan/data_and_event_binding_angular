import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
    newServerName = '';
    newServerDescription = '';

    @Output() createServer = new EventEmitter();

    onServerAdd()
    {
        this.createServer.emit({name: this.newServerName, description: this.newServerDescription});
    }
}
