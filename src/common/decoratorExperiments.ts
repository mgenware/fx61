import { LitElement, html, property, customElement } from 'lit-element';
import * as lp from 'lit-props';

@customElement('prop-view')
export class PropView extends LitElement {
  @property({ type: Object }) obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}

// Property type is omitted, which defaults to `String`.
@customElement('bug-prop-view')
export class BugPropView extends LitElement {
  @property() obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}

@customElement('lit-prop-view')
export class LitPropView extends LitElement {
  @lp.object obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}

@customElement('ref-prop-view')
export class RefPropView extends LitElement {
  @property({ type: Object, reflect: true }) obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}

// Property type is omitted, which defaults to `String`.
@customElement('ref-bug-prop-view')
export class RefBugPropView extends LitElement {
  @property({ reflect: true }) obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}

@customElement('ref-lit-prop-view')
export class RefLitPropView extends LitElement {
  @lp.reflected.object obj = {};

  render() {
    const { obj } = this;
    return html`
      <div>
        <p>${`${typeof obj} -> ${JSON.stringify(obj)}`}</p>
      </div>
    `;
  }
}
