import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Eol extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dt("\n");
		await component.context.renderer.translate(dummy, component.context).toRender(node);
	}
}

export {Eol};
