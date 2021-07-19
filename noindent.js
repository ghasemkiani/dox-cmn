//	@ghasemkiani/dox-cmn/noindent

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Noindent extends Component {
	render(wnode) {
		if (this.context.parent) {
			this.context.parent.indent = false;
		} else {
			this.context.indent = false;
		}
	}
}

module.exports = {Noindent};