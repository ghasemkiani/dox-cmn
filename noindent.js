import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Noindent extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		if (component.context.parent) {
			component.context.parent.indent = false;
		} else {
			component.context.indent = false;
		}
	}
}

export {Noindent};
