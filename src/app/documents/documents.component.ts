import { Component } from '@angular/core';
import { Document } from './document';

@Component ({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
    documents: Document[] = [
      {
        title: "My First Doc",
        description: 'kjlkdfgjldkfjgd;lkfgj',
        file_url: 'http://google.com',
        updated_at: '31/07/17',
        image_url: 'http://google.com',
      },
      {
        title: "My Second Doc",
        description: 'kjlkdfgjldkfjgd;lkfgj',
        file_url: 'http://google.com',
        updated_at: '31/07/17',
        image_url: 'http://google.com',
      },
      {
        title: "My Third Doc",
        description: 'kjlkdfgjldkfjgd;lkfgj',
        file_url: 'http://google.com',
        updated_at: '31/07/17',
        image_url: 'http://google.com',
      }
    ]
}
