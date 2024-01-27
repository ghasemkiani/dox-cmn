import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Obj extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let name = x.attr(component.node, "name");
		let obj = {};
		component.sub("name", (data) => {
			name = data;
		});
		let value;
		component.sub("prop", ({name, value}) => {
			obj[name] = value;
		});
		let dummy = x.dch("div");
		await component.toRenderBody(dummy);
		component.context.parent.component.pub("prop", {name, value: obj});
	}
}

export {Obj};
