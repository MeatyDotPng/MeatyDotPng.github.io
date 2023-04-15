(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arm = function() {
	this.initialize(img.arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.background_1 = function() {
	this.initialize(img.background_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.background_2 = function() {
	this.initialize(img.background_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.background_3 = function() {
	this.initialize(img.background_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.background_4 = function() {
	this.initialize(img.background_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.blades = function() {
	this.initialize(img.blades);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.carenemy = function() {
	this.initialize(img.carenemy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.carhero = function() {
	this.initialize(img.carhero);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.characters = function() {
	this.initialize(img.characters);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.characters_1 = function() {
	this.initialize(img.characters_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.characters_2 = function() {
	this.initialize(img.characters_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.crash = function() {
	this.initialize(img.crash);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.curtainsclosed = function() {
	this.initialize(img.curtainsclosed);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.curtainsopen = function() {
	this.initialize(img.curtainsopen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.fan = function() {
	this.initialize(img.fan);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.foreground = function() {
	this.initialize(img.foreground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.lines = function() {
	this.initialize(img.lines);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);


(lib.paper = function() {
	this.initialize(img.paper);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.ribbondown = function() {
	this.initialize(img.ribbondown);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.smoke1 = function() {
	this.initialize(img.smoke1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.smoke2 = function() {
	this.initialize(img.smoke2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.text = function() {
	this.initialize(img.text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.tree = function() {
	this.initialize(img.tree);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.warboel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzGV/IA9nIQBBoJgroOQgJhsgOg/QgIghgPgwIgahQQgbhbgni8QgeiTgNhXQgijtAWjrQAMA0ABBKQABArgCBWQAAB+AdCbQASBeAtC4IAwDBQAcBvANBFQAWB1AICRQAGBiABCmQABCwgFBsQgGCcgUB+QgMBRgeChQgVCNAPBmIADAZQAAANgFAKQgGALgNADIgHABQgIAAgGgHgAkINxQAIh9gIiSQgHh0gTibQgLhggai+IgulFQgViXgIhOQggk2ATl8QAEhLAmgPQACAKgEANIgKAXQgLAbgEAjQgCAYAAApQgBC8ACBsQAECjANCEQALBpAbC1IA7GOIAQB8QAFAxAIBnQAOCwADBUQAECRgOBzQgNBygvC8QgKAmgJAUQgOAegXAPQBWjsARj7gAHHSSQBelKgImrQgChugIhtQgIhcgQiIIgdj3QgcjsgMhVQgYirgFgyQgWjbAZjYIAKEkQAGCvAQB0IARB2IAWCfIAQB8QAZDDALBoQASCnAFCHQAME5gsExQgNBYgOA7QgiCJhGB6QAkhfAYhWgAUUQgQAYiDgChrQgCg0gOh1Ig1mgQgWiqgNhZQgdjSgqjfQg1kagKhBQgcjFAKiYQACglAUgFQgQCUAZC+QALBQAwD/QA5ErApE0IBHI7QARCHgBBEQAABVgSBnQgLA/geB7QgFAWgHANQgJASgQAGQAoibAPhPg");
	this.shape.setTransform(134.1593,141.4221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AUoUIQgBgrAChWQAAh+gdibQgShegti4IgwjBQgchvgNhFQgWh1gIiRQgGhigBimQgBiwAFhsQAGicAUh+QAMhRAeihQAViNgPhmIgDgZQAAgNAFgKQAGgLANgDQAOgEAHAKIg9HIQhBIJArIOQAJBsAOA/QAIAhAPAwIAaBQQAbBbAnC8QAeCTANBXQAiDtgWDrQgMg0gBhKgAF4TrIAKgXQALgbAEgjQACgYAAgpQABi8gChsQgEijgNiEQgLhpgbi1Ig7mOIgQh8QgFgxgIhnQgOiwgDhUQgEiRAOhzQANhyAvi8QAKgmAJgUQAOgeAXgPQhWDsgRD7QgIB9AICSQAHB0ATCbQALBgAaC+IAuFFQAVCXAIBOQAgE2gTF8QgEBLgmAPQgCgKAEgNgAmlPHQgGivgQh0IgRh2IgWifIgQh8QgZjDgLhoQgSingFiHQgMk5AskxQANhYAOg7QAiiJBGh6QgkBfgYBWQheFKAIGrQACBuAIBtQAIBcAQCIIAdD3QAcDsAMBVQAYCrAFAyQAWDbgZDYgAxINcQgLhQgwj/Qg5krgpk0IhHo7QgRiHABhEQAAhVAShnQALg/Aeh7QAFgWAHgNQAJgSAQgGQgoCbgPBPQgYCDACBrQACA0AOB1IA1GgQAWCqANBZQAdDSAqDfQA1EaAKBBQAcDFgKCYQgCAlgUAFQAQiUgZi+g");
	this.shape_1.setTransform(134.1407,141.3779);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},10).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,282.9);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.background_3();
	this.instance.setTransform(-1240,-1754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1240,-1754,2480,3508);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.background_3();
	this.instance.setTransform(-1240,-1754);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1240,-1754,2480,3508);


(lib.text_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.smoke2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke1();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.smoke1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.smoke2();
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.road = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.background_3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.road, new cjs.Rectangle(0,0,2480,3508), null);


(lib.ribbondown_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flapper
	this.instance = new lib.ribbondown();
	this.instance.setTransform(190,78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({skewX:180,x:192,y:265},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(190,-815,1922,1973);


(lib.phase = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.phase, new cjs.Rectangle(0,0,1920,1080), null);


(lib.parkmouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABIAAQAAAagVASQgVASgeAAQgdAAgVgSQgVgSAAgaQAAgZAVgSQAVgSAdAAQAeAAAVASQAVASAAAZg");
	this.shape.setTransform(7.2,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyArQgVgRAAgaQAAgZAVgSQAVgSAdAAQAeAAAVASQAVASAAAZQAAAagVARQgVATgeAAQgdAAgVgTg");
	this.shape_1.setTransform(7.2,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,16.4,14.4);


(lib.paper_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// move
	this.instance = new lib.paper();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({rotation:2.7165,x:38.4,y:-29.7},0).wait(8));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-29.7,1969,1169.8);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AuElKQJTNWOeiZQCjjFB1lTQhDg1hng2QjNhtizgKQi0gKomAjg");
	this.shape.setTransform(90.05,39.4251);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AuElKIIEgkQIngjC0AKQCzAKDNBtQBnA2BCA1Qh0FTijDFQiMAXiFAAQrnAAn5rUg");
	this.shape_1.setTransform(90.05,39.4251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,183.1,81.9);


(lib.lines_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lines();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({y:165},0).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3673);


(lib.funeral = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.characters();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.funeral, new cjs.Rectangle(0,0,1920,1080), null);


(lib.curtainopen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.curtainsopen();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curtainopen, new cjs.Rectangle(0,0,1920,1080), null);


(lib.curtainclosed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.curtainsclosed();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.curtainclosed, new cjs.Rectangle(0,0,1920,1080), null);


(lib.crash_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.crash();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crash_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.characters_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.characters_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.characters_3, new cjs.Rectangle(0,0,1920,1080), null);


(lib.carhero_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carhero();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carhero_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.carenemy_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.carenemy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.carenemy_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.blades_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rotate
	this.instance = new lib.blades();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({scaleX:0.9999,scaleY:0.9999,rotation:23.1985,x:240.9,y:-567.7},0).wait(6).to({scaleX:1,scaleY:1,rotation:-8.4754,x:-28.1,y:225},0).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.5,-567.7,2214.6,1860.9);


(lib.ball_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball();
	this.instance.setTransform(549,-342);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball_1, new cjs.Rectangle(549,-342,1920,1080), null);


(lib.arm_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// washing
	this.instance = new lib.arm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({rotation:2.7226,x:33.4,y:-69.05},0).wait(5).to({rotation:9.9093,x:136.2,y:-246.75},0).wait(5).to({rotation:-11.8217,x:-103.15,y:319.9},0).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.1,-246.7,2130.7,1623.7);


// stage content:
(lib.project = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,27];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var stage = this;
		
		this.curtainOpen.visible = false;
		this.text.visible = false;
		this.crash.visible = false;
		this.curtainClosed.addEventListener("click",visibleCurtain);
		this.paper.addEventListener("click",visiblePaper);
		this.characters.addEventListener("click",visibleText);
		this.carHero.addEventListener("click",roadNext);
		this.funeral.addEventListener("click",nextFrame);
		
		function visibleCurtain() {
			stage.curtainClosed.visible = false;
			stage.warboel.visible = false;
			stage.curtainOpen.visible = true;
			setTimeout(nextFrame,2000);
		}
		
		function roadNext() {
			stage.gotoAndPlay(6);
		}
		
		function visiblePaper() {
			stage.paper.visible = false;
			setTimeout(nextFrame,2000);
		}
		
		function visibleText() {
			stage.text.visible = true;
			setTimeout(nextFrame,2000);
		}
		
		function nextFrame() {
			stage.gotoAndPlay(stage.currentFrame + 1);
			stage.stop();
		}
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
		var stage = this;
		setTimeout(nextFrame,1000);
		
		function nextFrame() {
			stage.gotoAndPlay(4);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(23).call(this.frame_27).wait(1));

	// arm
	this.arm = new lib.arm_1();
	this.arm.name = "arm";
	this.arm.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.arm).to({_off:true},1).wait(27));

	// foreground
	this.instance = new lib.foreground();

	this.instance_1 = new lib.tree();

	this.instance_2 = new lib.lines_1();
	this.instance_2.setTransform(954.55,1266,1,1,0,0,0,1240,1754);

	this.instance_3 = new lib.crash_1();
	this.instance_3.setTransform(849.9,558.9,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_3}]},23).wait(1));

	// mouth
	this.instance_4 = new lib.parkmouth();
	this.instance_4.setTransform(1309.3,422.7,1,1,0,0,0,7.2,6.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({_off:true},1).wait(25));

	// characters
	this.instance_5 = new lib.characters_2();

	this.instance_6 = new lib.fan();
	this.instance_6.setTransform(1,0);

	this.characters = new lib.characters_3();
	this.characters.name = "characters";
	this.characters.setTransform(960,540,1,1,0,0,0,960,540);

	this.funeral = new lib.funeral();
	this.funeral.name = "funeral";
	this.funeral.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_7 = new lib.carhero_1();
	this.instance_7.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.characters}]},1).to({state:[]},1).to({state:[{t:this.funeral}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},1).wait(22));

	// script
	this.instance_8 = new lib.lines_1();
	this.instance_8.setTransform(957,888.05,1,1,0,0,0,1240,1754);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({_off:false},0).to({y:2324.6},20).wait(2));

	// curtain
	this.warboel = new lib.warboel();
	this.warboel.name = "warboel";
	this.warboel.setTransform(1304.95,328.5,1,1,0,0,0,134.2,141.4);

	this.timeline.addTween(cjs.Tween.get(this.warboel).to({_off:true},1).wait(27));

	// actions
	this.curtainClosed = new lib.curtainclosed();
	this.curtainClosed.name = "curtainClosed";
	this.curtainClosed.setTransform(960,540,1,1,0,0,0,960,540);

	this.curtainOpen = new lib.curtainopen();
	this.curtainOpen.name = "curtainOpen";
	this.curtainOpen.setTransform(960,540,1,1,0,0,0,960,540);

	this.paper = new lib.paper_1();
	this.paper.name = "paper";
	this.paper.setTransform(936.35,540,1,1,0,0,0,960,540);

	this.blades = new lib.blades_1();
	this.blades.name = "blades";
	this.blades.setTransform(961,540,1,1,0,0,0,960,540);

	this.text = new lib.text_1();
	this.text.name = "text";
	this.text.setTransform(959.4,540,1,1,0,0,0,960,540);

	this.ball = new lib.ball_1();
	this.ball.name = "ball";
	this.ball.setTransform(410.4,882,1,1,0,0,0,960,540);

	this.ribbon = new lib.ribbondown_1();
	this.ribbon.name = "ribbon";
	this.ribbon.setTransform(769.4,462,1,1,0,0,0,960,540);

	this.carHero = new lib.carhero_1();
	this.carHero.name = "carHero";
	this.carHero.setTransform(940.05,618.55,1,1,0,0,0,960,540);

	this.carEnemy = new lib.carenemy_1();
	this.carEnemy.name = "carEnemy";
	this.carEnemy.setTransform(1234.55,-578.55,1,1,0,0,0,960,540);
	this.carEnemy._off = true;

	this.crash = new lib.crash_1();
	this.crash.name = "crash";
	this.crash.setTransform(975,-25,1,1,0,0,0,960,540);

	this.smoke2 = new lib.smoke2_1();
	this.smoke2.name = "smoke2";
	this.smoke2.setTransform(960,540,1,1,0,0,0,960,540);

	this.smoke1 = new lib.smoke1_1();
	this.smoke1.name = "smoke1";
	this.smoke1.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_9 = new lib.mouth();
	this.instance_9.setTransform(948.45,852.75,1,1,0,0,0,90,39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.curtainOpen},{t:this.curtainClosed}]}).to({state:[{t:this.blades},{t:this.paper}]},1).to({state:[{t:this.ribbon},{t:this.ball},{t:this.text}]},1).to({state:[{t:this.crash},{t:this.carEnemy},{t:this.carHero}]},1).to({state:[{t:this.smoke1},{t:this.smoke2}]},1).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.carEnemy}]},12).to({state:[{t:this.carEnemy}]},9).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.carEnemy).wait(3).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false,x:1588.7,y:118.7},0).to({x:444.1,y:631.65},9).wait(1));

	// background
	this.instance_10 = new lib.background();

	this.instance_11 = new lib.background_1();
	this.instance_11.setTransform(1,0);

	this.instance_12 = new lib.background_2();

	this.road = new lib.road();
	this.road.name = "road";
	this.road.setTransform(954.55,36,1,1,0,0,0,1240,1754);

	this.instance_13 = new lib.background_4();

	this.phase = new lib.phase();
	this.phase.name = "phase";
	this.phase.setTransform(960,540,1,1,0,0,0,960,540);

	this.instance_14 = new lib.Tween1("synched",0);
	this.instance_14.setTransform(957,27);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.setTransform(957,1279);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.road}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.phase}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},21).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off:false},0).to({_off:true,y:1279},21).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(444.1,-1187,2104.6,5265.6);
// library properties:
lib.properties = {
	id: '93F50CD7B7C3C74AA372B74C08CC34A4',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/arm.png", id:"arm"},
		{src:"images/background.png", id:"background"},
		{src:"images/background_1.png", id:"background_1"},
		{src:"images/background_2.png", id:"background_2"},
		{src:"images/background_3.png", id:"background_3"},
		{src:"images/background_4.png", id:"background_4"},
		{src:"images/ball.png", id:"ball"},
		{src:"images/blades.png", id:"blades"},
		{src:"images/carenemy.png", id:"carenemy"},
		{src:"images/carhero.png", id:"carhero"},
		{src:"images/characters.png", id:"characters"},
		{src:"images/characters_1.png", id:"characters_1"},
		{src:"images/characters_2.png", id:"characters_2"},
		{src:"images/crash.png", id:"crash"},
		{src:"images/curtainsclosed.png", id:"curtainsclosed"},
		{src:"images/curtainsopen.png", id:"curtainsopen"},
		{src:"images/fan.png", id:"fan"},
		{src:"images/foreground.png", id:"foreground"},
		{src:"images/image.png", id:"image"},
		{src:"images/lines.png", id:"lines"},
		{src:"images/paper.png", id:"paper"},
		{src:"images/ribbondown.png", id:"ribbondown"},
		{src:"images/smoke1.png", id:"smoke1"},
		{src:"images/smoke2.png", id:"smoke2"},
		{src:"images/text.png", id:"text"},
		{src:"images/tree.png", id:"tree"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['93F50CD7B7C3C74AA372B74C08CC34A4'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;