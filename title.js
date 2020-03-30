//	@ghasemkiani/dox-common/title

const {cutil} = require("@ghasemkiani/commonbase/cutil");
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
