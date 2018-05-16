// @ts-check
import {html, LitElement} from '../modules/lit-html-element/lit-element.js';
import {singleton} from './singleton.js';


export class HexPrint extends LitElement {
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
        return html`HEX: 0x${this.count.toString(16).padStart(4, '0')}`;
    }
    
}
customElements.define('hex-print', HexPrint.withProperties());