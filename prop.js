//	@ghasemkiani/dox-cmn/prop

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Prop extends Component {
	async toRender(wnode) {
		let name = this.wnode.attr("name");
		this.sub("name", function (data) {
			name = data;
		});
		let value;
		this.sub("value", function (data) {
			value = data;
		});
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
		if(!value) {
			value = dummy.innerString;
		}
		this.context.parent.component.pub("prop", {name, value});
	}
}

const iwprop = {
	onProp({name, value}) {
		this[name] = value;
	},
};

export {Prop, iwprop};
