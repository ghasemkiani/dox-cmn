//	@ghasemkiani/dox-cmn/nonum

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Nonum extends Component {
	async toRender(wnode) {
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
		let nonum = dummy.innerString;
		this.context.parent.component.pub("nonum", nonum);
	}
}

export {Nonum};
