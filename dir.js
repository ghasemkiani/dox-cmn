//	@ghasemkiani/dox-common/dir

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

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

module.exports = {Dir, iwdir};
