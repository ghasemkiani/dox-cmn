//	@ghasemkiani/dox-cmn/prop

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Prop extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let name = x.attr(component.node, "name");
		component.sub("name", (data) => {
			name = data;
		});
		let value = x.attr(component.node, "value");
		component.sub("value", (data) => {
			value = data;
		});
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		if(!value) {
			value = x.toStrInner(dummy);
		}
		component.context.parent.component.pub("prop", {name, value});
	}
}

const iwprop = {
	onProp({name, value}) {
		let component = this;
		component[name] = value;
	},
};

export {Prop, iwprop};
