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

  delete(){
    return this.httpService.get('notes/getTrashNotesList')
  }

  deleteNotes(data: any){
    return this.httpService.post('notes/trashNotes', data)

  }

  deleteForeverNotes(data: any){
    return this.httpService.post('notes/deleteForeverNotes', data)

  }

  updateNote(data:any){
    return this.httpService.post('notes/updateNotes',data)
   }

   changeNoteColor(data: any){
     return this.httpService.post('notes/changesColorNotes', data)
   }
}
