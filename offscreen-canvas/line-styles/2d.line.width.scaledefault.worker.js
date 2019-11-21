// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.line.width.scaledefault
// Description:Default lineWidth strokes are affected by scale transformations
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Default lineWidth strokes are affected by scale transformations");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
ctx.scale(50, 50);
ctx.strokeStyle = '#0f0';
ctx.moveTo(0, 0.5);
ctx.lineTo(2, 0.5);
ctx.stroke();
_assertPixel(offscreenCanvas, 25,25, 0,255,0,255, "25,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 75,25, 0,255,0,255, "75,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,5, 0,255,0,255, "50,5", "0,255,0,255");
_assertPixel(offscreenCanvas, 50,45, 0,255,0,255, "50,45", "0,255,0,255");

t.done();

});
done();
