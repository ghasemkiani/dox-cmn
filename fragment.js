//	@ghasemkiani/dox-common/fragment

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

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

module.exports = {Fragment};
