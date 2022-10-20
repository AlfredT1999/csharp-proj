import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as ace from "ace-builds";

@Component({
  selector: 'app-ace',
  templateUrl: './ace.component.html',
  styleUrls: ['./ace.component.scss']
})
export class AceComponent implements AfterViewInit {
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;

  constructor() {
    
  }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "20px");
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    
    // Default value:
    aceEditor.session.setValue("// Hi!");
    // Default code editor font:
    aceEditor.setTheme('ace/theme/monokai');
    // Default code editor code:
    aceEditor.session.setMode('ace/mode/csharp');
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });
    aceEditor.session.setOptions({
      autoScrollEditorIntoView: true,
      copyWithEmptySelection: true,
  });
  }
}
