import {cutil} from "@ghasemkiani/base";
import {fa} from "@ghasemkiani/ling";
import {Component} from "@ghasemkiani/dox";
import {Context} from "@ghasemkiani/dox";

class PersianNumbers extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let context = component.context.parent;
		let toRenderTextDefault = context.constructor.prototype.toRenderText.bind(context);
		let flag = !/^\s*(off|no|false)\s*$/i.test(x.toStrInner(component.node).trim());
		if (!flag) {
			cutil.extend(context, {
				async toRenderText(node, text) {
					await toRenderTextDefault(node, text);
				},
			});
		} else {
			cutil.extend(context, {
				async toRenderText(node, text) {
					text = fa.toPersianNumbers(text);
					await toRenderTextDefault(node, text);
				},
			});
		}
	}
}

export {PersianNumbers};
