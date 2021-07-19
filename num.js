//	@ghasemkiani/dox-cmn/num

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Num extends Component {
	render(wnode) {
		let num = this.wnode.innerString.trim();
		this.context.parent.component.pub("num", num);
	}
}

module.exports = {Num};