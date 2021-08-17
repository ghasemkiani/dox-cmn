//	@ghasemkiani/dox-cmn/num

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Num extends Component {
	render(wnode) {
		let num = this.wnode.innerString.trim();
		this.context.parent.component.pub("num", num);
	}
}

export {Num};
