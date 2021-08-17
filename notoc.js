//	@ghasemkiani/dox-cmn/notoc

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Notoc extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let notoc = dummy.innerString;
		this.context.parent.component.pub("notoc", notoc);
	}
}

export {Notoc};
