import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule],
})
export class MaterialModule { }
