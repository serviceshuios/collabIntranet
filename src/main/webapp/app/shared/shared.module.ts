import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CollabIntranetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [CollabIntranetSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [CollabIntranetSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CollabIntranetSharedModule {
  static forRoot() {
    return {
      ngModule: CollabIntranetSharedModule
    };
  }
}
