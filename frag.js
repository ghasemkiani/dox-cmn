import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Frag extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let name = x.attr(component.node, "name");
		let frag = x.dfrag();
		await component.toRenderBody(frag);
		component.context.parent.component.pub("prop", {name, value: frag});
	}
}

export {Frag};
