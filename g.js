import {Component} from "@ghasemkiani/dox";

class G extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		await component.toRenderBody(node);
	}
}

export {G};
