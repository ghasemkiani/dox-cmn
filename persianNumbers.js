//	@ghasemkiani/dox-cmn/persianNumbers

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");
const {fa} = require("@ghasemkiani/ling/fa");
const {Context} = require("@ghasemkiani/dox/context");

class PersianNumbers extends Component {
	render(wnode) {
		let context = this.context.parent;
		let flag = !/^\s*(off|no|false)\s*$/i.test(this.wnode.innerString.trim());
		if (!flag) {
			context.renderText = (text, wnode) => {
				Context.prototype.renderText.call(this, text, wnode);
			};
		} else {
			context.renderText = (text, wnode) => {
				text = fa.toPersianNumbers(text);
				Context.prototype.renderText.call(this, text, wnode);
			};
		}
	}
}

module.exports = {PersianNumbers};
