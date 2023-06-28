//	@ghasemkiani/dox-cmn/title

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Title extends Component {
	async toRender(wnode) {
		let dummy = wnode.wdocument.ch("div");
		await this.toRenderBody(dummy);
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

export {Title, iwtitle};
