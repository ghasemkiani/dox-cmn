//	@ghasemkiani/dox-cmn/dir

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Dir extends Component {
	render(wnode) {
		let dir = this.wnode.innerString.trim();
		this.context.parent.component.pub("dir", dir);
	}
}

const iwdir = {
	onDir(dir) {
		this.wnode.attr("dir", dir);
	},
};

export {Dir, iwdir};
