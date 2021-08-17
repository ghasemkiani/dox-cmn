//	@ghasemkiani/dox-cmn/persianNumbers

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {fa} from "@ghasemkiani/ling";
import {Context} from "@ghasemkiani/dox";

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

export {PersianNumbers};
