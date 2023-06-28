//	@ghasemkiani/dox-cmn/tags

import {Dir, iwdir} from "./dir.js";
import {Eol} from "./eol.js";
import {Fragment} from "./fragment.js";
import {Id} from "./id.js";
import {Itm} from "./itm.js";
import {Msg} from "./msg.js";
import {Name, iwname} from "./name.js";
import {Noindent} from "./Noindent.js";
import {Nonum} from "./nonum.js";
import {Notoc} from "./notoc.js";
import {Num} from "./num.js";
import {Obj} from "./obj.js";
import {Prop, iwprop} from "./prop.js";
import {Sup} from "./sup.js";
import {Title, iwtitle} from "./title.js";
import {Value} from "./value.js";
import {PersianNumbers} from "./persianNumbers.js";
import {Script} from "./script.js";
import {Templates} from "./templates.js";
import {G} from "./g.js";
import {Beautifiers} from "./beautifiers.js";
import {Include} from "./include.js";

const tags = {
	dir: Dir,
	eol: Eol,
	fragment: Fragment,
	id: Id,
	itm: Itm,
	msg: Msg,
	name: Name,
	noindent: Noindent,
	nonum: Nonum,
	notoc: Notoc,
	num: Num,
	object: Obj,
	prop: Prop,
	sup: Sup,
	title: Title,
	value: Value,
	persianNumbers: PersianNumbers,
	script: Script,
	templates: Templates,
	g: G,
	beautifiers: Beautifiers,
	include: Include,
};

export {
	tags,
	Dir, iwdir,
	Eol,
	Fragment,
	Id,
	Itm,
	Msg,
	Name, iwname,
	Noindent,
	Nonum,
	Notoc,
	Num,
	Obj,
	Prop, iwprop,
	Sup,
	Title, iwtitle,
	Value,
	PersianNumbers,
	Script,
	Templates,
	G,
	Beautifiers,
	Include,
};
