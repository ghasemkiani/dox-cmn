//	@ghasemkiani/dox-cmn/itm

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Itm extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		dummy.node.innerHTML = this.wnode.node.innerHTML;
		dummy = dummy.wdocument.wrap(dummy.node);
		this.context.parent.component.pub("item", dummy.wnodes);
	}
}

module.exports = {Itm};
