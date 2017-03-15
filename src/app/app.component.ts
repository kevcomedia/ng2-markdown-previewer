import { Component } from '@angular/core';
import { MarkdownService } from './markdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MarkdownService]
})
export class AppComponent {
  constructor(private markdownService: MarkdownService) {}

  render(markdownCode: string): string {
    return this.markdownService.render(markdownCode);
  }
}
