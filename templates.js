import path from "node:path";
import fs from "node:fs";

import {cutil} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {TemplateComponent} from "@ghasemkiani/dox";
import {WDocument} from "@ghasemkiani/wjsdom";

class Templates extends Component {
	async toRender(wnode) {
		let component = this;
		let {context} = component;
		let {renderer} = context;
		let ns = component.wnode.attr("ns");
		let dirname = context["dirname"];
		let uri = component.wnode.attr("uri");
		let folder = path.join(dirname, uri);
		function dir(folder, prefix) {
			for (let dirent of fs.readdirSync(folder, {withFileTypes: true})) {
				let fn = path.join(dirent.path, dirent.name);
				let tag = prefix + path.parse(dirent.name).name;
				if (dirent.isDirectory()) {
					dir(fn, tag + ".");
				} else if (dirent.isFile() && /\.dox/i.test(fn)) {
					let wdocument = new WDocument({fn});
					wdocument.read();
					let template = wdocument.root;
					((renderer.translator ||= {})[ns] ||= {})[tag] = class extends TemplateComponent {
						static {
							cutil.extend(this.prototype, {template});
						}
					};
				}
			}
		}
		dir(folder, "");
	}
}

export {Templates};
