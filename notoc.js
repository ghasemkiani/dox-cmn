//	@ghasemkiani/dox-cmn/notoc

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Notoc extends Component {
	async toRender(wnode) {
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
		let notoc = dummy.innerString;
		this.context.parent.component.pub("notoc", notoc);
	}
}

export {Notoc};
