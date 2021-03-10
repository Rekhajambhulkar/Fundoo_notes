import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { UpdateComponent } from '../update/update/update.component';
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})

export class DisplayNotesComponent implements OnInit {
  open: any = true;
  title: any;
  description: any;
  card = '';

  constructor(public dialog: MatDialog) { }

  @Input() notesArray: any;
  @Input() isTrash: any;
  @Input() isUnArchive: any;
  
  ngOnInit(): void {}   

  openDialog(card: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '550px',
      height:'-10%',
      data: card,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }
}
