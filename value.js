//	@ghasemkiani/dox-cmn/value

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Value extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let value = dummy.innerString;
		this.context.parent.component.pub("value", value);
	}
}

export {Value};
