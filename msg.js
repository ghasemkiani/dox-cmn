import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Msg extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		let msg = x.toStrInner(dummy);
		let name = x.attr(component.node, "name") || "message";
		component.context.parent.component.pub(name, msg);
	}
}

export {Msg};
