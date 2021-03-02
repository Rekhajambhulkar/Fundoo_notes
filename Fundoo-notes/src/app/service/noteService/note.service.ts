import { Injectable } from '@angular/core';
import { HttpServiceService } from '../httpService/http-service.service'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpService: HttpServiceService) {

  }

  getNotes() {
    return this.httpService.get('notes/getNotesList')
  }

  createNote(data: any) {
    return this.httpService.post('notes/addNotes', data);

  }

  archiveNotes() {
    return this.httpService.get('notes/getArchiveNotesList')
  }

  archive(data: any){
    return this.httpService.post('notes/archiveNotes', data)
  }
  
}
