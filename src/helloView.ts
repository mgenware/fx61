import { LitElement, html, customElement, css } from 'lit-element';
import './common/shadowedText';
import './common/flatButton';
import './common/decoratorExperiments';

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
        <hr />
        <prop-view obj="{&#x22;id&#x22;:1}"></prop-view>
        <bug-prop-view obj="{&#x22;id&#x22;:1}"></bug-prop-view>
        <lit-prop-view obj="{&#x22;id&#x22;:1}"></lit-prop-view>
        <ref-prop-view .obj=${{ id: 2 }}></ref-prop-view>
        <ref-bug-prop-view .obj=${{ id: 2 }}></ref-bug-prop-view>
        <ref-lit-prop-view .obj=${{ id: 2 }}></ref-lit-prop-view>
      </p>
    `;
  }

  private clickHandler() {
    alert('button clicked');
  }
}
