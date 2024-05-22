import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Script extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let {context} = component;
		let {renderer} = context;
		let body = x.toText(component.node);
		const AsyncFunction = async function () {}.constructor;
		let f = new AsyncFunction ("node", "component", "context", "renderer", "templateComponent", "props", body);
		try {
			await (f.call(component, node, component, context, renderer, context.templateComponent, context.templateComponent?.props));
		} catch (e) {
			console.log(renderer.x.toStr(component.node));
			throw e;
		}
	}
}

export {Script};
