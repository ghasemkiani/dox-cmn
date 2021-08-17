//	@ghasemkiani/dox-cmn/obj

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Obj extends Component {
	render(wnode) {
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
		this.renderBody(dummy);
		this.context.parent.component.pub("prop", {name, value: obj});
	}
}

export {Obj};
