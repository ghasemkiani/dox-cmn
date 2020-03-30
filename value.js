//	@ghasemkiani/dox-common/value

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Value extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let value = dummy.innerString;
		this.context.parent.component.pub("value", value);
	}
}

module.exports = {Value};
