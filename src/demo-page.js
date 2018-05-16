// @ts-check

import {html, LitElement} from '../modules/lit-html-element/lit-element.js';

import {singleton} from './singleton.js';
import {DecimalPrint} from './decimal-print.js';
import {HexPrint} from './hex-print.js';
import {FancyButton} from './fancy-button.js';

export class DemoPage extends LitElement {
    render() {
        return html`
            <decimal-print></decimal-print><br>
            <hex-print></hex-print><br>
            <fancy-button on-click='${e => this._reset()}'>Reset</fancy-button>
        `;
    }

    _reset() {
        singleton.reset();
    }
}

window.customElements.define('demo-page', DemoPage);