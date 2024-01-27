import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Num extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let num = x.toStrInner(component.node).trim();
		component.context.parent.component.pub("num", num);
	}
}

export {Num};
