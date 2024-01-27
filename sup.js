//	@ghasemkiani/dox-cmn/sup

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Sup extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let wn;
		x.ch(node, "sup", node => {
			wn = node;
		});
		await component.toRenderBody(wn);
	}
}

export {Sup};
