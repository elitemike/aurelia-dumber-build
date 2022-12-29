import { customElement, inlineView } from 'aurelia-framework';

const template = require('./someMarkup.html');

@inlineView(template)
@customElement('some-markup')
export class SomeMarkup {
  public myValue = "test Item";
}
