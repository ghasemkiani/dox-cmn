import beautify from "js-beautify";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

const {html, css, js} = beautify;

class Beautifiers extends Component {
	async toRender(wnode) {
		if (!this.context.root.beautify) {
			this.context.root.beautify = {html, css, js};
		}
	}
}

export {Beautifiers};
