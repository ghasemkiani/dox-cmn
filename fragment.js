import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Fragment extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		dummy.innerHTML = component.node.innerHTML;
		x.aps(node, x.nodes(dummy));
	}
}

export {Fragment};
