import path from "node:path";
import fs from "node:fs";

import {cutil} from "@ghasemkiani/base";
import {Textual} from "@ghasemkiani/base";
import {Component} from "@ghasemkiani/dox";
import {TemplateComponent} from "@ghasemkiani/dox";

class Templates extends Component {
	async toRender(node) {
		let component = this;
		let {x} = component;
		let {context} = component;
		let {renderer} = context;
		let ns = x.attr(component.node, "ns");
		let dirname = context["dirname"];
		let uri = x.attr(component.node, "uri");
		let cs = x.attr(component.node, "cs");
		let folder = path.join(dirname, uri);
		function dir(folder, prefix) {
			for (let dirent of fs.readdirSync(folder, {withFileTypes: true})) {
				let fn = path.join(dirent.path, dirent.name);
				let tag = prefix + path.parse(dirent.name).name;
				if (dirent.isDirectory()) {
					dir(fn, tag + ".");
				} else if (dirent.isFile() && /\.dox/i.test(fn)) {
					let template = x.root(x.fromStr(new Textual({fn, cs}).read().string));
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
