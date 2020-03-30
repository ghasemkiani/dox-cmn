//	@ghasemkiani/dox-common/eol

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Eol extends Component {
	render(wnode) {
		let dummy = this.wnode.wdocument.t("\n");
		this.context.renderer.translate(dummy, this.context).render(wnode);
	}
}

module.exports = {Eol};
