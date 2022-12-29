import { FrameworkConfiguration } from 'aurelia-framework';
import { SomeMarkup } from './someMarkup';
export { Utils } from "./utils";

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([SomeMarkup]);

}
