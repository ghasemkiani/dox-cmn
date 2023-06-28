//	@ghasemkiani/dox-cmn/noindent

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Noindent extends Component {
	async toRender(wnode) {
		if (this.context.parent) {
			this.context.parent.indent = false;
		} else {
			this.context.indent = false;
		}
	}
}

export {Noindent};
