//	@ghasemkiani/dox-common/sup

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Sup extends Component {
	render(wnode) {
		wnode.ch("sup", wnode => {
			this.renderBody(wnode);
		});
	}
}

module.exports = {Sup};
