import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HtmlEditorComponent } from './html-editor/html-editor.component';
import { OutputComponent } from './output/output.component';
import { AreaComponent } from './area/area.component';
import { FormsModule } from '@angular/forms';
import { NoSanitizationPipe } from './no-sanitization.pipe'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    HtmlEditorComponent,
    OutputComponent,
    AreaComponent,
    NoSanitizationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
