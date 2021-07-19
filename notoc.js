//	@ghasemkiani/dox-cmn/notoc

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Notoc extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let notoc = dummy.innerString;
		this.context.parent.component.pub("notoc", notoc);
	}
}

module.exports = {Notoc};
