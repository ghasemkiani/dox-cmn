//	@ghasemkiani/dox-cmn/dir

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Dir extends Component {
	async toRender(node) {
		let {x} = this;
		let dir = toStrInner(this.node);
		this.context.parent.component.pub("dir", dir);
	}
}

const iwdir = {
	onDir(dir) {
		let {x} = this;
		x.attr(this.node, "dir", dir);
	},
};

export {Dir, iwdir};
