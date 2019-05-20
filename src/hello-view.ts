import { LitElement, html, customElement } from 'lit-element';
import './common/shadowed-text';

@customElement('hello-view')
export class HelloView extends LitElement {
  render() {
    return html`
      <p><shadowed-text text="Hello World"></shadowed-text></p>
    `;
  }
}
