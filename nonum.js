import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Nonum extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		let nonum = x.toStrInner(dummy).trim();
		component.context.parent.component.pub("nonum", nonum);
	}
}

export {Nonum};
