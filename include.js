import path from "node:path";
import fs from "node:fs";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {WDocument} from "@ghasemkiani/wjsdom";

class Include extends Component {
	static {
		cutil.extend(Include.prototype, {
			//
		});
	}
	async toRender(wnode) {
		let component = this;
		let uri = component.wnode.attr("uri");
		let fn = path.join(component.context.dirname, uri);
		let preamble = "";
		let wdocument = new WDocument({preamble, fn});
		try {
			wdocument.read();
			let wn = wdocument.root;
			let dirname = path.dirname(fn);
			await component.toRenderAgain(wn, wnode, ctx => {
				ctx.dirname = dirname;
			});
		} catch(e) {
			wnode.ch("div[dir=ltr]", wnode => {
				wnode.ch("p.error", wnode => {
					wnode.t("Error occurred in including ");
					wnode.ch("code", wnode => {
						wnode.t(uri);
					});
				});
				wnode.ch("pre.error", wnode => {
					wnode.t(e);
				});
			});
			console.error(e);
		}
	}
}

export {Include};
