//	@ghasemkiani/dox-common/id

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Id extends Component {
	render(wnode) {
		let id = this.wnode.innerString.trim();
		this.context.parent.component.pub("id", id);
	}
}

const iwid = {
	onId(id) {
		this.wnode.attr("id", id);
	},
};

module.exports = {Id, iwid};
