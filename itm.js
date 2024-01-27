import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Itm extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		dummy.innerHTML = component.node.innerHTML;
		component.context.parent.component.pub("item", x.nodes(dummy));
	}
}

export {Itm};
