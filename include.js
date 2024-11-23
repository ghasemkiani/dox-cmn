import path from "node:path";
import fs from "node:fs";

import {cutil} from "@ghasemkiani/base";
import {Textual} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";

class Include extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let cs = x.attr(component.node, "cs");
		// let uri = x.attr(component.node, "uri");
		let uri = await component.toGetAttr("uri", node);
		let fn = path.join(component.context.dirname, uri);
		try {
			let n = x.root(x.fromStr(new Textual({fn, cs}).read().string));
			await component.toRenderAgain(n, node, ctx => {
				ctx.dirname = path.dirname(fn);
				ctx.fnInclude = fn;
			});
		} catch (e) {
			x.ch(node, "div[dir=ltr]", node => {
				x.ch(node, "p.error", node => {
					x.t(node, "Error occurred in including ");
					x.ch(node, "code", node => {
						x.t(node, uri);
					});
				});
				x.ch(node, "pre.error", node => {
					x.t(node, e.message);
				});
			});
			console.error(e);
		}
	}
}

export {Include};
