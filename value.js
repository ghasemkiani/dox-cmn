//	@ghasemkiani/dox-cmn/value

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Value extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		let value = x.toStrInner(dummy);
		component.context.parent.component.pub("value", value);
	}
}

export {Value};
