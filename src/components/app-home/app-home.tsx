import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true
})
export class AppHome {
  @State()
  value: number = 0;

  @State()
  min: number = 0;

  @State()
  max: number = 100;

  @State()
  step: number = 1;

  render() {
    return (
      <div class="app-home">
        <app-slider />
      </div>
    );
  }
}
