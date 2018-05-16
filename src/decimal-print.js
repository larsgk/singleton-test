// @ts-check
import {html, LitElement} from '../modules/lit-html-element/lit-element.js';
import {singleton} from './singleton.js';


export class DecimalPrint extends LitElement {
    constructor() {
        super();
        singleton.addEventListener('message',(e) => { this.count = e.detail.count });
    }
    
    static get properties() {
        return {
            count: {
                type: Number,
                value: 0
            }
        }
    }
    
    render() {
        return html`DECIMAL: ${this.count}`;
    }
    
}
customElements.define('decimal-print', DecimalPrint.withProperties());