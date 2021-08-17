//	@ghasemkiani/dox-cmn/nonum

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Nonum extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let nonum = dummy.innerString;
		this.context.parent.component.pub("nonum", nonum);
	}
}

export {Nonum};
