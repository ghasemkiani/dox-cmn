import path from "node:path";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class AtDir extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let {context} = component;
		let uri = x.attr(component.node, "uri");
		let dirname = path.join(context.dirname, uri);
		await component.toRenderBody(node, context => cutil.assign(context, {dirname}));
	}
}

export {AtDir};
