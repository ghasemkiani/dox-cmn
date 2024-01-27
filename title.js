import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Title extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		let title = x.toStrInner(dummy);
		component.context.parent.component.pub("title", title);
	}
}

const iwtitle = {
	title: null,
	onTitle(title) {
		let component = this;
		component.title = title;
	},
};

export {Title, iwtitle};
