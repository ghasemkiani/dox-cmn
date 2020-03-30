//	@ghasemkiani/dox-common/name

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Name extends Component {
	render(wnode) {
		this.context.parent.component.pub("name", cutil.asString(this.wnode.innerString).trim());
	}
}

const iwname = {
	onName(name) {
		this.wnode.attr("name", name);
	},
};

module.exports = {Name, iwname};
