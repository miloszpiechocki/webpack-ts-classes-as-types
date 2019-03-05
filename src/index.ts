import { SomeService } from "./shared-module";

const btnEl = document.getElementById("lazy-btn") as HTMLButtonElement;

const service = new SomeService();

btnEl.onclick = () => {
  import("./lazy-module").then(({ SomeComponent }) => {
    const component = new SomeComponent(service);

    console.log(component.bar(2));
  });
};
