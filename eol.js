//	@ghasemkiani/dox-cmn/eol

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Eol extends Component {
	render(wnode) {
		let dummy = this.wnode.wdocument.t("\n");
		this.context.renderer.translate(dummy, this.context).render(wnode);
	}
}

export {Eol};
