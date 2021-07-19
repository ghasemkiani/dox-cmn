//	@ghasemkiani/dox-cmn/title

const {cutil} = require("@ghasemkiani/base/cutil");
const {Component} = require("@ghasemkiani/dox/component");

class Title extends Component {
	render(wnode) {
		let dummy = wnode.wdocument.ch("div");
		this.renderBody(dummy);
		let title = dummy.innerString;
		this.context.parent.component.pub("title", title);
	}
}

const iwtitle = {
	title: null,
	onTitle(title) {
		this.title = title;
	},
};

module.exports = {Title, iwtitle};
