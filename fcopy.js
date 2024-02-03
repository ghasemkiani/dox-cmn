import path from "node:path";
import fs from "node:fs";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class FCopy extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let {context} = component;
		
		let uri1 = x.attr(component.node, "uri1");
		let uri2 = x.attr(component.node, "uri2");
		let fn1 = x.attr(component.node, "fn1");
		let fn2 = x.attr(component.node, "fn2");
		
		if (cutil.a(uri1)) {
			fn1 = path.join(context.dirname, uri1);
		}
		if (cutil.a(uri2)) {
			fn2 = path.join(context.dirname, uri2);
		}
		
		await fs.promises.mkdir(path.dirname(fn2), {recursive: true});
		await fs.promises.copyFile(fn1, fn2);
	}
}

export {FCopy};
