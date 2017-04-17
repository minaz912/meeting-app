import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdGridListModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdGridListModule],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdMenuModule, MdIconModule, MdGridListModule],
})
export class MaterialModule { }
