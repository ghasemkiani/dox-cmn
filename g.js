import {Component} from "@ghasemkiani/dox";

class G extends Component {
	async toRender(wnode) {
		let component = this;
		await component.toRenderBody(wnode);
	}
}

export {G};
