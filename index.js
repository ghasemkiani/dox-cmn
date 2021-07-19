//	@ghasemkiani/dox-cmn

const {Dir, iwdir} = require("@ghasemkiani/dox-cmn/dir");
const {Eol} = require("@ghasemkiani/dox-cmn/eol");
const {Fragment} = require("@ghasemkiani/dox-cmn/fragment");
const {Id} = require("@ghasemkiani/dox-cmn/id");
const {Itm} = require("@ghasemkiani/dox-cmn/itm");
const {Msg} = require("@ghasemkiani/dox-cmn/msg");
const {Name, iwname} = require("@ghasemkiani/dox-cmn/name");
const {Noindent} = require("@ghasemkiani/dox-cmn/Noindent");
const {Nonum} = require("@ghasemkiani/dox-cmn/nonum");
const {Notoc} = require("@ghasemkiani/dox-cmn/notoc");
const {Num} = require("@ghasemkiani/dox-cmn/num");
const {Obj} = require("@ghasemkiani/dox-cmn/obj");
const {Prop, iwprop} = require("@ghasemkiani/dox-cmn/prop");
const {Sup} = require("@ghasemkiani/dox-cmn/sup");
const {Title, iwtitle} = require("@ghasemkiani/dox-cmn/title");
const {Value} = require("@ghasemkiani/dox-cmn/value");
const {PersianNumbers} = require("@ghasemkiani/dox-cmn/persianNumbers");

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
