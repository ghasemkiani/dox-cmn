import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Id extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let id = x.toStrInner(component.node).trim();
		component.context.parent.component.pub("id", id);
	}
}

const iwid = {
	onId(id) {
		let component = this;
		let {x} = component;
		x.attr(component.node, "id", id);
	},
};

export {Id, iwid};
