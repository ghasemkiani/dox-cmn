//	@ghasemkiani/dox-cmn/msg

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Msg extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let msg = dummy.innerString;
		let name = this.wnode.attr("name") || "message";
		this.context.parent.component.pub(name, msg);
	}
}

module.exports = {Msg};
