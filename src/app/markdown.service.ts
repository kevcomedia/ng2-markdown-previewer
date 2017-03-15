import { Injectable } from '@angular/core';
import * as marked from 'marked';

marked.setOptions({
  gfm: true
});

@Injectable()
export class MarkdownService {
  render(markdownCode: string): string {
    return marked(markdownCode);
  }
}
