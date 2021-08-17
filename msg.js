//	@ghasemkiani/dox-cmn/msg

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Msg extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let msg = dummy.innerString;
		let name = this.wnode.attr("name") || "message";
		this.context.parent.component.pub(name, msg);
	}
}

export {Msg};
