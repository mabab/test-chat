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
 */var r,i,o,s={},a="object"===("undefined"==typeof window?"undefined":n(window))&&window||"object"===("undefined"==typeof self?"undefined":n(self))&&self,c=c||function(e,t){var n={},r=n.lib={},i=r.Base=function(){function e(){}return{extend:function(t){e.prototype=this
var n=new e
return t&&n.mixIn(t),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var e=this.extend()
return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])
e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||a).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,i=e.sigBytes
if(this.clamp(),r%4)for(var o=0;o<i;o++){var s=n[o>>>2]>>>24-o%4*8&255
t[r+o>>>2]|=s<<24-(r+o)%4*8}else if(n.length>65535)for(o=0;o<i;o+=4)t[r+o>>>2]=n[o>>>2]
else t.push.apply(t,n)
return this.sigBytes+=i,this},clamp:function(){var t=this.words,n=this.sigBytes
t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=i.clone.call(this)
return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],i=function(t){t=t
var n=987654321,r=4294967295
return function(){var i=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r
return i/=4294967296,(i+=.5)*(e.random()>.5?1:-1)}},s=0;s<t;s+=4){var a=i(4294967296*(n||e.random()))
n=987654071*a(),r.push(4294967296*a()|0)}return new o.init(r,t)}}),s=n.enc={},a=s.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4
return new o.init(n,t/2)}},c=s.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],i=0;i<n;i++){var o=t[i>>>2]>>>24-i%4*8&255
r.push(String.fromCharCode(o))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8
return new o.init(n,t)}},u=s.Utf8={stringify:function(e){try{return decodeURIComponent(escape(c.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return c.parse(unescape(encodeURIComponent(e)))}},p=r.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=u.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,i=n.sigBytes,s=this.blockSize,a=i/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,u=e.min(4*c,i)
if(c){for(var p=0;p<c;p+=s)this._doProcessBlock(r,p)
var l=r.splice(0,c)
n.sigBytes-=u}return new o.init(l,u)},clone:function(){var e=i.clone.call(this)
return e._data=this._data.clone(),e},_minBufferSize:0}),l=(r.Hasher=p.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new l.HMAC.init(e,n).finalize(t)}}}),n.algo={})
return n}(Math)
!function(e){var t=c,n=t.lib,r=n.WordArray,i=n.Hasher,o=t.algo,s=[],a=[]
!function(){function t(t){for(var n=e.sqrt(t),r=2;r<=n;r++)if(!(t%r))return!1
return!0}function n(e){return 4294967296*(e-(0|e))|0}for(var r=2,i=0;i<64;)t(r)&&(i<8&&(s[i]=n(e.pow(r,.5))),a[i]=n(e.pow(r,1/3)),i++),r++}()
var u=[],p=o.SHA256=i.extend({_doReset:function(){this._hash=new r.init(s.slice(0))},_doProcessBlock:function(e,t){for(var n=this._hash.words,r=n[0],i=n[1],o=n[2],s=n[3],c=n[4],p=n[5],l=n[6],d=n[7],h=0;h<64;h++){if(h<16)u[h]=0|e[t+h]
else{var f=u[h-15],m=(f<<25|f>>>7)^(f<<14|f>>>18)^f>>>3,g=u[h-2],v=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10
u[h]=m+u[h-7]+v+u[h-16]}var y=r&i^r&o^i&o,C=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),S=d+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&p^~c&l)+a[h]+u[h]
d=l,l=p,p=c,c=s+S|0,s=o,o=i,i=r,r=S+(C+y)|0}n[0]=n[0]+r|0,n[1]=n[1]+i|0,n[2]=n[2]+o|0,n[3]=n[3]+s|0,n[4]=n[4]+c|0,n[5]=n[5]+p|0,n[6]=n[6]+l|0,n[7]=n[7]+d|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,i=8*t.sigBytes
return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=e.floor(r/4294967296),n[15+(i+64>>>9<<4)]=r,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var e=i.clone.call(this)
return e._hash=this._hash.clone(),e}})
t.SHA256=i._createHelper(p),t.HmacSHA256=i._createHmacHelper(p)}(Math),i=(r=c).lib.Base,o=r.enc.Utf8,r.algo.HMAC=i.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=o.parse(t))
var n=e.blockSize,r=4*n
t.sigBytes>r&&(t=e.finalize(t)),t.clamp()
for(var i=this._oKey=t.clone(),s=this._iKey=t.clone(),a=i.words,c=s.words,u=0;u<n;u++)a[u]^=1549556828,c[u]^=909522486
i.sigBytes=s.sigBytes=r,this.reset()},reset:function(){var e=this._hasher
e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e)
return t.reset(),t.finalize(this._oKey.clone().concat(n))}}),function(){var e=c,t=e.lib.WordArray
e.enc.Base64={stringify:function(e){var t=e.words,n=e.sigBytes,r=this._map
e.clamp()
for(var i=[],o=0;o<n;o+=3)for(var s=(t[o>>>2]>>>24-o%4*8&255)<<16|(t[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|t[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<n;a++)i.push(r.charAt(s>>>6*(3-a)&63))
var c=r.charAt(64)
if(c)for(;i.length%4;)i.push(c)
return i.join("")},parse:function(e){var n=e.length,r=this._map,i=r.charAt(64)
if(i){var o=e.indexOf(i);-1!=o&&(n=o)}for(var s=[],a=0,c=0;c<n;c++)if(c%4){var u=r.indexOf(e.charAt(c-1))<<c%4*2,p=r.indexOf(e.charAt(c))>>>6-c%4*2
s[a>>>2]|=(u|p)<<24-a%4*8,a++}return t.create(s,a)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),c.lib.Cipher||function(e){var t=c,n=t.lib,r=n.Base,i=n.WordArray,o=n.BufferedBlockAlgorithm,s=t.enc,a=(s.Utf8,s.Base64),u=t.algo.EvpKDF,p=n.Cipher=o.extend({cfg:r.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,n){this.cfg=this.cfg.extend(n),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?C:v}return function(t){return{encrypt:function(n,r,i){return e(r).encrypt(t,n,r,i)},decrypt:function(n,r,i){return e(r).decrypt(t,n,r,i)}}}}()}),l=(n.StreamCipher=p.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),t.mode={}),d=n.BlockCipherMode=r.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),h=l.CBC=function(){var e=d.extend()
function t(e,t,n){var r=this._iv
if(r){var i=r
this._iv=void 0}else i=this._prevBlock
for(var o=0;o<n;o++)e[t+o]^=i[o]}return e.Encryptor=e.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize
t.call(this,e,n,i),r.encryptBlock(e,n),this._prevBlock=e.slice(n,n+i)}}),e.Decryptor=e.extend({processBlock:function(e,n){var r=this._cipher,i=r.blockSize,o=e.slice(n,n+i)
r.decryptBlock(e,n),t.call(this,e,n,i),this._prevBlock=o}}),e}(),f=(t.pad={}).Pkcs7={pad:function(e,t){for(var n=4*t,r=n-e.sigBytes%n,o=r<<24|r<<16|r<<8|r,s=[],a=0;a<r;a+=4)s.push(o)
var c=i.create(s,r)
e.concat(c)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2]
e.sigBytes-=t}},m=(n.BlockCipher=p.extend({cfg:p.cfg.extend({mode:h,padding:f}),reset:function(){p.reset.call(this)
var e=this.cfg,t=e.iv,n=e.mode
if(this._xformMode==this._ENC_XFORM_MODE)var r=n.createEncryptor
else r=n.createDecryptor,this._minBufferSize=1
this._mode=r.call(n,this,t&&t.words)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding
if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize)
var t=this._process(!0)}else t=this._process(!0),e.unpad(t)
return t},blockSize:4}),n.CipherParams=r.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),g=(t.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,n=e.salt
if(n)var r=i.create([1398893684,1701076831]).concat(n).concat(t)
else r=t
return r.toString(a)},parse:function(e){var t=a.parse(e),n=t.words
if(1398893684==n[0]&&1701076831==n[1]){var r=i.create(n.slice(2,4))
n.splice(0,4),t.sigBytes-=16}return m.create({ciphertext:t,salt:r})}},v=n.SerializableCipher=r.extend({cfg:r.extend({format:g}),encrypt:function(e,t,n,r){r=this.cfg.extend(r)
var i=e.createEncryptor(n,r),o=i.finalize(t),s=i.cfg
return m.create({ciphertext:o,key:n,iv:s.iv,algorithm:e,mode:s.mode,padding:s.padding,blockSize:e.blockSize,formatter:r.format})},decrypt:function(e,t,n,r){return r=this.cfg.extend(r),t=this._parse(t,r.format),e.createDecryptor(n,r).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),y=(t.kdf={}).OpenSSL={execute:function(e,t,n,r){r||(r=i.random(8))
var o=u.create({keySize:t+n}).compute(e,r),s=i.create(o.words.slice(t),4*n)
return o.sigBytes=4*t,m.create({key:o,iv:s,salt:r})}},C=n.PasswordBasedCipher=v.extend({cfg:v.cfg.extend({kdf:y}),encrypt:function(e,t,n,r){var i=(r=this.cfg.extend(r)).kdf.execute(n,e.keySize,e.ivSize)
r.iv=i.iv
var o=v.encrypt.call(this,e,t,i.key,r)
return o.mixIn(i),o},decrypt:function(e,t,n,r){r=this.cfg.extend(r),t=this._parse(t,r.format)
var i=r.kdf.execute(n,e.keySize,e.ivSize,t.salt)
return r.iv=i.iv,v.decrypt.call(this,e,t,i.key,r)}})}(),function(){var e=c,t=e.lib.BlockCipher,n=e.algo,r=[],i=[],o=[],s=[],a=[],u=[],p=[],l=[],d=[],h=[]
!function(){for(var e=[],t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283
var n=0,c=0
for(t=0;t<256;t++){var f=c^c<<1^c<<2^c<<3^c<<4
f=f>>>8^255&f^99,r[n]=f,i[f]=n
var m=e[n],g=e[m],v=e[g],y=257*e[f]^16843008*f
o[n]=y<<24|y>>>8,s[n]=y<<16|y>>>16,a[n]=y<<8|y>>>24,u[n]=y,y=16843009*v^65537*g^257*m^16843008*n,p[f]=y<<24|y>>>8,l[f]=y<<16|y>>>16,d[f]=y<<8|y>>>24,h[f]=y,n?(n=m^e[e[e[v^m]]],c^=e[e[c]]):n=c=1}}()
var f=[0,1,2,4,8,16,32,64,128,27,54],m=n.AES=t.extend({_doReset:function(){for(var e=this._key,t=e.words,n=e.sigBytes/4,i=4*((this._nRounds=n+6)+1),o=this._keySchedule=[],s=0;s<i;s++)if(s<n)o[s]=t[s]
else{var a=o[s-1]
s%n?n>6&&s%n==4&&(a=r[a>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a]):(a=r[(a=a<<8|a>>>24)>>>24]<<24|r[a>>>16&255]<<16|r[a>>>8&255]<<8|r[255&a],a^=f[s/n|0]<<24),o[s]=o[s-n]^a}for(var c=this._invKeySchedule=[],u=0;u<i;u++)s=i-u,a=u%4?o[s]:o[s-4],c[u]=u<4||s<=4?a:p[r[a>>>24]]^l[r[a>>>16&255]]^d[r[a>>>8&255]]^h[r[255&a]]},encryptBlock:function(e,t){this._doCryptBlock(e,t,this._keySchedule,o,s,a,u,r)},decryptBlock:function(e,t){var n=e[t+1]
e[t+1]=e[t+3],e[t+3]=n,this._doCryptBlock(e,t,this._invKeySchedule,p,l,d,h,i),n=e[t+1],e[t+1]=e[t+3],e[t+3]=n},_doCryptBlock:function(e,t,n,r,i,o,s,a){for(var c=this._nRounds,u=e[t]^n[0],p=e[t+1]^n[1],l=e[t+2]^n[2],d=e[t+3]^n[3],h=4,f=1;f<c;f++){var m=r[u>>>24]^i[p>>>16&255]^o[l>>>8&255]^s[255&d]^n[h++],g=r[p>>>24]^i[l>>>16&255]^o[d>>>8&255]^s[255&u]^n[h++],v=r[l>>>24]^i[d>>>16&255]^o[u>>>8&255]^s[255&p]^n[h++],y=r[d>>>24]^i[u>>>16&255]^o[p>>>8&255]^s[255&l]^n[h++]
u=m,p=g,l=v,d=y}m=(a[u>>>24]<<24|a[p>>>16&255]<<16|a[l>>>8&255]<<8|a[255&d])^n[h++],g=(a[p>>>24]<<24|a[l>>>16&255]<<16|a[d>>>8&255]<<8|a[255&u])^n[h++],v=(a[l>>>24]<<24|a[d>>>16&255]<<16|a[u>>>8&255]<<8|a[255&p])^n[h++],y=(a[d>>>24]<<24|a[u>>>16&255]<<16|a[p>>>8&255]<<8|a[255&l])^n[h++],e[t]=m,e[t+1]=g,e[t+2]=v,e[t+3]=y},keySize:8})
e.AES=t._createHelper(m)}(),function(){if("undefined"!=typeof ArrayBuffer){var e=c.lib.WordArray,t=e.init;(e.init=function(e){if(e instanceof ArrayBuffer?e=new Uint8Array(e):(e instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||"undefined"!=typeof Float32Array&&e instanceof Float32Array||"undefined"!=typeof Float64Array&&e instanceof Float64Array)&&(e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)),e instanceof Uint8Array){for(var n=e.byteLength,r=[],i=0;i<n;i++)r[i>>>2]|=e[i]<<24-i%4*8
t.call(this,r,n)}else t.apply(this,arguments)}).prototype=e}}()
var u=function(){function e(){}return e.addListener=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,(function(){n.apply(e,arguments)}))},e.removeListener=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,(function(){n.apply(e,arguments)}))},e.addMessageListener=function(t,n){e.addListener(t,"message",n)},e.removeMessageListener=function(t,n){e.removeListener(t,"message",n)},e.addUnloadListener=function(t){e.addListener(a,"unload",t)},e}(),p=function(){"use strict"
var e={}
function t(e,t,n){e.byteLength
for(var r=0,i=n.length;r<i;r++){var o=n.charCodeAt(r)
if(o<128)e.setUint8(t++,o>>>0&127|0)
else if(o<2048)e.setUint8(t++,o>>>6&31|192),e.setUint8(t++,o>>>0&63|128)
else if(o<65536)e.setUint8(t++,o>>>12&15|224),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128)
else{if(!(o<1114112))throw new Error("bad codepoint "+o)
e.setUint8(t++,o>>>18&7|240),e.setUint8(t++,o>>>12&63|128),e.setUint8(t++,o>>>6&63|128),e.setUint8(t++,o>>>0&63|128)}}}function r(e,t,n){for(var r="",i=t,o=t+n;i<o;i++){var s=e.getUint8(i)
if(0!=(128&s))if(192!=(224&s))if(224!=(240&s)){if(240!=(248&s))throw new Error("Invalid byte "+s.toString(16))
r+=String.fromCharCode((7&s)<<18|(63&e.getUint8(++i))<<12|(63&e.getUint8(++i))<<6|(63&e.getUint8(++i))<<0)}else r+=String.fromCharCode((15&s)<<12|(63&e.getUint8(++i))<<6|(63&e.getUint8(++i))<<0)
else r+=String.fromCharCode((15&s)<<6|63&e.getUint8(++i))
else r+=String.fromCharCode(s)}return r}function i(e){for(var t=0,n=0,r=e.length;n<r;n++){var i=e.charCodeAt(n)
if(i<128)t+=1
else if(i<2048)t+=2
else if(i<65536)t+=3
else{if(!(i<1114112))throw new Error("bad codepoint "+i)
t+=4}}return t}function o(e,t){this.offset=t||0,this.view=e}function s(e,t){return y.keysArray(e,!0).filter((function(r){var i=e[r],o=n(i)
return!(t&&null==i||"function"===o&&!i.toJSON)}))}return e.inspect=function(e){if(void 0===e)return"undefined"
var t,n
if(e instanceof ArrayBuffer?(n="ArrayBuffer",t=new DataView(e)):e instanceof DataView&&(n="DataView",t=e),!t)return JSON.stringify(e)
for(var r=[],i=0;i<e.byteLength;i++){if(i>20){r.push("...")
break}var o=t.getUint8(i).toString(16)
1===o.length&&(o="0"+o),r.push(o)}return"<"+n+" "+r.join(" ")+">"},e.utf8Write=t,e.utf8Read=r,e.utf8ByteCount=i,e.encode=function(e,r){var o=function e(t,r){var o=n(t)
if("string"===o){if((a=i(t))<32)return 1+a
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
if(null===t)return r?0:1
if(void 0===t)return r?0:3
if("function"==typeof t.toJSON)return e(t.toJSON(),r)
if("object"===o){var a,c=0
if(Array.isArray(t)){a=t.length
for(var u=0;u<a;u++)c+=e(t[u],r)}else{var p=s(t,r)
for(a=p.length,u=0;u<a;u++){var l=p[u]
c+=e(l)+e(t[l],r)}}if(a<16)return 1+c
if(a<65536)return 3+c
if(a<4294967296)return 5+c
throw new Error("Array or object too long 0x"+a.toString(16))}if("function"===o)return 0
throw new Error("Unknown type "+o)}(e,r)
if(0!=o){var a=new ArrayBuffer(o)
return function e(r,o,a,c){var u=n(r)
if("string"===u){if((p=i(r))<32)return o.setUint8(a,160|p),t(o,a+1,r),1+p
if(p<256)return o.setUint8(a,217),o.setUint8(a+1,p),t(o,a+2,r),2+p
if(p<65536)return o.setUint8(a,218),o.setUint16(a+1,p),t(o,a+3,r),3+p
if(p<4294967296)return o.setUint8(a,219),o.setUint32(a+1,p),t(o,a+5,r),5+p}if(ArrayBuffer.isView&&ArrayBuffer.isView(r)&&(r=r.buffer),r instanceof ArrayBuffer){if((p=r.byteLength)<256)return o.setUint8(a,196),o.setUint8(a+1,p),new Uint8Array(o.buffer).set(new Uint8Array(r),a+2),2+p
if(p<65536)return o.setUint8(a,197),o.setUint16(a+1,p),new Uint8Array(o.buffer).set(new Uint8Array(r),a+3),3+p
if(p<4294967296)return o.setUint8(a,198),o.setUint32(a+1,p),new Uint8Array(o.buffer).set(new Uint8Array(r),a+5),5+p}if("number"===u){if(Math.floor(r)!==r)return o.setUint8(a,203),o.setFloat64(a+1,r),9
if(r>=0){if(r<128)return o.setUint8(a,r),1
if(r<256)return o.setUint8(a,204),o.setUint8(a+1,r),2
if(r<65536)return o.setUint8(a,205),o.setUint16(a+1,r),3
if(r<4294967296)return o.setUint8(a,206),o.setUint32(a+1,r),5
if(r<0x10000000000000000)return o.setUint8(a,207),function(e,t,n){n<0x10000000000000000?(e.setUint32(t,Math.floor(2.3283064365386963e-10*n)),e.setInt32(t+4,-1&n)):(e.setUint32(t,4294967295),e.setUint32(t+4,4294967295))}(o,a+1,r),9
throw new Error("Number too big 0x"+r.toString(16))}if(r>=-32)return o.setInt8(a,r),1
if(r>=-128)return o.setUint8(a,208),o.setInt8(a+1,r),2
if(r>=-32768)return o.setUint8(a,209),o.setInt16(a+1,r),3
if(r>=-2147483648)return o.setUint8(a,210),o.setInt32(a+1,r),5
if(r>=-0x8000000000000000)return o.setUint8(a,211),function(e,t,n){n<0x8000000000000000?(e.setInt32(t,Math.floor(2.3283064365386963e-10*n)),e.setInt32(t+4,-1&n)):(e.setUint32(t,2147483647),e.setUint32(t+4,2147483647))}(o,a+1,r),9
throw new Error("Number too small -0x"+(-r).toString(16).substr(1))}if("undefined"===u)return c?0:(o.setUint8(a,212),o.setUint8(a+1,0),o.setUint8(a+2,0),3)
if(null===r)return c?0:(o.setUint8(a,192),1)
if("boolean"===u)return o.setUint8(a,r?195:194),1
if("function"==typeof r.toJSON)return e(r.toJSON(),o,a,c)
if("object"===u){var p,l=0,d=Array.isArray(r)
if(d)p=r.length
else{var h=s(r,c)
p=h.length}if(p<16?(o.setUint8(a,p|(d?144:128)),l=1):p<65536?(o.setUint8(a,d?220:222),o.setUint16(a+1,p),l=3):p<4294967296&&(o.setUint8(a,d?221:223),o.setUint32(a+1,p),l=5),d)for(var f=0;f<p;f++)l+=e(r[f],o,a+l,c)
else for(f=0;f<p;f++){var m=h[f]
l+=e(m,o,a+l),l+=e(r[m],o,a+l,c)}return l}if("function"===u)return 0
throw new Error("Unknown type "+u)}(e,new DataView(a),0,r),a}},e.decode=function(e){var t=new o(new DataView(e)),n=t.parse()
if(t.offset!==e.byteLength)throw new Error(e.byteLength-t.offset+" trailing bytes")
return n},o.prototype.map=function(e){for(var t={},n=0;n<e;n++)t[this.parse()]=this.parse()
return t},o.prototype.bin=o.prototype.buf=function(e){var t=new ArrayBuffer(e)
return new Uint8Array(t).set(new Uint8Array(this.view.buffer,this.offset,e),0),this.offset+=e,t},o.prototype.str=function(e){var t=r(this.view,this.offset,e)
return this.offset+=e,t},o.prototype.array=function(e){for(var t=new Array(e),n=0;n<e;n++)t[n]=this.parse()
return t},o.prototype.ext=function(e){var t={}
return t.type=this.view.getInt8(this.offset),this.offset++,t.data=this.buf(e),this.offset+=e,t},o.prototype.parse=function(){var e,t,n,r,i=this.view.getUint8(this.offset)
if(0==(128&i))return this.offset++,i
if(128==(240&i))return t=15&i,this.offset++,this.map(t)
if(144==(240&i))return t=15&i,this.offset++,this.array(t)
if(160==(224&i))return t=31&i,this.offset++,this.str(t)
if(224==(224&i))return e=this.view.getInt8(this.offset),this.offset++,e
switch(i){case 192:return this.offset++,null
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
case 207:return n=this.view,r=(r=this.offset+1)||0,e=4294967296*n.getUint32(r)+n.getUint32(r+4),this.offset+=9,e
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
case 223:return t=this.view.getUint32(this.offset+1),this.offset+=5,this.map(t)}throw new Error("Unknown type 0x"+i.toString(16))},e}()
"undefined"==typeof Window&&"undefined"==typeof WorkerGlobalScope&&console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm")
var l,d=a.navigator&&a.navigator.userAgent.toString(),h={libver:"js-web",logTimestamps:!0,userAgent:d,currentUrl:a.location&&a.location.href,noUpgrade:d&&d.match(/MSIE\s8\.0/),binaryType:"arraybuffer",WebSocket:a.WebSocket||a.MozWebSocket,xhrSupported:a.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest,jsonpSupported:"undefined"!=typeof document,allowComet:(l=a.location,!a.WebSocket||!l||!l.origin||l.origin.indexOf("http")>-1),streamingSupported:!0,useProtocolHeartbeats:!0,createHmac:null,msgpack:p,supportsBinary:!!a.TextDecoder,preferBinary:!1,ArrayBuffer:a.ArrayBuffer,atob:a.atob,nextTick:function(e){setTimeout(e,0)},addEventListener:a.addEventListener,inspect:JSON.stringify,stringByteSize:function(e){return a.TextDecoder&&(new a.TextEncoder).encode(e).length||e.length},TextEncoder:a.TextEncoder,TextDecoder:a.TextDecoder,Promise:a.Promise,getRandomValues:function(e){if(void 0!==e)return function(t,n){e.getRandomValues(t),n&&n(null)}}(a.crypto||a.msCrypto)},f=function(){var e,t=c.lib.WordArray
if(h.getRandomWordArray)e=h.getRandomWordArray
else if("undefined"!=typeof Uint32Array&&h.getRandomValues){var n=new Uint32Array(4)
e=function(e,t){var r=e/4,i=4==r?n:new Uint32Array(r)
h.getRandomValues(i,(function(e){t(e,v.toWordArray(i))}))}}else e=function(e,n){b.logAction(b.LOG_MAJOR,"Ably.Crypto.generateRandom()","Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()")
for(var r=e/4,i=new Array(r),o=0;o<r;o++)i[o]=Math.floor(4294967296*Math.random())-2147483648
n(null,t.create(i))}
function r(e){if("aes"===e.algorithm&&"cbc"===e.mode){if(128===e.keyLength||256===e.keyLength)return
throw new Error("Unsupported key length "+e.keyLength+" for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")}}function i(e){return e.replace("_","/").replace("-","+")}t.create([0,0,0,0])
var o=[t.create([269488144,269488144,269488144,269488144],16),t.create([16777216],1),t.create([33685504],2),t.create([50529024],3),t.create([67372036],4),t.create([84215045,83886080],5),t.create([101058054,101056512],6),t.create([117901063,117901056],7),t.create([134744072,134744072],8),t.create([151587081,151587081,150994944],9),t.create([168430090,168430090,168427520],10),t.create([185273099,185273099,185273088],11),t.create([202116108,202116108,202116108],12),t.create([218959117,218959117,218959117,218103808],13),t.create([235802126,235802126,235802126,235798528],14),t.create([252645135,252645135,252645135,252645135],15),t.create([269488144,269488144,269488144,269488144],16)]
function s(){}function a(){this.algorithm=null,this.keyLength=null,this.mode=null,this.key=null}function u(e,t,n){this.algorithm=e.algorithm+"-"+String(e.keyLength)+"-"+e.mode,this.cjsAlgorithm=e.algorithm.toUpperCase().replace(/-\d+$/,""),this.key=v.toWordArray(e.key),n&&(this.iv=v.toWordArray(n).clone()),this.blockLengthWords=t}return s.CipherParams=a,s.getDefaultParams=function(e){var t
if("function"!=typeof e&&"string"!=typeof e){if(!e.key)throw new Error("Crypto.getDefaultParams: a key is required")
t="string"==typeof e.key?c.enc.Base64.parse(i(e.key)):v.toWordArray(e.key)
var n=new a
if(n.key=t,n.algorithm=e.algorithm||"aes",n.keyLength=32*t.words.length,n.mode=e.mode||"cbc",e.keyLength&&e.keyLength!==n.keyLength)throw new Error("Crypto.getDefaultParams: a keyLength of "+e.keyLength+" was specified, but the key actually has length "+n.keyLength)
return r(n),n}if(b.deprecated("Crypto.getDefaultParams(key, callback)","Crypto.getDefaultParams({key: key})"),"function"==typeof e)s.generateRandomKey((function(t){e(null,s.getDefaultParams({key:t}))}))
else{if("function"!=typeof arguments[1])throw new Error("Invalid arguments for Crypto.getDefaultParams")
arguments[1](null,s.getDefaultParams({key:e}))}},s.generateRandomKey=function(t,n){1==arguments.length&&"function"==typeof t&&(n=t,t=void 0),e((t||256)/8,n)},s.getCipher=function(e){var t=e instanceof a?e:s.getDefaultParams(e)
return{cipherParams:t,cipher:new u(t,4,e.iv)}},u.prototype.encrypt=function(t,n){b.logAction(b.LOG_MICRO,"CBCCipher.encrypt()","")
var r=(t=v.toWordArray(t)).sigBytes,i=function(e){return e+16&-16}(r),s=this,a=function(){s.getIv((function(e,a){if(e)n(e)
else{var c=s.encryptCipher.process(t.concat(o[i-r])),u=a.concat(c)
n(null,u)}}))}
this.encryptCipher?a():this.iv?(this.encryptCipher=c.algo[this.cjsAlgorithm].createEncryptor(this.key,{iv:this.iv}),a()):e(16,(function(e,t){e?n(e):(s.encryptCipher=c.algo[s.cjsAlgorithm].createEncryptor(s.key,{iv:t}),s.iv=t,a())}))},u.prototype.decrypt=function(e){b.logAction(b.LOG_MICRO,"CBCCipher.decrypt()",""),e=v.toWordArray(e)
var n=this.blockLengthWords,r=e.words,i=t.create(r.slice(0,n)),o=t.create(r.slice(n)),s=c.algo[this.cjsAlgorithm].createDecryptor(this.key,{iv:i}),a=s.process(o),u=s.finalize()
return s.reset(),u&&u.sigBytes&&a.concat(u),a},u.prototype.getIv=function(t){if(this.iv){var n=this.iv
return this.iv=null,void t(null,n)}var r=this
e(16,(function(e,n){e?t(e):t(null,r.encryptCipher.process(n))}))},s}(),m=function(){var e,t,n="ablyjs-storage-test"
try{a.sessionStorage.setItem(n,n),a.sessionStorage.removeItem(n),e=!0}catch(t){e=!1}try{a.localStorage.setItem(n,n),a.localStorage.removeItem(n),t=!0}catch(e){t=!1}function r(){}function i(e){return e?a.sessionStorage:a.localStorage}function o(e,t,n,r){var o={value:t}
return n&&(o.expires=y.now()+n),i(r).setItem(e,JSON.stringify(o))}function s(e,t){var n=i(t).getItem(e)
if(!n)return null
var r=JSON.parse(n)
return r.expires&&r.expires<y.now()?(i(t).removeItem(e),null):r.value}function c(e,t){return i(t).removeItem(e)}return t&&(r.set=function(e,t,n){return o(e,t,n,!1)},r.get=function(e){return s(e,!1)},r.remove=function(e){return c(e,!1)}),e&&(r.setSession=function(e,t,n){return o(e,t,n,!0)},r.getSession=function(e){return s(e,!0)},r.removeSession=function(e){return c(e,!0)}),r}(),g={internetUpUrl:"https://internet-up.ably-realtime.com/is-the-internet-up.txt",jsonpInternetUpUrl:"https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",defaultTransports:["xhr_polling","xhr_streaming","jsonp","web_socket"],baseTransportOrder:["xhr_polling","xhr_streaming","jsonp","web_socket"],transportPreferenceOrder:["jsonp","xhr_polling","xhr_streaming","web_socket"],upgradeTransports:["xhr_streaming","web_socket"]}
h.noUpgrade&&(g.upgradeTransports=[])
var v=function(){var e=c.lib.WordArray,t=h.ArrayBuffer,n=h.atob,r=h.TextEncoder,i=h.TextDecoder,o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function s(e){return null!=e&&void 0!==e.sigBytes}function a(e){return null!=e&&e.constructor===t}function u(e){return t&&t.isView&&t.isView(e)}function p(){}p.base64CharSet=o,p.hexCharSet="0123456789abcdef"
var l=p.isBuffer=function(e){return a(e)||s(e)||u(e)},d=p.toBuffer=function(e){if(!t)throw new Error("Can't convert to Buffer: browser does not support the necessary types")
if(a(e))return new Uint8Array(e)
if(u(e))return new Uint8Array(e.buffer)
if(s(e)){for(var n=new t(e.sigBytes),r=new Uint8Array(n),i=0;i<e.sigBytes;i++)r[i]=e.words[i>>>2]>>>24-i%4*8&255
return r}throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray")}
return p.toArrayBuffer=function(e){return a(e)?e:d(e).buffer},p.toWordArray=function(t){return u(t)&&(t=t.buffer),s(t)?t:e.create(t)},p.base64Encode=function(e){return s(e)?c.enc.Base64.stringify(e):function(e){for(var t,n="",r=o,i=e.byteLength,s=i%3,a=i-s,c=0;c<a;c+=3)n+=r[(16515072&(t=e[c]<<16|e[c+1]<<8|e[c+2]))>>18]+r[(258048&t)>>12]+r[(4032&t)>>6]+r[63&t]
return 1==s?n+=r[(252&(t=e[a]))>>2]+r[(3&t)<<4]+"==":2==s&&(n+=r[(64512&(t=e[a]<<8|e[a+1]))>>10]+r[(1008&t)>>4]+r[(15&t)<<2]+"="),n}(d(e))},p.base64Decode=function(e){return t&&n?function(e){for(var t=n(e),r=t.length,i=new Uint8Array(r),o=0;o<r;o++){var s=t.charCodeAt(o)
i[o]=s}return i.buffer}(e):c.enc.Base64.parse(e)},p.hexEncode=function(e){return e=p.toWordArray(e),c.enc.Hex.stringify(e)},p.hexDecode=function(e){var n=c.enc.Hex.parse(e)
return t?p.toArrayBuffer(n):n},p.utf8Encode=function(e){return r?(new r).encode(e).buffer:c.enc.Utf8.parse(e)},p.utf8Decode=function(e){if(!l(e))throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray")
return i&&!s(e)?(new i).decode(e):(e=p.toWordArray(e),c.enc.Utf8.stringify(e))},p.bufferCompare=function(e,t){if(!e)return-1
if(!t)return 1
e=p.toWordArray(e),t=p.toWordArray(t),e.clamp(),t.clamp()
var n=e.sigBytes-t.sigBytes
if(0!=n)return n
e=e.words,t=t.words
for(var r=0;r<e.length;r++)if(0!=(n=e[r]-t[r]))return n
return 0},p.byteLength=function(e){return a(e)||u(e)?e.byteLength:s(e)?e.sigBytes:void 0},p}(),y=function(){var e=h.msgpack
function t(){}function r(e){return Math.floor(Math.random()*e.length)}t.mixin=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
if(!n)break
var r=n.hasOwnProperty
for(var i in n)r&&!r.call(n,i)||(e[i]=n[i])}return e},t.copy=function(e){return t.mixin({},e)},t.isArray=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},t.ensureArray=function(e){return t.isEmptyArg(e)?[]:t.isArray(e)?e:[e]},t.isObject=function(e){return"[object Object]"==Object.prototype.toString.call(e)},t.isEmpty=function(e){for(var t in e)return!1
return!0},t.isOnlyPropIn=function(e,t){for(var n in e)if(n!==t)return!1
return!0},t.isEmptyArg=function(e){return null==e},t.shallowClone=function(e){var t=new Object
for(var n in e)t[n]=e[n]
return t},t.prototypicalClone=function(e,n){function r(){}r.prototype=e
var i=new r
return n&&t.mixin(i,n),i},t.inherits=h.inherits||function(e,n){e.super_=n,e.prototype=t.prototypicalClone(n.prototype,{constructor:e})},t.containsValue=function(e,t){for(var n in e)if(e[n]==t)return!0
return!1},t.intersect=function(e,n){return t.isArray(n)?t.arrIntersect(e,n):t.arrIntersectOb(e,n)},t.arrIntersect=function(e,n){for(var r=[],i=0;i<e.length;i++){var o=e[i];-1!=t.arrIndexOf(n,o)&&r.push(o)}return r},t.arrIntersectOb=function(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r]
i in t&&n.push(i)}return n},t.arrSubtract=function(e,n){for(var r=[],i=0;i<e.length;i++){var o=e[i];-1==t.arrIndexOf(n,o)&&r.push(o)}return r},t.arrIndexOf=Array.prototype.indexOf?function(e,t,n){return e.indexOf(t,n)}:function(e,t,n){n=n||0
for(var r=e.length;n<r;n++)if(e[n]===t)return n
return-1},t.arrIn=function(e,n){return-1!==t.arrIndexOf(e,n)},t.arrDeleteValue=function(e,n){var r=t.arrIndexOf(e,n),i=-1!=r
return i&&e.splice(r,1),i},t.arrWithoutValue=function(e,n){var r=e.slice()
return t.arrDeleteValue(r,n),r},t.keysArray=function(e,t){var n=[]
for(var r in e)t&&!e.hasOwnProperty(r)||n.push(r)
return n},t.valuesArray=function(e,t){var n=[]
for(var r in e)t&&!e.hasOwnProperty(r)||n.push(e[r])
return n},t.arrForEach=Array.prototype.forEach?function(e,t){e.forEach(t)}:function(e,t){for(var n=e.length,r=0;r<n;r++)t(e[r],r,e)},t.safeArrForEach=function(e,n){return t.arrForEach(e.slice(),n)},t.arrMap=Array.prototype.map?function(e,t){return e.map(t)}:function(e,t){for(var n=[],r=e.length,i=0;i<r;i++)n.push(t(e[i],i,e))
return n},t.arrFilter=Array.prototype.filter?function(e,t){return e.filter(t)}:function(e,t){for(var n=[],r=e.length,i=0;i<r;i++)t(e[i])&&n.push(e[i])
return n},t.arrEvery=Array.prototype.every?function(e,t){return e.every(t)}:function(e,t){for(var n=e.length,r=0;r<n;r++)if(!t(e[r],r,e))return!1
return!0},t.allSame=function(e,n){if(0===e.length)return!0
var r=e[0][n]
return t.arrEvery(e,(function(e){return e[n]===r}))},t.nextTick=h.nextTick
var i={json:"application/json",jsonp:"application/javascript",xml:"application/xml",html:"text/html",msgpack:"application/x-msgpack"}
return t.defaultGetHeaders=function(e){return{accept:i[e||"json"],"X-Ably-Version":g.apiVersion,"X-Ably-Lib":g.libstring}},t.defaultPostHeaders=function(e){var t
return{accept:t=i[e||"json"],"content-type":t,"X-Ably-Version":g.apiVersion,"X-Ably-Lib":g.libstring}},t.arrPopRandomElement=function(e){return e.splice(r(e),1)[0]},t.toQueryString=function(e){var t=[]
if(e)for(var n in e)t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]))
return t.length?"?"+t.join("&"):""},t.parseQueryString=function(e){for(var t,n=/([^?&=]+)=?([^&]*)/g,r={};t=n.exec(e);)r[decodeURIComponent(t[1])]=decodeURIComponent(t[2])
return r},t.now=Date.now||function(){return(new Date).getTime()},t.inspect=h.inspect,t.isErrorInfo=function(e){return"ErrorInfo"==e.constructor.name},t.inspectError=function(e){return e&&(t.isErrorInfo(e)||"Error"==e.constructor.name||e instanceof Error)?e.toString():t.inspect(e)},t.inspectBody=function(e){return v.isBuffer(e)?e.toString():"string"==typeof e?e:h.inspect(e)},t.dataSizeBytes=function(e){if(v.isBuffer(e))return v.byteLength(e)
if("string"==typeof e)return h.stringByteSize(e)
throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: "+n(e))},t.cheapRandStr=function(){return String(Math.random()).substr(2)},t.randomString=h.getRandomValues&&"undefined"!=typeof Uint8Array?function(e){var t=new Uint8Array(e)
return h.getRandomValues(t),v.base64Encode(t)}:function(e){for(var t=v.base64CharSet,n=Math.round(4*e/3),i="",o=0;o<n;o++)i+=t[r(t)]
return i},t.randomHexString=h.getRandomValues&&"undefined"!=typeof Uint8Array?function(e){var t=new Uint8Array(e)
return h.getRandomValues(t),v.hexEncode(t)}:function(e){for(var t=v.hexCharSet,n=2*e,i="",o=0;o<n;o++)i+=t[r(t)]
return i},t.arrChooseN=function(e,n){for(var r=Math.min(n,e.length),i=e.slice(),o=[],s=0;s<r;s++)o.push(t.arrPopRandomElement(i))
return o},t.trim=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},t.promisify=function(e,t,n){return new Promise((function(r,i){e[t].apply(e,Array.prototype.slice.call(n).concat((function(e,t){e?i(e):r(t)})))}))},t.decodeBody=function(t,n){return"msgpack"==n?e.decode(t):JSON.parse(String(t))},t.encodeBody=function(t,n){return"msgpack"==n?e.encode(t,!0):JSON.stringify(t)},t}(),C=function(){var e=function(){}
function t(){}var n=Date.now||function(){return(new Date).getTime()}
function r(e){var t=e.statusCode
return 408===t&&!e.code||400===t&&!e.code||t>=500&&t<=504}function i(e){var t=e.connection,n=t&&t.connectionManager.host
return n?[n].concat(g.getFallbackHosts(e.options)):g.getHosts(e.options)}return t._getHosts=i,t.methods=["get","delete","post","put","patch"],t.methodsWithoutBody=["get","delete"],t.methodsWithBody=y.arrSubtract(t.methods,t.methodsWithoutBody),y.arrForEach(t.methodsWithoutBody,(function(e){t[e]=function(n,r,i,o,s){t.do(e,n,r,i,null,o,s)},t[e+"Uri"]=function(n,r,i,o,s){t.doUri(e,n,r,i,null,o,s)}})),y.arrForEach(t.methodsWithBody,(function(e){t[e]=function(n,r,i,o,s,a){t.do(e,n,r,i,o,s,a)},t[e+"Uri"]=function(n,r,i,o,s,a){t.doUri(e,n,r,i,o,s,a)}})),t.do=function(o,s,a,c,u,p,l){l=l||e
var d="function"==typeof a?a:function(e){return s.baseUri(e)+a},h=(c&&c.accept,arguments),f=s._currentFallback
if(f){if(f.validUntil>n())return void t.Request(o,s,d(f.host),c,p,u,(function(e){if(e&&r(e))return s._currentFallback=null,void t.do.apply(t,h)
l.apply(null,arguments)}))
s._currentFallback=null}var m=i(s)
if(1!=m.length){var g=function e(i,a){var h=i.shift()
t.doUri(o,s,d(h),c,u,p,(function(t){t&&r(t)&&i.length?e(i,!0):(a&&(s._currentFallback={host:h,validUntil:n()+s.options.timeouts.fallbackRetryTimeout}),l.apply(null,arguments))}))}
g(m)}else t.doUri(o,s,d(m[0]),c,u,p,l)},t.doUri=function(e,n,r,i,o,s,a){t.Request(e,n,r,i,s,o,a)},t.supportsAuthHeaders=!1,t.supportsLinkHeaders=!1,t}(),S=function(){function e(){this.buffer=[]}e.prototype.append=function(e){return this.buffer.push(e),this},e.prototype.toString=function(){return this.buffer.join("")}
var t={codex:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){for(var i=new e,o=t.codex,s=new n(r);s.moveNext();){var a=s.current
s.moveNext()
var c=s.current
s.moveNext()
var u=s.current,p=a>>2,l=(3&a)<<4|c>>4,d=(15&c)<<2|u>>6,h=63&u
isNaN(c)?d=h=64:isNaN(u)&&(h=64),i.append(o.charAt(p)+o.charAt(l)+o.charAt(d)+o.charAt(h))}return i.toString()},decode:function(t){for(var n=new e,i=new r(t);i.moveNext();){var o=i.current
if(o<128)n.append(String.fromCharCode(o))
else if(o>191&&o<224){i.moveNext()
var s=i.current
n.append(String.fromCharCode((31&o)<<6|63&s))}else{i.moveNext(),s=i.current,i.moveNext()
var a=i.current
n.append(String.fromCharCode((15&o)<<12|(63&s)<<6|63&a))}}return n.toString()}}
function n(e){this._input=e,this._index=-1,this._buffer=[]}function r(e){this._input=e,this._index=-1,this._buffer=[]}return n.prototype={current:Number.NaN,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0
if(this._index>=this._input.length-1)return this.current=Number.NaN,!1
var e=this._input.charCodeAt(++this._index)
return 13==e&&10==this._input.charCodeAt(this._index+1)&&(e=10,this._index+=2),e<128?this.current=e:e>127&&e<2048?(this.current=e>>6|192,this._buffer.push(63&e|128)):(this.current=e>>12|224,this._buffer.push(e>>6&63|128),this._buffer.push(63&e|128)),!0}},r.prototype={current:64,moveNext:function(){if(this._buffer.length>0)return this.current=this._buffer.shift(),!0
if(this._index>=this._input.length-1)return this.current=64,!1
var e=t.codex.indexOf(this._input.charAt(++this._index)),n=t.codex.indexOf(this._input.charAt(++this._index)),r=t.codex.indexOf(this._input.charAt(++this._index)),i=t.codex.indexOf(this._input.charAt(++this._index)),o=e<<2|n>>4,s=(15&n)<<4|r>>2,a=(3&r)<<6|i
return this.current=o,64!=r&&this._buffer.push(s),64!=i&&this._buffer.push(a),!0}},t}()
function R(e){if("string"!=typeof e)throw new _("host must be a string; was a "+n(e),4e4,400)
if(!e.length)throw new _("host must not be zero-length",4e4,400)}g.ENVIRONMENT="",g.REST_HOST="rest.ably.io",g.REALTIME_HOST="realtime.ably.io",g.FALLBACK_HOSTS=["A.ably-realtime.com","B.ably-realtime.com","C.ably-realtime.com","D.ably-realtime.com","E.ably-realtime.com"],g.PORT=80,g.TLS_PORT=443,g.TIMEOUTS={disconnectedRetryTimeout:15e3,suspendedRetryTimeout:3e4,httpRequestTimeout:15e3,channelRetryTimeout:15e3,fallbackRetryTimeout:6e5,connectionStateTtl:12e4,realtimeRequestTimeout:1e4,recvTimeout:9e4,preferenceConnectTimeout:6e3,parallelUpgradeDelay:6e3},g.httpMaxRetryCount=3,g.maxMessageSize=65536,g.errorReportingUrl="https://errors.ably.io/api/15/store/",g.errorReportingHeaders={"X-Sentry-Auth":"Sentry sentry_version=7, sentry_key=a04e33c8674c451f8a310fbec029acf5, sentry_client=ably-js/0.1","Content-Type":"application/json"},g.version="1.1.24",g.libstring=h.libver+"-"+g.version,g.apiVersion="1.1",g.getHost=function(e,t,n){return n?t==e.restHost&&e.realtimeHost||t||e.realtimeHost:t||e.restHost},g.getPort=function(e,t){return t||e.tls?e.tlsPort:e.port},g.getHttpScheme=function(e){return e.tls?"https://":"http://"},g.getFallbackHosts=function(e){var t=e.fallbackHosts,n=void 0!==e.httpMaxRetryCount?e.httpMaxRetryCount:g.httpMaxRetryCount
return t?y.arrChooseN(t,n):[]},g.getHosts=function(e){return[e.restHost].concat(g.getFallbackHosts(e))},g.objectifyOptions=function(e){return"string"==typeof e?-1==e.indexOf(":")?{token:e}:{key:e}:e},g.normaliseOptions=function(e){e.host&&(b.deprecated("host","restHost"),e.restHost=e.host),e.wsHost&&(b.deprecated("wsHost","realtimeHost"),e.realtimeHost=e.wsHost),e.queueEvents&&(b.deprecated("queueEvents","queueMessages"),e.queueMessages=e.queueEvents),!0===e.recover&&(b.deprecated("{recover: true}","{recover: function(lastConnectionDetails, cb) { cb(true); }}"),e.recover=function(e,t){t(!0)}),"function"==typeof e.recover&&!0===e.closeOnUnload&&(b.logAction(b.LOG_ERROR,"Defaults.normaliseOptions","closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"),e.recover=null),"closeOnUnload"in e||(e.closeOnUnload=!e.recover),e.transports&&y.arrIn(e.transports,"xhr")&&(b.deprecated('transports: ["xhr"]','transports: ["xhr_streaming"]'),y.arrDeleteValue(e.transports,"xhr"),e.transports.push("xhr_streaming")),"queueMessages"in e||(e.queueMessages=!0)
var t=!1
if(e.restHost)e.realtimeHost=e.realtimeHost||e.restHost
else{var n=e.environment&&String(e.environment).toLowerCase()||g.ENVIRONMENT
t=!n||"production"===n,e.restHost=t?g.REST_HOST:n+"-"+g.REST_HOST,e.realtimeHost=t?g.REALTIME_HOST:n+"-"+g.REALTIME_HOST}for(var r in e.fallbackHosts=t||e.fallbackHostsUseDefault?g.FALLBACK_HOSTS:e.fallbackHosts,y.arrForEach((e.fallbackHosts||[]).concat(e.restHost,e.realtimeHost),R),e.port=e.port||g.PORT,e.tlsPort=e.tlsPort||g.TLS_PORT,e.maxMessageSize=e.maxMessageSize||g.maxMessageSize,"tls"in e||(e.tls=!0),e.timeouts={},g.TIMEOUTS)e.timeouts[r]=e[r]||g.TIMEOUTS[r]
return e.useBinaryProtocol="useBinaryProtocol"in e?h.supportsBinary&&e.useBinaryProtocol:h.preferBinary,e.clientId&&((e.headers=e.headers||{})["X-Ably-ClientId"]=v.base64Encode(v.utf8Encode(e.clientId))),"idempotentRestPublishing"in e||(e.idempotentRestPublishing=!1),e.promises&&!h.Promise&&(b.logAction(b.LOG_ERROR,"Defaults.normaliseOptions","{promises: true} was specified, but no Promise constructor found; disabling promises"),e.promises=!1),e}
var T=function(){function e(){this.any=[],this.events={},this.anyOnce=[],this.eventsOnce={}}function t(e,t,n){try{t.apply(e,n)}catch(e){b.logAction(b.LOG_ERROR,"EventEmitter.emit()","Unexpected listener exception: "+e+"; stack = "+(e&&e.stack))}}function n(e,t,r){var i,o,s,a
for(a=0;a<e.length;a++)if(i=e[a],r&&(i=i[r]),y.isArray(i)){for(;-1!==(o=y.arrIndexOf(i,t));)i.splice(o,1)
r&&0===i.length&&delete e[a][r]}else if(y.isObject(i))for(s in i)i.hasOwnProperty(s)&&y.isArray(i[s])&&n([i],t,s)}return e.prototype.on=function(e,t){if(1==arguments.length&&"function"==typeof e)this.any.push(e)
else if(y.isEmptyArg(e))this.any.push(t)
else if(y.isArray(e)){var n=this
y.arrForEach(e,(function(e){n.on(e,t)}))}else{var r=this.events[e]||(this.events[e]=[])
r.push(t)}},e.prototype.off=function(e,t){if(0==arguments.length||y.isEmptyArg(e)&&y.isEmptyArg(t))return this.any=[],this.events={},this.anyOnce=[],void(this.eventsOnce={})
if(1==arguments.length&&"function"==typeof e&&(t=e,e=null),t&&y.isEmptyArg(e))n([this.any,this.events,this.anyOnce,this.eventsOnce],t)
else{if(y.isArray(e)){var r=this
y.arrForEach(e,(function(e){r.off(e,t)}))}t?n([this.events,this.eventsOnce],t,e):(delete this.events[e],delete this.eventsOnce[e])}},e.prototype.listeners=function(e){if(e){var t=this.events[e]||[]
return this.eventsOnce[e]&&Array.prototype.push.apply(t,this.eventsOnce[e]),t.length?t:null}return this.any.length?this.any:null},e.prototype.emit=function(e){var n=Array.prototype.slice.call(arguments,1),r={event:e},i=[]
this.anyOnce.length&&(Array.prototype.push.apply(i,this.anyOnce),this.anyOnce=[]),this.any.length&&Array.prototype.push.apply(i,this.any)
var o=this.eventsOnce[e]
o&&(Array.prototype.push.apply(i,o),delete this.eventsOnce[e])
var s=this.events[e]
s&&Array.prototype.push.apply(i,s),y.arrForEach(i,(function(e){t(r,e,n)}))},e.prototype.once=function(e,t){var n=arguments.length,r=this
if((0===n||1===n&&"function"!=typeof e)&&h.Promise)return new h.Promise((function(t){r.once(e,t)}))
if(1==arguments.length&&"function"==typeof e)this.anyOnce.push(e)
else if(y.isEmptyArg(e))this.anyOnce.push(t)
else{if(y.isArray(e))throw"Arrays of events can only be used with on(), not once()"
var i=this.eventsOnce[e]||(this.eventsOnce[e]=[])
i.push(t)}},e.prototype.whenState=function(e,n,r){var i={event:e},o=this,s=Array.prototype.slice.call(arguments,3)
if("string"!=typeof e||"string"!=typeof n)throw"whenState requires a valid event String argument"
if("function"!=typeof r&&h.Promise)return new h.Promise((function(t){o.whenState.bind(o,e,n,t).apply(o,s)}))
e===n?t(i,r,s):this.once(e,r)},e}(),b=function(){var e,t
function n(e,t){return("000"+e).slice(-2-(t||0))}"undefined"==typeof Window&&"undefined"==typeof WorkerGlobalScope||a.console&&a.console.log&&"function"==typeof a.console.log.apply?(e=function(){console.log.apply(console,arguments)},t=console.warn?function(){console.warn.apply(console,arguments)}:e):e=t=a.console&&a.console.log?function(){Function.prototype.apply.call(console.log,console,arguments)}:function(){}
var r=1
function i(e){return h.logTimestamps?function(t){var r=new Date
e(n(r.getHours())+":"+n(r.getMinutes())+":"+n(r.getSeconds())+"."+n(r.getMilliseconds(),!0)+" "+t)}:e}var o=i(e),s=i(t)
function c(e){}return c.LOG_NONE=0,c.LOG_ERROR=1,c.LOG_MAJOR=2,c.LOG_MINOR=3,c.LOG_MICRO=4,c.LOG_DEFAULT=1,c.LOG_DEBUG=4,c.logAction=function(e,t,n){c.shouldLog(e)&&(1===e?s:o)("Ably: "+t+": "+n)},c.deprecated=function(e,t){c.shouldLog(1)&&s("Ably: Deprecation warning - '"+e+"' is deprecated and will be removed from a future version. Please use '"+t+"' instead.")},c.shouldLog=function(e){return e<=r},c.setLog=function(e,t){void 0!==e&&(r=e),void 0!==t&&(o=s=t)},c}(),O=function(e){e=e||[]
var t=function(){for(var t=0;t<e.length;t++){var n=e[t]
if(n)try{n.apply(null,arguments)}catch(e){b.logAction(b.LOG_ERROR,"Multicaster multiple callback handler","Unexpected exception: "+e+"; stack = "+e.stack)}}}
return t.push=function(){Array.prototype.push.apply(e,arguments)},t},w=function(){function e(){}return e.levels=["fatal","error","warning","info","debug"],e.report=function(e,t,n,r){var i={event_id:y.randomHexString(16),tags:y.mixin({lib:h.libver},r),platform:"javascript",level:e,release:g.version,fingerprint:n&&[n],message:t,request:{headers:{"User-Agent":h.userAgent},url:h.currentUrl}}
b.logAction(b.LOG_MICRO,"ErrorReporter","POSTing to error reporter: "+t),C.postUri(null,g.errorReportingUrl,g.errorReportingHeaders,JSON.stringify(i),{},(function(e,t){b.logAction(b.LOG_MICRO,"ErrorReporter","POSTing to error reporter resulted in: "+(e?y.inspectError(e):y.inspectBody(t)))}))},e}(),_=function(){function e(e,t,n,r){this.message=e,this.code=t,this.statusCode=n,this.cause=r,this.href=void 0}return e.prototype.toString=function(){var e="["+this.constructor.name
return this.message&&(e+=": "+this.message),this.statusCode&&(e+="; statusCode="+this.statusCode),this.code&&(e+="; code="+this.code),this.cause&&(e+="; cause="+y.inspectError(this.cause)),!this.href||this.message&&this.message.indexOf("help.ably.io")>-1||(e+="; see "+this.href+" "),e+"]"},e.fromValues=function(t){var n=y.mixin(new e,t)
return t instanceof Error&&(n.message=t.message),n.code&&!n.href&&(n.href="https://help.ably.io/error/"+n.code),n},e}(),k=function(){function e(){this.name=void 0,this.id=void 0,this.timestamp=void 0,this.clientId=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.data=void 0,this.encoding=void 0,this.extras=void 0,this.size=void 0}function t(e){if(e&&e.cipher&&!e.cipher.channelCipher){if(!f)throw new Error("Encryption not enabled; use ably.encryption.js instead")
var t=f.getCipher(e.cipher)
e.cipher=t.cipherParams,e.channelCipher=t.cipher}}function n(e){var t=0
return e.name&&(t+=e.name.length),e.clientId&&(t+=e.clientId.length),e.extras&&(t+=JSON.stringify(e.extras).length),e.data&&(t+=y.dataSizeBytes(e.data)),t}return e.prototype.toJSON=function(){var e={name:this.name,id:this.id,clientId:this.clientId,connectionId:this.connectionId,connectionKey:this.connectionKey,encoding:this.encoding,extras:this.extras},t=this.data
if(t&&v.isBuffer(t))if(arguments.length>0){var n=this.encoding
e.encoding=n?n+"/base64":"base64",t=v.base64Encode(t)}else t=v.toBuffer(t)
return e.data=t,e},e.prototype.toString=function(){var e="[Message"
return this.name&&(e+="; name="+this.name),this.id&&(e+="; id="+this.id),this.timestamp&&(e+="; timestamp="+this.timestamp),this.clientId&&(e+="; clientId="+this.clientId),this.connectionId&&(e+="; connectionId="+this.connectionId),this.encoding&&(e+="; encoding="+this.encoding),this.extras&&(e+="; extras ="+JSON.stringify(this.extras)),this.data&&("string"==typeof this.data?e+="; data="+this.data:v.isBuffer(this.data)?e+="; data (buffer)="+v.base64Encode(this.data):e+="; data (json)="+JSON.stringify(this.data)),this.extras&&(e+="; extras="+JSON.stringify(this.extras)),e+"]"},e.encrypt=function(e,t,n){var r=e.data,i=e.encoding,o=t.channelCipher
i=i?i+"/":"",v.isBuffer(r)||(r=v.utf8Encode(String(r)),i+="utf-8/"),o.encrypt(r,(function(t,r){t?n(t):(e.data=r,e.encoding=i+"cipher+"+o.algorithm,n(null,e))}))},e.encode=function(t,n,r){var i,o=t.data
if("string"!=typeof o&&!v.isBuffer(o)&&null!=o){if(!y.isObject(o)&&!y.isArray(o))throw new _("Data type is unsupported",40013,400)
t.data=JSON.stringify(o),t.encoding=(i=t.encoding)?i+"/json":"json"}null!=n&&n.cipher?e.encrypt(t,n,r):r(null,t)},e.encodeArray=function(t,n,r){for(var i=0,o=0;o<t.length;o++)e.encode(t[o],n,(function(e,n){e?r(e):++i==t.length&&r(null,t)}))},e.serialize=y.encodeBody,e.decode=function(e,t){var n=e.encoding
if(n){var r,i=n.split("/"),o=i.length,s=e.data
try{for(;(r=o)>0;){var a=i[--o].match(/([\-\w]+)(\+([\w\-]+))?/)
if(!a)break
var c=a[1]
switch(c){case"base64":s=v.base64Decode(String(s))
continue
case"utf-8":s=v.utf8Decode(s)
continue
case"json":s=JSON.parse(s)
continue
case"cipher":if(null!=t&&t.cipher){var u=a[3],p=t.channelCipher
if(u!=p.algorithm)throw new Error("Unable to decrypt message with given cipher; incompatible cipher params")
s=p.decrypt(s)
continue}throw new Error("Unable to decrypt message; not an encrypted channel")
default:throw new Error("Unknown encoding")}break}}catch(e){throw new _("Error processing the "+c+" encoding, decoder returned ‘"+e.message+"’",40013,400)}finally{e.encoding=r<=0?null:i.slice(0,r).join("/"),e.data=s}}},e.fromResponseBody=function(t,n,r){r&&(t=y.decodeBody(t,r))
for(var i=0;i<t.length;i++){var o=t[i]=e.fromValues(t[i])
try{e.decode(o,n)}catch(e){b.logAction(b.LOG_ERROR,"Message.fromResponseBody()",e.toString())}}return t},e.fromValues=function(t){return y.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=e.fromValues(t[i])
return r},e.fromEncoded=function(n,r){var i=e.fromValues(n)
t(r)
try{e.decode(i,r)}catch(e){b.logAction(b.LOG_ERROR,"Message.fromEncoded()",e.toString())}return i},e.fromEncodedArray=function(n,r){return t(r),y.arrMap(n,(function(t){return e.fromEncoded(t,r)}))},e.getMessagesSize=function(e){for(var t,r=0,i=0;i<e.length;i++)r+=(t=e[i]).size||(t.size=n(t))
return r},e}(),E=function(){function e(e){return y.arrIndexOf(t.Actions,e)}function t(){this.action=void 0,this.id=void 0,this.timestamp=void 0,this.clientId=void 0,this.connectionId=void 0,this.data=void 0,this.encoding=void 0,this.size=void 0}return h.msgpack,t.Actions=["absent","present","enter","leave","update"],t.prototype.isSynthesized=function(){return this.id.substring(this.connectionId.length,0)!==this.connectionId},t.prototype.parseId=function(){var e=this.id.split(":")
return{connectionId:e[0],msgSerial:parseInt(e[1],10),index:parseInt(e[2],10)}},t.prototype.toJSON=function(){var t={clientId:this.clientId,action:e(this.action),encoding:this.encoding},n=this.data
if(n&&v.isBuffer(n))if(arguments.length>0){var r=this.encoding
t.encoding=r?r+"/base64":"base64",n=v.base64Encode(n)}else n=v.toBuffer(n)
return t.data=n,t},t.prototype.toString=function(){var e="[PresenceMessage"
return e+="; action="+this.action,this.id&&(e+="; id="+this.id),this.timestamp&&(e+="; timestamp="+this.timestamp),this.clientId&&(e+="; clientId="+this.clientId),this.connectionId&&(e+="; connectionId="+this.connectionId),this.encoding&&(e+="; encoding="+this.encoding),this.data&&("string"==typeof this.data?e+="; data="+this.data:v.isBuffer(this.data)?e+="; data (buffer)="+v.base64Encode(this.data):e+="; data (json)="+JSON.stringify(this.data)),e+"]"},t.encode=k.encode,t.decode=k.decode,t.fromResponseBody=function(e,n,r){r&&(e=y.decodeBody(e,r))
for(var i=0;i<e.length;i++){var o=e[i]=t.fromValues(e[i],!0)
try{t.decode(o,n)}catch(e){b.logAction(b.LOG_ERROR,"PresenceMessage.fromResponseBody()",e.toString())}}return e},t.fromValues=function(e,n){return n&&(e.action=t.Actions[e.action]),y.mixin(new t,e)},t.fromValuesArray=function(e){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=t.fromValues(e[i])
return r},t.fromEncoded=function(e,n){var r=t.fromValues(e,!0)
try{t.decode(r,n)}catch(e){b.logAction(b.LOG_ERROR,"PresenceMessage.fromEncoded()",e.toString())}return r},t.fromEncodedArray=function(e,n){return y.arrMap(e,(function(e){return t.fromEncoded(e,n)}))},t.getMessagesSize=k.getMessagesSize,t}(),P=function(){function e(){this.action=void 0,this.flags=void 0,this.id=void 0,this.timestamp=void 0,this.count=void 0,this.error=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.connectionSerial=void 0,this.channel=void 0,this.channelSerial=void 0,this.msgSerial=void 0,this.messages=void 0,this.presence=void 0,this.auth=void 0}var t=e.Action={HEARTBEAT:0,ACK:1,NACK:2,CONNECT:3,CONNECTED:4,DISCONNECT:5,DISCONNECTED:6,CLOSE:7,CLOSED:8,ERROR:9,ATTACH:10,ATTACHED:11,DETACH:12,DETACHED:13,PRESENCE:14,MESSAGE:15,SYNC:16,AUTH:17}
e.ActionName=[],y.arrForEach(y.keysArray(e.Action,!0),(function(n){e.ActionName[t[n]]=n}))
var n={HAS_PRESENCE:1,HAS_BACKLOG:2,RESUMED:4,TRANSIENT:16,PRESENCE:65536,PUBLISH:1<<17,SUBSCRIBE:1<<18,PRESENCE_SUBSCRIBE:1<<19},r=y.keysArray(n)
function i(e){var t=[]
if(e)for(var n=0;n<e.length;n++)t.push(e[n].toString())
return"[ "+t.join(", ")+" ]"}n.MODE_ALL=n.PRESENCE|n.PUBLISH|n.SUBSCRIBE|n.PRESENCE_SUBSCRIBE,e.prototype.hasFlag=function(e){return(this.flags&n[e])>0},e.prototype.setFlag=function(e){return this.flags=this.flags|n[e]},e.prototype.getMode=function(){return this.flags&&this.flags&n.MODE_ALL},e.serialize=y.encodeBody,e.deserialize=function(t,n){var r=y.decodeBody(t,n)
return e.fromDeserialized(r)},e.fromDeserialized=function(t){var n=t.error
n&&(t.error=_.fromValues(n))
var r=t.messages
if(r)for(var i=0;i<r.length;i++)r[i]=k.fromValues(r[i])
var o=t.presence
if(o)for(i=0;i<o.length;i++)o[i]=E.fromValues(o[i],!0)
return y.mixin(new e,t)},e.fromValues=function(t){return y.mixin(new e,t)}
var o="id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp".split(" ")
return e.stringify=function(t){var n,s="[ProtocolMessage"
void 0!==t.action&&(s+="; action="+e.ActionName[t.action]||!1)
for(var a=0;a<o.length;a++)n=o[a],void 0!==t[n]&&(s+="; "+n+"="+t[n])
return t.messages&&(s+="; messages="+i(k.fromValuesArray(t.messages))),t.presence&&(s+="; presence="+i(E.fromValuesArray(t.presence))),t.error&&(s+="; error="+_.fromValues(t.error).toString()),t.auth&&t.auth.accessToken&&(s+="; token="+t.auth.accessToken),t.flags&&(s+="; flags="+y.arrFilter(r,(function(e){return t.hasFlag(e)})).join(",")),s+"]"},e.isDuplicate=function(e,n){return e&&n&&(e.action===t.MESSAGE||e.action===t.PRESENCE)&&e.action===n.action&&e.channel===n.channel&&e.id===n.id},e}(),A=function(){function e(e){this.count=e&&e.count||0,this.data=e&&e.data||0,this.uncompressedData=e&&e.uncompressedData||0,this.failed=e&&e.failed||0,this.refused=e&&e.refused||0}function t(t){if(e.call(this,t),this.category=void 0,t&&t.category)for(var n in this.category={},t.category){var r=t.category[n]
Object.prototype.hasOwnProperty.call(t.category,n)&&r&&(this.category[n]=new e(r))}}function n(e){this.peak=e&&e.peak||0,this.min=e&&e.min||0,this.mean=e&&e.mean||0,this.opened=e&&e.opened||0,this.refused=e&&e.refused||0}function r(e){this.succeeded=e&&e.succeeded||0,this.failed=e&&e.failed||0,this.refused=e&&e.refused||0}function i(e){this.plain=new n(e&&e.plain),this.tls=new n(e&&e.tls),this.all=new n(e&&e.all)}function o(e){this.messages=new t(e&&e.messages),this.presence=new t(e&&e.presence),this.all=new t(e&&e.all)}function s(e){this.realtime=new o(e&&e.realtime),this.rest=new o(e&&e.rest),this.webhook=new o(e&&e.webhook),this.sharedQueue=new o(e&&e.sharedQueue),this.externalQueue=new o(e&&e.externalQueue),this.httpEvent=new o(e&&e.httpEvent),this.push=new o(e&&e.push),this.all=new o(e&&e.all)}function a(e){this.all=new o(e&&e.all),this.inbound=new s(e&&e.inbound),this.outbound=new s(e&&e.outbound)}function c(e){this.all=new o(e&&e.all),this.producerPaid=new a(e&&e.producerPaid),this.consumerPaid=new a(e&&e.consumerPaid)}function u(e){this.messages=e&&e.messages||0
var t=e&&e.notifications
this.notifications={invalid:t&&t.invalid||0,attempted:t&&t.attempted||0,successful:t&&t.successful||0,failed:t&&t.failed||0},this.directPublishes=e&&e.directPublishes||0}function p(e){this.succeeded=e&&e.succeeded||0,this.skipped=e&&e.skipped||0,this.failed=e&&e.failed||0}function l(e){if(this.delta=void 0,e&&e.delta)for(var t in this.delta={},e.delta){var n=e.delta[t]
Object.prototype.hasOwnProperty.call(e.delta,t)&&n&&(this.delta[t]=new p(n))}}function d(e){a.call(this,e),this.persisted=new o(e&&e.persisted),this.connections=new i(e&&e.connections),this.channels=new n(e&&e.channels),this.apiRequests=new r(e&&e.apiRequests),this.tokenRequests=new r(e&&e.tokenRequests),this.xchgProducer=new c(e&&e.xchgProducer),this.xchgConsumer=new c(e&&e.xchgConsumer),this.push=new u(e&&e.pushStats),this.processed=new l(e&&e.processed),this.inProgress=e&&e.inProgress||void 0,this.unit=e&&e.unit||void 0,this.intervalId=e&&e.intervalId||void 0}return d.fromValues=function(e){return new d(e)},d}(),M=function(){function e(){this.id=void 0,this.deviceSecret=void 0,this.platform=void 0,this.formFactor=void 0,this.clientId=void 0,this.metadata=void 0,this.deviceIdentityToken=void 0,this.push={recipient:void 0,state:void 0,errorReason:void 0}}return e.prototype.toJSON=function(){return{id:this.id,deviceSecret:this.deviceSecret,platform:this.platform,formFactor:this.formFactor,clientId:this.clientId,metadata:this.metadata,deviceIdentityToken:this.deviceIdentityToken,push:{recipient:this.push.recipient,state:this.push.state,errorReason:this.push.errorReason}}},e.prototype.toString=function(){var e="[DeviceDetails"
return this.id&&(e+="; id="+this.id),this.platform&&(e+="; platform="+this.platform),this.formFactor&&(e+="; formFactor="+this.formFactor),this.clientId&&(e+="; clientId="+this.clientId),this.metadata&&(e+="; metadata="+this.metadata),this.deviceIdentityToken&&(e+="; deviceIdentityToken="+JSON.stringify(this.deviceIdentityToken)),this.push.recipient&&(e+="; push.recipient="+JSON.stringify(this.push.recipient)),this.push.state&&(e+="; push.state="+this.push.state),this.push.errorReason&&(e+="; push.errorReason="+this.push.errorReason),this.push.metadata&&(e+="; push.metadata="+this.push.metadata),e+"]"},e.toRequestBody=y.encodeBody,e.fromResponseBody=function(t,n){return n&&(t=y.decodeBody(t,n)),y.isArray(t)?e.fromValuesArray(t):e.fromValues(t)},e.fromValues=function(t){return y.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=e.fromValues(t[i])
return r},e}(),I=function(){function e(){this.channel=void 0,this.deviceId=void 0,this.clientId=void 0}return e.prototype.toJSON=function(){return{channel:this.channel,deviceId:this.deviceId,clientId:this.clientId}},e.prototype.toString=function(){var e="[PushChannelSubscription"
return this.channel&&(e+="; channel="+this.channel),this.deviceId&&(e+="; deviceId="+this.deviceId),this.clientId&&(e+="; clientId="+this.clientId),e+"]"},e.toRequestBody=y.encodeBody,e.fromResponseBody=function(t,n){return n&&(t=y.decodeBody(t,n)),y.isArray(t)?e.fromValuesArray(t):e.fromValues(t)},e.fromValues=function(t){return y.mixin(new e,t)},e.fromValuesArray=function(t){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=e.fromValues(t[i])
return r},e}(),x={disconnected:_.fromValues({statusCode:400,code:80003,message:"Connection to server temporarily unavailable"}),suspended:_.fromValues({statusCode:400,code:80002,message:"Connection to server unavailable"}),failed:_.fromValues({statusCode:400,code:8e4,message:"Connection failed or disconnected by server"}),closing:_.fromValues({statusCode:400,code:80017,message:"Connection closing"}),closed:_.fromValues({statusCode:400,code:80017,message:"Connection closed"}),unknownConnectionErr:_.fromValues({statusCode:500,code:50002,message:"Internal connection error"}),unknownChannelErr:_.fromValues({statusCode:500,code:50001,message:"Internal channel error"})},L=function(){function e(){T.call(this),this.messages=[]}return y.inherits(e,T),e.prototype.count=function(){return this.messages.length},e.prototype.push=function(e){this.messages.push(e)},e.prototype.shift=function(){return this.messages.shift()},e.prototype.last=function(){return this.messages[this.messages.length-1]},e.prototype.copyAll=function(){return this.messages.slice()},e.prototype.append=function(e){this.messages.push.apply(this.messages,e)},e.prototype.prepend=function(e){this.messages.unshift.apply(this.messages,e)},e.prototype.completeMessages=function(e,t,n){b.logAction(b.LOG_MICRO,"MessageQueue.completeMessages()","serial = "+e+"; count = "+t),n=n||null
var r=this.messages,i=r[0]
if(i){var o=i.message.msgSerial,s=e+t
if(s>o)for(var a=r.splice(0,s-o),c=0;c<a.length;c++)a[c].callback(n)
0==r.length&&this.emit("idle")}},e.prototype.completeAllMessages=function(e){this.completeMessages(0,Number.MAX_SAFE_INTEGER||Number.MAX_VALUE,e)},e.prototype.clear=function(){b.logAction(b.LOG_MICRO,"MessageQueue.clear()","clearing "+this.messages.length+" messages"),this.messages=[],this.emit("idle")},e}(),D=function(){var e=P.Action
function t(e){T.call(this),this.transport=e,this.messageQueue=new L
var t=this
e.on("ack",(function(e,n){t.onAck(e,n)})),e.on("nack",(function(e,n,r){t.onNack(e,n,r)}))}return y.inherits(t,T),t.prototype.onAck=function(e,t){b.logAction(b.LOG_MICRO,"Protocol.onAck()","serial = "+e+"; count = "+t),this.messageQueue.completeMessages(e,t)},t.prototype.onNack=function(e,t,n){b.logAction(b.LOG_ERROR,"Protocol.onNack()","serial = "+e+"; count = "+t+"; err = "+y.inspectError(n)),n||(n=new _("Unable to send message; channel not responding",50001,500)),this.messageQueue.completeMessages(e,t,n)},t.prototype.onceIdle=function(e){var t=this.messageQueue
0!==t.count()?t.once("idle",e):e()},t.prototype.send=function(e){e.ackRequired&&this.messageQueue.push(e),b.shouldLog(b.LOG_MICRO)&&b.logAction(b.LOG_MICRO,"Protocol.send()","sending msg; "+P.stringify(e.message)),e.sendAttempted=!0,this.transport.send(e.message)},t.prototype.getTransport=function(){return this.transport},t.prototype.getPendingMessages=function(){return this.messageQueue.copyAll()},t.prototype.clearPendingMessages=function(){return this.messageQueue.clear()},t.prototype.finish=function(){var e=this.transport
this.onceIdle((function(){e.disconnect()}))},t.PendingMessage=function(t,n){this.message=t,this.callback=n,this.merged=!1
var r=t.action
this.sendAttempted=!1,this.ackRequired=r==e.MESSAGE||r==e.PRESENCE},t}(),N=function(){var e=!(void 0===m||!m.get),t=!(void 0===m||!m.getSession),n=P.Action,r=D.PendingMessage,i=function(){},o=g.transportPreferenceOrder,s=o[o.length-1]
function c(e,t,n,r){this.options=e,this.host=t,this.mode=n,this.connectionKey=r,this.format=e.useBinaryProtocol?"msgpack":"json",this.connectionSerial=void 0,this.timeSerial=void 0}function u(e,n){T.call(this),this.realtime=e,this.options=n
var r=n.timeouts,i=this,o=r.preferenceConnectTimeout+r.realtimeRequestTimeout
if(this.states={initialized:{state:"initialized",terminal:!1,queueEvents:!0,sendEvents:!1,failState:"disconnected"},connecting:{state:"connecting",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:o,failState:"disconnected"},connected:{state:"connected",terminal:!1,queueEvents:!1,sendEvents:!0,failState:"disconnected"},synchronizing:{state:"connected",terminal:!1,queueEvents:!0,sendEvents:!1,forceQueueEvents:!0,failState:"disconnected"},disconnected:{state:"disconnected",terminal:!1,queueEvents:!0,sendEvents:!1,retryDelay:r.disconnectedRetryTimeout,failState:"disconnected"},suspended:{state:"suspended",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:r.suspendedRetryTimeout,failState:"suspended"},closing:{state:"closing",terminal:!1,queueEvents:!1,sendEvents:!1,retryDelay:r.realtimeRequestTimeout,failState:"closed"},closed:{state:"closed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"closed"},failed:{state:"failed",terminal:!0,queueEvents:!1,sendEvents:!1,failState:"failed"}},this.state=this.states.initialized,this.errorReason=null,this.queuedMessages=new L,this.msgSerial=0,this.connectionDetails=void 0,this.connectionId=void 0,this.connectionKey=void 0,this.timeSerial=void 0,this.connectionSerial=void 0,this.connectionStateTtl=r.connectionStateTtl,this.maxIdleInterval=null,this.transports=y.intersect(n.transports||g.defaultTransports,u.supportedTransports),this.baseTransport=y.intersect(g.baseTransportOrder,this.transports)[0],this.upgradeTransports=y.intersect(this.transports,g.upgradeTransports),this.transportPreference=null,this.httpHosts=g.getHosts(n),this.activeProtocol=null,this.proposedTransports=[],this.pendingTransports=[],this.host=null,this.lastAutoReconnectAttempt=null,this.lastActivity=null,this.mostRecentMsg=null,this.forceFallbackHost=!1,this.connectCounter=0,b.logAction(b.LOG_MINOR,"Realtime.ConnectionManager()","started"),b.logAction(b.LOG_MICRO,"Realtime.ConnectionManager()","requested transports = ["+(n.transports||g.defaultTransports)+"]"),b.logAction(b.LOG_MICRO,"Realtime.ConnectionManager()","available transports = ["+this.transports+"]"),b.logAction(b.LOG_MICRO,"Realtime.ConnectionManager()","http hosts = ["+this.httpHosts+"]"),!this.transports.length){var s="no requested transports available"
throw b.logAction(b.LOG_ERROR,"realtime.ConnectionManager()",s),new Error(s)}var a=h.addEventListener
a&&(t&&"function"==typeof n.recover&&a("beforeunload",this.persistConnection.bind(this)),!0===n.closeOnUnload&&a("beforeunload",(function(){b.logAction(b.LOG_MAJOR,"Realtime.ConnectionManager()","beforeunload event has triggered the connection to close as closeOnUnload is true"),i.requestState({state:"closing"})})),a("online",(function(){i.state!=i.states.disconnected&&i.state!=i.states.suspended||(b.logAction(b.LOG_MINOR,"ConnectionManager caught browser ‘online’ event","reattempting connection"),i.requestState({state:"connecting"}))})),a("offline",(function(){i.state==i.states.connected&&(b.logAction(b.LOG_MINOR,"ConnectionManager caught browser ‘offline’ event","disconnecting active transport"),i.disconnectAllTransports())})))}return c.prototype.getConnectParams=function(e){var t=e?y.copy(e):{},n=this.options
switch(this.mode){case"upgrade":t.upgrade=this.connectionKey
break
case"resume":t.resume=this.connectionKey,void 0!==this.timeSerial?t.timeSerial=this.timeSerial:void 0!==this.connectionSerial&&(t.connectionSerial=this.connectionSerial)
break
case"recover":var r=n.recover.split(":")
if(r){t.recover=r[0]
var i=r[1]
isNaN(i)?t.timeSerial=i:t.connectionSerial=i}}return void 0!==n.clientId&&(t.clientId=n.clientId),!1===n.echoMessages&&(t.echo="false"),void 0!==this.format&&(t.format=this.format),void 0!==this.stream&&(t.stream=this.stream),void 0!==this.heartbeats&&(t.heartbeats=this.heartbeats),t.v=g.apiVersion,t.lib=g.libstring,void 0!==n.transportParams&&y.mixin(t,n.transportParams),t},c.prototype.toString=function(){var e="[mode="+this.mode
return this.host&&(e+=",host="+this.host),this.connectionKey&&(e+=",connectionKey="+this.connectionKey),void 0!==this.connectionSerial&&(e+=",connectionSerial="+this.connectionSerial),this.timeSerial&&(e+=",timeSerial="+this.timeSerial),this.format&&(e+=",format="+this.format),e+"]"},y.inherits(u,T),u.supportedTransports={},u.prototype.createTransportParams=function(e,t){var n=new c(this.options,e,t,this.connectionKey)
return this.timeSerial?n.timeSerial=this.timeSerial:void 0!==this.connectionSerial&&(n.connectionSerial=this.connectionSerial),n},u.prototype.getTransportParams=function(e){var n=this
!function(e){if(n.connectionKey)e("resume")
else if("string"!=typeof n.options.recover){var r=n.options.recover,i=t&&m.getSession("ably-connection-recovery")
if(i&&"function"==typeof r)return b.logAction(b.LOG_MINOR,"ConnectionManager.getTransportParams()","Calling clientOptions-provided recover function with last session data"),void r(i,(function(t){t?(n.options.recover=i.recoveryKey,e("recover")):e("clean")}))
e("clean")}else e("recover")}((function(t){var r=n.createTransportParams(null,t)
if("recover"===t){b.logAction(b.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport recovery mode = recover; recoveryKey = "+n.options.recover)
var i=n.options.recover.split(":")
i&&i[2]&&(n.msgSerial=i[2])}else b.logAction(b.LOG_MINOR,"ConnectionManager.getTransportParams()","Transport params = "+r.toString())
e(r)}))},u.prototype.tryATransport=function(e,t,n){var r=this
e.host,b.logAction(b.LOG_MICRO,"ConnectionManager.tryATransport()","trying "+t),u.supportedTransports[t].tryConnect(this,this.realtime.auth,e,(function(i,o){var s=r.state
return s==r.states.closing||s==r.states.closed||s==r.states.failed?(o&&(b.logAction(b.LOG_MINOR,"ConnectionManager.tryATransport()","connection "+s.state+" while we were attempting the transport; closing "+o),o.close()),void n(!0)):i?(b.logAction(b.LOG_MINOR,"ConnectionManager.tryATransport()","transport "+t+" "+i.event+", err: "+i.error.toString()),void(F.isTokenErr(i.error)?r.realtime.auth._forceNewToken(null,null,(function(i){i?r.actOnErrorFromAuthorize(i):r.tryATransport(e,t,n)})):"failed"===i.event?(r.notifyState({state:"failed",error:i.error}),n(!0)):"disconnected"===i.event&&n(!1))):(b.logAction(b.LOG_MICRO,"ConnectionManager.tryATransport()","viable transport "+t+"; setting pending"),r.setTransportPending(o,e),void n(null,o))}))},u.prototype.setTransportPending=function(e,t){var n=t.mode
b.logAction(b.LOG_MINOR,"ConnectionManager.setTransportPending()","transport = "+e+"; mode = "+n),y.arrDeleteValue(this.proposedTransports,e),this.pendingTransports.push(e)
var r=this
e.once("connected",(function(i,o,a,c){"upgrade"==n&&r.activeProtocol?e.shortName!==s&&y.arrIn(r.getUpgradePossibilities(),s)?setTimeout((function(){r.scheduleTransportActivation(i,e,o,a,c)}),r.options.timeouts.parallelUpgradeDelay):r.scheduleTransportActivation(i,e,o,a,c):(r.activateTransport(i,e,o,a,c),y.nextTick((function(){r.connectImpl(t)}))),"recover"===n&&r.options.recover&&(r.options.recover=null,r.unpersistConnection())})),e.on(["disconnected","closed","failed"],(function(t){r.deactivateTransport(e,this.event,t)})),this.emit("transport.pending",e)},u.prototype.scheduleTransportActivation=function(e,t,n,r,i){var s,a,c=this,u=this.activeProtocol&&this.activeProtocol.getTransport(),p=function(){t.disconnect(),y.arrDeleteValue(c.pendingTransports,t)}
return this.state!==this.states.connected&&this.state!==this.states.connecting?(b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Current connection state ("+this.state.state+(this.state===this.states.synchronizing?", but with an upgrade already in progress":"")+") is not valid to upgrade in; abandoning upgrade to "+t.shortName),void p()):!u||(s=t,a=u,y.arrIndexOf(o,s.shortName)>y.arrIndexOf(o,a.shortName))?(b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Scheduling transport upgrade; transport = "+t),void this.realtime.channels.onceNopending((function(o){var s
if(o)b.logAction(b.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Unable to activate transport; transport = "+t+"; err = "+o)
else{if(!t.isConnected)return b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Proposed transport "+t.shortName+"is no longer connected; abandoning upgrade"),void p()
if(c.state===c.states.connected)b.logAction(b.LOG_MICRO,"ConnectionManager.scheduleTransportActivation()","Currently connected, so temporarily pausing events until the upgrade is complete"),c.state=c.states.synchronizing,s=c.activeProtocol
else if(c.state!==c.states.connecting)return b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Current connection state ("+c.state.state+(c.state===c.states.synchronizing?", but with an upgrade already in progress":"")+") is not valid to upgrade in; abandoning upgrade to "+t.shortName),void p()
var a=n!==c.connectionId,u=a?i:c
a&&b.logAction(b.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Upgrade resulted in new connectionId; resetting library connection position from "+(c.timeSerial||c.connectionSerial)+" to "+(u.timeSerial||u.connectionSerial)+"; upgrade error was "+e),b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Syncing transport; transport = "+t),c.sync(t,u,(function(n,i,o){if(n)c.state===c.states.synchronizing&&(b.logAction(b.LOG_ERROR,"ConnectionManager.scheduleTransportActivation()","Unexpected error attempting to sync transport; transport = "+t+"; err = "+n),c.disconnectAllTransports())
else{var a=function(){b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Activating transport; transport = "+t),c.activateTransport(e,t,i,r,o),c.state===c.states.synchronizing?(b.logAction(b.LOG_MICRO,"ConnectionManager.scheduleTransportActivation()","Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = "+t),c.state=c.states.connected):b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Pre-upgrade protocol idle, but state is now "+c.state.state+", so leaving unchanged"),c.state.sendEvents&&c.sendQueuedMessages()}
s?s.onceIdle(a):a()}}))}}))):(b.logAction(b.LOG_MINOR,"ConnectionManager.scheduleTransportActivation()","Proposed transport "+t.shortName+" is no better than current active transport "+u.shortName+" - abandoning upgrade"),void p())},u.prototype.activateTransport=function(e,t,n,r,i){b.logAction(b.LOG_MINOR,"ConnectionManager.activateTransport()","transport = "+t),e&&b.logAction(b.LOG_ERROR,"ConnectionManager.activateTransport()","error = "+e),n&&b.logAction(b.LOG_MICRO,"ConnectionManager.activateTransport()","connectionId =  "+n),r&&b.logAction(b.LOG_MICRO,"ConnectionManager.activateTransport()","connectionDetails =  "+JSON.stringify(r)),i&&b.logAction(b.LOG_MICRO,"ConnectionManager.activateTransport()","serial =  "+(i.timeSerial||i.connectionSerial)),this.persistTransportPreference(t)
var o=this.state,s=this.states.connected.state
if(b.logAction(b.LOG_MINOR,"ConnectionManager.activateTransport()","current state = "+o.state),o.state==this.states.closing.state||o.state==this.states.closed.state||o.state==this.states.failed.state)return b.logAction(b.LOG_MINOR,"ConnectionManager.activateTransport()","Disconnecting transport and abandoning"),t.disconnect(),!1
if(y.arrDeleteValue(this.pendingTransports,t),!t.isConnected)return b.logAction(b.LOG_MINOR,"ConnectionManager.activateTransport()","Declining to activate transport "+t+" since it appears to no longer be connected"),!1
var a=this.activeProtocol
this.activeProtocol=new D(t),this.host=t.params.host
var c=r.connectionKey
c&&this.connectionKey!=c&&this.setConnection(n,r,i,!!e),this.onConnectionDetailsUpdate(r,t)
var u=this
if(y.nextTick((function(){t.on("connected",(function(e,n,r){u.onConnectionDetailsUpdate(r,t),u.emit("update",new V(s,s,null,e))}))})),o.state===this.states.connected.state?e&&(this.errorReason=this.realtime.connection.errorReason=e,this.emit("update",new V(s,s,null,e))):(this.notifyState({state:"connected",error:e}),this.errorReason=this.realtime.connection.errorReason=e||null),this.emit("transport.active",t),a)if(a.messageQueue.count()>0&&b.logAction(b.LOG_ERROR,"ConnectionManager.activateTransport()","Previous active protocol (for transport "+a.transport.shortName+", new one is "+t.shortName+") finishing with "+a.messageQueue.count()+" messages still pending"),a.transport===t){var p="Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = "+t.shortName+"; stack = "+(new Error).stack
b.logAction(b.LOG_ERROR,"ConnectionManager.activateTransport()",p),w.report("error",p,"transport-previously-active")}else a.finish()
return y.safeArrForEach(this.pendingTransports,(function(e){if(e===t){var n="Assumption violated: activating a transport that is still marked as a pending transport; transport = "+t.shortName+"; stack = "+(new Error).stack
b.logAction(b.LOG_ERROR,"ConnectionManager.activateTransport()",n),w.report("error",n,"transport-activating-pending"),y.arrDeleteValue(u.pendingTransports,t)}else e.disconnect()})),y.safeArrForEach(this.proposedTransports,(function(e){if(e===t){var n="Assumption violated: activating a transport that is still marked as a proposed transport; transport = "+t.shortName+"; stack = "+(new Error).stack
b.logAction(b.LOG_ERROR,"ConnectionManager.activateTransport()",n),w.report("error",n,"transport-activating-proposed"),y.arrDeleteValue(u.proposedTransports,t)}else e.dispose()})),!0},u.prototype.deactivateTransport=function(e,t,n){var r=this.activeProtocol,i=r&&r.getTransport()===e,o=y.arrDeleteValue(this.pendingTransports,e),s=y.arrDeleteValue(this.proposedTransports,e),a=this.noTransportsScheduledForActivation()
if(b.logAction(b.LOG_MINOR,"ConnectionManager.deactivateTransport()","transport = "+e),b.logAction(b.LOG_MINOR,"ConnectionManager.deactivateTransport()","state = "+t+(i?"; was active":o?"; was pending":s?"; was proposed":"")+(a?"":"; another transport is scheduled for activation")),n&&n.message&&b.logAction(b.LOG_MICRO,"ConnectionManager.deactivateTransport()","reason =  "+n.message),i&&(b.logAction(b.LOG_MICRO,"ConnectionManager.deactivateTransport()","Getting, clearing, and requeuing "+this.activeProtocol.messageQueue.count()+" pending messages"),this.queuePendingMessages(r.getPendingMessages()),y.nextTick((function(){r.clearPendingMessages()})),this.activeProtocol=this.host=null,clearTimeout(this.channelResumeCheckTimer)),this.emit("transport.inactive",e),i&&a||i&&"failed"===t||"closed"===t||null===r&&o&&0===this.pendingTransports.length){if("disconnected"===t&&n&&n.statusCode>500&&this.httpHosts.length>1)return this.unpersistTransportPreference(),this.forceFallbackHost=!0,void this.notifyState({state:t,error:n,retryImmediately:!0})
var c="failed"===t&&F.isTokenErr(n)?"disconnected":t
this.notifyState({state:c,error:n})}else i&&"disconnected"===t&&this.state!==this.states.synchronizing&&(b.logAction(b.LOG_MICRO,"ConnectionManager.deactivateTransport()","wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"),this.startSuspendTimer(),this.startTransitionTimer(this.states.connecting),this.notifyState({state:"connecting",error:n}))},u.prototype.noTransportsScheduledForActivation=function(){return y.isEmpty(this.pendingTransports)||this.pendingTransports.every((function(e){return!e.isConnected}))},u.prototype.sync=function(e,t,r){var i=setTimeout((function(){e.off("sync"),r(new _("Timeout waiting for sync response",5e4,500))}),this.options.timeouts.realtimeRequestTimeout),o=P.fromValues({action:n.SYNC,connectionKey:this.connectionKey})
t.timeSerial?o.timeSerial=t.timeSerial:void 0!==t.connectionSerial&&(o.connectionSerial=t.connectionSerial),e.send(o),e.once("sync",(function(e,t){clearTimeout(i),r(null,e,t)}))},u.prototype.setConnection=function(e,t,n,r){var i=this,o=this.connectionid,s=o&&o!==e;(s||!o&&r)&&(b.logAction(b.LOG_MINOR,"ConnectionManager.setConnection()","Resetting msgSerial"),this.msgSerial=0),this.connectionId!==e?(b.logAction(b.LOG_MINOR,"ConnectionManager.setConnection()","New connectionId; reattaching any attached channels"),y.nextTick((function(){i.realtime.channels.reattach()}))):this.options.checkChannelsOnResume&&(b.logAction(b.LOG_MINOR,"ConnectionManager.setConnection()","Same connectionId; checkChannelsOnResume is enabled"),clearTimeout(this.channelResumeCheckTimer),this.realtime.channels.resetAttachedMsgIndicators(),this.channelResumeCheckTimer=setTimeout((function(){i.realtime.channels.checkAttachedMsgIndicators(e)}),3e4)),this.realtime.connection.id=this.connectionId=e,this.realtime.connection.key=this.connectionKey=t.connectionKey
var a=s||!o
this.setConnectionSerial(n,a)},u.prototype.clearConnection=function(){this.realtime.connection.id=this.connectionId=void 0,this.realtime.connection.key=this.connectionKey=void 0,this.clearConnectionSerial(),this.msgSerial=0,this.unpersistConnection()},u.prototype.setConnectionSerial=function(e,t){var n=e.timeSerial,r=e.connectionSerial
if(b.logAction(b.LOG_MICRO,"ConnectionManager.setConnectionSerial()","Updating connection serial; serial = "+r+"; timeSerial = "+n+"; force = "+t+"; previous = "+this.connectionSerial),void 0!==n)return n<=this.timeSerial&&!t?(b.logAction(b.LOG_ERROR,"ConnectionManager.setConnectionSerial()","received message with timeSerial "+n+", but current timeSerial is "+this.timeSerial+"; assuming message is a duplicate and discarding it"),!0):(this.realtime.connection.timeSerial=this.timeSerial=n,void this.setRecoveryKey())
if(void 0!==r){if(r<=this.connectionSerial&&!t)return b.logAction(b.LOG_ERROR,"ConnectionManager.setConnectionSerial()","received message with connectionSerial "+r+", but current connectionSerial is "+this.connectionSerial+"; assuming message is a duplicate and discarding it"),!0
this.realtime.connection.serial=this.connectionSerial=r,this.setRecoveryKey()}},u.prototype.clearConnectionSerial=function(){this.realtime.connection.serial=this.connectionSerial=void 0,this.realtime.connection.timeSerial=this.timeSerial=void 0,this.clearRecoveryKey()},u.prototype.setRecoveryKey=function(){this.realtime.connection.recoveryKey=this.connectionKey+":"+(this.timeSerial||this.connectionSerial)+":"+this.msgSerial},u.prototype.clearRecoveryKey=function(){this.realtime.connection.recoveryKey=null},u.prototype.checkConnectionStateFreshness=function(){if(this.lastActivity&&this.connectionId){var e=y.now()-this.lastActivity
e>this.connectionStateTtl+this.maxIdleInterval&&(b.logAction(b.LOG_MINOR,"ConnectionManager.checkConnectionStateFreshness()","Last known activity from realtime was "+e+"ms ago; discarding connection state"),this.clearConnection(),this.states.connecting.failState="suspended",this.states.connecting.queueEvents=!1)}},u.prototype.persistConnection=function(){if(t){var e=this.realtime.connection.recoveryKey
e&&(n={recoveryKey:e,disconnectedAt:y.now(),location:a.location,clientId:this.realtime.auth.clientId},this.connectionStateTtl,t&&m.setSession("ably-connection-recovery",n))}var n},u.prototype.unpersistConnection=function(){t&&m.removeSession("ably-connection-recovery")},u.prototype.getError=function(){return this.errorReason||this.getStateError()},u.prototype.getStateError=function(){return x[this.state.state]},u.prototype.activeState=function(){return this.state.queueEvents||this.state.sendEvents},u.prototype.enactStateChange=function(e){var t="failed"===e.current?b.LOG_ERROR:b.LOG_MAJOR
b.logAction(t,"Connection state",e.current+(e.reason?"; reason: "+e.reason:"")),b.logAction(b.LOG_MINOR,"ConnectionManager.enactStateChange","setting new state: "+e.current+"; reason = "+(e.reason&&e.reason.message))
var n=this.state=this.states[e.current]
e.reason&&(this.errorReason=e.reason,this.realtime.connection.errorReason=e.reason),(n.terminal||"suspended"===n.state)&&this.clearConnection(),this.emit("connectionstate",e)},u.prototype.startTransitionTimer=function(e){b.logAction(b.LOG_MINOR,"ConnectionManager.startTransitionTimer()","transitionState: "+e.state),this.transitionTimer&&(b.logAction(b.LOG_MINOR,"ConnectionManager.startTransitionTimer()","clearing already-running timer"),clearTimeout(this.transitionTimer))
var t=this
this.transitionTimer=setTimeout((function(){t.transitionTimer&&(t.transitionTimer=null,b.logAction(b.LOG_MINOR,"ConnectionManager "+e.state+" timer expired","requesting new state: "+e.failState),t.notifyState({state:e.failState}))}),e.retryDelay)},u.prototype.cancelTransitionTimer=function(){b.logAction(b.LOG_MINOR,"ConnectionManager.cancelTransitionTimer()",""),this.transitionTimer&&(clearTimeout(this.transitionTimer),this.transitionTimer=null)},u.prototype.startSuspendTimer=function(){var e=this
this.suspendTimer||(this.suspendTimer=setTimeout((function(){e.suspendTimer&&(e.suspendTimer=null,b.logAction(b.LOG_MINOR,"ConnectionManager suspend timer expired","requesting new state: suspended"),e.states.connecting.failState="suspended",e.states.connecting.queueEvents=!1,e.notifyState({state:"suspended"}))}),this.connectionStateTtl))},u.prototype.checkSuspendTimer=function(e){"disconnected"!==e&&"suspended"!==e&&"connecting"!==e&&this.cancelSuspendTimer()},u.prototype.cancelSuspendTimer=function(){this.states.connecting.failState="disconnected",this.states.connecting.queueEvents=!0,this.suspendTimer&&(clearTimeout(this.suspendTimer),this.suspendTimer=null)},u.prototype.startRetryTimer=function(e){var t=this
this.retryTimer=setTimeout((function(){b.logAction(b.LOG_MINOR,"ConnectionManager retry timer expired","retrying"),t.retryTimer=null,t.requestState({state:"connecting"})}),e)},u.prototype.cancelRetryTimer=function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.retryTimer=null)},u.prototype.notifyState=function(e){var t=e.state,n=this,r="disconnected"===t&&(this.state===this.states.connected||this.state===this.states.synchronizing||e.retryImmediately||this.state===this.states.connecting&&e.error&&F.isTokenErr(e.error)&&!(this.errorReason&&F.isTokenErr(this.errorReason)))
if(b.logAction(b.LOG_MINOR,"ConnectionManager.notifyState()","new state: "+t+(r?"; will retry connection immediately":"")),t!=this.state.state&&(this.cancelTransitionTimer(),this.cancelRetryTimer(),this.checkSuspendTimer(e.state),!this.state.terminal)){var i=this.states[e.state],o=new V(this.state.state,i.state,i.retryDelay,e.error||x[i.state])
if(r){var s=function(){n.state===n.states.disconnected&&(n.lastAutoReconnectAttempt=y.now(),n.requestState({state:"connecting"}))},a=this.lastAutoReconnectAttempt&&y.now()-this.lastAutoReconnectAttempt+1
a&&a<1e3?(b.logAction(b.LOG_MICRO,"ConnectionManager.notifyState()","Last reconnect attempt was only "+a+"ms ago, waiting another "+(1e3-a)+"ms before trying again"),setTimeout(s,1e3-a)):y.nextTick(s)}else"disconnected"!==t&&"suspended"!==t||this.startRetryTimer(i.retryDelay);("disconnected"===t&&!r||"suspended"===t||i.terminal)&&y.nextTick((function(){n.disconnectAllTransports()})),"connected"!=t||this.activeProtocol||b.logAction(b.LOG_ERROR,"ConnectionManager.notifyState()","Broken invariant: attempted to go into connected state, but there is no active protocol"),this.enactStateChange(o),this.state.sendEvents?this.sendQueuedMessages():this.state.queueEvents||(this.realtime.channels.propogateConnectionInterruption(t,o.reason),this.failQueuedMessages(o.reason))}},u.prototype.requestState=function(e){var t=e.state,n=this
if(b.logAction(b.LOG_MINOR,"ConnectionManager.requestState()","requested state: "+t+"; current state: "+this.state.state),t!=this.state.state&&(this.cancelTransitionTimer(),this.cancelRetryTimer(),this.checkSuspendTimer(t),!("connecting"==t&&"connected"==this.state.state||"closing"==t&&"closed"==this.state.state))){var r=this.states[t],i=new V(this.state.state,r.state,null,e.error||x[r.state])
this.enactStateChange(i),"connecting"==t&&y.nextTick((function(){n.startConnect()})),"closing"==t&&this.closeImpl()}},u.prototype.startConnect=function(){if(this.state===this.states.connecting){var e=this.realtime.auth,t=this,n=++this.connectCounter,r=function(){t.checkConnectionStateFreshness(),t.getTransportParams((function(e){n===t.connectCounter&&t.connectImpl(e,n)}))}
if(b.logAction(b.LOG_MINOR,"ConnectionManager.startConnect()","starting connection"),this.startSuspendTimer(),this.startTransitionTimer(this.states.connecting),"basic"===e.method)r()
else{var i=function(e){n===t.connectCounter&&(e?t.actOnErrorFromAuthorize(e):r())}
this.errorReason&&F.isTokenErr(this.errorReason)?e._forceNewToken(null,null,i):e._ensureValidAuthCredentials(!1,i)}}else b.logAction(b.LOG_MINOR,"ConnectionManager.startConnect()","Must be in connecting state to connect, but was "+this.state.state)},u.prototype.connectImpl=function(e,t){var n=this.state.state
n!==this.states.connecting.state&&n!==this.states.connected.state?b.logAction(b.LOG_MINOR,"ConnectionManager.connectImpl()","Must be in connecting state to connect (or connected to upgrade), but was "+n):this.pendingTransports.length?b.logAction(b.LOG_MINOR,"ConnectionManager.connectImpl()","Transports "+this.pendingTransports[0].toString()+" currently pending; taking no action"):n==this.states.connected.state?this.upgradeIfNeeded(e):this.transports.length>1&&this.getTransportPreference()?this.connectPreference(e):this.connectBase(e,t)},u.prototype.connectPreference=function(e){var t=this.getTransportPreference(),n=this,r=!1
y.arrIn(this.transports,t)||(this.unpersistTransportPreference(),this.connectImpl(e)),b.logAction(b.LOG_MINOR,"ConnectionManager.connectPreference()","Trying to connect with stored transport preference "+t)
var i=setTimeout((function(){r=!0,n.state.state!==n.states.connected.state&&(b.logAction(b.LOG_MINOR,"ConnectionManager.connectPreference()","Shortcircuit connection attempt with "+t+" failed; clearing preference and trying from scratch"),n.disconnectAllTransports(),n.unpersistTransportPreference()),n.connectImpl(e)}),this.options.timeouts.preferenceConnectTimeout)
e.host=n.httpHosts[0],n.tryATransport(e,t,(function(t,o){clearTimeout(i),r&&o?(o.off(),o.disconnect(),y.arrDeleteValue(this.pendingTransports,o)):o||t||(n.unpersistTransportPreference(),n.connectImpl(e))}))},u.prototype.connectBase=function(e,t){var n=this,r=function(e){n.notifyState({state:n.states.connecting.failState,error:e})},i=this.httpHosts.slice(),o=function(e,r){t===n.connectCounter&&(r||e||a())}
b.logAction(b.LOG_MINOR,"ConnectionManager.connectBase()","Trying to connect with base transport "+this.baseTransport)
var s=i.shift()
if(s){if(e.host=s,this.forceFallbackHost&&i.length)return this.forceFallbackHost=!1,void a()
this.tryATransport(e,this.baseTransport,o)}else r(new _("Unable to connect (no available host)",80003,404))
function a(){i.length?C.checkConnectivity((function(s,a){t===n.connectCounter&&(s?r(s):a?(e.host=y.arrPopRandomElement(i),n.tryATransport(e,n.baseTransport,o)):r(new _("Unable to connect (network unreachable)",80003,404)))})):r(new _("Unable to connect (and no more fallback hosts to try)",80003,404))}},u.prototype.getUpgradePossibilities=function(){var e=this.activeProtocol.getTransport().shortName,t=y.arrIndexOf(this.upgradeTransports,e)
return this.upgradeTransports.slice(t+1)},u.prototype.upgradeIfNeeded=function(e){var t=this.getUpgradePossibilities(),n=this
b.logAction(b.LOG_MINOR,"ConnectionManager.upgradeIfNeeded()","upgrade possibilities: "+y.inspect(t)),t.length&&y.arrForEach(t,(function(t){var r=n.createTransportParams(e.host,"upgrade")
n.tryATransport(r,t,i)}))},u.prototype.closeImpl=function(){b.logAction(b.LOG_MINOR,"ConnectionManager.closeImpl()","closing connection"),this.cancelSuspendTimer(),this.startTransitionTimer(this.states.closing),y.safeArrForEach(this.pendingTransports,(function(e){b.logAction(b.LOG_MICRO,"ConnectionManager.closeImpl()","Closing pending transport: "+e),e&&e.close()})),y.safeArrForEach(this.proposedTransports,(function(e){b.logAction(b.LOG_MICRO,"ConnectionManager.closeImpl()","Disposing of proposed transport: "+e),e&&e.dispose()})),this.activeProtocol&&(b.logAction(b.LOG_MICRO,"ConnectionManager.closeImpl()","Closing active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().close()),this.notifyState({state:"closed"})},u.prototype.onAuthUpdated=function(e,t){var r=this
switch(this.state.state){case"connected":if(b.logAction(b.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Sending AUTH message on active transport"),(this.pendingTransports.length||this.proposedTransports.length)&&r.state!==r.states.synchronizing){this.disconnectAllTransports(!0)
var i=this.activeProtocol.getTransport().params
y.nextTick((function(){"connected"===r.state.state&&r.upgradeIfNeeded(i)}))}this.activeProtocol.getTransport().onAuthUpdated(e)
var o=P.fromValues({action:n.AUTH,auth:{accessToken:e.token}})
this.send(o)
var s=function(){r.off(a),t(null,e)},a=function e(n){"failed"===n.current&&(r.off(s),r.off(e),t(n.reason||r.getStateError()))}
this.once("connectiondetails",s),this.on("connectionstate",a)
break
case"connecting":b.logAction(b.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Aborting current connection attempts in order to start again with the new auth details"),this.disconnectAllTransports()
default:b.logAction(b.LOG_MICRO,"ConnectionManager.onAuthUpdated()","Connection state is "+this.state.state+"; waiting until either connected or failed"),r.on("connectionstate",(function n(i){switch(i.current){case"connected":r.off(n),t(null,e)
break
case"failed":case"closed":case"suspended":r.off(n),t(i.reason||r.getStateError())}})),"connecting"===this.state.state?r.startConnect():r.requestState({state:"connecting"})}},u.prototype.disconnectAllTransports=function(e){b.logAction(b.LOG_MINOR,"ConnectionManager.disconnectAllTransports()","Disconnecting all transports"+(e?" except the active transport":"")),this.connectCounter++,y.safeArrForEach(this.pendingTransports,(function(e){b.logAction(b.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting pending transport: "+e),e&&e.disconnect()})),this.pendingTransports=[],y.safeArrForEach(this.proposedTransports,(function(e){b.logAction(b.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disposing of proposed transport: "+e),e&&e.dispose()})),this.proposedTransports=[],this.activeProtocol&&!e&&(b.logAction(b.LOG_MICRO,"ConnectionManager.disconnectAllTransports()","Disconnecting active transport: "+this.activeProtocol.getTransport()),this.activeProtocol.getTransport().disconnect())},u.prototype.send=function(e,t,n){n=n||i
var o=this.state
if(o.sendEvents)return b.logAction(b.LOG_MICRO,"ConnectionManager.send()","sending event"),void this.sendImpl(new r(e,n))
if(!(t&&o.queueEvents||o.forceQueueEvents)){var s="rejecting event, queueEvent was "+t+", state was "+o.state
return b.logAction(b.LOG_MICRO,"ConnectionManager.send()",s),void n(this.errorReason||new _(s,9e4,400))}b.shouldLog(b.LOG_MICRO)&&b.logAction(b.LOG_MICRO,"ConnectionManager.send()","queueing msg; "+P.stringify(e)),this.queue(e,n)},u.prototype.sendImpl=function(e){var t=e.message
e.ackRequired&&!e.sendAttempted&&(t.msgSerial=this.msgSerial++,this.setRecoveryKey())
try{this.activeProtocol.send(e)}catch(e){b.logAction(b.LOG_ERROR,"ConnectionManager.sendImpl()","Unexpected exception in transport.send(): "+e.stack)}},u.prototype.queue=function(e,t){b.logAction(b.LOG_MICRO,"ConnectionManager.queue()","queueing event")
var i=this.queuedMessages.last(),o=this.options.maxMessageSize
i&&!i.sendAttempted&&function(e,t,r){var i
if(e.channel!==t.channel)return!1
if((i=e.action)!==n.PRESENCE&&i!==n.MESSAGE)return!1
if(i!==t.action)return!1
var o=i===n.PRESENCE?"presence":"messages",s=e[o].concat(t[o])
return!(k.getMessagesSize(s)>r||!y.allSame(s,"clientId")||!y.arrEvery(s,(function(e){return!e.id}))||(e[o]=s,0))}(i.message,e,o)?(i.merged||(i.callback=O([i.callback]),i.merged=!0),i.callback.push(t)):this.queuedMessages.push(new r(e,t))},u.prototype.sendQueuedMessages=function(){var e
for(b.logAction(b.LOG_MICRO,"ConnectionManager.sendQueuedMessages()","sending "+this.queuedMessages.count()+" queued messages");e=this.queuedMessages.shift();)this.sendImpl(e)},u.prototype.queuePendingMessages=function(e){e&&e.length&&(b.logAction(b.LOG_MICRO,"ConnectionManager.queuePendingMessages()","queueing "+e.length+" pending messages"),this.queuedMessages.prepend(e))},u.prototype.failQueuedMessages=function(e){var t=this.queuedMessages.count()
t>0&&(b.logAction(b.LOG_ERROR,"ConnectionManager.failQueuedMessages()","failing "+t+" queued messages, err = "+y.inspectError(e)),this.queuedMessages.completeAllMessages(e))},u.prototype.onChannelMessage=function(e,t){var r=this.activeProtocol&&t===this.activeProtocol.getTransport(),i=y.arrIn(this.pendingTransports,t)&&this.state==this.states.synchronizing,o=e.action===n.MESSAGE||e.action===n.PRESENCE
if(r||i){if(o){if(this.setConnectionSerial(e))return
if(P.isDuplicate(e,this.mostRecentMsg))return void b.logAction(b.LOG_ERROR,"ConnectionManager.onChannelMessage()","received message with different connectionSerial, but same message id as a previous; discarding; id = "+e.id)
this.mostRecentMsg=e}this.realtime.channels.onChannelMessage(e)}else y.arrIndexOf([n.ACK,n.NACK,n.ERROR],e.action)>-1?this.realtime.channels.onChannelMessage(e):b.logAction(b.LOG_MICRO,"ConnectionManager.onChannelMessage()","received message "+JSON.stringify(e)+"on defunct transport; discarding")},u.prototype.ping=function(e,t){if(e){b.logAction(b.LOG_MINOR,"ConnectionManager.ping()","transport = "+e)
var n=y.now(),r=y.cheapRandStr(),i=function i(s){if(s===r){e.off("heartbeat",i),clearTimeout(o)
var a=y.now()-n
t(null,a)}},o=setTimeout((function(){e.off("heartbeat",i),t(new _("Timeout waiting for heartbeat response",5e4,500))}),this.options.timeouts.realtimeRequestTimeout)
return e.on("heartbeat",i),void e.ping(r)}if("connected"===this.state.state){var s=!1,a=this,c=function(){s||(s=!0,y.nextTick((function(){a.ping(null,t)})))}
this.on("transport.active",c),this.ping(this.activeProtocol.getTransport(),(function(e,n){a.off("transport.active",c),s||(s=!0,t(e,n))}))}else t(new _("Unable to ping service; not connected",4e4,400))},u.prototype.abort=function(e){this.activeProtocol.getTransport().fail(e)},u.prototype.registerProposedTransport=function(e){this.proposedTransports.push(e)},u.prototype.getTransportPreference=function(){return this.transportPreference||e&&m.get("ably-transport-preference")},u.prototype.persistTransportPreference=function(t){y.arrIn(g.upgradeTransports,t.shortName)&&(this.transportPreference=t.shortName,e&&m.set("ably-transport-preference",t.shortName))},u.prototype.unpersistTransportPreference=function(){this.transportPreference=null,e&&m.remove("ably-transport-preference")},u.prototype.actOnErrorFromAuthorize=function(e){if(40171===e.code)this.notifyState({state:"failed",error:e})
else if(403===e.statusCode){var t="Client configured authentication provider returned 403; failing the connection"
b.logAction(b.LOG_ERROR,"ConnectionManager.actOnErrorFromAuthorize()",t),this.notifyState({state:"failed",error:new _(t,80019,403,e)})}else t="Client configured authentication provider request failed",b.logAction(b.LOG_MINOR,"ConnectionManager.actOnErrorFromAuthorize",t),this.notifyState({state:this.state.failState,error:new _(t,80019,401,e)})},u.prototype.onConnectionDetailsUpdate=function(e,t){if(e){this.connectionDetails=e,e.maxMessageSize&&(this.options.maxMessageSize=e.maxMessageSize)
var n=e.clientId
if(n){var r=this.realtime.auth._uncheckedSetClientId(n)
if(r)return b.logAction(b.LOG_ERROR,"ConnectionManager.onConnectionDetailsUpdate()",r.message),void t.fail(r)}var i=e.connectionStateTtl
i&&(this.connectionStateTtl=i),this.maxIdleInterval=e.maxIdleInterval,this.emit("connectiondetails",e)}},u}(),G=function(){var e=P.Action,t=P.fromValues({action:e.CLOSE}),n=P.fromValues({action:e.DISCONNECT})
function r(e,t,n){T.call(this),this.connectionManager=e,e.registerProposedTransport(this),this.auth=t,this.params=n,this.timeouts=n.options.timeouts,this.format=n.format,this.isConnected=!1,this.isFinished=!1,this.isDisposed=!1,this.maxIdleInterval=null,this.idleTimer=null,this.lastActivity=null}return y.inherits(r,T),r.prototype.connect=function(){},r.prototype.close=function(){this.isConnected&&this.requestClose(),this.finish("closed",x.closed)},r.prototype.disconnect=function(e){this.isConnected&&this.requestDisconnect(),this.finish("disconnected",e||x.disconnected)},r.prototype.fail=function(e){this.isConnected&&this.requestDisconnect(),this.finish("failed",e||x.failed)},r.prototype.finish=function(e,t){this.isFinished||(this.isFinished=!0,this.isConnected=!1,this.maxIdleInterval=null,clearTimeout(this.idleTimer),this.idleTimer=null,this.emit(e,t),this.dispose())},r.prototype.onProtocolMessage=function(t){switch(b.shouldLog(b.LOG_MICRO)&&b.logAction(b.LOG_MICRO,"Transport.onProtocolMessage()","received on "+this.shortName+": "+P.stringify(t)+"; connectionId = "+this.connectionManager.connectionId),this.onActivity(),t.action){case e.HEARTBEAT:b.logAction(b.LOG_MICRO,"Transport.onProtocolMessage()",this.shortName+" heartbeat; connectionId = "+this.connectionManager.connectionId),this.emit("heartbeat",t.id)
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
case e.AUTH:this.auth.authorize((function(e){e&&b.logAction(b.LOG_ERROR,"Transport.onProtocolMessage()","Ably requested re-authentication, but unable to obtain a new token: "+y.inspectError(e))}))
break
case e.ERROR:if(b.logAction(b.LOG_MINOR,"Transport.onProtocolMessage()","received error action; connectionId = "+this.connectionManager.connectionId+"; err = "+y.inspect(t.error)+(t.channel?", channel: "+t.channel:"")),void 0===t.channel){this.onFatalError(t)
break}this.connectionManager.onChannelMessage(t,this)
break
default:this.connectionManager.onChannelMessage(t,this)}},r.prototype.onConnect=function(e){this.isConnected=!0
var t=e.connectionDetails.maxIdleInterval
t&&(this.maxIdleInterval=t+this.timeouts.realtimeRequestTimeout,this.onActivity())},r.prototype.onDisconnect=function(e){var t=e&&e.error
b.logAction(b.LOG_MINOR,"Transport.onDisconnect()","err = "+y.inspectError(t)),this.finish("disconnected",t)},r.prototype.onFatalError=function(e){var t=e&&e.error
b.logAction(b.LOG_MINOR,"Transport.onFatalError()","err = "+y.inspectError(t)),this.finish("failed",t)},r.prototype.onClose=function(e){var t=e&&e.error
b.logAction(b.LOG_MINOR,"Transport.onClose()","err = "+y.inspectError(t)),this.finish("closed",t)},r.prototype.requestClose=function(){b.logAction(b.LOG_MINOR,"Transport.requestClose()",""),this.send(t)},r.prototype.requestDisconnect=function(){b.logAction(b.LOG_MINOR,"Transport.requestDisconnect()",""),this.send(n)},r.prototype.ping=function(e){var t={action:P.Action.HEARTBEAT}
e&&(t.id=e),this.send(P.fromValues(t))},r.prototype.dispose=function(){b.logAction(b.LOG_MINOR,"Transport.dispose()",""),this.isDisposed=!0,this.off()},r.prototype.onActivity=function(){this.maxIdleInterval&&(this.lastActivity=this.connectionManager.lastActivity=y.now(),this.setIdleTimer(this.maxIdleInterval+100))},r.prototype.setIdleTimer=function(e){var t=this
this.idleTimer||(this.idleTimer=setTimeout((function(){t.onIdleTimerExpire()}),e))},r.prototype.onIdleTimerExpire=function(){this.idleTimer=null
var e=y.now()-this.lastActivity,t=this.maxIdleInterval-e
if(t<=0){var n="No activity seen from realtime in "+e+"ms; assuming connection has dropped"
b.logAction(b.LOG_ERROR,"Transport.onIdleTimerExpire()",n),this.disconnect(new _(n,80003,408))}else this.setIdleTimer(t+100)},r.prototype.onAuthUpdated=function(){},r}(),U=(function(){var e=h.WebSocket
function t(e,t,n){this.shortName="web_socket",n.heartbeats=h.useProtocolHeartbeats,G.call(this,e,t,n),this.wsHost=g.getHost(n.options,n.host,!0)}y.inherits(t,G),t.isAvailable=function(){return!!e},t.isAvailable()&&(N.supportedTransports.web_socket=t),t.tryConnect=function(e,n,r,i){var o=new t(e,n,r),s=function(e){i({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("wsopen",(function(){b.logAction(b.LOG_MINOR,"WebSocketTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),i(null,o)})),o.connect()},t.prototype.createWebSocket=function(t,n){var r=0
if(n)for(var i in n)t+=(r++?"&":"?")+i+"="+n[i]
return this.uri=t,new e(t)},t.prototype.toString=function(){return"WebSocketTransport; uri="+this.uri},t.prototype.connect=function(){b.logAction(b.LOG_MINOR,"WebSocketTransport.connect()","starting"),G.prototype.connect.call(this)
var e=this,t=this.params,n=t.options,r=(n.tls?"wss://":"ws://")+this.wsHost+":"+g.getPort(n)+"/"
b.logAction(b.LOG_MINOR,"WebSocketTransport.connect()","uri: "+r),this.auth.getAuthParams((function(n,i){if(!e.isDisposed){var o=""
for(var s in i)o+=" "+s+": "+i[s]+";"
if(b.logAction(b.LOG_MINOR,"WebSocketTransport.connect()","authParams:"+o+" err: "+n),n)e.disconnect(n)
else{var a=t.getConnectParams(i)
try{var c=e.wsConnection=e.createWebSocket(r,a)
c.binaryType=h.binaryType,c.onopen=function(){e.onWsOpen()},c.onclose=function(t){e.onWsClose(t)},c.onmessage=function(t){e.onWsData(t.data)},c.onerror=function(t){e.onWsError(t)},c.on&&c.on("ping",(function(){e.onActivity()}))}catch(t){b.logAction(b.LOG_ERROR,"WebSocketTransport.connect()","Unexpected exception creating websocket: err = "+(t.stack||t.message)),e.disconnect(t)}}}}))},t.prototype.send=function(e){var t=this.wsConnection
if(t)try{t.send(P.serialize(e,this.params.format))}catch(e){var n="Exception from ws connection when trying to send: "+y.inspectError(e)
b.logAction(b.LOG_ERROR,"WebSocketTransport.send()",n),this.finish("disconnected",new _(n,5e4,500))}else b.logAction(b.LOG_ERROR,"WebSocketTransport.send()","No socket connection")},t.prototype.onWsData=function(e){b.logAction(b.LOG_MICRO,"WebSocketTransport.onWsData()","data received; length = "+e.length+"; type = "+n(e))
try{this.onProtocolMessage(P.deserialize(e,this.format))}catch(e){b.logAction(b.LOG_ERROR,"WebSocketTransport.onWsData()","Unexpected exception handing channel message: "+e.stack)}},t.prototype.onWsOpen=function(){b.logAction(b.LOG_MINOR,"WebSocketTransport.onWsOpen()","opened WebSocket"),this.emit("wsopen")},t.prototype.onWsClose=function(e){var t,r
if("object"==n(e)?(t=e.wasClean,r=e.code):t=1e3==(r=e),delete this.wsConnection,t){b.logAction(b.LOG_MINOR,"WebSocketTransport.onWsClose()","Cleanly closed WebSocket")
var i=new _("Websocket closed",80003,400)
this.finish("disconnected",i)}else{var o="Unclean disconnection of WebSocket ; code = "+r
i=new _(o,80003,400),b.logAction(b.LOG_MINOR,"WebSocketTransport.onWsClose()",o),this.finish("disconnected",i)}this.emit("disposed")},t.prototype.onWsError=function(e){b.logAction(b.LOG_MINOR,"WebSocketTransport.onError()","Error from WebSocket: "+e.message)
var t=this
y.nextTick((function(){t.disconnect(e)}))},t.prototype.dispose=function(){b.logAction(b.LOG_MINOR,"WebSocketTransport.dispose()",""),this.isDisposed=!0
var e=this.wsConnection
e&&(e.onmessage=function(){},delete this.wsConnection,y.nextTick((function(){b.logAction(b.LOG_MICRO,"WebSocketTransport.dispose()","closing websocket"),e.close()})))}}(),function(){function e(e){return function(e){return!!e.code&&!F.isTokenErr(e)&&(!!y.arrIn([80015,80017,80030],e.code)||e.code>=4e4&&e.code<5e4)}(e)?[P.fromValues({action:P.Action.ERROR,error:e})]:[P.fromValues({action:P.Action.DISCONNECTED,error:e})]}function t(e,t,n){n.format=void 0,n.heartbeats=!0,G.call(this,e,t,n),this.stream=!("stream"in n)||n.stream,this.sendRequest=null,this.recvRequest=null,this.pendingCallback=null,this.pendingItems=null}return y.inherits(t,G),t.REQ_SEND=0,t.REQ_RECV=1,t.REQ_RECV_POLL=2,t.REQ_RECV_STREAM=3,t.prototype.connect=function(){b.logAction(b.LOG_MINOR,"CometTransport.connect()","starting"),G.prototype.connect.call(this)
var t=this,n=this.params,r=n.options,i=g.getHost(r,n.host),o=g.getPort(r),s=r.tls?"https://":"http://"
this.baseUri=s+i+":"+o+"/comet/"
var a=this.baseUri+"connect"
b.logAction(b.LOG_MINOR,"CometTransport.connect()","uri: "+a),this.auth.getAuthParams((function(n,r){if(n)t.disconnect(n)
else if(!t.isDisposed){t.authParams=r
var i=t.params.getConnectParams(r)
"stream"in i&&(t.stream=i.stream),b.logAction(b.LOG_MINOR,"CometTransport.connect()","connectParams:"+y.toQueryString(i))
var o=!1,s=t.recvRequest=t.createRequest(a,null,i,null,t.stream?3:1)
s.on("data",(function(e){t.recvRequest&&(o||(o=!0,t.emit("preconnect")),t.onData(e))})),s.on("complete",(function(n,r,i){t.recvRequest||(n=n||new _("Request cancelled",80003,400)),t.recvRequest=null,o||(o=!0,t.emit("preconnect")),t.onActivity(),n?n.code?t.onData(e(n)):t.disconnect(n):y.nextTick((function(){t.recv()}))})),s.exec()}}))},t.prototype.requestClose=function(){b.logAction(b.LOG_MINOR,"CometTransport.requestClose()"),this._requestCloseOrDisconnect(!0)},t.prototype.requestDisconnect=function(){b.logAction(b.LOG_MINOR,"CometTransport.requestDisconnect()"),this._requestCloseOrDisconnect(!1)},t.prototype._requestCloseOrDisconnect=function(e){var t=e?this.closeUri:this.disconnectUri
if(t){var n=this,r=this.createRequest(t,null,this.authParams,null,0)
r.on("complete",(function(t){t&&(b.logAction(b.LOG_ERROR,"CometTransport.request"+(e?"Close()":"Disconnect()"),"request returned err = "+y.inspectError(t)),n.finish("disconnected",t))})),r.exec()}},t.prototype.dispose=function(){if(b.logAction(b.LOG_MINOR,"CometTransport.dispose()",""),!this.isDisposed){this.isDisposed=!0,this.recvRequest&&(b.logAction(b.LOG_MINOR,"CometTransport.dispose()","aborting recv request"),this.recvRequest.abort(),this.recvRequest=null),this.finish("disconnected",x.disconnected)
var e=this
y.nextTick((function(){e.emit("disposed")}))}},t.prototype.onConnect=function(e){if(!this.isDisposed){var t=e.connectionKey
G.prototype.onConnect.call(this,e)
var n=this.baseUri+t
b.logAction(b.LOG_MICRO,"CometTransport.onConnect()","baseUri = "+n+"; connectionKey = "+e.connectionKey),this.sendUri=n+"/send",this.recvUri=n+"/recv",this.closeUri=n+"/close",this.disconnectUri=n+"/disconnect"}},t.prototype.send=function(e){if(this.sendRequest)return this.pendingItems=this.pendingItems||[],void this.pendingItems.push(e)
var t=this.pendingItems||[]
t.push(e),this.pendingItems=null,this.sendItems(t)},t.prototype.sendAnyPending=function(){var e=this.pendingItems
e&&(this.pendingItems=null,this.sendItems(e))},t.prototype.sendItems=function(t){var n=this,r=this.sendRequest=n.createRequest(n.sendUri,null,n.authParams,this.encodeRequest(t),0)
r.on("complete",(function(t,r){t&&b.logAction(b.LOG_ERROR,"CometTransport.sendItems()","on complete: err = "+y.inspectError(t)),n.sendRequest=null,t?t.code?n.onData(e(t)):n.disconnect(t):(r&&n.onData(r),n.pendingItems&&y.nextTick((function(){n.sendRequest||n.sendAnyPending()})))})),r.exec()},t.prototype.recv=function(){if(!this.recvRequest&&this.isConnected){var t=this,n=this.recvRequest=this.createRequest(this.recvUri,null,this.authParams,null,t.stream?3:2)
n.on("data",(function(e){t.onData(e)})),n.on("complete",(function(n){t.recvRequest=null,t.onActivity(),n?n.code?t.onData(e(n)):t.disconnect(n):y.nextTick((function(){t.recv()}))})),n.exec()}},t.prototype.onData=function(e){try{var t=this.decodeResponse(e)
if(t&&t.length)for(var n=0;n<t.length;n++)this.onProtocolMessage(P.fromDeserialized(t[n]))}catch(e){b.logAction(b.LOG_ERROR,"CometTransport.onData()","Unexpected exception handing channel event: "+e.stack)}},t.prototype.encodeRequest=function(e){return JSON.stringify(e)},t.prototype.decodeResponse=function(e){return"string"==typeof e&&(e=JSON.parse(e)),e},t.prototype.onAuthUpdated=function(e){this.authParams={access_token:e.token}},t}()),j=function(){function e(){}function t(e){this.channel=e,this.basePath=e.basePath+"/presence"}return y.inherits(t,T),t.prototype.get=function(t,n){if(b.logAction(b.LOG_MICRO,"Presence.get()","channel = "+this.channel.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.rest.options.promises)return y.promisify(this,"get",arguments)
n=e}var r=this.channel.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i,s=y.defaultGetHeaders(i)
r.options.headers&&y.mixin(s,r.options.headers)
var a=this.channel.channelOptions
new B(r,this.basePath,s,o,(function(e,t,n){return E.fromResponseBody(e,a,!n&&i)})).get(t,n)},t.prototype.history=function(e,t){b.logAction(b.LOG_MICRO,"Presence.history()","channel = "+this.channel.name),this._history(e,t)},t.prototype._history=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.rest.options.promises)return y.promisify(this,"_history",arguments)
n=e}var r=this.channel.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i,s=y.defaultGetHeaders(i)
this.channel,r.options.headers&&y.mixin(s,r.options.headers)
var a=this.channel.channelOptions
new B(r,this.basePath+"/history",s,o,(function(e,t,n){return E.fromResponseBody(e,a,!n&&i)})).get(t,n)},t}(),q=function(){var e=h.msgpack
function t(){}function n(e,t,n,r,i){C.supportsAuthHeaders?e.auth.getAuthHeaders((function(e,o){e?r(e):i(y.mixin(o,t),n)})):e.auth.getAuthParams((function(e,o){e?r(e):i(t,y.mixin(o,n))}))}function r(e){var t=[]
if(e)for(var n in e)t.push(n+"="+e[n])
return t.join("&")}function i(e,t){return e+(t?"?":"")+r(t)}return y.arrForEach(C.methodsWithoutBody,(function(e){t[e]=function(n,r,i,o,s,a){t.do(e,n,r,null,i,o,s,a)}})),y.arrForEach(C.methodsWithBody,(function(e){t[e]=function(n,r,i,o,s,a,c){t.do(e,n,r,i,o,s,a,c)}})),t.do=function(t,o,s,a,c,u,p,l){b.shouldLog(b.LOG_MICRO)&&(l=function(e,t,n,o){return function(s,a,c,u,p){s?b.logAction(b.LOG_MICRO,"Resource."+t+"()","Received Error; "+i(n,o)+"; Error: "+y.inspectError(s)):b.logAction(b.LOG_MICRO,"Resource."+t+"()","Received; "+i(n,o)+"; Headers: "+r(c)+"; StatusCode: "+p+"; Body: "+(v.isBuffer(a)?a.toString():a)),e&&e(s,a,c,u,p)}}(l,t,s,u)),p&&(l=l&&function(e,t){return function(n,r,i,o,s){if(!n||r){if(!o)try{r=y.decodeBody(r,t)}catch(t){return void e(t)}if(void 0!==r.statusCode){var a=r.statusCode,c=r.response,u=r.headers
if(a<200||a>=300){var p=c&&c.error||n
return p||((p=new Error("Error in unenveloping "+r)).statusCode=a),void e(p,c,u,!0,a)}e(n,c,u,!0,a)}else e(n,r,i,!0,s)}else e(n)}}(l,p),(u=u||{}).envelope=p),n(o,c,u,l,(function r(p,d){b.shouldLog(b.LOG_MICRO)&&b.logAction(b.LOG_MICRO,"Resource."+t+"()","Sending; "+i(s,d))
var h=[o,s,p,a,d,function(e,t,i,s,a){e&&F.isTokenErr(e)?o.auth.authorize(null,null,(function(e){e?l(e):n(o,c,u,l,r)})):l(e,t,i,s,a)}]
if(a||h.splice(3,1),b.shouldLog(b.LOG_MICRO)){var f=a
if((p["content-type"]||"").indexOf("msgpack")>0)try{f=e.decode(a)}catch(e){b.logAction(b.LOG_MICRO,"Resource."+t+"()","Sending MsgPack Decoding Error: "+y.inspectError(e))}b.logAction(b.LOG_MICRO,"Resource."+t+"()","Sending; "+i(s,d)+"; Body: "+f)}C[t].apply(this,h)}))},t}(),B=function(){function e(e,t,n,r,i,o){this.rest=e,this.path=t,this.headers=n,this.envelope=r,this.bodyHandler=i,this.useHttpPaginatedResponse=o||!1}function t(e,t,n){if(this.resource=e,this.items=t,n){var r=this
"first"in n&&(this.first=function(e){r.get(n.first,e)}),"current"in n&&(this.current=function(e){r.get(n.current,e)}),this.next=function(e){"next"in n?r.get(n.next,e):e(null,null)},this.hasNext=function(){return"next"in n},this.isLast=function(){return!this.hasNext()}}}function n(e,n,r,i,o,s){t.call(this,e,n,o),this.statusCode=i,this.success=i<300&&i>=200,this.headers=r,this.errorCode=s&&s.code,this.errorMessage=s&&s.message}return y.arrForEach(C.methodsWithoutBody,(function(t){e.prototype[t]=function(e,n){var r=this
q[t](r.rest,r.path,r.headers,e,r.envelope,(function(e,t,i,o,s){r.handlePage(e,t,i,o,s,n)}))}})),y.arrForEach(C.methodsWithBody,(function(t){e.prototype[t]=function(e,n,r){var i=this
q[t](i.rest,i.path,n,i.headers,e,i.envelope,(function(e,t,n,o,s){r&&i.handlePage(e,t,n,o,s,r)}))}})),e.prototype.handlePage=function(e,r,i,o,s,a){if(e&&function(e,t,n){return!(n&&(t||"number"==typeof e.code))}(e,r,this.useHttpPaginatedResponse))return b.logAction(b.LOG_ERROR,"PaginatedResource.handlePage()","Unexpected error getting resource: err = "+y.inspectError(e)),void a(e)
var c,u,p
try{c=this.bodyHandler(r,i,o)}catch(t){return void a(e||t)}i&&(u=i.Link||i.link)&&(p=function(e){"string"==typeof e&&(e=e.split(","))
for(var t,n={},r=0;r<e.length;r++){var i=e[r].match(/^\s*<(.+)>;\s*rel="(\w+)"$/)
if(i){var o=(void 0,(t=i[1].match(/^\.\/(\w+)\?(.*)$/))&&y.parseQueryString(t[2]))
o&&(n[i[2]]=o)}}return n}(u)),this.useHttpPaginatedResponse?a(null,new n(this,c,i,s,p,e)):a(null,new t(this,c,p))},t.prototype.get=function(e,t){var n=this.resource
q.get(n.rest,n.path,n.headers,e,n.envelope,(function(e,r,i,o,s){n.handlePage(e,r,i,o,s,t)}))},y.inherits(n,t),e}(),F=function(){var e,r,i=Math.pow(2,17)
function o(){}function s(){return("000000"+Math.floor(1e16*Math.random())).slice(-16)}function a(e){return y.isErrorInfo(e)?(e.code||(403===e.statusCode?e.code=40300:(e.code=40170,e.statusCode=401)),e):new _(y.inspectError(e),e.code||40170,e.statusCode||401)}function u(e){if(!e)return""
"string"==typeof e&&(e=JSON.parse(e))
var t={},n=y.keysArray(e,!0)
if(!n)return""
n.sort()
for(var r=0;r<n.length;r++)t[n[r]]=e[n[r]].sort()
return JSON.stringify(t)}function p(e){if(e.authCallback)b.logAction(b.LOG_MINOR,"Auth()","using token auth with authCallback")
else if(e.authUrl)b.logAction(b.LOG_MINOR,"Auth()","using token auth with authUrl")
else if(e.key)b.logAction(b.LOG_MINOR,"Auth()","using token auth with client-side signing")
else{if(!e.tokenDetails){var t="authOptions must include valid authentication parameters"
throw b.logAction(b.LOG_ERROR,"Auth()",t),new Error(t)}b.logAction(b.LOG_MINOR,"Auth()","using token auth with supplied token only")}}h.createHmac?(r=function(e){return new t(e,"ascii").toString("base64")},e=function(e,t){var n=h.createHmac("SHA256",t)
return n.update(e),n.digest("base64")}):(r=S.encode,e=function(e,t){return c.HmacSHA256(e,t).toString(c.enc.Base64)})
var l=0
function d(t,n){if(this.client=t,this.tokenParams=n.defaultTokenParams||{},this.currentTokenRequestId=null,this.waitingForTokenRequest=null,function(e){return e.useTokenAuth||!function(e){return"useTokenAuth"in e&&!e.useTokenAuth}(e)&&(e.authCallback||e.authUrl||e.token||e.tokenDetails)}(n)){if(n.key&&!e){var r="client-side token request signing not supported"
throw b.logAction(b.LOG_ERROR,"Auth()",r),new Error(r)}(function(e){return!e.key&&!e.authCallback&&!e.authUrl})(n)&&b.logAction(b.LOG_ERROR,"Auth()","Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),this._saveTokenOptions(n.defaultTokenParams,n),p(this.authOptions)}else{if(!n.key)throw r="No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)",b.logAction(b.LOG_ERROR,"Auth()",r),new _(r,40160,401)
b.logAction(b.LOG_MINOR,"Auth()","anonymous, using basic auth"),this._saveBasicOptions(n)}}return d.prototype.authorize=function(e,t,n){if("function"!=typeof e||n?"function"!=typeof t||n||(n=t,t=null):(n=e,t=e=null),!n){if(this.client.options.promises)return y.promisify(this,"authorize",arguments)
n=o}var r=this
if(t&&t.key&&this.authOptions.key!==t.key)throw new _("Unable to update auth options with incompatible key",40102,401)
t&&"force"in t&&(b.logAction(b.LOG_ERROR,"Auth.authorize","Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"),y.isOnlyPropIn(t,"force")&&(t=null)),this._forceNewToken(e,t,(function(e,t){e?n(e):r.client.connection?r.client.connection.connectionManager.onAuthUpdated(t,n):n(null,t)}))},d.prototype.authorise=function(){b.deprecated("Auth.authorise","Auth.authorize"),this.authorize.apply(this,arguments)},d.prototype._forceNewToken=function(e,t,n){var r=this
this.tokenDetails=null,this._saveTokenOptions(e,t),p(this.authOptions),this._ensureValidAuthCredentials(!0,(function(e,t){delete r.tokenParams.timestamp,delete r.authOptions.queryTime,n(e,t)}))},d.prototype.requestToken=function(e,t,r){if("function"!=typeof e||r?"function"!=typeof t||r||(r=t,t=null):(r=e,t=e=null),!r&&this.client.options.promises)return y.promisify(this,"requestToken",arguments)
t=t||this.authOptions,e=e||y.copy(this.tokenParams),r=r||o
var s,c=this.client
if(t.authCallback)b.logAction(b.LOG_MINOR,"Auth.requestToken()","using token auth with authCallback"),s=t.authCallback
else if(t.authUrl)b.logAction(b.LOG_MINOR,"Auth.requestToken()","using token auth with authUrl"),s=function(e,n){var r=y.mixin({accept:"application/json, text/plain"},t.authHeaders),o=t.authMethod&&"post"===t.authMethod.toLowerCase()
if(!o){var s=t.authUrl.indexOf("?")
if(s>-1){var a=y.parseQueryString(t.authUrl.slice(s))
t.authUrl=t.authUrl.slice(0,s),t.authParams=y.mixin(a,t.authParams)}}var u=y.mixin({},t.authParams||{},e),p=function(e,t,r,o){var s
if(e?b.logAction(b.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received Error: "+y.inspectError(e)):(s=r["content-type"],b.logAction(b.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Received; content-type: "+s+"; body: "+y.inspectBody(t))),e||o)return n(e,t)
if(v.isBuffer(t)&&(t=t.toString()),s){var a=s.indexOf("application/json")>-1,c=s.indexOf("text/plain")>-1||s.indexOf("application/jwt")>-1
if(a||c){if(a){if(t.length>i)return void n(new _("authUrl response exceeded max permitted length",40170,401))
try{t=JSON.parse(t)}catch(e){return void n(new _("Unexpected error processing authURL response; err = "+e.message,40170,401))}}n(null,t,s)}else n(new _("authUrl responded with unacceptable content-type "+s+", should be either text/plain, application/jwt or application/json",40170,401))}else n(new _("authUrl response is missing a content-type header",40170,401))}
if(b.logAction(b.LOG_MICRO,"Auth.requestToken().tokenRequestCallback","Requesting token from "+t.authUrl+"; Params: "+JSON.stringify(u)+"; method: "+(o?"POST":"GET")),o){var l=r||{}
l["content-type"]="application/x-www-form-urlencoded"
var d=y.toQueryString(u).slice(1)
C.postUri(c,t.authUrl,l,d,{},p)}else C.getUri(c,t.authUrl,r||{},u,p)}
else{if(!t.key){var p="Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)"
return b.logAction(b.LOG_ERROR,"Auth()","library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"),void r(new _(p,40171,403))}var l=this
b.logAction(b.LOG_MINOR,"Auth.requestToken()","using token auth with client-side signing"),s=function(e,n){l.createTokenRequest(e,t,n)}}"capability"in e&&(e.capability=u(e.capability))
var d=function(e,n){var r="/keys/"+e.keyName+"/requestToken",i=y.defaultPostHeaders()
t.requestHeaders&&y.mixin(i,t.requestHeaders),b.logAction(b.LOG_MICRO,"Auth.requestToken().requestToken","Sending POST to "+r+"; Token params: "+JSON.stringify(e)),e=JSON.stringify(e),C.post(c,(function(e){return c.baseUri(e)+r}),i,e,null,n)},h=!1,f=this.client.options.timeouts.realtimeRequestTimeout,m=setTimeout((function(){h=!0
var e="Token request callback timed out after "+f/1e3+" seconds"
b.logAction(b.LOG_ERROR,"Auth.requestToken()",e),r(new _(e,40170,401))}),f)
s(e,(function(e,o,s){if(!h){if(clearTimeout(m),e)return b.logAction(b.LOG_ERROR,"Auth.requestToken()","token request signing call returned error; err = "+y.inspectError(e)),void r(a(e))
if("string"!=typeof o){if("object"!==n(o)){var c="Expected token request callback to call back with a token string or token request/details object, but got a "+n(o)
return b.logAction(b.LOG_ERROR,"Auth.requestToken()",c),void r(new _(c,40170,401))}var u=JSON.stringify(o).length
if(u>i&&!t.suppressMaxLengthCheck)r(new _("Token request/details object exceeded max permitted stringified size (was "+u+" bytes)",40170,401))
else if("issued"in o)r(null,o)
else{if(!("keyName"in o))return c="Expected token request callback to call back with a token string, token request object, or token details object",b.logAction(b.LOG_ERROR,"Auth.requestToken()",c),void r(new _(c,40170,401))
d(o,(function(e,t,n,i){if(e)return b.logAction(b.LOG_ERROR,"Auth.requestToken()","token request API call returned error; err = "+y.inspectError(e)),void r(a(e))
i||(t=JSON.parse(t)),b.logAction(b.LOG_MINOR,"Auth.getToken()","token received"),r(null,t)}))}}else 0===o.length?r(new _("Token string is empty",40170,401)):o.length>i?r(new _("Token string exceeded max permitted length (was "+o.length+" bytes)",40170,401)):"undefined"===o||"null"===o?r(new _("Token string was literal null/undefined",40170,401)):"{"!==o[0]||s&&s.indexOf("application/jwt")>-1?r(null,{token:o}):r(new _("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details",40170,401))}}))},d.prototype.createTokenRequest=function(t,n,r){if("function"!=typeof t||r?"function"!=typeof n||r||(r=n,n=null):(r=t,n=t=null),!r&&this.client.options.promises)return y.promisify(this,"createTokenRequest",arguments)
n=n||this.authOptions,t=t||y.copy(this.tokenParams)
var i=n.key
if(i){var o=i.split(":"),a=o[0],c=o[1]
if(c)if(""!==t.clientId){"capability"in t&&(t.capability=u(t.capability))
var p,l=y.mixin({keyName:a},t),d=t.clientId||"",h=t.ttl||"",f=t.capability||"",m=this
p=function(){var t=l.nonce||(l.nonce=s()),n=l.timestamp,i=l.keyName+"\n"+h+"\n"+f+"\n"+d+"\n"+n+"\n"+t+"\n"
l.mac=l.mac||e(i,c),b.logAction(b.LOG_MINOR,"Auth.getTokenRequest()","generated signed request"),r(null,l)},l.timestamp?p():m.getTimestamp(n&&n.queryTime,(function(e,t){e?r(e):(l.timestamp=t,p())}))}else r(new _("clientId can’t be an empty string",40012,400))
else r(new _("Invalid key specified",40101,403))}else r(new _("No key specified",40101,403))},d.prototype.getAuthParams=function(e){"basic"==this.method?e(null,{key:this.key}):this._ensureValidAuthCredentials(!1,(function(t,n){t?e(t):e(null,{access_token:n.token})}))},d.prototype.getAuthHeaders=function(e){"basic"==this.method?e(null,{authorization:"Basic "+this.basicKey}):this._ensureValidAuthCredentials(!1,(function(t,n){t?e(t):e(null,{authorization:"Bearer "+r(n.token)})}))},d.prototype.getTimestamp=function(e,t){this.isTimeOffsetSet()||!e&&!this.authOptions.queryTime?t(null,this.getTimestampUsingOffset()):this.client.time(t)},d.prototype.getTimestampUsingOffset=function(){return y.now()+(this.client.serverTimeOffset||0)},d.prototype.isTimeOffsetSet=function(){return null!==this.client.serverTimeOffset},d.prototype._saveBasicOptions=function(e){this.method="basic",this.key=e.key,this.basicKey=r(e.key),this.authOptions=e||{},"clientId"in e&&this._userSetClientId(e.clientId)},d.prototype._saveTokenOptions=function(e,t){this.method="token",e&&(this.tokenParams=e),t&&(t.token&&(t.tokenDetails="string"==typeof t.token?{token:t.token}:t.token),t.tokenDetails&&(this.tokenDetails=t.tokenDetails),"clientId"in t&&this._userSetClientId(t.clientId),this.authOptions=t)},d.prototype._ensureValidAuthCredentials=function(e,t){var n=this,r=this.tokenDetails
if(r){if(this._tokenClientIdMismatch(r.clientId))return void t(new _("Mismatch between clientId in token ("+r.clientId+") and current clientId ("+this.clientId+")",40102,403))
if(!this.isTimeOffsetSet()||!r.expires||r.expires>=this.getTimestampUsingOffset())return b.logAction(b.LOG_MINOR,"Auth.getToken()","using cached token; expires = "+r.expires),void t(null,r)
b.logAction(b.LOG_MINOR,"Auth.getToken()","deleting expired token"),this.tokenDetails=null}if((this.waitingForTokenRequest||(this.waitingForTokenRequest=O())).push(t),null===this.currentTokenRequestId||e){var i=this.currentTokenRequestId=l++
this.requestToken(this.tokenParams,this.authOptions,(function(e,t){if(n.currentTokenRequestId>i)b.logAction(b.LOG_MINOR,"Auth._ensureValidAuthCredentials()","Discarding token request response; overtaken by newer one")
else{n.currentTokenRequestId=null
var r=n.waitingForTokenRequest||o
n.waitingForTokenRequest=null,e?r(e):r(null,n.tokenDetails=t)}}))}},d.prototype._userSetClientId=function(e){if("string"!=typeof e&&null!==e)throw new _("clientId must be either a string or null",40012,400)
if("*"===e)throw new _('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)',40012,400)
var t=this._uncheckedSetClientId(e)
if(t)throw t},d.prototype._uncheckedSetClientId=function(e){if(this._tokenClientIdMismatch(e)){var t="Unexpected clientId mismatch: client has "+this.clientId+", requested "+e,n=new _(t,40102,401)
return b.logAction(b.LOG_ERROR,"Auth._uncheckedSetClientId()",t),n}return this.clientId=this.tokenParams.clientId=e,null},d.prototype._tokenClientIdMismatch=function(e){return this.clientId&&"*"!==this.clientId&&e&&"*"!==e&&this.clientId!==e},d.isTokenErr=function(e){return e.code&&e.code>=40140&&e.code<40150},d}(),H=function(){var e=function(){},t=h.msgpack
function n(e){if(!(this instanceof n))return new n(e)
if(!e){var t="no options provided"
throw b.logAction(b.LOG_ERROR,"Rest()",t),new Error(t)}if((e=g.objectifyOptions(e)).log&&b.setLog(e.log.level,e.log.handler),b.logAction(b.LOG_MICRO,"Rest()","initialized with clientOptions "+y.inspect(e)),this.options=g.normaliseOptions(e),e.key){var i=e.key.match(/^([^:\s]+):([^:.\s]+)$/)
if(!i)throw t="invalid key parameter",b.logAction(b.LOG_ERROR,"Rest()",t),new Error(t)
e.keyName=i[1],e.keySecret=i[2]}if("clientId"in e){if("string"!=typeof e.clientId&&null!==e.clientId)throw new _("clientId must be either a string or null",40012,400)
if("*"===e.clientId)throw new _('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})',40012,400)}b.logAction(b.LOG_MINOR,"Rest()","started; version = "+g.libstring),this.baseUri=this.authority=function(t){return g.getHttpScheme(e)+t+":"+g.getPort(e,!1)},this._currentFallback=null,this.serverTimeOffset=null,this.auth=new F(this,e),this.channels=new r(this),this.push=new K(this)}function r(e){this.rest=e,this.attached={}}return n.prototype.stats=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.options.promises)return y.promisify(this,"stats",arguments)
n=e}var r=y.defaultGetHeaders(),i=this.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i
this.options.headers&&y.mixin(r,this.options.headers),new B(this,"/stats",r,o,(function(e,t,n){for(var r=n?e:JSON.parse(e),i=0;i<r.length;i++)r[i]=A.fromValues(r[i])
return r})).get(t,n)},n.prototype.time=function(t,n){if(void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.options.promises)return y.promisify(this,"time",arguments)
n=e}var r=y.defaultGetHeaders()
this.options.headers&&y.mixin(r,this.options.headers)
var i=this,o=function(e){return i.authority(e)+"/time"}
C.get(this,o,r,t,(function(e,t,r,o){if(e)n(e)
else{o||(t=JSON.parse(t))
var s=t[0]
if(!s)return(e=new Error("Internal error (unexpected result type from GET /time)")).statusCode=500,void n(e)
i.serverTimeOffset=s-y.now(),n(null,s)}}))},n.prototype.request=function(n,r,i,o,s,a){var c=this.options.useBinaryProtocol,u=c?t.encode:JSON.stringify,p=c?t.decode:JSON.parse,l=c?"msgpack":"json",d=C.supportsLinkHeaders?void 0:l
i=i||{}
var h="get"==(n=n.toLowerCase())?y.defaultGetHeaders(l):y.defaultPostHeaders(l)
if(void 0===a){if(this.options.promises)return y.promisify(this,"request",[n,r,i,o,s])
a=e}"string"!=typeof o&&(o=u(o)),this.options.headers&&y.mixin(h,this.options.headers),s&&y.mixin(h,s)
var f=new B(this,r,h,d,(function(e,t,n){return y.ensureArray(n?e:p(e))}),!0)
if(!y.arrIn(C.methods,n))throw new _("Unsupported method "+n,40500,405)
y.arrIn(C.methodsWithBody,n)?f[n](i,o,a):f[n](i,a)},n.prototype.setLog=function(e){b.setLog(e.level,e.handler)},r.prototype.get=function(e,t){e=String(e)
var n=this.attached[e]
return n?t&&n.setOptions(t):this.attached[e]=n=new Q(this.rest,e,t),n},r.prototype.release=function(e){delete this.attached[String(e)]},n}()
H.Promise=function(e){return(e=g.objectifyOptions(e)).promises=!0,new H(e)},H.Callbacks=H
var z=function(){function e(n){if(!(this instanceof e))return new e(n)
b.logAction(b.LOG_MINOR,"Realtime()",""),H.call(this,n),this.connection=new J(this,this.options),this.channels=new t(this),!1!==n.autoConnect&&this.connect()}function t(e){T.call(this),this.realtime=e,this.all={},this.inProgress={}
var t=this
e.connection.connectionManager.on("transport.active",(function(){t.onTransportActive()}))}return y.inherits(e,H),e.prototype.connect=function(){b.logAction(b.LOG_MINOR,"Realtime.connect()",""),this.connection.connect()},e.prototype.close=function(){b.logAction(b.LOG_MINOR,"Realtime.close()",""),this.connection.close()},y.inherits(t,T),t.prototype.onChannelMessage=function(e){var t=e.channel
if(void 0!==t){var n=this.all[t]
n?n.onMessage(e):b.logAction(b.LOG_ERROR,"Channels.onChannelMessage()","received event for non-existent channel: "+t)}else b.logAction(b.LOG_ERROR,"Channels.onChannelMessage()","received event unspecified channel, action = "+e.action)},t.prototype.onTransportActive=function(){for(var e in this.all){var t=this.all[e]
"attaching"===t.state||"detaching"===t.state?t.checkPendingState():"suspended"===t.state&&t.attach()}},t.prototype.reattach=function(e){for(var t in this.all){var n=this.all[t]
"attached"===n.state&&n.requestState("attaching",e)}},t.prototype.resetAttachedMsgIndicators=function(){for(var e in this.all){var t=this.all[e]
"attached"===t.state&&(t._attachedMsgIndicator=!1)}},t.prototype.checkAttachedMsgIndicators=function(e){for(var t in this.all){var n=this.all[t]
if("attached"===n.state&&!1===n._attachedMsgIndicator){var r="30s after a resume, found channel which has not received an attached; channelId = "+t+"; connectionId = "+e
b.logAction(b.LOG_ERROR,"Channels.checkAttachedMsgIndicators()",r),w.report("error",r,"channel-no-attached-after-resume"),n.requestState("attaching")}}},t.prototype.propogateConnectionInterruption=function(e,t){var n=["attaching","attached","detaching","suspended"],r={closing:"detached",closed:"detached",failed:"failed",suspended:"suspended"}[e]
for(var i in this.all){var o=this.all[i]
y.arrIn(n,o.state)&&o.notifyState(r,t)}},t.prototype.get=function(e,t){e=String(e)
var n=this.all[e]
return n?t&&n.setOptions(t):n=this.all[e]=new X(this.realtime,e,t),n},t.prototype.release=function(e){this.all[e]&&delete this.all[e]},t.prototype.setInProgress=function(e,t,n){this.inProgress[e.name]=this.inProgress[e.name]||{},this.inProgress[e.name][t]=n,!n&&this.hasNopending()&&this.emit("nopending")},t.prototype.onceNopending=function(e){this.hasNopending()?e():this.once("nopending",e)},t.prototype.hasNopending=function(){return y.arrEvery(y.valuesArray(this.inProgress,!0),(function(e){return!y.containsValue(e,!0)}))},e}()
z.Promise=function(e){return(e=g.objectifyOptions(e)).promises=!0,new z(e)},z.Callbacks=z
var V=function(e,t,n,r){this.previous=e,this.current=t,n&&(this.retryIn=n),r&&(this.reason=r)},W=function(e,t,n,r){this.previous=e,this.current=t,"attached"===t&&(this.resumed=n),r&&(this.reason=r)},J=function(){function e(){}function t(e,t){T.call(this),this.ably=e,this.connectionManager=new N(e,t),this.state=this.connectionManager.state.state,this.key=void 0,this.id=void 0,this.serial=void 0,this.timeSerial=void 0,this.recoveryKey=void 0,this.errorReason=null
var n=this
this.connectionManager.on("connectionstate",(function(e){var t=n.state=e.current
y.nextTick((function(){n.emit(t,e)}))})),this.connectionManager.on("update",(function(e){y.nextTick((function(){n.emit("update",e)}))}))}return y.inherits(t,T),t.prototype.whenState=function(e,t){T.prototype.whenState.call(this,e,this.state,t,new V(void 0,e))},t.prototype.connect=function(){b.logAction(b.LOG_MINOR,"Connection.connect()",""),this.connectionManager.requestState({state:"connecting"})},t.prototype.ping=function(t){if(b.logAction(b.LOG_MINOR,"Connection.ping()",""),!t){if(this.ably.options.promises)return y.promisify(this,"ping",arguments)
t=e}this.connectionManager.ping(null,t)},t.prototype.close=function(){b.logAction(b.LOG_MINOR,"Connection.close()","connectionKey = "+this.key),this.connectionManager.requestState({state:"closing"})},t}(),K=function(){var e=function(){}
function t(e){this.rest=e,this.deviceRegistrations=new n(e),this.channelSubscriptions=new r(e)}function n(e){this.rest=e}function r(e){this.rest=e}return t.prototype.publish=function(t,n,r){var i=this.rest,o=i.options.useBinaryProtocol?"msgpack":"json",s=y.mixin({recipient:t},n),a=y.defaultPostHeaders(o),c={}
if("function"!=typeof r){if(this.rest.options.promises)return y.promisify(this,"publish",arguments)
r=e}i.options.headers&&y.mixin(a,i.options.headers),i.options.pushFullWait&&y.mixin(c,{fullWait:"true"}),s=y.encodeBody(s,o),q.post(i,"/push/publish",s,a,c,!1,(function(e){r(e)}))},n.prototype.save=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=M.fromValues(t),s=y.defaultPostHeaders(i),a={}
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"save",arguments)
n=e}r.options.headers&&y.mixin(s,r.options.headers),r.options.pushFullWait&&y.mixin(a,{fullWait:"true"}),o=y.encodeBody(o,i),q.put(r,"/push/deviceRegistrations/"+encodeURIComponent(t.id),o,s,a,!1,(function(e,t,r,o){n(e,!e&&M.fromResponseBody(t,!o&&i))}))},n.prototype.get=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=y.defaultGetHeaders(i),s=t.id||t
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"get",arguments)
n=e}"string"==typeof s&&s.length?(r.options.headers&&y.mixin(o,r.options.headers),q.get(r,"/push/deviceRegistrations/"+encodeURIComponent(s),o,{},!1,(function(e,t,r,o){n(e,!e&&M.fromResponseBody(t,!o&&i))}))):n(new _("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails",4e4,400))},n.prototype.list=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i,s=y.defaultGetHeaders(i)
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"list",arguments)
n=e}r.options.headers&&y.mixin(s,r.options.headers),new B(r,"/push/deviceRegistrations",s,o,(function(e,t,n){return M.fromResponseBody(e,!n&&i)})).get(t,n)},n.prototype.remove=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=y.defaultGetHeaders(i),s={},a=t.id||t
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"remove",arguments)
n=e}"string"==typeof a&&a.length?(r.options.headers&&y.mixin(o,r.options.headers),r.options.pushFullWait&&y.mixin(s,{fullWait:"true"}),q.delete(r,"/push/deviceRegistrations/"+encodeURIComponent(a),o,s,!1,(function(e){n(e)}))):n(new _("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails",4e4,400))},n.prototype.removeWhere=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=y.defaultGetHeaders(i)
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"removeWhere",arguments)
n=e}r.options.headers&&y.mixin(o,r.options.headers),r.options.pushFullWait&&y.mixin(t,{fullWait:"true"}),q.delete(r,"/push/deviceRegistrations",o,t,!1,(function(e){n(e)}))},r.prototype.save=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=I.fromValues(t),s=y.defaultPostHeaders(i),a={}
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"save",arguments)
n=e}r.options.headers&&y.mixin(s,r.options.headers),r.options.pushFullWait&&y.mixin(a,{fullWait:"true"}),o=y.encodeBody(o,i),q.post(r,"/push/channelSubscriptions",o,s,a,!1,(function(e,t,r,o){n(e,!e&&I.fromResponseBody(t,!o&&i))}))},r.prototype.list=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i,s=y.defaultGetHeaders(i)
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"list",arguments)
n=e}r.options.headers&&y.mixin(s,r.options.headers),new B(r,"/push/channelSubscriptions",s,o,(function(e,t,n){return I.fromResponseBody(e,!n&&i)})).get(t,n)},r.prototype.removeWhere=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=y.defaultGetHeaders(i)
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"removeWhere",arguments)
n=e}r.options.headers&&y.mixin(o,r.options.headers),r.options.pushFullWait&&y.mixin(t,{fullWait:"true"}),q.delete(r,"/push/channelSubscriptions",o,t,!1,(function(e){n(e)}))},r.prototype.remove=r.prototype.removeWhere,r.prototype.listChannels=function(t,n){var r=this.rest,i=r.options.useBinaryProtocol?"msgpack":"json",o=C.supportsLinkHeaders?void 0:i,s=y.defaultGetHeaders(i)
if("function"!=typeof n){if(this.rest.options.promises)return y.promisify(this,"listChannels",arguments)
n=e}r.options.headers&&y.mixin(s,r.options.headers),r.options.pushFullWait&&y.mixin(t,{fullWait:"true"}),new B(r,"/push/channels",s,o,(function(e,t,n){!n&&i&&(e=y.decodeBody(e,i))
for(var r=0;r<e.length;r++)e[r]=String(e[r])
return e})).get(t,n)},function(e){this.rest=e,this.admin=new t(e)}}(),Q=function(){function e(){}function t(e,t,n){b.logAction(b.LOG_MINOR,"Channel()","started; name = "+t),T.call(this),this.rest=e,this.name=t,this.basePath="/channels/"+encodeURIComponent(t),this.presence=new j(this),this.setOptions(n)}function r(e){return y.arrEvery(e,(function(e){return!e.id}))}return y.inherits(t,T),t.prototype.setOptions=function(e){if(this.channelOptions=e=e||{},e.cipher){if(!f)throw new Error("Encryption not enabled; use ably.encryption.js instead")
var t=f.getCipher(e.cipher)
e.cipher=t.cipherParams,e.channelCipher=t.cipher}else"cipher"in e&&(e.cipher=null,e.channelCipher=null)},t.prototype.history=function(t,n){if(b.logAction(b.LOG_MICRO,"Channel.history()","channel = "+this.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.rest.options.promises)return y.promisify(this,"history",arguments)
n=e}this._history(t,n)},t.prototype._history=function(e,t){var n=this.rest,r=n.options.useBinaryProtocol?"msgpack":"json",i=C.supportsLinkHeaders?void 0:r,o=y.defaultGetHeaders(r)
n.options.headers&&y.mixin(o,n.options.headers)
var s=this.channelOptions
new B(n,this.basePath+"/messages",o,i,(function(e,t,n){return k.fromResponseBody(e,s,!n&&r)})).get(e,t)},t.prototype.publish=function(){var t,i,o=arguments.length,s=arguments[0],a=arguments[1],c=arguments[o-1],u=this
if("function"!=typeof c){if(this.rest.options.promises)return y.promisify(this,"publish",arguments)
c=e}if("string"==typeof s||null===s)t=[k.fromValues({name:s,data:a})],i=arguments[2]
else if(y.isObject(s))t=[k.fromValues(s)],i=arguments[1]
else{if(!y.isArray(s))throw new _("The single-argument form of publish() expects a message object or an array of message objects",40013,400)
t=k.fromValuesArray(s),i=arguments[1]}"object"===n(i)&&i||(i={})
var p=this.rest,l=p.options,d=l.useBinaryProtocol?"msgpack":"json",h=p.options.idempotentRestPublishing,f=y.defaultPostHeaders(d)
if(l.headers&&y.mixin(f,l.headers),h&&r(t)){var m=y.randomString(9)
y.arrForEach(t,(function(e,t){e.id=m+":"+t.toString()}))}k.encodeArray(t,this.channelOptions,(function(e){if(e)c(e)
else{var n=k.getMessagesSize(t),r=l.maxMessageSize
n>r?c(new _("Maximum size of messages that can be published at once exceeded ( was "+n+" bytes; limit is "+r+" bytes)",40009,400)):u._publish(k.serialize(t,d),f,i,c)}}))},t.prototype._publish=function(e,t,n,r){q.post(this.rest,this.basePath+"/messages",e,t,n,!1,r)},t}(),X=function(){var e=P.Action,t=function(){}
function n(e,t,n){b.logAction(b.LOG_MINOR,"RealtimeChannel()","started; name = "+t),Q.call(this,e,t,n),this.realtime=e,this.presence=new $(this,e.options),this.connectionManager=e.connection.connectionManager,this.state="initialized",this.subscriptions=new T,this.syncChannelSerial=void 0,this.properties={attachSerial:void 0},this.setOptions(n),this.errorReason=null,this._requestedFlags=null,this._mode=null,this._attachedMsgIndicator=!1}return y.inherits(n,Q),n.invalidStateError=function(e){return{statusCode:400,code:90001,message:"Channel operation failed as channel state is "+e}},n.progressOps={statechange:"statechange",sync:"sync"},n.processListenerArgs=function(e){return"function"==typeof(e=Array.prototype.slice.call(e))[0]&&e.unshift(null),null==e[e.length-1]&&e.pop(),e},n.prototype.publish=function(){var e=arguments.length,n=arguments[0],r=arguments[e-1]
if("function"!=typeof r){if(this.realtime.options.promises)return y.promisify(this,"publish",arguments)
r=t,++e}if(this.connectionManager.activeState()){if(2==e)if(y.isObject(n))n=[k.fromValues(n)]
else{if(!y.isArray(n))throw new _("The single-argument form of publish() expects a message object or an array of message objects",40013,400)
n=k.fromValuesArray(n)}else n=[k.fromValues({name:arguments[0],data:arguments[1]})]
var i=this,o=this.realtime.options.maxMessageSize
k.encodeArray(n,this.channelOptions,(function(e){if(e)r(e)
else{var t=k.getMessagesSize(n)
t>o?r(new _("Maximum size of messages that can be published at once exceeded ( was "+t+" bytes; limit is "+o+" bytes)",40009,400)):i._publish(n,r)}}))}else r(this.connectionManager.getError())},n.prototype._publish=function(t,r){b.logAction(b.LOG_MICRO,"RealtimeChannel.publish()","message count = "+t.length)
var i=this.state
switch(i){case"failed":case"suspended":r(_.fromValues(n.invalidStateError(i)))
break
default:b.logAction(b.LOG_MICRO,"RealtimeChannel.publish()","sending message; channel state is "+i)
var o=new P
o.action=e.MESSAGE,o.channel=this.name,o.messages=t,this.sendMessage(o,r)}},n.prototype.onEvent=function(e){b.logAction(b.LOG_MICRO,"RealtimeChannel.onEvent()","received message")
for(var t=this.subscriptions,n=0;n<e.length;n++){var r=e[n]
t.emit(r.name,r)}},n.prototype.attach=function(e,t){if("function"==typeof e&&(t=e,e=null),!t){if(this.realtime.options.promises)return y.promisify(this,"attach",arguments)
t=function(e){e&&b.logAction(b.LOG_MAJOR,"RealtimeChannel.attach()","Channel attach failed: "+e.toString())}}e&&(this._requestedFlags=e)
var n=this.connectionManager
if(n.activeState())switch(this.state){case"attached":if(!e){t()
break}default:this.requestState("attaching")
case"attaching":this.once((function(e){switch(this.event){case"attached":t()
break
case"detached":case"suspended":case"failed":t(e.reason||n.getError())
break
case"detaching":t(new _("Attach request superseded by a subsequent detach request",9e4,409))}}))}else t(n.getError())},n.prototype.attachImpl=function(){b.logAction(b.LOG_MICRO,"RealtimeChannel.attachImpl()","sending ATTACH message"),this.setInProgress("statechange",!0)
var n=P.fromValues({action:e.ATTACH,channel:this.name})
this._requestedFlags&&y.arrForEach(this._requestedFlags,(function(e){n.setFlag(e)})),this.sendMessage(n,t)},n.prototype.detach=function(e){if(!e){if(this.realtime.options.promises)return y.promisify(this,"detach",arguments)
e=t}var n=this.connectionManager
if(n.activeState())switch(this.state){case"detached":case"failed":e()
break
default:this.requestState("detaching")
case"detaching":this.once((function(t){switch(this.event){case"detached":e()
break
case"attached":case"suspended":case"failed":e(t.reason||n.getError())
break
case"attaching":e(new _("Detach request superseded by a subsequent attach request",9e4,409))}}))}else e(n.getError())},n.prototype.detachImpl=function(n){b.logAction(b.LOG_MICRO,"RealtimeChannel.detach()","sending DETACH message"),this.setInProgress("statechange",!0)
var r=P.fromValues({action:e.DETACH,channel:this.name})
this.sendMessage(r,n||t)},n.prototype.subscribe=function(){var e=n.processListenerArgs(arguments),r=e[0],i=e[1],o=e[2]
if(!o){if(this.realtime.options.promises)return y.promisify(this,"subscribe",[r,i])
o=t}if("failed"!==this.state)return this.subscriptions.on(r,i),this.attach(o)
o(_.fromValues(n.invalidStateError("failed")))},n.prototype.unsubscribe=function(){var e=n.processListenerArgs(arguments),t=e[0],r=e[1]
this.subscriptions.off(t,r)},n.prototype.sync=function(){switch(this.state){case"initialized":case"detaching":case"detached":throw new _("Unable to sync to channel; not attached",4e4)}var t=this.connectionManager
if(!t.activeState())throw t.getError()
var n=P.fromValues({action:e.SYNC,channel:this.name})
this.syncChannelSerial&&(n.channelSerial=this.syncChannelSerial),t.send(n)},n.prototype.sendMessage=function(e,t){this.connectionManager.send(e,this.realtime.options.queueMessages,t)},n.prototype.sendPresence=function(t,n){var r=P.fromValues({action:e.PRESENCE,channel:this.name,presence:y.isArray(t)?E.fromValuesArray(t):[E.fromValues(t)]})
this.sendMessage(r,n)},n.prototype.onMessage=function(t){var n,r=!1
switch(t.action){case e.ATTACHED:if(this._attachedMsgIndicator=!0,this.properties.attachSerial=t.channelSerial,this._mode=t.getMode(),"attached"===this.state){var i=t.hasFlag("RESUMED")
if(!i||this.channelOptions.updateOnAttached){this.presence.onAttached(t.hasFlag("HAS_PRESENCE"))
var o=new W(this.state,this.state,i,t.error)
this.emit("update",o)}}else this.notifyState("attached",t.error,t.hasFlag("RESUMED"),t.hasFlag("HAS_PRESENCE"))
break
case e.DETACHED:var s=t.error?_.fromValues(t.error):new _("Channel detached",90001,404)
"detaching"===this.state?this.notifyState("detached",s):"attaching"===this.state?this.notifyState("suspended",s):this.requestState("attaching",s)
break
case e.SYNC:if(r=!0,n=this.syncChannelSerial=t.channelSerial,!t.presence)break
case e.PRESENCE:for(var a=t.presence,c=t.id,u=t.connectionId,p=t.timestamp,l=this.channelOptions,d=0;d<a.length;d++){try{var h=a[d]
E.decode(h,l)}catch(e){b.logAction(b.LOG_ERROR,"RealtimeChannel.onMessage()",e.toString())}h.connectionId||(h.connectionId=u),h.timestamp||(h.timestamp=p),h.id||(h.id=c+":"+d)}this.presence.setPresence(a,r,n)
break
case e.MESSAGE:var f=t.messages
for(c=t.id,u=t.connectionId,p=t.timestamp,l=this.channelOptions,d=0;d<f.length;d++){try{var m=f[d]
k.decode(m,l)}catch(e){b.logAction(b.LOG_MINOR,"RealtimeChannel.onMessage()",e.toString())}m.connectionId||(m.connectionId=u),m.timestamp||(m.timestamp=p),m.id||(m.id=c+":"+d)}this.onEvent(f)
break
case e.ERROR:(s=t.error)&&80016==s.code?this.checkPendingState():this.notifyState("failed",_.fromValues(s))
break
default:b.logAction(b.LOG_ERROR,"RealtimeChannel.onMessage()","Fatal protocol error: unrecognised action ("+t.action+")"),this.connectionManager.abort(x.unknownChannelErr)}},n.prototype.onAttached=function(){b.logAction(b.LOG_MINOR,"RealtimeChannel.onAttached","activating channel; name = "+this.name)},n.prototype.notifyState=function(e,t,n,r){if(b.logAction(b.LOG_MICRO,"RealtimeChannel.notifyState","name = "+this.name+", current state = "+this.state+", notifying state "+e),this.clearStateTimer(),e!==this.state){this.presence.actOnChannelState(e,r,t),"suspended"===e&&this.connectionManager.state.sendEvents?this.startRetryTimer():this.cancelRetryTimer(),t&&(this.errorReason=t)
var i=new W(this.state,e,n,t),o="failed"===e?b.LOG_ERROR:b.LOG_MAJOR
b.logAction(o,'Channel state for channel "'+this.name+'"',e+(t?"; reason: "+t:"")),"attached"===e?(this.onAttached(),this.setInProgress("sync",r),this.setInProgress("statechange",!1)):"detached"!==e&&"failed"!==e&&"suspended"!==e||(this.setInProgress("statechange",!1),this.setInProgress("sync",!1)),this.state=e,this.emit(e,i)}},n.prototype.requestState=function(e,t){b.logAction(b.LOG_MINOR,"RealtimeChannel.requestState","name = "+this.name+", state = "+e),this.notifyState(e,t),this.checkPendingState()},n.prototype.checkPendingState=function(){var e=this.connectionManager.state
if(e.sendEvents||e.forceQueueEvents)switch(b.logAction(b.LOG_MINOR,"RealtimeChannel.checkPendingState","name = "+this.name+", state = "+this.state),this.state){case"attaching":this.startStateTimerIfNotRunning(),this.attachImpl()
break
case"detaching":this.startStateTimerIfNotRunning(),this.detachImpl()
break
case"attached":this.sync()}else b.logAction(b.LOG_MINOR,"RealtimeChannel.checkPendingState","sendEvents is false; state is "+this.connectionManager.state.state)},n.prototype.timeoutPendingState=function(){switch(this.state){case"attaching":var e=new _("Channel attach timed out",90007,408)
this.notifyState("suspended",e)
break
case"detaching":e=new _("Channel detach timed out",90007,408),this.notifyState("attached",e)
break
default:this.checkPendingState()}},n.prototype.startStateTimerIfNotRunning=function(){var e=this
this.stateTimer||(this.stateTimer=setTimeout((function(){b.logAction(b.LOG_MINOR,"RealtimeChannel.startStateTimerIfNotRunning","timer expired"),e.stateTimer=null,e.timeoutPendingState()}),this.realtime.options.timeouts.realtimeRequestTimeout))},n.prototype.clearStateTimer=function(){var e=this.stateTimer
e&&(clearTimeout(e),this.stateTimer=null)},n.prototype.startRetryTimer=function(){var e=this
this.retryTimer||(this.retryTimer=setTimeout((function(){"suspended"===e.state&&e.connectionManager.state.sendEvents&&(e.retryTimer=null,b.logAction(b.LOG_MINOR,"RealtimeChannel retry timer expired","attempting a new attach"),e.requestState("attaching"))}),this.realtime.options.timeouts.channelRetryTimeout))},n.prototype.cancelRetryTimer=function(){this.retryTimer&&(clearTimeout(this.retryTimer),this.suspendTimer=null)},n.prototype.setInProgress=function(e,t){this.rest.channels.setInProgress(this,e,t)},n.prototype.history=function(e,n){if(b.logAction(b.LOG_MICRO,"RealtimeChannel.history()","channel = "+this.name),void 0===n)if("function"==typeof e)n=e,e=null
else{if(this.rest.options.promises)return y.promisify(this,"history",arguments)
n=t}if(e&&e.untilAttach){if("attached"!==this.state)return void n(new _("option untilAttach requires the channel to be attached",4e4,400))
if(!this.properties.attachSerial)return void n(new _("untilAttach was specified and channel is attached, but attachSerial is not defined",4e4,400))
delete e.untilAttach,e.from_serial=this.properties.attachSerial}Q.prototype._history.call(this,e,n)},n.prototype.whenState=function(e,t){T.prototype.whenState.call(this,e,this.state,t)},n}(),$=function(){var e=function(){}
function t(e){return e.clientId+":"+e.connectionId}function n(e){var t=e.channel.realtime,n=t.auth.clientId
return(!n||"*"===n)&&"connected"===t.connection.state}function r(e,t,n){switch(e.state){case"attached":case"suspended":n()
break
case"initialized":case"detached":case"detaching":case"attaching":e.attach((function(e){e?t(e):n()}))
break
default:t(_.fromValues(X.invalidStateError(e.state)))}}function i(e,t){j.call(this,e),this.syncComplete=!1,this.members=new o(this),this._myMembers=new o(this),this.subscriptions=new T,this.pendingPresence=[]}function o(e){T.call(this),this.presence=e,this.map={},this.syncInProgress=!1,this.residualMembers=null}function s(e,t){if(e.isSynthesized()||t.isSynthesized())return e.timestamp>t.timestamp
var n=e.parseId(),r=t.parseId()
return n.msgSerial===r.msgSerial?n.index>r.index:n.msgSerial>r.msgSerial}return y.inherits(i,j),i.prototype.enter=function(e,t){if(n(this))throw new _("clientId must be specified to enter a presence channel",40012,400)
return this._enterOrUpdateClient(void 0,e,"enter",t)},i.prototype.update=function(e,t){if(n(this))throw new _("clientId must be specified to update presence data",40012,400)
return this._enterOrUpdateClient(void 0,e,"update",t)},i.prototype.enterClient=function(e,t,n){return this._enterOrUpdateClient(e,t,"enter",n)},i.prototype.updateClient=function(e,t,n){return this._enterOrUpdateClient(e,t,"update",n)},i.prototype._enterOrUpdateClient=function(t,n,r,i){if(!i)if("function"==typeof n)i=n,n=null
else{if(this.channel.realtime.options.promises)return y.promisify(this,"_enterOrUpdateClient",[t,n,r])
i=e}var o=this.channel
if(o.connectionManager.activeState()){b.logAction(b.LOG_MICRO,"RealtimePresence."+r+"Client()","channel = "+o.name+", client = "+(t||"(implicit) "+this.channel.realtime.auth.clientId))
var s=E.fromValues({action:r,data:n})
t&&(s.clientId=t)
var a=this
E.encode(s,o.channelOptions,(function(e){if(e)i(e)
else switch(o.state){case"attached":o.sendPresence(s,i)
break
case"initialized":case"detached":o.attach()
case"attaching":a.pendingPresence.push({presence:s,callback:i})
break
default:(e=new _("Unable to "+r+" presence channel (incompatible state)",90001)).code=90001,i(e)}}))}else i(o.connectionManager.getError())},i.prototype.leave=function(e,t){if(n(this))throw new _("clientId must have been specified to enter or leave a presence channel",40012,400)
return this.leaveClient(void 0,e,t)},i.prototype.leaveClient=function(t,n,r){if(!r)if("function"==typeof n)r=n,n=null
else{if(this.channel.realtime.options.promises)return y.promisify(this,"leaveClient",[t,n])
r=e}var i=this.channel
if(i.connectionManager.activeState()){b.logAction(b.LOG_MICRO,"RealtimePresence.leaveClient()","leaving; channel = "+this.channel.name+", client = "+t)
var o=E.fromValues({action:"leave",data:n})
switch(t&&(o.clientId=t),i.state){case"attached":i.sendPresence(o,r)
break
case"attaching":this.pendingPresence.push({presence:o,callback:r})
break
case"initialized":case"failed":r(new _("Unable to leave presence channel (incompatible state)",90001))
break
default:r(x.failed)}}else r(i.connectionManager.getError())},i.prototype.get=function(){var t=Array.prototype.slice.call(arguments)
1==t.length&&"function"==typeof t[0]&&t.unshift(null)
var n=t[0],i=t[1],o=!n||!("waitForSync"in n)||n.waitForSync
if(!i){if(this.channel.realtime.options.promises)return y.promisify(this,"get",t)
i=e}function s(e){i(null,n?e.list(n):e.values())}if("suspended"!==this.channel.state){var a=this
r(this.channel,i,(function(){var e=a.members
o?e.waitSync((function(){s(e)})):s(e)}))}else o?i(_.fromValues({statusCode:400,code:91005,message:"Presence state is out of sync due to channel being in the SUSPENDED state"})):s(this.members)},i.prototype.history=function(t,n){if(b.logAction(b.LOG_MICRO,"RealtimePresence.history()","channel = "+this.name),void 0===n)if("function"==typeof t)n=t,t=null
else{if(this.channel.realtime.options.promises)return y.promisify(this,"history",arguments)
n=e}t&&t.untilAttach&&("attached"===this.channel.state?(delete t.untilAttach,t.from_serial=this.channel.properties.attachSerial):n(new _("option untilAttach requires the channel to be attached, was: "+this.channel.state,4e4,400))),j.prototype._history.call(this,t,n)},i.prototype.setPresence=function(e,t,n){b.logAction(b.LOG_MICRO,"RealtimePresence.setPresence()","received presence for "+e.length+" participants; syncChannelSerial = "+n)
var r,i,o=this.members,s=this._myMembers,a=[],c=this.channel.connectionManager.connectionId
t&&(this.members.startSync(),n&&(i=n.match(/^[\w\-]+:(.*)$/))&&(r=i[1]))
for(var u=0;u<e.length;u++)switch((p=E.fromValues(e[u])).action){case"leave":o.remove(p)&&a.push(p),p.connectionId!==c||p.isSynthesized()||s.remove(p)
break
case"enter":case"present":case"update":o.put(p)&&a.push(p),p.connectionId===c&&s.put(p)}for(t&&!r&&(o.endSync(),this._ensureMyMembersPresent(),this.channel.setInProgress(X.progressOps.sync,!1),this.channel.syncChannelSerial=null),u=0;u<a.length;u++){var p=a[u]
this.subscriptions.emit(p.action,p)}},i.prototype.onAttached=function(e){b.logAction(b.LOG_MINOR,"RealtimePresence.onAttached()","channel = "+this.channel.name+", hasPresence = "+e),e?this.members.startSync():(this._synthesizeLeaves(this.members.values()),this.members.clear(),this._ensureMyMembersPresent())
var t=this.pendingPresence,n=t.length
if(n){this.pendingPresence=[]
var r=[],i=O()
b.logAction(b.LOG_MICRO,"RealtimePresence.onAttached","sending "+n+" queued presence messages")
for(var o=0;o<n;o++){var s=t[o]
r.push(s.presence),i.push(s.callback)}this.channel.sendPresence(r,i)}},i.prototype.actOnChannelState=function(e,t,n){switch(e){case"attached":this.onAttached(t)
break
case"detached":case"failed":this._clearMyMembers(),this.members.clear()
case"suspended":this.failPendingPresence(n)}},i.prototype.failPendingPresence=function(e){if(this.pendingPresence.length){b.logAction(b.LOG_MINOR,"RealtimeChannel.failPendingPresence","channel; name = "+this.channel.name+", err = "+y.inspectError(e))
for(var t=0;t<this.pendingPresence.length;t++)try{this.pendingPresence[t].callback(e)}catch(e){}this.pendingPresence=[]}},i.prototype._clearMyMembers=function(){this._myMembers.clear()},i.prototype._ensureMyMembersPresent=function(){var e=this,t=this.members,n=this._myMembers,r=function(t){if(t){var n="Presence auto-re-enter failed: "+t.toString(),r=new _(n,91004,400)
b.logAction(b.LOG_ERROR,"RealtimePresence._ensureMyMembersPresent()",n)
var i=new W(e.channel.state,e.channel.state,!0,r)
e.channel.emit("update",i)}}
for(var i in n.map)if(!(i in t.map)){var o=n.map[i]
b.logAction(b.LOG_MICRO,"RealtimePresence._ensureMyMembersPresent()",'Auto-reentering clientId "'+o.clientId+'" into the presence set'),this._enterOrUpdateClient(o.clientId,o.data,"enter",r),delete n.map[i]}},i.prototype._synthesizeLeaves=function(e){var t=this.subscriptions
y.arrForEach(e,(function(e){var n=E.fromValues({action:"leave",connectionId:e.connectionId,clientId:e.clientId,data:e.data,encoding:e.encoding,timestamp:y.now()})
t.emit("leave",n)}))},i.prototype.on=function(){b.deprecated("presence.on","presence.subscribe"),this.subscribe.apply(this,arguments)},i.prototype.off=function(){b.deprecated("presence.off","presence.unsubscribe"),this.unsubscribe.apply(this,arguments)},i.prototype.subscribe=function(){var t=X.processListenerArgs(arguments),n=t[0],r=t[1],i=t[2],o=this.channel
if(!i){if(this.channel.realtime.options.promises)return y.promisify(this,"subscribe",[n,r])
i=e}"failed"!==o.state?(this.subscriptions.on(n,r),o.attach(i)):i(_.fromValues(X.invalidStateError("failed")))},i.prototype.unsubscribe=function(){var e=X.processListenerArgs(arguments),t=e[0],n=e[1]
this.subscriptions.off(t,n)},y.inherits(o,T),o.prototype.get=function(e){return this.map[e]},o.prototype.getClient=function(e){var t=this.map,n=[]
for(var r in t){var i=t[r]
i.clientId==e&&"absent"!=i.action&&n.push(i)}return n},o.prototype.list=function(e){var t=this.map,n=e&&e.clientId,r=e&&e.connectionId,i=[]
for(var o in t){var s=t[o]
"absent"!==s.action&&(n&&n!=s.clientId||r&&r!=s.connectionId||i.push(s))}return i},o.prototype.put=function(e){"enter"!==e.action&&"update"!==e.action||((e=E.fromValues(e)).action="present")
var n=this.map,r=t(e)
this.residualMembers&&delete this.residualMembers[r]
var i=n[r]
return!(i&&!s(e,i)||(n[r]=e,0))},o.prototype.values=function(){var e=this.map,t=[]
for(var n in e){var r=e[n]
"absent"!=r.action&&t.push(r)}return t},o.prototype.remove=function(e){var n=this.map,r=t(e),i=n[r]
return!(i&&!s(e,i)||(this.syncInProgress?((e=E.fromValues(e)).action="absent",n[r]=e):delete n[r],0))},o.prototype.startSync=function(){var e=this.map,t=this.syncInProgress
b.logAction(b.LOG_MINOR,"PresenceMap.startSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),this.syncInProgress||(this.residualMembers=y.copy(e),this.setInProgress(!0))},o.prototype.endSync=function(){var e=this.map,t=this.syncInProgress
if(b.logAction(b.LOG_MINOR,"PresenceMap.endSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),t){for(var n in e)"absent"===e[n].action&&delete e[n]
for(var n in this.presence._synthesizeLeaves(y.valuesArray(this.residualMembers)),this.residualMembers)delete e[n]
this.residualMembers=null,this.setInProgress(!1)}this.emit("sync")},o.prototype.waitSync=function(e){var t=this.syncInProgress
b.logAction(b.LOG_MINOR,"PresenceMap.waitSync()","channel = "+this.presence.channel.name+"; syncInProgress = "+t),t?this.once("sync",e):e()},o.prototype.clear=function(e){this.map={},this.setInProgress(!1),this.residualMembers=null},o.prototype.setInProgress=function(e){b.logAction(b.LOG_MICRO,"PresenceMap.setInProgress()","inProgress = "+e),this.syncInProgress=e,this.presence.syncComplete=!e},i}(),Y=function(){var e=function(){},t=0,r={},i=void 0!==a&&a.XDomainRequest
function o(){var e,t
return i&&(e=(t=navigator.userAgent.toString().match(/MSIE\s([\d.]+)/))&&Number(t[1]))&&10===e}function s(e,n,i,s,a,c,u){T.call(this),(i=i||{}).rnd=y.cheapRandStr(),o()&&!i.envelope&&(i.envelope="json"),this.uri=e+y.toQueryString(i),this.headers=n||{},this.body=s,this.method=u?u.toUpperCase():y.isEmptyArg(s)?"GET":"POST",this.requestMode=a,this.timeouts=c,this.timedOut=!1,this.requestComplete=!1,r[this.id=String(++t)]=this}y.inherits(s,T)
var c=s.createRequest=function(e,t,n,r,i,o,a){return o=o||g.TIMEOUTS,new s(e,t,y.copy(n),r,i,o,a)}
return s.prototype.complete=function(e,t,n,r,i){this.requestComplete||(this.requestComplete=!0,!e&&t&&this.emit("data",t),this.emit("complete",e,t,n,r,i),this.dispose())},s.prototype.abort=function(){this.dispose()},s.prototype.exec=function(){var e=0==this.requestMode?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout,t=this,n=this.timer=setTimeout((function(){t.timedOut=!0,s.abort()}),e),r=this.body,i=this.method,o=this.headers,s=this.xhr=new XMLHttpRequest,a=o.accept,c="text"
for(var u in a?0===a.indexOf("application/x-msgpack")&&(c="arraybuffer"):o.accept="application/json",r&&(o["content-type"]||(o["content-type"]="application/json")).indexOf("application/json")>-1&&"string"!=typeof r&&(r=JSON.stringify(r)),s.open(i,this.uri,!0),s.responseType=c,"authorization"in o&&(s.withCredentials=!0),o)s.setRequestHeader(u,o[u])
var p=function(e,n,r,i){var o=n+" (event type: "+e.type+")"+(t.xhr.statusText?", current statusText is "+t.xhr.statusText:"")
b.logAction(b.LOG_ERROR,"Request.on"+e.type+"()",o),t.complete(new _(o,r,i))}
s.onerror=function(e){p(e,"XHR error occurred",null,400)},s.onabort=function(e){t.timedOut?p(e,"Request aborted due to request timeout expiring",null,408):p(e,"Request cancelled",null,400)},s.ontimeout=function(e){p(e,"Request timed out",null,408)}
var l,d,h,f,m=0,g=!1
function C(){for(var e,t,n=(h=s.responseText).length-1;m<n&&(e=h.indexOf("\n",m))>-1;)t=h.slice(m,e),m=e+1,S(t)}function S(e){try{e=JSON.parse(e)}catch(e){return void t.complete(new _("Malformed response body from server: "+e.message,null,400))}t.emit("data",e)}s.onreadystatechange=function(){var e=s.readyState
e<3||0!==s.status&&(void 0===d&&(1223===(d=s.status)&&(d=204),clearTimeout(n),f=d<400,204!=d?l=3==t.requestMode&&f&&function(e){return e.getResponseHeader&&(e.getResponseHeader("transfer-encoding")||!e.getResponseHeader("content-length"))}(s):t.complete(null,null,null,null,d)),3==e&&l?C():4==e&&(l?(C(),t.streamComplete=!0,y.nextTick((function(){t.complete()}))):function(){try{var e,n,r=function(e,t){return e.getResponseHeader&&e.getResponseHeader("content-type")}(s);(r?r.indexOf("application/json")>=0:"text"==s.responseType)?((n="arraybuffer"===s.responseType?v.utf8Decode(s.response):String(s.responseText)).length&&(n=JSON.parse(n)),g=!0):n=s.response,void 0!==n.response?(d=n.statusCode,f=d<400,e=n.headers,n=n.response):e=function(e){for(var t=y.trim(e.getAllResponseHeaders()).split("\r\n"),n={},r=0;r<t.length;r++){var i=y.arrMap(t[r].split(":"),y.trim)
n[i[0].toLowerCase()]=i[1]}return n}(s)}catch(e){return void t.complete(new _("Malformed response body from server: "+e.message,null,400))}if(f||y.isArray(n))t.complete(null,n,e,g,d)
else{var i=n.error
i||(i=new _("Error response received from server: "+d+" body was: "+y.inspect(n),null,d)),t.complete(i,n,e,g,d)}}()))},s.send(r)},s.prototype.dispose=function(){var t=this.xhr
if(t){t.onreadystatechange=t.onerror=t.onabort=t.ontimeout=e,this.xhr=null
var n=this.timer
n&&(clearTimeout(n),this.timer=null),this.requestComplete||t.abort()}delete r[this.id]},h.xhrSupported&&("object"===n(u)&&u.addUnloadListener((function(){for(var e in r)r[e].dispose()})),void 0!==C&&(C.supportsAuthHeaders=!0,C.Request=function(e,t,n,r,i,o,s){var a=c(n,r,i,o,0,t&&t.options.timeouts,e)
return a.once("complete",s),a.exec(),a},C.checkConnectivity=function(e){var t=g.internetUpUrl
b.logAction(b.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Sending; "+t),C.getUri(null,t,null,null,(function(t,n){var r=!t&&"yes"==n.replace(/\n/,"")
b.logAction(b.LOG_MICRO,"(XHRRequest)Http.checkConnectivity()","Result: "+r),e(null,r)}))})),s}();(function(){function e(e,t,n){U.call(this,e,t,n),this.shortName="xhr_streaming"}y.inherits(e,U),e.isAvailable=function(){return h.xhrSupported&&h.streamingSupported&&h.allowComet},e.tryConnect=function(t,n,r,i){var o=new e(t,n,r),s=function(e){i({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){b.logAction(b.LOG_MINOR,"XHRStreamingTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),i(null,o)})),o.connect()},e.prototype.toString=function(){return"XHRStreamingTransport; uri="+this.baseUri+"; isConnected="+this.isConnected},e.prototype.createRequest=function(e,t,n,r,i){return Y.createRequest(e,t,n,r,i,this.timeouts)},void 0!==N&&e.isAvailable()&&(N.supportedTransports.xhr_streaming=e)})(),function(){function e(e,t,n){n.stream=!1,U.call(this,e,t,n),this.shortName="xhr_polling"}y.inherits(e,U),e.isAvailable=function(){return h.xhrSupported&&h.allowComet},e.tryConnect=function(t,n,r,i){var o=new e(t,n,r),s=function(e){i({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){b.logAction(b.LOG_MINOR,"XHRPollingTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),i(null,o)})),o.connect()},e.prototype.toString=function(){return"XHRPollingTransport; uri="+this.baseUri+"; isConnected="+this.isConnected},e.prototype.createRequest=function(e,t,n,r,i){return Y.createRequest(e,t,n,r,i,this.timeouts)},void 0!==N&&e.isAvailable()&&(N.supportedTransports.xhr_polling=e)}(),function(){var e=function(){},t=a._ablyjs_jsonp={}
t._=function(n){return t["_"+n]||e}
var n=1,r=null
function i(e,t,n){n.stream=!1,U.call(this,e,t,n),this.shortName="jsonp"}y.inherits(i,U),i.isAvailable=function(){return h.jsonpSupported&&h.allowComet},i.isAvailable()&&(N.supportedTransports.jsonp=i),h.jsonpSupported&&(r=document.getElementsByTagName("head")[0])
var o=null
a.JSONPTransport=i,i.tryConnect=function(e,t,n,r){var o=new i(e,t,n),s=function(e){r({event:this.event,error:e})}
o.on(["failed","disconnected"],s),o.on("preconnect",(function(){b.logAction(b.LOG_MINOR,"JSONPTransport.tryConnect()","viable transport "+o),o.off(["failed","disconnected"],s),r(null,o)})),o.connect()},i.prototype.toString=function(){return"JSONPTransport; uri="+this.baseUri+"; isConnected="+this.isConnected}
var s=i.prototype.createRequest=function(e,t,n,r,i,o,s){return o=this&&this.timeouts||o||g.TIMEOUTS,new c(void 0,e,t,y.copy(n),r,i,o,s)}
function c(e,t,r,i,o,s,a,c){T.call(this),void 0===e&&(e=n++),this.id=e,this.uri=t,this.params=i||{},this.params.rnd=y.cheapRandStr(),r&&(r["X-Ably-Version"]&&(this.params.v=r["X-Ably-Version"]),r["X-Ably-Lib"]&&(this.params.lib=r["X-Ably-Lib"])),this.body=o,this.method=c,this.requestMode=s,this.timeouts=a,this.requestComplete=!1}y.inherits(c,T),c.prototype.exec=function(){var e=this.id,n=this.body,i=this.method,o=this.uri,s=this.params,a=this
s.callback="_ablyjs_jsonp._("+e+")",s.envelope="jsonp",n&&(s.body=n),i&&"get"!==i&&(s.method=i)
var c=this.script=document.createElement("script"),u=o+y.toQueryString(s)
c.src=u,c.src.split("/").slice(-1)[0]!==u.split("/").slice(-1)[0]&&b.logAction(b.LOG_ERROR,"JSONP Request.exec()","Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"),c.async=!0,c.type="text/javascript",c.charset="UTF-8",c.onerror=function(e){a.complete(new _("JSONP script error (event: "+y.inspect(e)+")",null,400))},t["_"+e]=function(e){if(e.statusCode){var t=e.response
if(204==e.statusCode)a.complete(null,null,null,e.statusCode)
else if(t)if(e.statusCode<400||y.isArray(t))a.complete(null,t,e.headers,e.statusCode)
else{var n=t.error||new _("Error response received from server",null,e.statusCode)
a.complete(n)}else a.complete(new _("Invalid server response: no envelope detected",null,500))}else a.complete(null,e)}
var p=this.requestMode==U.REQ_SEND?this.timeouts.httpRequestTimeout:this.timeouts.recvTimeout
this.timer=setTimeout((function(){a.abort()}),p),r.insertBefore(c,r.firstChild)},c.prototype.complete=function(e,t,n,r){var i
n=n||{},this.requestComplete||(this.requestComplete=!0,t&&(i="string"==typeof t?"text/plain":"application/json",n["content-type"]=i,this.emit("data",t)),this.emit("complete",e,t,n,!0,r),this.dispose())},c.prototype.abort=function(){this.dispose()},c.prototype.dispose=function(){var e=this.timer
e&&(clearTimeout(e),this.timer=null)
var n=this.script
n.parentNode&&n.parentNode.removeChild(n),delete t[this.id],this.emit("disposed")},h.jsonpSupported&&!C.Request&&(C.Request=function(e,t,n,r,i,o,a){var c=s(n,r,i,o,U.REQ_SEND,t&&t.options.timeouts,e)
return c.once("complete",a),y.nextTick((function(){c.exec()})),c},C.checkConnectivity=function(e){var t=g.jsonpInternetUpUrl
if(o)o.push(e)
else{o=[e],b.logAction(b.LOG_MICRO,"(JSONP)Http.checkConnectivity()","Sending; "+t)
var n=new c("isTheInternetUp",t,null,null,null,U.REQ_SEND,g.TIMEOUTS)
n.once("complete",(function(e,t){var n=!e&&t
b.logAction(b.LOG_MICRO,"(JSONP)Http.checkConnectivity()","Result: "+n)
for(var r=0;r<o.length;r++)o[r](null,n)
o=null})),y.nextTick((function(){n.exec()}))}})}(),s.msgpack=p,s.Rest=H,s.Realtime=z,z.ConnectionManager=N,z.BufferUtils=H.BufferUtils=v,void 0!==f&&(z.Crypto=H.Crypto=f),z.Defaults=H.Defaults=g,z.Http=H.Http=C,z.Utils=H.Utils=y,z.Http=H.Http=C,z.Message=H.Message=k,z.PresenceMessage=H.PresenceMessage=E,z.ProtocolMessage=H.ProtocolMessage=P,e.exports=s,e.exports.__esModule=!0}).call(this,n(1).Buffer)}}]),(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[4],{43:function(e,t,n){var r,i,o,s
function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s=function(){return function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){if(o)return o(s,!0)
var c=new Error("Cannot find module '"+s+"'")
throw c.code="MODULE_NOT_FOUND",c}var u=n[s]={exports:{}}
t[s][0].call(u.exports,(function(e){return i(t[s][1][e]||e)}),u,u.exports,e,t,n,r)}return n[s].exports}for(var o=!1,s=0;s<r.length;s++)i(r[s])
return i}({1:[function(e,t,n){"use strict"
var r=(0,e("./adapter_factory.js").adapterFactory)({window:window})
t.exports=r},{"./adapter_factory.js":2}],2:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.adapterFactory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.window,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0},u=r.log,p=r.detectBrowser(t),l={browserDetails:p,commonShim:c,extractVersion:r.extractVersion,disableLog:r.disableLog,disableWarnings:r.disableWarnings}
switch(p.browser){case"chrome":if(!i||!i.shimPeerConnection||!n.shimChrome)return u("Chrome shim is not included in this adapter release."),l
u("adapter.js shimming chrome."),l.browserShim=i,i.shimGetUserMedia(t),i.shimMediaStream(t),i.shimPeerConnection(t),i.shimOnTrack(t),i.shimAddTrackRemoveTrack(t),i.shimGetSendersWithDtmf(t),i.shimGetStats(t),i.shimSenderReceiverGetStats(t),i.fixNegotiationNeeded(t),c.shimRTCIceCandidate(t),c.shimConnectionState(t),c.shimMaxMessageSize(t),c.shimSendThrowTypeError(t),c.removeAllowExtmapMixed(t)
break
case"firefox":if(!s||!s.shimPeerConnection||!n.shimFirefox)return u("Firefox shim is not included in this adapter release."),l
u("adapter.js shimming firefox."),l.browserShim=s,s.shimGetUserMedia(t),s.shimPeerConnection(t),s.shimOnTrack(t),s.shimRemoveStream(t),s.shimSenderGetStats(t),s.shimReceiverGetStats(t),s.shimRTCDataChannel(t),s.shimAddTransceiver(t),s.shimCreateOffer(t),s.shimCreateAnswer(t),c.shimRTCIceCandidate(t),c.shimConnectionState(t),c.shimMaxMessageSize(t),c.shimSendThrowTypeError(t)
break
case"edge":if(!o||!o.shimPeerConnection||!n.shimEdge)return u("MS edge shim is not included in this adapter release."),l
u("adapter.js shimming edge."),l.browserShim=o,o.shimGetUserMedia(t),o.shimGetDisplayMedia(t),o.shimPeerConnection(t),o.shimReplaceTrack(t),c.shimMaxMessageSize(t),c.shimSendThrowTypeError(t)
break
case"safari":if(!a||!n.shimSafari)return u("Safari shim is not included in this adapter release."),l
u("adapter.js shimming safari."),l.browserShim=a,a.shimRTCIceServerUrls(t),a.shimCreateOfferLegacy(t),a.shimCallbacksAPI(t),a.shimLocalStreamsAPI(t),a.shimRemoteStreamsAPI(t),a.shimTrackEventTransceiver(t),a.shimGetUserMedia(t),c.shimRTCIceCandidate(t),c.shimMaxMessageSize(t),c.shimSendThrowTypeError(t),c.removeAllowExtmapMixed(t)
break
default:u("Unsupported browser!")}return l}
var r=u(e("./utils")),i=u(e("./chrome/chrome_shim")),o=u(e("./edge/edge_shim")),s=u(e("./firefox/firefox_shim")),a=u(e("./safari/safari_shim")),c=u(e("./common_shim"))
function u(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}},{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":7,"./firefox/firefox_shim":11,"./safari/safari_shim":14,"./utils":15}],3:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=n.shimGetUserMedia=void 0
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},i=e("./getusermedia")
Object.defineProperty(n,"shimGetUserMedia",{enumerable:!0,get:function(){return i.shimGetUserMedia}})
var o=e("./getdisplaymedia")
Object.defineProperty(n,"shimGetDisplayMedia",{enumerable:!0,get:function(){return o.shimGetDisplayMedia}}),n.shimMediaStream=function(e){e.MediaStream=e.MediaStream||e.webkitMediaStream},n.shimOnTrack=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&!("ontrack"in e.RTCPeerConnection.prototype)){Object.defineProperty(e.RTCPeerConnection.prototype,"ontrack",{get:function(){return this._ontrack},set:function(e){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=e)},enumerable:!0,configurable:!0})
var t=e.RTCPeerConnection.prototype.setRemoteDescription
e.RTCPeerConnection.prototype.setRemoteDescription=function(){var n=this
return this._ontrackpoly||(this._ontrackpoly=function(t){t.stream.addEventListener("addtrack",(function(r){var i
i=e.RTCPeerConnection.prototype.getReceivers?n.getReceivers().find((function(e){return e.track&&e.track.id===r.track.id})):{track:r.track}
var o=new Event("track")
o.track=r.track,o.receiver=i,o.transceiver={receiver:i},o.streams=[t.stream],n.dispatchEvent(o)})),t.stream.getTracks().forEach((function(r){var i
i=e.RTCPeerConnection.prototype.getReceivers?n.getReceivers().find((function(e){return e.track&&e.track.id===r.id})):{track:r}
var o=new Event("track")
o.track=r,o.receiver=i,o.transceiver={receiver:i},o.streams=[t.stream],n.dispatchEvent(o)}))},this.addEventListener("addstream",this._ontrackpoly)),t.apply(this,arguments)}}else s.wrapPeerConnectionEvent(e,"track",(function(e){return e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e}))},n.shimGetSendersWithDtmf=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&!("getSenders"in e.RTCPeerConnection.prototype)&&"createDTMFSender"in e.RTCPeerConnection.prototype){var t=function(e,t){return{track:t,get dtmf(){return void 0===this._dtmf&&("audio"===t.kind?this._dtmf=e.createDTMFSender(t):this._dtmf=null),this._dtmf},_pc:e}}
if(!e.RTCPeerConnection.prototype.getSenders){e.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()}
var n=e.RTCPeerConnection.prototype.addTrack
e.RTCPeerConnection.prototype.addTrack=function(e,r){var i=n.apply(this,arguments)
return i||(i=t(this,e),this._senders.push(i)),i}
var i=e.RTCPeerConnection.prototype.removeTrack
e.RTCPeerConnection.prototype.removeTrack=function(e){i.apply(this,arguments)
var t=this._senders.indexOf(e);-1!==t&&this._senders.splice(t,1)}}var o=e.RTCPeerConnection.prototype.addStream
e.RTCPeerConnection.prototype.addStream=function(e){var n=this
this._senders=this._senders||[],o.apply(this,[e]),e.getTracks().forEach((function(e){n._senders.push(t(n,e))}))}
var s=e.RTCPeerConnection.prototype.removeStream
e.RTCPeerConnection.prototype.removeStream=function(e){var t=this
this._senders=this._senders||[],s.apply(this,[e]),e.getTracks().forEach((function(e){var n=t._senders.find((function(t){return t.track===e}))
n&&t._senders.splice(t._senders.indexOf(n),1)}))}}else if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&"getSenders"in e.RTCPeerConnection.prototype&&"createDTMFSender"in e.RTCPeerConnection.prototype&&e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)){var a=e.RTCPeerConnection.prototype.getSenders
e.RTCPeerConnection.prototype.getSenders=function(){var e=this,t=a.apply(this,[])
return t.forEach((function(t){return t._pc=e})),t},Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}},n.shimGetStats=function(e){if(e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.getStats
e.RTCPeerConnection.prototype.getStats=function(){var e=this,n=Array.prototype.slice.call(arguments),r=n[0],i=n[1],o=n[2]
if(arguments.length>0&&"function"==typeof r)return t.apply(this,arguments)
if(0===t.length&&(0===arguments.length||"function"!=typeof r))return t.apply(this,[])
var s=function(e){var t={}
return e.result().forEach((function(e){var n={id:e.id,timestamp:e.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[e.type]||e.type}
e.names().forEach((function(t){n[t]=e.stat(t)})),t[n.id]=n})),t},a=function(e){return new Map(Object.keys(e).map((function(t){return[t,e[t]]})))}
if(arguments.length>=2){var c=function(e){i(a(s(e)))}
return t.apply(this,[c,r])}return new Promise((function(n,r){t.apply(e,[function(e){n(a(s(e)))},r])})).then(i,o)}}},n.shimSenderReceiverGetStats=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&e.RTCRtpSender&&e.RTCRtpReceiver){if(!("getStats"in e.RTCRtpSender.prototype)){var t=e.RTCPeerConnection.prototype.getSenders
t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,n=t.apply(this,[])
return n.forEach((function(t){return t._pc=e})),n})
var n=e.RTCPeerConnection.prototype.addTrack
n&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments)
return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){var e=this
return this._pc.getStats().then((function(t){return s.filterStats(t,e.track,!0)}))}}if(!("getStats"in e.RTCRtpReceiver.prototype)){var i=e.RTCPeerConnection.prototype.getReceivers
i&&(e.RTCPeerConnection.prototype.getReceivers=function(){var e=this,t=i.apply(this,[])
return t.forEach((function(t){return t._pc=e})),t}),s.wrapPeerConnectionEvent(e,"track",(function(e){return e.receiver._pc=e.srcElement,e})),e.RTCRtpReceiver.prototype.getStats=function(){var e=this
return this._pc.getStats().then((function(t){return s.filterStats(t,e.track,!1)}))}}if("getStats"in e.RTCRtpSender.prototype&&"getStats"in e.RTCRtpReceiver.prototype){var o=e.RTCPeerConnection.prototype.getStats
e.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof e.MediaStreamTrack){var t=arguments[0],n=void 0,r=void 0,i=void 0
return this.getSenders().forEach((function(e){e.track===t&&(n?i=!0:n=e)})),this.getReceivers().forEach((function(e){return e.track===t&&(r?i=!0:r=e),e.track===t})),i||n&&r?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):n?n.getStats():r?r.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return o.apply(this,arguments)}}}},n.shimAddTrackRemoveTrackWithNative=u,n.shimAddTrackRemoveTrack=function(e){if(e.RTCPeerConnection){var t=s.detectBrowser(e)
if(e.RTCPeerConnection.prototype.addTrack&&t.version>=65)return u(e)
var n=e.RTCPeerConnection.prototype.getLocalStreams
e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this,t=n.apply(this)
return this._reverseStreams=this._reverseStreams||{},t.map((function(t){return e._reverseStreams[t.id]}))}
var r=e.RTCPeerConnection.prototype.addStream
e.RTCPeerConnection.prototype.addStream=function(t){var n=this
if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},t.getTracks().forEach((function(e){if(n.getSenders().find((function(t){return t.track===e})))throw new DOMException("Track already exists.","InvalidAccessError")})),!this._reverseStreams[t.id]){var i=new e.MediaStream(t.getTracks())
this._streams[t.id]=i,this._reverseStreams[i.id]=t,t=i}r.apply(this,[t])}
var i=e.RTCPeerConnection.prototype.removeStream
e.RTCPeerConnection.prototype.removeStream=function(e){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[e.id]||e]),delete this._reverseStreams[this._streams[e.id]?this._streams[e.id].id:e.id],delete this._streams[e.id]},e.RTCPeerConnection.prototype.addTrack=function(t,n){var r=this
if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError")
var i=[].slice.call(arguments,1)
if(1!==i.length||!i[0].getTracks().find((function(e){return e===t})))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError")
var o=this.getSenders().find((function(e){return e.track===t}))
if(o)throw new DOMException("Track already exists.","InvalidAccessError")
this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{}
var s=this._streams[n.id]
if(s)s.addTrack(t),Promise.resolve().then((function(){r.dispatchEvent(new Event("negotiationneeded"))}))
else{var a=new e.MediaStream([t])
this._streams[n.id]=a,this._reverseStreams[a.id]=n,this.addStream(a)}return this.getSenders().find((function(e){return e.track===t}))},["createOffer","createAnswer"].forEach((function(t){var n=e.RTCPeerConnection.prototype[t],r=c({},t,(function(){var e=this,t=arguments,r=arguments.length&&"function"==typeof arguments[0]
return r?n.apply(this,[function(n){var r=p(e,n)
t[0].apply(null,[r])},function(e){t[1]&&t[1].apply(null,e)},arguments[2]]):n.apply(this,arguments).then((function(t){return p(e,t)}))}))
e.RTCPeerConnection.prototype[t]=r[t]}))
var o=e.RTCPeerConnection.prototype.setLocalDescription
e.RTCPeerConnection.prototype.setLocalDescription=function(){return arguments.length&&arguments[0].type?(arguments[0]=l(this,arguments[0]),o.apply(this,arguments)):o.apply(this,arguments)}
var a=Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype,"localDescription")
Object.defineProperty(e.RTCPeerConnection.prototype,"localDescription",{get:function(){var e=a.get.apply(this)
return""===e.type?e:p(this,e)}}),e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this
if("closed"===this.signalingState)throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError")
if(!e._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError")
if(e._pc!==this)throw new DOMException("Sender was not created by this connection.","InvalidAccessError")
this._streams=this._streams||{}
var n=void 0
Object.keys(this._streams).forEach((function(r){t._streams[r].getTracks().find((function(t){return e.track===t}))&&(n=t._streams[r])})),n&&(1===n.getTracks().length?this.removeStream(this._reverseStreams[n.id]):n.removeTrack(e.track),this.dispatchEvent(new Event("negotiationneeded")))}}function p(e,t){var n=t.sdp
return Object.keys(e._reverseStreams||[]).forEach((function(t){var r=e._reverseStreams[t],i=e._streams[r.id]
n=n.replace(new RegExp(i.id,"g"),r.id)})),new RTCSessionDescription({type:t.type,sdp:n})}function l(e,t){var n=t.sdp
return Object.keys(e._reverseStreams||[]).forEach((function(t){var r=e._reverseStreams[t],i=e._streams[r.id]
n=n.replace(new RegExp(r.id,"g"),i.id)})),new RTCSessionDescription({type:t.type,sdp:n})}},n.shimPeerConnection=function(e){var t=s.detectBrowser(e)
if(!e.RTCPeerConnection&&e.webkitRTCPeerConnection&&(e.RTCPeerConnection=e.webkitRTCPeerConnection),e.RTCPeerConnection){var n=0===e.RTCPeerConnection.prototype.addIceCandidate.length
t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach((function(t){var n=e.RTCPeerConnection.prototype[t],r=c({},t,(function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}))
e.RTCPeerConnection.prototype[t]=r[t]}))
var r=e.RTCPeerConnection.prototype.addIceCandidate
e.RTCPeerConnection.prototype.addIceCandidate=function(){return n||arguments[0]?t.version<78&&arguments[0]&&""===arguments[0].candidate?Promise.resolve():r.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}},n.fixNegotiationNeeded=function(e){s.wrapPeerConnectionEvent(e,"negotiationneeded",(function(e){if("stable"===e.target.signalingState)return e}))}
var s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils.js"))
function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){e.RTCPeerConnection.prototype.getLocalStreams=function(){var e=this
return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map((function(t){return e._shimmedLocalStreams[t][0]}))}
var t=e.RTCPeerConnection.prototype.addTrack
e.RTCPeerConnection.prototype.addTrack=function(e,n){if(!n)return t.apply(this,arguments)
this._shimmedLocalStreams=this._shimmedLocalStreams||{}
var r=t.apply(this,arguments)
return this._shimmedLocalStreams[n.id]?-1===this._shimmedLocalStreams[n.id].indexOf(r)&&this._shimmedLocalStreams[n.id].push(r):this._shimmedLocalStreams[n.id]=[n,r],r}
var n=e.RTCPeerConnection.prototype.addStream
e.RTCPeerConnection.prototype.addStream=function(e){var t=this
this._shimmedLocalStreams=this._shimmedLocalStreams||{},e.getTracks().forEach((function(e){if(t.getSenders().find((function(t){return t.track===e})))throw new DOMException("Track already exists.","InvalidAccessError")}))
var r=this.getSenders()
n.apply(this,arguments)
var i=this.getSenders().filter((function(e){return-1===r.indexOf(e)}))
this._shimmedLocalStreams[e.id]=[e].concat(i)}
var r=e.RTCPeerConnection.prototype.removeStream
e.RTCPeerConnection.prototype.removeStream=function(e){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[e.id],r.apply(this,arguments)}
var i=e.RTCPeerConnection.prototype.removeTrack
e.RTCPeerConnection.prototype.removeTrack=function(e){var t=this
return this._shimmedLocalStreams=this._shimmedLocalStreams||{},e&&Object.keys(this._shimmedLocalStreams).forEach((function(n){var r=t._shimmedLocalStreams[n].indexOf(e);-1!==r&&t._shimmedLocalStreams[n].splice(r,1),1===t._shimmedLocalStreams[n].length&&delete t._shimmedLocalStreams[n]})),i.apply(this,arguments)}}},{"../utils.js":15,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=function(e,t){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&("function"==typeof t?e.navigator.mediaDevices.getDisplayMedia=function(n){return t(n).then((function(t){var r=n.video&&n.video.width,i=n.video&&n.video.height,o=n.video&&n.video.frameRate
return n.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:t,maxFrameRate:o||3}},r&&(n.video.mandatory.maxWidth=r),i&&(n.video.mandatory.maxHeight=i),e.navigator.mediaDevices.getUserMedia(n)}))}:console.error("shimGetDisplayMedia: getSourceId argument is not a function"))}},{}],5:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)}
n.shimGetUserMedia=function(e){var t=e&&e.navigator
if(t.mediaDevices){var n=i.detectBrowser(e),s=function(e){if("object"!==(void 0===e?"undefined":r(e))||e.mandatory||e.optional)return e
var t={}
return Object.keys(e).forEach((function(n){if("require"!==n&&"advanced"!==n&&"mediaSource"!==n){var i="object"===r(e[n])?e[n]:{ideal:e[n]}
void 0!==i.exact&&"number"==typeof i.exact&&(i.min=i.max=i.exact)
var o=function(e,t){return e?e+t.charAt(0).toUpperCase()+t.slice(1):"deviceId"===t?"sourceId":t}
if(void 0!==i.ideal){t.optional=t.optional||[]
var s={}
"number"==typeof i.ideal?(s[o("min",n)]=i.ideal,t.optional.push(s),(s={})[o("max",n)]=i.ideal,t.optional.push(s)):(s[o("",n)]=i.ideal,t.optional.push(s))}void 0!==i.exact&&"number"!=typeof i.exact?(t.mandatory=t.mandatory||{},t.mandatory[o("",n)]=i.exact):["min","max"].forEach((function(e){void 0!==i[e]&&(t.mandatory=t.mandatory||{},t.mandatory[o(e,n)]=i[e])}))}})),e.advanced&&(t.optional=(t.optional||[]).concat(e.advanced)),t},a=function(e,i){if(n.version>=61)return i(e)
if((e=JSON.parse(JSON.stringify(e)))&&"object"===r(e.audio)){var a=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])}
a((e=JSON.parse(JSON.stringify(e))).audio,"autoGainControl","googAutoGainControl"),a(e.audio,"noiseSuppression","googNoiseSuppression"),e.audio=s(e.audio)}if(e&&"object"===r(e.video)){var c=e.video.facingMode
c=c&&("object"===(void 0===c?"undefined":r(c))?c:{ideal:c})
var u=n.version<66
if(c&&("user"===c.exact||"environment"===c.exact||"user"===c.ideal||"environment"===c.ideal)&&(!t.mediaDevices.getSupportedConstraints||!t.mediaDevices.getSupportedConstraints().facingMode||u)){delete e.video.facingMode
var p=void 0
if("environment"===c.exact||"environment"===c.ideal?p=["back","rear"]:"user"!==c.exact&&"user"!==c.ideal||(p=["front"]),p)return t.mediaDevices.enumerateDevices().then((function(t){var n=(t=t.filter((function(e){return"videoinput"===e.kind}))).find((function(e){return p.some((function(t){return e.label.toLowerCase().includes(t)}))}))
return!n&&t.length&&p.includes("back")&&(n=t[t.length-1]),n&&(e.video.deviceId=c.exact?{exact:n.deviceId}:{ideal:n.deviceId}),e.video=s(e.video),o("chrome: "+JSON.stringify(e)),i(e)}))}e.video=s(e.video)}return o("chrome: "+JSON.stringify(e)),i(e)},c=function(e){return n.version>=64?e:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[e.name]||e.name,message:e.message,constraint:e.constraint||e.constraintName,toString:function(){return this.name+(this.message&&": ")+this.message}}}
if(t.getUserMedia=function(e,n,r){a(e,(function(e){t.webkitGetUserMedia(e,n,(function(e){r&&r(c(e))}))}))}.bind(t),t.mediaDevices.getUserMedia){var u=t.mediaDevices.getUserMedia.bind(t.mediaDevices)
t.mediaDevices.getUserMedia=function(e){return a(e,(function(e){return u(e).then((function(t){if(e.audio&&!t.getAudioTracks().length||e.video&&!t.getVideoTracks().length)throw t.getTracks().forEach((function(e){e.stop()})),new DOMException("","NotFoundError")
return t}),(function(e){return Promise.reject(c(e))}))}))}}}}
var i=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils.js")),o=i.log},{"../utils.js":15}],6:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)}
n.shimRTCIceCandidate=function(e){if(!(!e.RTCIceCandidate||e.RTCIceCandidate&&"foundation"in e.RTCIceCandidate.prototype)){var t=e.RTCIceCandidate
e.RTCIceCandidate=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.candidate&&0===e.candidate.indexOf("a=")&&((e=JSON.parse(JSON.stringify(e))).candidate=e.candidate.substr(2)),e.candidate&&e.candidate.length){var n=new t(e),i=o.default.parseCandidate(e.candidate),s=Object.assign(n,i)
return s.toJSON=function(){return{candidate:s.candidate,sdpMid:s.sdpMid,sdpMLineIndex:s.sdpMLineIndex,usernameFragment:s.usernameFragment}},s}return new t(e)},e.RTCIceCandidate.prototype=t.prototype,s.wrapPeerConnectionEvent(e,"icecandidate",(function(t){return t.candidate&&Object.defineProperty(t,"candidate",{value:new e.RTCIceCandidate(t.candidate),writable:"false"}),t}))}},n.shimMaxMessageSize=function(e){if(e.RTCPeerConnection){var t=s.detectBrowser(e)
"sctp"in e.RTCPeerConnection.prototype||Object.defineProperty(e.RTCPeerConnection.prototype,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp}})
var n=function(e){if(!e||!e.sdp)return!1
var t=o.default.splitSections(e.sdp)
return t.shift(),t.some((function(e){var t=o.default.parseMLine(e)
return t&&"application"===t.kind&&-1!==t.protocol.indexOf("SCTP")}))},r=function(e){var t=e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/)
if(null===t||t.length<2)return-1
var n=parseInt(t[1],10)
return n!=n?-1:n},i=function(e){var n=65536
return"firefox"===t.browser&&(n=t.version<57?-1===e?16384:2147483637:t.version<60?57===t.version?65535:65536:2147483637),n},a=function(e,n){var r=65536
"firefox"===t.browser&&57===t.version&&(r=65535)
var i=o.default.matchPrefix(e.sdp,"a=max-message-size:")
return i.length>0?r=parseInt(i[0].substr(19),10):"firefox"===t.browser&&-1!==n&&(r=2147483637),r},c=e.RTCPeerConnection.prototype.setRemoteDescription
e.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,"chrome"===t.browser&&t.version>=76){var e=this.getConfiguration(),o=e.sdpSemantics
"plan-b"===o&&Object.defineProperty(this,"sctp",{get:function(){return void 0===this._sctp?null:this._sctp},enumerable:!0,configurable:!0})}if(n(arguments[0])){var s=r(arguments[0]),u=i(s),p=a(arguments[0],s),l=void 0
l=0===u&&0===p?Number.POSITIVE_INFINITY:0===u||0===p?Math.max(u,p):Math.min(u,p)
var d={}
Object.defineProperty(d,"maxMessageSize",{get:function(){return l}}),this._sctp=d}return c.apply(this,arguments)}}},n.shimSendThrowTypeError=function(e){if(e.RTCPeerConnection&&"createDataChannel"in e.RTCPeerConnection.prototype){var t=e.RTCPeerConnection.prototype.createDataChannel
e.RTCPeerConnection.prototype.createDataChannel=function(){var e=t.apply(this,arguments)
return n(e,this),e},s.wrapPeerConnectionEvent(e,"datachannel",(function(e){return n(e.channel,e.target),e}))}function n(e,t){var n=e.send
e.send=function(){var r=arguments[0],i=r.length||r.size||r.byteLength
if("open"===e.readyState&&t.sctp&&i>t.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+t.sctp.maxMessageSize+" bytes)")
return n.apply(e,arguments)}}},n.shimConnectionState=function(e){if(e.RTCPeerConnection&&!("connectionState"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype
Object.defineProperty(t,"connectionState",{get:function(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(t,"onconnectionstatechange",{get:function(){return this._onconnectionstatechange||null},set:function(e){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),e&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=e)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach((function(e){var n=t[e]
t[e]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=function(e){var t=e.target
if(t._lastConnectionState!==t.connectionState){t._lastConnectionState=t.connectionState
var n=new Event("connectionstatechange",e)
t.dispatchEvent(n)}return e},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)}}))}},n.removeAllowExtmapMixed=function(e){if(e.RTCPeerConnection){var t=s.detectBrowser(e)
if(!("chrome"===t.browser&&t.version>=71)){var n=e.RTCPeerConnection.prototype.setRemoteDescription
e.RTCPeerConnection.prototype.setRemoteDescription=function(e){return e&&e.sdp&&-1!==e.sdp.indexOf("\na=extmap-allow-mixed")&&(e.sdp=e.sdp.split("\n").filter((function(e){return"a=extmap-allow-mixed"!==e.trim()})).join("\n")),n.apply(this,arguments)}}}}
var i,o=(i=e("sdp"))&&i.__esModule?i:{default:i},s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("./utils"))},{"./utils":15,sdp:17}],7:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=n.shimGetUserMedia=void 0
var r=e("./getusermedia")
Object.defineProperty(n,"shimGetUserMedia",{enumerable:!0,get:function(){return r.shimGetUserMedia}})
var i=e("./getdisplaymedia")
Object.defineProperty(n,"shimGetDisplayMedia",{enumerable:!0,get:function(){return i.shimGetDisplayMedia}}),n.shimPeerConnection=function(e){var t=s.detectBrowser(e)
if(e.RTCIceGatherer&&(e.RTCIceCandidate||(e.RTCIceCandidate=function(e){return e}),e.RTCSessionDescription||(e.RTCSessionDescription=function(e){return e}),t.version<15025)){var n=Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype,"enabled")
Object.defineProperty(e.MediaStreamTrack.prototype,"enabled",{set:function(e){n.set.call(this,e)
var t=new Event("enabled")
t.enabled=e,this.dispatchEvent(t)}})}e.RTCRtpSender&&!("dtmf"in e.RTCRtpSender.prototype)&&Object.defineProperty(e.RTCRtpSender.prototype,"dtmf",{get:function(){return void 0===this._dtmf&&("audio"===this.track.kind?this._dtmf=new e.RTCDtmfSender(this):"video"===this.track.kind&&(this._dtmf=null)),this._dtmf}}),e.RTCDtmfSender&&!e.RTCDTMFSender&&(e.RTCDTMFSender=e.RTCDtmfSender)
var r=(0,c.default)(e,t.version)
e.RTCPeerConnection=function(e){return e&&e.iceServers&&(e.iceServers=(0,a.filterIceServers)(e.iceServers,t.version),s.log("ICE servers after filtering:",e.iceServers)),new r(e)},e.RTCPeerConnection.prototype=r.prototype},n.shimReplaceTrack=function(e){e.RTCRtpSender&&!("replaceTrack"in e.RTCRtpSender.prototype)&&(e.RTCRtpSender.prototype.replaceTrack=e.RTCRtpSender.prototype.setTrack)}
var o,s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils")),a=e("./filtericeservers"),c=(o=e("rtcpeerconnection-shim"))&&o.__esModule?o:{default:o}},{"../utils":15,"./filtericeservers":8,"./getdisplaymedia":9,"./getusermedia":10,"rtcpeerconnection-shim":16}],8:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.filterIceServers=function(e,t){var n=!1
return(e=JSON.parse(JSON.stringify(e))).filter((function(e){if(e&&(e.urls||e.url)){var t=e.urls||e.url
e.url&&!e.urls&&r.deprecated("RTCIceServer.url","RTCIceServer.urls")
var i="string"==typeof t
return i&&(t=[t]),t=t.filter((function(e){if(0===e.indexOf("stun:"))return!1
var t=e.startsWith("turn")&&!e.startsWith("turn:[")&&e.includes("transport=udp")
return t&&!n?(n=!0,!0):t&&!n})),delete e.url,e.urls=i?t[0]:t,!!t.length}}))}
var r=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils"))},{"../utils":15}],9:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=function(e){"getDisplayMedia"in e.navigator&&e.navigator.mediaDevices&&(e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||(e.navigator.mediaDevices.getDisplayMedia=e.navigator.getDisplayMedia.bind(e.navigator)))}},{}],10:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetUserMedia=function(e){var t=e&&e.navigator,n=t.mediaDevices.getUserMedia.bind(t.mediaDevices)
t.mediaDevices.getUserMedia=function(e){return n(e).catch((function(e){return Promise.reject(function(e){return{name:{PermissionDeniedError:"NotAllowedError"}[e.name]||e.name,message:e.message,constraint:e.constraint,toString:function(){return this.name}}}(e))}))}}},{}],11:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=n.shimGetUserMedia=void 0
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},i=e("./getusermedia")
Object.defineProperty(n,"shimGetUserMedia",{enumerable:!0,get:function(){return i.shimGetUserMedia}})
var o=e("./getdisplaymedia")
Object.defineProperty(n,"shimGetDisplayMedia",{enumerable:!0,get:function(){return o.shimGetDisplayMedia}}),n.shimOnTrack=function(e){"object"===(void 0===e?"undefined":r(e))&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},n.shimPeerConnection=function(e){var t=s.detectBrowser(e)
if("object"===(void 0===e?"undefined":r(e))&&(e.RTCPeerConnection||e.mozRTCPeerConnection)){if(!e.RTCPeerConnection&&e.mozRTCPeerConnection&&(e.RTCPeerConnection=e.mozRTCPeerConnection),t.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach((function(t){var n,r,i,o=e.RTCPeerConnection.prototype[t],s=(i=function(){return arguments[0]=new("addIceCandidate"===t?e.RTCIceCandidate:e.RTCSessionDescription)(arguments[0]),o.apply(this,arguments)},(r=t)in(n={})?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)
e.RTCPeerConnection.prototype[t]=s[t]})),t.version<68){var n=e.RTCPeerConnection.prototype.addIceCandidate
e.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?arguments[0]&&""===arguments[0].candidate?Promise.resolve():n.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())}}var i={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},o=e.RTCPeerConnection.prototype.getStats
e.RTCPeerConnection.prototype.getStats=function(){var e=Array.prototype.slice.call(arguments),n=e[0],r=e[1],s=e[2]
return o.apply(this,[n||null]).then((function(e){if(t.version<53&&!r)try{e.forEach((function(e){e.type=i[e.type]||e.type}))}catch(t){if("TypeError"!==t.name)throw t
e.forEach((function(t,n){e.set(n,Object.assign({},t,{type:i[t.type]||t.type}))}))}return e})).then(r,s)}}},n.shimSenderGetStats=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&e.RTCRtpSender&&(!e.RTCRtpSender||!("getStats"in e.RTCRtpSender.prototype))){var t=e.RTCPeerConnection.prototype.getSenders
t&&(e.RTCPeerConnection.prototype.getSenders=function(){var e=this,n=t.apply(this,[])
return n.forEach((function(t){return t._pc=e})),n})
var n=e.RTCPeerConnection.prototype.addTrack
n&&(e.RTCPeerConnection.prototype.addTrack=function(){var e=n.apply(this,arguments)
return e._pc=this,e}),e.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}},n.shimReceiverGetStats=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&e.RTCRtpSender&&(!e.RTCRtpSender||!("getStats"in e.RTCRtpReceiver.prototype))){var t=e.RTCPeerConnection.prototype.getReceivers
t&&(e.RTCPeerConnection.prototype.getReceivers=function(){var e=this,n=t.apply(this,[])
return n.forEach((function(t){return t._pc=e})),n}),s.wrapPeerConnectionEvent(e,"track",(function(e){return e.receiver._pc=e.srcElement,e})),e.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}},n.shimRemoveStream=function(e){e.RTCPeerConnection&&!("removeStream"in e.RTCPeerConnection.prototype)&&(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this
s.deprecated("removeStream","removeTrack"),this.getSenders().forEach((function(n){n.track&&e.getTracks().includes(n.track)&&t.removeTrack(n)}))})},n.shimRTCDataChannel=function(e){e.DataChannel&&!e.RTCDataChannel&&(e.RTCDataChannel=e.DataChannel)},n.shimAddTransceiver=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.addTransceiver
t&&(e.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[]
var e=arguments[1],n=e&&"sendEncodings"in e
n&&e.sendEncodings.forEach((function(e){if("rid"in e&&!/^[a-z0-9]{0,16}$/i.test(e.rid))throw new TypeError("Invalid RID value provided.")
if("scaleResolutionDownBy"in e&&!(parseFloat(e.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0")
if("maxFramerate"in e&&!(parseFloat(e.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")}))
var r=t.apply(this,arguments)
if(n){var i=r.sender,o=i.getParameters()
"encodings"in o||(o.encodings=e.sendEncodings,this.setParametersPromises.push(i.setParameters(o).catch((function(){}))))}return r})}},n.shimCreateOffer=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createOffer
e.RTCPeerConnection.prototype.createOffer=function(){var e=this,n=arguments
return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then((function(){return t.apply(e,n)})).finally((function(){e.setParametersPromises=[]})):t.apply(this,arguments)}}},n.shimCreateAnswer=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype.createAnswer
e.RTCPeerConnection.prototype.createAnswer=function(){var e=this,n=arguments
return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then((function(){return t.apply(e,n)})).finally((function(){e.setParametersPromises=[]})):t.apply(this,arguments)}}}
var s=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils"))},{"../utils":15,"./getdisplaymedia":12,"./getusermedia":13}],12:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0}),n.shimGetDisplayMedia=function(e,t){e.navigator.mediaDevices&&"getDisplayMedia"in e.navigator.mediaDevices||e.navigator.mediaDevices&&(e.navigator.mediaDevices.getDisplayMedia=function(n){if(!n||!n.video){var r=new DOMException("getDisplayMedia without video constraints is undefined")
return r.name="NotFoundError",r.code=8,Promise.reject(r)}return!0===n.video?n.video={mediaSource:t}:n.video.mediaSource=t,e.navigator.mediaDevices.getUserMedia(n)})}},{}],13:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)}
n.shimGetUserMedia=function(e){var t=i.detectBrowser(e),n=e&&e.navigator,o=e&&e.MediaStreamTrack
if(n.getUserMedia=function(e,t,r){i.deprecated("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),n.mediaDevices.getUserMedia(e).then(t,r)},!(t.version>55&&"autoGainControl"in n.mediaDevices.getSupportedConstraints())){var s=function(e,t,n){t in e&&!(n in e)&&(e[n]=e[t],delete e[t])},a=n.mediaDevices.getUserMedia.bind(n.mediaDevices)
if(n.mediaDevices.getUserMedia=function(e){return"object"===(void 0===e?"undefined":r(e))&&"object"===r(e.audio)&&(e=JSON.parse(JSON.stringify(e)),s(e.audio,"autoGainControl","mozAutoGainControl"),s(e.audio,"noiseSuppression","mozNoiseSuppression")),a(e)},o&&o.prototype.getSettings){var c=o.prototype.getSettings
o.prototype.getSettings=function(){var e=c.apply(this,arguments)
return s(e,"mozAutoGainControl","autoGainControl"),s(e,"mozNoiseSuppression","noiseSuppression"),e}}if(o&&o.prototype.applyConstraints){var u=o.prototype.applyConstraints
o.prototype.applyConstraints=function(e){return"audio"===this.kind&&"object"===(void 0===e?"undefined":r(e))&&(e=JSON.parse(JSON.stringify(e)),s(e,"autoGainControl","mozAutoGainControl"),s(e,"noiseSuppression","mozNoiseSuppression")),u.apply(this,[e])}}}}
var i=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils"))},{"../utils":15}],14:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)}
n.shimLocalStreamsAPI=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection){if("getLocalStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in e.RTCPeerConnection.prototype)){var t=e.RTCPeerConnection.prototype.addTrack
e.RTCPeerConnection.prototype.addStream=function(e){var n=this
this._localStreams||(this._localStreams=[]),this._localStreams.includes(e)||this._localStreams.push(e),e.getAudioTracks().forEach((function(r){return t.call(n,r,e)})),e.getVideoTracks().forEach((function(r){return t.call(n,r,e)}))},e.RTCPeerConnection.prototype.addTrack=function(e){for(var n=this,r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o]
return i&&i.forEach((function(e){n._localStreams?n._localStreams.includes(e)||n._localStreams.push(e):n._localStreams=[e]})),t.apply(this,arguments)}}"removeStream"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.removeStream=function(e){var t=this
this._localStreams||(this._localStreams=[])
var n=this._localStreams.indexOf(e)
if(-1!==n){this._localStreams.splice(n,1)
var r=e.getTracks()
this.getSenders().forEach((function(e){r.includes(e.track)&&t.removeTrack(e)}))}})}},n.shimRemoteStreamsAPI=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection&&("getRemoteStreams"in e.RTCPeerConnection.prototype||(e.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in e.RTCPeerConnection.prototype))){Object.defineProperty(e.RTCPeerConnection.prototype,"onaddstream",{get:function(){return this._onaddstream},set:function(e){var t=this
this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=e),this.addEventListener("track",this._onaddstreampoly=function(e){e.streams.forEach((function(e){if(t._remoteStreams||(t._remoteStreams=[]),!t._remoteStreams.includes(e)){t._remoteStreams.push(e)
var n=new Event("addstream")
n.stream=e,t.dispatchEvent(n)}}))})}})
var t=e.RTCPeerConnection.prototype.setRemoteDescription
e.RTCPeerConnection.prototype.setRemoteDescription=function(){var e=this
return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(t){t.streams.forEach((function(t){if(e._remoteStreams||(e._remoteStreams=[]),!(e._remoteStreams.indexOf(t)>=0)){e._remoteStreams.push(t)
var n=new Event("addstream")
n.stream=t,e.dispatchEvent(n)}}))}),t.apply(e,arguments)}}},n.shimCallbacksAPI=function(e){if("object"===(void 0===e?"undefined":r(e))&&e.RTCPeerConnection){var t=e.RTCPeerConnection.prototype,n=t.createOffer,i=t.createAnswer,o=t.setLocalDescription,s=t.setRemoteDescription,a=t.addIceCandidate
t.createOffer=function(e,t){var r=arguments.length>=2?arguments[2]:arguments[0],i=n.apply(this,[r])
return t?(i.then(e,t),Promise.resolve()):i},t.createAnswer=function(e,t){var n=arguments.length>=2?arguments[2]:arguments[0],r=i.apply(this,[n])
return t?(r.then(e,t),Promise.resolve()):r}
var c=function(e,t,n){var r=o.apply(this,[e])
return n?(r.then(t,n),Promise.resolve()):r}
t.setLocalDescription=c,c=function(e,t,n){var r=s.apply(this,[e])
return n?(r.then(t,n),Promise.resolve()):r},t.setRemoteDescription=c,c=function(e,t,n){var r=a.apply(this,[e])
return n?(r.then(t,n),Promise.resolve()):r},t.addIceCandidate=c}},n.shimGetUserMedia=function(e){var t=e&&e.navigator
if(t.mediaDevices&&t.mediaDevices.getUserMedia){var n=t.mediaDevices,r=n.getUserMedia.bind(n)
t.mediaDevices.getUserMedia=function(e){return r(o(e))}}!t.getUserMedia&&t.mediaDevices&&t.mediaDevices.getUserMedia&&(t.getUserMedia=function(e,n,r){t.mediaDevices.getUserMedia(e).then(n,r)}.bind(t))},n.shimConstraints=o,n.shimRTCIceServerUrls=function(e){var t=e.RTCPeerConnection
e.RTCPeerConnection=function(e,n){if(e&&e.iceServers){for(var r=[],o=0;o<e.iceServers.length;o++){var s=e.iceServers[o]
!s.hasOwnProperty("urls")&&s.hasOwnProperty("url")?(i.deprecated("RTCIceServer.url","RTCIceServer.urls"),(s=JSON.parse(JSON.stringify(s))).urls=s.url,delete s.url,r.push(s)):r.push(e.iceServers[o])}e.iceServers=r}return new t(e,n)},e.RTCPeerConnection.prototype=t.prototype,"generateCertificate"in e.RTCPeerConnection&&Object.defineProperty(e.RTCPeerConnection,"generateCertificate",{get:function(){return t.generateCertificate}})},n.shimTrackEventTransceiver=function(e){"object"===(void 0===e?"undefined":r(e))&&e.RTCTrackEvent&&"receiver"in e.RTCTrackEvent.prototype&&!("transceiver"in e.RTCTrackEvent.prototype)&&Object.defineProperty(e.RTCTrackEvent.prototype,"transceiver",{get:function(){return{receiver:this.receiver}}})},n.shimCreateOfferLegacy=function(e){var t=e.RTCPeerConnection.prototype.createOffer
e.RTCPeerConnection.prototype.createOffer=function(e){if(e){void 0!==e.offerToReceiveAudio&&(e.offerToReceiveAudio=!!e.offerToReceiveAudio)
var n=this.getTransceivers().find((function(e){return"audio"===e.receiver.track.kind}))
!1===e.offerToReceiveAudio&&n?"sendrecv"===n.direction?n.setDirection?n.setDirection("sendonly"):n.direction="sendonly":"recvonly"===n.direction&&(n.setDirection?n.setDirection("inactive"):n.direction="inactive"):!0!==e.offerToReceiveAudio||n||this.addTransceiver("audio"),void 0!==e.offerToReceiveVideo&&(e.offerToReceiveVideo=!!e.offerToReceiveVideo)
var r=this.getTransceivers().find((function(e){return"video"===e.receiver.track.kind}))
!1===e.offerToReceiveVideo&&r?"sendrecv"===r.direction?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":"recvonly"===r.direction&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):!0!==e.offerToReceiveVideo||r||this.addTransceiver("video")}return t.apply(this,arguments)}}
var i=function(e){if(e&&e.__esModule)return e
var t={}
if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])
return t.default=e,t}(e("../utils"))
function o(e){return e&&void 0!==e.video?Object.assign({},e,{video:i.compactObject(e.video)}):e}},{"../utils":15}],15:[function(e,t,n){"use strict"
Object.defineProperty(n,"__esModule",{value:!0})
var r="function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)}
n.extractVersion=s,n.wrapPeerConnectionEvent=function(e,t,n){if(e.RTCPeerConnection){var r=e.RTCPeerConnection.prototype,i=r.addEventListener
r.addEventListener=function(e,r){if(e!==t)return i.apply(this,arguments)
var o=function(e){var t=n(e)
t&&r(t)}
return this._eventMap=this._eventMap||{},this._eventMap[r]=o,i.apply(this,[e,o])}
var o=r.removeEventListener
r.removeEventListener=function(e,n){if(e!==t||!this._eventMap||!this._eventMap[n])return o.apply(this,arguments)
var r=this._eventMap[n]
return delete this._eventMap[n],o.apply(this,[e,r])},Object.defineProperty(r,"on"+t,{get:function(){return this["_on"+t]},set:function(e){this["_on"+t]&&(this.removeEventListener(t,this["_on"+t]),delete this["_on"+t]),e&&this.addEventListener(t,this["_on"+t]=e)},enumerable:!0,configurable:!0})}},n.disableLog=function(e){return"boolean"!=typeof e?new Error("Argument type: "+(void 0===e?"undefined":r(e))+". Please use a boolean."):(i=e,e?"adapter.js logging disabled":"adapter.js logging enabled")},n.disableWarnings=function(e){return"boolean"!=typeof e?new Error("Argument type: "+(void 0===e?"undefined":r(e))+". Please use a boolean."):(o=!e,"adapter.js deprecation warnings "+(e?"disabled":"enabled"))},n.log=function(){if("object"===("undefined"==typeof window?"undefined":r(window))){if(i)return
"undefined"!=typeof console&&"function"==typeof console.log&&console.log.apply(console,arguments)}},n.deprecated=function(e,t){o&&console.warn(e+" is deprecated, please use "+t+" instead.")},n.detectBrowser=function(e){var t=e.navigator,n={browser:null,version:null}
if(void 0===e||!e.navigator)return n.browser="Not a browser.",n
if(t.mozGetUserMedia)n.browser="firefox",n.version=s(t.userAgent,/Firefox\/(\d+)\./,1)
else if(t.webkitGetUserMedia||!1===e.isSecureContext&&e.webkitRTCPeerConnection&&!e.RTCIceGatherer)n.browser="chrome",n.version=s(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2)
else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))n.browser="edge",n.version=s(t.userAgent,/Edge\/(\d+).(\d+)$/,2)
else{if(!e.RTCPeerConnection||!t.userAgent.match(/AppleWebKit\/(\d+)\./))return n.browser="Not a supported browser.",n
n.browser="safari",n.version=s(t.userAgent,/AppleWebKit\/(\d+)\./,1),n.supportsUnifiedPlan=e.RTCRtpTransceiver&&"currentDirection"in e.RTCRtpTransceiver.prototype}return n},n.compactObject=function e(t){return c(t)?Object.keys(t).reduce((function(n,r){var i=c(t[r]),o=i?e(t[r]):t[r],s=i&&!Object.keys(o).length
return void 0===o||s?n:Object.assign(n,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},r,o))}),{}):t},n.walkStats=u,n.filterStats=function(e,t,n){var r=n?"outbound-rtp":"inbound-rtp",i=new Map
if(null===t)return i
var o=[]
return e.forEach((function(e){"track"===e.type&&e.trackIdentifier===t.id&&o.push(e)})),o.forEach((function(t){e.forEach((function(n){n.type===r&&n.trackId===t.id&&u(e,n,i)}))})),i}
var i=!0,o=!0
function s(e,t,n){var r=e.match(t)
return r&&r.length>=n&&parseInt(r[n],10)}function c(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e,t,n){t&&!n.has(t.id)&&(n.set(t.id,t),Object.keys(t).forEach((function(r){r.endsWith("Id")?u(e,e.get(t[r]),n):r.endsWith("Ids")&&t[r].forEach((function(t){u(e,e.get(t),n)}))})))}},{}],16:[function(e,t,n){"use strict"
var r=e("sdp")
function i(e,t,n,i,o){var s=r.writeRtpDescription(e.kind,t)
if(s+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),s+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":o||"active"),s+="a=mid:"+e.mid+"\r\n",e.rtpSender&&e.rtpReceiver?s+="a=sendrecv\r\n":e.rtpSender?s+="a=sendonly\r\n":e.rtpReceiver?s+="a=recvonly\r\n":s+="a=inactive\r\n",e.rtpSender){var a=e.rtpSender._initialTrackId||e.rtpSender.track.id
e.rtpSender._initialTrackId=a
var c="msid:"+(i?i.id:"-")+" "+a+"\r\n"
s+="a="+c,s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+c,e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+c,s+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return s+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),s}function o(e,t){var n={codecs:[],headerExtensions:[],fecMechanisms:[]},r=function(e,t){e=parseInt(e,10)
for(var n=0;n<t.length;n++)if(t[n].payloadType===e||t[n].preferredPayloadType===e)return t[n]},i=function(e,t,n,i){var o=r(e.parameters.apt,n),s=r(t.parameters.apt,i)
return o&&s&&o.name.toLowerCase()===s.name.toLowerCase()}
return e.codecs.forEach((function(r){for(var o=0;o<t.codecs.length;o++){var s=t.codecs[o]
if(r.name.toLowerCase()===s.name.toLowerCase()&&r.clockRate===s.clockRate){if("rtx"===r.name.toLowerCase()&&r.parameters&&s.parameters.apt&&!i(r,s,e.codecs,t.codecs))continue;(s=JSON.parse(JSON.stringify(s))).numChannels=Math.min(r.numChannels,s.numChannels),n.codecs.push(s),s.rtcpFeedback=s.rtcpFeedback.filter((function(e){for(var t=0;t<r.rtcpFeedback.length;t++)if(r.rtcpFeedback[t].type===e.type&&r.rtcpFeedback[t].parameter===e.parameter)return!0
return!1}))
break}}})),e.headerExtensions.forEach((function(e){for(var r=0;r<t.headerExtensions.length;r++){var i=t.headerExtensions[r]
if(e.uri===i.uri){n.headerExtensions.push(i)
break}}})),n}function s(e,t,n){return-1!=={offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[t][e].indexOf(n)}function a(e,t){var n=e.getRemoteCandidates().find((function(e){return t.foundation===e.foundation&&t.ip===e.ip&&t.port===e.port&&t.priority===e.priority&&t.protocol===e.protocol&&t.type===e.type}))
return n||e.addRemoteCandidate(t),!n}function c(e,t){var n=new Error(t)
return n.name=e,n.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[e],n}t.exports=function(e,t){function n(t,n){n.addTrack(t),n.dispatchEvent(new e.MediaStreamTrackEvent("addtrack",{track:t}))}function u(t,n,r,i){var o=new Event("track")
o.track=n,o.receiver=r,o.transceiver={receiver:r},o.streams=i,e.setTimeout((function(){t._dispatchEvent("track",o)}))}var p=function(n){var i=this,o=document.createDocumentFragment()
if(["addEventListener","removeEventListener","dispatchEvent"].forEach((function(e){i[e]=o[e].bind(o)})),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",n=JSON.parse(JSON.stringify(n||{})),this.usingBundle="max-bundle"===n.bundlePolicy,"negotiate"===n.rtcpMuxPolicy)throw c("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported")
switch(n.rtcpMuxPolicy||(n.rtcpMuxPolicy="require"),n.iceTransportPolicy){case"all":case"relay":break
default:n.iceTransportPolicy="all"}switch(n.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break
default:n.bundlePolicy="balanced"}if(n.iceServers=function(e,t){var n=!1
return(e=JSON.parse(JSON.stringify(e))).filter((function(e){if(e&&(e.urls||e.url)){var r=e.urls||e.url
e.url&&!e.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.")
var i="string"==typeof r
return i&&(r=[r]),r=r.filter((function(e){return 0!==e.indexOf("turn:")||-1===e.indexOf("transport=udp")||-1!==e.indexOf("turn:[")||n?0===e.indexOf("stun:")&&t>=14393&&-1===e.indexOf("?transport=udp"):(n=!0,!0)})),delete e.url,e.urls=i?r[0]:r,!!r.length}}))}(n.iceServers||[],t),this._iceGatherers=[],n.iceCandidatePoolSize)for(var s=n.iceCandidatePoolSize;s>0;s--)this._iceGatherers.push(new e.RTCIceGatherer({iceServers:n.iceServers,gatherPolicy:n.iceTransportPolicy}))
else n.iceCandidatePoolSize=0
this._config=n,this.transceivers=[],this._sdpSessionId=r.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1}
Object.defineProperty(p.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(p.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),p.prototype.onicecandidate=null,p.prototype.onaddstream=null,p.prototype.ontrack=null,p.prototype.onremovestream=null,p.prototype.onsignalingstatechange=null,p.prototype.oniceconnectionstatechange=null,p.prototype.onconnectionstatechange=null,p.prototype.onicegatheringstatechange=null,p.prototype.onnegotiationneeded=null,p.prototype.ondatachannel=null,p.prototype._dispatchEvent=function(e,t){this._isClosed||(this.dispatchEvent(t),"function"==typeof this["on"+e]&&this["on"+e](t))},p.prototype._emitGatheringStateChange=function(){var e=new Event("icegatheringstatechange")
this._dispatchEvent("icegatheringstatechange",e)},p.prototype.getConfiguration=function(){return this._config},p.prototype.getLocalStreams=function(){return this.localStreams},p.prototype.getRemoteStreams=function(){return this.remoteStreams},p.prototype._createTransceiver=function(e,t){var n=this.transceivers.length>0,r={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:e,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0}
if(this.usingBundle&&n)r.iceTransport=this.transceivers[0].iceTransport,r.dtlsTransport=this.transceivers[0].dtlsTransport
else{var i=this._createIceAndDtlsTransports()
r.iceTransport=i.iceTransport,r.dtlsTransport=i.dtlsTransport}return t||this.transceivers.push(r),r},p.prototype.addTrack=function(t,n){if(this._isClosed)throw c("InvalidStateError","Attempted to call addTrack on a closed peerconnection.")
var r
if(this.transceivers.find((function(e){return e.track===t})))throw c("InvalidAccessError","Track already exists.")
for(var i=0;i<this.transceivers.length;i++)this.transceivers[i].track||this.transceivers[i].kind!==t.kind||(r=this.transceivers[i])
return r||(r=this._createTransceiver(t.kind)),this._maybeFireNegotiationNeeded(),-1===this.localStreams.indexOf(n)&&this.localStreams.push(n),r.track=t,r.stream=n,r.rtpSender=new e.RTCRtpSender(t,r.dtlsTransport),r.rtpSender},p.prototype.addStream=function(e){var n=this
if(t>=15025)e.getTracks().forEach((function(t){n.addTrack(t,e)}))
else{var r=e.clone()
e.getTracks().forEach((function(e,t){var n=r.getTracks()[t]
e.addEventListener("enabled",(function(e){n.enabled=e.enabled}))})),r.getTracks().forEach((function(e){n.addTrack(e,r)}))}},p.prototype.removeTrack=function(t){if(this._isClosed)throw c("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.")
if(!(t instanceof e.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.")
var n=this.transceivers.find((function(e){return e.rtpSender===t}))
if(!n)throw c("InvalidAccessError","Sender was not created by this connection.")
var r=n.stream
n.rtpSender.stop(),n.rtpSender=null,n.track=null,n.stream=null,-1===this.transceivers.map((function(e){return e.stream})).indexOf(r)&&this.localStreams.indexOf(r)>-1&&this.localStreams.splice(this.localStreams.indexOf(r),1),this._maybeFireNegotiationNeeded()},p.prototype.removeStream=function(e){var t=this
e.getTracks().forEach((function(e){var n=t.getSenders().find((function(t){return t.track===e}))
n&&t.removeTrack(n)}))},p.prototype.getSenders=function(){return this.transceivers.filter((function(e){return!!e.rtpSender})).map((function(e){return e.rtpSender}))},p.prototype.getReceivers=function(){return this.transceivers.filter((function(e){return!!e.rtpReceiver})).map((function(e){return e.rtpReceiver}))},p.prototype._createIceGatherer=function(t,n){var r=this
if(n&&t>0)return this.transceivers[0].iceGatherer
if(this._iceGatherers.length)return this._iceGatherers.shift()
var i=new e.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy})
return Object.defineProperty(i,"state",{value:"new",writable:!0}),this.transceivers[t].bufferedCandidateEvents=[],this.transceivers[t].bufferCandidates=function(e){var n=!e.candidate||0===Object.keys(e.candidate).length
i.state=n?"completed":"gathering",null!==r.transceivers[t].bufferedCandidateEvents&&r.transceivers[t].bufferedCandidateEvents.push(e)},i.addEventListener("localcandidate",this.transceivers[t].bufferCandidates),i},p.prototype._gather=function(t,n){var i=this,o=this.transceivers[n].iceGatherer
if(!o.onlocalcandidate){var s=this.transceivers[n].bufferedCandidateEvents
this.transceivers[n].bufferedCandidateEvents=null,o.removeEventListener("localcandidate",this.transceivers[n].bufferCandidates),o.onlocalcandidate=function(e){if(!(i.usingBundle&&n>0)){var s=new Event("icecandidate")
s.candidate={sdpMid:t,sdpMLineIndex:n}
var a=e.candidate,c=!a||0===Object.keys(a).length
if(c)"new"!==o.state&&"gathering"!==o.state||(o.state="completed")
else{"new"===o.state&&(o.state="gathering"),a.component=1,a.ufrag=o.getLocalParameters().usernameFragment
var u=r.writeCandidate(a)
s.candidate=Object.assign(s.candidate,r.parseCandidate(u)),s.candidate.candidate=u,s.candidate.toJSON=function(){return{candidate:s.candidate.candidate,sdpMid:s.candidate.sdpMid,sdpMLineIndex:s.candidate.sdpMLineIndex,usernameFragment:s.candidate.usernameFragment}}}var p=r.getMediaSections(i._localDescription.sdp)
p[s.candidate.sdpMLineIndex]+=c?"a=end-of-candidates\r\n":"a="+s.candidate.candidate+"\r\n",i._localDescription.sdp=r.getDescription(i._localDescription.sdp)+p.join("")
var l=i.transceivers.every((function(e){return e.iceGatherer&&"completed"===e.iceGatherer.state}))
"gathering"!==i.iceGatheringState&&(i.iceGatheringState="gathering",i._emitGatheringStateChange()),c||i._dispatchEvent("icecandidate",s),l&&(i._dispatchEvent("icecandidate",new Event("icecandidate")),i.iceGatheringState="complete",i._emitGatheringStateChange())}},e.setTimeout((function(){s.forEach((function(e){o.onlocalcandidate(e)}))}),0)}},p.prototype._createIceAndDtlsTransports=function(){var t=this,n=new e.RTCIceTransport(null)
n.onicestatechange=function(){t._updateIceConnectionState(),t._updateConnectionState()}
var r=new e.RTCDtlsTransport(n)
return r.ondtlsstatechange=function(){t._updateConnectionState()},r.onerror=function(){Object.defineProperty(r,"state",{value:"failed",writable:!0}),t._updateConnectionState()},{iceTransport:n,dtlsTransport:r}},p.prototype._disposeIceAndDtlsTransports=function(e){var t=this.transceivers[e].iceGatherer
t&&(delete t.onlocalcandidate,delete this.transceivers[e].iceGatherer)
var n=this.transceivers[e].iceTransport
n&&(delete n.onicestatechange,delete this.transceivers[e].iceTransport)
var r=this.transceivers[e].dtlsTransport
r&&(delete r.ondtlsstatechange,delete r.onerror,delete this.transceivers[e].dtlsTransport)},p.prototype._transceive=function(e,n,i){var s=o(e.localCapabilities,e.remoteCapabilities)
n&&e.rtpSender&&(s.encodings=e.sendEncodingParameters,s.rtcp={cname:r.localCName,compound:e.rtcpParameters.compound},e.recvEncodingParameters.length&&(s.rtcp.ssrc=e.recvEncodingParameters[0].ssrc),e.rtpSender.send(s)),i&&e.rtpReceiver&&s.codecs.length>0&&("video"===e.kind&&e.recvEncodingParameters&&t<15019&&e.recvEncodingParameters.forEach((function(e){delete e.rtx})),e.recvEncodingParameters.length?s.encodings=e.recvEncodingParameters:s.encodings=[{}],s.rtcp={compound:e.rtcpParameters.compound},e.rtcpParameters.cname&&(s.rtcp.cname=e.rtcpParameters.cname),e.sendEncodingParameters.length&&(s.rtcp.ssrc=e.sendEncodingParameters[0].ssrc),e.rtpReceiver.receive(s))},p.prototype.setLocalDescription=function(e){var t,n,i=this
if(-1===["offer","answer"].indexOf(e.type))return Promise.reject(c("TypeError",'Unsupported type "'+e.type+'"'))
if(!s("setLocalDescription",e.type,i.signalingState)||i._isClosed)return Promise.reject(c("InvalidStateError","Can not set local "+e.type+" in state "+i.signalingState))
if("offer"===e.type)t=r.splitSections(e.sdp),n=t.shift(),t.forEach((function(e,t){var n=r.parseRtpParameters(e)
i.transceivers[t].localCapabilities=n})),i.transceivers.forEach((function(e,t){i._gather(e.mid,t)}))
else if("answer"===e.type){t=r.splitSections(i._remoteDescription.sdp),n=t.shift()
var a=r.matchPrefix(n,"a=ice-lite").length>0
t.forEach((function(e,t){var s=i.transceivers[t],c=s.iceGatherer,u=s.iceTransport,p=s.dtlsTransport,l=s.localCapabilities,d=s.remoteCapabilities
if(!(r.isRejected(e)&&0===r.matchPrefix(e,"a=bundle-only").length||s.rejected)){var h=r.getIceParameters(e,n),f=r.getDtlsParameters(e,n)
a&&(f.role="server"),i.usingBundle&&0!==t||(i._gather(s.mid,t),"new"===u.state&&u.start(c,h,a?"controlling":"controlled"),"new"===p.state&&p.start(f))
var m=o(l,d)
i._transceive(s,m.codecs.length>0,!1)}}))}return i._localDescription={type:e.type,sdp:e.sdp},"offer"===e.type?i._updateSignalingState("have-local-offer"):i._updateSignalingState("stable"),Promise.resolve()},p.prototype.setRemoteDescription=function(i){var p=this
if(-1===["offer","answer"].indexOf(i.type))return Promise.reject(c("TypeError",'Unsupported type "'+i.type+'"'))
if(!s("setRemoteDescription",i.type,p.signalingState)||p._isClosed)return Promise.reject(c("InvalidStateError","Can not set remote "+i.type+" in state "+p.signalingState))
var l={}
p.remoteStreams.forEach((function(e){l[e.id]=e}))
var d=[],h=r.splitSections(i.sdp),f=h.shift(),m=r.matchPrefix(f,"a=ice-lite").length>0,g=r.matchPrefix(f,"a=group:BUNDLE ").length>0
p.usingBundle=g
var v=r.matchPrefix(f,"a=ice-options:")[0]
return p.canTrickleIceCandidates=!!v&&v.substr(14).split(" ").indexOf("trickle")>=0,h.forEach((function(s,c){var u=r.splitLines(s),h=r.getKind(s),v=r.isRejected(s)&&0===r.matchPrefix(s,"a=bundle-only").length,y=u[0].substr(2).split(" ")[2],C=r.getDirection(s,f),S=r.parseMsid(s),R=r.getMid(s)||r.generateIdentifier()
if(v||"application"===h&&("DTLS/SCTP"===y||"UDP/DTLS/SCTP"===y))p.transceivers[c]={mid:R,kind:h,protocol:y,rejected:!0}
else{var T,b,O,w,_,k,E,P,A
!v&&p.transceivers[c]&&p.transceivers[c].rejected&&(p.transceivers[c]=p._createTransceiver(h,!0))
var M,I,x=r.parseRtpParameters(s)
v||(M=r.getIceParameters(s,f),(I=r.getDtlsParameters(s,f)).role="client"),E=r.parseRtpEncodingParameters(s)
var L=r.parseRtcpParameters(s),D=r.matchPrefix(s,"a=end-of-candidates",f).length>0,N=r.matchPrefix(s,"a=candidate:").map((function(e){return r.parseCandidate(e)})).filter((function(e){return 1===e.component}))
if(("offer"===i.type||"answer"===i.type)&&!v&&g&&c>0&&p.transceivers[c]&&(p._disposeIceAndDtlsTransports(c),p.transceivers[c].iceGatherer=p.transceivers[0].iceGatherer,p.transceivers[c].iceTransport=p.transceivers[0].iceTransport,p.transceivers[c].dtlsTransport=p.transceivers[0].dtlsTransport,p.transceivers[c].rtpSender&&p.transceivers[c].rtpSender.setTransport(p.transceivers[0].dtlsTransport),p.transceivers[c].rtpReceiver&&p.transceivers[c].rtpReceiver.setTransport(p.transceivers[0].dtlsTransport)),"offer"!==i.type||v)"answer"!==i.type||v||(b=(T=p.transceivers[c]).iceGatherer,O=T.iceTransport,w=T.dtlsTransport,_=T.rtpReceiver,k=T.sendEncodingParameters,P=T.localCapabilities,p.transceivers[c].recvEncodingParameters=E,p.transceivers[c].remoteCapabilities=x,p.transceivers[c].rtcpParameters=L,N.length&&"new"===O.state&&(!m&&!D||g&&0!==c?N.forEach((function(e){a(T.iceTransport,e)})):O.setRemoteCandidates(N)),g&&0!==c||("new"===O.state&&O.start(b,M,"controlling"),"new"===w.state&&w.start(I)),!o(T.localCapabilities,T.remoteCapabilities).codecs.filter((function(e){return"rtx"===e.name.toLowerCase()})).length&&T.sendEncodingParameters[0].rtx&&delete T.sendEncodingParameters[0].rtx,p._transceive(T,"sendrecv"===C||"recvonly"===C,"sendrecv"===C||"sendonly"===C),!_||"sendrecv"!==C&&"sendonly"!==C?delete T.rtpReceiver:(A=_.track,S?(l[S.stream]||(l[S.stream]=new e.MediaStream),n(A,l[S.stream]),d.push([A,_,l[S.stream]])):(l.default||(l.default=new e.MediaStream),n(A,l.default),d.push([A,_,l.default]))))
else{(T=p.transceivers[c]||p._createTransceiver(h)).mid=R,T.iceGatherer||(T.iceGatherer=p._createIceGatherer(c,g)),N.length&&"new"===T.iceTransport.state&&(!D||g&&0!==c?N.forEach((function(e){a(T.iceTransport,e)})):T.iceTransport.setRemoteCandidates(N)),P=e.RTCRtpReceiver.getCapabilities(h),t<15019&&(P.codecs=P.codecs.filter((function(e){return"rtx"!==e.name}))),k=T.sendEncodingParameters||[{ssrc:1001*(2*c+2)}]
var G,U=!1
"sendrecv"===C||"sendonly"===C?(U=!T.rtpReceiver,_=T.rtpReceiver||new e.RTCRtpReceiver(T.dtlsTransport,h),U&&(A=_.track,S&&"-"===S.stream||(S?(l[S.stream]||(l[S.stream]=new e.MediaStream,Object.defineProperty(l[S.stream],"id",{get:function(){return S.stream}})),Object.defineProperty(A,"id",{get:function(){return S.track}}),G=l[S.stream]):(l.default||(l.default=new e.MediaStream),G=l.default)),G&&(n(A,G),T.associatedRemoteMediaStreams.push(G)),d.push([A,_,G]))):T.rtpReceiver&&T.rtpReceiver.track&&(T.associatedRemoteMediaStreams.forEach((function(t){var n=t.getTracks().find((function(e){return e.id===T.rtpReceiver.track.id}))
n&&function(t,n){n.removeTrack(t),n.dispatchEvent(new e.MediaStreamTrackEvent("removetrack",{track:t}))}(n,t)})),T.associatedRemoteMediaStreams=[]),T.localCapabilities=P,T.remoteCapabilities=x,T.rtpReceiver=_,T.rtcpParameters=L,T.sendEncodingParameters=k,T.recvEncodingParameters=E,p._transceive(p.transceivers[c],!1,U)}}})),void 0===p._dtlsRole&&(p._dtlsRole="offer"===i.type?"active":"passive"),p._remoteDescription={type:i.type,sdp:i.sdp},"offer"===i.type?p._updateSignalingState("have-remote-offer"):p._updateSignalingState("stable"),Object.keys(l).forEach((function(t){var n=l[t]
if(n.getTracks().length){if(-1===p.remoteStreams.indexOf(n)){p.remoteStreams.push(n)
var r=new Event("addstream")
r.stream=n,e.setTimeout((function(){p._dispatchEvent("addstream",r)}))}d.forEach((function(e){var t=e[0],r=e[1]
n.id===e[2].id&&u(p,t,r,[n])}))}})),d.forEach((function(e){e[2]||u(p,e[0],e[1],[])})),e.setTimeout((function(){p&&p.transceivers&&p.transceivers.forEach((function(e){e.iceTransport&&"new"===e.iceTransport.state&&e.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),e.iceTransport.addRemoteCandidate({}))}))}),4e3),Promise.resolve()},p.prototype.close=function(){this.transceivers.forEach((function(e){e.iceTransport&&e.iceTransport.stop(),e.dtlsTransport&&e.dtlsTransport.stop(),e.rtpSender&&e.rtpSender.stop(),e.rtpReceiver&&e.rtpReceiver.stop()})),this._isClosed=!0,this._updateSignalingState("closed")},p.prototype._updateSignalingState=function(e){this.signalingState=e
var t=new Event("signalingstatechange")
this._dispatchEvent("signalingstatechange",t)},p.prototype._maybeFireNegotiationNeeded=function(){var t=this
"stable"===this.signalingState&&!0!==this.needNegotiation&&(this.needNegotiation=!0,e.setTimeout((function(){if(t.needNegotiation){t.needNegotiation=!1
var e=new Event("negotiationneeded")
t._dispatchEvent("negotiationneeded",e)}}),0))},p.prototype._updateIceConnectionState=function(){var e,t={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0}
if(this.transceivers.forEach((function(e){e.iceTransport&&!e.rejected&&t[e.iceTransport.state]++})),e="new",t.failed>0?e="failed":t.checking>0?e="checking":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0?e="connected":t.completed>0&&(e="completed"),e!==this.iceConnectionState){this.iceConnectionState=e
var n=new Event("iceconnectionstatechange")
this._dispatchEvent("iceconnectionstatechange",n)}},p.prototype._updateConnectionState=function(){var e,t={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0}
if(this.transceivers.forEach((function(e){e.iceTransport&&e.dtlsTransport&&!e.rejected&&(t[e.iceTransport.state]++,t[e.dtlsTransport.state]++)})),t.connected+=t.completed,e="new",t.failed>0?e="failed":t.connecting>0?e="connecting":t.disconnected>0?e="disconnected":t.new>0?e="new":t.connected>0&&(e="connected"),e!==this.connectionState){this.connectionState=e
var n=new Event("connectionstatechange")
this._dispatchEvent("connectionstatechange",n)}},p.prototype.createOffer=function(){var n=this
if(n._isClosed)return Promise.reject(c("InvalidStateError","Can not call createOffer after close"))
var o=n.transceivers.filter((function(e){return"audio"===e.kind})).length,s=n.transceivers.filter((function(e){return"video"===e.kind})).length,a=arguments[0]
if(a){if(a.mandatory||a.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.")
void 0!==a.offerToReceiveAudio&&(o=!0===a.offerToReceiveAudio?1:!1===a.offerToReceiveAudio?0:a.offerToReceiveAudio),void 0!==a.offerToReceiveVideo&&(s=!0===a.offerToReceiveVideo?1:!1===a.offerToReceiveVideo?0:a.offerToReceiveVideo)}for(n.transceivers.forEach((function(e){"audio"===e.kind?--o<0&&(e.wantReceive=!1):"video"===e.kind&&--s<0&&(e.wantReceive=!1)}));o>0||s>0;)o>0&&(n._createTransceiver("audio"),o--),s>0&&(n._createTransceiver("video"),s--)
var u=r.writeSessionBoilerplate(n._sdpSessionId,n._sdpSessionVersion++)
n.transceivers.forEach((function(i,o){var s=i.track,a=i.kind,c=i.mid||r.generateIdentifier()
i.mid=c,i.iceGatherer||(i.iceGatherer=n._createIceGatherer(o,n.usingBundle))
var u=e.RTCRtpSender.getCapabilities(a)
t<15019&&(u.codecs=u.codecs.filter((function(e){return"rtx"!==e.name}))),u.codecs.forEach((function(e){"H264"===e.name&&void 0===e.parameters["level-asymmetry-allowed"]&&(e.parameters["level-asymmetry-allowed"]="1"),i.remoteCapabilities&&i.remoteCapabilities.codecs&&i.remoteCapabilities.codecs.forEach((function(t){e.name.toLowerCase()===t.name.toLowerCase()&&e.clockRate===t.clockRate&&(e.preferredPayloadType=t.payloadType)}))})),u.headerExtensions.forEach((function(e){(i.remoteCapabilities&&i.remoteCapabilities.headerExtensions||[]).forEach((function(t){e.uri===t.uri&&(e.id=t.id)}))}))
var p=i.sendEncodingParameters||[{ssrc:1001*(2*o+1)}]
s&&t>=15019&&"video"===a&&!p[0].rtx&&(p[0].rtx={ssrc:p[0].ssrc+1}),i.wantReceive&&(i.rtpReceiver=new e.RTCRtpReceiver(i.dtlsTransport,a)),i.localCapabilities=u,i.sendEncodingParameters=p})),"max-compat"!==n._config.bundlePolicy&&(u+="a=group:BUNDLE "+n.transceivers.map((function(e){return e.mid})).join(" ")+"\r\n"),u+="a=ice-options:trickle\r\n",n.transceivers.forEach((function(e,t){u+=i(e,e.localCapabilities,"offer",e.stream,n._dtlsRole),u+="a=rtcp-rsize\r\n",!e.iceGatherer||"new"===n.iceGatheringState||0!==t&&n.usingBundle||(e.iceGatherer.getLocalCandidates().forEach((function(e){e.component=1,u+="a="+r.writeCandidate(e)+"\r\n"})),"completed"===e.iceGatherer.state&&(u+="a=end-of-candidates\r\n"))}))
var p=new e.RTCSessionDescription({type:"offer",sdp:u})
return Promise.resolve(p)},p.prototype.createAnswer=function(){var n=this
if(n._isClosed)return Promise.reject(c("InvalidStateError","Can not call createAnswer after close"))
if("have-remote-offer"!==n.signalingState&&"have-local-pranswer"!==n.signalingState)return Promise.reject(c("InvalidStateError","Can not call createAnswer in signalingState "+n.signalingState))
var s=r.writeSessionBoilerplate(n._sdpSessionId,n._sdpSessionVersion++)
n.usingBundle&&(s+="a=group:BUNDLE "+n.transceivers.map((function(e){return e.mid})).join(" ")+"\r\n"),s+="a=ice-options:trickle\r\n"
var a=r.getMediaSections(n._remoteDescription.sdp).length
n.transceivers.forEach((function(e,r){if(!(r+1>a)){if(e.rejected)return"application"===e.kind?"DTLS/SCTP"===e.protocol?s+="m=application 0 DTLS/SCTP 5000\r\n":s+="m=application 0 "+e.protocol+" webrtc-datachannel\r\n":"audio"===e.kind?s+="m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n":"video"===e.kind&&(s+="m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),void(s+="c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:"+e.mid+"\r\n")
var c
e.stream&&("audio"===e.kind?c=e.stream.getAudioTracks()[0]:"video"===e.kind&&(c=e.stream.getVideoTracks()[0]),c&&t>=15019&&"video"===e.kind&&!e.sendEncodingParameters[0].rtx&&(e.sendEncodingParameters[0].rtx={ssrc:e.sendEncodingParameters[0].ssrc+1}))
var u=o(e.localCapabilities,e.remoteCapabilities)
!u.codecs.filter((function(e){return"rtx"===e.name.toLowerCase()})).length&&e.sendEncodingParameters[0].rtx&&delete e.sendEncodingParameters[0].rtx,s+=i(e,u,"answer",e.stream,n._dtlsRole),e.rtcpParameters&&e.rtcpParameters.reducedSize&&(s+="a=rtcp-rsize\r\n")}}))
var u=new e.RTCSessionDescription({type:"answer",sdp:s})
return Promise.resolve(u)},p.prototype.addIceCandidate=function(e){var t,n=this
return e&&void 0===e.sdpMLineIndex&&!e.sdpMid?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise((function(i,o){if(!n._remoteDescription)return o(c("InvalidStateError","Can not add ICE candidate without a remote description"))
if(e&&""!==e.candidate){var s=e.sdpMLineIndex
if(e.sdpMid)for(var u=0;u<n.transceivers.length;u++)if(n.transceivers[u].mid===e.sdpMid){s=u
break}var p=n.transceivers[s]
if(!p)return o(c("OperationError","Can not add ICE candidate"))
if(p.rejected)return i()
var l=Object.keys(e.candidate).length>0?r.parseCandidate(e.candidate):{}
if("tcp"===l.protocol&&(0===l.port||9===l.port))return i()
if(l.component&&1!==l.component)return i()
if((0===s||s>0&&p.iceTransport!==n.transceivers[0].iceTransport)&&!a(p.iceTransport,l))return o(c("OperationError","Can not add ICE candidate"))
var d=e.candidate.trim()
0===d.indexOf("a=")&&(d=d.substr(2)),(t=r.getMediaSections(n._remoteDescription.sdp))[s]+="a="+(l.type?d:"end-of-candidates")+"\r\n",n._remoteDescription.sdp=r.getDescription(n._remoteDescription.sdp)+t.join("")}else for(var h=0;h<n.transceivers.length&&(n.transceivers[h].rejected||(n.transceivers[h].iceTransport.addRemoteCandidate({}),(t=r.getMediaSections(n._remoteDescription.sdp))[h]+="a=end-of-candidates\r\n",n._remoteDescription.sdp=r.getDescription(n._remoteDescription.sdp)+t.join(""),!n.usingBundle));h++);i()}))},p.prototype.getStats=function(t){if(t&&t instanceof e.MediaStreamTrack){var n=null
if(this.transceivers.forEach((function(e){e.rtpSender&&e.rtpSender.track===t?n=e.rtpSender:e.rtpReceiver&&e.rtpReceiver.track===t&&(n=e.rtpReceiver)})),!n)throw c("InvalidAccessError","Invalid selector.")
return n.getStats()}var r=[]
return this.transceivers.forEach((function(e){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach((function(t){e[t]&&r.push(e[t].getStats())}))})),Promise.all(r).then((function(e){var t=new Map
return e.forEach((function(e){e.forEach((function(e){t.set(e.id,e)}))})),t}))},["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"].forEach((function(t){var n=e[t]
if(n&&n.prototype&&n.prototype.getStats){var r=n.prototype.getStats
n.prototype.getStats=function(){return r.apply(this).then((function(e){var t=new Map
return Object.keys(e).forEach((function(n){var r
e[n].type={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[(r=e[n]).type]||r.type,t.set(n,e[n])})),t}))}}}))
var l=["createOffer","createAnswer"]
return l.forEach((function(e){var t=p.prototype[e]
p.prototype[e]=function(){var e=arguments
return"function"==typeof e[0]||"function"==typeof e[1]?t.apply(this,[arguments[2]]).then((function(t){"function"==typeof e[0]&&e[0].apply(null,[t])}),(function(t){"function"==typeof e[1]&&e[1].apply(null,[t])})):t.apply(this,arguments)}})),(l=["setLocalDescription","setRemoteDescription","addIceCandidate"]).forEach((function(e){var t=p.prototype[e]
p.prototype[e]=function(){var e=arguments
return"function"==typeof e[1]||"function"==typeof e[2]?t.apply(this,arguments).then((function(){"function"==typeof e[1]&&e[1].apply(null)}),(function(t){"function"==typeof e[2]&&e[2].apply(null,[t])})):t.apply(this,arguments)}})),["getStats"].forEach((function(e){var t=p.prototype[e]
p.prototype[e]=function(){var e=arguments
return"function"==typeof e[1]?t.apply(this,arguments).then((function(){"function"==typeof e[1]&&e[1].apply(null)})):t.apply(this,arguments)}})),p}},{sdp:17}],17:[function(e,t,n){"use strict"
var r={generateIdentifier:function(){return Math.random().toString(36).substr(2,10)}}
r.localCName=r.generateIdentifier(),r.splitLines=function(e){return e.trim().split("\n").map((function(e){return e.trim()}))},r.splitSections=function(e){return e.split("\nm=").map((function(e,t){return(t>0?"m="+e:e).trim()+"\r\n"}))},r.getDescription=function(e){var t=r.splitSections(e)
return t&&t[0]},r.getMediaSections=function(e){var t=r.splitSections(e)
return t.shift(),t},r.matchPrefix=function(e,t){return r.splitLines(e).filter((function(e){return 0===e.indexOf(t)}))},r.parseCandidate=function(e){for(var t,n={foundation:(t=0===e.indexOf("a=candidate:")?e.substring(12).split(" "):e.substring(10).split(" "))[0],component:parseInt(t[1],10),protocol:t[2].toLowerCase(),priority:parseInt(t[3],10),ip:t[4],address:t[4],port:parseInt(t[5],10),type:t[7]},r=8;r<t.length;r+=2)switch(t[r]){case"raddr":n.relatedAddress=t[r+1]
break
case"rport":n.relatedPort=parseInt(t[r+1],10)
break
case"tcptype":n.tcpType=t[r+1]
break
case"ufrag":n.ufrag=t[r+1],n.usernameFragment=t[r+1]
break
default:n[t[r]]=t[r+1]}return n},r.writeCandidate=function(e){var t=[]
t.push(e.foundation),t.push(e.component),t.push(e.protocol.toUpperCase()),t.push(e.priority),t.push(e.address||e.ip),t.push(e.port)
var n=e.type
return t.push("typ"),t.push(n),"host"!==n&&e.relatedAddress&&e.relatedPort&&(t.push("raddr"),t.push(e.relatedAddress),t.push("rport"),t.push(e.relatedPort)),e.tcpType&&"tcp"===e.protocol.toLowerCase()&&(t.push("tcptype"),t.push(e.tcpType)),(e.usernameFragment||e.ufrag)&&(t.push("ufrag"),t.push(e.usernameFragment||e.ufrag)),"candidate:"+t.join(" ")},r.parseIceOptions=function(e){return e.substr(14).split(" ")},r.parseRtpMap=function(e){var t=e.substr(9).split(" "),n={payloadType:parseInt(t.shift(),10)}
return t=t[0].split("/"),n.name=t[0],n.clockRate=parseInt(t[1],10),n.channels=3===t.length?parseInt(t[2],10):1,n.numChannels=n.channels,n},r.writeRtpMap=function(e){var t=e.payloadType
void 0!==e.preferredPayloadType&&(t=e.preferredPayloadType)
var n=e.channels||e.numChannels||1
return"a=rtpmap:"+t+" "+e.name+"/"+e.clockRate+(1!==n?"/"+n:"")+"\r\n"},r.parseExtmap=function(e){var t=e.substr(9).split(" ")
return{id:parseInt(t[0],10),direction:t[0].indexOf("/")>0?t[0].split("/")[1]:"sendrecv",uri:t[1]}},r.writeExtmap=function(e){return"a=extmap:"+(e.id||e.preferredId)+(e.direction&&"sendrecv"!==e.direction?"/"+e.direction:"")+" "+e.uri+"\r\n"},r.parseFmtp=function(e){for(var t,n={},r=e.substr(e.indexOf(" ")+1).split(";"),i=0;i<r.length;i++)n[(t=r[i].trim().split("="))[0].trim()]=t[1]
return n},r.writeFmtp=function(e){var t="",n=e.payloadType
if(void 0!==e.preferredPayloadType&&(n=e.preferredPayloadType),e.parameters&&Object.keys(e.parameters).length){var r=[]
Object.keys(e.parameters).forEach((function(t){e.parameters[t]?r.push(t+"="+e.parameters[t]):r.push(t)})),t+="a=fmtp:"+n+" "+r.join(";")+"\r\n"}return t},r.parseRtcpFb=function(e){var t=e.substr(e.indexOf(" ")+1).split(" ")
return{type:t.shift(),parameter:t.join(" ")}},r.writeRtcpFb=function(e){var t="",n=e.payloadType
return void 0!==e.preferredPayloadType&&(n=e.preferredPayloadType),e.rtcpFeedback&&e.rtcpFeedback.length&&e.rtcpFeedback.forEach((function(e){t+="a=rtcp-fb:"+n+" "+e.type+(e.parameter&&e.parameter.length?" "+e.parameter:"")+"\r\n"})),t},r.parseSsrcMedia=function(e){var t=e.indexOf(" "),n={ssrc:parseInt(e.substr(7,t-7),10)},r=e.indexOf(":",t)
return r>-1?(n.attribute=e.substr(t+1,r-t-1),n.value=e.substr(r+1)):n.attribute=e.substr(t+1),n},r.parseSsrcGroup=function(e){var t=e.substr(13).split(" ")
return{semantics:t.shift(),ssrcs:t.map((function(e){return parseInt(e,10)}))}},r.getMid=function(e){var t=r.matchPrefix(e,"a=mid:")[0]
if(t)return t.substr(6)},r.parseFingerprint=function(e){var t=e.substr(14).split(" ")
return{algorithm:t[0].toLowerCase(),value:t[1]}},r.getDtlsParameters=function(e,t){return{role:"auto",fingerprints:r.matchPrefix(e+t,"a=fingerprint:").map(r.parseFingerprint)}},r.writeDtlsParameters=function(e,t){var n="a=setup:"+t+"\r\n"
return e.fingerprints.forEach((function(e){n+="a=fingerprint:"+e.algorithm+" "+e.value+"\r\n"})),n},r.parseCryptoLine=function(e){var t=e.substr(9).split(" ")
return{tag:parseInt(t[0],10),cryptoSuite:t[1],keyParams:t[2],sessionParams:t.slice(3)}},r.writeCryptoLine=function(e){return"a=crypto:"+e.tag+" "+e.cryptoSuite+" "+("object"===a(e.keyParams)?r.writeCryptoKeyParams(e.keyParams):e.keyParams)+(e.sessionParams?" "+e.sessionParams.join(" "):"")+"\r\n"},r.parseCryptoKeyParams=function(e){if(0!==e.indexOf("inline:"))return null
var t=e.substr(7).split("|")
return{keyMethod:"inline",keySalt:t[0],lifeTime:t[1],mkiValue:t[2]?t[2].split(":")[0]:void 0,mkiLength:t[2]?t[2].split(":")[1]:void 0}},r.writeCryptoKeyParams=function(e){return e.keyMethod+":"+e.keySalt+(e.lifeTime?"|"+e.lifeTime:"")+(e.mkiValue&&e.mkiLength?"|"+e.mkiValue+":"+e.mkiLength:"")},r.getCryptoParameters=function(e,t){return r.matchPrefix(e+t,"a=crypto:").map(r.parseCryptoLine)},r.getIceParameters=function(e,t){var n=r.matchPrefix(e+t,"a=ice-ufrag:")[0],i=r.matchPrefix(e+t,"a=ice-pwd:")[0]
return n&&i?{usernameFragment:n.substr(12),password:i.substr(10)}:null},r.writeIceParameters=function(e){return"a=ice-ufrag:"+e.usernameFragment+"\r\na=ice-pwd:"+e.password+"\r\n"},r.parseRtpParameters=function(e){for(var t={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=r.splitLines(e)[0].split(" "),i=3;i<n.length;i++){var o=n[i],s=r.matchPrefix(e,"a=rtpmap:"+o+" ")[0]
if(s){var a=r.parseRtpMap(s),c=r.matchPrefix(e,"a=fmtp:"+o+" ")
switch(a.parameters=c.length?r.parseFmtp(c[0]):{},a.rtcpFeedback=r.matchPrefix(e,"a=rtcp-fb:"+o+" ").map(r.parseRtcpFb),t.codecs.push(a),a.name.toUpperCase()){case"RED":case"ULPFEC":t.fecMechanisms.push(a.name.toUpperCase())}}}return r.matchPrefix(e,"a=extmap:").forEach((function(e){t.headerExtensions.push(r.parseExtmap(e))})),t},r.writeRtpDescription=function(e,t){var n=""
n+="m="+e+" ",n+=t.codecs.length>0?"9":"0",n+=" UDP/TLS/RTP/SAVPF ",n+=t.codecs.map((function(e){return void 0!==e.preferredPayloadType?e.preferredPayloadType:e.payloadType})).join(" ")+"\r\n",n+="c=IN IP4 0.0.0.0\r\n",n+="a=rtcp:9 IN IP4 0.0.0.0\r\n",t.codecs.forEach((function(e){n+=r.writeRtpMap(e),n+=r.writeFmtp(e),n+=r.writeRtcpFb(e)}))
var i=0
return t.codecs.forEach((function(e){e.maxptime>i&&(i=e.maxptime)})),i>0&&(n+="a=maxptime:"+i+"\r\n"),n+="a=rtcp-mux\r\n",t.headerExtensions&&t.headerExtensions.forEach((function(e){n+=r.writeExtmap(e)})),n},r.parseRtpEncodingParameters=function(e){var t,n=[],i=r.parseRtpParameters(e),o=-1!==i.fecMechanisms.indexOf("RED"),s=-1!==i.fecMechanisms.indexOf("ULPFEC"),a=r.matchPrefix(e,"a=ssrc:").map((function(e){return r.parseSsrcMedia(e)})).filter((function(e){return"cname"===e.attribute})),c=a.length>0&&a[0].ssrc,u=r.matchPrefix(e,"a=ssrc-group:FID").map((function(e){return e.substr(17).split(" ").map((function(e){return parseInt(e,10)}))}))
u.length>0&&u[0].length>1&&u[0][0]===c&&(t=u[0][1]),i.codecs.forEach((function(e){if("RTX"===e.name.toUpperCase()&&e.parameters.apt){var r={ssrc:c,codecPayloadType:parseInt(e.parameters.apt,10)}
c&&t&&(r.rtx={ssrc:t}),n.push(r),o&&((r=JSON.parse(JSON.stringify(r))).fec={ssrc:c,mechanism:s?"red+ulpfec":"red"},n.push(r))}})),0===n.length&&c&&n.push({ssrc:c})
var p=r.matchPrefix(e,"b=")
return p.length&&(p=0===p[0].indexOf("b=TIAS:")?parseInt(p[0].substr(7),10):0===p[0].indexOf("b=AS:")?1e3*parseInt(p[0].substr(5),10)*.95-16e3:void 0,n.forEach((function(e){e.maxBitrate=p}))),n},r.parseRtcpParameters=function(e){var t={},n=r.matchPrefix(e,"a=ssrc:").map((function(e){return r.parseSsrcMedia(e)})).filter((function(e){return"cname"===e.attribute}))[0]
n&&(t.cname=n.value,t.ssrc=n.ssrc)
var i=r.matchPrefix(e,"a=rtcp-rsize")
t.reducedSize=i.length>0,t.compound=0===i.length
var o=r.matchPrefix(e,"a=rtcp-mux")
return t.mux=o.length>0,t},r.parseMsid=function(e){var t,n=r.matchPrefix(e,"a=msid:")
if(1===n.length)return{stream:(t=n[0].substr(7).split(" "))[0],track:t[1]}
var i=r.matchPrefix(e,"a=ssrc:").map((function(e){return r.parseSsrcMedia(e)})).filter((function(e){return"msid"===e.attribute}))
return i.length>0?{stream:(t=i[0].value.split(" "))[0],track:t[1]}:void 0},r.parseSctpDescription=function(e){var t,n=r.parseMLine(e),i=r.matchPrefix(e,"a=max-message-size:")
i.length>0&&(t=parseInt(i[0].substr(19),10)),isNaN(t)&&(t=65536)
var o=r.matchPrefix(e,"a=sctp-port:")
if(o.length>0)return{port:parseInt(o[0].substr(12),10),protocol:n.fmt,maxMessageSize:t}
if(r.matchPrefix(e,"a=sctpmap:").length>0){var s=r.matchPrefix(e,"a=sctpmap:")[0].substr(10).split(" ")
return{port:parseInt(s[0],10),protocol:s[1],maxMessageSize:t}}},r.writeSctpDescription=function(e,t){var n=[]
return n="DTLS/SCTP"!==e.protocol?["m="+e.kind+" 9 "+e.protocol+" "+t.protocol+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctp-port:"+t.port+"\r\n"]:["m="+e.kind+" 9 "+e.protocol+" "+t.port+"\r\n","c=IN IP4 0.0.0.0\r\n","a=sctpmap:"+t.port+" "+t.protocol+" 65535\r\n"],void 0!==t.maxMessageSize&&n.push("a=max-message-size:"+t.maxMessageSize+"\r\n"),n.join("")},r.generateSessionId=function(){return Math.random().toString().substr(2,21)},r.writeSessionBoilerplate=function(e,t,n){var i=void 0!==t?t:2
return"v=0\r\no="+(n||"thisisadapterortc")+" "+(e||r.generateSessionId())+" "+i+" IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"},r.writeMediaSection=function(e,t,n,i){var o=r.writeRtpDescription(e.kind,t)
if(o+=r.writeIceParameters(e.iceGatherer.getLocalParameters()),o+=r.writeDtlsParameters(e.dtlsTransport.getLocalParameters(),"offer"===n?"actpass":"active"),o+="a=mid:"+e.mid+"\r\n",e.direction?o+="a="+e.direction+"\r\n":e.rtpSender&&e.rtpReceiver?o+="a=sendrecv\r\n":e.rtpSender?o+="a=sendonly\r\n":e.rtpReceiver?o+="a=recvonly\r\n":o+="a=inactive\r\n",e.rtpSender){var s="msid:"+i.id+" "+e.rtpSender.track.id+"\r\n"
o+="a="+s,o+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" "+s,e.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" "+s,o+="a=ssrc-group:FID "+e.sendEncodingParameters[0].ssrc+" "+e.sendEncodingParameters[0].rtx.ssrc+"\r\n")}return o+="a=ssrc:"+e.sendEncodingParameters[0].ssrc+" cname:"+r.localCName+"\r\n",e.rtpSender&&e.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+e.sendEncodingParameters[0].rtx.ssrc+" cname:"+r.localCName+"\r\n"),o},r.getDirection=function(e,t){for(var n=r.splitLines(e),i=0;i<n.length;i++)switch(n[i]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return n[i].substr(2)}return t?r.getDirection(t):"sendrecv"},r.getKind=function(e){return r.splitLines(e)[0].split(" ")[0].substr(2)},r.isRejected=function(e){return"0"===e.split(" ",2)[1]},r.parseMLine=function(e){var t=r.splitLines(e)[0].substr(2).split(" ")
return{kind:t[0],port:parseInt(t[1],10),protocol:t[2],fmt:t.slice(3).join(" ")}},r.parseOLine=function(e){var t=r.matchPrefix(e,"o=")[0].substr(2).split(" ")
return{username:t[0],sessionId:t[1],sessionVersion:parseInt(t[2],10),netType:t[3],addressType:t[4],address:t[5]}},r.isValidSDP=function(e){if("string"!=typeof e||0===e.length)return!1
for(var t=r.splitLines(e),n=0;n<t.length;n++)if(t[n].length<2||"="!==t[n].charAt(1))return!1
return!0},"object"===a(t)&&(t.exports=r)},{}]},{},[1])(1)},"object"===a(t)&&void 0!==e?e.exports=s():(i=[],void 0===(o="function"==typeof(r=s)?r.apply(t,i):r)||(e.exports=o))}}])
