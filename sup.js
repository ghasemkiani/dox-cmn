//	@ghasemkiani/dox-cmn/sup

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Sup extends Component {
	render(wnode) {
		wnode.ch("sup", wnode => {
			this.renderBody(wnode);
		});
	}
}

export {Sup};
