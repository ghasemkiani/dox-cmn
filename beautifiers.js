import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {beautify} from "@ghasemkiani/xdom";


class Beautifiers extends Component {
	async toRender(node) {
		let component = this;
		if (!component.context.root.beautify) {
			component.context.root.beautify = beautify;
		}
	}
}

export {Beautifiers};
