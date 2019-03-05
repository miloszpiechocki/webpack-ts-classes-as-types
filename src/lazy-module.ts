import { SomeService } from "./shared-module";

console.log("Feature module has been loaded!");

export class SomeComponent {
  constructor(private service: SomeService) {}

  bar(x: number) {
    return "hello" + this.service.bar(2);
  }
}
