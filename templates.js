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
		let folder = path.isAbsolute(uri) ? uri : path.join(dirname, uri);
		renderer.addTemplateFolder(ns, folder, cs);
	}
}

export {Templates};
