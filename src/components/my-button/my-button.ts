import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-button')
export class MyButton extends LitElement {
  @property({type: Number})
  count = 1;

  render() {
    return html`
      <button @click=${this._onClick} role="button">
        Click Count: ${this.count}
      </button>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count', {detail: this.count}));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton;
  }
}
