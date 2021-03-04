import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  constructor() {
   
  }

  @Input() notesArray: any;
  @Input() isTrash: any;
  @Input() isUnArchive: any;

  ngOnInit(): void {
   
  }   
}
