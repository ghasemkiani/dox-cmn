//	@ghasemkiani/dox-common/prop

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Prop extends Component {
	render(wnode) {
		let name = this.wnode.attr("name");
		this.sub("name", function (data) {
			name = data;
		});
		let value;
		this.sub("value", function (data) {
			value = data;
		});
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		if(!value) {
			value = dummy.innerString;
		}
		this.context.parent.component.pub("prop", {name, value});
	}
}

const iwprop = {
	onProp({name, value}) {
		this[name] = value;
	},
};

module.exports = {Prop, iwprop};
