import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {fa} from "@ghasemkiani/ling";
import {Context} from "@ghasemkiani/dox";

class PersianNumbers extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let context = component.context.parent;
		let flag = !/^\s*(off|no|false)\s*$/i.test(x.toStrInner(component.node).trim());
		if (!flag) {
			context.renderText = (text, node) => {
				Context.prototype.renderText.call(component, text, node);
			};
		} else {
			context.renderText = (text, node) => {
				text = fa.toPersianNumbers(text);
				Context.prototype.renderText.call(component, text, node);
			};
		}
	}
}

export {PersianNumbers};
