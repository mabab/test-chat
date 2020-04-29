(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[3],{42:function(e,t,n){(function(t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
/**
 * @license Copyright 2020, Ably
 *
 * Ably JavaScript Library v1.1.24
 * https://github.com/ably/ably-js
 *
 * Ably Realtime Messaging
 * https://www.ably.io
 *
 * Released under the Apache Licence v2.0
 */var i,r,o,s={},a="object"===("undefined"==typeof window?"undefined":n(window))&&window||"object"===("undefined"==typeof self?"undefined":n(self))&&self,c=c||function(e,t){var n={},i=n.lib={},r=i.Base=function(){function e(){}return{extend:function(t){e.prototype=this
var n=new e
return t&&n.mixIn(t),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend()
return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])
e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=i.WordArray=r.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||a).stringify(this)},concat:function(e){var t=this.words,n=e.words,i=this.sigBytes,r=e.sigBytes
if(this.clamp(),i%4)for(var o=0;o<r;o++){var s=n[o>>>2]>>>24-o%4*8&255
t[i+o>>>2]|=s<<24-(i+o)%4*8}else if(n.length>65535)for(o=0;o<r;o+=4)t[i+o>>>2]=n[o>>>2]
else t.push.apply(t,n)
return this.sigBytes+=r,this},clamp:function(){var t=this.words,n=this.sigBytes
t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=r.clone.call(this)
return e.words=this.words.slice(0),e},random:function(t){for(var n,i=[],r=function(t){t=t
var n=987654321,i=4294967295
return function(){var r=((n=36969*(65535&n)+(n>>16)&i)<<16)+(t=18e3*(65535&t)+(t>>16)&i)&i
return r/=4294967296,(r+=.5)*(e.random()>.5?1:-1)}},s=0;s<t;s+=4){var a=r(4294967296*(n||e.random()))
n=987654071*a(),i.push(4294967296*a()|0)}return new o.init(i,t)}}),s=n.enc={},a=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255
i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i+=2)n[i>>>3]|=parseInt(e.substr(i,2),16)<<24-i%8*4
return new o.init(n,t/2)}},c=s.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,i=[],r=0;r<n;r++){var o=t[r>>>2]>>>24-r%4*8&255
i.push(String.fromCharCode(o))}return i.join("")},parse:function(e){for(var t=e.length,n=[],i=0;i<t;i++)n[i>>>2]|=(255&e.charCodeAt(i))<<24-i%4*8
return new o.init(n,t)}},u=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},h=i.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,i=n.words,r=n.sigBytes,s=this.blockSize,a=r/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,u=e.min(4*c,r)
if(c){for(var h=0;h<c;h+=s)this._doProcessBlock(i,h)
var l=i.splice(0,c)
n.sigBytes-=u}return new o.init(l,u)},clone:function(){var e=r.clone.call(this)
return e._data=this._data.clone(),e},_minBufferSize:0}),l=(i.Hasher=h.extend({cfg:r.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new l.HMAC.init(e,n).finalize(t)}}}),n.algo={})
return n}(Math)
!function(e){var t=c,n=t.lib,i=n.WordArray,r=n.Hasher,o=t.algo,s=[],a=[]
!function(){function t(t){for(var n=e.sqrt(t),i=2;i<=n;i++)if(!(t%i))return!1
return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var i=2,r=0;r<64;)t(i)&&(r<8&&(s[r]=n(e.pow(i,.5))),a[r]=n(e.pow(i,1/3)),r++),i++}()
var u=[],h=o.SHA256=r.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,i=n[0],r=n[1],o=n[2],s=n[3],c=n[4],h=n[5],l=n[6],p=n[7],f=0;f<64;f++){if(f<16)u[f]=0|e[t+f]
else{var d=u[f-15],g=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,m=u[f-2],y=(m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10
u[f]=g+u[f-7]+y+u[f-16]}var v=i&r^i&o^r&o,O=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),R=p+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&h^~c&l)+a[f]+u[f]
p=l,l=h,h=c,c=s+R|0,s=o,o=r,r=i,i=R+(O+v)|0}n[0]=n[0]+i|0,n[1]=n[1]+r|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0,n[5]=n[5]+h|0,n[6]=n[6]+l|0,n[7]=n[7]+p|0},_doFinalize:function(){var t=this._data,n=t.words,i=8*this._nDataBytes,r=8*t.sigBytes
return n[r>>>5]|=128<<24-r%32,n[14+(r+64>>>9<<4)]=e.floor(i/4294967296),n[15+(r+64>>>9<<4)]=i,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this)
return e._hash=this._hash.clone(),e}})
t.SHA256=r._createHelper(h),t.HmacSHA256=r._createHmacHelper(h)}(Math),r=(i=c).lib.Base,o=i.enc.Utf8,i.algo.HMAC=r.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=o.parse(t))
var n=e.blockSize,i=4*n
t.sigBytes>i&&(t=e.finalize(t)),t.clamp()
for(var r=this._oKey=t.clone(),s=this._iKey=t.clone(),a=r.words,c=s.words,u=0;u<n;u++)a[u]^=1549556828,c[u]^=909522486
r.sigBytes=s.sigBytes=i,this.reset()},reset:function(){var e=this._hasher
e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e)
return t.reset(),t.finalize(this._oKey.clone().concat(n))}}),function(){var e=c,t=e.lib.WordArray
e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,i=this._map
e.clamp()
for(var r=[],o=0;o<n;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)r.push(i.charAt(s>>>6*(3-a)&63))
var c=i.charAt(64)
if(c)for(;r.length%4;)r.push(c)
return r.join("")},parse:function(e){var n=e.length,i=this._map,r=i.charAt(64)
if(r){var o=e.indexOf(r);-1!=o&&(n=o)}for(var s=[],a=0,c=0;c<n;c++)if(c%4){var u=i.indexOf(e.charAt(c-1))<<c%4*2,h=i.indexOf(e.charAt(c))>>>6-c%4*2
s[a>>>2]|=(u|h)<<24-a%4*8,a++}return t.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),c.lib.Cipher||function(e){var t=c,n=t.lib,i=n.Base,r=n.WordArray,o=n.BufferedBlockAlgorithm,s=t.enc,a=(s.Utf8,s.Base64),u=t.algo.EvpKDF,h=n.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?O:y}return function(t){return{encrypt:function(n,i,r){return e(i).encrypt(t,n,i,r)},decrypt:function(n,i,r){return e(i).decrypt(t,n,i,r)}}}}()}),l=(n.StreamCipher=h.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),t.mode={}),p=n.BlockCipherMode=i.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),f=l.CBC=function(){var e=p.extend()
function t(e,t,n){var i=this._iv
if(i){var r=i
this._iv=void 0}else r=this._prevBlock
for(var o=0;o<n;o++)e[t+o]^=r[o]}return e.Encryptor=e.extend({processBlock:function(e,n){var i=this._cipher,r=i.blockSize
t.call(this,e,n,r),i.encryptBlock(e,n),this._prevBlock=e.slice(n,n+r)}}),e.Decryptor=e.extend({processBlock:function(e,n){var i=this._cipher,r=i.blockSize,o=e.slice(n,n+r)
i.decryptBlock(e,n),t.call(this,e,n,r),this._prevBlock=o}}),e}(),d=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,i=n-e.sigBytes%n,o=i<<24|i<<16|i<<8|i,s=[],a=0;a<i;a+=4)s.push(o)
var c=r.create(s,i)
e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2]
e.sigBytes-=t}},g=(n.BlockCipher=h.extend({cfg:h.cfg.extend({mode:f,padding:d}),reset:function(){h.reset.call(this)
var e=this.cfg,t=e.iv,n=e.mode
if(this._xformMode==this._ENC_XFORM_MODE)var i=n.createEncryptor
else i=n.createDecryptor,this._minBufferSize=1
this._mode=i.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding
if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize)
var t=this._process(!0)}else t=this._process(!0),e.unpad(t)
return t},blockSize:4}),n.CipherParams=i.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),m=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt
if(n)var i=r.create([1398893684,1701076831]).concat(n).concat(t)
else i=t
return i.toString(a)},parse:function(e){var t=a.parse(e),n=t.words
if(1398893684==n[0]&&1701076831==n[1]){var i=r.create(n.slice(2,4))
n.splice(0,4),t.sigBytes-=16}return g.create({ciphertext:t,salt:i})}},y=n.SerializableCipher=i.extend({cfg:i.extend({format:m}),encrypt:function(e,t,n,i){i=this.cfg.extend(i)
var r=e.createEncryptor(n,i),o=r.finalize(t),s=r.cfg
return g.create({ciphertext:o,key:n,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,n,i){return i=this.cfg.extend(i),t=this._parse(t,i.format),e.createDecryptor(n,i).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),v=(t.kdf={}).OpenSSL={execute:function(e,t,n,i){i||(i=r.random(8))
var o=u.create({keySize:t+n}).compute(e,i),s=r.create(o.words.slice(t),4*n)
return o.sigBytes=4*t,g.create({key:o,iv:s,salt:i})}},O=n.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:v}),encrypt:function(e,t,n,i){var r=(i=this.cfg.extend(i)).kdf.execute(n,e.keySize,e.ivSize)
i.iv=r.iv
var o=y.encrypt.call(this,e,t,r.key,i)
return o.mixIn(r),o},decrypt:function(e,t,n,i){i=this.cfg.extend(i),t=this._parse(t,i.format)
var r=i.kdf.execute(n,e.keySize,e.ivSize,t.salt)
return i.iv=r.iv,y.decrypt.call(this,e,t,r.key,i)}})}(),function(){var e=c,t=e.lib.BlockCipher,n=e.algo,i=[],r=[],o=[],s=[],a=[],u=[],h=[],l=[],p=[],f=[]
!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283
var n=0,c=0
for(t=0;t<256;t++){var d=c^c<<1^c<<2^c<<3^c<<4
d=d>>>8^255&d^99,i[n]=d,r[d]=n
var g=e[n],m=e[g],y=e[m],v=257*e[d]^16843008*d
o[n]=v<<24|v>>>8,s[n]=v<<16|v>>>16,a[n]=v<<8|v>>>24,u[n]=v,v=16843009*y^65537*m^257*g^16843008*n,h[d]=v<<24|v>>>8,l[d]=v<<16|v>>>16,p[d]=v<<8|v>>>24,f[d]=v,n?(n=g^e[e[e[y^g]]],c^=e[e[c]]):n=c=1}}()
var d=[0,1,2,4,8,16,32,64,128,27,54],g=n.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,r=4*((this._nRounds=n+6)+1),o=this._keySchedule=[],s=0;s<r;s++)if(s<n)o[s]=t[s]
else{var a=o[s-1]
s%n?n>6&&s%n==4&&(a=i[a>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a]):(a=i[(a=a<<8|a>>>24)>>>24]<<24|i[a>>>16&255]<<16|i[a>>>8&255]<<8|i[255&a],a^=d[s/n|0]<<24),o[s]=o[s-n]^a}for(var c=this._invKeySchedule=[],u=0;u<r;u++)s=r-u,a=u%4?o[s]:o[s-4],c[u]=u<4||s<=4?a:h[i[a>>>24]]^l[i[a>>>16&255]]^p[i[a>>>8&255]]^f[i[255&a]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,s,a,u,i)},decryptBlock:function(e,t){var n=e[t+1]
e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,h,l,p,f,r),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,i,r,o,s,a){for(var c=this._nRounds,u=e[t]^n[0],h=e[t+1]^n[1],l=e[t+2]^n[2],p=e[t+3]^n[3],f=4,d=1;d<c;d++){var g=i[u>>>24]^r[h>>>16&255]^o[l>>>8&255]^s[255&p]^n[f++],m=i[h>>>24]^r[l>>>16&255]^o[p>>>8&255]^s[255&u]^n[f++],y=i[l>>>24]^r[p>>>16&255]^o[u>>>8&255]^s[255&h]^n[f++],v=i[p>>>24]^r[u>>>16&255]^o[h>>>8&255]^s[255&l]^n[f++]
u=g,h=m,l=y,p=v}g=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[l>>>8&255]<<8|a[255&p])^n[f++],m=(a[h>>>24]<<24|a[l>>>16&255]<<16|a[p>>>8&255]<<8|a[255&u])^n[f++],y=(a[l>>>24]<<24|a[p>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^n[f++],v=(a[p>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&l])^n[f++],e[t]=g,e[t+1]=m,e[t+2]=y,e[t+3]=v},keySize:8})
e.AES=t._createHelper(g)}(),function(){if("undefined"!=typeof ArrayBuffer){var e=c.lib.WordArray,t=e.init;(e.init=function(e){if(e instanceof ArrayBuffer?e=new Uint8Array(e):(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||"undefined"!=typeof Float32Array&&e instanceof Float32Array||"undefined"!=typeof Float64Array&&e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var n=e.byteLength,i=[],r=0;r<n;r++)i[r>>>2]|=e[r]<<24-r%4*8
t.call(this,i,n)}else t.apply(this,arguments)}).prototype=e}}()
var u=function(){function e(){}return e.addListener=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,(function(){n.apply(e,arguments)}))},e.removeListener=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,(function(){n.apply(e,arguments)}))},e.addMessageListener=function(t,n){e.addListener(t,"message",n)},e.removeMessageListener=function(t,n){e.removeListener(t,"message",n)},e.addUnloadListener=function(t){e.addListener(a,"unload",t)},e}(),h=function(){"use strict"
var e={}
function t(e,t,n){e.byteLength
for(var i=0,r=n.length;i<r;i++){var o=n.charCodeAt(i)
if(o<128)e.setUint8(t++,o>>>0&127|0)
else if(o<2048)e.setUint8(t++,o>>>6&31|192),e.setUint8(t++,o>>>0&63|128)
else if(o<65536)e.setUint8(t++,o>>>12&15|224),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128)
else{if(!(o<1114112))throw new Error("bad codepoint "+o)
e.setUint8(t++,o>>>18&7|240),e.setUint8(t++,o>>>12&63|128),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128)}}}function i(e,t,n){for(var i="",r=t,o=t+n;r<o;r++){var s=e.getUint8(r)
if(0!=(128&s))if(192!=(224&s))if(224!=(240&s)){if(240!=(248&s))throw new Error("Invalid byte "+s.toString(16))
i+=String.fromCharCode((7&s)<<18|(63&e.getUint8(++r))<<12|(63&e.getUint8(++r))<<6|(63&e.getUint8(++r))<<0)}else i+=String.fromCharCode((15&s)<<12|(63&e.getUint8(++r))<<6|(63&e.getUint8(++r))<<0)
else i+=String.fromCharCode((15&s)<<6|63&e.getUint8(++r))
else i+=String.fromCharCode(s)}return i}function r(e){for(var t=0,n=0,i=e.length;n<i;n++){var r=e.charCodeAt(n)
if(r<128)t+=1
else if(r<2048)t+=2
else if(r<65536)t+=3
else{if(!(r<1114112))throw new Error("bad codepoint "+r)
t+=4}}return t}function o(e,t){this.offset=t||0,this.view=e}function s(e,t){return v.keysArray(e,!0).filter((function(i){var r=e[i],o=n(r)
return!(t&&null==r||"function"===o&&!r.toJSON)}))}return e.inspect=function(e){if(void 0===e)return"undefined"
var t,n
if(e instanceof ArrayBuffer?(n="ArrayBuffer",t=new DataView(e)):e instanceof DataView&&(n="DataView",t=e),!t)return JSON.stringify(e)
for(var i=[],r=0;r<e.byteLength;r++){if(r>20){i.push("...")
break}var o=t.getUint8(r).toString(16)
1===o.length&&(o="0"+o),i.push(o)}return"<"+n+" "+i.join(" ")+">"},e.utf8Write=t,e.utf8Read=i,e.utf8ByteCount=r,e.encode=function(e,i){var o=function e(t,i){var o=n(t)
if("string"===o){if((a=r(t))<32)return 1+a
if(a<256)return 2+a
if(a<65536)return 3+a
if(a<4294967296)return 5+a}if(ArrayBuffer.isView&&ArrayBuffer.isView(t)&&(t=t.buffer),t instanceof ArrayBuffer){if((a=t.byteLength)<256)return 2+a
if(a<65536)return 3+a
if(a<4294967296)return 5+a}if("number"===o){if(Math.floor(t)!==t)return 9
if(t>=0){if(t<128)return 1
if(t<256)return 2
if(t<65536)return 3
if(t<4294967296)return 5
if(t<0x10000000000000000)return 9
throw new Error("Number too big 0x"+t.toString(16))}if(t>=-32)return 1
if(t>=-128)return 2
if(t>=-32768)return 3
if(t>=-2147483648)return 5
if(t>=-0x8000000000000000)return 9
throw new Error("Number too small -0x"+t.toString(16).substr(1))}if("boolean"===o)return 1
if(null===t)return i?0:1
if(void 0===t)return i?0:3
if("function"==typeof t.toJSON)return e(t.toJSON(),i)
if("object"===o){var a,c=0
if(Array.isArray(t)){a=t.length
for(var u=0;u<a;u++)c+=e(t[u],i)}else{var h=s(t,i)
for(a=h.length,u=0;u<a;u++){var l=h[u]
c+=e(l)+e(t[l],i)}}if(a<16)return 1+c
if(a<65536)return 3+c
if(a<4294967296)return 5+c
throw new Error("Array or object too long 0x"+a.toString(16))}if("function"===o)return 0
throw new Error("Unknown type "+o)}(e,i)
if(0!=o){var a=new ArrayBuffer(o)
return function e(i,o,a,c){var u=n(i)
if("string"===u){if((h=r(i))<32)return o.setUint8(a,160|h),t(o,a+1,i),1+h
if(h<256)return o.setUint8(a,217),o.setUint8(a+1,h),t(o,a+2,i),2+h
if(h<65536)return o.setUint8(a,218),o.setUint16(a+1,h),t(o,a+3,i),3+h
if(h<4294967296)return o.setUint8(a,219),o.setUint32(a+1,h),t(o,a+5,i),5+h}if(ArrayBuffer.isView&&ArrayBuffer.isView(i)&&(i=i.buffer),i instanceof ArrayBuffer){if((h=i.byteLength)<256)return o.setUint8(a,196),o.setUint8(a+1,h),new Uint8Array(o.buffer).set(new Uint8Array(i),a+2),2+h
if(h<65536)return o.setUint8(a,197),o.setUint16(a+1,h),new Uint8Array(o.buffer).set(new Uint8Array(i),a+3),3+h
if(h<4294967296)return o.setUint8(a,198),o.setUint32(a+1,h),new Uint8Array(o.buffer).set(new Uint8Array(i),a+5),5+h}if("number"===u){if(Math.floor(i)!==i)return o.setUint8(a,203),o.setFloat64(a+1,i),9
if(i>=0){if(i<128)return o.setUint8(a,i),1
if(i<256)return o.setUint8(a,204),o.setUint8(a+1,i),2
if(i<65536)return o.setUint8(a,205),o.setUint16(a+1,i),3
if(i<4294967296)return o.setUint8(a,206),o.setUint32(a+1,i),5
if(i<0x10000000000000000)return o.setUint8(a,207),function(e,t,n){n<0x10000000000000000?(e.setUint32(t,Math.floor(2.3283064365386963e-10*n)),e.setInt32(t+4,-1&n)):(e.setUint32(t,4294967295),e.setUint32(t+4,4294967295))}(o,a+1,i),9
throw new Error("Number too big 0x"+i.toString(16))}if(i>=-32)return o.setInt8(a,i),1
if(i>=-128)return o.setUint8(a,208),o.setInt8(a+1,i),2
if(i>=-32768)return o.setUint8(a,209),o.setInt16(a+1,i),3
if(i>=-2147483648)return o.setUint8(a,210),o.setInt32(a+1,i),5
if(i>=-0x8000000000000000)return o.setUint8(a,211),function(e,t,n){n<0x8000000000000000?(e.setInt32(t,Math.floor(2.3283064365386963e-10*n)),e.setInt32(t+4,-1&n)):(e.setUint32(t,2147483647),e.setUint32(t+4,2147483647))}(o,a+1,i),9
throw new Error("Number too small -0x"+(-i).toString(16).substr(1))}if("undefined"===u)return c?0:(o.setUint8(a,212),o.setUint8(a+1,0),o.setUint8(a+2,0),3)
if(null===i)return c?0:(o.setUint8(a,192),1)
if("boolean"===u)return o.setUint8(a,i?195:194),1
if("function"==typeof i.toJSON)return e(i.toJSON(),o,a,c)
if("object"===u){var h,l=0,p=Array.isArray(i)
if(p)h=i.length
else{var f=s(i,c)
h=f.length}if(h<16?(o.setUint8(a,h|(p?144:128)),l=1):h<65536?(o.setUint8(a,p?220:222),o.setUint16(a+1,h),l=3):h<4294967296&&(o.setUint8(a,p?221:223),o.setUint32(a+1,h),l=5),p)for(var d=0;d<h;d++)l+=e(i[d],o,a+l,c)
else for(d=0;d<h;d++){var g=f[d]
l+=e(g,o,a+l),l+=e(i[g],o,a+l,c)}return l}if("function"===u)return 0
throw new Error("Unknown type "+u)}(e,new DataView(a),0,i),a}},e.decode=function(e){var t=new o(new DataView(e)),n=t.parse()
if(t.offset!==e.byteLength)throw new Error(e.byteLength-t.offset+" trailing bytes")
return n},o.prototype.map=function(e){for(var t={},n=0;n<e;n++)t[this.parse()]=this.parse()
return t},o.prototype.bin=o.prototype.buf=function(e){var t=new ArrayBuffer(e)
return new Uint8Array(t).set(new Uint8Array(this.view.buffer,this.offset,e),0),this.offset+=e,t},o.prototype.str=function(e){var t=i(this.view,this.offset,e)
return this.offset+=e,t},o.prototype.array=function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=this.parse()
return t},o.prototype.ext=function(e){var t={}
return t.type=this.view.getInt8(this.offset),this.offset++,t.data=this.buf(e),this.offset+=e,t},o.prototype.parse=function(){var e,t,n,i,r=this.view.getUint8(this.offset)
if(0==(128&r))return this.offset++,r
if(128==(240&r))return t=15&r,this.offset++,this.map(t)
if(144==(240&r))return t=15&r,this.offset++,this.array(t)
if(160==(224&r))return t=31&r,this.offset++,this.str(t)
if(224==(224&r))return e=this.view.getInt8(this.offset),this.offset++,e
switch(r){case 192:return this.offset++,null
case 193:return void this.offset++
case 194:return this.offset++,!1
case 195:return this.offset++,!0
case 196:return t=this.view.getUint8(this.offset+1),this.offset+=2,this.bin(t)
case 197:return t=this.view.getUint16(this.offset+1),this.offset+=3,this.bin(t)
case 198:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.bin(t)
case 199:return t=this.view.getUint8(this.offset+1),this.offset+=2,this.ext(t)
case 200:return t=this.view.getUint16(this.offset+1),this.offset+=3,this.ext(t)
case 201:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.ext(t)
case 202:return e=this.view.getFloat32(this.offset+1),this.offset+=5,e
case 203:return e=this.view.getFloat64(this.offset+1),this.offset+=9,e
case 204:return e=this.view.getUint8(this.offset+1),this.offset+=2,e
case 205:return e=this.view.getUint16(this.offset+1),this.offset+=3,e
case 206:return e=this.view.getUint32(this.offset+1),this.offset+=5,e
case 207:return n=this.view,i=(i=this.offset+1)||0,e=4294967296*n.getUint32(i)+n.getUint32(i+4),this.offset+=9,e
case 208:return e=this.view.getInt8(this.offset+1),this.offset+=2,e
case 209:return e=this.view.getInt16(this.offset+1),this.offset+=3,e
case 210:return e=this.view.getInt32(this.offset+1),this.offset+=5,e
case 211:return e=function(e,t){return t=t||0,4294967296*e.getInt32(t)+e.getUint32(t+4)}(this.view,this.offset+1),this.offset+=9,e
case 212:return t=1,this.offset++,this.ext(t)
case 213:return t=2,this.offset++,this.ext(t)
case 214:return t=4,this.offset++,this.ext(t)
case 215:return t=8,this.offset++,this.ext(t)
case 216:return t=16,this.offset++,this.ext(t)
case 217:return t=this.view.getUint8(this.offset+1),this.offset+=2,this.str(t)
case 218:return t=this.view.getUint16(this.offset+1),this.offset+=3,this.str(t)
case 219:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.str(t)
case 220:return t=this.view.getUint16(this.offset+1),this.offset+=3,this.array(t)
case 221:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.array(t)
case 222:return t=this.view.getUint16(this.offset+1),this.offset+=3,this.map(t)
case 223:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.map(t)}throw new Error("Unknown type 0x"+r.toString(16))},e}()
"undefined"==typeof Window&&"undefined"==typeof WorkerGlobalScope&&console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm")
var l,p=a.navigator&&a.navigator.userAgent.toString(),f={libver:"js-web",logTimestamps:!0,userAgent:p,currentUrl:a.location&&a.location.href,noUpgrade:p&&p.match(/MSIE\s8\.0/),binaryType:"arraybuffer",WebSocket:a.WebSocket||a.MozWebSocket,xhrSupported:a.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,jsonpSupported:"undefined"!=typeof document,allowComet:(l=a.location,!a.WebSocket||!l||!l.origin||l.origin.indexOf("http")>-1),streamingSupported:!0,useProtocolHeartbeats:!0,createHmac:null,msgpack:h,supportsBinary:!!a.TextDecoder,preferBinary:!1,ArrayBuffer:a.ArrayBuffer,atob:a.atob,nextTick:function(e){setTimeout(e,0)},addEventListener:a.addEventListener,inspect:JSON.stringify,stringByteSize:function(e){return a.TextDecoder&&(new a.TextEncoder).encode(e).length||e.length},TextEncoder:a.TextEncoder,TextDecoder:a.TextDecoder,Promise:a.Promise,getRandomValues:function(e){if(void 0!==e)return function(t,n){e.getRandomValues(t),n&&n(null)}}(a.crypto||a.msCrypto)},d=function(){var e,t=c.lib.WordArray
if(f.getRandomWordArray)e=f.getRandomWordArray
else if("undefined"!=typeof Uint32Array&&f.getRandomValues){var n=new Uint32Array(4)
e=function(e,t){var i=e/4,r=4==i?n:new Uint32Array(i)
f.getRandomValues(r,(function(e){t(e,y.toWordArray(r))}))}}else e=function(e,n){C.logAction(C.LOG_MAJOR,"Ably.Crypto.generateRandom()","Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()")
for(var i=e/4,r=new Array(i),o=0;o<i;o++)r[o]=Math.floor(4294967296*Math.random())-2147483648
n(null,t.create(r))}
function i(e){if("aes"===e.algorithm&&"cbc"===e.mode){if(128===e.keyLength||256===e.keyLength)return
throw new Error("Unsupported key length "+e.keyLength+" for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")}}function r(e){return e.replace("_","/").replace("-","+")}t.create([0,0,0,0])
var o=[t.create([269488144,269488144,269488144,269488144],16),t.create([16777216],1),t.create([33685504],2),t.create([50529024],3),t.create([67372036],4),t.create([84215045,83886080],5),t.create([101058054,101056512],6),t.create([117901063,117901056],7),t.create([134744072,134744072],8),t.create([151587081,151587081,150994944],9),t.create([168430090,168430090,168427520],10),t.create([185273099,185273099,185273088],11),t.create([202116108,202116108,202116108],12),t.create([218959117,218959117,218959117,218103808],13),t.create([235802126,235802126,235802126,235798528],14),t.create([252645135,252645135,252645135,252645135],15),t.create([269488144,269488144,269488144,269488144],16)]
function s(){}function a(){this.algorithm=null,this.keyLength=null,this.mode=null,this.key=null}function u(e,t,n){this.algorithm=e.algorithm+"-"+String(e.keyLength)+"-"+e.mode,this.cjsAlgorithm=e.algorithm.toUpperCase().replace(/-\d+$/,""),this.key=y.toWordArray(e.key),n&&(this.iv=y.toWordArray(n).clone()),this.blockLengthWords=t}return s.CipherParams=a,s.getDefaultParams=function(e){var t
if("function"!=typeof e&&"string"!=typeof e){if(!e.key)throw new Error("Crypto.getDefaultParams: a key is required")
t="string"==typeof e.key?c.enc.Base64.parse(r(e.key)):y.toWordArray(e.key)
var n=new a
if(n.key=t,n.algorithm=e.algorithm||"aes",n.keyLength=32*t.words.length,n.mode=e.mode||"cbc",e.keyLength&&e.keyLength!==n.keyLength)throw new Error("Crypto.getDefaultParams: a keyLength of "+e.keyLength+" was specified, but the key actually has length "+n.keyLength)
return i(n),n}if(C.deprecated("Crypto.getDefaultParams(key, callback)","Crypto.getDefaultParams({key: key})"),"function"==typeof e)s.generateRandomKey((function(t){e(null,s.getDefaultParams({key:t}))}))
else{if("function"!=typeof arguments[1])throw new Error("Invalid arguments for Crypto.getDefaultParams")
arguments[1](null,s.getDefaultParams({key:e}))}},s.generateRandomKey=function(t,n){1==arguments.length&&"function"==typeof t&&(n=t,t=void 0),e((t||256)/8,n)},s.getCipher=function(e){var t=e instanceof a?e:s.getDefaultParams(e)
return{cipherParams:t,cipher:new u(t,4,e.iv)}},u.prototype.encrypt=function(t,n){C.logAction(C.LOG_MICRO,"CBCCipher.encrypt()","")
var i=(t=y.toWordArray(t)).sigBytes,r=function(e){return e+16&-16}(i),s=this,a=function(){s.getIv((function(e,a){if(e)n(e)
else{var c=s.encryptCipher.process(t.concat(o[r-i])),u=a.concat(c)
n(null,u)}}))}
this.encryptCipher?a():this.iv?(this.encryptCipher=c.algo[this.cjsAlgorithm].createEncryptor(this.key,{iv:this.iv}),a()):e(16,(function(e,t){e?n(e):(s.encryptCipher=c.algo[s.cjsAlgorithm].createEncryptor(s.key,{iv:t}),s.iv=t,a())}))},u.prototype.decrypt=function(e){C.logAction(C.LOG_MICRO,"CBCCipher.decrypt()",""),e=y.toWordArray(e)
var n=this.blockLengthWords,i=e.words,r=t.create(i.slice(0,n)),o=t.create(i.slice(n)),s=c.algo[this.cjsAlgorithm].createDecryptor(this.key,{iv:r}),a=s.process(o),u=s.finalize()
return s.reset(),u&&u.sigBytes&&a.concat(u),a},u.prototype.getIv=function(t){if(this.iv){var n=this.iv
return this.iv=null,void t(null,n)}var i=this
e(16,(function(e,n){e?t(e):t(null,i.encryptCipher.process(n))}))},s}(),g=function(){var e,t,n="ablyjs-storage-test"
try{a.sessionStorage.setItem(n,n),a.sessionStorage.removeItem(n),e=!0}catch(t){e=!1}try{a.localStorage.setItem(n,n),a.localStorage.removeItem(n),t=!0}catch(e){t=!1}function i(){}function r(e){return e?a.sessionStorage:a.localStorage}function o(e,t,n,i){var o={value:t}
return n&&(o.expires=v.now()+n),r(i).setItem(e,JSON.stringify(o))}function s(e,t){var n=r(t).getItem(e)
if(!n)return null
var i=JSON.parse(n)
return i.expires&&i.expires<v.now()?(r(t).removeItem(e),null):i.value}function c(e,t){return r(t).removeItem(e)}return t&&(i.set=function(e,t,n){return o(e,t,n,!1)},i.get=function(e){return s(e,!1)},i.remove=function(e){return c(e,!1)}),e&&(i.setSession=function(e,t,n){return o(e,t,n,!0)},i.getSession=function(e){return s(e,!0)},i.removeSession=function(e){return c(e,!0)}),i}(),m={internetUpUrl:"https://internet-up.ably-realtime.com/is-the-internet-up.txt",jsonpInternetUpUrl:"https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",defaultTransports:["xhr_polling","xhr_streaming","jsonp","web_socket"],baseTransportOrder:["xhr_polling","xhr_streaming","jsonp","web_socket"],transportPreferenceOrder:["jsonp","xhr_polling","xhr_streaming","web_socket"],upgradeTransports:["xhr_streaming","web_socket"]}
f.noUpgrade&&(m.upgradeTransports=[])
var y=function(){var e=c.lib.WordArray,t=f.ArrayBuffer,n=f.atob,i=f.TextEncoder,r=f.TextDecoder,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function s(e){return null!=e&&void 0!==e.sigBytes}function a(e){return null!=e&&e.constructor===t}function u(e){return t&&t.isView&&t.isView(e)}function h(){}h.base64CharSet=o,h.hexCharSet="0123456789abcdef"
var l=h.isBuffer=function(e){return a(e)||s(e)||u(e)},p=h.toBuffer=function(e){if(!t)throw new Error("Can't convert to Buffer: browser does not support the necessary types")
if(a(e))return new Uint8Array(e)
if(u(e))return new Uint8Array(e.buffer)
if(s(e)){for(var n=new t(e.sigBytes),i=new Uint8Array(n),r=0;r<e.sigBytes;r++)i[r]=e.words[r>>>2]>>>24-r%4*8&255
return i}throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray")}
return h.toArrayBuffer=function(e){return a(e)?e:p(e).buffer},h.toWordArray=function(t){return u(t)&&(t=t.buffer),s(t)?t:e.create(t)},h.base64Encode=function(e){return s(e)?c.enc.Base64.stringify(e):function(e){for(var t,n="",i=o,r=e.byteLength,s=r%3,a=r-s,c=0;c<a;c+=3)n+=i[(16515072&(t=e[c]<<16|e[c+1]<<8|e[c+2]))>>18]+i[(258048&t)>>12]+i[(4032&t)>>6]+i[63&t]
return 1==s?n+=i[(252&(t=e[a]))>>2]+i[(3&t)<<4]+"==":2==s&&(n+=i[(64512&(t=e[a]<<8|e[a+1]))>>10]+i[(1008&t)>>4]+i[(15&t)<<2]+"="),n}(p(e))},h.base64Decode=function(e){return t&&n?function(e){for(var t=n(e),i=t.length,r=new Uint8Array(i),o=0;o<i;o++){var s=t.charCodeAt(o)
r[o]=s}return r.buffer}(e):c.enc.Base64.parse(e)},h.hexEncode=function(e){return e=h.toWordArray(e),c.enc.Hex.stringify(e)},h.hexDecode=function(e){var n=c.enc.Hex.parse(e)
return t?h.toArrayBuffer(n):n},h.utf8Encode=function(e){return i?(new i).encode(e).buffer:c.enc.Utf8.parse(e)},h.utf8Decode=function(e){if(!l(e))throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray")
return r&&!s(e)?(new r).decode(e):(e=h.toWordArray(e),c.enc.Utf8.stringify(e))},h.bufferCompare=function(e,t){if(!e)return-1
if(!t)return 1
e=h.toWordArray(e),t=h.toWordArray(t),e.clamp(),t.clamp()
var n=e.sigBytes-t.sigBytes
if(0!=n)return n
e=e.words,t=t.words
for(var i=0;i<e.length;i++)if(0!=(n=e[i]-t[i]))return n
return 0},h.byteLength=function(e){return a(e)||u(e)?e.byteLength:s(e)?e.sigBytes:void 0},h}(),v=function(){var e=f.msgpack
function t(){}function i(e){return Math.floor(Math.random()*e.length)}t.mixin=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
if(!n)break
var i=n.hasOwnProperty
for(var r in n)i&&!i.call(n,r)||(e[r]=n[r])}return e},t.copy=function(e){return t.mixin({},e)},t.isArray=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},t.ensureArray=function(e){return t.isEmptyArg(e)?[]:t.isArray(e)?e:[e]},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isEmpty=function(e){for(var t in e)return!1
return!0},t.isOnlyPropIn=function(e,t){for(var n in e)if(n!==t)return!1
return!0},t.isEmptyArg=function(e){return null==e},t.shallowClone=function(e){var t=new Object
for(var n in e)t[n]=e[n]
return t},t.prototypicalClone=function(e,n){function i(){}i.prototype=e
var r=new i
return n&&t.mixin(r,n),r},t.inherits=f.inherits||function(e,n){e.super_=n,e.prototype=t.prototypicalClone(n.prototype,{constructor:e})},t.containsValue=function(e,t){for(var n in e)if(e[n]==t)return!0
return!1},t.intersect=function(e,n){return t.isArray(n)?t.arrIntersect(e,n):t.arrIntersectOb(e,n)},t.arrIntersect=function(e,n){for(var i=[],r=0;r<e.length;r++){var o=e[r];-1!=t.arrIndexOf(n,o)&&i.push(o)}return i},t.arrIntersectOb=function(e,t){for(var n=[],i=0;i<e.length;i++){var r=e[i]
r in t&&n.push(r)}return n},t.arrSubtract=function(e,n){for(var i=[],r=0;r<e.length;r++){var o=e[r];-1==t.arrIndexOf(n,o)&&i.push(o)}return i},t.arrIndexOf=Array.prototype.indexOf?function(e,t,n){return e.indexOf(t,n)}:function(e,t,n){n=n||0
for(var i=e.length;n<i;n++)if(e[n]===t)return n
return-1},t.arrIn=function(e,n){return-1!==t.arrIndexOf(e,n)},t.arrDeleteValue=function(e,n){var i=t.arrIndexOf(e,n),r=-1!=i
return r&&e.splice(i,1),r},t.arrWithoutValue=function(e,n){var i=e.slice()
return t.arrDeleteValue(i,n),i},t.keysArray=function(e,t){var n=[]
for(var i in e)t&&!e.hasOwnProperty(i)||n.push(i)
return n},t.valuesArray=function(e,t){var n=[]
for(var i in e)t&&!e.hasOwnProperty(i)||n.push(e[i])
return n},t.arrForEach=Array.prototype.forEach?function(e,t){e.forEach(t)}:function(e,t){for(var n=e.length,i=0;i<n;i++)t(e[i],i,e)},t.safeArrForEach=function(e,n){return t.arrForEach(e.slice(),n)},t.arrMap=Array.prototype.map?function(e,t){return e.map(t)}:function(e,t){for(var n=[],i=e.length,r=0;r<i;r++)n.push(t(e[r],r,e))
return n},t.arrFilter=Array.prototype.filter?function(e,t){return e.filter(t)}:function(e,t){for(var n=[],i=e.length,r=0;r<i;r++)t(e[r])&&n.push(e[r])
return n},t.arrEvery=Array.prototype.every?function(e,t){return e.every(t)}:function(e,t){for(var n=e.length,i=0;i<n;i++)if(!t(e[i],i,e))return!1
return!0},t.allSame=function(e,n){if(0===e.length)return!0
var i=e[0][n]
return t.arrEvery(e,(function(e){return e[n]===i}))},t.nextTick=f.nextTick
var r={json:"application/json",jsonp:"application/javascript",xml:"application/xml",html:"text/html",msgpack:"application/x-msgpack"}
return t.defaultGetHeaders=function(e){return{accept:r[e||"json"],"X-Ably-Version":m.apiVersion,"X-Ably-Lib":m.libstring}},t.defaultPostHeaders=function(e){var t
return{accept:t=r[e||"json"],"content-type":t,"X-Ably-Version":m.apiVersion,"X-Ably-Lib":m.libstring}},t.arrPopRandomElement=function(e){return e.splice(i(e),1)[0]},t.toQueryString=function(e){var t=[]
if(e)for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t.length?"?"+t.join("&"):""},t.parseQueryString=function(e){for(var t,n=/([^?&=]+)=?([^&]*)/g,i={};t=n.exec(e);)i[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return i},t.now=Date.now||function(){return(new Date).getTime()},t.inspect=f.inspect,t.isErrorInfo=function(e){return"ErrorInfo"==e.constructor.name},t.inspectError=function(e){return e&&(t.isErrorInfo(e)||"Error"==e.constructor.name||e instanceof Error)?e.toString():t.inspect(e)},t.inspectBody=function(e){return y.isBuffer(e)?e.toString():"string"==typeof e?e:f.inspect(e)},t.dataSizeBytes=function(e){if(y.isBuffer(e))return y.byteLength(e)
if("string"==typeof e)return f.stringByteSize(e)
throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: "+n(e))},t.cheapRandStr=function(){return String(Math.random()).substr(2)},t.randomString=f.getRandomValues&&"undefined"!=typeof Uint8Array?function(e){var t=new Uint8Array(e)
return f.getRandomValues(t),y.base64Encode(t)}:function(e){for(var t=y.base64CharSet,n=Math.round(4*e/3),r="",o=0;o<n;o++)r+=t[i(t)]
return r},t.randomHexString=f.getRandomValues&&"undefined"!=typeof Uint8Array?function(e){var t=new Uint8Array(e)
return f.getRandomValues(t),y.hexEncode(t)}:function(e){for(var t=y.hexCharSet,n=2*e,r="",o=0;o<n;o++)r+=t[i(t)]
return r},t.arrChooseN=function(e,n){for(var i=Math.min(n,e.length),r=e.slice(),o=[],s=0;s<i;s++)o.push(t.arrPopRandomElement(r))
return o},t.trim=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},t.promisify=function(e,t,n){return new Promise((function(i,r){e[t].apply(e,Array.prototype.slice.call(n).concat((function(e,t){e?r(e):i(t)})))}))},t.decodeBody=function(t,n){return"msgpack"==n?e.decode(t):JSON.parse(String(t))},t.encodeBody=function(t,n){return"msgpack"==n?e.encode(t,!0):JSON.stringify(t)},t}(),O=function(){var e=function(){}
function t(){}var n=Date.now||function(){return(new Date).getTime()}
function i(e){var t=e.statusCode
return 408===t&&!e.code||400===t&&!e.code||t>=500&&t<=504}function r(e){var t=e.connection,n=t&&t.connectionManager.host
return n?[n].concat(m.getFallbackHosts(e.options)):m.getHosts(e.options)}return t._getHosts=r,t.methods=["get","delete","post","put","patch"],t.methodsWithoutBody=["get","delete"],t.methodsWithBody=v.arrSubtract(t.methods,t.methodsWithoutBody),v.arrForEach(t.methodsWithoutBody,(function(e){t[e]=function(n,i,r,o,s){t.do(e,n,i,r,null,o,s)},t[e+"Uri"]=function(n,i,r,o,s){t.doUri(e,n,i,r,null,o,s)}})),v.arrForEach(t.methodsWithBody,(function(e){t[e]=function(n,i,r,o,s,a){t.do(e,n,i,r,o,s,a)},t[e+"Uri"]=function(n,i,r,o,s,a){t.doUri(e,n,i,r,o,s,a)}})),t.do=function(o,s,a,c,u,h,l){l=l||e
var p="function"==typeof a?a:function(e){return s.baseUri(e)+a},f=(c&&c.accept,arguments),d=s._currentFallback
if(d){if(d.validUntil>n())return void t.Request(o,s,p(d.host),c,h,u,(function(e){if(e&&i(e))return s._currentFallback=null,void t.do.apply(t,f)
l.apply(null,arguments)}))
s._currentFallback=null}var g=r(s)
if(1!=g.length){var m=function e(r,a){var f=r.shift()
t.doUri(o,s,p(f),c,u,h,(function(t){t&&i(t)&&r.length?e(r,!0):(a&&(s._currentFallback={host:f,validUntil:n()+s.options.timeouts.fallbackRetryTimeout}),l.apply(null,arguments))}))}
m(g)}else t.doUri(o,s,p(g[0]),c,u,h,l)},t.doUri=function(e,n,i,r,o,s,a){t.Request(e,n,i,r,s,o,a)},t.supportsAuthHeaders=!1,t.supportsLinkHeaders=!1,t}(),R=function(){function e(){this.buffer=[]}e.prototype.append=function(e){return this.buffer.push(e),this},e.prototype.toString=function(){return this.buffer.join("")}
var t={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(i){for(var r=new e,o=t.codex,s=new n(i);s.moveNext();){var a=s.current
s.moveNext()
var c=s.current
s.moveNext()
var u=s.current,h=a>>2,l=(3&a)<<4|c>>4,p=(15&c)<<2|u>>6,f=63&u
isNaN(c)?p=f=64:isNaN(u)&&(f=64),r.append(o.charAt(h)+o.charAt(l)+o.charAt(p)+o.charAt(f))}return r.toString()},decode:function(t){for(var n=new e,r=new i(t);r.moveNext();){var o=r.current
if(o<128)n.append(String.fromCharCode(o))
else if(o>191&&o<224){r.moveNext()
var s=r.current
n.append(String.fromCharCode((31&o)<<6|63&s))}else{r.moveNext(),s=r.current,r.moveNext()
var a=r.current
n.append(String.fromCharCode((15&o)<<12|(63&s)<<6|63&a))}}return n.toString()}}
function n(e){this._input=e,this._index=-1,this._buffer=[]}function i(e){this._input=e,this._index=-1,this._buffer=[]}return n.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0
if(this._index>=this._input.length-1)return this.current=Number.NaN,!1
var e=this._input.charCodeAt(++this._index)
return 13==e&&10==this._input.charCodeAt(this._index+1)&&(e=10,this._index+=2),e<128?this.current=e:e>127&&e<2048?(this.current=e>>6|192,this._buffer.push(63&e|128)):(this.current=e>>12|224,this._buffer.push(e>>6&63|128),this._buffer.push(63&e|128)),!0}},i.prototype={current:64,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0
if(this._index>=this._input.length-1)return this.current=64,!1
var e=t.codex.indexOf(this._input.charAt(++this._index)),n=t.codex.indexOf(this._input.charAt(++this._index)),i=t.codex.indexOf(this._input.charAt(++this._index)),r=t.codex.indexOf(this._input.charAt(++this._index)),o=e<<2|n>>4,s=(15&n)<<4|i>>2,a=(3&i)<<6|r
return this.current=o,64!=i&&this._buffer.push(s),64!=r&&this._buffer.push(a),!0}},t}()
function A(e){if("string"!=typeof e)throw new I("host must be a string; was a "+n(e),4e4,400)
if(!e.length)throw new I("host must not be zero-length",4e4,400)}m.ENVIRONMENT="",m.REST_HOST="rest.ably.io",m.REALTIME_HOST="realtime.ably.io",m.FALLBACK_HOSTS=["A.ably-realtime.com","B.ably-realtime.com","C.ably-realtime.com","D.ably-realtime.com","E.ably-realtime.com"],m.PORT=80,m.TLS_PORT=443,m.TIMEOUTS={disconnectedRetryTimeout:15e3,suspendedRetryTimeout:3e4,httpRequestTimeout:15e3,channelRetryTimeout:15e3,fallbackRetryTimeout:6e5,connectionStateTtl:12e4,realtimeRequestTimeout:1e4,recvTimeout:9e4,preferenceConnectTimeout:6e3,parallelUpgradeDelay:6e3},m.httpMaxRetryCount=3,m.maxMessageSize=65536,m.errorReportingUrl="https://errors.ably.io/api/15/store/",m.errorReportingHeaders={"X-Sentry-Auth":"Sentry sentry_version=7, sentry_key=a04e33c8674c451f8a310fbec029acf5, sentry_client=ably-js/0.1","Content-Type":"application/json"},m.version="1.1.24",m.libstring=f.libver+"-"+m.version,m.apiVersion="1.1",m.getHost=function(e,t,n){return n?t==e.restHost&&e.realtimeHost||t||e.realtimeHost:t||e.restHost},m.getPort=function(e,t){return t||e.tls?e.tlsPort:e.port},m.getHttpScheme=function(e){return e.tls?"https://":"http://"},m.getFallbackHosts=function(e){var t=e.fallbackHosts,n=void 0!==e.httpMaxRetryCount?e.httpMaxRetryCount:m.httpMaxRetryCount
return t?v.arrChooseN(t,n):[]},m.getHosts=function(e){return[e.restHost].concat(m.getFallbackHosts(e))},m.objectifyOptions=function(e){return"string"==typeof e?-1==e.indexOf(":")?{token:e}:{key:e}:e},m.normaliseOptions=function(e){e.host&&(C.deprecated("host","restHost"),e.restHost=e.host),e.wsHost&&(C.deprecated("wsHost","realtimeHost"),e.realtimeHost=e.wsHost),e.queueEvents&&(C.deprecated("queueEvents","queueMessages"),e.queueMessages=e.queueEvents),!0===e.recover&&(C.deprecated("{recover: true}","{recover: function(lastConnectionDetails, cb) { cb(true); }}"),e.recover=function(e,t){t(!0)}),"function"==typeof e.recover&&!0===e.closeOnUnload&&(C.logAction(C.LOG_ERROR,"Defaults.normaliseOptions","closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"),e.recover=null),"closeOnUnload"in e||(e.closeOnUnload=!e.recover),e.transports&&v.arrIn(e.transports,"xhr")&&(C.deprecated('transports: ["xhr"]','transports: ["xhr_streaming"]'),v.arrDeleteValue(e.transports,"xhr"),e.transports.push("xhr_streaming")),"queueMessages"in e||(e.queueMessages=!0)
var t=!1
if(e.restHost)e.realtimeHost=e.realtimeHost||e.restHost
else{var n=e.environment&&String(e.environment).toLowerCase()||m.ENVIRONMENT
t=!n||"production"===n,e.restHost=t?m.REST_HOST:n+"-"+m.REST_HOST,e.realtimeHost=t?m.REALTIME_HOST:n+"-"+m.REALTIME_HOST}for(var i in e.fallbackHosts=t||e.fallbackHostsUseDefault?m.FALLBACK_HOSTS:e.fallbackHosts,v.arrForEach((e.fallbackHosts||[]).concat(e.restHost,e.realtimeHost),A),e.port=e.port||m.PORT,e.tlsPort=e.tlsPort||m.TLS_PORT,e.maxMessageSize=e.maxMessageSize||m.maxMessageSize,"tls"in e||(e.tls=!0),e.timeouts={},m.TIMEOUTS)e.timeouts[i]=e[i]||m.TIMEOUTS[i]
return e.useBinaryProtocol="useBinaryProtocol"in e?f.supportsBinary&&e.useBinaryProtocol:f.preferBinary,e.clientId&&((e.headers=e.headers||{})["X-Ably-ClientId"]=y.base64Encode(y.utf8Encode(e.clientId))),"idempotentRestPublishing"in e||(e.idempotentRestPublishing=!1),e.promises&&!f.Promise&&(C.logAction(C.LOG_ERROR,"Defaults.normaliseOptions","{promises: true} was specified, but no Promise constructor found; disabling promises"),e.promises=!1),e}
var b=function(){function e(){this.any=[],this.events={},this.anyOnce=[],this.eventsOnce={}}function t(e,t,n){try{t.apply(e,n)}catch(e){C.logAction(C.LOG_ERROR,"EventEmitter.emit()","Unexpected listener exception: "+e+"; stack = "+(e&&e.stack))}}function n(e,t,i){var r,o,s,a
for(a=0;a<e.length;a++)if(r=e[a],i&&(r=r[i]),v.isArray(r)){for(;-1!==(o=v.arrIndexOf(r,t));)r.splice(o,1)
i&&0===r.length&&delete e[a][i]}else if(v.isObject(r))for(s in r)r.hasOwnProperty(s)&&v.isArray(r[s])&&n([r],t,s)}return e.prototype.on=function(e,t){if(1==arguments.length&&"function"==typeof e)this.any.push(e)
else if(v.isEmptyArg(e))this.any.push(t)
else if(v.isArray(e)){var n=this
v.arrForEach(e,(function(e){n.on(e,t)}))}else{var i=this.events[e]||(this.events[e]=[])
i.push(t)}},e.prototype.off=function(e,t){if(0==arguments.length||v.isEmptyArg(e)&&v.isEmptyArg(t))return this.any=[],this.events={},this.anyOnce=[],void(this.eventsOnce={})
if(1==arguments.length&&"function"==typeof e&&(t=e,e=null),t&&v.isEmptyArg(e))n([this.any,this.events,this.anyOnce,this.eventsOnce],t)
else{if(v.isArray(e)){var i=this
v.arrForEach(e,(function(e){i.off(e,t)}))}t?n([this.events,this.eventsOnce],t,e):(delete this.events[e],delete this.eventsOnce[e])}},e.prototype.listeners=function(e){if(e){var t=this.events[e]||[]
return this.eventsOnce[e]&&Array.prototype.push.apply(t,this.eventsOnce[e]),t.length?t:null}return this.any.length?this.any:null},e.prototype.emit=function(e){var n=Array.prototype.slice.call(arguments,1),i={event:e},r=[]
this.anyOnce.length&&(Array.prototype.push.apply(r,this.anyOnce),this.anyOnce=[]),this.any.length&&Array.prototype.push.apply(r,this.any)
var o=this.eventsOnce[e]
o&&(Array.prototype.push.apply(r,o),delete this.eventsOnce[e])
var s=this.events[e]
s&&Array.prototype.push.apply(r,s),v.arrForEach(r,(function(e){t(i,e,n)}))},e.prototype.once=function(e,t){var n=arguments.length,i=this
if((0===n||1===n&&"function"!=typeof e)&&f.Promise)return new f.Promise((function(t){i.once(e,t)}))
if(1==arguments.length&&"function"==typeof e)this.anyOnce.push(e)
else if(v.isEmptyArg(e))this.anyOnce.push(t)
else{if(v.isArray(e))throw"Arrays of events can only be used with on(), not once()"
var r=this.eventsOnce[e]||(this.eventsOnce[e]=[])
r.push(t)}},e.prototype.whenState=function(e,n,i){var r={event:e},o=this,s=Array.prototype.slice.call(arguments,3)
if("string"!=typeof e||"string"!=typeof n)throw"whenState requires a valid event String argument"
if("function"!=typeof i&&f.Promise)return new f.Promise((function(t){o.whenState.bind(o,e,n,t).apply(o,s)}))
e===n?t(r,i,s):this.once(e,i)},e}(),C=function(){var e,t
function n(e,t){return("000"+e).slice(-2-(t||0))}"undefined"==typeof Window&&"undefined"==typeof WorkerGlobalScope||a.console&&a.console.log&&"function"==typeof a.console.log.apply?(e=function(){console.log.apply(console,arguments)},t=console.warn?function(){console.warn.apply(console,arguments)}:e):e=t=a.console&&a.console.log?function(){Function.prototype.apply.call(console.log,console,arguments)}:function(){}
var i=1
function r(e){return f.logTimestamps?function(t){var i=new Date
e(n(i.getHours())+":"+n(i.getMinutes())+":"+n(i.getSeconds())+"."+n(i.getMilliseconds(),!0)+" "+t)}:e}var o=r(e),s=r(t)
function c(e){}return c.LOG_NONE=0,c.LOG_ERROR=1,c.LOG_MAJOR=2,c.LOG_MINOR=3,c.LOG_MICRO=4,c.LOG_DEFAULT=1,c.LOG_DEBUG=4,c.logAction=function(e,t,n){c.shouldLog(e)&&(1===e?s:o)("Ably: "+t+": "+n)},c.deprecated=function(e,t){c.shouldLog(1)&&s("Ably: Deprecation warning - '"+e+"' is deprecated and will be removed from a future version. Please use '"+t+"' instead.")},c.shouldLog=function(e){return e<=i},c.setLog=function(e,t){void 0!==e&&(i=e),void 0!==t&&(o=s=t)},c}(),S=function(e){e=e||[]
var t=function(){for(var t=0;t<e.length;t++){var n=e[t]
if(n)try{n.apply(null,arguments)}catch(e){C.logAction(C.LOG_ERROR,"Multicaster multiple callback handler","Unexpected exception: "+e+"; stack = "+e.stack)}}}
return t.push=function(){Array.prototype.push.apply(e,arguments)},t},w=function(){function e(){}return e.levels=["fatal","error","warning","info","debug"],e.report=function(e,t,n,i){var r={event_id:v.randomHexString(16),tags:v.mixin({lib:f.libver},i),platform:"javascript",level:e,release:m.version,fingerprint:n&&[n],message:t,request:{headers:{"User-Agent":f.userAgent},url:f.currentUrl}}
C.logAction(C.LOG_MICRO,"ErrorReporter","POSTing to error reporter: "+t),O.postUri(null,m.errorReportingUrl,m.errorReportingHeaders,JSON.stringify(r),{},(function(e,t){C.logAction(C.LOG_MICRO,"ErrorReporter","POSTing to error reporter resulted in: "+(e?v.inspectError(e):v.inspectBody(t)))}))},e}(),I=function(){function e(e,t,n,i){this.message=e,this.code=t,this.statusCode=n,this.cause=i,this.href=void 0}return e.prototype.toString=function(){var e="["+this.constructor.name
return this.message&&(e+=": "+this.message),this.statusCode&&(e+="; statusCode="+this.statusCode),this.code&&(e+="; code="+this.code),this.cause&&(e+="; cause="+v.inspectError(this.cause)),!this.href||this.message&&this.message.indexOf("help.ably.io")>-1||(e+="; see "+this.href+" "),e+"]"},e.fromValues=function(t){var n=v.mixin(new e,t)
return t instanceof Error&&(n.message=t.message),n.code&&!n.href&&(n.href="https://help.ably.io/error/"+n.code),n},e}(),T=function(){function e(){this.name=void 0,this.id=void 0,this.timestamp=void 0,this.clientId=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.data=void 0,this.encoding=void 0,this.extras=void 0,this.size=void 0}function t(e){if(e&&e.cipher&&!e.cipher.channelCipher){if(!d)throw new Error("Encryption not enabled; use ably.encryption.js instead")
var t=d.getCipher(e.cipher)
e.cipher=t.cipherParams,e.channelCipher=t.cipher}}function n(e){var t=0
return e.name&&(t+=e.name.length),e.clientId&&(t+=e.clientId.length),e.extras&&(t+=JSON.stringify(e.extras).length),e.data&&(t+=v.dataSizeBytes(e.data)),t}return e.prototype.toJSON=function(){var e={name:this.name,id:this.id,clientId:this.clientId,connectionId:this.connectionId,connectionKey:this.connectionKey,encoding:this.encoding,extras:this.extras},t=this.data
if(t&&y.isBuffer(t))if(arguments.length>0){var n=this.encoding
e.encoding=n?n+"/base64":"base64",t=y.base64Encode(t)}else t=y.toBuffer(t)
return e.data=t,e},e.prototype.toString=function(){var e="[Message"
return this.name&&(e+="; name="+this.name),this.id&&(e+="; id="+this.id),this.timestamp&&(e+="; timestamp="+this.timestamp),this.clientId&&(e+="; clientId="+this.clientId),this.connectionId&&(e+="; connectionId="+this.connectionId),this.encoding&&(e+="; encoding="+this.encoding),this.extras&&(e+="; extras ="+JSON.stringify(this.extras)),this.data&&("string"==typeof this.data?e+="; data="+this.data:y.isBuffer(this.data)?e+="; data (buffer)="+y.base64Encode(this.data):e+="; data (json)="+JSON.stringify(this.data)),this.extras&&(e+="; extras="+JSON.stringify(this.extras)),e+"]"},e.encrypt=function(e,t,n){var i=e.data,r=e.encoding,o=t.channelCipher
r=r?r+"/":"",y.isBuffer(i)||(i=y.utf8Encode(String(i)),r+="utf-8/"),o.encrypt(i,(function(t,i){t?n(t):(e.data=i,e.encoding=r+"cipher+"+o.algorithm,n(null,e))}))},e.encode=function(t,n,i){var r,o=t.data
if("string"!=typeof o&&!y.isBuffer(o)&&null!=o){if(!v.isObject(o)&&!v.isArray(o))throw new I("Data type is unsupported",40013,400)
t.data=JSON.stringify(o),t.encoding=(r=t.encoding)?r+"/json":"json"}null!=n&&n.cipher?e.encrypt(t,n,i):i(null,t)},e.encodeArray=function(t,n,i){for(var r=0,o=0;o<t.length;o++)e.encode(t[o],n,(function(e,n){e?i(e):++r==t.length&&i(null,t)}))},e.serialize=v.encodeBody,e.decode=function(e,t){var n=e.encoding
if(n){var i,r=n.split("/"),o=r.length,s=e.data
try{for(;(i=o)>0;){var a=r[--o].match(/([\-\w]+)(\+([\w\-]+))?/)
if(!a)break
var c=a[1]
switch(c){case"base64":s=y.base64Decode(String(s))
continue
case"utf-8":s=y.utf8Decode(s)
continue
case"json":s=JSON.parse(s)
continue
case"cipher":if(null!=t&&t.cipher){var u=a[3],h=t.channelCipher
if(u!=h.algorithm)throw new Error("Unable to decrypt message with given cipher; incompatible cipher params")
s=h.decrypt(s)
continue}throw new Error("Unable to decrypt message; not an encrypted channel")
default:throw new Error("Unknown encoding")}break}}catch(e){throw new I("Error processing the "+c+" encoding, decoder returned ‘"+e.message+"’",40013,400)}finally{e.encoding=i<=0?null:r.slice(0,i).join("/"),e.data=s}}},e.fromResponseBody=function(t,n,i){i&&(t=v.decodeBody(t,i))
for(var r=0;r<t.length;r++){var o=t[r]=e.fromValues(t[r])
try{e.decode(o,n)}catch(e){C.logAction(C.LOG_ERROR,"Message.fromResponseBody()",e.toString())}}return t},e.fromValues=function(t){return v.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,i=new Array(n),r=0;r<n;r++)i[r]=e.fromValues(t[r])
return i},e.fromEncoded=function(n,i){var r=e.fromValues(n)
t(i)
try{e.decode(r,i)}catch(e){C.logAction(C.LOG_ERROR,"Message.fromEncoded()",e.toString())}return r},e.fromEncodedArray=function(n,i){return t(i),v.arrMap(n,(function(t){return e.fromEncoded(t,i)}))},e.getMessagesSize=function(e){for(var t,i=0,r=0;r<e.length;r++)i+=(t=e[r]).size||(t.size=n(t))
return i},e}(),M=function(){function e(e){return v.arrIndexOf(t.Actions,e)}function t(){this.action=void 0,this.id=void 0,this.timestamp=void 0,this.clientId=void 0,this.connectionId=void 0,this.data=void 0,this.encoding=void 0,this.size=void 0}return f.msgpack,t.Actions=["absent","present","enter","leave","update"],t.prototype.isSynthesized=function(){return this.id.substring(this.connectionId.length,0)!==this.connectionId},t.prototype.parseId=function(){var e=this.id.split(":")
return{connectionId:e[0],msgSerial:parseInt(e[1],10),index:parseInt(e[2],10)}},t.prototype.toJSON=function(){var t={clientId:this.clientId,action:e(this.action),encoding:this.encoding},n=this.data
if(n&&y.isBuffer(n))if(arguments.length>0){var i=this.encoding
t.encoding=i?i+"/base64":"base64",n=y.base64Encode(n)}else n=y.toBuffer(n)
return t.data=n,t},t.prototype.toString=function(){var e="[PresenceMessage"
return e+="; action="+this.action,this.id&&(e+="; id="+this.id),this.timestamp&&(e+="; timestamp="+this.timestamp),this.clientId&&(e+="; clientId="+this.clientId),this.connectionId&&(e+="; connectionId="+this.connectionId),this.encoding&&(e+="; encoding="+this.encoding),this.data&&("string"==typeof this.data?e+="; data="+this.data:y.isBuffer(this.data)?e+="; data (buffer)="+y.base64Encode(this.data):e+="; data (json)="+JSON.stringify(this.data)),e+"]"},t.encode=T.encode,t.decode=T.decode,t.fromResponseBody=function(e,n,i){i&&(e=v.decodeBody(e,i))
for(var r=0;r<e.length;r++){var o=e[r]=t.fromValues(e[r],!0)
try{t.decode(o,n)}catch(e){C.logAction(C.LOG_ERROR,"PresenceMessage.fromResponseBody()",e.toString())}}return e},t.fromValues=function(e,n){return n&&(e.action=t.Actions[e.action]),v.mixin(new t,e)},t.fromValuesArray=function(e){for(var n=e.length,i=new Array(n),r=0;r<n;r++)i[r]=t.fromValues(e[r])
return i},t.fromEncoded=function(e,n){var i=t.fromValues(e,!0)
try{t.decode(i,n)}catch(e){C.logAction(C.LOG_ERROR,"PresenceMessage.fromEncoded()",e.toString())}return i},t.fromEncodedArray=function(e,n){return v.arrMap(e,(function(e){return t.fromEncoded(e,n)}))},t.getMessagesSize=T.getMessagesSize,t}(),k=function(){function e(){this.action=void 0,this.flags=void 0,this.id=void 0,this.timestamp=void 0,this.count=void 0,this.error=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.connectionSerial=void 0,this.channel=void 0,this.channelSerial=void 0,this.msgSerial=void 0,this.messages=void 0,this.presence=void 0,this.auth=void 0}var t=e.Action={HEARTBEAT:0,ACK:1,NACK:2,CONNECT:3,CONNECTED:4,DISCONNECT:5,DISCONNECTED:6,CLOSE:7,CLOSED:8,ERROR:9,ATTACH:10,ATTACHED:11,DETACH:12,DETACHED:13,PRESENCE:14,MESSAGE:15,SYNC:16,AUTH:17}
e.ActionName=[],v.arrForEach(v.keysArray(e.Action,!0),(function(n){e.ActionName[t[n]]=n}))
var n={HAS_PRESENCE:1,HAS_BACKLOG:2,RESUMED:4,TRANSIENT:16,PRESENCE:65536,PUBLISH:1<<17,SUBSCRIBE:1<<18,PRESENCE_SUBSCRIBE:1<<19},i=v.keysArray(n)
function r(e){var t=[]
if(e)for(var n=0;n<e.length;n++)t.push(e[n].toString())
return"[ "+t.join(", ")+" ]"}n.MODE_ALL=n.PRESENCE|n.PUBLISH|n.SUBSCRIBE|n.PRESENCE_SUBSCRIBE,e.prototype.hasFlag=function(e){return(this.flags&n[e])>0},e.prototype.setFlag=function(e){return this.flags=this.flags|n[e]},e.prototype.getMode=function(){return this.flags&&this.flags&n.MODE_ALL},e.serialize=v.encodeBody,e.deserialize=function(t,n){var i=v.decodeBody(t,n)
return e.fromDeserialized(i)},e.fromDeserialized=function(t){var n=t.error
n&&(t.error=I.fromValues(n))
var i=t.messages
if(i)for(var r=0;r<i.length;r++)i[r]=T.fromValues(i[r])
var o=t.presence
if(o)for(r=0;r<o.length;r++)o[r]=M.fromValues(o[r],!0)
return v.mixin(new e,t)},e.fromValues=function(t){return v.mixin(new e,t)}
var o="id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp".split(" ")
return e.stringify=function(t){var n,s="[ProtocolMessage"
void 0!==t.action&&(s+="; action="+e.ActionName[t.action]||!1)
for(var a=0;a<o.length;a++)n=o[a],void 0!==t[n]&&(s+="; "+n+"="+t[n])
return t.messages&&(s+="; messages="+r(T.fromValuesArray(t.messages))),t.presence&&(s+="; presence="+r(M.fromValuesArray(t.presence))),t.error&&(s+="; error="+I.fromValues(t.error).toString()),t.auth&&t.auth.accessToken&&(s+="; token="+t.auth.accessToken),t.flags&&(s+="; flags="+v.arrFilter(i,(function(e){return t.hasFlag(e)})).join(",")),s+"]"},e.isDuplicate=function(e,n){return e&&n&&(e.action===t.MESSAGE||e.action===t.PRESENCE)&&e.action===n.action&&e.channel===n.channel&&e.id===n.id},e}(),_=function(){function e(e){this.count=e&&e.count||0,this.data=e&&e.data||0,this.uncompressedData=e&&e.uncompressedData||0,this.failed=e&&e.failed||0,this.refused=e&&e.refused||0}function t(t){if(e.call(this,t),this.category=void 0,t&&t.category)for(var n in this.category={},t.category){var i=t.category[n]
Object.prototype.hasOwnProperty.call(t.category,n)&&i&&(this.category[n]=new e(i))}}function n(e){this.peak=e&&e.peak||0,this.min=e&&e.min||0,this.mean=e&&e.mean||0,this.opened=e&&e.opened||0,this.refused=e&&e.refused||0}function i(e){this.succeeded=e&&e.succeeded||0,this.failed=e&&e.failed||0,this.refused=e&&e.refused||0}function r(e){this.plain=new n(e&&e.plain),this.tls=new n(e&&e.tls),this.all=new n(e&&e.all)}function o(e){this.messages=new t(e&&e.messages),this.presence=new t(e&&e.presence),this.all=new t(e&&e.all)}function s(e){this.realtime=new o(e&&e.realtime),this.rest=new o(e&&e.rest),this.webhook=new o(e&&e.webhook),this.sharedQueue=new o(e&&e.sharedQueue),this.externalQueue=new o(e&&e.externalQueue),this.httpEvent=new o(e&&e.httpEvent),this.push=new o(e&&e.push),this.all=new o(e&&e.all)}function a(e){this.all=new o(e&&e.all),this.inbound=new s(e&&e.inbound),this.outbound=new s(e&&e.outbound)}function c(e){this.all=new o(e&&e.all),this.producerPaid=new a(e&&e.producerPaid),this.consumerPaid=new a(e&&e.consumerPaid)}function u(e){this.messages=e&&e.messages||0
var t=e&&e.notifications
this.notifications={invalid:t&&t.invalid||0,attempted:t&&t.attempted||0,successful:t&&t.successful||0,failed:t&&t.failed||0},this.directPublishes=e&&e.directPublishes||0}function h(e){this.succeeded=e&&e.succeeded||0,this.skipped=e&&e.skipped||0,this.failed=e&&e.failed||0}function l(e){if(this.delta=void 0,e&&e.delta)for(var t in this.delta={},e.delta){var n=e.delta[t]
Object.prototype.hasOwnProperty.call(e.delta,t)&&n&&(this.delta[t]=new h(n))}}function p(e){a.call(this,e),this.persisted=new o(e&&e.persisted),this.connections=new r(e&&e.connections),this.channels=new n(e&&e.channels),this.apiRequests=new i(e&&e.apiRequests),this.tokenRequests=new i(e&&e.tokenRequests),this.xchgProducer=new c(e&&e.xchgProducer),this.xchgConsumer=new c(e&&e.xchgConsumer),this.push=new u(e&&e.pushStats),this.processed=new l(e&&e.processed),this.inProgress=e&&e.inProgress||void 0,this.unit=e&&e.unit||void 0,this.intervalId=e&&e.intervalId||void 0}return p.fromValues=function(e){return new p(e)},p}(),E=function(){function e(){this.id=void 0,this.deviceSecret=void 0,this.platform=void 0,this.formFactor=void 0,this.clientId=void 0,this.metadata=void 0,this.deviceIdentityToken=void 0,this.push={recipient:void 0,state:void 0,errorReason:void 0}}return e.prototype.toJSON=function(){return{id:this.id,deviceSecret:this.deviceSecret,platform:this.platform,formFactor:this.formFactor,clientId:this.clientId,metadata:this.metadata,deviceIdentityToken:this.deviceIdentityToken,push:{recipient:this.push.recipient,state:this.push.state,errorReason:this.push.errorReason}}},e.prototype.toString=function(){var e="[DeviceDetails"
return this.id&&(e+="; id="+this.id),this.platform&&(e+="; platform="+this.platform),this.formFactor&&(e+="; formFactor="+this.formFactor),this.clientId&&(e+="; clientId="+this.clientId),this.metadata&&(e+="; metadata="+this.metadata),this.deviceIdentityToken&&(e+="; deviceIdentityToken="+JSON.stringify(this.deviceIdentityToken)),this.push.recipient&&(e+="; push.recipient="+JSON.stringify(this.push.recipient)),this.push.state&&(e+="; push.state="+this.push.state),this.push.errorReason&&(e+="; push.errorReason="+this.push.errorReason),this.push.metadata&&(e+="; push.metadata="+this.push.metadata),e+"]"},e.toRequestBody=v.encodeBody,e.fromResponseBody=function(t,n){return n&&(t=v.decodeBody(t,n)),v.isArray(t)?e.fromValuesArray(t):e.fromValues(t)},e.fromValues=function(t){return v.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,i=new Array(n),r=0;r<n;r++)i[r]=e.fromValues(t[r])
return i},e}(),x=function(){function e(){this.channel=void 0,this.deviceId=void 0,this.clientId=void 0}return e.prototype.toJSON=function(){return{channel:this.channel,deviceId:this.deviceId,clientId:this.clientId}},e.prototype.toString=function(){var e="[PushChannelSubscription"
return this.channel&&(e+="; channel="+this.channel),this.deviceId&&(e+="; deviceId="+this.deviceId),this.clientId&&(e+="; clientId="+this.clientId),e+"]"},e.toRequestBody=v.encodeBody,e.fromResponseBody=function(t,n){return n&&(t=v.decodeBody(t,n)),v.isArray(t)?e.fromValuesArray(t):e.fromValues(t)},e.fromValues=function(t){return v.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,i=new Array(n),r=0;r<n;r++)i[r]=e.fromValues(t[r])
return i},e}(),L={disconnected:I.fromValues({statusCode:400,code:80003,message:"Connection to server temporarily unavailable"}),suspended:I.fromValues({statusCode:400,code:80002,message:"Connection to server unavailable"}),failed:I.fromValues({statusCode:400,code:8e4,message:"Connection failed or disconnected by server"}),closing:I.fromValues({statusCode:400,code:80017,message:"Connection closing"}),closed:I.fromValues({statusCode:400,code:80017,message:"Connection closed"}),unknownConnectionErr:I.fromValues({statusCode:500,code:50002,message:"Internal connection error"}),unknownChannelErr:I.fromValues({statusCode:500,code:50001,message:"Internal channel error"})},P=function(){function e(){b.call(this),this.messages=[]}return v.inherits(e,b),e.prototype.count=function(){return this.messages.length},e.prototype.push=function(e){this.messages.push(e)},e.prototype.shift=function(){return this.messages.shift()},e.prototype.last=function(){return this.messages[this.messages.length-1]},e.prototype.copyAll=function(){return this.messages.slice()},e.prototype.append=function(e){this.messages.push.apply(this.messages,e)},e.prototype.prepend=function(e){this.messages.unshift.apply(this.messages,e)},e.prototype.completeMessages=function(e,t,n){C.logAction(C.LOG_MICRO,"MessageQueue.completeMessages()","serial = "+e+"; count = "+t),n=n||null
var i=this.messages,r=i[0]
if(r){var o=r.message.msgSerial,s=e+t
if(s>o)for(var a=i.splice(0,s-o),c=0;c<a.length;c++)a[c].callback(n)
0==i.length&&this.emit("idle")}},e.prototype.completeAllMessages=function(e){this.completeMessages(0,Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,e)},e.prototype.clear=function(){C.logAction(C.LOG_MICRO,"MessageQueue.clear()","clearing "+this.messages.length+" messages"),this.messages=[],this.emit("idle")},e}(),N=function(){var e=k.Action
function t(e){b.call(this),this.transport=e,this.messageQueue=new P
var t=this
e.on("ack",(function(e,n){t.onAck(e,n)})),e.on("nack",(function(e,n,i){t.onNack(e,n,i)}))}return v.inherits(t,b),t.prototype.onAck=function(e,t){C.logAction(C.LOG_MICRO,"Protocol.onAck()","serial = "+e+"; count = "+t),this.messageQueue.completeMessages(e,t)},t.prototype.onNack=function(e,t,n){C.logAction(C.LOG_ERROR,"Protocol.onNack()","serial = "+e+"; count = "+t+"; err = "+v.inspectError(n)),n||(n=new I("Unable to send message; channel not responding",50001,500)),this.messageQueue.completeMessages(e,t,n)},t.prototype.onceIdle=function(e){var t=this.messageQueue
0!==t.count()?t.once("idle",e):e()},t.prototype.send=function(e){e.ackRequired&&this.messageQueue.push(e),C.shouldLog(C.LOG_MICRO)&&C.logAction(C.LOG_MICRO,"Protocol.send()","sending msg; "+k.stringify(e.message)),e.sendAttempted=!0,this.transport.send(e.message)},t.prototype.getTransport=function(){return this.transport},t.prototype.getPendingMessages=function(){return this.messageQueue.copyAll()},t.prototype.clearPendingMessages=function(){return this.messageQueue.clear()},t.prototype.finish=function(){var e=this.transport
this.onceIdle((function(){e.disconnect()}))},t.PendingMessage=function(t,n){this.message=t,this.callback=n,this.merged=!1
var i=t.action
this.sendAttempted=!1,this.ackRequired=i==e.MESSAGE||i==e.PRESENCE},t}(),G=function(){var e=!(void 0===g||!g.get),t=!(void 0===g||!g.getSession),n=k.Action,i=N.PendingMessage,r=function(){},o=m.transportPreferenceOrder,s=o[o.length-1]
function c(e,t,n,i){this.options=e,this.host=t,this.mode=n,this.connectionKey=i,this.format=e.useBinaryProtocol?"msgpack":"json",this.connectionSerial=void 0,this.timeSerial=void 0}function u(e,n){b.call(this),this.realtime=e,this.options=n
var i=n.timeouts,r=this,o=i.preferenceConnectTimeout+i.realtimeRequestTimeout
if(this.states={initialized:{state:"initialized",terminal:!1,queueEvents:!0,sendEvents:!1,failState:"disconnected"},connecting:{state:"connecting",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:o,failState:"disconnected"},connected:{state:"connected",terminal:!1,queueEvents:!1,sendEvents:!0,failState:"disconnected"},synchronizing:{state:"connected",terminal:!1,queueEvents:!0,sendEvents:!1,forceQueueEvents:!0,failState:"disconnected"},disconnected:{state:"disconnected",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:i.disconnectedRetryTimeout,failState:"disconnected"},suspended:{state:"suspended",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:i.suspendedRetryTimeout,failState:"suspended"},closing:{state:"closing",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:i.realtimeRequestTimeout,failState:"closed"},closed:{state:"closed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"closed"},failed:{state:"failed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"failed"}},this.state=this.states.initialized,this.errorReason=null,this.queuedMessages=new P,this.msgSerial=0,this.connectionDetails=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.timeSerial=void 0,this.connectionSerial=void 0,this.connectionStateTtl=i.connectionStateTtl,this.maxIdleInterval=null,this.transports=v.intersect(n.transports||m.defaultTransports,u.supportedTransports),this.baseTransport=v.intersect(m.baseTransportOrder,this.transports)[0],this.upgradeTransports=v.intersect(this.transports,m.upgradeTransports),this.transportPreference=null,this.httpHosts=m.getHosts(n),this.activeProtocol=null,this.proposedTransports=[],this.pendingTransports=[],this.host=null,this.lastAutoReconnectAttempt=null,this.lastActivity=null,this.mostRecentMsg=null,this.forceFallbackHost=!1,this.connectCounter=0,C.logAction(C.LOG_MINOR,"Realtime.ConnectionManager()","started"),C.logAction(C.LOG_MICRO,"Realtime.ConnectionManager()","requested transports = ["+(n.transports||m.defaultTransports)+"]"),C.logAction(C.LOG_MICRO,"Realtime.ConnectionManager()","available transports = ["+this.transports+"]"),C.logAction(C.LOG_MICRO,"Realtime.ConnectionManager()","http hosts = ["+this.httpHosts+"]"),!this.transports.length){var s="no requested transports available"
throw C.logAction(C.LOG_ERROR,"realtime.ConnectionManager()",s),new Error(s)}var a=f.addEventListener
a&&(t&&"function"==typeof n.recover&&a("beforeunload",this.persistConnection.bind(this)),!0===n.closeOnUnload&&a("beforeunload",(function(){C.logAction(C.LOG_MAJOR,"Realtime.ConnectionManager()","beforeunload event has triggered the connection to close as closeOnUnload is true"),r.requestState({state:"closing"})})),a("online",(function(){r.state!=r.states.disconnected&&r.state!=r.states.suspended||(C.logAction(C.LOG_MINOR,"ConnectionManager caught browser ‘online’ event","reattempting connection"),r.requestState({state:"connecting"}))})),a("offline",(function(){r.state==r.states.connected&&(C.logAction(C.LOG_MINOR,"ConnectionManager caught browser ‘offline’ event","disconnecting active transport"),r.disconnectAllTransports())})))}return c.prototype.getConnectParams=function(e){var t=e?v.copy(e):{},n=this.options
switch(this.mode){case"upgrade":t.upgrade=this.connectionKey
break
case"resume":t.resume=this.connectionKey,void 0!==this.timeSerial?t.timeSerial=this.timeSerial:void 0!==this.connectionSerial&&(t.connectionSerial=this.connectionSerial)
break
case"recover":var i=n.recover.split(":")
if(i){t.recover=i[0]
var r=i[1]
isNaN(r)?t.timeSerial=r:t.connectionSerial=r}}return void 0!==n.clientId&&(t.clientId=n.clientId),!1===n.echoMessages&&(t.echo="false"),void 0!==this.format&&(t.format=this.format),void 0!==this.stream&&(t.stream=this.stream),void 0!==this.heartbeats&&(t.heartbeats=this.heartbeats),t.v=m.apiVersion,t.lib=m.libstring,void 0!==n.transportParams&&v.mixin(t,n.transportParams),t},c.prototype.toString=function(){var e="[mode="+this.mode
return this.host&&(e+=",host="+this.host),this.connectionKey&&(e+=",connectionKey="+this.connectionKey),void 0!==this.connectionSerial&&(e+=",connectionSerial="+this.connectionSerial),this.timeSerial&&(e+=",timeSerial="+this.timeSerial),this.format&&(e+=",format="+this.format),e+"]"},v.inherits(u,b),u.supportedTransports={},u.prototype.createTransportParams=function(e,t){var n=new c(this.options,e,t,this.connectionKey)
return this.timeSerial?n.timeSerial=this.timeSerial:void 0!==this.connectionSerial&&(n.connectionSerial=this.connectionSerial),n},u.prototype.getTransportParams=function(e){var n=this
!function(e){if(n.connectionKey)e("resume")
else if("string"!=typeof n.options.recover){var i=n.options.recover,r=t&&g.getSession("ably-connection-recovery")
if(r&&"function"==typeof i)return C.logAction(C.LOG_MINOR,"ConnectionManager.getTransportParams()","Calling clientOptions-provided recover function with last session data"),void i(r,(function(t){t?(n.options.recover=r.recoveryKey,e("recover")):e("clean")}))
e("clean")}else e("recover")}((function(t){var i=n.createTransportParams(null,t)
if("recover"===t){C.logAction(C.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport recovery mode = recover; recoveryKey = "+n.options.recover)
var r=n.options.recover.split(":")
r&&r[2]&&(n.msgSerial=r[2])}else C.logAction(C.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport params = "+i.toString())
e(i)}))},u.prototype.tryATransport=function(e,t,n){var i=this
e.host,C.logAction(C.LOG_MICRO,"ConnectionManager.tryATransport()","trying "+t),u.supportedTransports[t].tryConnect(this,this.realtime.auth,e,(function(r,o){var s=i.state
return s==i.states.closing||s==i.states.closed||s==i.states.failed?(o&&(C.logAction(C.LOG_MINOR,"ConnectionManager.tryATransport()","connection "+s.state+" while we were attempting the transport; closing "+o),o.close()),void n(!0)):r?(C.logAction(C.LOG_MINOR,"ConnectionManager.tryATransport()","transport "+t+" "+r.event+", err: "+r.error.toString()),void(V.isTokenErr(r.error)?i.realtime.auth._forceNewToken(null,null,(function(r){r?i.actOnErrorFromAuthorize(r):i.tryATransport(e,t,n)})):"failed"===r.event?(i.notifyState({state:"failed",error:r.error}),n(!0)):"disconnected"===r.event&&n(!1))):(C.logAction(C.LOG_MICRO,"ConnectionManager.tryATransport()","viable transport "+t+"; setting pending"),i.setTransportPending(o,e),void n(null,o))}))},u.prototype.setTransportPending=function(e,t){var n=t.mode
C.logAction(C.LOG_MINOR,"ConnectionManager.setTransportPending()","transport = "+e+"; mode = "+n),v.arrDeleteValue(this.proposedTransports,e),this.pendingTransports.push(e)
var i=this
e.once("connected",(function(r,o,a,c){"upgrade"==n&&i.activeProtocol?e.shortName!==s&&v.arrIn(i.getUpgradePossibilities(),s)?setTimeout((function(){i.scheduleTransportActivation(r,e,o,a,c)}),i.options.timeouts.parallelUpgradeDelay):i.scheduleTransportActivation(r,e,o,a,c):(i.activateTransport(r,e,o,a,c),v.nextTick((function(){i.connectImpl(t)}))),"recover"===n&&i.options.recover&&(i.options.recover=null,i.unpersistConnection())})),e.on(["disconnected","closed","failed"],(function(t){i.deactivateTransport(e,this.event,t)})),this.emit("transport.pending",e)},u.prototype.scheduleTransportActivation=function(e,t,n,i,r){var s,a,c=this,u=this.activeProtocol&&this.activeProtocol.getTransport(),h=function(){t.disconnect(),v.arrDeleteValue(c.pendingTransports,t)}
return this.state!==this.states.connected&&this.state!==this.states.connecting?(C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Current connection state ("+this.state.state+(this.state===this.states.synchronizing?", but with an upgrade already in progress":"")+") is not valid to upgrade in; abandoning upgrade to "+t.shortName),void h()):!u||(s=t,a=u,v.arrIndexOf(o,s.shortName)>v.arrIndexOf(o,a.shortName))?(C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Scheduling transport upgrade; transport = "+t),void this.realtime.channels.onceNopending((function(o){var s
if(o)C.logAction(C.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Unable to activate transport; transport = "+t+"; err = "+o)
else{if(!t.isConnected)return C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Proposed transport "+t.shortName+"is no longer connected; abandoning upgrade"),void h()
if(c.state===c.states.connected)C.logAction(C.LOG_MICRO,"ConnectionManager.scheduleTransportActivation()","Currently connected, so temporarily pausing events until the upgrade is complete"),c.state=c.states.synchronizing,s=c.activeProtocol
else if(c.state!==c.states.connecting)return C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Current connection state ("+c.state.state+(c.state===c.states.synchronizing?", but with an upgrade already in progress":"")+") is not valid to upgrade in; abandoning upgrade to "+t.shortName),void h()
var a=n!==c.connectionId,u=a?r:c
a&&C.logAction(C.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Upgrade resulted in new connectionId; resetting library connection position from "+(c.timeSerial||c.connectionSerial)+" to "+(u.timeSerial||u.connectionSerial)+"; upgrade error was "+e),C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Syncing transport; transport = "+t),c.sync(t,u,(function(n,r,o){if(n)c.state===c.states.synchronizing&&(C.logAction(C.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Unexpected error attempting to sync transport; transport = "+t+"; err = "+n),c.disconnectAllTransports())
else{var a=function(){C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Activating transport; transport = "+t),c.activateTransport(e,t,r,i,o),c.state===c.states.synchronizing?(C.logAction(C.LOG_MICRO,"ConnectionManager.scheduleTransportActivation()","Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = "+t),c.state=c.states.connected):C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Pre-upgrade protocol idle, but state is now "+c.state.state+", so leaving unchanged"),c.state.sendEvents&&c.sendQueuedMessages()}
s?s.onceIdle(a):a()}}))}}))):(C.logAction(C.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Proposed transport "+t.shortName+" is no better than current active transport "+u.shortName+" - abandoning upgrade"),void h())},u.prototype.activateTransport=function(e,t,n,i,r){C.logAction(C.LOG_MINOR,"ConnectionManager.activateTransport()","transport = "+t),e&&C.logAction(C.LOG_ERROR,"ConnectionManager.activateTransport()","error = "+e),n&&C.logAction(C.LOG_MICRO,"ConnectionManager.activateTransport()","connectionId =  "+n),i&&C.logAction(C.LOG_MICRO,"ConnectionManager.activateTransport()","connectionDetails =  "+JSON.stringify(i)),r&&C.logAction(C.LOG_MICRO,"ConnectionManager.activateTransport()","serial =  "+(r.timeSerial||r.connectionSerial)),this.persistTransportPreference(t)
var o=this.state,s=this.states.connected.state
if(C.logAction(C.LOG_MINOR,"ConnectionManager.activateTransport()","current state = "+o.state),o.state==this.states.closing.state||o.state==this.states.closed.state||o.state==this.states.failed.state)return C.logAction(C.LOG_MINOR,"ConnectionManager.activateTransport()","Disconnecting transport and abandoning"),t.disconnect(),!1
if(v.arrDeleteValue(this.pendingTransports,t),!t.isConnected)return C.logAction(C.LOG_MINOR,"ConnectionManager.activateTransport()","Declining to activate transport "+t+" since it appears to no longer be connected"),!1
var a=this.activeProtocol
this.activeProtocol=new N(t),this.host=t.params.host
var c=i.connectionKey
c&&this.connectionKey!=c&&this.setConnection(n,i,r,!!e),this.onConnectionDetailsUpdate(i,t)
var u=this
if(v.nextTick((function(){t.on("connected",(function(e,n,i){u.onConnectionDetailsUpdate(i,t),u.emit("update",new j(s,s,null,e))}))})),o.state===this.states.connected.state?e&&(this.errorReason=this.realtime.connection.errorReason=e,this.emit("update",new j(s,s,null,e))):(this.notifyState({state:"connected",error:e}),this.errorReason=this.realtime.connection.errorReason=e||null),this.emit("transport.active",t),a)if(a.messageQueue.count()>0&&C.logAction(C.LOG_ERROR,"ConnectionManager.activateTransport()","Previous active protocol (for transport "+a.transport.shortName+", new one is "+t.shortName+") finishing with "+a.messageQueue.count()+" messages still pending"),a.transport===t){var h="Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = "+t.shortName+"; stack = "+(new Error).stack
C.logAction(C.LOG_ERROR,"ConnectionManager.activateTransport()",h),w.report("error",h,"transport-previously-active")}else a.finish()
return v.safeArrForEach(this.pendingTransports,(function(e){if(e===t){var n="Assumption violated: activating a transport that is still marked as a pending transport; transport = "+t.shortName+"; stack = "+(new Error).stack
C.logAction(C.LOG_ERROR,"ConnectionManager.activateTransport()",n),w.report("error",n,"transport-activating-pending"),v.arrDeleteValue(u.pendingTransports,t)}else e.disconnect()})),v.safeArrForEach(this.proposedTransports,(function(e){if(e===t){var n="Assumption violated: activating a transport that is still marked as a proposed transport; transport = "+t.shortName+"; stack = "+(new Error).stack
C.logAction(C.LOG_ERROR,"ConnectionManager.activateTransport()",n),w.report("error",n,"transport-activating-proposed"),v.arrDeleteValue(u.proposedTransports,t)}else e.dispose()})),!0},u.prototype.deactivateTransport=function(e,t,n){var i=this.activeProtocol,r=i&&i.getTransport()===e,o=v.arrDeleteValue(this.pendingTransports,e),s=v.arrDeleteValue(this.proposedTransports,e),a=this.noTransportsScheduledForActivation()
if(C.logAction(C.LOG_MINOR,"ConnectionManager.deactivateTransport()","transport = "+e),C.logAction(C.LOG_MINOR,"ConnectionManager.deactivateTransport()","state = "+t+(r?"; was active":o?"; was pending":s?"; was proposed":"")+(a?"":"; another transport is scheduled for activation")),n&&n.message&&C.logAction(C.LOG_MICRO,"ConnectionManager.deactivateTransport()","reason =  "+n.message),r&&(C.logAction(C.LOG_MICRO,"ConnectionManager.deactivateTransport()","Getting, clearing, and requeuing "+this.activeProtocol.messageQueue.count()+" pending messages"),this.queuePendingMessages(i.getPendingMessages()),v.nextTick((function(){i.clearPendingMessages()})),this.activeProtocol=this.host=null,clearTimeout(this.channelResumeCheckTimer)),this.emit("transport.inactive",e),r&&a||r&&"failed"===t||"closed"===t||null===i&&o&&0===this.pendingTransports.length){if("disconnected"===t&&n&&n.statusCode>500&&this.httpHosts.length>1)return this.unpersistTransportPreference(),this.forceFallbackHost=!0,void this.notifyState({state:t,error:n,retryImmediately:!0})
var c="failed"===t&&V.isTokenErr(n)?"disconnected":t
this.notifyState({state:c,error:n})}else r&&"disconnected"===t&&this.state!==this.states.synchronizing&&(C.logAction(C.LOG_MICRO,"ConnectionManager.deactivateTransport()","wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"),this.startSuspendTimer(),this.startTransitionTimer(this.states.connecting),this.notifyState({state:"connecting",error:n}))},u.prototype.noTransportsScheduledForActivation=function(){return v.isEmpty(this.pendingTransports)||this.pendingTransports.every((function(e){return!e.isConnected}))},u.prototype.sync=function(e,t,i){var r=setTimeout((function(){e.off("sync"),i(new I("Timeout waiting for sync response",5e4,500))}),this.options.timeouts.realtimeRequestTimeout),o=k.fromValues({action:n.SYNC,connectionKey:this.connectionKey})
t.timeSerial?o.timeSerial=t.timeSerial:void 0!==t.connectionSerial&&(o.connectionSerial=t.connectionSerial),e.send(o),e.once("sync",(function(e,t){clearTimeout(r),i(null,e,t)}))},u.prototype.setConnection=function(e,t,n,i){var r=this,o=this.connectionid,s=o&&o!==e;(s||!o&&i)&&(C.logAction(C.LOG_MINOR,"ConnectionManager.setConnection()","Resetting msgSerial"),this.msgSerial=0),this.connectionId!==e?(C.logAction(C.LOG_MINOR,"ConnectionManager.setConnection()","New connectionId; reattaching any attached channels"),v.nextTick((function(){r.realtime.channels.reattach()}))):this.options.checkChannelsOnResume&&(C.logAction(C.LOG_MINOR,"ConnectionManager.setConnection()","Same connectionId; checkChannelsOnResume is enabled"),clearTimeout(this.channelResumeCheckTimer),this.realtime.channels.resetAttachedMsgIndicators(),this.channelResumeCheckTimer=setTimeout((function(){r.realtime.channels.checkAttachedMsgIndicators(e)}),3e4)),this.realtime.connection.id=this.connectionId=e,this.realtime.connection.key=this.connectionKey=t.connectionKey
var a=s||!o
this.setConnectionSerial(n,a)},u.prototype.clearConnection=function(){this.realtime.connection.id=this.connectionId=void 0,this.realtime.connection.key=this.connectionKey=void 0,this.clearConnectionSerial(),this.msgSerial=0,this.unpersistConnection()},u.prototype.setConnectionSerial=function(e,t){var n=e.timeSerial,i=e.connectionSerial
if(C.logAction(C.LOG_MICRO,"ConnectionManager.setConnectionSerial()","Updating connection serial; serial = "+i+"; timeSerial = "+n+"; force = "+t+"; previous = "+this.connectionSerial),void 0!==n)return n<=this.timeSerial&&!t?(C.logAction(C.LOG_ERROR,"ConnectionManager.setConnectionSerial()","received message with timeSerial "+n+", but current timeSerial is "+this.timeSerial+"; assuming message is a duplicate and discarding it"),!0):(this.realtime.connection.timeSerial=this.timeSerial=n,void this.setRecoveryKey())
if(void 0!==i){if(i<=this.connectionSerial&&!t)return C.logAction(C.LOG_ERROR,"ConnectionManager.setConnectionSerial()","received message with connectionSerial "+i+", but current connectionSerial is "+this.connectionSerial+"; assuming message is a duplicate and discarding it"),!0
this.realtime.connection.serial=this.connectionSerial=i,this.setRecoveryKey()}},u.prototype.clearConnectionSerial=function(){this.realtime.connection.serial=this.connectionSerial=void 0,this.realtime.connection.timeSerial=this.timeSerial=void 0,this.clearRecoveryKey()},u.prototype.setRecoveryKey=function(){this.realtime.connection.recoveryKey=this.connectionKey+":"+(this.timeSerial||this.connectionSerial)+":"+this.msgSerial},u.prototype.clearRecoveryKey=function(){this.realtime.connection.recoveryKey=null},u.prototype.checkConnectionStateFreshness=function(){if(this.lastActivity&&this.connectionId){var e=v.now()-this.lastActivity
e>this.connectionStateTtl+this.maxIdleInterval&&(C.logAction(C.LOG_MINOR,"ConnectionManager.checkConnectionStateFreshness()","Last known activity from realtime was "+e+"ms ago; discarding connection state"),this.clearConnection(),this.states.connecting.failState="suspended",this.states.connecting.queueEvents=!1)}},u.prototype.persistConnection=function(){if(t){var e=this.realtime.connection.recoveryKey
e&&(n={recoveryKey:e,disconnectedAt:v.now(),location:a.location,clientId:this.realtime.auth.clientId},this.connectionStateTtl,t&&g.setSession("ably-connection-recovery",n))}var n},u.prototype.unpersistConnection=function(){t&&g.removeSession("ably-connection-recovery")},u.prototype.getError=function(){return this.errorReason||this.getStateError()},u.prototype.getStateError=function(){return L[this.state.state]},u.prototype.activeState=function(){return this.state.queueEvents||this.state.sendEvents},u.prototype.enactStateChange=function(e){var t="failed"===e.current?C.LOG_ERROR:C.LOG_MAJOR
C.logAction(t,"Connection state",e.current+(e.reason?"; reason: "+e.reason:"")),C.logAction(C.LOG_MINOR,"ConnectionManager.enactStateChange","setting new state: "+e.current+"; reason = "+(e.reason&&e.reason.message))
var n=this.state=this.states[e.current]
e.reason&&(this.errorReason=e.reason,this.realtime.connection.errorReason=e.reason),(n.terminal||"suspended"===n.state)&&this.clearConnection(),this.emit("connectionstate",e)},u.prototype.startTransitionTimer=function(e){C.logAction(C.LOG_MINOR,"ConnectionManager.startTransitionTimer()","transitionState: "+e.state),this.transitionTimer&&(C.logAction(C.LOG_MINOR,"ConnectionManager.startTransitionTimer()","clearing already-running timer"),clearTimeout(this.transitionTimer))
var t=this
this.transitionTimer=setTimeout((function(){t.transitionTimer&&(t.transitionTimer=null,C.logAction(C.LOG_MINOR,"ConnectionManager "+e.state+" timer expired","requesting new state: "+e.failState),t.notifyState({state:e.failState}))}),e.retryDelay)},u.prototype.cancelTransitionTimer=function(){C.logAction(C.LOG_MINOR,"ConnectionManager.cancelTransitionTimer()",""),this.transitionTimer&&(clearTimeout(this.transitionTimer),this.transitionTimer=null)},u.prototype.startSuspendTimer=function(){var e=this
this.suspendTimer||(this.suspendTimer=setTimeout((function(){e.suspendTimer&&(e.suspendTimer=null,C.logAction(C.LOG_MINOR,"ConnectionManager suspend timer expired","requesting new state: suspended"),e.states.connecting.failState="suspended",e.states.connecting.queueEvents=!1,e.notifyState({state:"suspended"}))}),this.connectionStateTtl))},u.prototype.checkSuspendTimer=function(e){"disconnected"!==e&&"suspended"!==e&&"connecting"!==e&&this.cancelSuspendTimer()},u.prototype.cancelSuspendTimer=function(){this.states.connecting.failState="disconnected",this.states.connecting.queueEvents=!0,this.suspendTimer&&(clearTimeout(this.suspendTimer),this.suspendTimer=null)},u.prototype.startRetryTimer=function(e){var t=this
this.retryTimer=setTimeout((function(){C.logAction(C.LOG_MINOR,"ConnectionManager retry timer expired","retrying"),t.retryTimer=null,t.requestState({state:"connecting"})}),e)},u.prototype.cancelRetryTimer=function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)},u.prototype.notifyState=function(e){var t=e.state,n=this,i="disconnected"===t&&(this.state===this.states.connected||this.state===this.states.synchronizing||e.retryImmediately||this.state===this.states.connecting&&e.error&&V.isTokenErr(e.error)&&!(this.errorReason&&V.isTokenErr(this.errorReason)))
if(C.logAction(C.LOG_MINOR,"ConnectionManager.notifyState()","new state: "+t+(i?"; will retry connection immediately":"")),t!=this.state.state&&(this.cancelTransitionTimer(),this.cancelRetryTimer(),this.checkSuspendTimer(e.state),!this.state.terminal)){var r=this.states[e.state],o=new j(this.state.state,r.state,r.retryDelay,e.error||L[r.state])
if(i){var s=function(){n.state===n.states.disconnected&&(n.lastAutoReconnectAttempt=v.now(),n.requestState({state:"connecting"}))},a=this.lastAutoReconnectAttempt&&v.now()-this.lastAutoReconnectAttempt+1
a&&a<1e3?(C.logAction(C.LOG_MICRO,"ConnectionManager.notifyState()","Last reconnect attempt was only "+a+"ms ago, waiting another "+(1e3-a)+"ms before trying again"),setTimeout(s,1e3-a)):v.nextTick(s)}else"disconnected"!==t&&"suspended"!==t||this.startRetryTimer(r.retryDelay);("disconnected"===t&&!i||"suspended"===t||r.terminal)&&v.nextTick((function(){n.disconnectAllTransports()})),"connected"!=t||this.activeProtocol||C.logAction(C.LOG_ERROR,"ConnectionManager.notifyState()","Broken invariant: attempted to go into connected state, but there is no active protocol"),this.enactStateChange(o),this.state.sendEvents?this.sendQueuedMessages():this.state.queueEvents||(this.realtime.channels.propogateConnectionInterruption(t,o.reason),this.failQueuedMessages(o.reason))}},u.prototype.requestState=function(e){var t=e.state,n=this
if(C.logAction(C.LOG_MINOR,"ConnectionManager.requestState()","requested state: "+t+"; current state: "+this.state.state),t!=this.state.state&&(this.cancelTransitionTimer(),this.cancelRetryTimer(),this.checkSuspendTimer(t),!("connecting"==t&&"connected"==this.state.state||"closing"==t&&"closed"==this.state.state))){var i=this.states[t],r=new j(this.state.state,i.state,null,e.error||L[i.state])
this.enactStateChange(r),"connecting"==t&&v.nextTick((function(){n.startConnect()})),"closing"==t&&this.closeImpl()}},u.prototype.startConnect=function(){if(this.state===this.states.connecting){var e=this.realtime.auth,t=this,n=++this.connectCounter,i=function(){t.checkConnectionStateFreshness(),t.getTransportParams((function(e){n===t.connectCounter&&t.connectImpl(e,n)}))}
if(C.logAction(C.LOG_MINOR,"ConnectionManager.startConnect()","starting connection"),this.startSuspendTimer(),this.startTransitionTimer(this.states.connecting),"basic"===e.method)i()
else{var r=function(e){n===t.connectCounter&&(e?t.actOnErrorFromAuthorize(e):i())}
this.errorReason&&V.isTokenErr(this.errorReason)?e._forceNewToken(null,null,r):e._ensureValidAuthCredentials(!1,r)}}else C.logAction(C.LOG_MINOR,"ConnectionManager.startConnect()","Must be in connecting state to connect, but was "+this.state.state)},u.prototype.connectImpl=function(e,t){var n=this.state.state
n!==this.states.connecting.state&&n!==this.states.connected.state?C.logAction(C.LOG_MINOR,"ConnectionManager.connectImpl()","Must be in connecting state to connect (or connected to upgrade), but was "+n):this.pendingTransports.length?C.logAction(C.LOG_MINOR,"ConnectionManager.connectImpl()","Transports "+this.pendingTransports[0].toString()+" currently pending; taking no action"):n==this.states.connected.state?this.upgradeIfNeeded(e):this.transports.length>1&&this.getTransportPreference()?this.connectPreference(e):this.connectBase(e,t)},u.prototype.connectPreference=function(e){var t=this.getTransportPreference(),n=this,i=!1
v.arrIn(this.transports,t)||(this.unpersistTransportPreference(),this.connectImpl(e)),C.logAction(C.LOG_MINOR,"ConnectionManager.connectPreference()","Trying to connect with stored transport preference "+t)
var r=setTimeout((function(){i=!0,n.state.state!==n.states.connected.state&&(C.logAction(C.LOG_MINOR,"ConnectionManager.connectPreference()","Shortcircuit connection attempt with "+t+" failed; clearing preference and trying from scratch"),n.disconnectAllTransports(),n.unpersistTransportPreference()),n.connectImpl(e)}),this.options.timeouts.preferenceConnectTimeout)
e.host=n.httpHosts[0],n.tryATransport(e,t,(function(t,o){clearTimeout(r),i&&o?(o.off(),o.disconnect(),v.arrDeleteValue(this.pendingTransports,o)):o||t||(n.unpersistTransportPreference(),n.connectImpl(e))}))},u.prototype.connectBase=function(e,t){var n=this,i=function(e){n.notifyState({state:n.states.connecting.failState,error:e})},r=this.httpHosts.slice(),o=function(e,i){t===n.connectCounter&&(i||e||a())}
C.logAction(C.LOG_MINOR,"ConnectionManager.connectBase()","Trying to connect with base transport "+this.baseTransport)
var s=r.shift()
if(s){if(e.host=s,this.forceFallbackHost&&r.length)return this.forceFallbackHost=!1,void a()
this.tryATransport(e,this.baseTransport,o)}else i(new I("Unable to connect (no available host)",80003,404))
function a(){r.length?O.checkConnectivity((function(s,a){t===n.connectCounter&&(s?i(s):a?(e.host=v.arrPopRandomElement(r),n.tryATransport(e,n.baseTransport,o)):i(new I("Unable to connect (network unreachable)",80003,404)))})):i(new I("Unable to connect (and no more fallback hosts to try)",80003,404))}},u.prototype.getUpgradePossibilities=function(){var e=this.activeProtocol.getTransport().shortName,t=v.arrIndexOf(this.upgradeTransports,e)
return this.upgradeTransports.slice(t+1)},u.prototype.upgradeIfNeeded=function(e){var t=this.getUpgradePossibilities(),n=this
C.logAction(C.LOG_MINOR,"ConnectionManager.upgradeIfNeeded()","upgrade possibilities: "+v.inspect(t)),t.length&&v.arrForEach(t,(function(t){var i=n.createTransportParams(e.host,"upgrade")
n.tryATransport(i,t,r)}))},u.prototype.closeImpl=function(){C.logAction(C.LOG_MINOR,"ConnectionManager.closeImpl()","closing connection"),this.cancelSuspendTimer(),this.startTransitionTimer(this.states.closing),v.safeArrForEach(this.pendingTransports,(function(e){C.logAction(C.LOG_MICRO,"ConnectionManager.closeImpl()","Closing pending transport: "+e),e&&e.close()})),v.safeArrForEach(this.proposedTransports,(function(e){C.logAction(C.LOG_MICRO,"ConnectionManager.closeImpl()","Disposing of proposed transport: "+e),e&&e.dispose()})),this.activeProtocol&&(C.logAction(C.LOG_MICRO,"ConnectionManager.closeImpl()","Closing active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().close()),this.notifyState({state:"closed"})},u.prototype.onAuthUpdated=function(e,t){var i=this
switch(this.state.state){case"connected":if(C.logAction(C.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Sending AUTH message on active transport"),(this.pendingTransports.length||this.proposedTransports.length)&&i.state!==i.states.synchronizing){this.disconnectAllTransports(!0)
var r=this.activeProtocol.getTransport().params
v.nextTick((function(){"connected"===i.state.state&&i.upgradeIfNeeded(r)}))}this.activeProtocol.getTransport().onAuthUpdated(e)
var o=k.fromValues({action:n.AUTH,auth:{accessToken:e.token}})
this.send(o)
var s=function(){i.off(a),t(null,e)},a=function e(n){"failed"===n.current&&(i.off(s),i.off(e),t(n.reason||i.getStateError()))}
this.once("connectiondetails",s),this.on("connectionstate",a)
break
case"connecting":C.logAction(C.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Aborting current connection attempts in order to start again with the new auth details"),this.disconnectAllTransports()
default:C.logAction(C.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Connection state is "+this.state.state+"; waiting until either connected or failed"),i.on("connectionstate",(function n(r){switch(r.current){case"connected":i.off(n),t(null,e)
break
case"failed":case"closed":case"suspended":i.off(n),t(r.reason||i.getStateError())}})),"connecting"===this.state.state?i.startConnect():i.requestState({state:"connecting"})}},u.prototype.disconnectAllTransports=function(e){C.logAction(C.LOG_MINOR,"ConnectionManager.disconnectAllTransports()","Disconnecting all transports"+(e?" except the active transport":"")),this.connectCounter++,v.safeArrForEach(this.pendingTransports,(function(e){C.logAction(C.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting pending transport: "+e),e&&e.disconnect()})),this.pendingTransports=[],v.safeArrForEach(this.proposedTransports,(function(e){C.logAction(C.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disposing of proposed transport: "+e),e&&e.dispose()})),this.proposedTransports=[],this.activeProtocol&&!e&&(C.logAction(C.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().disconnect())},u.prototype.send=function(e,t,n){n=n||r
var o=this.state
if(o.sendEvents)return C.logAction(C.LOG_MICRO,"ConnectionManager.send()","sending event"),void this.sendImpl(new i(e,n))
if(!(t&&o.queueEvents||o.forceQueueEvents)){var s="rejecting event, queueEvent was "+t+", state was "+o.state
return C.logAction(C.LOG_MICRO,"ConnectionManager.send()",s),void n(this.errorReason||new I(s,9e4,400))}C.shouldLog(C.LOG_MICRO)&&C.logAction(C.LOG_MICRO,"ConnectionManager.send()","queueing msg; "+k.stringify(e)),this.queue(e,n)},u.prototype.sendImpl=function(e){var t=e.message
e.ackRequired&&!e.sendAttempted&&(t.msgSerial=this.msgSerial++,this.setRecoveryKey())
try{this.activeProtocol.send(e)}catch(e){C.logAction(C.LOG_ERROR,"ConnectionManager.sendImpl()","Unexpected exception in transport.send(): "+e.stack)}},u.prototype.queue=function(e,t){C.logAction(C.LOG_MICRO,"ConnectionManager.queue()","queueing event")
var r=this.queuedMessages.last(),o=this.options.maxMessageSize
r&&!r.sendAttempted&&function(e,t,i){var r
if(e.channel!==t.channel)return!1
if((r=e.action)!==n.PRESENCE&&r!==n.MESSAGE)return!1
if(r!==t.action)return!1
var o=r===n.PRESENCE?"presence":"messages",s=e[o].concat(t[o])
return!(T.getMessagesSize(s)>i||!v.allSame(s,"clientId")||!v.arrEvery(s,(function(e){return!e.id}))||(e[o]=s,0))}(r.message,e,o)?(r.merged||(r.callback=S([r.callback]),r.merged=!0),r.callback.push(t)):this.queuedMessages.push(new i(e,t))},u.prototype.sendQueuedMessages=function(){var e
for(C.logAction(C.LOG_MICRO,"ConnectionManager.sendQueuedMessages()","sending "+this.queuedMessages.count()+" queued messages");e=this.queuedMessages.shift();)this.sendImpl(e)},u.prototype.queuePendingMessages=function(e){e&&e.length&&(C.logAction(C.LOG_MICRO,"ConnectionManager.queuePendingMessages()","queueing "+e.length+" pending messages"),this.queuedMessages.prepend(e))},u.prototype.failQueuedMessages=function(e){var t=this.queuedMessages.count()
t>0&&(C.logAction(C.LOG_ERROR,"ConnectionManager.failQueuedMessages()","failing "+t+" queued messages, err = "+v.inspectError(e)),this.queuedMessages.completeAllMessages(e))},u.prototype.onChannelMessage=function(e,t){var i=this.activeProtocol&&t===this.activeProtocol.getTransport(),r=v.arrIn(this.pendingTransports,t)&&this.state==this.states.synchronizing,o=e.action===n.MESSAGE||e.action===n.PRESENCE
if(i||r){if(o){if(this.setConnectionSerial(e))return
if(k.isDuplicate(e,this.mostRecentMsg))return void C.logAction(C.LOG_ERROR,"ConnectionManager.onChannelMessage()","received message with different connectionSerial, but same message id as a previous; discarding; id = "+e.id)
this.mostRecentMsg=e}this.realtime.channels.onChannelMessage(e)}else v.arrIndexOf([n.ACK,n.NACK,n.ERROR],e.action)>-1?this.realtime.channels.onChannelMessage(e):C.logAction(C.LOG_MICRO,"ConnectionManager.onChannelMessage()","received message "+JSON.stringify(e)+"on defunct transport; discarding")},u.prototype.ping=function(e,t){if(e){C.logAction(C.LOG_MINOR,"ConnectionManager.ping()","transport = "+e)
var n=v.now(),i=v.cheapRandStr(),r=function r(s){if(s===i){e.off("heartbeat",r),clearTimeout(o)
var a=v.now()-n
t(null,a)}},o=setTimeout((function(){e.off("heartbeat",r),t(new I("Timeout waiting for heartbeat response",5e4,500))}),this.options.timeouts.realtimeRequestTimeout)
return e.on("heartbeat",r),void e.ping(i)}if("connected"===this.state.state){var s=!1,a=this,c=function(){s||(s=!0,v.nextTick((function(){a.ping(null,t)})))}
this.on("transport.active",c),this.ping(this.activeProtocol.getTransport(),(function(e,n){a.off("transport.active",c),s||(s=!0,t(e,n))}))}else t(new I("Unable to ping service; not connected",4e4,400))},u.prototype.abort=function(e){this.activeProtocol.getTransport().fail(e)},u.prototype.registerProposedTransport=function(e){this.proposedTransports.push(e)},u.prototype.getTransportPreference=function(){return this.transportPreference||e&&g.get("ably-transport-preference")},u.prototype.persistTransportPreference=function(t){v.arrIn(m.upgradeTransports,t.shortName)&&(this.transportPreference=t.shortName,e&&g.set("ably-transport-preference",t.shortName))},u.prototype.unpersistTransportPreference=function(){this.transportPreference=null,e&&g.remove("ably-transport-preference")},u.prototype.actOnErrorFromAuthorize=function(e){if(40171===e.code)this.notifyState({state:"failed",error:e})
else if(403===e.statusCode){var t="Client configured authentication provider returned 403; failing the connection"
C.logAction(C.LOG_ERROR,"ConnectionManager.actOnErrorFromAuthorize()",t),this.notifyState({state:"failed",error:new I(t,80019,403,e)})}else t="Client configured authentication provider request failed",C.logAction(C.LOG_MINOR,"ConnectionManager.actOnErrorFromAuthorize",t),this.notifyState({state:this.state.failState,error:new I(t,80019,401,e)})},u.prototype.onConnectionDetailsUpdate=function(e,t){if(e){this.connectionDetails=e,e.maxMessageSize&&(this.options.maxMessageSize=e.maxMessageSize)
var n=e.clientId
if(n){var i=this.realtime.auth._uncheckedSetClientId(n)
if(i)return C.logAction(C.LOG_ERROR,"ConnectionManager.onConnectionDetailsUpdate()",i.message),void t.fail(i)}var r=e.connectionStateTtl
r&&(this.connectionStateTtl=r),this.maxIdleInterval=e.maxIdleInterval,this.emit("connectiondetails",e)}},u}(),U=function(){var e=k.Action,t=k.fromValues({action:e.CLOSE}),n=k.fromValues({action:e.DISCONNECT})
function i(e,t,n){b.call(this),this.connectionManager=e,e.registerProposedTransport(this),this.auth=t,this.params=n,this.timeouts=n.options.timeouts,this.format=n.format,this.isConnected=!1,this.isFinished=!1,this.isDisposed=!1,this.maxIdleInterval=null,this.idleTimer=null,this.lastActivity=null}return v.inherits(i,b),i.prototype.connect=function(){},i.prototype.close=function(){this.isConnected&&this.requestClose(),this.finish("closed",L.closed)},i.prototype.disconnect=function(e){this.isConnected&&this.requestDisconnect(),this.finish("disconnected",e||L.disconnected)},i.prototype.fail=function(e){this.isConnected&&this.requestDisconnect(),this.finish("failed",e||L.failed)},i.prototype.finish=function(e,t){this.isFinished||(this.isFinished=!0,this.isConnected=!1,this.maxIdleInterval=null,clearTimeout(this.idleTimer),this.idleTimer=null,this.emit(e,t),this.dispose())},i.prototype.onProtocolMessage=function(t){switch(C.shouldLog(C.LOG_MICRO)&&C.logAction(C.LOG_MICRO,"Transport.onProtocolMessage()","received on "+this.shortName+": "+k.stringify(t)+"; connectionId = "+this.connectionManager.connectionId),this.onActivity(),t.action){case e.HEARTBEAT:C.logAction(C.LOG_MICRO,"Transport.onProtocolMessage()",this.shortName+" heartbeat; connectionId = "+this.connectionManager.connectionId),this.emit("heartbeat",t.id)
break
case e.CONNECTED:this.onConnect(t),this.emit("connected",t.error,t.connectionId,t.connectionDetails,t)
break
case e.CLOSED:this.onClose(t)
break
case e.DISCONNECTED:this.onDisconnect(t)
break
case e.ACK:this.emit("ack",t.msgSerial,t.count)
break
case e.NACK:this.emit("nack",t.msgSerial,t.count,t.error)
break
case e.SYNC:if(void 0!==t.connectionId){this.emit("sync",t.connectionId,t)
break}this.connectionManager.onChannelMessage(t,this)
break
case e.AUTH:this.auth.authorize((function(e){e&&C.logAction(C.LOG_ERROR,"Transport.onProtocolMessage()","Ably requested re-authentication, but unable to obtain a new token: "+v.inspectError(e))}))
break
case e.ERROR:if(C.logAction(C.LOG_MINOR,"Transport.onProtocolMessage()","received error action; connectionId = "+this.connectionManager.connectionId+"; err = "+v.inspect(t.error)+(t.channel?", channel: "+t.channel:"")),void 0===t.channel){this.onFatalError(t)
break}this.connectionManager.onChannelMessage(t,this)
break
default:this.connectionManager.onChannelMessage(t,this)}},i.prototype.onConnect=function(e){this.isConnected=!0
var t=e.connectionDetails.maxIdleInterval
t&&(this.maxIdleInterval=t+this.timeouts.realtimeRequestTimeout,this.onActivity())},i.prototype.onDisconnect=function(e){var t=e&&e.error
C.logAction(C.LOG_MINOR,"Transport.onDisconnect()","err = "+v.inspectError(t)),this.finish("disconnected",t)},i.prototype.onFatalError=function(e){var t=e&&e.error
C.logAction(C.LOG_MINOR,"Transport.onFatalError()","err = "+v.inspectError(t)),this.finish("failed",t)},i.prototype.onClose=function(e){var t=e&&e.error
C.logAction(C.LOG_MINOR,"Transport.onClose()","err = "+v.inspectError(t)),this.finish("closed",t)},i.prototype.requestClose=function(){C.logAction(C.LOG_MINOR,"Transport.requestClose()",""),this.send(t)},i.prototype.requestDisconnect=function(){C.logAction(C.LOG_MINOR,"Transport.requestDisconnect()",""),this.send(n)},i.prototype.ping=function(e){var t={action:k.Action.HEARTBEAT}
e&&(t.id=e),this.send(k.fromValues(t))},i.prototype.dispose=function(){C.logAction(C.LOG_MINOR,"Transport.dispose()",""),this.isDisposed=!0,this.off()},i.prototype.onActivity=function(){this.maxIdleInterval&&(this.lastActivity=this.connectionManager.lastActivity=v.now(),this.setIdleTimer(this.maxIdleInterval+100))},i.prototype.setIdleTimer=function(e){var t=this
this.idleTimer||(this.idleTimer=setTimeout((function(){t.onIdleTimerExpire()}),e))},i.prototype.onIdleTimerExpire=function(){this.idleTimer=null
var e=v.now()-this.lastActivity,t=this.maxIdleInterval-e
if(t<=0){var n="No activity seen from realtime in "+e+"ms; assuming connection has dropped"
C.logAction(C.LOG_ERROR,"Transport.onIdleTimerExpire()",n),this.disconnect(new I(n,80003,408))}else this.setIdleTimer(t+100)},i.prototype.onAuthUpdated=function(){},i}(),q=(function(){var e=f.WebSocket
function t(e,t,n){this.shortName="web_socket",n.heartbeats=f.useProtocolHeartbeats,U.call(this,e,t,n),this.wsHost=m.getHost(n.options,n.host,!0)}v.inherits(t,U),t.isAvailable=function(){return!!e},t.isAvailable()&&(G.supportedTransports.web_socket=t),t.tryConnect=function(e,n,i,r){var o=new t(e,n,i),s=function(e){r({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("wsopen",(function(){C.logAction(C.LOG_MINOR,"WebSocketTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),r(null,o)})),o.connect()},t.prototype.createWebSocket=function(t,n){var i=0
if(n)for(var r in n)t+=(i++?"&":"?")+r+"="+n[r]
return this.uri=t,new e(t)},t.prototype.toString=function(){return"WebSocketTransport; uri="+this.uri},t.prototype.connect=function(){C.logAction(C.LOG_MINOR,"WebSocketTransport.connect()","starting"),U.prototype.connect.call(this)
var e=this,t=this.params,n=t.options,i=(n.tls?"wss://":"ws://")+this.wsHost+":"+m.getPort(n)+"/"
C.logAction(C.LOG_MINOR,"WebSocketTransport.connect()","uri: "+i),this.auth.getAuthParams((function(n,r){if(!e.isDisposed){var o=""
for(var s in r)o+=" "+s+": "+r[s]+";"
if(C.logAction(C.LOG_MINOR,"WebSocketTransport.connect()","authParams:"+o+" err: "+n),n)e.disconnect(n)
else{var a=t.getConnectParams(r)
try{var c=e.wsConnection=e.createWebSocket(i,a)
c.binaryType=f.binaryType,c.onopen=function(){e.onWsOpen()},c.onclose=function(t){e.onWsClose(t)},c.onmessage=function(t){e.onWsData(t.data)},c.onerror=function(t){e.onWsError(t)},c.on&&c.on("ping",(function(){e.onActivity()}))}catch(t){C.logAction(C.LOG_ERROR,"WebSocketTransport.connect()","Unexpected exception creating websocket: err = "+(t.stack||t.message)),e.disconnect(t)}}}}))},t.prototype.send=function(e){var t=this.wsConnection
if(t)try{t.send(k.serialize(e,this.params.format))}catch(e){var n="Exception from ws connection when trying to send: "+v.inspectError(e)
C.logAction(C.LOG_ERROR,"WebSocketTransport.send()",n),this.finish("disconnected",new I(n,5e4,500))}else C.logAction(C.LOG_ERROR,"WebSocketTransport.send()","No socket connection")},t.prototype.onWsData=function(e){C.logAction(C.LOG_MICRO,"WebSocketTransport.onWsData()","data received; length = "+e.length+"; type = "+n(e))
try{this.onProtocolMessage(k.deserialize(e,this.format))}catch(e){C.logAction(C.LOG_ERROR,"WebSocketTransport.onWsData()","Unexpected exception handing channel message: "+e.stack)}},t.prototype.onWsOpen=function(){C.logAction(C.LOG_MINOR,"WebSocketTransport.onWsOpen()","opened WebSocket"),this.emit("wsopen")},t.prototype.onWsClose=function(e){var t,i
if("object"==n(e)?(t=e.wasClean,i=e.code):t=1e3==(i=e),delete this.wsConnection,t){C.logAction(C.LOG_MINOR,"WebSocketTransport.onWsClose()","Cleanly closed WebSocket")
var r=new I("Websocket closed",80003,400)
this.finish("disconnected",r)}else{var o="Unclean disconnection of WebSocket ; code = "+i
r=new I(o,80003,400),C.logAction(C.LOG_MINOR,"WebSocketTransport.onWsClose()",o),this.finish("disconnected",r)}this.emit("disposed")},t.prototype.onWsError=function(e){C.logAction(C.LOG_MINOR,"WebSocketTransport.onError()","Error from WebSocket: "+e.message)
var t=this
v.nextTick((function(){t.disconnect(e)}))},t.prototype.dispose=function(){C.logAction(C.LOG_MINOR,"WebSocketTransport.dispose()",""),this.isDisposed=!0
var e=this.wsConnection
e&&(e.onmessage=function(){},delete this.wsConnection,v.nextTick((function(){C.logAction(C.LOG_MICRO,"WebSocketTransport.dispose()","closing websocket"),e.close()})))}}(),function(){function e(e){return function(e){return!!e.code&&!V.isTokenErr(e)&&(!!v.arrIn([80015,80017,80030],e.code)||e.code>=4e4&&e.code<5e4)}(e)?[k.fromValues({action:k.Action.ERROR,error:e})]:[k.fromValues({action:k.Action.DISCONNECTED,error:e})]}function t(e,t,n){n.format=void 0,n.heartbeats=!0,U.call(this,e,t,n),this.stream=!("stream"in n)||n.stream,this.sendRequest=null,this.recvRequest=null,this.pendingCallback=null,this.pendingItems=null}return v.inherits(t,U),t.REQ_SEND=0,t.REQ_RECV=1,t.REQ_RECV_POLL=2,t.REQ_RECV_STREAM=3,t.prototype.connect=function(){C.logAction(C.LOG_MINOR,"CometTransport.connect()","starting"),U.prototype.connect.call(this)
var t=this,n=this.params,i=n.options,r=m.getHost(i,n.host),o=m.getPort(i),s=i.tls?"https://":"http://"
this.baseUri=s+r+":"+o+"/comet/"
var a=this.baseUri+"connect"
C.logAction(C.LOG_MINOR,"CometTransport.connect()","uri: "+a),this.auth.getAuthParams((function(n,i){if(n)t.disconnect(n)
else if(!t.isDisposed){t.authParams=i
var r=t.params.getConnectParams(i)
"stream"in r&&(t.stream=r.stream),C.logAction(C.LOG_MINOR,"CometTransport.connect()","connectParams:"+v.toQueryString(r))
var o=!1,s=t.recvRequest=t.createRequest(a,null,r,null,t.stream?3:1)
s.on("data",(function(e){t.recvRequest&&(o||(o=!0,t.emit("preconnect")),t.onData(e))})),s.on("complete",(function(n,i,r){t.recvRequest||(n=n||new I("Request cancelled",80003,400)),t.recvRequest=null,o||(o=!0,t.emit("preconnect")),t.onActivity(),n?n.code?t.onData(e(n)):t.disconnect(n):v.nextTick((function(){t.recv()}))})),s.exec()}}))},t.prototype.requestClose=function(){C.logAction(C.LOG_MINOR,"CometTransport.requestClose()"),this._requestCloseOrDisconnect(!0)},t.prototype.requestDisconnect=function(){C.logAction(C.LOG_MINOR,"CometTransport.requestDisconnect()"),this._requestCloseOrDisconnect(!1)},t.prototype._requestCloseOrDisconnect=function(e){var t=e?this.closeUri:this.disconnectUri
if(t){var n=this,i=this.createRequest(t,null,this.authParams,null,0)
i.on("complete",(function(t){t&&(C.logAction(C.LOG_ERROR,"CometTransport.request"+(e?"Close()":"Disconnect()"),"request returned err = "+v.inspectError(t)),n.finish("disconnected",t))})),i.exec()}},t.prototype.dispose=function(){if(C.logAction(C.LOG_MINOR,"CometTransport.dispose()",""),!this.isDisposed){this.isDisposed=!0,this.recvRequest&&(C.logAction(C.LOG_MINOR,"CometTransport.dispose()","aborting recv request"),this.recvRequest.abort(),this.recvRequest=null),this.finish("disconnected",L.disconnected)
var e=this
v.nextTick((function(){e.emit("disposed")}))}},t.prototype.onConnect=function(e){if(!this.isDisposed){var t=e.connectionKey
U.prototype.onConnect.call(this,e)
var n=this.baseUri+t
C.logAction(C.LOG_MICRO,"CometTransport.onConnect()","baseUri = "+n+"; connectionKey = "+e.connectionKey),this.sendUri=n+"/send",this.recvUri=n+"/recv",this.closeUri=n+"/close",this.disconnectUri=n+"/disconnect"}},t.prototype.send=function(e){if(this.sendRequest)return this.pendingItems=this.pendingItems||[],void this.pendingItems.push(e)
var t=this.pendingItems||[]
t.push(e),this.pendingItems=null,this.sendItems(t)},t.prototype.sendAnyPending=function(){var e=this.pendingItems
e&&(this.pendingItems=null,this.sendItems(e))},t.prototype.sendItems=function(t){var n=this,i=this.sendRequest=n.createRequest(n.sendUri,null,n.authParams,this.encodeRequest(t),0)
i.on("complete",(function(t,i){t&&C.logAction(C.LOG_ERROR,"CometTransport.sendItems()","on complete: err = "+v.inspectError(t)),n.sendRequest=null,t?t.code?n.onData(e(t)):n.disconnect(t):(i&&n.onData(i),n.pendingItems&&v.nextTick((function(){n.sendRequest||n.sendAnyPending()})))})),i.exec()},t.prototype.recv=function(){if(!this.recvRequest&&this.isConnected){var t=this,n=this.recvRequest=this.createRequest(this.recvUri,null,this.authParams,null,t.stream?3:2)
n.on("data",(function(e){t.onData(e)})),n.on("complete",(function(n){t.recvRequest=null,t.onActivity(),n?n.code?t.onData(e(n)):t.disconnect(n):v.nextTick((function(){t.recv()}))})),n.exec()}},t.prototype.onData=function(e){try{var t=this.decodeResponse(e)
if(t&&t.length)for(var n=0;n<t.length;n++)this.onProtocolMessage(k.fromDeserialized(t[n]))}catch(e){C.logAction(C.LOG_ERROR,"CometTransport.onData()","Unexpected exception handing channel event: "+e.stack)}},t.prototype.encodeRequest=function(e){return JSON.stringify(e)},t.prototype.decodeResponse=function(e){return"string"==typeof e&&(e=JSON.parse(e)),e},t.prototype.onAuthUpdated=function(e){this.authParams={access_token:e.token}},t}()),B=function(){function e(){}function t(e){this.channel=e,this.basePath=e.basePath+"/presence"}return v.inherits(t,b),t.prototype.get=function(t,n){if(C.logAction(C.LOG_MICRO,"Presence.get()","channel = "+this.channel.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.rest.options.promises)return v.promisify(this,"get",arguments)
n=e}var i=this.channel.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r,s=v.defaultGetHeaders(r)
i.options.headers&&v.mixin(s,i.options.headers)
var a=this.channel.channelOptions
new H(i,this.basePath,s,o,(function(e,t,n){return M.fromResponseBody(e,a,!n&&r)})).get(t,n)},t.prototype.history=function(e,t){C.logAction(C.LOG_MICRO,"Presence.history()","channel = "+this.channel.name),this._history(e,t)},t.prototype._history=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.rest.options.promises)return v.promisify(this,"_history",arguments)
n=e}var i=this.channel.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r,s=v.defaultGetHeaders(r)
this.channel,i.options.headers&&v.mixin(s,i.options.headers)
var a=this.channel.channelOptions
new H(i,this.basePath+"/history",s,o,(function(e,t,n){return M.fromResponseBody(e,a,!n&&r)})).get(t,n)},t}(),D=function(){var e=f.msgpack
function t(){}function n(e,t,n,i,r){O.supportsAuthHeaders?e.auth.getAuthHeaders((function(e,o){e?i(e):r(v.mixin(o,t),n)})):e.auth.getAuthParams((function(e,o){e?i(e):r(t,v.mixin(o,n))}))}function i(e){var t=[]
if(e)for(var n in e)t.push(n+"="+e[n])
return t.join("&")}function r(e,t){return e+(t?"?":"")+i(t)}return v.arrForEach(O.methodsWithoutBody,(function(e){t[e]=function(n,i,r,o,s,a){t.do(e,n,i,null,r,o,s,a)}})),v.arrForEach(O.methodsWithBody,(function(e){t[e]=function(n,i,r,o,s,a,c){t.do(e,n,i,r,o,s,a,c)}})),t.do=function(t,o,s,a,c,u,h,l){C.shouldLog(C.LOG_MICRO)&&(l=function(e,t,n,o){return function(s,a,c,u,h){s?C.logAction(C.LOG_MICRO,"Resource."+t+"()","Received Error; "+r(n,o)+"; Error: "+v.inspectError(s)):C.logAction(C.LOG_MICRO,"Resource."+t+"()","Received; "+r(n,o)+"; Headers: "+i(c)+"; StatusCode: "+h+"; Body: "+(y.isBuffer(a)?a.toString():a)),e&&e(s,a,c,u,h)}}(l,t,s,u)),h&&(l=l&&function(e,t){return function(n,i,r,o,s){if(!n||i){if(!o)try{i=v.decodeBody(i,t)}catch(t){return void e(t)}if(void 0!==i.statusCode){var a=i.statusCode,c=i.response,u=i.headers
if(a<200||a>=300){var h=c&&c.error||n
return h||((h=new Error("Error in unenveloping "+i)).statusCode=a),void e(h,c,u,!0,a)}e(n,c,u,!0,a)}else e(n,i,r,!0,s)}else e(n)}}(l,h),(u=u||{}).envelope=h),n(o,c,u,l,(function i(h,p){C.shouldLog(C.LOG_MICRO)&&C.logAction(C.LOG_MICRO,"Resource."+t+"()","Sending; "+r(s,p))
var f=[o,s,h,a,p,function(e,t,r,s,a){e&&V.isTokenErr(e)?o.auth.authorize(null,null,(function(e){e?l(e):n(o,c,u,l,i)})):l(e,t,r,s,a)}]
if(a||f.splice(3,1),C.shouldLog(C.LOG_MICRO)){var d=a
if((h["content-type"]||"").indexOf("msgpack")>0)try{d=e.decode(a)}catch(e){C.logAction(C.LOG_MICRO,"Resource."+t+"()","Sending MsgPack Decoding Error: "+v.inspectError(e))}C.logAction(C.LOG_MICRO,"Resource."+t+"()","Sending; "+r(s,p)+"; Body: "+d)}O[t].apply(this,f)}))},t}(),H=function(){function e(e,t,n,i,r,o){this.rest=e,this.path=t,this.headers=n,this.envelope=i,this.bodyHandler=r,this.useHttpPaginatedResponse=o||!1}function t(e,t,n){if(this.resource=e,this.items=t,n){var i=this
"first"in n&&(this.first=function(e){i.get(n.first,e)}),"current"in n&&(this.current=function(e){i.get(n.current,e)}),this.next=function(e){"next"in n?i.get(n.next,e):e(null,null)},this.hasNext=function(){return"next"in n},this.isLast=function(){return!this.hasNext()}}}function n(e,n,i,r,o,s){t.call(this,e,n,o),this.statusCode=r,this.success=r<300&&r>=200,this.headers=i,this.errorCode=s&&s.code,this.errorMessage=s&&s.message}return v.arrForEach(O.methodsWithoutBody,(function(t){e.prototype[t]=function(e,n){var i=this
D[t](i.rest,i.path,i.headers,e,i.envelope,(function(e,t,r,o,s){i.handlePage(e,t,r,o,s,n)}))}})),v.arrForEach(O.methodsWithBody,(function(t){e.prototype[t]=function(e,n,i){var r=this
D[t](r.rest,r.path,n,r.headers,e,r.envelope,(function(e,t,n,o,s){i&&r.handlePage(e,t,n,o,s,i)}))}})),e.prototype.handlePage=function(e,i,r,o,s,a){if(e&&function(e,t,n){return!(n&&(t||"number"==typeof e.code))}(e,i,this.useHttpPaginatedResponse))return C.logAction(C.LOG_ERROR,"PaginatedResource.handlePage()","Unexpected error getting resource: err = "+v.inspectError(e)),void a(e)
var c,u,h
try{c=this.bodyHandler(i,r,o)}catch(t){return void a(e||t)}r&&(u=r.Link||r.link)&&(h=function(e){"string"==typeof e&&(e=e.split(","))
for(var t,n={},i=0;i<e.length;i++){var r=e[i].match(/^\s*<(.+)>;\s*rel="(\w+)"$/)
if(r){var o=(void 0,(t=r[1].match(/^\.\/(\w+)\?(.*)$/))&&v.parseQueryString(t[2]))
o&&(n[r[2]]=o)}}return n}(u)),this.useHttpPaginatedResponse?a(null,new n(this,c,r,s,h,e)):a(null,new t(this,c,h))},t.prototype.get=function(e,t){var n=this.resource
D.get(n.rest,n.path,n.headers,e,n.envelope,(function(e,i,r,o,s){n.handlePage(e,i,r,o,s,t)}))},v.inherits(n,t),e}(),V=function(){var e,i,r=Math.pow(2,17)
function o(){}function s(){return("000000"+Math.floor(1e16*Math.random())).slice(-16)}function a(e){return v.isErrorInfo(e)?(e.code||(403===e.statusCode?e.code=40300:(e.code=40170,e.statusCode=401)),e):new I(v.inspectError(e),e.code||40170,e.statusCode||401)}function u(e){if(!e)return""
"string"==typeof e&&(e=JSON.parse(e))
var t={},n=v.keysArray(e,!0)
if(!n)return""
n.sort()
for(var i=0;i<n.length;i++)t[n[i]]=e[n[i]].sort()
return JSON.stringify(t)}function h(e){if(e.authCallback)C.logAction(C.LOG_MINOR,"Auth()","using token auth with authCallback")
else if(e.authUrl)C.logAction(C.LOG_MINOR,"Auth()","using token auth with authUrl")
else if(e.key)C.logAction(C.LOG_MINOR,"Auth()","using token auth with client-side signing")
else{if(!e.tokenDetails){var t="authOptions must include valid authentication parameters"
throw C.logAction(C.LOG_ERROR,"Auth()",t),new Error(t)}C.logAction(C.LOG_MINOR,"Auth()","using token auth with supplied token only")}}f.createHmac?(i=function(e){return new t(e,"ascii").toString("base64")},e=function(e,t){var n=f.createHmac("SHA256",t)
return n.update(e),n.digest("base64")}):(i=R.encode,e=function(e,t){return c.HmacSHA256(e,t).toString(c.enc.Base64)})
var l=0
function p(t,n){if(this.client=t,this.tokenParams=n.defaultTokenParams||{},this.currentTokenRequestId=null,this.waitingForTokenRequest=null,function(e){return e.useTokenAuth||!function(e){return"useTokenAuth"in e&&!e.useTokenAuth}(e)&&(e.authCallback||e.authUrl||e.token||e.tokenDetails)}(n)){if(n.key&&!e){var i="client-side token request signing not supported"
throw C.logAction(C.LOG_ERROR,"Auth()",i),new Error(i)}(function(e){return!e.key&&!e.authCallback&&!e.authUrl})(n)&&C.logAction(C.LOG_ERROR,"Auth()","Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),this._saveTokenOptions(n.defaultTokenParams,n),h(this.authOptions)}else{if(!n.key)throw i="No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)",C.logAction(C.LOG_ERROR,"Auth()",i),new I(i,40160,401)
C.logAction(C.LOG_MINOR,"Auth()","anonymous, using basic auth"),this._saveBasicOptions(n)}}return p.prototype.authorize=function(e,t,n){if("function"!=typeof e||n?"function"!=typeof t||n||(n=t,t=null):(n=e,t=e=null),!n){if(this.client.options.promises)return v.promisify(this,"authorize",arguments)
n=o}var i=this
if(t&&t.key&&this.authOptions.key!==t.key)throw new I("Unable to update auth options with incompatible key",40102,401)
t&&"force"in t&&(C.logAction(C.LOG_ERROR,"Auth.authorize","Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"),v.isOnlyPropIn(t,"force")&&(t=null)),this._forceNewToken(e,t,(function(e,t){e?n(e):i.client.connection?i.client.connection.connectionManager.onAuthUpdated(t,n):n(null,t)}))},p.prototype.authorise=function(){C.deprecated("Auth.authorise","Auth.authorize"),this.authorize.apply(this,arguments)},p.prototype._forceNewToken=function(e,t,n){var i=this
this.tokenDetails=null,this._saveTokenOptions(e,t),h(this.authOptions),this._ensureValidAuthCredentials(!0,(function(e,t){delete i.tokenParams.timestamp,delete i.authOptions.queryTime,n(e,t)}))},p.prototype.requestToken=function(e,t,i){if("function"!=typeof e||i?"function"!=typeof t||i||(i=t,t=null):(i=e,t=e=null),!i&&this.client.options.promises)return v.promisify(this,"requestToken",arguments)
t=t||this.authOptions,e=e||v.copy(this.tokenParams),i=i||o
var s,c=this.client
if(t.authCallback)C.logAction(C.LOG_MINOR,"Auth.requestToken()","using token auth with authCallback"),s=t.authCallback
else if(t.authUrl)C.logAction(C.LOG_MINOR,"Auth.requestToken()","using token auth with authUrl"),s=function(e,n){var i=v.mixin({accept:"application/json, text/plain"},t.authHeaders),o=t.authMethod&&"post"===t.authMethod.toLowerCase()
if(!o){var s=t.authUrl.indexOf("?")
if(s>-1){var a=v.parseQueryString(t.authUrl.slice(s))
t.authUrl=t.authUrl.slice(0,s),t.authParams=v.mixin(a,t.authParams)}}var u=v.mixin({},t.authParams||{},e),h=function(e,t,i,o){var s
if(e?C.logAction(C.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received Error: "+v.inspectError(e)):(s=i["content-type"],C.logAction(C.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received; content-type: "+s+"; body: "+v.inspectBody(t))),e||o)return n(e,t)
if(y.isBuffer(t)&&(t=t.toString()),s){var a=s.indexOf("application/json")>-1,c=s.indexOf("text/plain")>-1||s.indexOf("application/jwt")>-1
if(a||c){if(a){if(t.length>r)return void n(new I("authUrl response exceeded max permitted length",40170,401))
try{t=JSON.parse(t)}catch(e){return void n(new I("Unexpected error processing authURL response; err = "+e.message,40170,401))}}n(null,t,s)}else n(new I("authUrl responded with unacceptable content-type "+s+", should be either text/plain, application/jwt or application/json",40170,401))}else n(new I("authUrl response is missing a content-type header",40170,401))}
if(C.logAction(C.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Requesting token from "+t.authUrl+"; Params: "+JSON.stringify(u)+"; method: "+(o?"POST":"GET")),o){var l=i||{}
l["content-type"]="application/x-www-form-urlencoded"
var p=v.toQueryString(u).slice(1)
O.postUri(c,t.authUrl,l,p,{},h)}else O.getUri(c,t.authUrl,i||{},u,h)}
else{if(!t.key){var h="Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)"
return C.logAction(C.LOG_ERROR,"Auth()","library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),void i(new I(h,40171,403))}var l=this
C.logAction(C.LOG_MINOR,"Auth.requestToken()","using token auth with client-side signing"),s=function(e,n){l.createTokenRequest(e,t,n)}}"capability"in e&&(e.capability=u(e.capability))
var p=function(e,n){var i="/keys/"+e.keyName+"/requestToken",r=v.defaultPostHeaders()
t.requestHeaders&&v.mixin(r,t.requestHeaders),C.logAction(C.LOG_MICRO,"Auth.requestToken().requestToken","Sending POST to "+i+"; Token params: "+JSON.stringify(e)),e=JSON.stringify(e),O.post(c,(function(e){return c.baseUri(e)+i}),r,e,null,n)},f=!1,d=this.client.options.timeouts.realtimeRequestTimeout,g=setTimeout((function(){f=!0
var e="Token request callback timed out after "+d/1e3+" seconds"
C.logAction(C.LOG_ERROR,"Auth.requestToken()",e),i(new I(e,40170,401))}),d)
s(e,(function(e,o,s){if(!f){if(clearTimeout(g),e)return C.logAction(C.LOG_ERROR,"Auth.requestToken()","token request signing call returned error; err = "+v.inspectError(e)),void i(a(e))
if("string"!=typeof o){if("object"!==n(o)){var c="Expected token request callback to call back with a token string or token request/details object, but got a "+n(o)
return C.logAction(C.LOG_ERROR,"Auth.requestToken()",c),void i(new I(c,40170,401))}var u=JSON.stringify(o).length
if(u>r&&!t.suppressMaxLengthCheck)i(new I("Token request/details object exceeded max permitted stringified size (was "+u+" bytes)",40170,401))
else if("issued"in o)i(null,o)
else{if(!("keyName"in o))return c="Expected token request callback to call back with a token string, token request object, or token details object",C.logAction(C.LOG_ERROR,"Auth.requestToken()",c),void i(new I(c,40170,401))
p(o,(function(e,t,n,r){if(e)return C.logAction(C.LOG_ERROR,"Auth.requestToken()","token request API call returned error; err = "+v.inspectError(e)),void i(a(e))
r||(t=JSON.parse(t)),C.logAction(C.LOG_MINOR,"Auth.getToken()","token received"),i(null,t)}))}}else 0===o.length?i(new I("Token string is empty",40170,401)):o.length>r?i(new I("Token string exceeded max permitted length (was "+o.length+" bytes)",40170,401)):"undefined"===o||"null"===o?i(new I("Token string was literal null/undefined",40170,401)):"{"!==o[0]||s&&s.indexOf("application/jwt")>-1?i(null,{token:o}):i(new I("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details",40170,401))}}))},p.prototype.createTokenRequest=function(t,n,i){if("function"!=typeof t||i?"function"!=typeof n||i||(i=n,n=null):(i=t,n=t=null),!i&&this.client.options.promises)return v.promisify(this,"createTokenRequest",arguments)
n=n||this.authOptions,t=t||v.copy(this.tokenParams)
var r=n.key
if(r){var o=r.split(":"),a=o[0],c=o[1]
if(c)if(""!==t.clientId){"capability"in t&&(t.capability=u(t.capability))
var h,l=v.mixin({keyName:a},t),p=t.clientId||"",f=t.ttl||"",d=t.capability||"",g=this
h=function(){var t=l.nonce||(l.nonce=s()),n=l.timestamp,r=l.keyName+"\n"+f+"\n"+d+"\n"+p+"\n"+n+"\n"+t+"\n"
l.mac=l.mac||e(r,c),C.logAction(C.LOG_MINOR,"Auth.getTokenRequest()","generated signed request"),i(null,l)},l.timestamp?h():g.getTimestamp(n&&n.queryTime,(function(e,t){e?i(e):(l.timestamp=t,h())}))}else i(new I("clientId can’t be an empty string",40012,400))
else i(new I("Invalid key specified",40101,403))}else i(new I("No key specified",40101,403))},p.prototype.getAuthParams=function(e){"basic"==this.method?e(null,{key:this.key}):this._ensureValidAuthCredentials(!1,(function(t,n){t?e(t):e(null,{access_token:n.token})}))},p.prototype.getAuthHeaders=function(e){"basic"==this.method?e(null,{authorization:"Basic "+this.basicKey}):this._ensureValidAuthCredentials(!1,(function(t,n){t?e(t):e(null,{authorization:"Bearer "+i(n.token)})}))},p.prototype.getTimestamp=function(e,t){this.isTimeOffsetSet()||!e&&!this.authOptions.queryTime?t(null,this.getTimestampUsingOffset()):this.client.time(t)},p.prototype.getTimestampUsingOffset=function(){return v.now()+(this.client.serverTimeOffset||0)},p.prototype.isTimeOffsetSet=function(){return null!==this.client.serverTimeOffset},p.prototype._saveBasicOptions=function(e){this.method="basic",this.key=e.key,this.basicKey=i(e.key),this.authOptions=e||{},"clientId"in e&&this._userSetClientId(e.clientId)},p.prototype._saveTokenOptions=function(e,t){this.method="token",e&&(this.tokenParams=e),t&&(t.token&&(t.tokenDetails="string"==typeof t.token?{token:t.token}:t.token),t.tokenDetails&&(this.tokenDetails=t.tokenDetails),"clientId"in t&&this._userSetClientId(t.clientId),this.authOptions=t)},p.prototype._ensureValidAuthCredentials=function(e,t){var n=this,i=this.tokenDetails
if(i){if(this._tokenClientIdMismatch(i.clientId))return void t(new I("Mismatch between clientId in token ("+i.clientId+") and current clientId ("+this.clientId+")",40102,403))
if(!this.isTimeOffsetSet()||!i.expires||i.expires>=this.getTimestampUsingOffset())return C.logAction(C.LOG_MINOR,"Auth.getToken()","using cached token; expires = "+i.expires),void t(null,i)
C.logAction(C.LOG_MINOR,"Auth.getToken()","deleting expired token"),this.tokenDetails=null}if((this.waitingForTokenRequest||(this.waitingForTokenRequest=S())).push(t),null===this.currentTokenRequestId||e){var r=this.currentTokenRequestId=l++
this.requestToken(this.tokenParams,this.authOptions,(function(e,t){if(n.currentTokenRequestId>r)C.logAction(C.LOG_MINOR,"Auth._ensureValidAuthCredentials()","Discarding token request response; overtaken by newer one")
else{n.currentTokenRequestId=null
var i=n.waitingForTokenRequest||o
n.waitingForTokenRequest=null,e?i(e):i(null,n.tokenDetails=t)}}))}},p.prototype._userSetClientId=function(e){if("string"!=typeof e&&null!==e)throw new I("clientId must be either a string or null",40012,400)
if("*"===e)throw new I('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',40012,400)
var t=this._uncheckedSetClientId(e)
if(t)throw t},p.prototype._uncheckedSetClientId=function(e){if(this._tokenClientIdMismatch(e)){var t="Unexpected clientId mismatch: client has "+this.clientId+", requested "+e,n=new I(t,40102,401)
return C.logAction(C.LOG_ERROR,"Auth._uncheckedSetClientId()",t),n}return this.clientId=this.tokenParams.clientId=e,null},p.prototype._tokenClientIdMismatch=function(e){return this.clientId&&"*"!==this.clientId&&e&&"*"!==e&&this.clientId!==e},p.isTokenErr=function(e){return e.code&&e.code>=40140&&e.code<40150},p}(),z=function(){var e=function(){},t=f.msgpack
function n(e){if(!(this instanceof n))return new n(e)
if(!e){var t="no options provided"
throw C.logAction(C.LOG_ERROR,"Rest()",t),new Error(t)}if((e=m.objectifyOptions(e)).log&&C.setLog(e.log.level,e.log.handler),C.logAction(C.LOG_MICRO,"Rest()","initialized with clientOptions "+v.inspect(e)),this.options=m.normaliseOptions(e),e.key){var r=e.key.match(/^([^:\s]+):([^:.\s]+)$/)
if(!r)throw t="invalid key parameter",C.logAction(C.LOG_ERROR,"Rest()",t),new Error(t)
e.keyName=r[1],e.keySecret=r[2]}if("clientId"in e){if("string"!=typeof e.clientId&&null!==e.clientId)throw new I("clientId must be either a string or null",40012,400)
if("*"===e.clientId)throw new I('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})',40012,400)}C.logAction(C.LOG_MINOR,"Rest()","started; version = "+m.libstring),this.baseUri=this.authority=function(t){return m.getHttpScheme(e)+t+":"+m.getPort(e,!1)},this._currentFallback=null,this.serverTimeOffset=null,this.auth=new V(this,e),this.channels=new i(this),this.push=new K(this)}function i(e){this.rest=e,this.attached={}}return n.prototype.stats=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.options.promises)return v.promisify(this,"stats",arguments)
n=e}var i=v.defaultGetHeaders(),r=this.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r
this.options.headers&&v.mixin(i,this.options.headers),new H(this,"/stats",i,o,(function(e,t,n){for(var i=n?e:JSON.parse(e),r=0;r<i.length;r++)i[r]=_.fromValues(i[r])
return i})).get(t,n)},n.prototype.time=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.options.promises)return v.promisify(this,"time",arguments)
n=e}var i=v.defaultGetHeaders()
this.options.headers&&v.mixin(i,this.options.headers)
var r=this,o=function(e){return r.authority(e)+"/time"}
O.get(this,o,i,t,(function(e,t,i,o){if(e)n(e)
else{o||(t=JSON.parse(t))
var s=t[0]
if(!s)return(e=new Error("Internal error (unexpected result type from GET /time)")).statusCode=500,void n(e)
r.serverTimeOffset=s-v.now(),n(null,s)}}))},n.prototype.request=function(n,i,r,o,s,a){var c=this.options.useBinaryProtocol,u=c?t.encode:JSON.stringify,h=c?t.decode:JSON.parse,l=c?"msgpack":"json",p=O.supportsLinkHeaders?void 0:l
r=r||{}
var f="get"==(n=n.toLowerCase())?v.defaultGetHeaders(l):v.defaultPostHeaders(l)
if(void 0===a){if(this.options.promises)return v.promisify(this,"request",[n,i,r,o,s])
a=e}"string"!=typeof o&&(o=u(o)),this.options.headers&&v.mixin(f,this.options.headers),s&&v.mixin(f,s)
var d=new H(this,i,f,p,(function(e,t,n){return v.ensureArray(n?e:h(e))}),!0)
if(!v.arrIn(O.methods,n))throw new I("Unsupported method "+n,40500,405)
v.arrIn(O.methodsWithBody,n)?d[n](r,o,a):d[n](r,a)},n.prototype.setLog=function(e){C.setLog(e.level,e.handler)},i.prototype.get=function(e,t){e=String(e)
var n=this.attached[e]
return n?t&&n.setOptions(t):this.attached[e]=n=new Q(this.rest,e,t),n},i.prototype.release=function(e){delete this.attached[String(e)]},n}()
z.Promise=function(e){return(e=m.objectifyOptions(e)).promises=!0,new z(e)},z.Callbacks=z
var F=function(){function e(n){if(!(this instanceof e))return new e(n)
C.logAction(C.LOG_MINOR,"Realtime()",""),z.call(this,n),this.connection=new J(this,this.options),this.channels=new t(this),!1!==n.autoConnect&&this.connect()}function t(e){b.call(this),this.realtime=e,this.all={},this.inProgress={}
var t=this
e.connection.connectionManager.on("transport.active",(function(){t.onTransportActive()}))}return v.inherits(e,z),e.prototype.connect=function(){C.logAction(C.LOG_MINOR,"Realtime.connect()",""),this.connection.connect()},e.prototype.close=function(){C.logAction(C.LOG_MINOR,"Realtime.close()",""),this.connection.close()},v.inherits(t,b),t.prototype.onChannelMessage=function(e){var t=e.channel
if(void 0!==t){var n=this.all[t]
n?n.onMessage(e):C.logAction(C.LOG_ERROR,"Channels.onChannelMessage()","received event for non-existent channel: "+t)}else C.logAction(C.LOG_ERROR,"Channels.onChannelMessage()","received event unspecified channel, action = "+e.action)},t.prototype.onTransportActive=function(){for(var e in this.all){var t=this.all[e]
"attaching"===t.state||"detaching"===t.state?t.checkPendingState():"suspended"===t.state&&t.attach()}},t.prototype.reattach=function(e){for(var t in this.all){var n=this.all[t]
"attached"===n.state&&n.requestState("attaching",e)}},t.prototype.resetAttachedMsgIndicators=function(){for(var e in this.all){var t=this.all[e]
"attached"===t.state&&(t._attachedMsgIndicator=!1)}},t.prototype.checkAttachedMsgIndicators=function(e){for(var t in this.all){var n=this.all[t]
if("attached"===n.state&&!1===n._attachedMsgIndicator){var i="30s after a resume, found channel which has not received an attached; channelId = "+t+"; connectionId = "+e
C.logAction(C.LOG_ERROR,"Channels.checkAttachedMsgIndicators()",i),w.report("error",i,"channel-no-attached-after-resume"),n.requestState("attaching")}}},t.prototype.propogateConnectionInterruption=function(e,t){var n=["attaching","attached","detaching","suspended"],i={closing:"detached",closed:"detached",failed:"failed",suspended:"suspended"}[e]
for(var r in this.all){var o=this.all[r]
v.arrIn(n,o.state)&&o.notifyState(i,t)}},t.prototype.get=function(e,t){e=String(e)
var n=this.all[e]
return n?t&&n.setOptions(t):n=this.all[e]=new X(this.realtime,e,t),n},t.prototype.release=function(e){this.all[e]&&delete this.all[e]},t.prototype.setInProgress=function(e,t,n){this.inProgress[e.name]=this.inProgress[e.name]||{},this.inProgress[e.name][t]=n,!n&&this.hasNopending()&&this.emit("nopending")},t.prototype.onceNopending=function(e){this.hasNopending()?e():this.once("nopending",e)},t.prototype.hasNopending=function(){return v.arrEvery(v.valuesArray(this.inProgress,!0),(function(e){return!v.containsValue(e,!0)}))},e}()
F.Promise=function(e){return(e=m.objectifyOptions(e)).promises=!0,new F(e)},F.Callbacks=F
var j=function(e,t,n,i){this.previous=e,this.current=t,n&&(this.retryIn=n),i&&(this.reason=i)},W=function(e,t,n,i){this.previous=e,this.current=t,"attached"===t&&(this.resumed=n),i&&(this.reason=i)},J=function(){function e(){}function t(e,t){b.call(this),this.ably=e,this.connectionManager=new G(e,t),this.state=this.connectionManager.state.state,this.key=void 0,this.id=void 0,this.serial=void 0,this.timeSerial=void 0,this.recoveryKey=void 0,this.errorReason=null
var n=this
this.connectionManager.on("connectionstate",(function(e){var t=n.state=e.current
v.nextTick((function(){n.emit(t,e)}))})),this.connectionManager.on("update",(function(e){v.nextTick((function(){n.emit("update",e)}))}))}return v.inherits(t,b),t.prototype.whenState=function(e,t){b.prototype.whenState.call(this,e,this.state,t,new j(void 0,e))},t.prototype.connect=function(){C.logAction(C.LOG_MINOR,"Connection.connect()",""),this.connectionManager.requestState({state:"connecting"})},t.prototype.ping=function(t){if(C.logAction(C.LOG_MINOR,"Connection.ping()",""),!t){if(this.ably.options.promises)return v.promisify(this,"ping",arguments)
t=e}this.connectionManager.ping(null,t)},t.prototype.close=function(){C.logAction(C.LOG_MINOR,"Connection.close()","connectionKey = "+this.key),this.connectionManager.requestState({state:"closing"})},t}(),K=function(){var e=function(){}
function t(e){this.rest=e,this.deviceRegistrations=new n(e),this.channelSubscriptions=new i(e)}function n(e){this.rest=e}function i(e){this.rest=e}return t.prototype.publish=function(t,n,i){var r=this.rest,o=r.options.useBinaryProtocol?"msgpack":"json",s=v.mixin({recipient:t},n),a=v.defaultPostHeaders(o),c={}
if("function"!=typeof i){if(this.rest.options.promises)return v.promisify(this,"publish",arguments)
i=e}r.options.headers&&v.mixin(a,r.options.headers),r.options.pushFullWait&&v.mixin(c,{fullWait:"true"}),s=v.encodeBody(s,o),D.post(r,"/push/publish",s,a,c,!1,(function(e){i(e)}))},n.prototype.save=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=E.fromValues(t),s=v.defaultPostHeaders(r),a={}
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"save",arguments)
n=e}i.options.headers&&v.mixin(s,i.options.headers),i.options.pushFullWait&&v.mixin(a,{fullWait:"true"}),o=v.encodeBody(o,r),D.put(i,"/push/deviceRegistrations/"+encodeURIComponent(t.id),o,s,a,!1,(function(e,t,i,o){n(e,!e&&E.fromResponseBody(t,!o&&r))}))},n.prototype.get=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=v.defaultGetHeaders(r),s=t.id||t
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"get",arguments)
n=e}"string"==typeof s&&s.length?(i.options.headers&&v.mixin(o,i.options.headers),D.get(i,"/push/deviceRegistrations/"+encodeURIComponent(s),o,{},!1,(function(e,t,i,o){n(e,!e&&E.fromResponseBody(t,!o&&r))}))):n(new I("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",4e4,400))},n.prototype.list=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r,s=v.defaultGetHeaders(r)
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"list",arguments)
n=e}i.options.headers&&v.mixin(s,i.options.headers),new H(i,"/push/deviceRegistrations",s,o,(function(e,t,n){return E.fromResponseBody(e,!n&&r)})).get(t,n)},n.prototype.remove=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=v.defaultGetHeaders(r),s={},a=t.id||t
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"remove",arguments)
n=e}"string"==typeof a&&a.length?(i.options.headers&&v.mixin(o,i.options.headers),i.options.pushFullWait&&v.mixin(s,{fullWait:"true"}),D.delete(i,"/push/deviceRegistrations/"+encodeURIComponent(a),o,s,!1,(function(e){n(e)}))):n(new I("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",4e4,400))},n.prototype.removeWhere=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=v.defaultGetHeaders(r)
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"removeWhere",arguments)
n=e}i.options.headers&&v.mixin(o,i.options.headers),i.options.pushFullWait&&v.mixin(t,{fullWait:"true"}),D.delete(i,"/push/deviceRegistrations",o,t,!1,(function(e){n(e)}))},i.prototype.save=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=x.fromValues(t),s=v.defaultPostHeaders(r),a={}
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"save",arguments)
n=e}i.options.headers&&v.mixin(s,i.options.headers),i.options.pushFullWait&&v.mixin(a,{fullWait:"true"}),o=v.encodeBody(o,r),D.post(i,"/push/channelSubscriptions",o,s,a,!1,(function(e,t,i,o){n(e,!e&&x.fromResponseBody(t,!o&&r))}))},i.prototype.list=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r,s=v.defaultGetHeaders(r)
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"list",arguments)
n=e}i.options.headers&&v.mixin(s,i.options.headers),new H(i,"/push/channelSubscriptions",s,o,(function(e,t,n){return x.fromResponseBody(e,!n&&r)})).get(t,n)},i.prototype.removeWhere=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=v.defaultGetHeaders(r)
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"removeWhere",arguments)
n=e}i.options.headers&&v.mixin(o,i.options.headers),i.options.pushFullWait&&v.mixin(t,{fullWait:"true"}),D.delete(i,"/push/channelSubscriptions",o,t,!1,(function(e){n(e)}))},i.prototype.remove=i.prototype.removeWhere,i.prototype.listChannels=function(t,n){var i=this.rest,r=i.options.useBinaryProtocol?"msgpack":"json",o=O.supportsLinkHeaders?void 0:r,s=v.defaultGetHeaders(r)
if("function"!=typeof n){if(this.rest.options.promises)return v.promisify(this,"listChannels",arguments)
n=e}i.options.headers&&v.mixin(s,i.options.headers),i.options.pushFullWait&&v.mixin(t,{fullWait:"true"}),new H(i,"/push/channels",s,o,(function(e,t,n){!n&&r&&(e=v.decodeBody(e,r))
for(var i=0;i<e.length;i++)e[i]=String(e[i])
return e})).get(t,n)},function(e){this.rest=e,this.admin=new t(e)}}(),Q=function(){function e(){}function t(e,t,n){C.logAction(C.LOG_MINOR,"Channel()","started; name = "+t),b.call(this),this.rest=e,this.name=t,this.basePath="/channels/"+encodeURIComponent(t),this.presence=new B(this),this.setOptions(n)}function i(e){return v.arrEvery(e,(function(e){return!e.id}))}return v.inherits(t,b),t.prototype.setOptions=function(e){if(this.channelOptions=e=e||{},e.cipher){if(!d)throw new Error("Encryption not enabled; use ably.encryption.js instead")
var t=d.getCipher(e.cipher)
e.cipher=t.cipherParams,e.channelCipher=t.cipher}else"cipher"in e&&(e.cipher=null,e.channelCipher=null)},t.prototype.history=function(t,n){if(C.logAction(C.LOG_MICRO,"Channel.history()","channel = "+this.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.rest.options.promises)return v.promisify(this,"history",arguments)
n=e}this._history(t,n)},t.prototype._history=function(e,t){var n=this.rest,i=n.options.useBinaryProtocol?"msgpack":"json",r=O.supportsLinkHeaders?void 0:i,o=v.defaultGetHeaders(i)
n.options.headers&&v.mixin(o,n.options.headers)
var s=this.channelOptions
new H(n,this.basePath+"/messages",o,r,(function(e,t,n){return T.fromResponseBody(e,s,!n&&i)})).get(e,t)},t.prototype.publish=function(){var t,r,o=arguments.length,s=arguments[0],a=arguments[1],c=arguments[o-1],u=this
if("function"!=typeof c){if(this.rest.options.promises)return v.promisify(this,"publish",arguments)
c=e}if("string"==typeof s||null===s)t=[T.fromValues({name:s,data:a})],r=arguments[2]
else if(v.isObject(s))t=[T.fromValues(s)],r=arguments[1]
else{if(!v.isArray(s))throw new I("The single-argument form of publish() expects a message object or an array of message objects",40013,400)
t=T.fromValuesArray(s),r=arguments[1]}"object"===n(r)&&r||(r={})
var h=this.rest,l=h.options,p=l.useBinaryProtocol?"msgpack":"json",f=h.options.idempotentRestPublishing,d=v.defaultPostHeaders(p)
if(l.headers&&v.mixin(d,l.headers),f&&i(t)){var g=v.randomString(9)
v.arrForEach(t,(function(e,t){e.id=g+":"+t.toString()}))}T.encodeArray(t,this.channelOptions,(function(e){if(e)c(e)
else{var n=T.getMessagesSize(t),i=l.maxMessageSize
n>i?c(new I("Maximum size of messages that can be published at once exceeded ( was "+n+" bytes; limit is "+i+" bytes)",40009,400)):u._publish(T.serialize(t,p),d,r,c)}}))},t.prototype._publish=function(e,t,n,i){D.post(this.rest,this.basePath+"/messages",e,t,n,!1,i)},t}(),X=function(){var e=k.Action,t=function(){}
function n(e,t,n){C.logAction(C.LOG_MINOR,"RealtimeChannel()","started; name = "+t),Q.call(this,e,t,n),this.realtime=e,this.presence=new Y(this,e.options),this.connectionManager=e.connection.connectionManager,this.state="initialized",this.subscriptions=new b,this.syncChannelSerial=void 0,this.properties={attachSerial:void 0},this.setOptions(n),this.errorReason=null,this._requestedFlags=null,this._mode=null,this._attachedMsgIndicator=!1}return v.inherits(n,Q),n.invalidStateError=function(e){return{statusCode:400,code:90001,message:"Channel operation failed as channel state is "+e}},n.progressOps={statechange:"statechange",sync:"sync"},n.processListenerArgs=function(e){return"function"==typeof(e=Array.prototype.slice.call(e))[0]&&e.unshift(null),null==e[e.length-1]&&e.pop(),e},n.prototype.publish=function(){var e=arguments.length,n=arguments[0],i=arguments[e-1]
if("function"!=typeof i){if(this.realtime.options.promises)return v.promisify(this,"publish",arguments)
i=t,++e}if(this.connectionManager.activeState()){if(2==e)if(v.isObject(n))n=[T.fromValues(n)]
else{if(!v.isArray(n))throw new I("The single-argument form of publish() expects a message object or an array of message objects",40013,400)
n=T.fromValuesArray(n)}else n=[T.fromValues({name:arguments[0],data:arguments[1]})]
var r=this,o=this.realtime.options.maxMessageSize
T.encodeArray(n,this.channelOptions,(function(e){if(e)i(e)
else{var t=T.getMessagesSize(n)
t>o?i(new I("Maximum size of messages that can be published at once exceeded ( was "+t+" bytes; limit is "+o+" bytes)",40009,400)):r._publish(n,i)}}))}else i(this.connectionManager.getError())},n.prototype._publish=function(t,i){C.logAction(C.LOG_MICRO,"RealtimeChannel.publish()","message count = "+t.length)
var r=this.state
switch(r){case"failed":case"suspended":i(I.fromValues(n.invalidStateError(r)))
break
default:C.logAction(C.LOG_MICRO,"RealtimeChannel.publish()","sending message; channel state is "+r)
var o=new k
o.action=e.MESSAGE,o.channel=this.name,o.messages=t,this.sendMessage(o,i)}},n.prototype.onEvent=function(e){C.logAction(C.LOG_MICRO,"RealtimeChannel.onEvent()","received message")
for(var t=this.subscriptions,n=0;n<e.length;n++){var i=e[n]
t.emit(i.name,i)}},n.prototype.attach=function(e,t){if("function"==typeof e&&(t=e,e=null),!t){if(this.realtime.options.promises)return v.promisify(this,"attach",arguments)
t=function(e){e&&C.logAction(C.LOG_MAJOR,"RealtimeChannel.attach()","Channel attach failed: "+e.toString())}}e&&(this._requestedFlags=e)
var n=this.connectionManager
if(n.activeState())switch(this.state){case"attached":if(!e){t()
break}default:this.requestState("attaching")
case"attaching":this.once((function(e){switch(this.event){case"attached":t()
break
case"detached":case"suspended":case"failed":t(e.reason||n.getError())
break
case"detaching":t(new I("Attach request superseded by a subsequent detach request",9e4,409))}}))}else t(n.getError())},n.prototype.attachImpl=function(){C.logAction(C.LOG_MICRO,"RealtimeChannel.attachImpl()","sending ATTACH message"),this.setInProgress("statechange",!0)
var n=k.fromValues({action:e.ATTACH,channel:this.name})
this._requestedFlags&&v.arrForEach(this._requestedFlags,(function(e){n.setFlag(e)})),this.sendMessage(n,t)},n.prototype.detach=function(e){if(!e){if(this.realtime.options.promises)return v.promisify(this,"detach",arguments)
e=t}var n=this.connectionManager
if(n.activeState())switch(this.state){case"detached":case"failed":e()
break
default:this.requestState("detaching")
case"detaching":this.once((function(t){switch(this.event){case"detached":e()
break
case"attached":case"suspended":case"failed":e(t.reason||n.getError())
break
case"attaching":e(new I("Detach request superseded by a subsequent attach request",9e4,409))}}))}else e(n.getError())},n.prototype.detachImpl=function(n){C.logAction(C.LOG_MICRO,"RealtimeChannel.detach()","sending DETACH message"),this.setInProgress("statechange",!0)
var i=k.fromValues({action:e.DETACH,channel:this.name})
this.sendMessage(i,n||t)},n.prototype.subscribe=function(){var e=n.processListenerArgs(arguments),i=e[0],r=e[1],o=e[2]
if(!o){if(this.realtime.options.promises)return v.promisify(this,"subscribe",[i,r])
o=t}if("failed"!==this.state)return this.subscriptions.on(i,r),this.attach(o)
o(I.fromValues(n.invalidStateError("failed")))},n.prototype.unsubscribe=function(){var e=n.processListenerArgs(arguments),t=e[0],i=e[1]
this.subscriptions.off(t,i)},n.prototype.sync=function(){switch(this.state){case"initialized":case"detaching":case"detached":throw new I("Unable to sync to channel; not attached",4e4)}var t=this.connectionManager
if(!t.activeState())throw t.getError()
var n=k.fromValues({action:e.SYNC,channel:this.name})
this.syncChannelSerial&&(n.channelSerial=this.syncChannelSerial),t.send(n)},n.prototype.sendMessage=function(e,t){this.connectionManager.send(e,this.realtime.options.queueMessages,t)},n.prototype.sendPresence=function(t,n){var i=k.fromValues({action:e.PRESENCE,channel:this.name,presence:v.isArray(t)?M.fromValuesArray(t):[M.fromValues(t)]})
this.sendMessage(i,n)},n.prototype.onMessage=function(t){var n,i=!1
switch(t.action){case e.ATTACHED:if(this._attachedMsgIndicator=!0,this.properties.attachSerial=t.channelSerial,this._mode=t.getMode(),"attached"===this.state){var r=t.hasFlag("RESUMED")
if(!r||this.channelOptions.updateOnAttached){this.presence.onAttached(t.hasFlag("HAS_PRESENCE"))
var o=new W(this.state,this.state,r,t.error)
this.emit("update",o)}}else this.notifyState("attached",t.error,t.hasFlag("RESUMED"),t.hasFlag("HAS_PRESENCE"))
break
case e.DETACHED:var s=t.error?I.fromValues(t.error):new I("Channel detached",90001,404)
"detaching"===this.state?this.notifyState("detached",s):"attaching"===this.state?this.notifyState("suspended",s):this.requestState("attaching",s)
break
case e.SYNC:if(i=!0,n=this.syncChannelSerial=t.channelSerial,!t.presence)break
case e.PRESENCE:for(var a=t.presence,c=t.id,u=t.connectionId,h=t.timestamp,l=this.channelOptions,p=0;p<a.length;p++){try{var f=a[p]
M.decode(f,l)}catch(e){C.logAction(C.LOG_ERROR,"RealtimeChannel.onMessage()",e.toString())}f.connectionId||(f.connectionId=u),f.timestamp||(f.timestamp=h),f.id||(f.id=c+":"+p)}this.presence.setPresence(a,i,n)
break
case e.MESSAGE:var d=t.messages
for(c=t.id,u=t.connectionId,h=t.timestamp,l=this.channelOptions,p=0;p<d.length;p++){try{var g=d[p]
T.decode(g,l)}catch(e){C.logAction(C.LOG_MINOR,"RealtimeChannel.onMessage()",e.toString())}g.connectionId||(g.connectionId=u),g.timestamp||(g.timestamp=h),g.id||(g.id=c+":"+p)}this.onEvent(d)
break
case e.ERROR:(s=t.error)&&80016==s.code?this.checkPendingState():this.notifyState("failed",I.fromValues(s))
break
default:C.logAction(C.LOG_ERROR,"RealtimeChannel.onMessage()","Fatal protocol error: unrecognised action ("+t.action+")"),this.connectionManager.abort(L.unknownChannelErr)}},n.prototype.onAttached=function(){C.logAction(C.LOG_MINOR,"RealtimeChannel.onAttached","activating channel; name = "+this.name)},n.prototype.notifyState=function(e,t,n,i){if(C.logAction(C.LOG_MICRO,"RealtimeChannel.notifyState","name = "+this.name+", current state = "+this.state+", notifying state "+e),this.clearStateTimer(),e!==this.state){this.presence.actOnChannelState(e,i,t),"suspended"===e&&this.connectionManager.state.sendEvents?this.startRetryTimer():this.cancelRetryTimer(),t&&(this.errorReason=t)
var r=new W(this.state,e,n,t),o="failed"===e?C.LOG_ERROR:C.LOG_MAJOR
C.logAction(o,'Channel state for channel "'+this.name+'"',e+(t?"; reason: "+t:"")),"attached"===e?(this.onAttached(),this.setInProgress("sync",i),this.setInProgress("statechange",!1)):"detached"!==e&&"failed"!==e&&"suspended"!==e||(this.setInProgress("statechange",!1),this.setInProgress("sync",!1)),this.state=e,this.emit(e,r)}},n.prototype.requestState=function(e,t){C.logAction(C.LOG_MINOR,"RealtimeChannel.requestState","name = "+this.name+", state = "+e),this.notifyState(e,t),this.checkPendingState()},n.prototype.checkPendingState=function(){var e=this.connectionManager.state
if(e.sendEvents||e.forceQueueEvents)switch(C.logAction(C.LOG_MINOR,"RealtimeChannel.checkPendingState","name = "+this.name+", state = "+this.state),this.state){case"attaching":this.startStateTimerIfNotRunning(),this.attachImpl()
break
case"detaching":this.startStateTimerIfNotRunning(),this.detachImpl()
break
case"attached":this.sync()}else C.logAction(C.LOG_MINOR,"RealtimeChannel.checkPendingState","sendEvents is false; state is "+this.connectionManager.state.state)},n.prototype.timeoutPendingState=function(){switch(this.state){case"attaching":var e=new I("Channel attach timed out",90007,408)
this.notifyState("suspended",e)
break
case"detaching":e=new I("Channel detach timed out",90007,408),this.notifyState("attached",e)
break
default:this.checkPendingState()}},n.prototype.startStateTimerIfNotRunning=function(){var e=this
this.stateTimer||(this.stateTimer=setTimeout((function(){C.logAction(C.LOG_MINOR,"RealtimeChannel.startStateTimerIfNotRunning","timer expired"),e.stateTimer=null,e.timeoutPendingState()}),this.realtime.options.timeouts.realtimeRequestTimeout))},n.prototype.clearStateTimer=function(){var e=this.stateTimer
e&&(clearTimeout(e),this.stateTimer=null)},n.prototype.startRetryTimer=function(){var e=this
this.retryTimer||(this.retryTimer=setTimeout((function(){"suspended"===e.state&&e.connectionManager.state.sendEvents&&(e.retryTimer=null,C.logAction(C.LOG_MINOR,"RealtimeChannel retry timer expired","attempting a new attach"),e.requestState("attaching"))}),this.realtime.options.timeouts.channelRetryTimeout))},n.prototype.cancelRetryTimer=function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.suspendTimer=null)},n.prototype.setInProgress=function(e,t){this.rest.channels.setInProgress(this,e,t)},n.prototype.history=function(e,n){if(C.logAction(C.LOG_MICRO,"RealtimeChannel.history()","channel = "+this.name),void 0===n)if("function"==typeof e)n=e,e=null
else{if(this.rest.options.promises)return v.promisify(this,"history",arguments)
n=t}if(e&&e.untilAttach){if("attached"!==this.state)return void n(new I("option untilAttach requires the channel to be attached",4e4,400))
if(!this.properties.attachSerial)return void n(new I("untilAttach was specified and channel is attached, but attachSerial is not defined",4e4,400))
delete e.untilAttach,e.from_serial=this.properties.attachSerial}Q.prototype._history.call(this,e,n)},n.prototype.whenState=function(e,t){b.prototype.whenState.call(this,e,this.state,t)},n}(),Y=function(){var e=function(){}
function t(e){return e.clientId+":"+e.connectionId}function n(e){var t=e.channel.realtime,n=t.auth.clientId
return(!n||"*"===n)&&"connected"===t.connection.state}function i(e,t,n){switch(e.state){case"attached":case"suspended":n()
break
case"initialized":case"detached":case"detaching":case"attaching":e.attach((function(e){e?t(e):n()}))
break
default:t(I.fromValues(X.invalidStateError(e.state)))}}function r(e,t){B.call(this,e),this.syncComplete=!1,this.members=new o(this),this._myMembers=new o(this),this.subscriptions=new b,this.pendingPresence=[]}function o(e){b.call(this),this.presence=e,this.map={},this.syncInProgress=!1,this.residualMembers=null}function s(e,t){if(e.isSynthesized()||t.isSynthesized())return e.timestamp>t.timestamp
var n=e.parseId(),i=t.parseId()
return n.msgSerial===i.msgSerial?n.index>i.index:n.msgSerial>i.msgSerial}return v.inherits(r,B),r.prototype.enter=function(e,t){if(n(this))throw new I("clientId must be specified to enter a presence channel",40012,400)
return this._enterOrUpdateClient(void 0,e,"enter",t)},r.prototype.update=function(e,t){if(n(this))throw new I("clientId must be specified to update presence data",40012,400)
return this._enterOrUpdateClient(void 0,e,"update",t)},r.prototype.enterClient=function(e,t,n){return this._enterOrUpdateClient(e,t,"enter",n)},r.prototype.updateClient=function(e,t,n){return this._enterOrUpdateClient(e,t,"update",n)},r.prototype._enterOrUpdateClient=function(t,n,i,r){if(!r)if("function"==typeof n)r=n,n=null
else{if(this.channel.realtime.options.promises)return v.promisify(this,"_enterOrUpdateClient",[t,n,i])
r=e}var o=this.channel
if(o.connectionManager.activeState()){C.logAction(C.LOG_MICRO,"RealtimePresence."+i+"Client()","channel = "+o.name+", client = "+(t||"(implicit) "+this.channel.realtime.auth.clientId))
var s=M.fromValues({action:i,data:n})
t&&(s.clientId=t)
var a=this
M.encode(s,o.channelOptions,(function(e){if(e)r(e)
else switch(o.state){case"attached":o.sendPresence(s,r)
break
case"initialized":case"detached":o.attach()
case"attaching":a.pendingPresence.push({presence:s,callback:r})
break
default:(e=new I("Unable to "+i+" presence channel (incompatible state)",90001)).code=90001,r(e)}}))}else r(o.connectionManager.getError())},r.prototype.leave=function(e,t){if(n(this))throw new I("clientId must have been specified to enter or leave a presence channel",40012,400)
return this.leaveClient(void 0,e,t)},r.prototype.leaveClient=function(t,n,i){if(!i)if("function"==typeof n)i=n,n=null
else{if(this.channel.realtime.options.promises)return v.promisify(this,"leaveClient",[t,n])
i=e}var r=this.channel
if(r.connectionManager.activeState()){C.logAction(C.LOG_MICRO,"RealtimePresence.leaveClient()","leaving; channel = "+this.channel.name+", client = "+t)
var o=M.fromValues({action:"leave",data:n})
switch(t&&(o.clientId=t),r.state){case"attached":r.sendPresence(o,i)
break
case"attaching":this.pendingPresence.push({presence:o,callback:i})
break
case"initialized":case"failed":i(new I("Unable to leave presence channel (incompatible state)",90001))
break
default:i(L.failed)}}else i(r.connectionManager.getError())},r.prototype.get=function(){var t=Array.prototype.slice.call(arguments)
1==t.length&&"function"==typeof t[0]&&t.unshift(null)
var n=t[0],r=t[1],o=!n||!("waitForSync"in n)||n.waitForSync
if(!r){if(this.channel.realtime.options.promises)return v.promisify(this,"get",t)
r=e}function s(e){r(null,n?e.list(n):e.values())}if("suspended"!==this.channel.state){var a=this
i(this.channel,r,(function(){var e=a.members
o?e.waitSync((function(){s(e)})):s(e)}))}else o?r(I.fromValues({statusCode:400,code:91005,message:"Presence state is out of sync due to channel being in the SUSPENDED state"})):s(this.members)},r.prototype.history=function(t,n){if(C.logAction(C.LOG_MICRO,"RealtimePresence.history()","channel = "+this.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.realtime.options.promises)return v.promisify(this,"history",arguments)
n=e}t&&t.untilAttach&&("attached"===this.channel.state?(delete t.untilAttach,t.from_serial=this.channel.properties.attachSerial):n(new I("option untilAttach requires the channel to be attached, was: "+this.channel.state,4e4,400))),B.prototype._history.call(this,t,n)},r.prototype.setPresence=function(e,t,n){C.logAction(C.LOG_MICRO,"RealtimePresence.setPresence()","received presence for "+e.length+" participants; syncChannelSerial = "+n)
var i,r,o=this.members,s=this._myMembers,a=[],c=this.channel.connectionManager.connectionId
t&&(this.members.startSync(),n&&(r=n.match(/^[\w\-]+:(.*)$/))&&(i=r[1]))
for(var u=0;u<e.length;u++)switch((h=M.fromValues(e[u])).action){case"leave":o.remove(h)&&a.push(h),h.connectionId!==c||h.isSynthesized()||s.remove(h)
break
case"enter":case"present":case"update":o.put(h)&&a.push(h),h.connectionId===c&&s.put(h)}for(t&&!i&&(o.endSync(),this._ensureMyMembersPresent(),this.channel.setInProgress(X.progressOps.sync,!1),this.channel.syncChannelSerial=null),u=0;u<a.length;u++){var h=a[u]
this.subscriptions.emit(h.action,h)}},r.prototype.onAttached=function(e){C.logAction(C.LOG_MINOR,"RealtimePresence.onAttached()","channel = "+this.channel.name+", hasPresence = "+e),e?this.members.startSync():(this._synthesizeLeaves(this.members.values()),this.members.clear(),this._ensureMyMembersPresent())
var t=this.pendingPresence,n=t.length
if(n){this.pendingPresence=[]
var i=[],r=S()
C.logAction(C.LOG_MICRO,"RealtimePresence.onAttached","sending "+n+" queued presence messages")
for(var o=0;o<n;o++){var s=t[o]
i.push(s.presence),r.push(s.callback)}this.channel.sendPresence(i,r)}},r.prototype.actOnChannelState=function(e,t,n){switch(e){case"attached":this.onAttached(t)
break
case"detached":case"failed":this._clearMyMembers(),this.members.clear()
case"suspended":this.failPendingPresence(n)}},r.prototype.failPendingPresence=function(e){if(this.pendingPresence.length){C.logAction(C.LOG_MINOR,"RealtimeChannel.failPendingPresence","channel; name = "+this.channel.name+", err = "+v.inspectError(e))
for(var t=0;t<this.pendingPresence.length;t++)try{this.pendingPresence[t].callback(e)}catch(e){}this.pendingPresence=[]}},r.prototype._clearMyMembers=function(){this._myMembers.clear()},r.prototype._ensureMyMembersPresent=function(){var e=this,t=this.members,n=this._myMembers,i=function(t){if(t){var n="Presence auto-re-enter failed: "+t.toString(),i=new I(n,91004,400)
C.logAction(C.LOG_ERROR,"RealtimePresence._ensureMyMembersPresent()",n)
var r=new W(e.channel.state,e.channel.state,!0,i)
e.channel.emit("update",r)}}
for(var r in n.map)if(!(r in t.map)){var o=n.map[r]
C.logAction(C.LOG_MICRO,"RealtimePresence._ensureMyMembersPresent()",'Auto-reentering clientId "'+o.clientId+'" into the presence set'),this._enterOrUpdateClient(o.clientId,o.data,"enter",i),delete n.map[r]}},r.prototype._synthesizeLeaves=function(e){var t=this.subscriptions
v.arrForEach(e,(function(e){var n=M.fromValues({action:"leave",connectionId:e.connectionId,clientId:e.clientId,data:e.data,encoding:e.encoding,timestamp:v.now()})
t.emit("leave",n)}))},r.prototype.on=function(){C.deprecated("presence.on","presence.subscribe"),this.subscribe.apply(this,arguments)},r.prototype.off=function(){C.deprecated("presence.off","presence.unsubscribe"),this.unsubscribe.apply(this,arguments)},r.prototype.subscribe=function(){var t=X.processListenerArgs(arguments),n=t[0],i=t[1],r=t[2],o=this.channel
if(!r){if(this.channel.realtime.options.promises)return v.promisify(this,"subscribe",[n,i])
r=e}"failed"!==o.state?(this.subscriptions.on(n,i),o.attach(r)):r(I.fromValues(X.invalidStateError("failed")))},r.prototype.unsubscribe=function(){var e=X.processListenerArgs(arguments),t=e[0],n=e[1]
this.subscriptions.off(t,n)},v.inherits(o,b),o.prototype.get=function(e){return this.map[e]},o.prototype.getClient=function(e){var t=this.map,n=[]
for(var i in t){var r=t[i]
r.clientId==e&&"absent"!=r.action&&n.push(r)}return n},o.prototype.list=function(e){var t=this.map,n=e&&e.clientId,i=e&&e.connectionId,r=[]
for(var o in t){var s=t[o]
"absent"!==s.action&&(n&&n!=s.clientId||i&&i!=s.connectionId||r.push(s))}return r},o.prototype.put=function(e){"enter"!==e.action&&"update"!==e.action||((e=M.fromValues(e)).action="present")
var n=this.map,i=t(e)
this.residualMembers&&delete this.residualMembers[i]
var r=n[i]
return!(r&&!s(e,r)||(n[i]=e,0))},o.prototype.values=function(){var e=this.map,t=[]
for(var n in e){var i=e[n]
"absent"!=i.action&&t.push(i)}return t},o.prototype.remove=function(e){var n=this.map,i=t(e),r=n[i]
return!(r&&!s(e,r)||(this.syncInProgress?((e=M.fromValues(e)).action="absent",n[i]=e):delete n[i],0))},o.prototype.startSync=function(){var e=this.map,t=this.syncInProgress
C.logAction(C.LOG_MINOR,"PresenceMap.startSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),this.syncInProgress||(this.residualMembers=v.copy(e),this.setInProgress(!0))},o.prototype.endSync=function(){var e=this.map,t=this.syncInProgress
if(C.logAction(C.LOG_MINOR,"PresenceMap.endSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),t){for(var n in e)"absent"===e[n].action&&delete e[n]
for(var n in this.presence._synthesizeLeaves(v.valuesArray(this.residualMembers)),this.residualMembers)delete e[n]
this.residualMembers=null,this.setInProgress(!1)}this.emit("sync")},o.prototype.waitSync=function(e){var t=this.syncInProgress
C.logAction(C.LOG_MINOR,"PresenceMap.waitSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),t?this.once("sync",e):e()},o.prototype.clear=function(e){this.map={},this.setInProgress(!1),this.residualMembers=null},o.prototype.setInProgress=function(e){C.logAction(C.LOG_MICRO,"PresenceMap.setInProgress()","inProgress = "+e),this.syncInProgress=e,this.presence.syncComplete=!e},r}(),$=function(){var e=function(){},t=0,i={},r=void 0!==a&&a.XDomainRequest
function o(){var e,t
return r&&(e=(t=navigator.userAgent.toString().match(/MSIE\s([\d.]+)/))&&Number(t[1]))&&10===e}function s(e,n,r,s,a,c,u){b.call(this),(r=r||{}).rnd=v.cheapRandStr(),o()&&!r.envelope&&(r.envelope="json"),this.uri=e+v.toQueryString(r),this.headers=n||{},this.body=s,this.method=u?u.toUpperCase():v.isEmptyArg(s)?"GET":"POST",this.requestMode=a,this.timeouts=c,this.timedOut=!1,this.requestComplete=!1,i[this.id=String(++t)]=this}v.inherits(s,b)
var c=s.createRequest=function(e,t,n,i,r,o,a){return o=o||m.TIMEOUTS,new s(e,t,v.copy(n),i,r,o,a)}
return s.prototype.complete=function(e,t,n,i,r){this.requestComplete||(this.requestComplete=!0,!e&&t&&this.emit("data",t),this.emit("complete",e,t,n,i,r),this.dispose())},s.prototype.abort=function(){this.dispose()},s.prototype.exec=function(){var e=0==this.requestMode?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout,t=this,n=this.timer=setTimeout((function(){t.timedOut=!0,s.abort()}),e),i=this.body,r=this.method,o=this.headers,s=this.xhr=new XMLHttpRequest,a=o.accept,c="text"
for(var u in a?0===a.indexOf("application/x-msgpack")&&(c="arraybuffer"):o.accept="application/json",i&&(o["content-type"]||(o["content-type"]="application/json")).indexOf("application/json")>-1&&"string"!=typeof i&&(i=JSON.stringify(i)),s.open(r,this.uri,!0),s.responseType=c,"authorization"in o&&(s.withCredentials=!0),o)s.setRequestHeader(u,o[u])
var h=function(e,n,i,r){var o=n+" (event type: "+e.type+")"+(t.xhr.statusText?", current statusText is "+t.xhr.statusText:"")
C.logAction(C.LOG_ERROR,"Request.on"+e.type+"()",o),t.complete(new I(o,i,r))}
s.onerror=function(e){h(e,"XHR error occurred",null,400)},s.onabort=function(e){t.timedOut?h(e,"Request aborted due to request timeout expiring",null,408):h(e,"Request cancelled",null,400)},s.ontimeout=function(e){h(e,"Request timed out",null,408)}
var l,p,f,d,g=0,m=!1
function O(){for(var e,t,n=(f=s.responseText).length-1;g<n&&(e=f.indexOf("\n",g))>-1;)t=f.slice(g,e),g=e+1,R(t)}function R(e){try{e=JSON.parse(e)}catch(e){return void t.complete(new I("Malformed response body from server: "+e.message,null,400))}t.emit("data",e)}s.onreadystatechange=function(){var e=s.readyState
e<3||0!==s.status&&(void 0===p&&(1223===(p=s.status)&&(p=204),clearTimeout(n),d=p<400,204!=p?l=3==t.requestMode&&d&&function(e){return e.getResponseHeader&&(e.getResponseHeader("transfer-encoding")||!e.getResponseHeader("content-length"))}(s):t.complete(null,null,null,null,p)),3==e&&l?O():4==e&&(l?(O(),t.streamComplete=!0,v.nextTick((function(){t.complete()}))):function(){try{var e,n,i=function(e,t){return e.getResponseHeader&&e.getResponseHeader("content-type")}(s);(i?i.indexOf("application/json")>=0:"text"==s.responseType)?((n="arraybuffer"===s.responseType?y.utf8Decode(s.response):String(s.responseText)).length&&(n=JSON.parse(n)),m=!0):n=s.response,void 0!==n.response?(p=n.statusCode,d=p<400,e=n.headers,n=n.response):e=function(e){for(var t=v.trim(e.getAllResponseHeaders()).split("\r\n"),n={},i=0;i<t.length;i++){var r=v.arrMap(t[i].split(":"),v.trim)
n[r[0].toLowerCase()]=r[1]}return n}(s)}catch(e){return void t.complete(new I("Malformed response body from server: "+e.message,null,400))}if(d||v.isArray(n))t.complete(null,n,e,m,p)
else{var r=n.error
r||(r=new I("Error response received from server: "+p+" body was: "+v.inspect(n),null,p)),t.complete(r,n,e,m,p)}}()))},s.send(i)},s.prototype.dispose=function(){var t=this.xhr
if(t){t.onreadystatechange=t.onerror=t.onabort=t.ontimeout=e,this.xhr=null
var n=this.timer
n&&(clearTimeout(n),this.timer=null),this.requestComplete||t.abort()}delete i[this.id]},f.xhrSupported&&("object"===n(u)&&u.addUnloadListener((function(){for(var e in i)i[e].dispose()})),void 0!==O&&(O.supportsAuthHeaders=!0,O.Request=function(e,t,n,i,r,o,s){var a=c(n,i,r,o,0,t&&t.options.timeouts,e)
return a.once("complete",s),a.exec(),a},O.checkConnectivity=function(e){var t=m.internetUpUrl
C.logAction(C.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Sending; "+t),O.getUri(null,t,null,null,(function(t,n){var i=!t&&"yes"==n.replace(/\n/,"")
C.logAction(C.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Result: "+i),e(null,i)}))})),s}();(function(){function e(e,t,n){q.call(this,e,t,n),this.shortName="xhr_streaming"}v.inherits(e,q),e.isAvailable=function(){return f.xhrSupported&&f.streamingSupported&&f.allowComet},e.tryConnect=function(t,n,i,r){var o=new e(t,n,i),s=function(e){r({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){C.logAction(C.LOG_MINOR,"XHRStreamingTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),r(null,o)})),o.connect()},e.prototype.toString=function(){return"XHRStreamingTransport; uri="+this.baseUri+"; isConnected="+this.isConnected},e.prototype.createRequest=function(e,t,n,i,r){return $.createRequest(e,t,n,i,r,this.timeouts)},void 0!==G&&e.isAvailable()&&(G.supportedTransports.xhr_streaming=e)})(),function(){function e(e,t,n){n.stream=!1,q.call(this,e,t,n),this.shortName="xhr_polling"}v.inherits(e,q),e.isAvailable=function(){return f.xhrSupported&&f.allowComet},e.tryConnect=function(t,n,i,r){var o=new e(t,n,i),s=function(e){r({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){C.logAction(C.LOG_MINOR,"XHRPollingTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),r(null,o)})),o.connect()},e.prototype.toString=function(){return"XHRPollingTransport; uri="+this.baseUri+"; isConnected="+this.isConnected},e.prototype.createRequest=function(e,t,n,i,r){return $.createRequest(e,t,n,i,r,this.timeouts)},void 0!==G&&e.isAvailable()&&(G.supportedTransports.xhr_polling=e)}(),function(){var e=function(){},t=a._ablyjs_jsonp={}
t._=function(n){return t["_"+n]||e}
var n=1,i=null
function r(e,t,n){n.stream=!1,q.call(this,e,t,n),this.shortName="jsonp"}v.inherits(r,q),r.isAvailable=function(){return f.jsonpSupported&&f.allowComet},r.isAvailable()&&(G.supportedTransports.jsonp=r),f.jsonpSupported&&(i=document.getElementsByTagName("head")[0])
var o=null
a.JSONPTransport=r,r.tryConnect=function(e,t,n,i){var o=new r(e,t,n),s=function(e){i({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){C.logAction(C.LOG_MINOR,"JSONPTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),i(null,o)})),o.connect()},r.prototype.toString=function(){return"JSONPTransport; uri="+this.baseUri+"; isConnected="+this.isConnected}
var s=r.prototype.createRequest=function(e,t,n,i,r,o,s){return o=this&&this.timeouts||o||m.TIMEOUTS,new c(void 0,e,t,v.copy(n),i,r,o,s)}
function c(e,t,i,r,o,s,a,c){b.call(this),void 0===e&&(e=n++),this.id=e,this.uri=t,this.params=r||{},this.params.rnd=v.cheapRandStr(),i&&(i["X-Ably-Version"]&&(this.params.v=i["X-Ably-Version"]),i["X-Ably-Lib"]&&(this.params.lib=i["X-Ably-Lib"])),this.body=o,this.method=c,this.requestMode=s,this.timeouts=a,this.requestComplete=!1}v.inherits(c,b),c.prototype.exec=function(){var e=this.id,n=this.body,r=this.method,o=this.uri,s=this.params,a=this
s.callback="_ablyjs_jsonp._("+e+")",s.envelope="jsonp",n&&(s.body=n),r&&"get"!==r&&(s.method=r)
var c=this.script=document.createElement("script"),u=o+v.toQueryString(s)
c.src=u,c.src.split("/").slice(-1)[0]!==u.split("/").slice(-1)[0]&&C.logAction(C.LOG_ERROR,"JSONP Request.exec()","Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"),c.async=!0,c.type="text/javascript",c.charset="UTF-8",c.onerror=function(e){a.complete(new I("JSONP script error (event: "+v.inspect(e)+")",null,400))},t["_"+e]=function(e){if(e.statusCode){var t=e.response
if(204==e.statusCode)a.complete(null,null,null,e.statusCode)
else if(t)if(e.statusCode<400||v.isArray(t))a.complete(null,t,e.headers,e.statusCode)
else{var n=t.error||new I("Error response received from server",null,e.statusCode)
a.complete(n)}else a.complete(new I("Invalid server response: no envelope detected",null,500))}else a.complete(null,e)}
var h=this.requestMode==q.REQ_SEND?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout
this.timer=setTimeout((function(){a.abort()}),h),i.insertBefore(c,i.firstChild)},c.prototype.complete=function(e,t,n,i){var r
n=n||{},this.requestComplete||(this.requestComplete=!0,t&&(r="string"==typeof t?"text/plain":"application/json",n["content-type"]=r,this.emit("data",t)),this.emit("complete",e,t,n,!0,i),this.dispose())},c.prototype.abort=function(){this.dispose()},c.prototype.dispose=function(){var e=this.timer
e&&(clearTimeout(e),this.timer=null)
var n=this.script
n.parentNode&&n.parentNode.removeChild(n),delete t[this.id],this.emit("disposed")},f.jsonpSupported&&!O.Request&&(O.Request=function(e,t,n,i,r,o,a){var c=s(n,i,r,o,q.REQ_SEND,t&&t.options.timeouts,e)
return c.once("complete",a),v.nextTick((function(){c.exec()})),c},O.checkConnectivity=function(e){var t=m.jsonpInternetUpUrl
if(o)o.push(e)
else{o=[e],C.logAction(C.LOG_MICRO,"(JSONP)Http.checkConnectivity()","Sending; "+t)
var n=new c("isTheInternetUp",t,null,null,null,q.REQ_SEND,m.TIMEOUTS)
n.once("complete",(function(e,t){var n=!e&&t
C.logAction(C.LOG_MICRO,"(JSONP)Http.checkConnectivity()","Result: "+n)
for(var i=0;i<o.length;i++)o[i](null,n)
o=null})),v.nextTick((function(){n.exec()}))}})}(),s.msgpack=h,s.Rest=z,s.Realtime=F,F.ConnectionManager=G,F.BufferUtils=z.BufferUtils=y,void 0!==d&&(F.Crypto=z.Crypto=d),F.Defaults=z.Defaults=m,F.Http=z.Http=O,F.Utils=z.Utils=v,F.Http=z.Http=O,F.Message=z.Message=T,F.PresenceMessage=z.PresenceMessage=M,F.ProtocolMessage=z.ProtocolMessage=k,e.exports=s,e.exports.__esModule=!0}).call(this,n(1).Buffer)}}])
