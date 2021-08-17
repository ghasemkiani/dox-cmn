//	@ghasemkiani/dox-cmn/name

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Name extends Component {
	render(wnode) {
		this.context.parent.component.pub("name", cutil.asString(this.wnode.innerString).trim());
	}
}

const iwname = {
	onName(name) {
		this.wnode.attr("name", name);
	},
};

export {Name, iwname};
