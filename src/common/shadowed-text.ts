import { LitElement, html, property, customElement, css } from 'lit-element';

@customElement('shadowed-text')
export class ShadowedText extends LitElement {
  static get styles() {
    return css`
      :host {
        text-shadow: 2px 2px #ff0000;
      }
    `;
  }

  @property() text = '';

  render() {
    return html`
      <span>${this.text}</span>
    `;
  }
}
