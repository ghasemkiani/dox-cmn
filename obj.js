//	@ghasemkiani/dox-common/obj

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Obj extends Component {
	render(wnode) {
		console.log("obj");
		let name = this.wnode.attr("name");
		let obj = {};
		this.sub("name", function (data) {
			name = data;
		});
		let value;
		this.sub("prop", function ({name, value}) {
			obj[name] = value;
		});
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		this.context.parent.component.pub("prop", {name, value: obj});
	}
}

module.exports = {Obj};
