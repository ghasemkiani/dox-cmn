//	@ghasemkiani/dox-cmn/sup

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Sup extends Component {
	render(wnode) {
		wnode.ch("sup", wnode => {
			this.renderBody(wnode);
		});
	}
}

module.exports = {Sup};
