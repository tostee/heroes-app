import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(messaje: string) {
    this.messages.push(messaje);
  }

  clear(): void {
    this.messages = [];
  }
}
