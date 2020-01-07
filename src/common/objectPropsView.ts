import { LitElement, html, property, customElement } from 'lit-element';

@customElement('object-props-view')
export class ObjectPropsView extends LitElement {
  @property({ type: Object }) objProp1 = {};
  @property({ type: Object }) objProp2 = {};

  firstUpdated() {
    this.startTimer();
  }

  render() {
    return html`
      <div>
        <p>${JSON.stringify(this.objProp1)}</p>
        <p>${JSON.stringify(this.objProp2)}</p>
      </div>
    `;
  }

  private startTimer() {
    setInterval(() => {
      const obj = { time: new Date().toTimeString() };
      this.objProp1 = { ...obj, id: 1 };
      this.objProp2 = { ...obj, id: 2 };
    }, 1000);
  }
}
