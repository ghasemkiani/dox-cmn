//	@ghasemkiani/dox-cmn/id

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Id extends Component {
	async toRender(wnode) {
		let id = this.wnode.innerString.trim();
		this.context.parent.component.pub("id", id);
	}
}

const iwid = {
	onId(id) {
		this.wnode.attr("id", id);
	},
};

export {Id, iwid};
