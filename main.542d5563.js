parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return a(e)}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=document.querySelector("body"),c=document.querySelector("tbody");c.classList.add("table-body"),i.insertAdjacentHTML("beforeend",'\n<form action="" class="new-employee-form">\n<label>\n  Name:\n  <input\n    pattern="[A-Za-z]"\n    name="name" \n    type="text" \n    data-qa="name" \n    required\n    minlength ="4"\n    value=""\n  >\n</label>\n\n<label>\n  Position:\n  <input \n    name="position"\n    type="text" \n    data-qa="position"\n    required\n    value=""\n  >\n</label>\n\n<label>\n  Office:\n  <select \n  nema="office" \n  type="text" \n  data-qa="office"\n  required\n  value=""\n>\n  <option value="" disabled selected></option>\n  <option value="Tokyo">Tokyo</option>\n  <option value="Singapore">Singapore</option>\n  <option value="New York">New York</option>\n  <option value="Edinburgh">Edinburgh</option>\n  <option value="San Francisco">San Francisco</option>\n  </select>\n</label>\n\n<label>\n  Age:\n  <input \n  name="age" \n  type="number" \n  data-qa="age" \n  min="18"\n  max="90"\n  required\n  value=""\n>\n</label>\n\n<label>\n  Salary:\n  <input \n  name="salary" \n  type="number" \n  data-qa="salary"\n  required\n  value=""\n  >\n</label>\n\n<button type="submit">Save to table</button>\n</form>\n');var l=document.querySelector("button");function u(e){return e.replace(/\D/g,"")}var d,s=0,f=0,p=0,b=0,v=0;function y(){s=0,f=0,p=0,b=0,v=0}document.querySelector("thead").addEventListener("click",function(n){var t=n.target,r=e(document.querySelector("tbody").querySelectorAll("tr")),o=[];function a(e){return e.sort(function(e,n){return e.children[t.cellIndex].innerText.localeCompare(n.children[t.cellIndex].innerText)})}switch(t.innerText){case"Name":if(s>0){o=r.reverse();break}y(),s++,o=a(r);break;case"Position":if(f>0){o=r.reverse();break}y(),f++,o=a(r);break;case"Office":if(p>0){o=r.reverse();break}y(),p++,o=a(r);break;case"Age":if(b>0){o=r.reverse();break}y(),b++,o=r.sort(function(e,n){return+e.children[t.cellIndex].innerText-+n.children[t.cellIndex].innerText});break;case"Salary":if(v>0){o=r.reverse();break}y(),v++,o=r.sort(function(e,n){return u(e.children[t.cellIndex].innerText)-u(n.children[t.cellIndex].innerText)})}c.append.apply(c,e(o))}),c.addEventListener("click",function(n){e(document.querySelectorAll(".active")).forEach(function(e){return e.classList.remove("active")}),n.target.closest("tr").classList.add("active")}),l.onclick=function(n){n.preventDefault();var t=e(document.querySelectorAll("label")),r=[];if((r=t.map(function(n){return e(n.children)[0].value})).some(function(e){return""===e})||r[0].length<4||r[3]<=18||r[3]>=90)return i.insertAdjacentHTML("afterend",'\n    <div class="notification error" style="position: fixed">\n      <h2>Error</h2>\n      <p>Fields filled out incorrectly. Umya must have 4 \n      characters, age must be greater than 18 and less than 90</p>\n      </br>\n    </div>\n  '),void setTimeout(function(){return document.querySelector(".notification").remove()},5e3);var o="\n    <tr>\n      <td>".concat(r[0],"</td>\n      <td>").concat(r[1],"</td>\n      <td>").concat(r[2],"</td>\n      <td>").concat(r[3],"</td>\n      <td>").concat("$"+(+r[4]).toLocaleString(),"</td>\n    </tr>\n  ");c.insertAdjacentHTML("afterbegin",o),i.insertAdjacentHTML("afterend",'\n  <div class="notification success" style="position: fixed">\n    <h2>Well done</h2>\n    <p>You have added a new employee</p>\n    </br>\n  </div>\n'),setTimeout(function(){return document.querySelector(".notification").remove()},2e3),t.map(function(n){return e(n.children)[0].value="",n})},window.addEventListener("dblclick",function(e){null!==e.target.closest("tbody")&&e.target.closest("tbody").classList.contains("table-body")&&(d=e.target.innerText,e.target.closest("td").innerHTML='\n    <input \n      class="input-edit" \n      value="'.concat(d,'"\n      style="\n        outline:none;\n        background: none;\n        font-size:15px; \n        height: 28px;\n        width: 100px;\n      "\n    >\n    '))}),window.addEventListener("click",function(e){var n=document.querySelector(".input-edit");null===n||e.target.classList.contains("input-edit")||(""===n.value&&(n.closest("td").innerHTML=d),n.closest("td").innerHTML="".concat(n.value))}),window.addEventListener("keypress",function(e){if("Enter"===e.key){var n=document.querySelector(".input-edit");""===n.value&&(n.closest("td").innerHTML=d),n.closest("td").innerHTML="".concat(n.value)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.542d5563.js.map