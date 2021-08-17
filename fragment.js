//	@ghasemkiani/dox-cmn/fragment

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Fragment extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		dummy.node.innerHTML = this.wnode.node.innerHTML;
		dummy = dummy.wdocument.wrap(dummy.node);
		for(let wn of dummy.wnodes) {
			wnode.append(wn);
		}
	}
}

export {Fragment};
