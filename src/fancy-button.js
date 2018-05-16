// @ts-check
import {html, LitElement} from '../modules/lit-html-element/lit-element.js';

export class FancyButton extends LitElement {
    render() {
      return html`
        <style>
          .btn {
            display: inline-block;
            position: relative;
            user-select: none;
            cursor: pointer;
            padding: 0.3em;
            background: black;
            color: white;
          }
          .btn:hover {
            background-color:red;
          }
        </style>
        <div class="btn">
          <slot></slot>
        </div>
      `;
    }
  }
  customElements.define('fancy-button', FancyButton);
  