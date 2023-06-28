import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Script extends Component {
	async toRender(wnode) {
		let component = this;
		let {context} = component;
		let {renderer} = context;
		let body = component.wnode.toText();
		const AsyncFunction = async function () {}.constructor;
		let f = new AsyncFunction ("wnode", "component", "context", "renderer", "templateComponent", "props", body);
		await (f.call(component, wnode, component, context, renderer, context.templateComponent, context.templateComponent.props));
	}
}

export {Script};
