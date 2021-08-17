//	@ghasemkiani/dox-cmn/itm

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Itm extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		dummy.node.innerHTML = this.wnode.node.innerHTML;
		dummy = dummy.wdocument.wrap(dummy.node);
		this.context.parent.component.pub("item", dummy.wnodes);
	}
}

export {Itm};
