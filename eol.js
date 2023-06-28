//	@ghasemkiani/dox-cmn/eol

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Eol extends Component {
	async toRender(wnode) {
		let dummy = this.wnode.wdocument.t("\n");
		await this.context.renderer.translate(dummy, this.context).toRender(wnode);
	}
}

export {Eol};
