/**
 * Bundled by jsDelivr using Rollup v2.79.2 and Terser v5.39.0.
 * Original file: /npm/rematrix@0.2.2/dist/rematrix.es.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! @license Rematrix v0.2.2

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
function r(r){if(r.constructor!==Array)throw new TypeError("Expected array.");if(16===r.length)return r;if(6===r.length){var n=t();return n[0]=r[0],n[1]=r[1],n[4]=r[2],n[5]=r[3],n[12]=r[4],n[13]=r[5],n}throw new RangeError("Expected array with either 6 or 16 values.")}function t(){for(var r=[],t=0;t<16;t++)t%5==0?r.push(1):r.push(0);return r}function n(t){var n=r(t),a=n[0]*n[5]-n[4]*n[1],e=n[0]*n[6]-n[4]*n[2],u=n[0]*n[7]-n[4]*n[3],o=n[1]*n[6]-n[5]*n[2],i=n[1]*n[7]-n[5]*n[3],f=n[2]*n[7]-n[6]*n[3],c=n[10]*n[15]-n[14]*n[11],h=n[9]*n[15]-n[13]*n[11],v=n[9]*n[14]-n[13]*n[10],M=n[8]*n[15]-n[12]*n[11],s=n[8]*n[14]-n[12]*n[10],p=n[8]*n[13]-n[12]*n[9],d=1/(a*c-e*h+u*v+o*M-i*s+f*p);if(isNaN(d)||d===1/0)throw new Error("Inverse determinant attempted to divide by zero.");return[(n[5]*c-n[6]*h+n[7]*v)*d,(-n[1]*c+n[2]*h-n[3]*v)*d,(n[13]*f-n[14]*i+n[15]*o)*d,(-n[9]*f+n[10]*i-n[11]*o)*d,(-n[4]*c+n[6]*M-n[7]*s)*d,(n[0]*c-n[2]*M+n[3]*s)*d,(-n[12]*f+n[14]*u-n[15]*e)*d,(n[8]*f-n[10]*u+n[11]*e)*d,(n[4]*h-n[5]*M+n[7]*p)*d,(-n[0]*h+n[1]*M-n[3]*p)*d,(n[12]*i-n[13]*u+n[15]*a)*d,(-n[8]*i+n[9]*u-n[11]*a)*d,(-n[4]*v+n[5]*s-n[6]*p)*d,(n[0]*v-n[1]*s+n[2]*p)*d,(-n[12]*o+n[13]*e-n[14]*a)*d,(n[8]*o-n[9]*e+n[10]*a)*d]}function a(t,n){for(var a=r(t),e=r(n),u=[],o=0;o<4;o++)for(var i=[a[o],a[o+4],a[o+8],a[o+12]],f=0;f<4;f++){var c=4*f,h=[e[c],e[c+1],e[c+2],e[c+3]],v=i[0]*h[0]+i[1]*h[1]+i[2]*h[2]+i[3]*h[3];u[o+c]=v}return u}function e(n){if("string"==typeof n){var a=n.match(/matrix(3d)?\(([^)]+)\)/);if(a)return r(a[2].split(", ").map(parseFloat))}return t()}function u(r){return f(r)}function o(r){var n=Math.PI/180*r,a=t();return a[5]=a[10]=Math.cos(n),a[6]=a[9]=Math.sin(n),a[9]*=-1,a}function i(r){var n=Math.PI/180*r,a=t();return a[0]=a[10]=Math.cos(n),a[2]=a[8]=Math.sin(n),a[2]*=-1,a}function f(r){var n=Math.PI/180*r,a=t();return a[0]=a[5]=Math.cos(n),a[1]=a[4]=Math.sin(n),a[4]*=-1,a}function c(r,n){var a=t();return a[0]=r,a[5]="number"==typeof n?n:r,a}function h(r){var n=t();return n[0]=r,n}function v(r){var n=t();return n[5]=r,n}function M(r){var n=t();return n[10]=r,n}function s(r,n){var a=Math.PI/180*r,e=t();if(e[4]=Math.tan(a),n){var u=Math.PI/180*n;e[1]=Math.tan(u)}return e}function p(r){var n=Math.PI/180*r,a=t();return a[4]=Math.tan(n),a}function d(r){var n=Math.PI/180*r,a=t();return a[1]=Math.tan(n),a}function l(r,n){var a=t();return a[12]=r,n&&(a[13]=n),a}function I(r){var n=t();return n[12]=r,n}function w(r){var n=t();return n[13]=r,n}function y(r){var n=t();return n[14]=r,n}export{r as format,t as identity,n as inverse,a as multiply,e as parse,u as rotate,o as rotateX,i as rotateY,f as rotateZ,c as scale,h as scaleX,v as scaleY,M as scaleZ,s as skew,p as skewX,d as skewY,l as translate,I as translateX,w as translateY,y as translateZ};export default null;
