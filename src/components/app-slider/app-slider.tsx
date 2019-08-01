import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-slider",
  shadow: true
})
export class AppSlider {
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
        <input
          type="range"
          role="slider"
          class="range-input"
          min={this.min}
          max={this.max}
          step={this.step}
          value={this.value}
          onInput={(e: Event) =>
            (this.value = parseInt((e.target as HTMLInputElement).value, 10))
          }
        />

        <input
          type="text"
          value={this.value}
          onInput={(e: Event) =>
            (this.value = parseInt((e.target as HTMLInputElement).value, 10))
          }
        />
      </div>
    );
  }
}
