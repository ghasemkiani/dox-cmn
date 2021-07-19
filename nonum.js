//	@ghasemkiani/dox-cmn/nonum

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Nonum extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let nonum = dummy.innerString;
		this.context.parent.component.pub("nonum", nonum);
	}
}

module.exports = {Nonum};
