//	@ghasemkiani/dox-cmn/sup

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Sup extends Component {
	async toRender(wnode) {
		let wn;
		wnode.ch("sup", wnode => {
			wn = wnode;
		});
		await this.toRenderBody(wn);
	}
}

export {Sup};
