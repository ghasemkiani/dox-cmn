//	@ghasemkiani/dox-common/nonum

const {cutil} = require("@ghasemkiani/commonbase/cutil");
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
