import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Notoc extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		let notoc = x.toStrInner(dummy);
		component.context.parent.component.pub("notoc", notoc);
	}
}

export {Notoc};
