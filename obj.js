//	@ghasemkiani/dox-cmn/obj

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Obj extends Component {
	async toRender(wnode) {
		let name = this.wnode.attr("name");
		let obj = {};
		this.sub("name", function (data) {
			name = data;
		});
		let value;
		this.sub("prop", function ({name, value}) {
			obj[name] = value;
		});
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
		this.context.parent.component.pub("prop", {name, value: obj});
	}
}

export {Obj};
