import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Script extends Component {
	render(wnode) {
		let component = this;
		let body = component.wnode.toText();
		let f = new Function("wnode", body);
		f.call(component, wnode);
	}
}

export {Script};
