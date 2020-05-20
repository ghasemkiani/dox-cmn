//	@ghasemkiani/dox-common

const {Dir, iwdir} = require("@ghasemkiani/dox-common/dir");
const {Eol} = require("@ghasemkiani/dox-common/eol");
const {Fragment} = require("@ghasemkiani/dox-common/fragment");
const {Id} = require("@ghasemkiani/dox-common/id");
const {Itm} = require("@ghasemkiani/dox-common/itm");
const {Msg} = require("@ghasemkiani/dox-common/msg");
const {Name, iwname} = require("@ghasemkiani/dox-common/name");
const {Noindent} = require("@ghasemkiani/dox-common/Noindent");
const {Nonum} = require("@ghasemkiani/dox-common/nonum");
const {Notoc} = require("@ghasemkiani/dox-common/notoc");
const {Num} = require("@ghasemkiani/dox-common/num");
const {Obj} = require("@ghasemkiani/dox-common/obj");
const {Prop, iwprop} = require("@ghasemkiani/dox-common/prop");
const {Sup} = require("@ghasemkiani/dox-common/sup");
const {Title, iwtitle} = require("@ghasemkiani/dox-common/title");
const {Value} = require("@ghasemkiani/dox-common/value");
const {PersianNumbers} = require("@ghasemkiani/dox-common/persianNumbers");

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
};

module.exports = {
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
};
