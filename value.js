//	@ghasemkiani/dox-cmn/value

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Value extends Component {
	async toRender(wnode) {
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
		let value = dummy.innerString;
		this.context.parent.component.pub("value", value);
	}
}

export {Value};
