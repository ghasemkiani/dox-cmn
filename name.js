import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Name extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		component.context.parent.component.pub("name", x.toStrInner(component.node).trim());
	}
}

const iwname = {
	onName(name) {
		let component = this;
		let {x} = component;
		x.attr(component.node, "name", name);
	},
};

export {Name, iwname};
