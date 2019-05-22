import { LitElement, html, customElement, css } from 'lit-element';
import './common/shadowed-text';
import './common/flat-button';

@customElement('hello-view')
export class HelloView extends LitElement {
  static get styles() {
    return css`
      p {
        border: 1px solid gray;
      }
    `;
  }

  render() {
    return html`
      <p>
        <shadowed-text text="Hello World"></shadowed-text>
        <br />
        <flat-button @click=${this.clickHandler}>Button</flat-button>
      </p>
    `;
  }

  private clickHandler() {
    alert('button clicked');
  }
}
