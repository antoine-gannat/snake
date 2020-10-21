(()=>{"use strict";var t={772:(t,e,i)=>{i.d(e,{Z:()=>s});var n=i(645),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,"html,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n}\n\ncanvas {\n  border: 1px solid black;\n  display: flex;\n  margin: auto;\n}\n",""]);const s=r},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var s=0;s<this.length;s++){var o=this[s][0];null!=o&&(r[o]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);n&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),e.push(c))}},e}},379:(t,e,i)=>{var n,r=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}(),s=[];function o(t){for(var e=-1,i=0;i<s.length;i++)if(s[i].identifier===t){e=i;break}return e}function a(t,e){for(var i={},n=[],r=0;r<t.length;r++){var a=t[r],c=e.base?a[0]+e.base:a[0],h=i[c]||0,d="".concat(c," ").concat(h);i[c]=h+1;var l=o(d),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(s[l].references++,s[l].updater(u)):s.push({identifier:d,updater:p(u,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=i.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var o=r(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var h,d=(h=[],function(t,e){return h[t]=e,h.filter(Boolean).join("\n")});function l(t,e,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function u(t,e,i){var n=i.css,r=i.media,s=i.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,v=0;function p(t,e){var i,n,r;if(e.singleton){var s=v++;i=f||(f=c(e)),n=l.bind(null,i,s,!1),r=l.bind(null,i,s,!0)}else i=c(e),n=u.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<i.length;n++){var r=o(i[n]);s[r].references--}for(var c=a(t,e),h=0;h<i.length;h++){var d=o(i[h]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}i=c}}}}},e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t,e;!function(t){t[t.SNAKE=0]="SNAKE",t[t.FRUIT=1]="FRUIT"}(t||(t={}));class n{constructor(){this.canvas=document.createElement("canvas"),document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resizeCanvas(),window.addEventListener("resize",this.resizeCanvas.bind(this))}resizeCanvas(){const t=window.innerWidth<window.innerHeight?window.innerWidth:window.innerHeight;this.cellSizeInPixels={width:t/o.width,height:t/o.height},this.ctx.canvas.width=t,this.ctx.canvas.height=t}clear(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}render(e){e.forEach(((e,i)=>{switch(e){case t.SNAKE:this.ctx.fillStyle="green";break;case t.FRUIT:this.ctx.fillStyle="red";break;default:return}this.ctx.fillRect(i.x*this.cellSizeInPixels.width,i.y*this.cellSizeInPixels.height,this.cellSizeInPixels.width,this.cellSizeInPixels.height)}))}}class r{constructor(){this.elements=[]}set(t,e){this.elements.push([t,e])}get(t){for(const e of this.elements)if(e[0].x===t.x&&e[0].y===t.y)return e[1]}forEach(t){for(const e of this.elements)t(e[1],e[0])}delete(t){for(let e=0;e<this.elements.length;e++){const i=this.elements[e];if(i[0].x===t.x&&i[0].y===t.y)return void this.elements.splice(e,1)}}}!function(t){t.UP="ArrowUp",t.DOWN="ArrowDown",t.LEFT="ArrowLeft",t.RIGHT="ArrowRight"}(e||(e={}));class s{constructor(t){this.bodyParts=[],this.direction=e.RIGHT,this.grow=!1,this.bodyParts.push(t),window.addEventListener("keydown",this.changeDirection.bind(this))}changeDirection(t){let i=t.key;switch(i){case e.UP:this.direction=this.direction!==e.DOWN?i:this.direction;break;case e.DOWN:this.direction=this.direction!==e.UP?i:this.direction;break;case e.LEFT:this.direction=this.direction!==e.RIGHT?i:this.direction;break;case e.RIGHT:this.direction=this.direction!==e.LEFT?i:this.direction}}checkColision(e,i){switch(e.get(i)){case t.SNAKE:alert("You lost ! Score: "+10*this.bodyParts.length),window.location.reload();case t.FRUIT:this.grow=!0,e.delete(i)}}moveBodyParts(e,i){const n=this.bodyParts[this.bodyParts.length-1],r={x:n.x,y:n.y};for(let n=this.bodyParts.length-1;n>=0;n--)e.delete(this.bodyParts[n]),this.bodyParts[n]=0===n?i:this.bodyParts[n-1],e.set(this.bodyParts[n],t.SNAKE);this.grow&&(this.bodyParts.push(r),this.grow=!1)}move(t){const i={x:this.bodyParts[0].x,y:this.bodyParts[0].y};switch(this.direction){case e.UP:i.y=i.y-1<0?o.height-1:i.y-1;break;case e.DOWN:i.y=i.y+1>=o.height?0:i.y+1;break;case e.LEFT:i.x=i.x-1<0?o.width-1:i.x-1;break;case e.RIGHT:i.x=i.x+1>=o.width?0:i.x+1}this.checkColision(t,i),this.moveBodyParts(t,i)}}const o={width:20,height:20};var a=i(379),c=i.n(a),h=i(772);c()(h.Z,{insert:"head",singleton:!1}),h.Z.locals,new class{constructor(){this.canvas=new n,this.map=new r,this.snake=new s({x:o.width/2,y:o.height/2}),this.start()}mainloop(){this.canvas.clear(),this.snake.move(this.map),this.canvas.render(this.map)}getRandomCell(){function t(t){return Math.floor(Math.random()*Math.floor(t))}return{x:t(o.width),y:t(o.height)}}addFruit(){let e;for(;this.map.get(e=this.getRandomCell()););this.map.set(e,t.FRUIT)}start(){setInterval(this.mainloop.bind(this),300),setInterval(this.addFruit.bind(this),5e3)}}})()})();