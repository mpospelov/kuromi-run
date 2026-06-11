(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fc="184",of=0,el=1,cf=2,Vr=1,lf=2,ks=3,Zn=0,Kt=1,An=2,Jn=0,rs=1,tl=2,nl=3,il=4,uf=5,Ei=100,hf=101,ff=102,df=103,pf=104,mf=200,gf=201,bf=202,xf=203,oo=204,co=205,_f=206,vf=207,Mf=208,yf=209,Sf=210,Ef=211,Tf=212,wf=213,Af=214,lo=0,uo=1,ho=2,ls=3,fo=4,po=5,mo=6,go=7,dc=0,Rf=1,Cf=2,Ln=0,Gu=1,Vu=2,Hu=3,Wu=4,qu=5,Xu=6,ju=7,sl="attached",Pf="detached",Ku=300,Ri=301,us=302,ba=303,xa=304,oa=306,Ci=1e3,Rn=1001,Jr=1002,Nt=1003,Ju=1004,Bs=1005,Ft=1006,Hr=1007,jn=1008,nn=1009,Yu=1010,Zu=1011,Js=1012,pc=1013,In=1014,cn=1015,$n=1016,mc=1017,gc=1018,Ys=1020,$u=35902,Qu=35899,eh=1021,th=1022,ln=1023,Qn=1026,wi=1027,bc=1028,xc=1029,Pi=1030,_c=1031,vc=1033,Wr=33776,qr=33777,Xr=33778,jr=33779,bo=35840,xo=35841,_o=35842,vo=35843,Mo=36196,yo=37492,So=37496,Eo=37488,To=37489,Yr=37490,wo=37491,Ao=37808,Ro=37809,Co=37810,Po=37811,Lo=37812,Do=37813,Io=37814,No=37815,Fo=37816,Uo=37817,Oo=37818,ko=37819,Bo=37820,zo=37821,Go=36492,Vo=36494,Ho=36495,Wo=36283,qo=36284,Zr=36285,Xo=36286,Zs=2300,$s=2301,_a=2302,rl=2303,al=2400,ol=2401,cl=2402,Lf=2500,Df=0,nh=1,jo=2,If=3200,$r=0,Nf=1,pi="",Gt="srgb",Jt="srgb-linear",Qr="linear",lt="srgb",Fi=7680,ll=519,Ff=512,Uf=513,Of=514,Mc=515,kf=516,Bf=517,yc=518,zf=519,Ko=35044,ul="300 es",Cn=2e3,Qs=2001;function Gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hf(){const i=er("canvas");return i.style.display="block",i}const hl={};function ea(...i){const e="THREE."+i.shift();console.log(e,...i)}function ih(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=ih(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ze(...i){i=ih(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Jo(...i){const e=i.join(" ");e in hl||(hl[e]=!0,Ne(...i))}function Wf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const qf={[lo]:uo,[ho]:mo,[fo]:go,[ls]:po,[uo]:lo,[mo]:ho,[go]:fo,[po]:ls};class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fl=1234567;const Ws=Math.PI/180,hs=180/Math.PI;function un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function Sc(i,e){return(i%e+e)%e}function Xf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jf(i,e,t){return i!==e?(t-i)/(e-i):0}function qs(i,e,t){return(1-t)*i+t*e}function Kf(i,e,t,n){return qs(i,e,1-Math.exp(-t*n))}function Jf(i,e=1){return e-Math.abs(Sc(i,e*2)-e)}function Yf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $f(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qf(i,e){return i+Math.random()*(e-i)}function ed(i){return i*(.5-Math.random())}function td(i){i!==void 0&&(fl=i);let e=fl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nd(i){return i*Ws}function id(i){return i*hs}function sd(i){return(i&i-1)===0&&i!==0}function rd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ad(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function od(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),f=r((e-n)/2),h=a((e-n)/2),d=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*f,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*d,o*l);break;case"YXY":i.set(c*d,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*d,o*u,o*l);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:Ws,RAD2DEG:hs,generateUUID:un,clamp:et,euclideanModulo:Sc,mapLinear:Xf,inverseLerp:jf,lerp:qs,damp:Kf,pingpong:Jf,smoothstep:Yf,smootherstep:Zf,randInt:$f,randFloat:Qf,randFloatSpread:ed,seededRandom:td,degToRad:nd,radToDeg:id,isPowerOfTwo:sd,ceilPowerOfTwo:rd,floorPowerOfTwo:ad,setQuaternionFromProperEuler:od,normalize:ut,denormalize:mn},Gc=class Gc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;let de=Gc;class ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[a+0],d=r[a+1],m=r[a+2],M=r[a+3];if(f!==M||c!==h||l!==d||u!==m){let g=c*h+l*d+u*m+f*M;g<0&&(h=-h,d=-d,m=-m,M=-M,g=-g);let p=1-o;if(g<.9995){const x=Math.acos(g),y=Math.sin(x);p=Math.sin(p*x)/y,o=Math.sin(o*x)/y,c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+M*o}else{c=c*p+h*o,l=l*p+d*o,u=u*p+m*o,f=f*p+M*o;const x=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=x,l*=x,u*=x,f*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[a],h=r[a+1],d=r[a+2],m=r[a+3];return e[t]=o*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-o*d,e[t+2]=l*m+u*d+o*h-c*f,e[t+3]=u*m-o*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),f=o(r/2),h=c(n/2),d=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vc=class Vc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-r*f,this.z=s+c*f+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;let O=Vc;const va=new O,dl=new ti,Hc=class Hc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],M=s[0],g=s[3],p=s[6],x=s[1],y=s[4],_=s[7],L=s[2],w=s[5],F=s[8];return r[0]=a*M+o*x+c*L,r[3]=a*g+o*y+c*w,r[6]=a*p+o*_+c*F,r[1]=l*M+u*x+f*L,r[4]=l*g+u*y+f*w,r[7]=l*p+u*_+f*F,r[2]=h*M+d*x+m*L,r[5]=h*g+d*y+m*w,r[8]=h*p+d*_+m*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,h=o*c-u*r,d=l*r-a*c,m=t*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(s*l-u*n)*M,e[2]=(o*n-s*a)*M,e[3]=h*M,e[4]=(u*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;let je=Hc;const Ma=new je,pl=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){const i={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Jo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Jo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Jt]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const nt=cd();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class ld{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=er("canvas")),Ui.width=e.width,Ui.height=e.height;const s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ud=0;class Ec{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ya(s[a].image)):r.push(ya(s[a]))}else r=ya(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}let hd=0;const Sa=new O;class Ut extends Di{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ft,a=jn,o=ln,c=nn,l=Ut.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=un(),this.name="",this.source=new Ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sa).x}get height(){return this.source.getSize(Sa).y}get depth(){return this.source.getSize(Sa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ci:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ci:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Ku;Ut.DEFAULT_ANISOTROPY=1;const Wc=class Wc{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],M=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+g)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,L=(p+1)/2,w=(u+h)/4,F=(f+M)/4,v=(m+g)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=F/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=v/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=F/r,s=v/r),this.set(n,s,r,t),this}let x=Math.sqrt((g-m)*(g-m)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(f-M)/x,this.z=(h-u)/x,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wc.prototype.isVector4=!0;let _t=Wc;class fd extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Ut(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ec(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends fd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sh extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Ut{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const aa=class aa{constructor(e,t,n,s,r,a,o,c,l,u,f,h,d,m,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,f,h,d,m,M,g)}set(e,t,n,s,r,a,o,c,l,u,f,h,d,m,M,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=M,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new aa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*u,d=a*f,m=o*u,M=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-M*l,t[9]=-o*c,t[2]=M-h*l,t[6]=m+d*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h+M*o,t[4]=m*o-d,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-m,t[6]=M+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h-M*o,t[4]=-a*f,t[8]=m+d*o,t[1]=d+m*o,t[5]=a*u,t[9]=M-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*u,d=a*f,m=o*u,M=o*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=d*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,d=a*l,m=o*c,M=o*l;t[0]=c*u,t[4]=M-h*f,t[8]=m*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-M*f}else if(e.order==="XZY"){const h=a*c,d=a*l,m=o*c,M=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=a*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=o*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pd,e,md)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),ri.crossVectors(n,Zt),ri.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),ri.crossVectors(n,Zt)),ri.normalize(),cr.crossVectors(Zt,ri),s[0]=ri.x,s[4]=cr.x,s[8]=Zt.x,s[1]=ri.y,s[5]=cr.y,s[9]=Zt.y,s[2]=ri.z,s[6]=cr.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],M=n[6],g=n[10],p=n[14],x=n[3],y=n[7],_=n[11],L=n[15],w=s[0],F=s[4],v=s[8],P=s[12],N=s[1],D=s[5],I=s[9],G=s[13],T=s[2],S=s[6],C=s[10],A=s[14],k=s[3],V=s[7],K=s[11],Z=s[15];return r[0]=a*w+o*N+c*T+l*k,r[4]=a*F+o*D+c*S+l*V,r[8]=a*v+o*I+c*C+l*K,r[12]=a*P+o*G+c*A+l*Z,r[1]=u*w+f*N+h*T+d*k,r[5]=u*F+f*D+h*S+d*V,r[9]=u*v+f*I+h*C+d*K,r[13]=u*P+f*G+h*A+d*Z,r[2]=m*w+M*N+g*T+p*k,r[6]=m*F+M*D+g*S+p*V,r[10]=m*v+M*I+g*C+p*K,r[14]=m*P+M*G+g*A+p*Z,r[3]=x*w+y*N+_*T+L*k,r[7]=x*F+y*D+_*S+L*V,r[11]=x*v+y*I+_*C+L*K,r[15]=x*P+y*G+_*A+L*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],M=e[7],g=e[11],p=e[15],x=c*d-l*h,y=o*d-l*f,_=o*h-c*f,L=a*d-l*u,w=a*h-c*u,F=a*f-o*u;return t*(M*x-g*y+p*_)-n*(m*x-g*L+p*w)+s*(m*y-M*L+p*F)-r*(m*_-M*w+g*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],M=e[13],g=e[14],p=e[15],x=t*o-n*a,y=t*c-s*a,_=t*l-r*a,L=n*c-s*o,w=n*l-r*o,F=s*l-r*c,v=u*M-f*m,P=u*g-h*m,N=u*p-d*m,D=f*g-h*M,I=f*p-d*M,G=h*p-d*g,T=x*G-y*I+_*D+L*N-w*P+F*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/T;return e[0]=(o*G-c*I+l*D)*S,e[1]=(s*I-n*G-r*D)*S,e[2]=(M*F-g*w+p*L)*S,e[3]=(h*w-f*F-d*L)*S,e[4]=(c*N-a*G-l*P)*S,e[5]=(t*G-s*N+r*P)*S,e[6]=(g*_-m*F-p*y)*S,e[7]=(u*F-h*_+d*y)*S,e[8]=(a*I-o*N+l*v)*S,e[9]=(n*N-t*I-r*v)*S,e[10]=(m*w-M*_+p*x)*S,e[11]=(f*_-u*w-d*x)*S,e[12]=(o*P-a*D-c*v)*S,e[13]=(t*D-n*P+s*v)*S,e[14]=(M*y-m*L-g*x)*S,e[15]=(u*L-f*y+h*x)*S,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,f=o+o,h=r*l,d=r*u,m=r*f,M=a*u,g=a*f,p=o*f,x=c*l,y=c*u,_=c*f,L=n.x,w=n.y,F=n.z;return s[0]=(1-(M+p))*L,s[1]=(d+_)*L,s[2]=(m-y)*L,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(h+p))*w,s[6]=(g+x)*w,s[7]=0,s[8]=(m+y)*F,s[9]=(g-x)*F,s[10]=(1-(h+M))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length();const o=Oi.set(s[4],s[5],s[6]).length(),c=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);const l=1/a,u=1/o,f=1/c;return fn.elements[0]*=l,fn.elements[1]*=l,fn.elements[2]*=l,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=Cn,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let m,M;if(c)m=r/(a-r),M=a*r/(a-r);else if(o===Cn)m=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Qs)m=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-s),h=-(t+e)/(t-e),d=-(n+s)/(n-s);let m,M;if(c)m=1/(a-r),M=a/(a-r);else if(o===Cn)m=-2/(a-r),M=-(a+r)/(a-r);else if(o===Qs)m=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};aa.prototype.isMatrix4=!0;let Ye=aa;const Oi=new O,fn=new Ye,pd=new O(0,0,0),md=new O(1,1,1),ri=new O,cr=new O,Zt=new O,gl=new Ye,bl=new ti;class ei{constructor(e=0,t=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bl.setFromEuler(this),this.setFromQuaternion(bl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class rh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gd=0;const xl=new O,ki=new ti,Bn=new Ye,lr=new O,Es=new O,bd=new O,xd=new ti,_l=new O(1,0,0),vl=new O(0,1,0),Ml=new O(0,0,1),yl={type:"added"},_d={type:"removed"},Bi={type:"childadded",child:null},Ea={type:"childremoved",child:null};class vt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new O,t=new ei,n=new ti,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ye},normalMatrix:{value:new je}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return xl.copy(e).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?lr.copy(e):lr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Es,lr,this.up):Bn.lookAt(lr,Es,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(Bn),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_d),Ea.child=e,this.dispatchEvent(Ea),Ea.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,xd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ct extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vd={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const M of e.hand.values()){const g=t.getJointPose(M,n),p=this._getHandJoint(l,M);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},ur={h:0,s:0,l:0};function wa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Sc(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wa(a,r,e+1/3),this.g=wa(a,r,e),this.b=wa(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=ah[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return nt.workingToColorSpace(Wt.copy(this),e),Math.round(et(Wt.r*255,0,255))*65536+Math.round(et(Wt.g*255,0,255))*256+Math.round(et(Wt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Gt){nt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,s=Wt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(ur);const n=qs(ai.h,ur.h,t),s=qs(ai.s,ur.s,t),r=qs(ai.l,ur.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ge;Ge.NAMES=ah;class Tc{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ge(e),this.near=t,this.far=n}clone(){return new Tc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Md extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const dn=new O,zn=new O,Aa=new O,Gn=new O,zi=new O,Gi=new O,Sl=new O,Ra=new O,Ca=new O,Pa=new O,La=new _t,Da=new _t,Ia=new _t;class on{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),zn.subVectors(n,t),Aa.subVectors(e,t);const a=dn.dot(dn),o=dn.dot(zn),c=dn.dot(Aa),l=zn.dot(zn),u=zn.dot(Aa),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-o*u)*h,m=(a*u-o*c)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return La.setScalar(0),Da.setScalar(0),Ia.setScalar(0),La.fromBufferAttribute(e,t),Da.fromBufferAttribute(e,n),Ia.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),zn.subVectors(e,t),dn.cross(zn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),dn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return on.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return on.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return on.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return on.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return on.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;zi.subVectors(s,n),Gi.subVectors(r,n),Ra.subVectors(e,n);const c=zi.dot(Ra),l=Gi.dot(Ra);if(c<=0&&l<=0)return t.copy(n);Ca.subVectors(e,s);const u=zi.dot(Ca),f=Gi.dot(Ca);if(u>=0&&f<=u)return t.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(zi,a);Pa.subVectors(e,r);const d=zi.dot(Pa),m=Gi.dot(Pa);if(m>=0&&d<=m)return t.copy(r);const M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Gi,o);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Sl.subVectors(r,s),o=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(Sl,o);const p=1/(g+M+h);return a=M*p,o=h*p,t.copy(n).addScaledVector(zi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(r,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),fr.subVectors(this.max,Ts),Vi.subVectors(e.a,Ts),Hi.subVectors(e.b,Ts),Wi.subVectors(e.c,Ts),oi.subVectors(Hi,Vi),ci.subVectors(Wi,Hi),xi.subVectors(Vi,Wi);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-xi.z,xi.y,oi.z,0,-oi.x,ci.z,0,-ci.x,xi.z,0,-xi.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-xi.y,xi.x,0];return!Na(t,Vi,Hi,Wi,fr)||(t=[1,0,0,0,1,0,0,0,1],!Na(t,Vi,Hi,Wi,fr))?!1:(dr.crossVectors(oi,ci),t=[dr.x,dr.y,dr.z],Na(t,Vi,Hi,Wi,fr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new O,new O,new O,new O,new O,new O,new O,new O],pn=new O,hr=new gn,Vi=new O,Hi=new O,Wi=new O,oi=new O,ci=new O,xi=new O,Ts=new O,fr=new O,dr=new O,_i=new O;function Na(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_i.fromArray(i,r);const o=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const It=new O,pr=new de;let yd=0;class Ot extends Di{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ko,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ko&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class oh extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ch extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Sd=new gn,ws=new O,Fa=new O;class Fn{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Fa)),this.expandByPoint(ws.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ed=0;const rn=new Ye,Ua=new vt,qi=new O,$t=new gn,As=new gn,zt=new O;class At extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?ch:oh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors($t.min,As.min),$t.expandByPoint(zt),zt.addVectors($t.max,As.max),$t.expandByPoint(zt)):($t.expandByPoint(As.min),$t.expandByPoint(As.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(zt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)zt.fromBufferAttribute(o,l),c&&(qi.fromBufferAttribute(e,l),zt.add(qi)),s=Math.max(s,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new O,c[v]=new O;const l=new O,u=new O,f=new O,h=new de,d=new de,m=new de,M=new O,g=new O;function p(v,P,N){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,N),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,N),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(D),o[v].add(M),o[P].add(M),o[N].add(M),c[v].add(g),c[P].add(g),c[N].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let v=0,P=x.length;v<P;++v){const N=x[v],D=N.start,I=N.count;for(let G=D,T=D+I;G<T;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new O,_=new O,L=new O,w=new O;function F(v){L.fromBufferAttribute(s,v),w.copy(L);const P=o[v];y.copy(P),y.sub(L.multiplyScalar(L.dot(P))).normalize(),_.crossVectors(w,P);const D=_.dot(c[v])<0?-1:1;a.setXYZW(v,y.x,y.y,y.z,D)}for(let v=0,P=x.length;v<P;++v){const N=x[v],D=N.start,I=N.count;for(let G=D,T=D+I;G<T;G+=3)F(e.getX(G+0)),F(e.getX(G+1)),F(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),M=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,g),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,g),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?d=c[M]*o.data.stride+o.offset:d=c[M]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new Ot(h,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ko,this.updateRanges=[],this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new O;class tr{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=mn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Td=0;class hn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=un(),this.name="",this.type="Material",this.blending=rs,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oo,this.blendDst=co,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oo&&(n.blendSrc=this.blendSrc),this.blendDst!==co&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qn extends hn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Xi;const Rs=new O,ji=new O,Ki=new O,Ji=new de,Cs=new de,uh=new Ye,mr=new O,Ps=new O,gr=new O,El=new de,Oa=new de,Tl=new de;class fi extends vt{constructor(e=new qn){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new lh(t,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new tr(n,3,0,!1)),Xi.setAttribute("uv",new tr(n,2,3,!1))}this.geometry=Xi,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),uh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;br(mr.set(-.5,-.5,0),Ki,a,ji,s,r),br(Ps.set(.5,-.5,0),Ki,a,ji,s,r),br(gr.set(.5,.5,0),Ki,a,ji,s,r),El.set(0,0),Oa.set(1,0),Tl.set(1,1);let o=e.ray.intersectTriangle(mr,Ps,gr,!1,Rs);if(o===null&&(br(Ps.set(-.5,.5,0),Ki,a,ji,s,r),Oa.set(0,1),o=e.ray.intersectTriangle(mr,gr,Ps,!1,Rs),o===null))return;const c=e.ray.origin.distanceTo(Rs);c<e.near||c>e.far||t.push({distance:c,point:Rs.clone(),uv:on.getInterpolation(Rs,mr,Ps,gr,El,Oa,Tl,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function br(i,e,t,n,s,r){Ji.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Cs.x=r*Ji.x-s*Ji.y,Cs.y=s*Ji.x+r*Ji.y):Cs.copy(Ji),i.copy(e),i.x+=Cs.x,i.y+=Cs.y,i.applyMatrix4(uh)}const Hn=new O,ka=new O,xr=new O,li=new O,Ba=new O,_r=new O,za=new O;class ca{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ka.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),li.copy(this.origin).sub(ka);const r=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=li.dot(this.direction),c=-li.dot(xr),l=li.lengthSq(),u=Math.abs(1-a*a);let f,h,d,m;if(u>0)if(f=a*c-o,h=a*o-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const M=1/u;f*=M,h*=M,d=f*(f+a*h+2*o)+h*(a*f+h+2*c)+l}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ka).addScaledVector(xr,h),d}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,s,r){Ba.subVectors(t,e),_r.subVectors(n,e),za.crossVectors(Ba,_r);let a=this.direction.dot(za),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;li.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(li,_r));if(c<0)return null;const l=o*this.direction.dot(Ba.cross(li));if(l<0||c+l>a)return null;const u=-o*li.dot(za);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wl=new Ye,vi=new ca,vr=new Fn,Al=new O,Mr=new O,yr=new O,Sr=new O,Ga=new O,Er=new O,Rl=new O,Tr=new O;class Re extends vt{constructor(e=new At,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Ga.fromBufferAttribute(f,e),a?Er.addScaledVector(Ga,u):Er.addScaledVector(Ga.sub(t),u))}t.add(Er)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(vr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(vr,Al)===null||vi.origin.distanceToSquared(Al)>(e.far-e.near)**2))&&(wl.copy(r).invert(),vi.copy(e.ray).applyMatrix4(wl),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,L=y;_<L;_+=3){const w=o.getX(_),F=o.getX(_+1),v=o.getX(_+2);s=wr(this,p,e,n,l,u,f,w,F,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=wr(this,a,e,n,l,u,f,x,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,M=h.length;m<M;m++){const g=h[m],p=a[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let _=x,L=y;_<L;_+=3){const w=_,F=_+1,v=_+2;s=wr(this,p,e,n,l,u,f,w,F,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let g=m,p=M;g<p;g+=3){const x=g,y=g+1,_=g+2;s=wr(this,a,e,n,l,u,f,x,y,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function wd(i,e,t,n,s,r,a,o){let c;if(e.side===Kt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Zn,o),c===null)return null;Tr.copy(o),Tr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Tr);return l<t.near||l>t.far?null:{distance:l,point:Tr.clone(),object:i}}function wr(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Mr),i.getVertexPosition(c,yr),i.getVertexPosition(l,Sr);const u=wd(i,e,t,n,Mr,yr,Sr,Rl);if(u){const f=new O;on.getBarycoord(Rl,Mr,yr,Sr,f),s&&(u.uv=on.getInterpolatedAttribute(s,o,c,l,f,new de)),r&&(u.uv1=on.getInterpolatedAttribute(r,o,c,l,f,new de)),a&&(u.normal=on.getInterpolatedAttribute(a,o,c,l,f,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new O,materialIndex:0};on.getNormal(Mr,yr,Sr,h.normal),u.face=h,u.barycoord=f}return u}const Ls=new _t,Cl=new _t,Pl=new _t,Ad=new _t,Ll=new Ye,Ar=new O,Va=new Fn,Dl=new Ye,Ha=new ca;class Rd extends Re{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sl,this.bindMatrix=new Ye,this.bindMatrixInverse=new Ye,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingBox.expandByPoint(Ar)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ar),this.boundingSphere.expandByPoint(Ar)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(s),e.ray.intersectsSphere(Va)!==!1&&(Dl.copy(s).invert(),Ha.copy(e.ray).applyMatrix4(Dl),!(this.boundingBox!==null&&Ha.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ha)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new _t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ne("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Cl.fromBufferAttribute(s.attributes.skinIndex,e),Pl.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ls.copy(t),t.set(0,0,0,0)):(Ls.set(...t,1),t.set(0,0,0)),Ls.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const a=Pl.getComponent(r);if(a!==0){const o=Cl.getComponent(r);Ll.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ad.copy(Ls).applyMatrix4(Ll),a)}}return t.isVector4&&(t.w=Ls.w),t.applyMatrix4(this.bindMatrixInverse)}}class hh extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wc extends Ut{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Nt,u=Nt,f,h){super(null,a,o,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Il=new Ye,Cd=new Ye;class Ac{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ne("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ye)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ye;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Cd;Il.multiplyMatrices(o,t[r]),Il.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Ac(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wc(t,e,e,ln,cn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(Ne("Skeleton: No bone found with UUID:",r),a=new hh),this.bones.push(a),this.boneInverses.push(new Ye().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Yo extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Yi=new Ye,Nl=new Ye,Rr=[],Fl=new gn,Pd=new Ye,Ds=new Re,Is=new Fn;class Zo extends Re{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Yo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pd)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Fl.copy(e.boundingBox).applyMatrix4(Yi),this.boundingBox.union(Fl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Yi),Is.copy(e.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),Nl.multiplyMatrices(n,Yi),Ds.matrixWorld=Nl,Ds.raycast(e,Rr);for(let a=0,o=Rr.length;a<o;a++){const c=Rr[a];c.instanceId=r,c.object=this,t.push(c)}Rr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(s*this.count),s,this.count,bc,cn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Wa=new O,Ld=new O,Dd=new je;class Si{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Wa.subVectors(n,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Wa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dd.getNormalMatrix(e),s=this.coplanarPoint(Wa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Fn,Id=new de(.5,.5),Cr=new O;class Rc{constructor(e=new Si,t=new Si,n=new Si,s=new Si,r=new Si,a=new Si){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],M=r[9],g=r[10],p=r[11],x=r[12],y=r[13],_=r[14],L=r[15];if(s[0].setComponents(l-a,d-u,p-m,L-x).normalize(),s[1].setComponents(l+a,d+u,p+m,L+x).normalize(),s[2].setComponents(l+o,d+f,p+M,L+y).normalize(),s[3].setComponents(l-o,d-f,p-M,L-y).normalize(),n)s[4].setComponents(c,h,g,_).normalize(),s[5].setComponents(l-c,d-h,p-g,L-_).normalize();else if(s[4].setComponents(l-c,d-h,p-g,L-_).normalize(),t===Cn)s[5].setComponents(l+c,d+h,p+g,L+_).normalize();else if(t===Qs)s[5].setComponents(c,h,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=Id.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Cr.x=s.normal.x>0?e.max.x:e.min.x,Cr.y=s.normal.y>0?e.max.y:e.min.y,Cr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fh extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ta=new O,na=new O,Ul=new Ye,Ns=new ca,Pr=new Fn,qa=new O,Ol=new O;class Cc extends vt{constructor(e=new At,t=new fh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ta.fromBufferAttribute(t,s-1),na.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ta.distanceTo(na);e.setAttribute("lineDistance",new gt(n,1))}else Ne("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(s),Pr.radius+=r,e.ray.intersectsSphere(Pr)===!1)return;Ul.copy(s).invert(),Ns.copy(e.ray).applyMatrix4(Ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){const p=u.getX(M),x=u.getX(M+1),y=Lr(this,e,Ns,c,p,x,M);y&&t.push(y)}if(this.isLineLoop){const M=u.getX(m-1),g=u.getX(d),p=Lr(this,e,Ns,c,M,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let M=d,g=m-1;M<g;M+=l){const p=Lr(this,e,Ns,c,M,M+1,M);p&&t.push(p)}if(this.isLineLoop){const M=Lr(this,e,Ns,c,m-1,d,m-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lr(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ta.fromBufferAttribute(o,s),na.fromBufferAttribute(o,r),t.distanceSqToSegment(ta,na,qa,Ol)>n)return;qa.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:Ol.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const kl=new O,Bl=new O;class Nd extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kl.fromBufferAttribute(t,s),Bl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kl.distanceTo(Bl);e.setAttribute("lineDistance",new gt(n,1))}else Ne("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fd extends Cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ia extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zl=new Ye,$o=new ca,Dr=new Fn,Ir=new O;class Qo extends vt{constructor(e=new At,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(s),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;zl.copy(s).invert(),$o.copy(e.ray).applyMatrix4(zl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let m=h,M=d;m<M;m++){const g=l.getX(m);Ir.fromBufferAttribute(f,g),Gl(Ir,g,c,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let m=h,M=d;m<M;m++)Ir.fromBufferAttribute(f,m),Gl(Ir,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gl(i,e,t,n,s,r,a){const o=$o.distanceSqToPoint(i);if(o<t){const c=new O;$o.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class dh extends Ut{constructor(e=[],t=Ri,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends Ut{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends Ut{constructor(e,t,n=In,s,r,a,o=Nt,c=Nt,l,u=Qn,f=1){if(u!==Qn&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ec(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ud extends fs{constructor(e,t=In,n=Ri,s,r,a=Nt,o=Nt,c,l=Qn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mh extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tt extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function m(M,g,p,x,y,_,L,w,F,v,P){const N=_/F,D=L/v,I=_/2,G=L/2,T=w/2,S=F+1,C=v+1;let A=0,k=0;const V=new O;for(let K=0;K<C;K++){const Z=K*D-G;for(let re=0;re<S;re++){const ce=re*N-I;V[M]=ce*x,V[g]=Z*y,V[p]=T,l.push(V.x,V.y,V.z),V[M]=0,V[g]=0,V[p]=w>0?1:-1,u.push(V.x,V.y,V.z),f.push(re/F),f.push(1-K/v),A+=1}}for(let K=0;K<v;K++)for(let Z=0;Z<F;Z++){const re=h+Z+S*K,ce=h+Z+S*(K+1),be=h+(Z+1)+S*(K+1),Te=h+(Z+1)+S*K;c.push(re,ce,Te),c.push(ce,be,Te),k+=6}o.addGroup(d,k,P),d+=k,h+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pc extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new O,u=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("normal",new gt(o,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Qt extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const M=[],g=n/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new gt(f,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function x(){const _=new O,L=new O;let w=0;const F=(t-e)/n;for(let v=0;v<=r;v++){const P=[],N=v/r,D=N*(t-e)+e;for(let I=0;I<=s;I++){const G=I/s,T=G*c+o,S=Math.sin(T),C=Math.cos(T);L.x=D*S,L.y=-N*n+g,L.z=D*C,f.push(L.x,L.y,L.z),_.set(S,F,C).normalize(),h.push(_.x,_.y,_.z),d.push(G,1-N),P.push(m++)}M.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){const N=M[P][v],D=M[P+1][v],I=M[P+1][v+1],G=M[P][v+1];(e>0||P!==0)&&(u.push(N,D,G),w+=3),(t>0||P!==r-1)&&(u.push(D,I,G),w+=3)}l.addGroup(p,w,0),p+=w}function y(_){const L=m,w=new de,F=new O;let v=0;const P=_===!0?e:t,N=_===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,g*N,0),h.push(0,N,0),d.push(.5,.5),m++;const D=m;for(let I=0;I<=s;I++){const T=I/s*c+o,S=Math.cos(T),C=Math.sin(T);F.x=P*C,F.y=g*N,F.z=P*S,f.push(F.x,F.y,F.z),h.push(0,N,0),w.x=S*.5+.5,w.y=C*.5*N+.5,d.push(w.x,w.y),m++}for(let I=0;I<s;I++){const G=L+I,T=D+I;_===!0?u.push(T,T+1,G):u.push(T+1,T,G),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sa extends Qt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new sa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lc extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new gt(r,3)),this.setAttribute("normal",new gt(r.slice(),3)),this.setAttribute("uv",new gt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new O,_=new O,L=new O;for(let w=0;w<t.length;w+=3)d(t[w+0],y),d(t[w+1],_),d(t[w+2],L),c(y,_,L,x)}function c(x,y,_,L){const w=L+1,F=[];for(let v=0;v<=w;v++){F[v]=[];const P=x.clone().lerp(_,v/w),N=y.clone().lerp(_,v/w),D=w-v;for(let I=0;I<=D;I++)I===0&&v===w?F[v][I]=P:F[v][I]=P.clone().lerp(N,I/D)}for(let v=0;v<w;v++)for(let P=0;P<2*(w-v)-1;P++){const N=Math.floor(P/2);P%2===0?(h(F[v][N+1]),h(F[v+1][N]),h(F[v][N])):(h(F[v][N+1]),h(F[v+1][N+1]),h(F[v+1][N]))}}function l(x){const y=new O;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(x),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const x=new O;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const _=g(x)/2/Math.PI+.5,L=p(x)/Math.PI+.5;a.push(_,1-L)}m(),f()}function f(){for(let x=0;x<a.length;x+=6){const y=a[x+0],_=a[x+2],L=a[x+4],w=Math.max(y,_,L),F=Math.min(y,_,L);w>.9&&F<.1&&(y<.2&&(a[x+0]+=1),_<.2&&(a[x+2]+=1),L<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function d(x,y){const _=x*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function m(){const x=new O,y=new O,_=new O,L=new O,w=new de,F=new de,v=new de;for(let P=0,N=0;P<r.length;P+=9,N+=6){x.set(r[P+0],r[P+1],r[P+2]),y.set(r[P+3],r[P+4],r[P+5]),_.set(r[P+6],r[P+7],r[P+8]),w.set(a[N+0],a[N+1]),F.set(a[N+2],a[N+3]),v.set(a[N+4],a[N+5]),L.copy(x).add(y).add(_).divideScalar(3);const D=g(L);M(w,N+0,x,D),M(F,N+2,y,D),M(v,N+4,_,D)}}function M(x,y,_,L){L<0&&x.x===1&&(a[y]=x.x-1),_.x===0&&_.z===0&&(a[y]=L/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.vertices,e.indices,e.radius,e.detail)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(a-u)/h;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,s=[],r=[],a=[],o=new O,c=new Ye;for(let d=0;d<=e;d++){const m=d/e;s[d]=this.getTangentAt(m,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(et(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(o,m))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(et(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dc extends Un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Od extends Dc{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ic(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,f){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,d=(o-a)/u-(c-a)/(u+f)+(c-o)/f;h*=u,d*=u,s(a,o,h,d)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const Vl=new O,Hl=new O,Xa=new Ic,ja=new Ic,Ka=new Ic;class kd extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Hl.subVectors(s[0],s[1]).add(s[0]),l=Hl);const f=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Vl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Vl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),m<1e-4&&(m=M),g<1e-4&&(g=M),Xa.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,M,g),ja.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,M,g),Ka.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,M,g)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),ja.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ka.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Xa.calc(c),ja.calc(c),Ka.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wl(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function Bd(i,e){const t=1-i;return t*t*e}function zd(i,e){return 2*(1-i)*i*e}function Gd(i,e){return i*i*e}function Xs(i,e,t,n){return Bd(i,e)+zd(i,t)+Gd(i,n)}function Vd(i,e){const t=1-i;return t*t*t*e}function Hd(i,e){const t=1-i;return 3*t*t*i*e}function Wd(i,e){return 3*(1-i)*i*i*e}function qd(i,e){return i*i*i*e}function js(i,e,t,n,s){return Vd(i,e)+Hd(i,t)+Wd(i,n)+qd(i,s)}class gh extends Un{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,s.x,r.x,a.x,o.x),js(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xd extends Un{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(e,s.x,r.x,a.x,o.x),js(e,s.y,r.y,a.y,o.y),js(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bh extends Un{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class jd extends Un{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xh extends Un{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(e,s.x,r.x,a.x),Xs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kd extends Un{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xs(e,s.x,r.x,a.x),Xs(e,s.y,r.y,a.y),Xs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Wl(o,c.x,l.x,u.x,f.x),Wl(o,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var ec=Object.freeze({__proto__:null,ArcCurve:Od,CatmullRomCurve3:kd,CubicBezierCurve:gh,CubicBezierCurve3:Xd,EllipseCurve:Dc,LineCurve:bh,LineCurve3:jd,QuadraticBezierCurve:xh,QuadraticBezierCurve3:Kd,SplineCurve:_h});class Jd extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ec[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new ec[s.type]().fromJSON(s))}return this}}class ql extends Jd{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new bh(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new xh(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new gh(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new _h(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new Dc(e,t,n,s,r,a,o,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class la extends ql{constructor(e){super(e),this.uuid=un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new ql().fromJSON(s))}return this}}function Yd(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=vh(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=tp(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,f=c;for(let h=t;h<s;h+=t){const d=i[h],m=i[h+1];d<o&&(o=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-o,f-c),l=l!==0?32767/l:0}return nr(r,a,t,o,c,l,0),a}function vh(i,e,t,n,s){let r;if(s===fp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Xl(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Xl(a/n|0,i[a],i[a+1],r);return r&&ds(r,r.next)&&(sr(r),r=r.next),r}function Li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ds(t,t.next)||St(t.prev,t,t.next)===0)){if(sr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ap(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?$d(i,n,s,r):Zd(i)){e.push(c.i,i.i,l.i),sr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Qd(Li(i),e),nr(i,e,t,n,s,r,2)):a===2&&ep(i,e,t,n,s,r):nr(Li(i),e,t,n,s,r,1);break}}}function Zd(i){const e=i.prev,t=i,n=i.next;if(St(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),f=Math.min(o,c,l),h=Math.max(s,r,a),d=Math.max(o,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&zs(s,o,r,c,a,l,m.x,m.y)&&St(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function $d(i,e,t,n){const s=i.prev,r=i,a=i.next;if(St(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,f=r.y,h=a.y,d=Math.min(o,c,l),m=Math.min(u,f,h),M=Math.max(o,c,l),g=Math.max(u,f,h),p=tc(d,m,e,t,n),x=tc(M,g,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=x;){if(y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&zs(o,u,c,f,l,h,y.x,y.y)&&St(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=M&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&zs(o,u,c,f,l,h,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=M&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&zs(o,u,c,f,l,h,y.x,y.y)&&St(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=M&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&zs(o,u,c,f,l,h,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qd(i,e){let t=i;do{const n=t.prev,s=t.next.next;!ds(n,s)&&yh(n,t,t.next,s)&&ir(n,s)&&ir(s,n)&&(e.push(n.i,t.i,s.i),sr(t),sr(t.next),t=i=s),t=t.next}while(t!==i);return Li(t)}function ep(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&lp(a,o)){let c=Sh(a,o);a=Li(a,a.next),c=Li(c,c.next),nr(a,e,t,n,s,r,0),nr(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function tp(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=vh(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(cp(l))}s.sort(np);for(let r=0;r<s.length;r++)t=ip(s[r],t);return t}function np(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ip(i,e){const t=sp(i,e);if(!t)return e;const n=Sh(t,i);return Li(n,n.next),Li(t,t.next)}function sp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(ds(i,t))return t;do{if(ds(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Mh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const f=Math.abs(s-t.y)/(n-t.x);ir(t,i)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&rp(a,t)))&&(a=t,u=f)}t=t.next}while(t!==o);return a}function rp(i,e){return St(i.prev,i,e.prev)<0&&St(e.next,i,i.next)<0}function ap(i,e,t,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,op(s)}function op(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function cp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Mh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Mh(i,e,t,n,s,r,a,o)}function lp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!up(i,e)&&(ir(i,e)&&ir(e,i)&&hp(i,e)&&(St(i.prev,i,e.prev)||St(i,e.prev,e))||ds(i,e)&&St(i.prev,i,i.next)>0&&St(e.prev,e,e.next)>0)}function St(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ds(i,e){return i.x===e.x&&i.y===e.y}function yh(i,e,t,n){const s=Fr(St(i,e,t)),r=Fr(St(i,e,n)),a=Fr(St(t,n,i)),o=Fr(St(t,n,e));return!!(s!==r&&a!==o||s===0&&Nr(i,t,e)||r===0&&Nr(i,n,e)||a===0&&Nr(t,i,n)||o===0&&Nr(t,e,n))}function Nr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fr(i){return i>0?1:i<0?-1:0}function up(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ir(i,e){return St(i.prev,i,i.next)<0?St(i,e,i.next)>=0&&St(i,i.prev,e)>=0:St(i,e,i.prev)<0||St(i,i.next,e)<0}function hp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Sh(i,e){const t=nc(i.i,i.x,i.y),n=nc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Xl(i,e,t,n){const s=nc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function sr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class dp{static triangulate(e,t,n=2){return Yd(e,t,n)}}class ts{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ts.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];jl(e),Kl(n,e);let a=e.length;t.forEach(jl);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Kl(n,t[c]);const o=dp.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function jl(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Kl(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class rr extends At{constructor(e=new la([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:pp;let y,_=!1,L,w,F,v;if(p){y=p.getSpacedPoints(u),_=!0,h=!1;const ee=p.isCatmullRomCurve3?p.closed:!1;L=p.computeFrenetFrames(u,ee),w=new O,F=new O,v=new O}h||(g=0,d=0,m=0,M=0);const P=o.extractPoints(l);let N=P.shape;const D=P.holes;if(!ts.isClockWise(N)){N=N.reverse();for(let ee=0,le=D.length;ee<le;ee++){const te=D[ee];ts.isClockWise(te)&&(D[ee]=te.reverse())}}function G(ee){const te=10000000000000001e-36;let ve=ee[0];for(let ge=1;ge<=ee.length;ge++){const Ve=ge%ee.length,U=ee[Ve],qe=U.x-ve.x,De=U.y-ve.y,He=qe*qe+De*De,he=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(ve.x),Math.abs(ve.y)),st=te*he*he;if(He<=st){ee.splice(Ve,1),ge--;continue}ve=U}}G(N),D.forEach(G);const T=D.length,S=N;for(let ee=0;ee<T;ee++){const le=D[ee];N=N.concat(le)}function C(ee,le,te){return le||ze("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(le,te)}const A=N.length;function k(ee,le,te){let ve,ge,Ve;const U=ee.x-le.x,qe=ee.y-le.y,De=te.x-ee.x,He=te.y-ee.y,he=U*U+qe*qe,st=U*He-qe*De;if(Math.abs(st)>Number.EPSILON){const R=Math.sqrt(he),b=Math.sqrt(De*De+He*He),z=le.x-qe/R,J=le.y+U/R,ne=te.x-He/b,ue=te.y+De/b,fe=((ne-z)*He-(ue-J)*De)/(U*He-qe*De);ve=z+U*fe-ee.x,ge=J+qe*fe-ee.y;const Y=ve*ve+ge*ge;if(Y<=2)return new de(ve,ge);Ve=Math.sqrt(Y/2)}else{let R=!1;U>Number.EPSILON?De>Number.EPSILON&&(R=!0):U<-Number.EPSILON?De<-Number.EPSILON&&(R=!0):Math.sign(qe)===Math.sign(He)&&(R=!0),R?(ve=-qe,ge=U,Ve=Math.sqrt(he)):(ve=U,ge=qe,Ve=Math.sqrt(he/2))}return new de(ve/Ve,ge/Ve)}const V=[];for(let ee=0,le=S.length,te=le-1,ve=ee+1;ee<le;ee++,te++,ve++)te===le&&(te=0),ve===le&&(ve=0),V[ee]=k(S[ee],S[te],S[ve]);const K=[];let Z,re=V.concat();for(let ee=0,le=T;ee<le;ee++){const te=D[ee];Z=[];for(let ve=0,ge=te.length,Ve=ge-1,U=ve+1;ve<ge;ve++,Ve++,U++)Ve===ge&&(Ve=0),U===ge&&(U=0),Z[ve]=k(te[ve],te[Ve],te[U]);K.push(Z),re=re.concat(Z)}let ce;if(g===0)ce=ts.triangulateShape(S,D);else{const ee=[],le=[];for(let te=0;te<g;te++){const ve=te/g,ge=d*Math.cos(ve*Math.PI/2),Ve=m*Math.sin(ve*Math.PI/2)+M;for(let U=0,qe=S.length;U<qe;U++){const De=C(S[U],V[U],Ve);ie(De.x,De.y,-ge),ve===0&&ee.push(De)}for(let U=0,qe=T;U<qe;U++){const De=D[U];Z=K[U];const He=[];for(let he=0,st=De.length;he<st;he++){const R=C(De[he],Z[he],Ve);ie(R.x,R.y,-ge),ve===0&&He.push(R)}ve===0&&le.push(He)}}ce=ts.triangulateShape(ee,le)}const be=ce.length,Te=m+M;for(let ee=0;ee<A;ee++){const le=h?C(N[ee],re[ee],Te):N[ee];_?(F.copy(L.normals[0]).multiplyScalar(le.x),w.copy(L.binormals[0]).multiplyScalar(le.y),v.copy(y[0]).add(F).add(w),ie(v.x,v.y,v.z)):ie(le.x,le.y,0)}for(let ee=1;ee<=u;ee++)for(let le=0;le<A;le++){const te=h?C(N[le],re[le],Te):N[le];_?(F.copy(L.normals[ee]).multiplyScalar(te.x),w.copy(L.binormals[ee]).multiplyScalar(te.y),v.copy(y[ee]).add(F).add(w),ie(v.x,v.y,v.z)):ie(te.x,te.y,f/u*ee)}for(let ee=g-1;ee>=0;ee--){const le=ee/g,te=d*Math.cos(le*Math.PI/2),ve=m*Math.sin(le*Math.PI/2)+M;for(let ge=0,Ve=S.length;ge<Ve;ge++){const U=C(S[ge],V[ge],ve);ie(U.x,U.y,f+te)}for(let ge=0,Ve=D.length;ge<Ve;ge++){const U=D[ge];Z=K[ge];for(let qe=0,De=U.length;qe<De;qe++){const He=C(U[qe],Z[qe],ve);_?ie(He.x,He.y+y[u-1].y,y[u-1].x+te):ie(He.x,He.y,f+te)}}}j(),oe();function j(){const ee=s.length/3;if(h){let le=0,te=A*le;for(let ve=0;ve<be;ve++){const ge=ce[ve];we(ge[2]+te,ge[1]+te,ge[0]+te)}le=u+g*2,te=A*le;for(let ve=0;ve<be;ve++){const ge=ce[ve];we(ge[0]+te,ge[1]+te,ge[2]+te)}}else{for(let le=0;le<be;le++){const te=ce[le];we(te[2],te[1],te[0])}for(let le=0;le<be;le++){const te=ce[le];we(te[0]+A*u,te[1]+A*u,te[2]+A*u)}}n.addGroup(ee,s.length/3-ee,0)}function oe(){const ee=s.length/3;let le=0;se(S,le),le+=S.length;for(let te=0,ve=D.length;te<ve;te++){const ge=D[te];se(ge,le),le+=ge.length}n.addGroup(ee,s.length/3-ee,1)}function se(ee,le){let te=ee.length;for(;--te>=0;){const ve=te;let ge=te-1;ge<0&&(ge=ee.length-1);for(let Ve=0,U=u+g*2;Ve<U;Ve++){const qe=A*Ve,De=A*(Ve+1),He=le+ve+qe,he=le+ge+qe,st=le+ge+De,R=le+ve+De;ke(He,he,st,R)}}}function ie(ee,le,te){c.push(ee),c.push(le),c.push(te)}function we(ee,le,te){tt(ee),tt(le),tt(te);const ve=s.length/3,ge=x.generateTopUV(n,s,ve-3,ve-2,ve-1);Be(ge[0]),Be(ge[1]),Be(ge[2])}function ke(ee,le,te,ve){tt(ee),tt(le),tt(ve),tt(le),tt(te),tt(ve);const ge=s.length/3,Ve=x.generateSideWallUV(n,s,ge-6,ge-3,ge-2,ge-1);Be(Ve[0]),Be(Ve[1]),Be(Ve[3]),Be(Ve[1]),Be(Ve[2]),Be(Ve[3])}function tt(ee){s.push(c[ee*3+0]),s.push(c[ee*3+1]),s.push(c[ee*3+2])}function Be(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ec[s.type]().fromJSON(s)),new rr(n,e.options)}}const pp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new de(r,a),new de(o,c),new de(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[s*3],d=e[s*3+1],m=e[s*3+2],M=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-f),new de(h,1-m),new de(M,1-p)]:[new de(o,1-c),new de(u,1-f),new de(d,1-m),new de(g,1-p)]}};function mp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ns extends Lc{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ns(e.radius,e.detail)}}class Tn extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,f=e/o,h=t/c,d=[],m=[],M=[],g=[];for(let p=0;p<u;p++){const x=p*h-a;for(let y=0;y<l;y++){const _=y*f-r;m.push(_,-x,0),M.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,_=x+l*(p+1),L=x+1+l*(p+1),w=x+1+l*p;d.push(y,_,w),d.push(_,L,w)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lt extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],f=new O,h=new O,d=[],m=[],M=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let _=0;p===0&&a===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const w=L/t;f.x=-e*Math.cos(s+w*r)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(s+w*r)*Math.sin(a+y*o),m.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),g.push(w+_,1-y),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],_=u[p][x],L=u[p+1][x],w=u[p+1][x+1];(p!==0||a>0)&&d.push(y,_,w),(p!==n-1||c<Math.PI)&&d.push(_,L,w)}this.setIndex(d),this.setAttribute("position",new gt(m,3)),this.setAttribute("normal",new gt(M,3)),this.setAttribute("uv",new gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xn extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new O,d=new O,m=new O;for(let M=0;M<=n;M++){const g=a+M/n*o;for(let p=0;p<=s;p++){const x=p/s*r;d.x=(e+t*Math.cos(g))*Math.cos(x),d.y=(e+t*Math.cos(g))*Math.sin(x),d.z=t*Math.sin(g),l.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let g=1;g<=s;g++){const p=(s+1)*M+g-1,x=(s+1)*(M-1)+g-1,y=(s+1)*(M-1)+g,_=(s+1)*M+g;c.push(p,x,_),c.push(x,y,_)}this.setIndex(c),this.setAttribute("position",new gt(l,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function ps(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Jl(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=ps(i[t]);for(const s in n)e[s]=n[s]}return e}function Jl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gp(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Eh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const bp={clone:ps,merge:Xt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=_p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=gp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vp extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nc extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends Nc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sn extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$r,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=dc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mp extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ur(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sp(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Yl(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Th(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class _s{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ep extends _s{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:al,endingEnd:al}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ol:r=e,o=2*t-n;break;case cl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ol:a=e,c=2*n-t;break;case cl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),M=m*m,g=M*m,p=-h*g+2*h*M-h*m,x=(1+h)*g+(-1.5-2*h)*M+(-.5+h)*m+1,y=(-1-d)*g+(1.5+d)*M+.5*m,_=d*g-d*M;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+x*a[l+L]+y*a[c+L]+_*a[f+L];return r}}class Tp extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*f+a[c+h]*u;return r}}class wp extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ap extends _s{interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const M=(n-t)/(s-t),g=1-M;for(let p=0;p!==o;++p)r[p]=a[l+p]*g+a[c+p]*M;return r}const d=o*2,m=e-1;for(let M=0;M!==o;++M){const g=a[l+M],p=a[c+M],x=m*d+M*2,y=h[x],_=h[x+1],L=e*d+M*2,w=f[L],F=f[L+1];let v=(n-t)/(s-t),P,N,D,I,G;for(let T=0;T<8;T++){P=v*v,N=P*v,D=1-v,I=D*D,G=I*D;const C=G*t+3*I*v*y+3*D*P*w+N*s-n;if(Math.abs(C)<1e-10)break;const A=3*I*(y-t)+6*D*v*(w-y)+3*P*(s-w);if(Math.abs(A)<1e-10)break;v=v-C/A,v=Math.max(0,Math.min(1,v))}r[M]=G*g+3*I*v*_+3*D*P*F+N*p}return r}}class bn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ur(t,this.TimeBufferType),this.values=Ur(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ur(e.times,Array),values:Ur(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tp(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ep(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ap(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case $s:t=this.InterpolantFactoryMethodLinear;break;case _a:t=this.InterpolantFactoryMethodSmooth;break;case rl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return $s;case this.InterpolantFactoryMethodSmooth:return _a;case this.InterpolantFactoryMethodBezier:return rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Vf(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const f=o*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const M=t[f+m];if(M!==t[h+m]||M!==t[d+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=$s;class vs extends bn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Zs;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class wh extends bn{constructor(e,t,n,s){super(e,t,n,s)}}wh.prototype.ValueTypeName="color";class ms extends bn{constructor(e,t,n,s){super(e,t,n,s)}}ms.prototype.ValueTypeName="number";class Rp extends _s{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)ti.slerpFlat(r,0,a,l-o,a,l,c);return r}}class gs extends bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Rp(this.times,this.values,this.getValueSize(),e)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends bn{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=Zs;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class bs extends bn{constructor(e,t,n,s){super(e,t,n,s)}}bs.prototype.ValueTypeName="vector";class Cp{constructor(e="",t=-1,n=[],s=Lf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=un(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Lp(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=Sp(c);c=Yl(c,1,u),l=Yl(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ms(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Ne("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ze("AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,m,M){if(d.length!==0){const g=[],p=[];Th(d,g,p,m),g.length!==0&&M.push(new f(h,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let M=0;M<h[m].morphTargets.length;M++)d[h[m].morphTargets[M]]=-1;for(const M in d){const g=[],p=[];for(let x=0;x!==h[m].morphTargets.length;++x){const y=h[m];g.push(y.time),p.push(y.morphTarget===M?1:0)}s.push(new ms(".morphTargetInfluence["+M+"]",g,p))}c=d.length*a}else{const d=".bones["+t[f].name+"]";n(bs,d+".position",h,"pos",s),n(gs,d+".quaternion",h,"rot",s),n(bs,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Pp(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return bs;case"color":return wh;case"quaternion":return gs;case"bool":case"boolean":return vs;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Lp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Pp(i.type);if(i.times===void 0){const t=[],n=[];Th(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Zl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Zl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Dp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ip=new Dp;class ys{constructor(e){this.manager=e!==void 0?e:Ip,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class Np extends Error{constructor(e,t){super(e),this.response=t}}class Ah extends ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Kn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Wn[e]!==void 0){Wn[e].push({onLoad:t,onProgress:n,onError:s});return}Wn[e]=[],Wn[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Wn[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let M=0;const g=new ReadableStream({start(p){x();function x(){f.read().then(({done:y,value:_})=>{if(y)p.close();else{M+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:d});for(let w=0,F=u.length;w<F;w++){const v=u[w];v.onProgress&&v.onProgress(L)}p.enqueue(_),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new Np(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Kn.add(`file:${e}`,l);const u=Wn[e];delete Wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Wn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Wn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Zi=new WeakMap;class Fp extends ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Zi.get(a);f===void 0&&(f=[],Zi.set(a,f)),f.push({onLoad:t,onError:s})}return a}const o=er("img");function c(){u(),t&&t(this);const f=Zi.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}Zi.delete(this),r.manager.itemEnd(e)}function l(f){u(),s&&s(f),Kn.remove(`image:${e}`);const h=Zi.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(f)}Zi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Up extends ys{constructor(e){super(e)}load(e,t,n,s){const r=new Ut,a=new Fp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ua extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Op extends ua{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ja=new Ye,$l=new O,Ql=new O;class Fc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$l.setFromMatrixPosition(e.matrixWorld),t.position.copy($l),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Qs||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Or=new O,kr=new ti,vn=new O;class Rh extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Or,kr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,kr,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Or,kr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Or,kr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new O,eu=new de,tu=new de;class jt extends Rh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kp extends Fc{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=hs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Bp extends ua{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new kp}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class zp extends Fc{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}}class Gp extends ua{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ha extends Rh{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vp extends Fc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ch extends ua{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Vp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ks{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ya=new WeakMap;class Hp extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ne("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ne("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Ya.has(a)===!0?(s&&s(Ya.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e)}).catch(function(l){s&&s(l),Ya.set(c,l),Kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const $i=-90,Qi=1;class Wp extends vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new jt($i,Qi,e,t);s.layers=this.layers,this.add(s);const r=new jt($i,Qi,e,t);r.layers=this.layers,this.add(r);const a=new jt($i,Qi,e,t);a.layers=this.layers,this.add(a);const o=new jt($i,Qi,e,t);o.layers=this.layers,this.add(o);const c=new jt($i,Qi,e,t);c.layers=this.layers,this.add(c);const l=new jt($i,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qp extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc="\\[\\]\\.:\\/",Xp=new RegExp("["+Uc+"]","g"),Oc="[^"+Uc+"]",jp="[^"+Uc.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",Oc),Jp=/(WCOD+)?/.source.replace("WCOD",jp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Oc),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Oc),$p=new RegExp("^"+Kp+Jp+Yp+Zp+"$"),Qp=["material","materials","bones","map"];class em{constructor(e,t,n){const s=n||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ht{constructor(e,t,n){this.path=t,this.parsedPath=n||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,n):new ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xp,"")}static parseTrackName(e){const t=$p.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=em;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const qc=class qc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};qc.prototype.isMatrix2=!0;let nu=qc;function iu(i,e,t,n){const s=tm(n);switch(t){case eh:return i*e;case bc:return i*e/s.components*s.byteLength;case xc:return i*e/s.components*s.byteLength;case Pi:return i*e*2/s.components*s.byteLength;case _c:return i*e*2/s.components*s.byteLength;case th:return i*e*3/s.components*s.byteLength;case ln:return i*e*4/s.components*s.byteLength;case vc:return i*e*4/s.components*s.byteLength;case Wr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xo:case vo:return Math.max(i,16)*Math.max(e,8)/4;case bo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case Mo:case yo:case Eo:case To:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case So:case Yr:case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Co:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Go:case Vo:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Wo:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zr:case Xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tm(i){switch(i){case nn:case Yu:return{byteLength:1,components:1};case Js:case Zu:case $n:return{byteLength:2,components:1};case mc:case gc:return{byteLength:2,components:4};case In:case pc:case cn:return{byteLength:4,components:1};case $u:case Qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fc}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ph(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nm(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var im=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,am=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,um=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Am=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Im="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Um=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Km=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Jm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$m=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ag=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,og=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ug=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ng=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ug=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$g=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,u0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,f0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,E0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,T0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,R0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,D0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:im,alphahash_pars_fragment:sm,alphamap_fragment:rm,alphamap_pars_fragment:am,alphatest_fragment:om,alphatest_pars_fragment:cm,aomap_fragment:lm,aomap_pars_fragment:um,batching_pars_vertex:hm,batching_vertex:fm,begin_vertex:dm,beginnormal_vertex:pm,bsdfs:mm,iridescence_fragment:gm,bumpmap_pars_fragment:bm,clipping_planes_fragment:xm,clipping_planes_pars_fragment:_m,clipping_planes_pars_vertex:vm,clipping_planes_vertex:Mm,color_fragment:ym,color_pars_fragment:Sm,color_pars_vertex:Em,color_vertex:Tm,common:wm,cube_uv_reflection_fragment:Am,defaultnormal_vertex:Rm,displacementmap_pars_vertex:Cm,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Im,colorspace_pars_fragment:Nm,envmap_fragment:Fm,envmap_common_pars_fragment:Um,envmap_pars_fragment:Om,envmap_pars_vertex:km,envmap_physical_pars_fragment:Jm,envmap_vertex:Bm,fog_vertex:zm,fog_pars_vertex:Gm,fog_fragment:Vm,fog_pars_fragment:Hm,gradientmap_pars_fragment:Wm,lightmap_pars_fragment:qm,lights_lambert_fragment:Xm,lights_lambert_pars_fragment:jm,lights_pars_begin:Km,lights_toon_fragment:Ym,lights_toon_pars_fragment:Zm,lights_phong_fragment:$m,lights_phong_pars_fragment:Qm,lights_physical_fragment:eg,lights_physical_pars_fragment:tg,lights_fragment_begin:ng,lights_fragment_maps:ig,lights_fragment_end:sg,lightprobes_pars_fragment:rg,logdepthbuf_fragment:ag,logdepthbuf_pars_fragment:og,logdepthbuf_pars_vertex:cg,logdepthbuf_vertex:lg,map_fragment:ug,map_pars_fragment:hg,map_particle_fragment:fg,map_particle_pars_fragment:dg,metalnessmap_fragment:pg,metalnessmap_pars_fragment:mg,morphinstance_vertex:gg,morphcolor_vertex:bg,morphnormal_vertex:xg,morphtarget_pars_vertex:_g,morphtarget_vertex:vg,normal_fragment_begin:Mg,normal_fragment_maps:yg,normal_pars_fragment:Sg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:wg,clearcoat_normal_fragment_begin:Ag,clearcoat_normal_fragment_maps:Rg,clearcoat_pars_fragment:Cg,iridescence_pars_fragment:Pg,opaque_fragment:Lg,packing:Dg,premultiplied_alpha_fragment:Ig,project_vertex:Ng,dithering_fragment:Fg,dithering_pars_fragment:Ug,roughnessmap_fragment:Og,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Bg,shadowmap_pars_vertex:zg,shadowmap_vertex:Gg,shadowmask_pars_fragment:Vg,skinbase_vertex:Hg,skinning_pars_vertex:Wg,skinning_vertex:qg,skinnormal_vertex:Xg,specularmap_fragment:jg,specularmap_pars_fragment:Kg,tonemapping_fragment:Jg,tonemapping_pars_fragment:Yg,transmission_fragment:Zg,transmission_pars_fragment:$g,uv_pars_fragment:Qg,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:s0,backgroundCube_vert:r0,backgroundCube_frag:a0,cube_vert:o0,cube_frag:c0,depth_vert:l0,depth_frag:u0,distance_vert:h0,distance_frag:f0,equirect_vert:d0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:b0,meshbasic_frag:x0,meshlambert_vert:_0,meshlambert_frag:v0,meshmatcap_vert:M0,meshmatcap_frag:y0,meshnormal_vert:S0,meshnormal_frag:E0,meshphong_vert:T0,meshphong_frag:w0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:P0,points_vert:L0,points_frag:D0,shadow_vert:I0,shadow_frag:N0,sprite_vert:F0,sprite_frag:U0},Me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},wn={basic:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Xt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Xt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Xt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Xt([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Xt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Xt([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Xt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Xt([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Xt([Me.common,Me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Xt([Me.lights,Me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};wn.physical={uniforms:Xt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Br={r:0,b:0,g:0},O0=new Ye,Lh=new je;Lh.set(-1,0,0,0,1,0,0,0,1);function k0(i,e,t,n,s,r){const a=new Ge(0);let o=s===!0?0:1,c,l,u=null,f=0,h=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){const _=x.backgroundBlurriness>0;y=e.get(y,_)}return y}function m(x){let y=!1;const _=d(x);_===null?g(a,o):_&&_.isColor&&(g(_,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,r):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(x,y){const _=d(y);_&&(_.isCubeTexture||_.mapping===oa)?(l===void 0&&(l=new Re(new Tt(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ps(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,w,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Lh),l.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Re(new Tn(2,2),new Nn({name:"BackgroundMaterial",uniforms:ps(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(Br,Eh(i)),t.buffers.color.setClear(Br.r,Br.g,Br.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:M,dispose:p}}function B0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(D,I,G,T,S){let C=!1;const A=f(D,T,G,I);r!==A&&(r=A,l(r.object)),C=d(D,T,G,S),C&&m(D,T,G,S),S!==null&&e.update(S,i.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,_(D,I,G,T),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function f(D,I,G,T){const S=T.wireframe===!0;let C=n[I.id];C===void 0&&(C={},n[I.id]=C);const A=D.isInstancedMesh===!0?D.id:0;let k=C[A];k===void 0&&(k={},C[A]=k);let V=k[G.id];V===void 0&&(V={},k[G.id]=V);let K=V[S];return K===void 0&&(K=h(c()),V[S]=K),K}function h(D){const I=[],G=[],T=[];for(let S=0;S<t;S++)I[S]=0,G[S]=0,T[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:T,object:D,attributes:{},index:null}}function d(D,I,G,T){const S=r.attributes,C=I.attributes;let A=0;const k=G.getAttributes();for(const V in k)if(k[V].location>=0){const Z=S[V];let re=C[V];if(re===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),Z===void 0||Z.attribute!==re||re&&Z.data!==re.data)return!0;A++}return r.attributesNum!==A||r.index!==T}function m(D,I,G,T){const S={},C=I.attributes;let A=0;const k=G.getAttributes();for(const V in k)if(k[V].location>=0){let Z=C[V];Z===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const re={};re.attribute=Z,Z&&Z.data&&(re.data=Z.data),S[V]=re,A++}r.attributes=S,r.attributesNum=A,r.index=T}function M(){const D=r.newAttributes;for(let I=0,G=D.length;I<G;I++)D[I]=0}function g(D){p(D,0)}function p(D,I){const G=r.newAttributes,T=r.enabledAttributes,S=r.attributeDivisors;G[D]=1,T[D]===0&&(i.enableVertexAttribArray(D),T[D]=1),S[D]!==I&&(i.vertexAttribDivisor(D,I),S[D]=I)}function x(){const D=r.newAttributes,I=r.enabledAttributes;for(let G=0,T=I.length;G<T;G++)I[G]!==D[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function y(D,I,G,T,S,C,A){A===!0?i.vertexAttribIPointer(D,I,G,S,C):i.vertexAttribPointer(D,I,G,T,S,C)}function _(D,I,G,T){M();const S=T.attributes,C=G.getAttributes(),A=I.defaultAttributeValues;for(const k in C){const V=C[k];if(V.location>=0){let K=S[k];if(K===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const Z=K.normalized,re=K.itemSize,ce=e.get(K);if(ce===void 0)continue;const be=ce.buffer,Te=ce.type,j=ce.bytesPerElement,oe=Te===i.INT||Te===i.UNSIGNED_INT||K.gpuType===pc;if(K.isInterleavedBufferAttribute){const se=K.data,ie=se.stride,we=K.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<V.locationSize;ke++)p(V.location+ke,se.meshPerAttribute);D.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<V.locationSize;ke++)g(V.location+ke);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ke=0;ke<V.locationSize;ke++)y(V.location+ke,re/V.locationSize,Te,Z,ie*j,(we+re/V.locationSize*ke)*j,oe)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)p(V.location+se,K.meshPerAttribute);D.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<V.locationSize;se++)g(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,be);for(let se=0;se<V.locationSize;se++)y(V.location+se,re/V.locationSize,Te,Z,re*j,re/V.locationSize*se*j,oe)}}else if(A!==void 0){const Z=A[k];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(V.location,Z);break;case 3:i.vertexAttrib3fv(V.location,Z);break;case 4:i.vertexAttrib4fv(V.location,Z);break;default:i.vertexAttrib1fv(V.location,Z)}}}}x()}function L(){P();for(const D in n){const I=n[D];for(const G in I){const T=I[G];for(const S in T){const C=T[S];for(const A in C)u(C[A].object),delete C[A];delete T[S]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;const I=n[D.id];for(const G in I){const T=I[G];for(const S in T){const C=T[S];for(const A in C)u(C[A].object),delete C[A];delete T[S]}}delete n[D.id]}function F(D){for(const I in n){const G=n[I];for(const T in G){const S=G[T];if(S[D.id]===void 0)continue;const C=S[D.id];for(const A in C)u(C[A].object),delete C[A];delete S[D.id]}}}function v(D){for(const I in n){const G=n[I],T=D.isInstancedMesh===!0?D.id:0,S=G[T];if(S!==void 0){for(const C in S){const A=S[C];for(const k in A)u(A[k].object),delete A[k];delete S[C]}delete G[T],Object.keys(G).length===0&&delete n[I]}}}function P(){N(),a=!0,r!==s&&(r=s,l(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:N,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:F,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function z0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function G0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(F){return!(F!==ln&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(F){const v=F===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==nn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==cn&&!v)}function c(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ne("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:_,maxSamples:L,samples:w}}function V0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Si,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):l();else{const x=r?0:n,y=x*4;let _=p.clippingState||null;c.value=_,_=u(m,h,y,d);for(let L=0;L!==y;++L)_[L]=t[L];p.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const M=f!==null?f.length:0;let g=null;if(M!==0){if(g=c.value,m!==!0||g===null){const p=d+M*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==M;++y,_+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const mi=4,su=[.125,.215,.35,.446,.526,.582],Ti=20,H0=256,Fs=new ha,ru=new Ge;let Za=null,$a=0,Qa=0,eo=!1;const W0=new O;class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=W0}=r;Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Za,$a,Qa),this._renderer.xr.enabled=eo,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ri||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Za=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:$n,format:ln,colorSpace:Jt,depthBuffer:!1},s=ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ou(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q0(r)),this._blurMaterial=j0(r,e,t),this._ggxMaterial=X0(r,e,t)}return s}_compileMaterial(e){const t=new Re(new At,e);this._renderer.compile(t,Fs)}_sceneToCubeUV(e,t,n,s,r){const c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(ru),f.toneMapping=Ln,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Tt,new mt({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let p=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(ru),p=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):_===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const L=this._cubeSize;es(s,_*L,y>2?L:0,L,L),f.setRenderTarget(s),p&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ri||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cu());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:m}=this,M=this._sizeLods[n],g=3*M*(n>m-mi?n-m+mi:0),p=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,es(r,g,p,3*M,2*M),s.setRenderTarget(r),s.render(o,Fs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,es(e,g,p,3*M,2*M),s.setRenderTarget(e),s.render(o,Fs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ti-1),M=r/m,g=isFinite(r)?1+Math.floor(u*M):Ti;g>Ti&&Ne(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ti}`);const p=[];let x=0;for(let F=0;F<Ti;++F){const v=F/M,P=Math.exp(-v*v/2);p.push(P),F===0?x+=P:F<g&&(x+=2*P)}for(let F=0;F<p.length;F++)p[F]=p[F]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const _=this._sizeLods[s],L=3*_*(s>y-mi?s-y+mi:0),w=4*(this._cubeSize-_);es(t,L,w,3*_,2*_),c.setRenderTarget(t),c.render(f,Fs)}}function q0(i){const e=[],t=[],n=[];let s=i;const r=i-mi+1+su.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-mi?c=su[a-i+mi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,M=3,g=2,p=1,x=new Float32Array(M*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let w=0;w<d;w++){const F=w%3*2/3-1,v=w>2?0:-1,P=[F,v,0,F+2/3,v,0,F+2/3,v+1,0,F,v,0,F+2/3,v+1,0,F,v+1,0];x.set(P,M*m*w),y.set(h,g*m*w);const N=[w,w,w,w,w,w];_.set(N,p*m*w)}const L=new At;L.setAttribute("position",new Ot(x,M)),L.setAttribute("uv",new Ot(y,g)),L.setAttribute("faceIndex",new Ot(_,p)),n.push(new Re(L,null)),s>mi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ou(i,e,t){const n=new Dn(i,e,t);return n.texture.mapping=oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function es(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function X0(i,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function j0(i,e,t){const n=new Float32Array(Ti),s=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cu(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function lu(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Dh extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new dh(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Tt(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kt,blending:Jn});r.uniforms.tEquirect.value=t;const a=new Re(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Ft),new Wp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function K0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ba||d===xa)if(e.has(h)){const m=e.get(h).texture;return o(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const M=new Dh(m.height);return M.fromEquirectangularTexture(i,h),e.set(h,M),h.addEventListener("dispose",l),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,m=d===ba||d===xa,M=d===Ri||d===us;if(m||M){let g=t.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new au(i)),g=m?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return m&&x&&x.height>0||M&&x&&c(x)?(n===null&&(n=new au(i)),g=m?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,d){return d===ba?h.mapping=Ri:d===xa&&(h.mapping=us),h}function c(h){let d=0;const m=6;for(let M=0;M<m;M++)h[M]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function J0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Jo("WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",a),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],i.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let M=0;if(m===void 0)return;if(d!==null){const x=d.array;M=d.version;for(let y=0,_=x.length;y<_;y+=3){const L=x[y+0],w=x[y+1],F=x[y+2];h.push(L,w,w,F,F,L)}}else{const x=m.array;M=m.version;for(let y=0,_=x.length/3-1;y<_;y+=3){const L=y+0,w=y+1,F=y+2;h.push(L,w,w,F,F,L)}}const g=new(m.count>=65535?ch:oh)(h,1);g.version=M;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Z0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let M=0;for(let g=0;g<d;g++)M+=h[g];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function $0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Q0(i,e,t){const n=new WeakMap,s=new _t;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let P=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",P)};h!==void 0&&h.texture.dispose();const d=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),M===!0&&(y=3);let _=o.attributes.position.count*y,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*L*4*f),F=new sh(w,_,L,f);F.type=cn,F.needsUpdate=!0;const v=y*4;for(let N=0;N<f;N++){const D=g[N],I=p[N],G=x[N],T=_*L*4*N;for(let S=0;S<D.count;S++){const C=S*v;d===!0&&(s.fromBufferAttribute(D,S),w[T+C+0]=s.x,w[T+C+1]=s.y,w[T+C+2]=s.z,w[T+C+3]=0),m===!0&&(s.fromBufferAttribute(I,S),w[T+C+4]=s.x,w[T+C+5]=s.y,w[T+C+6]=s.z,w[T+C+7]=0),M===!0&&(s.fromBufferAttribute(G,S),w[T+C+8]=s.x,w[T+C+9]=s.y,w[T+C+10]=s.z,w[T+C+11]=G.itemSize===4?s.w:1)}}h={count:f,texture:F,size:new de(_,L)},n.set(o,h),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const m=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function eb(i,e,t,n,s){let r=new WeakMap;function a(l){const u=s.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const tb={[Gu]:"LINEAR_TONE_MAPPING",[Vu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Wu]:"ACES_FILMIC_TONE_MAPPING",[Xu]:"AGX_TONE_MAPPING",[ju]:"NEUTRAL_TONE_MAPPING",[qu]:"CUSTOM_TONE_MAPPING"};function nb(i,e,t,n,s){const r=new Dn(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new fs(e,t):void 0}),a=new Dn(e,t,{type:$n,depthBuffer:!1,stencilBuffer:!1}),o=new At;o.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new gt([0,2,0,0,2,0],2));const c=new vp({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Re(o,c),u=new ha(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,M=null,g=[],p=!1;this.setSize=function(x,y){r.setSize(x,y),a.setSize(x,y);for(let _=0;_<g.length;_++){const L=g[_];L.setSize&&L.setSize(x,y)}},this.setEffects=function(x){g=x,p=g.length>0&&g[0].isRenderPass===!0;const y=r.width,_=r.height;for(let L=0;L<g.length;L++){const w=g[L];w.setSize&&w.setSize(y,_)}},this.begin=function(x,y){if(d||x.toneMapping===Ln&&g.length===0)return!1;if(M=y,y!==null){const _=y.width,L=y.height;(r.width!==_||r.height!==L)&&this.setSize(_,L)}return p===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=Ln,!0},this.hasRenderPass=function(){return p},this.end=function(x,y){x.toneMapping=m,d=!0;let _=r,L=a;for(let w=0;w<g.length;w++){const F=g[w];if(F.enabled!==!1&&(F.render(x,L,_,y),F.needsSwap!==!1)){const v=_;_=L,L=v}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,c.defines={},nt.getTransfer(f)===lt&&(c.defines.SRGB_TRANSFER="");const w=tb[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(M),x.render(l,u),M=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),c.dispose()}}const Ih=new Ut,ic=new fs(1,1),Nh=new sh,Fh=new dd,Uh=new dh,uu=[],hu=[],fu=new Float32Array(16),du=new Float32Array(9),pu=new Float32Array(4);function Ss(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=uu[s];if(r===void 0&&(r=new Float32Array(s),uu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function da(i,e){let t=hu[e];t===void 0&&(t=new Int32Array(e),hu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ib(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Bt(t,e)}}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Bt(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Bt(t,e)}}function ob(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;pu.set(n),i.uniformMatrix2fv(this.addr,!1,pu),Bt(t,n)}}function cb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;du.set(n),i.uniformMatrix3fv(this.addr,!1,du),Bt(t,n)}}function lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(kt(t,n))return;fu.set(n),i.uniformMatrix4fv(this.addr,!1,fu),Bt(t,n)}}function ub(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Bt(t,e)}}function fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Bt(t,e)}}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Bt(t,e)}}function pb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Bt(t,e)}}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Bt(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Bt(t,e)}}function xb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ic.compareFunction=t.isReversedDepthBuffer()?yc:Mc,r=ic):r=Ih,t.setTexture2D(e||r,s)}function _b(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Fh,s)}function vb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Uh,s)}function Mb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Nh,s)}function yb(i){switch(i){case 5126:return ib;case 35664:return sb;case 35665:return rb;case 35666:return ab;case 35674:return ob;case 35675:return cb;case 35676:return lb;case 5124:case 35670:return ub;case 35667:case 35671:return hb;case 35668:case 35672:return fb;case 35669:case 35673:return db;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Sb(i,e){i.uniform1fv(this.addr,e)}function Eb(i,e){const t=Ss(e,this.size,2);i.uniform2fv(this.addr,t)}function Tb(i,e){const t=Ss(e,this.size,3);i.uniform3fv(this.addr,t)}function wb(i,e){const t=Ss(e,this.size,4);i.uniform4fv(this.addr,t)}function Ab(i,e){const t=Ss(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rb(i,e){const t=Ss(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cb(i,e){const t=Ss(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pb(i,e){i.uniform1iv(this.addr,e)}function Lb(i,e){i.uniform2iv(this.addr,e)}function Db(i,e){i.uniform3iv(this.addr,e)}function Ib(i,e){i.uniform4iv(this.addr,e)}function Nb(i,e){i.uniform1uiv(this.addr,e)}function Fb(i,e){i.uniform2uiv(this.addr,e)}function Ub(i,e){i.uniform3uiv(this.addr,e)}function Ob(i,e){i.uniform4uiv(this.addr,e)}function kb(i,e,t){const n=this.cache,s=e.length,r=da(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ic:a=Ih;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bb(i,e,t){const n=this.cache,s=e.length,r=da(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Fh,r[a])}function zb(i,e,t){const n=this.cache,s=e.length,r=da(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uh,r[a])}function Gb(i,e,t){const n=this.cache,s=e.length,r=da(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Bt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Nh,r[a])}function Vb(i){switch(i){case 5126:return Sb;case 35664:return Eb;case 35665:return Tb;case 35666:return wb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return Nb;case 36294:return Fb;case 36295:return Ub;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Hb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yb(t.type)}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const to=/(\w+)(\])?(\[|\.)?/g;function mu(i,e){i.seq.push(e),i.map[e.id]=e}function Xb(i,e,t){const n=i.name,s=n.length;for(to.lastIndex=0;;){const r=to.exec(n),a=to.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){mu(t,l===void 0?new Hb(o,i,e):new Wb(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new qb(o),mu(t,f)),t=f}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Xb(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const jb=37297;let Kb=0;function Jb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const bu=new je;function Yb(i){nt._getMatrix(bu,nt.workingColorSpace,i);const e=`mat3( ${bu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jb(i.getShaderSource(e),o)}else return r}function Zb(i,e){const t=Yb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $b={[Gu]:"Linear",[Vu]:"Reinhard",[Hu]:"Cineon",[Wu]:"ACESFilmic",[Xu]:"AgX",[ju]:"Neutral",[qu]:"Custom"};function Qb(i,e){const t=$b[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new O;function ex(){nt.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function nx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Gs(i){return i!==""}function _u(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(i){return i.replace(sx,ax)}const rx=new Map;function ax(i,e){let t=$e[e];if(t===void 0){const n=rx.get(e);if(n!==void 0)t=$e[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sc(t)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mu(i){return i.replace(ox,cx)}function cx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lx={[Vr]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function ux(i){return lx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hx={[Ri]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[oa]:"ENVMAP_TYPE_CUBE_UV"};function fx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":hx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const dx={[us]:"ENVMAP_MODE_REFRACTION"};function px(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":dx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mx={[dc]:"ENVMAP_BLENDING_MULTIPLY",[Rf]:"ENVMAP_BLENDING_MIX",[Cf]:"ENVMAP_BLENDING_ADD"};function gx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mx[i.combine]||"ENVMAP_BLENDING_NONE"}function bx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function xx(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ux(t),l=fx(t),u=px(t),f=gx(t),h=bx(t),d=tx(t),m=nx(r),M=s.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(g=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?$e.tonemapping_pars_fragment:"",t.toneMapping!==Ln?Qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),a=sc(a),a=_u(a,t),a=vu(a,t),o=sc(o),o=_u(o,t),o=vu(o,t),a=Mu(a),o=Mu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+a,_=x+p+o,L=gu(s,s.VERTEX_SHADER,y),w=gu(s,s.FRAGMENT_SHADER,_);s.attachShader(M,L),s.attachShader(M,w),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function F(D){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(M)||"",G=s.getShaderInfoLog(L)||"",T=s.getShaderInfoLog(w)||"",S=I.trim(),C=G.trim(),A=T.trim();let k=!0,V=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,L,w);else{const K=xu(s,L,"vertex"),Z=xu(s,w,"fragment");ze("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+S+`
`+K+`
`+Z)}else S!==""?Ne("WebGLProgram: Program Info Log:",S):(C===""||A==="")&&(V=!1);V&&(D.diagnostics={runnable:k,programLog:S,vertexShader:{log:C,prefix:g},fragmentShader:{log:A,prefix:p}})}s.deleteShader(L),s.deleteShader(w),v=new Kr(s,M),P=ix(s,M)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(M,jb)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=L,this.fragmentShader=w,this}let _x=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mx(e),t.set(e,n)),n}}class Mx{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}}function yx(i){return i===Pi||i===Yr||i===Zr}function Sx(i,e,t,n,s,r){const a=new rh,o=new vx,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,P,N,D,I,G){const T=D.fog,S=I.geometry,C=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,A=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,k=e.get(v.envMap||C,A),V=k&&k.mapping===oa?k.image.height:null,K=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Z=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,re=Z!==void 0?Z.length:0;let ce=0;S.morphAttributes.position!==void 0&&(ce=1),S.morphAttributes.normal!==void 0&&(ce=2),S.morphAttributes.color!==void 0&&(ce=3);let be,Te,j,oe;if(K){const Ke=wn[K];be=Ke.vertexShader,Te=Ke.fragmentShader}else be=v.vertexShader,Te=v.fragmentShader,o.update(v),j=o.getVertexShaderID(v),oe=o.getFragmentShaderID(v);const se=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),we=I.isInstancedMesh===!0,ke=I.isBatchedMesh===!0,tt=!!v.map,Be=!!v.matcap,ee=!!k,le=!!v.aoMap,te=!!v.lightMap,ve=!!v.bumpMap,ge=!!v.normalMap,Ve=!!v.displacementMap,U=!!v.emissiveMap,qe=!!v.metalnessMap,De=!!v.roughnessMap,He=v.anisotropy>0,he=v.clearcoat>0,st=v.dispersion>0,R=v.iridescence>0,b=v.sheen>0,z=v.transmission>0,J=He&&!!v.anisotropyMap,ne=he&&!!v.clearcoatMap,ue=he&&!!v.clearcoatNormalMap,fe=he&&!!v.clearcoatRoughnessMap,Y=R&&!!v.iridescenceMap,Q=R&&!!v.iridescenceThicknessMap,Ee=b&&!!v.sheenColorMap,Pe=b&&!!v.sheenRoughnessMap,xe=!!v.specularMap,pe=!!v.specularColorMap,Xe=!!v.specularIntensityMap,Ze=z&&!!v.transmissionMap,at=z&&!!v.thicknessMap,B=!!v.gradientMap,me=!!v.alphaMap,$=v.alphaTest>0,Ae=!!v.alphaHash,_e=!!v.extensions;let ae=Ln;v.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ae=i.toneMapping);const Fe={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:be,fragmentShader:Te,defines:v.defines,customVertexShaderID:j,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:ke,batchingColor:ke&&I._colorsTexture!==null,instancing:we,instancingColor:we&&I.instanceColor!==null,instancingMorph:we&&I.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:Be,envMap:ee,envMapMode:ee&&k.mapping,envMapCubeUVHeight:V,aoMap:le,lightMap:te,bumpMap:ve,normalMap:ge,displacementMap:Ve,emissiveMap:U,normalMapObjectSpace:ge&&v.normalMapType===Nf,normalMapTangentSpace:ge&&v.normalMapType===$r,packedNormalMap:ge&&v.normalMapType===$r&&yx(v.normalMap.format),metalnessMap:qe,roughnessMap:De,anisotropy:He,anisotropyMap:J,clearcoat:he,clearcoatMap:ne,clearcoatNormalMap:ue,clearcoatRoughnessMap:fe,dispersion:st,iridescence:R,iridescenceMap:Y,iridescenceThicknessMap:Q,sheen:b,sheenColorMap:Ee,sheenRoughnessMap:Pe,specularMap:xe,specularColorMap:pe,specularIntensityMap:Xe,transmission:z,transmissionMap:Ze,thicknessMap:at,gradientMap:B,opaque:v.transparent===!1&&v.blending===rs&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:$,alphaHash:Ae,combine:v.combine,mapUv:tt&&m(v.map.channel),aoMapUv:le&&m(v.aoMap.channel),lightMapUv:te&&m(v.lightMap.channel),bumpMapUv:ve&&m(v.bumpMap.channel),normalMapUv:ge&&m(v.normalMap.channel),displacementMapUv:Ve&&m(v.displacementMap.channel),emissiveMapUv:U&&m(v.emissiveMap.channel),metalnessMapUv:qe&&m(v.metalnessMap.channel),roughnessMapUv:De&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ne&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&m(v.sheenRoughnessMap.channel),specularMapUv:xe&&m(v.specularMap.channel),specularColorMapUv:pe&&m(v.specularColorMap.channel),specularIntensityMapUv:Xe&&m(v.specularIntensityMap.channel),transmissionMapUv:Ze&&m(v.transmissionMap.channel),thicknessMapUv:at&&m(v.thicknessMap.channel),alphaMapUv:me&&m(v.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(ge||He),vertexNormals:!!S.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!S.attributes.uv&&(tt||me),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||S.attributes.normal===void 0&&ge===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:I.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ce,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ae,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===lt,decodeVideoTextureEmissive:U&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===lt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===An,flipSided:v.side===Kt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||ke)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(v){const P=[];if(v.shaderID?P.push(v.shaderID):(P.push(v.customVertexShaderID),P.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)P.push(N),P.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(p(P,v),x(P,v),P.push(i.outputColorSpace)),P.push(v.customProgramCacheKey),P.join()}function p(v,P){v.push(P.precision),v.push(P.outputColorSpace),v.push(P.envMapMode),v.push(P.envMapCubeUVHeight),v.push(P.mapUv),v.push(P.alphaMapUv),v.push(P.lightMapUv),v.push(P.aoMapUv),v.push(P.bumpMapUv),v.push(P.normalMapUv),v.push(P.displacementMapUv),v.push(P.emissiveMapUv),v.push(P.metalnessMapUv),v.push(P.roughnessMapUv),v.push(P.anisotropyMapUv),v.push(P.clearcoatMapUv),v.push(P.clearcoatNormalMapUv),v.push(P.clearcoatRoughnessMapUv),v.push(P.iridescenceMapUv),v.push(P.iridescenceThicknessMapUv),v.push(P.sheenColorMapUv),v.push(P.sheenRoughnessMapUv),v.push(P.specularMapUv),v.push(P.specularColorMapUv),v.push(P.specularIntensityMapUv),v.push(P.transmissionMapUv),v.push(P.thicknessMapUv),v.push(P.combine),v.push(P.fogExp2),v.push(P.sizeAttenuation),v.push(P.morphTargetsCount),v.push(P.morphAttributeCount),v.push(P.numDirLights),v.push(P.numPointLights),v.push(P.numSpotLights),v.push(P.numSpotLightMaps),v.push(P.numHemiLights),v.push(P.numRectAreaLights),v.push(P.numDirLightShadows),v.push(P.numPointLightShadows),v.push(P.numSpotLightShadows),v.push(P.numSpotLightShadowsWithMaps),v.push(P.numLightProbes),v.push(P.shadowMapType),v.push(P.toneMapping),v.push(P.numClippingPlanes),v.push(P.numClipIntersection),v.push(P.depthPacking)}function x(v,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function y(v){const P=d[v.type];let N;if(P){const D=wn[P];N=bp.clone(D.uniforms)}else N=v.uniforms;return N}function _(v,P){let N=u.get(P);return N!==void 0?++N.usedTimes:(N=new xx(i,P,v,s),l.push(N),u.set(P,N)),N}function L(v){if(--v.usedTimes===0){const P=l.indexOf(v);l[P]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function F(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:L,releaseShaderCache:w,programs:l,dispose:F}}function Ex(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Su(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,m,M,g,p){let x=i[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:m,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:g,group:p},i[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=m,x.materialVariant=a(h),x.groupOrder=M,x.renderOrder=h.renderOrder,x.z=g,x.group=p),e++,x}function c(h,d,m,M,g,p){const x=o(h,d,m,M,g,p);m.transmission>0?n.push(x):m.transparent===!0?s.push(x):t.push(x)}function l(h,d,m,M,g,p){const x=o(h,d,m,M,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||Tx),n.length>1&&n.sort(d||Su),s.length>1&&s.sort(d||Su)}function f(){for(let h=e,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function wx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Eu,i.set(n,[a])):s>=r.length?(a=new Eu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ax(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ge};break;case"SpotLight":t={position:new O,direction:new O,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Rx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Cx=0;function Px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Lx(i){const e=new Ax,t=Rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new Ye,a=new Ye;function o(l){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,m=0,M=0,g=0,p=0,x=0,y=0,_=0,L=0,w=0,F=0;l.sort(Px);for(let P=0,N=l.length;P<N;P++){const D=l[P],I=D.color,G=D.intensity,T=D.distance;let S=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Pi?S=D.shadow.map.texture:S=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*G,f+=I.g*G,h+=I.b*G;else if(D.isLightProbe){for(let C=0;C<9;C++)n.probe[C].addScaledVector(D.sh.coefficients[C],G);F++}else if(D.isDirectionalLight){const C=e.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const A=D.shadow,k=t.get(D);k.shadowIntensity=A.intensity,k.shadowBias=A.bias,k.shadowNormalBias=A.normalBias,k.shadowRadius=A.radius,k.shadowMapSize=A.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=S,n.directionalShadowMatrix[d]=D.shadow.matrix,x++}n.directional[d]=C,d++}else if(D.isSpotLight){const C=e.get(D);C.position.setFromMatrixPosition(D.matrixWorld),C.color.copy(I).multiplyScalar(G),C.distance=T,C.coneCos=Math.cos(D.angle),C.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),C.decay=D.decay,n.spot[M]=C;const A=D.shadow;if(D.map&&(n.spotLightMap[L]=D.map,L++,A.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[M]=A.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=A.intensity,k.shadowBias=A.bias,k.shadowNormalBias=A.normalBias,k.shadowRadius=A.radius,k.shadowMapSize=A.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=S,_++}M++}else if(D.isRectAreaLight){const C=e.get(D);C.color.copy(I).multiplyScalar(G),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),n.rectArea[g]=C,g++}else if(D.isPointLight){const C=e.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),C.distance=D.distance,C.decay=D.decay,D.castShadow){const A=D.shadow,k=t.get(D);k.shadowIntensity=A.intensity,k.shadowBias=A.bias,k.shadowNormalBias=A.normalBias,k.shadowRadius=A.radius,k.shadowMapSize=A.mapSize,k.shadowCameraNear=A.camera.near,k.shadowCameraFar=A.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=S,n.pointShadowMatrix[m]=D.shadow.matrix,y++}n.point[m]=C,m++}else if(D.isHemisphereLight){const C=e.get(D);C.skyColor.copy(D.color).multiplyScalar(G),C.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[p]=C,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const v=n.hash;(v.directionalLength!==d||v.pointLength!==m||v.spotLength!==M||v.rectAreaLength!==g||v.hemiLength!==p||v.numDirectionalShadows!==x||v.numPointShadows!==y||v.numSpotShadows!==_||v.numSpotMaps!==L||v.numLightProbes!==F)&&(n.directional.length=d,n.spot.length=M,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=F,v.directionalLength=d,v.pointLength=m,v.spotLength=M,v.rectAreaLength=g,v.hemiLength=p,v.numDirectionalShadows=x,v.numPointShadows=y,v.numSpotShadows=_,v.numSpotMaps=L,v.numLightProbes=F,n.version=Cx++)}function c(l,u){let f=0,h=0,d=0,m=0,M=0;const g=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[f];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=n.point[h];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),h++}else if(y.isHemisphereLight){const _=n.hemi[M];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),M++}}}return{setup:o,setupView:c,state:n}}function Tu(i){const e=new Lx(i),t=[],n=[],s=[];function r(h){f.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){s.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Dx(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Tu(i),e.set(s,[o])):r>=a.length?(o=new Tu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fx=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],Ux=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],wu=new Ye,Us=new O,no=new O;function Ox(i,e,t){let n=new Rc;const s=new de,r=new de,a=new _t,o=new Mp,c=new yp,l={},u=t.maxTextureSize,f={[Zn]:Kt,[Kt]:Zn,[An]:An},h=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:Ix,fragmentShader:Nx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new At;m.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Re(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let p=this.type;this.render=function(w,F,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===lf&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vr);const P=i.getRenderTarget(),N=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Jn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=p!==this.type;G&&F.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(S=>S.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,S=w.length;T<S;T++){const C=w[T],A=C.shadow;if(A===void 0){Ne("WebGLShadowMap:",C,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;s.copy(A.mapSize);const k=A.getFrameExtents();s.multiply(k),r.copy(A.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,A.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,A.mapSize.y=r.y));const V=i.state.buffers.depth.getReversed();if(A.camera._reversedDepth=V,A.map===null||G===!0){if(A.map!==null&&(A.map.depthTexture!==null&&(A.map.depthTexture.dispose(),A.map.depthTexture=null),A.map.dispose()),this.type===ks){if(C.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}A.map=new Dn(s.x,s.y,{format:Pi,type:$n,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),A.map.texture.name=C.name+".shadowMap",A.map.depthTexture=new fs(s.x,s.y,cn),A.map.depthTexture.name=C.name+".shadowMapDepth",A.map.depthTexture.format=Qn,A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=Nt,A.map.depthTexture.magFilter=Nt}else C.isPointLight?(A.map=new Dh(s.x),A.map.depthTexture=new Ud(s.x,In)):(A.map=new Dn(s.x,s.y),A.map.depthTexture=new fs(s.x,s.y,In)),A.map.depthTexture.name=C.name+".shadowMap",A.map.depthTexture.format=Qn,this.type===Vr?(A.map.depthTexture.compareFunction=V?yc:Mc,A.map.depthTexture.minFilter=Ft,A.map.depthTexture.magFilter=Ft):(A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=Nt,A.map.depthTexture.magFilter=Nt);A.camera.updateProjectionMatrix()}const K=A.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<K;Z++){if(A.map.isWebGLCubeRenderTarget)i.setRenderTarget(A.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(A.map),i.clear());const re=A.getViewport(Z);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),I.viewport(a)}if(C.isPointLight){const re=A.camera,ce=A.matrix,be=C.distance||re.far;be!==re.far&&(re.far=be,re.updateProjectionMatrix()),Us.setFromMatrixPosition(C.matrixWorld),re.position.copy(Us),no.copy(re.position),no.add(Fx[Z]),re.up.copy(Ux[Z]),re.lookAt(no),re.updateMatrixWorld(),ce.makeTranslation(-Us.x,-Us.y,-Us.z),wu.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),A._frustum.setFromProjectionMatrix(wu,re.coordinateSystem,re.reversedDepth)}else A.updateMatrices(C);n=A.getFrustum(),_(F,v,A.camera,C,this.type)}A.isPointLightShadow!==!0&&this.type===ks&&x(A,v),A.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(P,N,D)};function x(w,F){const v=e.update(M);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Dn(s.x,s.y,{format:Pi,type:$n})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(F,null,v,h,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(F,null,v,d,M,null)}function y(w,F,v,P){let N=null;const D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)N=D;else if(N=v.isPointLight===!0?c:o,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const I=N.uuid,G=F.uuid;let T=l[I];T===void 0&&(T={},l[I]=T);let S=T[G];S===void 0&&(S=N.clone(),T[G]=S,F.addEventListener("dispose",L)),N=S}if(N.visible=F.visible,N.wireframe=F.wireframe,P===ks?N.side=F.shadowSide!==null?F.shadowSide:F.side:N.side=F.shadowSide!==null?F.shadowSide:f[F.side],N.alphaMap=F.alphaMap,N.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,N.map=F.map,N.clipShadows=F.clipShadows,N.clippingPlanes=F.clippingPlanes,N.clipIntersection=F.clipIntersection,N.displacementMap=F.displacementMap,N.displacementScale=F.displacementScale,N.displacementBias=F.displacementBias,N.wireframeLinewidth=F.wireframeLinewidth,N.linewidth=F.linewidth,v.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const I=i.properties.get(N);I.light=v}return N}function _(w,F,v,P,N){if(w.visible===!1)return;if(w.layers.test(F.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===ks)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const G=e.update(w),T=w.material;if(Array.isArray(T)){const S=G.groups;for(let C=0,A=S.length;C<A;C++){const k=S[C],V=T[k.materialIndex];if(V&&V.visible){const K=y(w,V,P,N);w.onBeforeShadow(i,w,F,v,G,K,k),i.renderBufferDirect(v,null,G,K,w,k),w.onAfterShadow(i,w,F,v,G,K,k)}}}else if(T.visible){const S=y(w,T,P,N);w.onBeforeShadow(i,w,F,v,G,S,null),i.renderBufferDirect(v,null,G,S,w,null),w.onAfterShadow(i,w,F,v,G,S,null)}}const I=w.children;for(let G=0,T=I.length;G<T;G++)_(I[G],F,v,P,N)}function L(w){w.target.removeEventListener("dispose",L);for(const v in l){const P=l[v],N=w.target.uuid;N in P&&(P[N].dispose(),delete P[N])}}}function kx(i,e){function t(){let B=!1;const me=new _t;let $=null;const Ae=new _t(0,0,0,0);return{setMask:function(_e){$!==_e&&!B&&(i.colorMask(_e,_e,_e,_e),$=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ae,Fe,Ke,Rt){Rt===!0&&(_e*=Ke,ae*=Ke,Fe*=Ke),me.set(_e,ae,Fe,Ke),Ae.equals(me)===!1&&(i.clearColor(_e,ae,Fe,Ke),Ae.copy(me))},reset:function(){B=!1,$=null,Ae.set(-1,0,0,0)}}}function n(){let B=!1,me=!1,$=null,Ae=null,_e=null;return{setReversed:function(ae){if(me!==ae){const Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),me=ae;const Ke=_e;_e=null,this.setClear(Ke)}},getReversed:function(){return me},setTest:function(ae){ae?se(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(ae){$!==ae&&!B&&(i.depthMask(ae),$=ae)},setFunc:function(ae){if(me&&(ae=qf[ae]),Ae!==ae){switch(ae){case lo:i.depthFunc(i.NEVER);break;case uo:i.depthFunc(i.ALWAYS);break;case ho:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case fo:i.depthFunc(i.EQUAL);break;case po:i.depthFunc(i.GEQUAL);break;case mo:i.depthFunc(i.GREATER);break;case go:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ae}},setLocked:function(ae){B=ae},setClear:function(ae){_e!==ae&&(_e=ae,me&&(ae=1-ae),i.clearDepth(ae))},reset:function(){B=!1,$=null,Ae=null,_e=null,me=!1}}}function s(){let B=!1,me=null,$=null,Ae=null,_e=null,ae=null,Fe=null,Ke=null,Rt=null;return{setTest:function(dt){B||(dt?se(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(dt){me!==dt&&!B&&(i.stencilMask(dt),me=dt)},setFunc:function(dt,kn,xn){($!==dt||Ae!==kn||_e!==xn)&&(i.stencilFunc(dt,kn,xn),$=dt,Ae=kn,_e=xn)},setOp:function(dt,kn,xn){(ae!==dt||Fe!==kn||Ke!==xn)&&(i.stencilOp(dt,kn,xn),ae=dt,Fe=kn,Ke=xn)},setLocked:function(dt){B=dt},setClear:function(dt){Rt!==dt&&(i.clearStencil(dt),Rt=dt)},reset:function(){B=!1,me=null,$=null,Ae=null,_e=null,ae=null,Fe=null,Ke=null,Rt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,y=null,_=null,L=null,w=null,F=null,v=new Ge(0,0,0),P=0,N=!1,D=null,I=null,G=null,T=null,S=null;const C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let A=!1,k=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),A=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),A=k>=2);let K=null,Z={};const re=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),be=new _t().fromArray(re),Te=new _t().fromArray(ce);function j(B,me,$,Ae){const _e=new Uint8Array(4),ae=i.createTexture();i.bindTexture(B,ae),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<$;Fe++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(me+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return ae}const oe={};oe[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(ls),ve(!1),ge(el),se(i.CULL_FACE),le(Jn);function se(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ie(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function we(B,me){return h[B]!==me?(i.bindFramebuffer(B,me),h[B]=me,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=me),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=me),!0):!1}function ke(B,me){let $=m,Ae=!1;if(B){$=d.get(me),$===void 0&&($=[],d.set(me,$));const _e=B.textures;if($.length!==_e.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Fe=_e.length;ae<Fe;ae++)$[ae]=i.COLOR_ATTACHMENT0+ae;$.length=_e.length,Ae=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers($)}function tt(B){return M!==B?(i.useProgram(B),M=B,!0):!1}const Be={[Ei]:i.FUNC_ADD,[hf]:i.FUNC_SUBTRACT,[ff]:i.FUNC_REVERSE_SUBTRACT};Be[df]=i.MIN,Be[pf]=i.MAX;const ee={[mf]:i.ZERO,[gf]:i.ONE,[bf]:i.SRC_COLOR,[oo]:i.SRC_ALPHA,[Sf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[co]:i.ONE_MINUS_SRC_ALPHA,[yf]:i.ONE_MINUS_DST_COLOR,[vf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Tf]:i.ONE_MINUS_CONSTANT_COLOR,[wf]:i.CONSTANT_ALPHA,[Af]:i.ONE_MINUS_CONSTANT_ALPHA};function le(B,me,$,Ae,_e,ae,Fe,Ke,Rt,dt){if(B===Jn){g===!0&&(ie(i.BLEND),g=!1);return}if(g===!1&&(se(i.BLEND),g=!0),B!==uf){if(B!==p||dt!==N){if((x!==Ei||L!==Ei)&&(i.blendEquation(i.FUNC_ADD),x=Ei,L=Ei),dt)switch(B){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFunc(i.ONE,i.ONE);break;case nl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ze("WebGLState: Invalid blending: ",B);break}else switch(B){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case tl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nl:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case il:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",B);break}y=null,_=null,w=null,F=null,v.set(0,0,0),P=0,p=B,N=dt}return}_e=_e||me,ae=ae||$,Fe=Fe||Ae,(me!==x||_e!==L)&&(i.blendEquationSeparate(Be[me],Be[_e]),x=me,L=_e),($!==y||Ae!==_||ae!==w||Fe!==F)&&(i.blendFuncSeparate(ee[$],ee[Ae],ee[ae],ee[Fe]),y=$,_=Ae,w=ae,F=Fe),(Ke.equals(v)===!1||Rt!==P)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Rt),v.copy(Ke),P=Rt),p=B,N=!1}function te(B,me){B.side===An?ie(i.CULL_FACE):se(i.CULL_FACE);let $=B.side===Kt;me&&($=!$),ve($),B.blending===rs&&B.transparent===!1?le(Jn):le(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);const Ae=B.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),U(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function ge(B){B!==of?(se(i.CULL_FACE),B!==I&&(B===el?i.cullFace(i.BACK):B===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),I=B}function Ve(B){B!==G&&(A&&i.lineWidth(B),G=B)}function U(B,me,$){B?(se(i.POLYGON_OFFSET_FILL),(T!==me||S!==$)&&(T=me,S=$,a.getReversed()&&(me=-me),i.polygonOffset(me,$))):ie(i.POLYGON_OFFSET_FILL)}function qe(B){B?se(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function De(B){B===void 0&&(B=i.TEXTURE0+C-1),K!==B&&(i.activeTexture(B),K=B)}function He(B,me,$){$===void 0&&(K===null?$=i.TEXTURE0+C-1:$=K);let Ae=Z[$];Ae===void 0&&(Ae={type:void 0,texture:void 0},Z[$]=Ae),(Ae.type!==B||Ae.texture!==me)&&(K!==$&&(i.activeTexture($),K=$),i.bindTexture(B,me||oe[B]),Ae.type=B,Ae.texture=me)}function he(){const B=Z[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function st(){try{i.compressedTexImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function b(){try{i.texSubImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function ne(){try{i.compressedTexSubImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function ue(){try{i.texStorage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function fe(){try{i.texStorage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function Y(){try{i.texImage2D(...arguments)}catch(B){ze("WebGLState:",B)}}function Q(){try{i.texImage3D(...arguments)}catch(B){ze("WebGLState:",B)}}function Ee(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function Pe(B,me){f[B]!==me&&(i.pixelStorei(B,me),f[B]=me)}function xe(B){be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),be.copy(B))}function pe(B){Te.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Te.copy(B))}function Xe(B,me){let $=l.get(me);$===void 0&&($=new WeakMap,l.set(me,$));let Ae=$.get(B);Ae===void 0&&(Ae=i.getUniformBlockIndex(me,B.name),$.set(B,Ae))}function Ze(B,me){const Ae=l.get(me).get(B);c.get(me)!==Ae&&(i.uniformBlockBinding(me,Ae,B.__bindingPointIndex),c.set(me,Ae))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},K=null,Z={},h={},d=new WeakMap,m=[],M=null,g=!1,p=null,x=null,y=null,_=null,L=null,w=null,F=null,v=new Ge(0,0,0),P=0,N=!1,D=null,I=null,G=null,T=null,S=null,be.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ie,bindFramebuffer:we,drawBuffers:ke,useProgram:tt,setBlending:le,setMaterial:te,setFlipSided:ve,setCullFace:ge,setLineWidth:Ve,setPolygonOffset:U,setScissorTest:qe,activeTexture:De,bindTexture:He,unbindTexture:he,compressedTexImage2D:st,compressedTexImage3D:R,texImage2D:Y,texImage3D:Q,pixelStorei:Pe,getParameter:Ee,updateUBOMapping:Xe,uniformBlockBinding:Ze,texStorage2D:ue,texStorage3D:fe,texSubImage2D:b,texSubImage3D:z,compressedTexSubImage2D:J,compressedTexSubImage3D:ne,scissor:xe,viewport:pe,reset:at}}function Bx(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,b){return m?new OffscreenCanvas(R,b):er("canvas")}function g(R,b,z){let J=1;const ne=st(R);if((ne.width>z||ne.height>z)&&(J=z/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(J*ne.width),fe=Math.floor(J*ne.height);h===void 0&&(h=M(ue,fe));const Y=b?M(ue,fe):h;return Y.width=ue,Y.height=fe,Y.getContext("2d").drawImage(R,0,0,ue,fe),Ne("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ue+"x"+fe+")."),Y}else return"data"in R&&Ne("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function p(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,b,z,J,ne,ue=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;J&&(fe=e.get("EXT_texture_norm16"),fe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=b;if(b===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.R16_EXT),z===i.SHORT&&fe&&(Y=fe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RG16_EXT),z===i.SHORT&&fe&&(Y=fe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGB16_EXT),z===i.SHORT&&fe&&(Y=fe.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),b===i.RGBA){const Q=ue?Qr:nt.getTransfer(ne);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Q===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&fe&&(Y=fe.RGBA16_EXT),z===i.SHORT&&fe&&(Y=fe.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function L(R,b){let z;return R?b===null||b===In||b===Ys?z=i.DEPTH24_STENCIL8:b===cn?z=i.DEPTH32F_STENCIL8:b===Js&&(z=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===In||b===Ys?z=i.DEPTH_COMPONENT24:b===cn?z=i.DEPTH_COMPONENT32F:b===Js&&(z=i.DEPTH_COMPONENT16),z}function w(R,b){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Nt&&R.minFilter!==Ft?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function F(R){const b=R.target;b.removeEventListener("dispose",F),P(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function v(R){const b=R.target;b.removeEventListener("dispose",v),D(b)}function P(R){const b=n.get(R);if(b.__webglInit===void 0)return;const z=R.source,J=d.get(z);if(J){const ne=J[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&N(R),Object.keys(J).length===0&&d.delete(z)}n.remove(R)}function N(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const z=R.source,J=d.get(z);delete J[b.__cacheKey],a.memory.textures--}function D(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let ne=0;ne<b.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,ne=z.length;J<ne;J++){const ue=n.get(z[J]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(R)}let I=0;function G(){I=0}function T(){return I}function S(R){I=R}function C(){const R=I;return R>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function A(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function k(R,b){const z=n.get(R);if(R.isVideoTexture&&He(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function V(R,b){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ie(z,R,b);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function K(R,b){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){ie(z,R,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function Z(R,b){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){we(z,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const re={[Ci]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Jr]:i.MIRRORED_REPEAT},ce={[Nt]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Bs]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Hr]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},be={[Ff]:i.NEVER,[zf]:i.ALWAYS,[Uf]:i.LESS,[Mc]:i.LEQUAL,[Of]:i.EQUAL,[yc]:i.GEQUAL,[kf]:i.GREATER,[Bf]:i.NOTEQUAL};function Te(R,b){if(b.type===cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ft||b.magFilter===Hr||b.magFilter===Bs||b.magFilter===jn||b.minFilter===Ft||b.minFilter===Hr||b.minFilter===Bs||b.minFilter===jn)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ce[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ce[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nt||b.minFilter!==Bs&&b.minFilter!==jn||b.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function j(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",F));const J=b.source;let ne=d.get(J);ne===void 0&&(ne={},d.set(J,ne));const ue=A(b);if(ue!==R.__cacheKey){ne[ue]===void 0&&(ne[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[ue].usedTimes++;const fe=ne[R.__cacheKey];fe!==void 0&&(ne[R.__cacheKey].usedTimes--,fe.usedTimes===0&&N(b)),R.__cacheKey=ue,R.__webglTexture=ne[ue].texture}return z}function oe(R,b,z){return Math.floor(Math.floor(R/z)/b)}function se(R,b,z,J){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,J,b.data);else{ue.sort((Pe,xe)=>Pe.start-xe.start);let fe=0;for(let Pe=1;Pe<ue.length;Pe++){const xe=ue[fe],pe=ue[Pe],Xe=xe.start+xe.count,Ze=oe(pe.start,b.width,4),at=oe(xe.start,b.width,4);pe.start<=Xe+1&&Ze===at&&oe(pe.start+pe.count-1,b.width,4)===Ze?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++fe,ue[fe]=pe)}ue.length=fe+1;const Y=t.getParameter(i.UNPACK_ROW_LENGTH),Q=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,xe=ue.length;Pe<xe;Pe++){const pe=ue[Pe],Xe=Math.floor(pe.start/4),Ze=Math.ceil(pe.count/4),at=Xe%b.width,B=Math.floor(Xe/b.width),me=Ze,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,at),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,at,B,me,$,z,J,b.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function ie(R,b,z){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const ne=j(R,b),ue=b.source;t.bindTexture(J,R.__webglTexture,i.TEXTURE0+z);const fe=n.get(ue);if(ue.version!==fe.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const $=nt.getPrimaries(nt.workingColorSpace),Ae=b.colorSpace===pi?null:nt.getPrimaries(b.colorSpace),_e=b.colorSpace===pi||$===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=g(b.image,!1,s.maxTextureSize);Q=he(b,Q);const Ee=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type);let xe=_(b.internalFormat,Ee,Pe,b.normalized,b.colorSpace,b.isVideoTexture);Te(J,b);let pe;const Xe=b.mipmaps,Ze=b.isVideoTexture!==!0,at=fe.__version===void 0||ne===!0,B=ue.dataReady,me=w(b,Q);if(b.isDepthTexture)xe=L(b.format===wi,b.type),at&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ee,Pe,null));else if(b.isDataTexture)if(Xe.length>0){Ze&&at&&t.texStorage2D(i.TEXTURE_2D,me,xe,Xe[0].width,Xe[0].height);for(let $=0,Ae=Xe.length;$<Ae;$++)pe=Xe[$],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,Ee,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,$,xe,pe.width,pe.height,0,Ee,Pe,pe.data);b.generateMipmaps=!1}else Ze?(at&&t.texStorage2D(i.TEXTURE_2D,me,xe,Q.width,Q.height),B&&se(b,Q,Ee,Pe)):t.texImage2D(i.TEXTURE_2D,0,xe,Q.width,Q.height,0,Ee,Pe,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ze&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,xe,Xe[0].width,Xe[0].height,Q.depth);for(let $=0,Ae=Xe.length;$<Ae;$++)if(pe=Xe[$],b.format!==ln)if(Ee!==null)if(Ze){if(B)if(b.layerUpdates.size>0){const _e=iu(pe.width,pe.height,b.format,b.type);for(const ae of b.layerUpdates){const Fe=pe.data.subarray(ae*_e/pe.data.BYTES_PER_ELEMENT,(ae+1)*_e/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ae,pe.width,pe.height,1,Ee,Fe)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Q.depth,Ee,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,xe,pe.width,pe.height,Q.depth,0,pe.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,pe.width,pe.height,Q.depth,Ee,Pe,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,xe,pe.width,pe.height,Q.depth,0,Ee,Pe,pe.data)}else{Ze&&at&&t.texStorage2D(i.TEXTURE_2D,me,xe,Xe[0].width,Xe[0].height);for(let $=0,Ae=Xe.length;$<Ae;$++)pe=Xe[$],b.format!==ln?Ee!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,Ee,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,$,xe,pe.width,pe.height,0,pe.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,pe.width,pe.height,Ee,Pe,pe.data):t.texImage2D(i.TEXTURE_2D,$,xe,pe.width,pe.height,0,Ee,Pe,pe.data)}else if(b.isDataArrayTexture)if(Ze){if(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,xe,Q.width,Q.height,Q.depth),B)if(b.layerUpdates.size>0){const $=iu(Q.width,Q.height,b.format,b.type);for(const Ae of b.layerUpdates){const _e=Q.data.subarray(Ae*$/Q.data.BYTES_PER_ELEMENT,(Ae+1)*$/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,Q.width,Q.height,1,Ee,Pe,_e)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Pe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,Ee,Pe,Q.data);else if(b.isData3DTexture)Ze?(at&&t.texStorage3D(i.TEXTURE_3D,me,xe,Q.width,Q.height,Q.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Ee,Pe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,Ee,Pe,Q.data);else if(b.isFramebufferTexture){if(at)if(Ze)t.texStorage2D(i.TEXTURE_2D,me,xe,Q.width,Q.height);else{let $=Q.width,Ae=Q.height;for(let _e=0;_e<me;_e++)t.texImage2D(i.TEXTURE_2D,_e,xe,$,Ae,0,Ee,Pe,null),$>>=1,Ae>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),f.add(b),$.onpaint=Ke=>{const Rt=Ke.changedElements;for(const dt of f)Rt.includes(dt.image)&&(dt.needsUpdate=!0)},$.requestPaint();return}const Ae=0,_e=i.RGBA,ae=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ae,_e,ae,Fe,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xe.length>0){if(Ze&&at){const $=st(Xe[0]);t.texStorage2D(i.TEXTURE_2D,me,xe,$.width,$.height)}for(let $=0,Ae=Xe.length;$<Ae;$++)pe=Xe[$],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,Pe,pe):t.texImage2D(i.TEXTURE_2D,$,xe,Ee,Pe,pe);b.generateMipmaps=!1}else if(Ze){if(at){const $=st(Q);t.texStorage2D(i.TEXTURE_2D,me,xe,$.width,$.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Pe,Q)}else t.texImage2D(i.TEXTURE_2D,0,xe,Ee,Pe,Q);p(b)&&x(J),fe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function we(R,b,z){if(b.image.length!==6)return;const J=j(R,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const ue=n.get(ne);if(ne.version!==ue.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const fe=nt.getPrimaries(nt.workingColorSpace),Y=b.colorSpace===pi?null:nt.getPrimaries(b.colorSpace),Q=b.colorSpace===pi||fe===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const Ee=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,xe=[];for(let ae=0;ae<6;ae++)!Ee&&!Pe?xe[ae]=g(b.image[ae],!0,s.maxCubemapSize):xe[ae]=Pe?b.image[ae].image:b.image[ae],xe[ae]=he(b,xe[ae]);const pe=xe[0],Xe=r.convert(b.format,b.colorSpace),Ze=r.convert(b.type),at=_(b.internalFormat,Xe,Ze,b.normalized,b.colorSpace),B=b.isVideoTexture!==!0,me=ue.__version===void 0||J===!0,$=ne.dataReady;let Ae=w(b,pe);Te(i.TEXTURE_CUBE_MAP,b);let _e;if(Ee){B&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,at,pe.width,pe.height);for(let ae=0;ae<6;ae++){_e=xe[ae].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){const Ke=_e[Fe];b.format!==ln?Xe!==null?B?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ke.width,Ke.height,Xe,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,at,Ke.width,Ke.height,0,Ke.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ke.width,Ke.height,Xe,Ze,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,at,Ke.width,Ke.height,0,Xe,Ze,Ke.data)}}}else{if(_e=b.mipmaps,B&&me){_e.length>0&&Ae++;const ae=st(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,at,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Pe){B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,xe[ae].width,xe[ae].height,Xe,Ze,xe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,at,xe[ae].width,xe[ae].height,0,Xe,Ze,xe[ae].data);for(let Fe=0;Fe<_e.length;Fe++){const Rt=_e[Fe].image[ae].image;B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Rt.width,Rt.height,Xe,Ze,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,at,Rt.width,Rt.height,0,Xe,Ze,Rt.data)}}else{B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Xe,Ze,xe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,at,Xe,Ze,xe[ae]);for(let Fe=0;Fe<_e.length;Fe++){const Ke=_e[Fe];B?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Xe,Ze,Ke.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,at,Xe,Ze,Ke.image[ae])}}}p(b)&&x(i.TEXTURE_CUBE_MAP),ue.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ke(R,b,z,J,ne,ue){const fe=r.convert(z.format,z.colorSpace),Y=r.convert(z.type),Q=_(z.internalFormat,fe,Y,z.normalized,z.colorSpace),Ee=n.get(b),Pe=n.get(z);if(Pe.__renderTarget=b,!Ee.__hasExternalTextures){const xe=Math.max(1,b.width>>ue),pe=Math.max(1,b.height>>ue);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ue,Q,xe,pe,b.depth,0,fe,Y,null):t.texImage2D(ne,ue,Q,xe,pe,0,fe,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),De(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,0,qe(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,Pe.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const J=b.depthTexture,ne=J&&J.isDepthTexture?J.type:null,ue=L(b.stencilBuffer,ne),fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;De(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(b),ue,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(b),ue,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ue,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{const J=b.textures;for(let ne=0;ne<J.length;ne++){const ue=J[ne],fe=r.convert(ue.format,ue.colorSpace),Y=r.convert(ue.type),Q=_(ue.internalFormat,fe,Y,ue.normalized,ue.colorSpace);De(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe(b),Q,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(R,b,z){const J=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Te(i.TEXTURE_CUBE_MAP,b.depthTexture);const Ee=r.convert(b.depthTexture.format),Pe=r.convert(b.depthTexture.type);let xe;b.depthTexture.format===Qn?xe=i.DEPTH_COMPONENT24:b.depthTexture.format===wi&&(xe=i.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,b.width,b.height,0,Ee,Pe,null)}}else k(b.depthTexture,0);const ue=ne.__webglTexture,fe=qe(b),Y=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Q=b.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===Qn)De(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Y,ue,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Y,ue,0);else if(b.depthTexture.format===wi)De(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Y,ue,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Y,ue,0);else throw new Error("Unknown depthTexture format")}function ee(R){const b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let J=0;J<6;J++)Be(b.__webglFramebuffer[J],R,J);else{const J=R.texture.mipmaps;J&&J.length>0?Be(b.__webglFramebuffer[0],R,0):Be(b.__webglFramebuffer,R,0)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),tt(b.__webglDepthbuffer[J],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}}else{const J=R.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),tt(b.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,b,z){const J=n.get(R);b!==void 0&&ke(J.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ee(R)}function te(R){const b=R.texture,z=n.get(R),J=n.get(b);R.addEventListener("dispose",v);const ne=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,a.memory.textures++),ue){z.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[Y]=[];for(let Q=0;Q<b.mipmaps.length;Q++)z.__webglFramebuffer[Y][Q]=i.createFramebuffer()}else z.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let Y=0;Y<b.mipmaps.length;Y++)z.__webglFramebuffer[Y]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(fe)for(let Y=0,Q=ne.length;Y<Q;Y++){const Ee=n.get(ne[Y]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&De(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Y=0;Y<ne.length;Y++){const Q=ne[Y];z.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Y]);const Ee=r.convert(Q.format,Q.colorSpace),Pe=r.convert(Q.type),xe=_(Q.internalFormat,Ee,Pe,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),pe=qe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,z.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Te(i.TEXTURE_CUBE_MAP,b);for(let Y=0;Y<6;Y++)if(b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ke(z.__webglFramebuffer[Y][Q],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else ke(z.__webglFramebuffer[Y],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(b)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let Y=0,Q=ne.length;Y<Q;Y++){const Ee=ne[Y],Pe=n.get(Ee);let xe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Pe.__webglTexture),Te(xe,Ee),ke(z.__webglFramebuffer,R,Ee,i.COLOR_ATTACHMENT0+Y,xe,0),p(Ee)&&x(xe)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,J.__webglTexture),Te(Y,b),b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)ke(z.__webglFramebuffer[Q],R,b,i.COLOR_ATTACHMENT0,Y,Q);else ke(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,Y,0);p(b)&&x(Y),t.unbindTexture()}R.depthBuffer&&ee(R)}function ve(R){const b=R.textures;for(let z=0,J=b.length;z<J;z++){const ne=b[z];if(p(ne)){const ue=y(R),fe=n.get(ne).__webglTexture;t.bindTexture(ue,fe),x(ue),t.unbindTexture()}}}const ge=[],Ve=[];function U(R){if(R.samples>0){if(De(R)===!1){const b=R.textures,z=R.width,J=R.height;let ne=i.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),Y=b.length>1;if(Y)for(let Ee=0;Ee<b.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ee=0;Ee<b.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]);const Pe=n.get(b[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,ne,i.NEAREST),c===!0&&(ge.length=0,Ve.length=0,ge.push(i.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ge.push(ue),Ve.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let Ee=0;Ee<b.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,fe.__webglColorRenderbuffer[Ee]);const Pe=n.get(b[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function qe(R){return Math.min(s.maxSamples,R.samples)}function De(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function He(R){const b=a.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function he(R,b){const z=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Jt&&z!==pi&&(nt.getTransfer(z)===lt?(J!==ln||ne!==nn)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",z)),b}function st(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=G,this.getTextureUnits=T,this.setTextureUnits=S,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=Z,this.rebindTextures=le,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=De,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function zx(i,e){function t(n,s=pi){let r;const a=nt.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===mc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yu)return i.BYTE;if(n===Zu)return i.SHORT;if(n===Js)return i.UNSIGNED_SHORT;if(n===pc)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===$n)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===th)return i.RGB;if(n===ln)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===xc)return i.RED_INTEGER;if(n===Pi)return i.RG;if(n===_c)return i.RG_INTEGER;if(n===vc)return i.RGBA_INTEGER;if(n===Wr||n===qr||n===Xr||n===jr)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===xo||n===_o||n===vo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===yo||n===So||n===Eo||n===To||n===Yr||n===wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Mo||n===yo)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Eo)return r.COMPRESSED_R11_EAC;if(n===To)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yr)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ao||n===Ro||n===Co||n===Po||n===Lo||n===Do||n===Io||n===No||n===Fo||n===Uo||n===Oo||n===ko||n===Bo||n===zo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ro)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Co)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Po)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Do)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===No)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Go||n===Vo||n===Ho)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Go)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wo||n===qo||n===Zr||n===Xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:Gx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new Tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends Di{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",g=new Hx,p={},x=t.getContextAttributes();let y=null,_=null;const L=[],w=[],F=new de;let v=null;const P=new jt;P.viewport=new _t;const N=new jt;N.viewport=new _t;const D=[P,N],I=new qp;let G=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let oe=L[j];return oe===void 0&&(oe=new Ta,L[j]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(j){let oe=L[j];return oe===void 0&&(oe=new Ta,L[j]=oe),oe.getGripSpace()},this.getHand=function(j){let oe=L[j];return oe===void 0&&(oe=new Ta,L[j]=oe),oe.getHandSpace()};function S(j){const oe=w.indexOf(j.inputSource);if(oe===-1)return;const se=L[oe];se!==void 0&&(se.update(j.inputSource,j.frame,l||a),se.dispatchEvent({type:j.type,data:j.inputSource}))}function C(){s.removeEventListener("select",S),s.removeEventListener("selectstart",S),s.removeEventListener("selectend",S),s.removeEventListener("squeeze",S),s.removeEventListener("squeezestart",S),s.removeEventListener("squeezeend",S),s.removeEventListener("end",C),s.removeEventListener("inputsourceschange",A);for(let j=0;j<L.length;j++){const oe=w[j];oe!==null&&(w[j]=null,L[j].disconnect(oe))}G=null,T=null,g.reset();for(const j in p)delete p[j];e.setRenderTarget(y),d=null,h=null,f=null,s=null,_=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",S),s.addEventListener("selectstart",S),s.addEventListener("selectend",S),s.addEventListener("squeeze",S),s.addEventListener("squeezestart",S),s.addEventListener("squeezeend",S),s.addEventListener("end",C),s.addEventListener("inputsourceschange",A),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(F),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ie=null,we=null;x.depth&&(we=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?wi:Qn,ie=x.stencil?Ys:In);const ke={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Dn(h.textureWidth,h.textureHeight,{format:ln,type:nn,depthTexture:new fs(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,se),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Dn(d.framebufferWidth,d.framebufferHeight,{format:ln,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function A(j){for(let oe=0;oe<j.removed.length;oe++){const se=j.removed[oe],ie=w.indexOf(se);ie>=0&&(w[ie]=null,L[ie].disconnect(se))}for(let oe=0;oe<j.added.length;oe++){const se=j.added[oe];let ie=w.indexOf(se);if(ie===-1){for(let ke=0;ke<L.length;ke++)if(ke>=w.length){w.push(se),ie=ke;break}else if(w[ke]===null){w[ke]=se,ie=ke;break}if(ie===-1)break}const we=L[ie];we&&we.connect(se)}}const k=new O,V=new O;function K(j,oe,se){k.setFromMatrixPosition(oe.matrixWorld),V.setFromMatrixPosition(se.matrixWorld);const ie=k.distanceTo(V),we=oe.projectionMatrix.elements,ke=se.projectionMatrix.elements,tt=we[14]/(we[10]-1),Be=we[14]/(we[10]+1),ee=(we[9]+1)/we[5],le=(we[9]-1)/we[5],te=(we[8]-1)/we[0],ve=(ke[8]+1)/ke[0],ge=tt*te,Ve=tt*ve,U=ie/(-te+ve),qe=U*-te;if(oe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(qe),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const De=tt+U,He=Be+U,he=ge-qe,st=Ve+(ie-qe),R=ee*Be/He*De,b=le*Be/He*De;j.projectionMatrix.makePerspective(he,st,R,b,De,He),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Z(j,oe){oe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(oe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let oe=j.near,se=j.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(se=g.depthFar)),I.near=N.near=P.near=oe,I.far=N.far=P.far=se,(G!==I.near||T!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),G=I.near,T=I.far),I.layers.mask=j.layers.mask|6,P.layers.mask=I.layers.mask&-5,N.layers.mask=I.layers.mask&-3;const ie=j.parent,we=I.cameras;Z(I,ie);for(let ke=0;ke<we.length;ke++)Z(we[ke],ie);we.length===2?K(I,P,N):I.projectionMatrix.copy(P.projectionMatrix),re(j,I,ie)};function re(j,oe,se){se===null?j.matrix.copy(oe.matrixWorld):(j.matrix.copy(se.matrixWorld),j.matrix.invert(),j.matrix.multiply(oe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(oe.projectionMatrix),j.projectionMatrixInverse.copy(oe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(j){return p[j]};let ce=null;function be(j,oe){if(u=oe.getViewerPose(l||a),m=oe,u!==null){const se=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ie=!1;se.length!==I.cameras.length&&(I.cameras.length=0,ie=!0);for(let Be=0;Be<se.length;Be++){const ee=se[Be];let le=null;if(d!==null)le=d.getViewport(ee);else{const ve=f.getViewSubImage(h,ee);le=ve.viewport,Be===0&&(e.setRenderTargetTextures(_,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(_))}let te=D[Be];te===void 0&&(te=new jt,te.layers.enable(Be),te.viewport=new _t,D[Be]=te),te.matrix.fromArray(ee.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ee.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(le.x,le.y,le.width,le.height),Be===0&&(I.matrix.copy(te.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ie===!0&&I.cameras.push(te)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const Be=f.getDepthInformation(se[0]);Be&&Be.isValid&&Be.texture&&g.init(Be,s.renderState)}if(we&&we.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Be=0;Be<se.length;Be++){const ee=se[Be].camera;if(ee){let le=p[ee];le||(le=new mh,p[ee]=le);const te=f.getCameraImage(ee);le.sourceTexture=te}}}}for(let se=0;se<L.length;se++){const ie=w[se],we=L[se];ie!==null&&we!==void 0&&we.update(ie,oe,l||a)}ce&&ce(j,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const Te=new Ph;Te.setAnimationLoop(be),this.setAnimationLoop=function(j){ce=j},this.dispose=function(){}}}const qx=new Ye,Oh=new je;Oh.set(-1,0,0,0,1,0,0,0,1);function Xx(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Eh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,x,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),M(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Kt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Kt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,_=x.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Oh),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function M(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const _=y.program;n.uniformBlockBinding(x,_)}function l(x,y){let _=s[x.id];_===void 0&&(m(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",g));const L=y.program;n.updateUBOMapping(x,L);const w=e.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const y=f();x.__bindingPointIndex=y;const _=i.createBuffer(),L=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const y=s[x.id],_=x.uniforms,L=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,F=_.length;w<F;w++){const v=Array.isArray(_[w])?_[w]:[_[w]];for(let P=0,N=v.length;P<N;P++){const D=v[P];if(d(D,w,P,L)===!0){const I=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let T=0;for(let S=0;S<G.length;S++){const C=G[S],A=M(C);typeof C=="number"||typeof C=="boolean"?(D.__data[0]=C,i.bufferSubData(i.UNIFORM_BUFFER,I+T,D.__data)):C.isMatrix3?(D.__data[0]=C.elements[0],D.__data[1]=C.elements[1],D.__data[2]=C.elements[2],D.__data[3]=0,D.__data[4]=C.elements[3],D.__data[5]=C.elements[4],D.__data[6]=C.elements[5],D.__data[7]=0,D.__data[8]=C.elements[6],D.__data[9]=C.elements[7],D.__data[10]=C.elements[8],D.__data[11]=0):ArrayBuffer.isView(C)?D.__data.set(new C.constructor(C.buffer,C.byteOffset,D.__data.length)):(C.toArray(D.__data,T),T+=A.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,y,_,L){const w=x.value,F=y+"_"+_;if(L[F]===void 0)return typeof w=="number"||typeof w=="boolean"?L[F]=w:ArrayBuffer.isView(w)?L[F]=w.slice():L[F]=w.clone(),!0;{const v=L[F];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return L[F]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(v.equals(w)===!1)return v.copy(w),!0}}return!1}function m(x){const y=x.uniforms;let _=0;const L=16;for(let F=0,v=y.length;F<v;F++){const P=Array.isArray(y[F])?y[F]:[y[F]];for(let N=0,D=P.length;N<D;N++){const I=P[N],G=Array.isArray(I.value)?I.value:[I.value];for(let T=0,S=G.length;T<S;T++){const C=G[T],A=M(C),k=_%L,V=k%A.boundary,K=k+V;_+=V,K!==0&&L-K<A.storage&&(_+=L-K),I.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=A.storage}}}const w=_%L;return w>0&&(_+=L-w),x.__size=_,x.__cache={},this}function M(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const Kx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Mn=null;function Jx(){return Mn===null&&(Mn=new wc(Kx,16,16,Pi,$n),Mn.name="DFG_LUT",Mn.minFilter=Ft,Mn.magFilter=Ft,Mn.wrapS=Rn,Mn.wrapT=Rn,Mn.generateMipmaps=!1,Mn.needsUpdate=!0),Mn}class Yx{constructor(e={}){const{canvas:t=Hf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=nn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const M=d,g=new Set([vc,_c,xc]),p=new Set([nn,In,Js,Ys,mc,gc]),x=new Uint32Array(4),y=new Int32Array(4),_=new O;let L=null,w=null;const F=[],v=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let D=!1,I=null;this._outputColorSpace=Gt;let G=0,T=0,S=null,C=-1,A=null;const k=new _t,V=new _t;let K=null;const Z=new Ge(0);let re=0,ce=t.width,be=t.height,Te=1,j=null,oe=null;const se=new _t(0,0,ce,be),ie=new _t(0,0,ce,be);let we=!1;const ke=new Rc;let tt=!1,Be=!1;const ee=new Ye,le=new O,te=new _t,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ve(){return S===null?Te:1}let U=n;function qe(E,H){return t.getContext(E,H)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",Fe,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),U===null){const H="webgl2";if(U=qe(H,E),U===null)throw qe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw ze("WebGLRenderer: "+E.message),E}let De,He,he,st,R,b,z,J,ne,ue,fe,Y,Q,Ee,Pe,xe,pe,Xe,Ze,at,B,me,$;function Ae(){De=new J0(U),De.init(),B=new zx(U,De),He=new G0(U,De,e,B),he=new kx(U,De),He.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),st=new $0(U),R=new Ex,b=new Bx(U,De,he,R,He,B,st),z=new K0(N),J=new nm(U),me=new B0(U,J),ne=new Y0(U,J,st,me),ue=new eb(U,ne,J,me,st),Xe=new Q0(U,He,b),Pe=new V0(R),fe=new Sx(N,z,De,He,me,Pe),Y=new Xx(N,R),Q=new wx,Ee=new Dx(De),pe=new k0(N,z,he,ue,m,c),xe=new Ox(N,ue,He),$=new jx(U,st,He,he),Ze=new z0(U,De,st),at=new Z0(U,De,st),st.programs=fe.programs,N.capabilities=He,N.extensions=De,N.properties=R,N.renderLists=Q,N.shadowMap=xe,N.state=he,N.info=st}Ae(),M!==nn&&(P=new nb(M,t.width,t.height,s,r));const _e=new Wx(N,U);this.xr=_e,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=De.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=De.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Te},this.setPixelRatio=function(E){E!==void 0&&(Te=E,this.setSize(ce,be,!1))},this.getSize=function(E){return E.set(ce,be)},this.setSize=function(E,H,X=!0){if(_e.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,be=H,t.width=Math.floor(E*Te),t.height=Math.floor(H*Te),X===!0&&(t.style.width=E+"px",t.style.height=H+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(ce*Te,be*Te).floor()},this.setDrawingBufferSize=function(E,H,X){ce=E,be=H,Te=X,t.width=Math.floor(E*X),t.height=Math.floor(H*X),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(M===nn){ze("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){Ne("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(k)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,H,X,W){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,H,X,W),he.viewport(k.copy(se).multiplyScalar(Te).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,H,X,W){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,H,X,W),he.scissor(V.copy(ie).multiplyScalar(Te).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){he.setScissorTest(we=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,X=!0){let W=0;if(E){let q=!1;if(S!==null){const Se=S.texture.format;q=g.has(Se)}if(q){const Se=S.texture.type,Le=p.has(Se),ye=pe.getClearColor(),Ie=pe.getClearAlpha(),Ue=ye.r,Je=ye.g,Qe=ye.b;Le?(x[0]=Ue,x[1]=Je,x[2]=Qe,x[3]=Ie,U.clearBufferuiv(U.COLOR,0,x)):(y[0]=Ue,y[1]=Je,y[2]=Qe,y[3]=Ie,U.clearBufferiv(U.COLOR,0,y))}else W|=U.COLOR_BUFFER_BIT}H&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),I=E},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",Fe,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),pe.dispose(),Q.dispose(),Ee.dispose(),R.dispose(),z.dispose(),ue.dispose(),me.dispose(),$.dispose(),fe.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Xc),_e.removeEventListener("sessionend",jc),bi.stop()};function ae(E){E.preventDefault(),ea("WebGLRenderer: Context Lost."),D=!0}function Fe(){ea("WebGLRenderer: Context Restored."),D=!1;const E=st.autoReset,H=xe.enabled,X=xe.autoUpdate,W=xe.needsUpdate,q=xe.type;Ae(),st.autoReset=E,xe.enabled=H,xe.autoUpdate=X,xe.needsUpdate=W,xe.type=q}function Ke(E){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Rt(E){const H=E.target;H.removeEventListener("dispose",Rt),dt(H)}function dt(E){kn(E),R.remove(E)}function kn(E){const H=R.get(E).programs;H!==void 0&&(H.forEach(function(X){fe.releaseProgram(X)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,X,W,q,Se){H===null&&(H=ve);const Le=q.isMesh&&q.matrixWorld.determinant()<0,ye=ef(E,H,X,W,q);he.setMaterial(W,Le);let Ie=X.index,Ue=1;if(W.wireframe===!0){if(Ie=ne.getWireframeAttribute(X),Ie===void 0)return;Ue=2}const Je=X.drawRange,Qe=X.attributes.position;let Oe=Je.start*Ue,pt=(Je.start+Je.count)*Ue;Se!==null&&(Oe=Math.max(Oe,Se.start*Ue),pt=Math.min(pt,(Se.start+Se.count)*Ue)),Ie!==null?(Oe=Math.max(Oe,0),pt=Math.min(pt,Ie.count)):Qe!=null&&(Oe=Math.max(Oe,0),pt=Math.min(pt,Qe.count));const Ct=pt-Oe;if(Ct<0||Ct===1/0)return;me.setup(q,W,ye,X,Ie);let Et,bt=Ze;if(Ie!==null&&(Et=J.get(Ie),bt=at,bt.setIndex(Et)),q.isMesh)W.wireframe===!0?(he.setLineWidth(W.wireframeLinewidth*Ve()),bt.setMode(U.LINES)):bt.setMode(U.TRIANGLES);else if(q.isLine){let Vt=W.linewidth;Vt===void 0&&(Vt=1),he.setLineWidth(Vt*Ve()),q.isLineSegments?bt.setMode(U.LINES):q.isLineLoop?bt.setMode(U.LINE_LOOP):bt.setMode(U.LINE_STRIP)}else q.isPoints?bt.setMode(U.POINTS):q.isSprite&&bt.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(De.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,Ce=q._multiDrawCounts,Yt=q._multiDrawCount,rt=Ie?J.get(Ie).bytesPerElement:1,sn=R.get(W).currentProgram.getUniforms();for(let _n=0;_n<Yt;_n++)sn.setValue(U,"_gl_DrawID",_n),bt.render(Vt[_n]/rt,Ce[_n])}else if(q.isInstancedMesh)bt.renderInstances(Oe,Ct,q.count);else if(X.isInstancedBufferGeometry){const Vt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ce=Math.min(X.instanceCount,Vt);bt.renderInstances(Oe,Ct,Ce)}else bt.render(Oe,Ct)};function xn(E,H,X){E.transparent===!0&&E.side===An&&E.forceSinglePass===!1?(E.side=Kt,E.needsUpdate=!0,or(E,H,X),E.side=Zn,E.needsUpdate=!0,or(E,H,X),E.side=An):or(E,H,X)}this.compile=function(E,H,X=null){X===null&&(X=E),w=Ee.get(X),w.init(H),v.push(w),X.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),E!==X&&E.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();const W=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const ye=Se[Le];xn(ye,X,q),W.add(ye)}else xn(Se,X,q),W.add(Se)}),w=v.pop(),W},this.compileAsync=function(E,H,X=null){const W=this.compile(E,H,X);return new Promise(q=>{function Se(){if(W.forEach(function(Le){R.get(Le).currentProgram.isReady()&&W.delete(Le)}),W.size===0){q(E);return}setTimeout(Se,10)}De.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ma=null;function $h(E){ma&&ma(E)}function Xc(){bi.stop()}function jc(){bi.start()}const bi=new Ph;bi.setAnimationLoop($h),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(E){ma=E,_e.setAnimationLoop(E),E===null?bi.stop():bi.start()},_e.addEventListener("sessionstart",Xc),_e.addEventListener("sessionend",jc),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(E,H);const X=_e.enabled===!0&&_e.isPresenting===!0,W=P!==null&&(S===null||X)&&P.begin(N,S);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(H),H=_e.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,H,S),w=Ee.get(E,v.length),w.init(H),w.state.textureUnits=b.getTextureUnits(),v.push(w),ee.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(ee,Cn,H.reversedDepth),Be=this.localClippingEnabled,tt=Pe.init(this.clippingPlanes,Be),L=Q.get(E,F.length),L.init(),F.push(L),_e.enabled===!0&&_e.isPresenting===!0){const Le=N.xr.getDepthSensingMesh();Le!==null&&ga(Le,H,-1/0,N.sortObjects)}ga(E,H,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(j,oe),ge=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,ge&&pe.addToRenderList(L,E),this.info.render.frame++,tt===!0&&Pe.beginShadows();const q=w.state.shadowsArray;if(xe.render(q,E,H),tt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const Le=L.opaque,ye=L.transmissive;if(w.setupLights(),H.isArrayCamera){const Ie=H.cameras;if(ye.length>0)for(let Ue=0,Je=Ie.length;Ue<Je;Ue++){const Qe=Ie[Ue];Jc(Le,ye,E,Qe)}ge&&pe.render(E);for(let Ue=0,Je=Ie.length;Ue<Je;Ue++){const Qe=Ie[Ue];Kc(L,E,Qe,Qe.viewport)}}else ye.length>0&&Jc(Le,ye,E,H),ge&&pe.render(E),Kc(L,E,H)}S!==null&&T===0&&(b.updateMultisampleRenderTarget(S),b.updateRenderTargetMipmap(S)),W&&P.end(N),E.isScene===!0&&E.onAfterRender(N,E,H),me.resetDefaultState(),C=-1,A=null,v.pop(),v.length>0?(w=v[v.length-1],b.setTextureUnits(w.state.textureUnits),tt===!0&&Pe.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,I!==null&&I.renderEnd()};function ga(E,H,X,W){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){W&&te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ee);const Le=ue.update(E),ye=E.material;ye.visible&&L.push(E,Le,ye,X,te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const Le=ue.update(E),ye=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),te.copy(E.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),te.copy(Le.boundingSphere.center)),te.applyMatrix4(E.matrixWorld).applyMatrix4(ee)),Array.isArray(ye)){const Ie=Le.groups;for(let Ue=0,Je=Ie.length;Ue<Je;Ue++){const Qe=Ie[Ue],Oe=ye[Qe.materialIndex];Oe&&Oe.visible&&L.push(E,Le,Oe,X,te.z,Qe)}}else ye.visible&&L.push(E,Le,ye,X,te.z,null)}}const Se=E.children;for(let Le=0,ye=Se.length;Le<ye;Le++)ga(Se[Le],H,X,W)}function Kc(E,H,X,W){const{opaque:q,transmissive:Se,transparent:Le}=E;w.setupLightsView(X),tt===!0&&Pe.setGlobalState(N.clippingPlanes,X),W&&he.viewport(k.copy(W)),q.length>0&&ar(q,H,X),Se.length>0&&ar(Se,H,X),Le.length>0&&ar(Le,H,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Jc(E,H,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[W.id]===void 0){const Oe=De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[W.id]=new Dn(1,1,{generateMipmaps:!0,type:Oe?$n:nn,minFilter:jn,samples:Math.max(4,He.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Se=w.state.transmissionRenderTarget[W.id],Le=W.viewport||k;Se.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),Ie=N.getActiveCubeFace(),Ue=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(Z),re=N.getClearAlpha(),re<1&&N.setClearColor(16777215,.5),N.clear(),ge&&pe.render(X);const Je=N.toneMapping;N.toneMapping=Ln;const Qe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),w.setupLightsView(W),tt===!0&&Pe.setGlobalState(N.clippingPlanes,W),ar(E,X,W),b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se),De.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let pt=0,Ct=H.length;pt<Ct;pt++){const Et=H[pt],{object:bt,geometry:Vt,material:Ce,group:Yt}=Et;if(Ce.side===An&&bt.layers.test(W.layers)){const rt=Ce.side;Ce.side=Kt,Ce.needsUpdate=!0,Yc(bt,X,W,Vt,Ce,Yt),Ce.side=rt,Ce.needsUpdate=!0,Oe=!0}}Oe===!0&&(b.updateMultisampleRenderTarget(Se),b.updateRenderTargetMipmap(Se))}N.setRenderTarget(ye,Ie,Ue),N.setClearColor(Z,re),Qe!==void 0&&(W.viewport=Qe),N.toneMapping=Je}function ar(E,H,X){const W=H.isScene===!0?H.overrideMaterial:null;for(let q=0,Se=E.length;q<Se;q++){const Le=E[q],{object:ye,geometry:Ie,group:Ue}=Le;let Je=Le.material;Je.allowOverride===!0&&W!==null&&(Je=W),ye.layers.test(X.layers)&&Yc(ye,H,X,Ie,Je,Ue)}}function Yc(E,H,X,W,q,Se){E.onBeforeRender(N,H,X,W,q,Se),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(N,H,X,W,E,Se),q.transparent===!0&&q.side===An&&q.forceSinglePass===!1?(q.side=Kt,q.needsUpdate=!0,N.renderBufferDirect(X,H,W,q,E,Se),q.side=Zn,q.needsUpdate=!0,N.renderBufferDirect(X,H,W,q,E,Se),q.side=An):N.renderBufferDirect(X,H,W,q,E,Se),E.onAfterRender(N,H,X,W,q,Se)}function or(E,H,X){H.isScene!==!0&&(H=ve);const W=R.get(E),q=w.state.lights,Se=w.state.shadowsArray,Le=q.state.version,ye=fe.getParameters(E,q.state,Se,H,X,w.state.lightProbeGridArray),Ie=fe.getProgramCacheKey(ye);let Ue=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,W.fog=H.fog;const Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=z.get(E.envMap||W.environment,Je),W.envMapRotation=W.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",Rt),Ue=new Map,W.programs=Ue);let Qe=Ue.get(Ie);if(Qe!==void 0){if(W.currentProgram===Qe&&W.lightsStateVersion===Le)return $c(E,ye),Qe}else ye.uniforms=fe.getUniforms(E),I!==null&&E.isNodeMaterial&&I.build(E,X,ye),E.onBeforeCompile(ye,N),Qe=fe.acquireProgram(ye,Ie),Ue.set(Ie,Qe),W.uniforms=ye.uniforms;const Oe=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=Pe.uniform),$c(E,ye),W.needsLights=nf(E),W.lightsStateVersion=Le,W.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),W.lightProbeGrid=w.state.lightProbeGridArray.length>0,W.currentProgram=Qe,W.uniformsList=null,Qe}function Zc(E){if(E.uniformsList===null){const H=E.currentProgram.getUniforms();E.uniformsList=Kr.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function $c(E,H){const X=R.get(E);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.batchingColor=H.batchingColor,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function Qh(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let X=0,W=E.length;X<W;X++){const q=E[X];if(q.texture!==null&&q.boundingBox.containsPoint(_))return q}return null}function ef(E,H,X,W,q){H.isScene!==!0&&(H=ve),b.resetTextureUnits();const Se=H.fog,Le=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?H.environment:null,ye=S===null?N.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:nt.workingColorSpace,Ie=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=z.get(W.envMap||Le,Ie),Je=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Qe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!X.morphAttributes.position,pt=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let Et=Ln;W.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Et=N.toneMapping);const bt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Vt=bt!==void 0?bt.length:0,Ce=R.get(W),Yt=w.state.lights;if(tt===!0&&(Be===!0||E!==A)){const Mt=E===A&&W.id===C;Pe.setState(W,E,Mt)}let rt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Yt.state.version||Ce.outputColorSpace!==ye||q.isBatchedMesh&&Ce.batching===!1||!q.isBatchedMesh&&Ce.batching===!0||q.isBatchedMesh&&Ce.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ce.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ce.instancing===!1||!q.isInstancedMesh&&Ce.instancing===!0||q.isSkinnedMesh&&Ce.skinning===!1||!q.isSkinnedMesh&&Ce.skinning===!0||q.isInstancedMesh&&Ce.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ce.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ce.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ce.instancingMorph===!1&&q.morphTexture!==null||Ce.envMap!==Ue||W.fog===!0&&Ce.fog!==Se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Pe.numPlanes||Ce.numIntersection!==Pe.numIntersection)||Ce.vertexAlphas!==Je||Ce.vertexTangents!==Qe||Ce.morphTargets!==Oe||Ce.morphNormals!==pt||Ce.morphColors!==Ct||Ce.toneMapping!==Et||Ce.morphTargetsCount!==Vt||!!Ce.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ce.__version=W.version);let sn=Ce.currentProgram;rt===!0&&(sn=or(W,H,q),I&&W.isNodeMaterial&&I.onUpdateProgram(W,sn,Ce));let _n=!1,ni=!1,Ii=!1;const xt=sn.getUniforms(),Pt=Ce.uniforms;if(he.useProgram(sn.program)&&(_n=!0,ni=!0,Ii=!0),W.id!==C&&(C=W.id,ni=!0),Ce.needsLights){const Mt=Qh(w.state.lightProbeGridArray,q);Ce.lightProbeGrid!==Mt&&(Ce.lightProbeGrid=Mt,ni=!0)}if(_n||A!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",E.projectionMatrix),xt.setValue(U,"viewMatrix",E.matrixWorldInverse);const si=xt.map.cameraPosition;si!==void 0&&si.setValue(U,le.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&xt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,ni=!0,Ii=!0)}if(Ce.needsLights&&(Yt.state.directionalShadowMap.length>0&&xt.setValue(U,"directionalShadowMap",Yt.state.directionalShadowMap,b),Yt.state.spotShadowMap.length>0&&xt.setValue(U,"spotShadowMap",Yt.state.spotShadowMap,b),Yt.state.pointShadowMap.length>0&&xt.setValue(U,"pointShadowMap",Yt.state.pointShadowMap,b)),q.isSkinnedMesh){xt.setOptional(U,q,"bindMatrix"),xt.setOptional(U,q,"bindMatrixInverse");const Mt=q.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(U,"boneTexture",Mt.boneTexture,b))}q.isBatchedMesh&&(xt.setOptional(U,q,"batchingTexture"),xt.setValue(U,"batchingTexture",q._matricesTexture,b),xt.setOptional(U,q,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",q._indirectTexture,b),xt.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",q._colorsTexture,b));const ii=X.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Xe.update(q,X,sn),(ni||Ce.receiveShadow!==q.receiveShadow)&&(Ce.receiveShadow=q.receiveShadow,xt.setValue(U,"receiveShadow",q.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&H.environment!==null&&(Pt.envMapIntensity.value=H.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Jx()),ni){if(xt.setValue(U,"toneMappingExposure",N.toneMappingExposure),Ce.needsLights&&tf(Pt,Ii),Se&&W.fog===!0&&Y.refreshFogUniforms(Pt,Se),Y.refreshMaterialUniforms(Pt,W,Te,be,w.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){const Mt=Ce.lightProbeGrid;Pt.probesSH.value=Mt.texture,Pt.probesMin.value.copy(Mt.boundingBox.min),Pt.probesMax.value.copy(Mt.boundingBox.max),Pt.probesResolution.value.copy(Mt.resolution)}Kr.upload(U,Zc(Ce),Pt,b)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Kr.upload(U,Zc(Ce),Pt,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&xt.setValue(U,"center",q.center),xt.setValue(U,"modelViewMatrix",q.modelViewMatrix),xt.setValue(U,"normalMatrix",q.normalMatrix),xt.setValue(U,"modelMatrix",q.matrixWorld),W.uniformsGroups!==void 0){const Mt=W.uniformsGroups;for(let si=0,Ni=Mt.length;si<Ni;si++){const Qc=Mt[si];$.update(Qc,sn),$.bind(Qc,sn)}}return sn}function tf(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function nf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,H,X){const W=R.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),R.get(E.texture).__webglTexture=H,R.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){const X=R.get(E);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0};const sf=U.createFramebuffer();this.setRenderTarget=function(E,H=0,X=0){S=E,G=H,T=X;let W=null,q=!1,Se=!1;if(E){const ye=R.get(E);if(ye.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,ye.__webglFramebuffer),k.copy(E.viewport),V.copy(E.scissor),K=E.scissorTest,he.viewport(k),he.scissor(V),he.setScissorTest(K),C=-1;return}else if(ye.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(ye.__hasExternalTextures)b.rebindTextures(E,R.get(E.texture).__webglTexture,R.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Je=E.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&R.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Se=!0);const Ue=R.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?W=Ue[H][X]:W=Ue[H],q=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?W=R.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[X]:W=Ue,k.copy(E.viewport),V.copy(E.scissor),K=E.scissorTest}else k.copy(se).multiplyScalar(Te).floor(),V.copy(ie).multiplyScalar(Te).floor(),K=we;if(X!==0&&(W=sf),he.bindFramebuffer(U.FRAMEBUFFER,W)&&he.drawBuffers(E,W),he.viewport(k),he.scissor(V),he.setScissorTest(K),q){const ye=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,ye.__webglTexture,X)}else if(Se){const ye=H;for(let Ie=0;Ie<E.textures.length;Ie++){const Ue=R.get(E.textures[Ie]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ie,Ue.__webglTexture,X,ye)}}else if(E!==null&&X!==0){const ye=R.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,X)}C=-1},this.readRenderTargetPixels=function(E,H,X,W,q,Se,Le,ye=0){if(!(E&&E.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie){he.bindFramebuffer(U.FRAMEBUFFER,Ie);try{const Ue=E.textures[ye],Je=Ue.format,Qe=Ue.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!He.textureFormatReadable(Je)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Qe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-W&&X>=0&&X<=E.height-q&&U.readPixels(H,X,W,q,B.convert(Je),B.convert(Qe),Se)}finally{const Ue=S!==null?R.get(S).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,H,X,W,q,Se,Le,ye=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=R.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Le!==void 0&&(Ie=Ie[Le]),Ie)if(H>=0&&H<=E.width-W&&X>=0&&X<=E.height-q){he.bindFramebuffer(U.FRAMEBUFFER,Ie);const Ue=E.textures[ye],Je=Ue.format,Qe=Ue.type;if(E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+ye),!He.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(H,X,W,q,B.convert(Je),B.convert(Qe),0);const pt=S!==null?R.get(S).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,pt);const Ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wf(U,Ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Oe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.deleteBuffer(Oe),U.deleteSync(Ct),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,X=0){const W=Math.pow(2,-X),q=Math.floor(E.image.width*W),Se=Math.floor(E.image.height*W),Le=H!==null?H.x:0,ye=H!==null?H.y:0;b.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Le,ye,q,Se),he.unbindTexture()};const rf=U.createFramebuffer(),af=U.createFramebuffer();this.copyTextureToTexture=function(E,H,X=null,W=null,q=0,Se=0){let Le,ye,Ie,Ue,Je,Qe,Oe,pt,Ct;const Et=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(X!==null)Le=X.max.x-X.min.x,ye=X.max.y-X.min.y,Ie=X.isBox3?X.max.z-X.min.z:1,Ue=X.min.x,Je=X.min.y,Qe=X.isBox3?X.min.z:0;else{const Pt=Math.pow(2,-q);Le=Math.floor(Et.width*Pt),ye=Math.floor(Et.height*Pt),E.isDataArrayTexture?Ie=Et.depth:E.isData3DTexture?Ie=Math.floor(Et.depth*Pt):Ie=1,Ue=0,Je=0,Qe=0}W!==null?(Oe=W.x,pt=W.y,Ct=W.z):(Oe=0,pt=0,Ct=0);const bt=B.convert(H.format),Vt=B.convert(H.type);let Ce;H.isData3DTexture?(b.setTexture3D(H,0),Ce=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(b.setTexture2DArray(H,0),Ce=U.TEXTURE_2D_ARRAY):(b.setTexture2D(H,0),Ce=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Yt=he.getParameter(U.UNPACK_ROW_LENGTH),rt=he.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=he.getParameter(U.UNPACK_SKIP_PIXELS),_n=he.getParameter(U.UNPACK_SKIP_ROWS),ni=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,Et.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Et.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ue),he.pixelStorei(U.UNPACK_SKIP_ROWS,Je),he.pixelStorei(U.UNPACK_SKIP_IMAGES,Qe);const Ii=E.isDataArrayTexture||E.isData3DTexture,xt=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){const Pt=R.get(E),ii=R.get(H),Mt=R.get(Pt.__renderTarget),si=R.get(ii.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,Mt.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Ni=0;Ni<Ie;Ni++)Ii&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(E).__webglTexture,q,Qe+Ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,R.get(H).__webglTexture,Se,Ct+Ni)),U.blitFramebuffer(Ue,Je,Le,ye,Oe,pt,Le,ye,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||R.has(E)){const Pt=R.get(E),ii=R.get(H);he.bindFramebuffer(U.READ_FRAMEBUFFER,rf),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,af);for(let Mt=0;Mt<Ie;Mt++)Ii?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,q,Qe+Mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,q),xt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ii.__webglTexture,Se,Ct+Mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ii.__webglTexture,Se),q!==0?U.blitFramebuffer(Ue,Je,Le,ye,Oe,pt,Le,ye,U.COLOR_BUFFER_BIT,U.NEAREST):xt?U.copyTexSubImage3D(Ce,Se,Oe,pt,Ct+Mt,Ue,Je,Le,ye):U.copyTexSubImage2D(Ce,Se,Oe,pt,Ue,Je,Le,ye);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else xt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ce,Se,Oe,pt,Ct,Le,ye,Ie,bt,Vt,Et.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,Se,Oe,pt,Ct,Le,ye,Ie,bt,Et.data):U.texSubImage3D(Ce,Se,Oe,pt,Ct,Le,ye,Ie,bt,Vt,Et):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Oe,pt,Le,ye,bt,Vt,Et.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Oe,pt,Et.width,Et.height,bt,Et.data):U.texSubImage2D(U.TEXTURE_2D,Se,Oe,pt,Le,ye,bt,Vt,Et);he.pixelStorei(U.UNPACK_ROW_LENGTH,Yt),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,rt),he.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),he.pixelStorei(U.UNPACK_SKIP_ROWS,_n),he.pixelStorei(U.UNPACK_SKIP_IMAGES,ni),Se===0&&H.generateMipmaps&&U.generateMipmap(Ce),he.unbindTexture()},this.initRenderTarget=function(E){R.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){G=0,T=0,S=null,he.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}const ft=(function(){const i="kuromiRun.sound";let e=null,t=null,n=null,s=null,r=localStorage.getItem(i)!=="off",a=null,o=0,c=0,l=null;function u(){const I=window.AudioContext||window.webkitAudioContext;return I?(e||(e=new I,t=e.createGain(),t.gain.value=r?1:0,t.connect(e.destination),n=e.createGain(),n.gain.value=.14,n.connect(t),s=e.createGain(),s.gain.value=.5,s.connect(t)),e.state==="suspended"&&e.resume(),!0):!1}function f(I){return 440*Math.pow(2,(I-69)/12)}function h(I,G,T,S,C,A){if(!e)return;const k=e.createOscillator(),V=e.createGain();k.type=S,k.frequency.value=f(G),V.gain.setValueAtTime(1e-4,I),V.gain.linearRampToValueAtTime(A,I+.02),V.gain.exponentialRampToValueAtTime(1e-4,I+T),k.connect(V),V.connect(C),k.start(I),k.stop(I+T+.06)}const d={candy:{tempo:108,wave:"triangle",steps:[[72,48],[76,null],[79,55],[76,null],[81,48],[79,null],[76,55],[72,null],[74,50],[77,null],[81,57],[77,null],[79,55],[null,null],[76,55],[null,null],[72,48],[76,null],[79,55],[76,null],[81,45],[79,null],[83,52],[84,null],[79,53],[76,null],[74,55],[76,null],[72,48],[null,null],[null,55],[null,null]]},city:{tempo:92,wave:"sine",steps:[[69,45],[null,null],[72,null],[null,null],[76,52],[null,null],[74,null],[72,null],[67,43],[null,null],[71,null],[null,null],[74,50],[null,null],[72,null],[null,null],[69,41],[null,null],[72,null],[null,null],[77,53],[null,null],[76,null],[74,null],[76,40],[null,null],[71,null],[74,null],[69,45],[null,null],[null,null],[null,null]]},stars:{tempo:124,wave:"triangle",steps:[[74,50],[78,null],[81,null],[86,null],[83,57],[81,null],[78,null],[81,null],[74,47],[78,null],[81,null],[86,null],[88,55],[86,null],[83,null],[81,null],[74,50],[78,null],[81,null],[86,null],[83,57],[81,null],[78,null],[74,null],[76,45],[81,null],[78,null],[74,null],[73,49],[74,null],[null,null],[null,null]]},space:{tempo:100,wave:"sine",steps:[[69,45],[null,null],[76,null],[81,null],[80,52],[null,null],[76,null],[72,null],[69,41],[null,null],[77,null],[81,null],[79,50],[null,null],[74,null],[71,null],[69,45],[null,null],[76,null],[81,null],[84,52],[null,null],[81,null],[77,null],[83,40],[null,null],[79,null],[76,null],[74,52],[72,null],[null,45],[null,null]]}};function m(){if(!(!e||!l))for(;o<e.currentTime+.25;){const I=l,G=30/I.tempo,T=I.steps[c%I.steps.length];T[0]!=null&&h(o,T[0],G*1.9,I.wave,n,.5),T[1]!=null&&h(o,T[1],G*2.6,"sine",n,.45),o+=G,c++}}function M(I){u()&&(g(),l=d[I],l&&(c=0,o=e.currentTime+.12,a=setInterval(m,90)))}function g(){a&&(clearInterval(a),a=null),l=null}function p(){if(!u())return;const I=e.currentTime;h(I,88,.12,"sine",s,.5),h(I+.06,93,.18,"sine",s,.4)}function x(){if(!u())return;const I=e.currentTime;[81,86,90,93].forEach((G,T)=>h(I+T*.055,G,.2,"triangle",s,.45))}function y(){if(!u())return;const I=e.currentTime,G=e.createOscillator(),T=e.createGain();G.type="sine",G.frequency.setValueAtTime(220,I),G.frequency.exponentialRampToValueAtTime(560,I+.16),T.gain.setValueAtTime(1e-4,I),T.gain.linearRampToValueAtTime(.4,I+.02),T.gain.exponentialRampToValueAtTime(1e-4,I+.22),G.connect(T),T.connect(s),G.start(I),G.stop(I+.26)}function _(){if(!u())return;const I=e.currentTime,G=.14,T=e.createBuffer(1,e.sampleRate*G,e.sampleRate),S=T.getChannelData(0);for(let V=0;V<S.length;V++)S[V]=(Math.random()*2-1)*(1-V/S.length);const C=e.createBufferSource();C.buffer=T;const A=e.createBiquadFilter();A.type="bandpass",A.frequency.value=1400,A.Q.value=.8;const k=e.createGain();k.gain.value=.16,C.connect(A),A.connect(k),k.connect(s),C.start(I)}function L(){if(!u())return;const I=e.currentTime,G=e.createOscillator(),T=e.createGain();G.type="triangle",G.frequency.setValueAtTime(150,I),G.frequency.exponentialRampToValueAtTime(62,I+.22),T.gain.setValueAtTime(1e-4,I),T.gain.linearRampToValueAtTime(.55,I+.015),T.gain.exponentialRampToValueAtTime(1e-4,I+.3),G.connect(T),T.connect(s),G.start(I),G.stop(I+.34)}function w(){if(!u())return;const I=e.currentTime,G=1.1,T=e.createBuffer(1,e.sampleRate*G,e.sampleRate),S=T.getChannelData(0);for(let Z=0;Z<S.length;Z++)S[Z]=(Math.random()*2-1)*Math.pow(1-Z/S.length,1.6);const C=e.createBufferSource();C.buffer=T;const A=e.createBiquadFilter();A.type="lowpass",A.frequency.setValueAtTime(900,I),A.frequency.exponentialRampToValueAtTime(120,I+G);const k=e.createGain();k.gain.value=.7,C.connect(A),A.connect(k),k.connect(s),C.start(I);const V=e.createOscillator(),K=e.createGain();V.type="sine",V.frequency.setValueAtTime(130,I),V.frequency.exponentialRampToValueAtTime(28,I+1),K.gain.setValueAtTime(1e-4,I),K.gain.linearRampToValueAtTime(.6,I+.04),K.gain.exponentialRampToValueAtTime(1e-4,I+1.1),V.connect(K),K.connect(s),V.start(I),V.stop(I+1.2)}function F(I){u()&&h(e.currentTime,I?84:72,I?.4:.15,"triangle",s,.45)}function v(){if(!u())return;const I=e.currentTime;[[72,0],[76,.14],[79,.28],[84,.42],[79,.62],[84,.76]].forEach(([T,S])=>{h(I+S,T,.32,"triangle",s,.45),h(I+S,T-12,.32,"sine",s,.3)}),h(I+1,84,.8,"triangle",s,.4),h(I+1,76,.8,"sine",s,.3)}function P(I){u()&&h(e.currentTime,79+I*5,.3,"triangle",s,.5)}function N(I){r=I,localStorage.setItem(i,I?"on":"off"),e&&t&&(t.gain.cancelScheduledValues(e.currentTime),t.gain.linearRampToValueAtTime(I?1:0,e.currentTime+.15))}function D(){return r}return{tap:u,ding:p,dingBig:x,boing:y,swish:_,thud:L,boom:w,fanfare:v,starPop:P,countTick:F,startMusic:M,stopMusic:g,setEnabled:N,isEnabled:D}})();function Zx(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new At;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const f=[];for(let h=0;h<i.length;++h){const d=i[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(const u in r){const f=Au(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<a[u].length;++M)d.push(a[u][M][h]);const m=Au(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Au(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const a=new e(r),o=new Ot(a,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<t;m++){const M=u.getComponent(h,m);o.setComponent(h+f,m,M)}}else a.set(u.array,c);c+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function Ru(i,e){if(e===Df)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===jo||e===nh){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===jo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const ra=(function(){const i=[2.2,0,-2.2],e=7.4,t=Math.PI;function n(T,S,C){const A=document.createElement("canvas");A.width=T,A.height=S,C(A.getContext("2d"),T,S);const k=new ph(A);return k.anisotropy=2,k}function s(T){return n(2,256,S=>{const C=S.createLinearGradient(0,0,0,256);T.forEach((A,k)=>C.addColorStop(k/(T.length-1),A)),S.fillStyle=C,S.fillRect(0,0,2,256)})}function r(T,S){const C=n(64,64,A=>{A.fillStyle=T,A.fillRect(0,0,64,64),A.fillStyle=S;for(let k=-2;k<6;k++)A.save(),A.translate(k*16,0),A.rotate(.6),A.fillRect(0,-20,8,110),A.restore()});return C.wrapS=C.wrapT=Ci,C}function a(){return n(64,128,T=>{T.fillStyle="#000",T.fillRect(0,0,64,128);for(let S=8;S<120;S+=14)for(let C=6;C<60;C+=12)Math.random()<.55&&(T.fillStyle=Math.random()<.7?"#ffd9a0":"#ffaed0",T.fillRect(C,S,6,8))})}function o(T,S,C){return n(512,128,A=>{A.fillStyle=S,A.beginPath(),A.roundRect(4,4,504,120,28),A.fill(),A.fillStyle=C,A.font='700 74px ui-rounded, "Comic Sans MS", "Segoe UI", sans-serif',A.textAlign="center",A.textBaseline="middle",A.fillText(T,256,70)})}function c(T){return n(64,64,S=>{S.fillStyle="#fffaf2",S.beginPath(),S.arc(32,32,30,0,7),S.fill(),S.strokeStyle=T,S.lineWidth=9,S.lineCap="round",S.lineJoin="round",S.beginPath(),S.moveTo(32,14),S.lineTo(32,46),S.moveTo(18,34),S.lineTo(32,48),S.lineTo(46,34),S.stroke()})}function l(){return n(128,128,T=>{T.fillStyle="#fff3c4",T.beginPath(),T.arc(64,64,52,0,7),T.fill(),T.globalCompositeOperation="destination-out",T.beginPath(),T.arc(88,48,46,0,7),T.fill()})}function u(T,S){return n(128,128,C=>{const A=C.createRadialGradient(64,64,4,64,64,62);A.addColorStop(0,T),A.addColorStop(.45,S),A.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=A,C.fillRect(0,0,128,128)})}function f(T){return n(256,256,S=>{const k=S.createRadialGradient(128,128,2,128,128,36);k.addColorStop(0,"#fff8e8"),k.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=k,S.fillRect(0,0,256,256);for(let V=0;V<2;V++)for(let K=0;K<130;K++){const Z=K/130,re=V*Math.PI+Z*3.6,ce=12+Z*105,be=128+Math.cos(re)*ce+(Math.random()-.5)*14,Te=128+Math.sin(re)*ce*.62+(Math.random()-.5)*14;S.fillStyle=Math.random()<.65?T:"#fff3df",S.globalAlpha=(1-Z)*.9,S.beginPath(),S.arc(be,Te,1.1+Math.random()*1.8,0,7),S.fill()}S.globalAlpha=1})}const h=new vt;function d(T,S,C,A){const k=new Zo(S,C,A.length);return A.forEach((V,K)=>{h.position.set(V.p[0],V.p[1],V.p[2]);const Z=V.r||[0,0,0];h.rotation.set(Z[0],Z[1],Z[2]);const re=V.s==null?1:V.s;Array.isArray(re)?h.scale.set(re[0],re[1],re[2]):h.scale.set(re,re,re),h.updateMatrix(),k.setMatrixAt(K,h.matrix),V.c&&k.setColorAt(K,new Ge(V.c))}),k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.frustumCulled=!1,T.add(k),k}function m(T,S){return new Sn(Object.assign({color:T},S||{}))}function M(T){T.traverse(S=>{S.updateMatrix(),S.matrixAutoUpdate=!1})}function g(T,S,C){const A=new la;for(let V=0;V<10;V++){const K=V*Math.PI/5-Math.PI/2,Z=V%2===0?T:S,re=Math.cos(K)*Z,ce=Math.sin(K)*Z;V===0?A.moveTo(re,ce):A.lineTo(re,ce)}A.closePath();const k=new rr(A,{depth:C,bevelEnabled:!1});return k.translate(0,0,-C/2),k}const p=[{key:"candy",name:"Конфетная долина",sub:"медленная · 1 минута",diff:0,length:740,baseSpeed:11.5,maxSpeed:14.5,music:"candy",grad:"linear-gradient(160deg,#ffd9ec,#ffeef7 55%,#fff3df)"},{key:"city",name:"Ночной город Куроми",sub:"средняя · 1,5 минуты",diff:1,length:1380,baseSpeed:13.5,maxSpeed:17,music:"city",grad:"linear-gradient(160deg,#43306b,#7a4f9e 60%,#b86fae)"},{key:"stars",name:"Звёздное небо",sub:"быстрая · 2 минуты",diff:2,length:2120,baseSpeed:15.5,maxSpeed:19.5,music:"stars",grad:"linear-gradient(160deg,#241a4d,#4a3585 60%,#8a63c2)"},{key:"space",name:"Куроми в космосе",sub:"космическая · 2,5 минуты",diff:3,length:2600,baseSpeed:16.5,maxSpeed:21,music:"space",grad:"linear-gradient(160deg,#0b0820,#1c1145 55%,#41217a)"}];function x(T){return Math.floor(Math.random()*T)}function y(T){return[0,1,2].filter(S=>S!==T)}function _(T,S,C,A,k,V){for(let K=0;K<A;K++)T.push({z:C+K*k,lane:S,y:V||.55,kind:"candy"})}function L(T,S,C,A){[.55,1.1,1.5,1.65,1.5,1.1,.55].forEach((V,K)=>{const Z=K===3&&A;T.push({z:C-6+K*2,lane:S,y:Z?1.7:V,kind:Z?"skull":"candy"})})}const w=[function(){const S=[],C=x(3);return _(S,C,2,7,3),{len:24,items:S}},function(){const S=[],C=x(3),A=y(C)[x(2)];return _(S,C,2,3,2.6),_(S,A,12,3,2.6),_(S,C,22,3,2.6),{len:32,items:S}},function(){const S=[],C=x(3),A=y(C)[x(2)];return S.push({z:9,lane:C,kind:"low"}),L(S,C,9,!1),_(S,A,3,5,3),{len:20,items:S}},function(){const S=[],C=x(3);return L(S,C,8,!0),{len:18,items:S}},function(){const S=[];return S.push({z:9,lane:-1,kind:"bar"}),[0,1,2].forEach(C=>_(S,C,5,4,2.6,.45)),{len:20,items:S}},function(){const S=[],C=x(3);return y(C).forEach(k=>S.push({z:9,lane:k,kind:"block"})),_(S,C,2,6,2.8),S.push({z:20,lane:C,y:.7,kind:"skull"}),{len:26,items:S}},function(){const S=[],C=x(3),A=y(C)[x(2)];return S.push({z:7,lane:C,kind:"low"}),S.push({z:17,lane:A,kind:"low"}),L(S,C,7,!1),L(S,A,17,!1),{len:26,items:S}},function(){const S=[],C=x(3),A=y(C)[x(2)];S.push({z:7,lane:C,kind:"block"}),S.push({z:19,lane:A,kind:"block"});const k=y(C)[0]===A?y(C)[1]:y(C)[0];return _(S,k,3,4,2.6),_(S,y(A)[x(2)],15,4,2.6),{len:28,items:S}}],F=[[0,0,1,2,2,3,4,5,6],[0,1,2,2,3,4,4,5,6,6,7],[0,1,2,3,4,4,5,5,6,7,7],[0,1,2,3,3,4,4,5,5,6,6,7,7]];function v(T){const S=[],C=[11,9,8,7.5][T.diff];let A=50;const k=F[T.diff];for(;A<T.length-70;){const V=w[k[x(k.length)]]();V.items.forEach(K=>S.push(Object.assign({},K,{z:K.z+A}))),A+=V.len+C}return _(S,1,T.length-55,8,3),S.sort((V,K)=>V.z-K.z),S}const P={candy:{sky:["#ffc9e4","#ffe1f0","#fff4e2"],fog:[16765670,30,110],road:16774114,dash:16765414,shoulder:16758746,ground:16769263,hemi:[16774392,16761052,1],sun:.55,candyColor:16748487,arch:[16748487,16774114],buildDecor(T,S){const C=[16752590,12159712,16773304,10479832,16761512],A=[],k=[],V=[],K=[],Z=[];for(let ce=10;ce<S+40;ce+=9)[-1,1].forEach(be=>{const Te=be*(5.2+ce*7%30/10),j=1.6+ce*13%20/10;A.push({p:[Te,j/2,ce+be*2],s:[1,j,1]}),k.push({p:[Te,j+.45,ce+be*2],r:[0,0,0],s:1+ce%3*.18,c:C[(ce/9|0)%C.length]})});for(let ce=6;ce<S+40;ce+=2.1)[-1,1].forEach(be=>{V.push({p:[be*4.4,.34,ce],c:13208154}),K.push({p:[be*4.4,.74,ce]})});for(let ce=30;ce<S+60;ce+=55)[-1,1].forEach(be=>{Z.push({p:[be*(16+ce%12),-2,ce],s:[9+ce%6,7,9],c:C[(ce/55|0+(be+1))%C.length]})});d(T,new Qt(.07,.07,1,6),m(16775922),A);const re=new Lt(.45,14,12);return re.scale(1,1,.35),d(T,re,m(16777215),k),d(T,new Tt(.5,.7,.16),m(16777215),V),d(T,new Lt(.13,8,6),m(16775922),K),d(T,new Lt(1,14,12),m(16777215),Z),null},low(){const T=new ct,S=new Re(new Tt(1.6,.5,.24),m(13208154));S.position.y=.42,T.add(S);const C=new Re(new Tt(1.66,.12,.3),m(16775922));C.position.y=.7,T.add(C);for(let A=-1;A<=1;A++){const k=new Re(new Lt(.07,8,6),m(16748487));k.position.set(A*.5,.46,-.14),T.add(k)}return T},bar(T){const S=new ct,C=r("#fffaf2","#ff7eb6");[-1,1].forEach(V=>{const K=new Re(new Qt(.12,.12,2.1,10),new Sn({map:C}));K.position.set(V*3.5,1.05,0),S.add(K);const Z=new Re(new Lt(.2,10,8),m(16748487));Z.position.set(V*3.5,2.2,0),S.add(Z)});const A=new Re(new Qt(.13,.13,7.2,10),new Sn({map:C}));A.rotation.z=Math.PI/2,A.position.y=1.45,S.add(A);const k=new Re(new Tn(.7,.7),new mt({map:T,transparent:!0}));return k.position.set(0,1.95,-.05),k.rotation.y=Math.PI,S.add(k),S},block(){const T=new ct,S=new Re(new Tt(1.5,1.05,.9),m(16752590));S.position.y=.55,T.add(S);const C=new Re(new Tt(1.54,1.08,.24),m(16774111));C.position.y=.55,T.add(C);const A=new Re(new Tt(.24,1.08,.94),m(16774111));A.position.y=.55,T.add(A);const k=new Re(new Qt(.07,.07,1.1,6),m(16775922));k.position.y=1.5,T.add(k);const V=new Lt(.55,14,12);V.scale(1,1,.35);const K=new Re(V,m(12159712));return K.position.y=2.15,T.add(K),T}},city:{sky:["#2e2052","#5d3f8c","#b86fae"],fog:[5586816,24,95],road:4864616,dash:9072564,shoulder:3812694,ground:3484242,hemi:[13481452,3022930,.85],sun:.35,candyColor:16748487,arch:[10181072,16767392],buildDecor(T,S){const C=[3615055,4535137,2892356,5324402],A=[],k=[],V=[];for(let Z=0;Z<S+60;Z+=10)[-1,1].forEach(re=>{const ce=4+Z*7%40/10,be=7+Z*13%90/10,Te=5;A.push({p:[re*(8.5+Z*3%50/10),be/2-.1,Z+re*3],s:[ce,be,Te],c:C[(Z/10|0)%C.length]}),(Z/10|0)%3===0&&A.push({p:[re*(15+Z*9%60/10),be/2+2,Z],s:[ce*1.2,be+4,Te],c:C[(Z/10|2)%C.length]})});for(let Z=8;Z<S+40;Z+=14)[-1,1].forEach(re=>{k.push({p:[re*4.3,1.25,Z],c:2366008}),V.push({p:[re*4.3,2.55,Z]})});const K=new Sn({color:16777215,emissive:16762762,emissiveMap:a(),emissiveIntensity:.9});return d(T,new Tt(1,1,1),K,A),d(T,new Qt(.06,.09,2.5,6),m(16777215),k),d(T,new Lt(.16,10,8),new mt({color:16769712}),V),null},low(){const T=new ct;[-1,1].forEach(C=>{const A=new Re(new Tt(.12,.6,.12),m(2366008));A.position.set(C*.7,.3,0),T.add(A)});const S=new Re(new Tt(1.7,.34,.16),new Sn({map:r("#ffce6b","#6a4d96")}));return S.position.y=.58,T.add(S),T},bar(T){const S=new ct;[-1,1].forEach(k=>{const V=new Re(new Qt(.1,.13,2.2,8),m(2366008));V.position.set(k*3.5,1.1,0),S.add(V)});const C=new Re(new Tt(7.2,.5,.14),m(6966678));C.position.y=1.55,S.add(C);for(let k=-3;k<=3;k++){const V=new Re(new Lt(.07,8,6),new mt({color:k%2?16769712:16752590}));V.position.set(k*1,1.24,0),S.add(V)}const A=new Re(new Tn(.66,.66),new mt({map:T,transparent:!0}));return A.position.set(0,1.56,-.09),A.rotation.y=Math.PI,S.add(A),S},block(){const T=new ct,S=new Re(new Tt(1.5,1.2,.9),m(5324402));S.position.y=.6,T.add(S);const C=new Re(new Tt(1.2,.9,.8),m(6966678));C.position.y=1.65,T.add(C);const A=new Re(new Lt(.14,10,8),new mt({color:16769712}));return A.position.y=2.25,T.add(A),T}},stars:{sky:["#191040","#352368","#7a55b0"],fog:[4534400,35,150],road:13286640,dash:15788287,shoulder:11772902,ground:null,hemi:[14207231,2366029,.95],sun:.4,candyColor:16757718,arch:[16767334,13286640],buildDecor(T,S){const C=[];for(let ce=0;ce<S+50;ce+=5.5)[-1,1].forEach(be=>{const Te=ce*7%10/10;C.push({p:[be*(4.2+Te*1.4),-.45-Te*.4,ce+be*1.5],s:[1.3+Te,.8,1.6]}),(ce/5.5|0)%4===0&&C.push({p:[be*(9+Te*6),-2-Te*2,ce],s:[2.6,1.4,3]})});d(T,new Lt(1,12,10),m(16051967,{emissive:4863365,emissiveIntensity:.25}),C);const A=new ct,k=700,V=new Float32Array(k*3);for(let ce=0;ce<k;ce++)V[ce*3]=(Math.random()-.5)*320,V[ce*3+1]=4+Math.random()*110,V[ce*3+2]=40+Math.random()*260;const K=new At;K.setAttribute("position",new Ot(V,3));const Z=new Qo(K,new ia({color:16774880,size:1.1,sizeAttenuation:!0,fog:!1}));A.add(Z);const re=new fi(new qn({map:l(),fog:!1,transparent:!0}));return re.scale.set(26,26,1),re.position.set(-55,62,200),A.add(re),T.add(A),A},low(){const T=new ct;return[[-.5,.3,.34],[.05,.42,.42],[.55,.3,.32]].forEach(S=>{const C=new Re(new Lt(S[2],12,10),m(16051967,{emissive:6966678,emissiveIntensity:.3}));C.position.set(S[0],S[1],0),T.add(C)}),T},bar(T){const S=new ct;[-1,1].forEach(k=>{const V=new Re(new Qt(.09,.12,2.2,8),m(13286640));V.position.set(k*3.5,1.1,0),S.add(V);const K=new Re(g(.26,.12,.1),new mt({color:16767334}));K.position.set(k*3.5,2.4,0),S.add(K)});const C=new Re(new Tt(7.2,.3,.14),new Sn({color:11771355,emissive:8017328,emissiveIntensity:.7}));C.position.y=1.5,S.add(C);const A=new Re(new Tn(.66,.66),new mt({map:T,transparent:!0}));return A.position.set(0,1.51,-.09),A.rotation.y=Math.PI,S.add(A),S},block(){const T=new ct,S=new Re(new Qt(.45,.6,1.5,12),m(13286640));S.position.y=.75,T.add(S);const C=new Re(g(.62,.3,.22),new Sn({color:16767334,emissive:13409058,emissiveIntensity:.6}));return C.position.y=2,T.add(C),T}},space:{sky:["#05030f","#140b2e","#2a1656"],fog:[1313582,40,170],road:1708600,dash:10127103,shoulder:3285860,ground:null,hemi:[12562668,1314856,.95],sun:.5,candyColor:16748487,arch:[16767334,10127103],buildDecor(T,S){const C=new ct,A=900,k=new Float32Array(A*3);for(let be=0;be<A;be++)k[be*3]=(Math.random()-.5)*340,k[be*3+1]=-10+Math.random()*130,k[be*3+2]=30+Math.random()*280;const V=new At;V.setAttribute("position",new Ot(k,3)),C.add(new Qo(V,new ia({color:16774880,size:1.2,sizeAttenuation:!0,fog:!1}))),[["#ff9fce",-60,55,230,38],["#9fe8d8",70,40,260,30],["#cabcf0",-45,25,180,22]].forEach(([be,Te,j,oe,se])=>{const ie=new fi(new qn({map:f(be),fog:!1,transparent:!0}));ie.position.set(Te,j,oe),ie.scale.set(se,se,1),C.add(ie)}),T.add(C),[16748487,10479832,16767334].forEach((be,Te)=>{const j=S*(.25+Te*.25),oe=new ct,se=new Re(new Xn(4.6,.16,10,40),new Sn({color:be,emissive:be,emissiveIntensity:.7}));oe.add(se);const ie=new fi(new qn({map:u("rgba(255,255,255,0.55)","rgba(154,134,255,0.25)"),transparent:!0,fog:!1}));ie.scale.set(13,13,1),oe.add(ie);for(let we=0;we<6;we++){const ke=we*Math.PI/3,tt=new Re(g(.22,.1,.08),new mt({color:16774111}));tt.position.set(Math.cos(ke)*4.6,Math.sin(ke)*4.6,0),oe.add(tt)}oe.position.set(0,2.6,j),T.add(oe),M(oe)});const Z=[16752590,10479832,16765578,12159712,9097471],re=[],ce=[];for(let be=40;be<S-60;be+=58){const Te=(be/58|0)%2?1:-1,j=1.1+be*13%22/10,oe=Te*(9+be*7%40/10),se=2.5+be*11%55/10;re.push({p:[oe,se,be],s:j,c:Z[(be/58|0)%Z.length]}),(be/58|0)%2===0&&ce.push({p:[oe,se,be],r:[.5,0,.25],s:j})}return d(T,new Lt(1,16,12),m(16777215),re),d(T,new Xn(1.7,.09,6,24),m(13286640,{emissive:4863365,emissiveIntensity:.3}),ce),{skyGroup:C,finale:N(T,S)}},low(){const T=new ct,S=m(9276057);[[-.45,.34,.3],[.15,.42,.38],[.55,.3,.26]].forEach(A=>{const k=new Re(new ns(A[2],0),S);k.position.set(A[0],A[1],0),k.rotation.set(A[0]*5,A[1]*7,0),T.add(k)});const C=new fi(new qn({map:u("rgba(255,154,61,0.5)","rgba(255,80,40,0.18)"),transparent:!0}));return C.scale.set(2.4,1.4,1),C.position.y=.35,T.add(C),T},bar(T){const S=new ct,C=m(7235712);for(let V=-3;V<=3;V++){const K=new Re(new ns(.26+(V%2?.08:0),0),C);K.position.set(V*1.05,1.6+(V%2?.14:-.08),0),K.rotation.set(V*2.1,V*1.3,0),S.add(K)}const A=new Re(new Qt(.045,.045,7.2,6),new mt({color:16751165,transparent:!0,opacity:.55}));A.rotation.z=Math.PI/2,A.position.y=1.58,S.add(A);const k=new Re(new Tn(.66,.66),new mt({map:T,transparent:!0}));return k.position.set(0,1.6,-.45),k.rotation.y=Math.PI,S.add(k),S},block(){const T=new ct,S=new Re(new ns(.8,0),m(7235712));S.scale.set(1,1.45,.9),S.position.y=1,S.rotation.set(.5,.9,.2),T.add(S);const C=new Re(new ns(.3,0),m(9276057));C.position.set(.55,1.9,.1),C.rotation.set(1.2,.4,0),T.add(C);const A=new fi(new qn({map:u("rgba(154,134,255,0.4)","rgba(154,134,255,0.12)"),transparent:!0}));return A.scale.set(3,3.4,1),A.position.y=1.2,T.add(A),T}}};function N(T,S){const C=new ct;C.position.set(0,6.5,S+32),T.add(C);const A=new Re(new Lt(4.2,24,18),new mt({color:16765503}));C.add(A);const k=new fi(new qn({map:u("rgba(255,224,130,0.95)","rgba(255,150,60,0.4)"),transparent:!0,fog:!1}));k.scale.set(22,22,1),C.add(k);const K=[16752590,10479832,16765578,12159712,9097471,16774111].map((oe,se)=>{const ie=new Re(new Lt(.55+se%3*.25,14,10),m(oe,{emissive:oe,emissiveIntensity:.25}));return C.add(ie),{mesh:ie,r:6.5+se*.9,a:se*1.05,speed:.25+.6/(1+se*.4),tilt:(se%3-1)*.18,dead:!1}}),Z=new Re(new Xn(1,.22,8,40),new mt({color:16774111,transparent:!0}));Z.visible=!1,C.add(Z);const re=new ct,ce=new Re(new Lt(1.7,24,18),new mt({color:0}));re.add(ce);const be=new Re(new Xn(2.6,.34,10,44),new mt({color:16751165,transparent:!0,opacity:.9}));be.rotation.x=1.15,re.add(be);const Te=new fi(new qn({map:u("rgba(180,140,255,0.7)","rgba(120,60,220,0.3)"),transparent:!0,fog:!1}));Te.scale.set(11,11,1),re.add(Te),re.visible=!1,C.add(re);let j=-1;return{start(){j<0&&(j=0)},update(oe,se){if(j<0){const ie=1+Math.sin(se*1.6)*.04;A.scale.setScalar(ie),K.forEach(we=>{we.a+=we.speed*oe,we.mesh.position.set(Math.cos(we.a)*we.r,Math.sin(we.a)*we.r*we.tilt,Math.sin(we.a)*we.r*.55)});return}if(j+=oe,j<.5){const ie=j/.5;A.scale.setScalar(1+ie*1.1),A.material.color.setRGB(1,.82+ie*.18,.25+ie*.75),k.scale.setScalar(17+ie*14)}else{const ie=Math.min(1,(j-.5)/.6);A.scale.setScalar(Math.max(.001,2.1*(1-ie))),k.scale.setScalar(Math.max(.001,31*(1-ie))),Z.visible=ie<1,Z.scale.setScalar(1+ie*24),Z.material.opacity=.9*(1-ie)}j>.9&&(re.visible=!0,re.scale.setScalar(Math.min(1,(j-.9)/.5)),be.rotation.z+=oe*2.6,Te.material.opacity=.7+Math.sin(se*7)*.15,K.forEach(ie=>{if(ie.dead)return;ie.a+=oe*(2.2+9/Math.max(1,ie.r)),ie.r=Math.max(0,ie.r-oe*(1.6+(8-ie.r)*.45));const we=Math.max(.001,Math.min(1,ie.r/4));ie.mesh.scale.setScalar(we),ie.mesh.position.set(Math.cos(ie.a)*ie.r,Math.sin(ie.a)*ie.r*ie.tilt*we,Math.sin(ie.a)*ie.r*.55),ie.r<.45&&(ie.dead=!0,ie.mesh.visible=!1)}))}}}const D={low:{w:1.7,yBot:0,yTop:.74},bar:{w:e,yBot:1,yTop:2.2},block:{w:1.6,yBot:0,yTop:2.3}};function I(T,S){const C=p.find(b=>b.key===S),A=P[S],k=C.length;T.background=s(A.sky),T.fog=new Tc(A.fog[0],A.fog[1],A.fog[2]);const V=new Op(A.hemi[0],A.hemi[1],A.hemi[2]*t);T.add(V);const K=new Ch(16777215,A.sun*t);K.position.set(3,8,-4),T.add(K);const Z=new Re(new Tt(e,.5,k+90),m(A.road));if(Z.position.set(0,-.25,k/2),T.add(Z),[-1,1].forEach(b=>{const z=new Re(new Tt(.5,.56,k+90),m(A.shoulder));z.position.set(b*(e/2+.2),-.24,k/2),T.add(z)}),A.ground!=null){const b=new Re(new Tn(300,k+200),m(A.ground));b.rotation.x=-Math.PI/2,b.position.set(0,-.5,k/2),T.add(b)}const re=[];for(let b=0;b<k+60;b+=4.5)[-1.1,1.1].forEach(z=>re.push({p:[z,.01,b]}));d(T,new Tt(.09,.02,1.4),new mt({color:A.dash}),re);const ce=A.buildDecor(T,k),be=ce&&ce.skyGroup!==void 0?ce.skyGroup:ce,Te=ce&&ce.finale?ce.finale:null,j=new ct,oe=m(A.arch[0]);[-1,1].forEach(b=>{const z=new Re(new Qt(.2,.24,3.4,12),oe);z.position.set(b*3.4,1.7,0),j.add(z)});const se=new Re(new Xn(3.4,.2,10,28,Math.PI),oe);se.position.y=3.4,j.add(se);const ie=new Re(new Tn(4.4,1.1),new mt({map:o("ФИНИШ","#fffaf2","#9b59d0"),transparent:!0}));ie.position.set(0,2.55,-.05),ie.rotation.y=Math.PI,j.add(ie),j.position.z=k,T.add(j),M(j);const we=v(C),ke=c(S==="candy"?"#ff5fa8":"#9b59d0"),tt={low:A.low(),bar:A.bar(ke),block:A.block()};let Be=0;we.forEach(b=>{b.kind==="candy"&&Be++});const ee=14,le=new Lt(.17,12,10),te=new sa(.09,.17,8);te.rotateZ(Math.PI/2),te.translate(-.25,0,0);const ve=new sa(.09,.17,8);ve.rotateZ(-Math.PI/2),ve.translate(.25,0,0);function ge(b,z){const J=new Ge(z),ne=b.attributes.position.count,ue=new Float32Array(ne*3);for(let fe=0;fe<ne;fe++)ue[fe*3]=J.r,ue[fe*3+1]=J.g,ue[fe*3+2]=J.b;b.setAttribute("color",new Ot(ue,3))}ge(le,A.candyColor),ge(te,16774111),ge(ve,16774111);const Ve=Zx([le,te,ve]),U=new Zo(Ve,new Sn({vertexColors:!0}),Be+ee);U.frustumCulled=!1,T.add(U);function qe(){const b=new ct,z=m(16748487),J=new Re(new Lt(.24,14,12),z);J.scale.set(1,.95,.8),b.add(J);const ne=new Re(new Tt(.22,.12,.14),z);return ne.position.y=-.22,b.add(ne),[-1,1].forEach(ue=>{const fe=new Re(new Lt(.06,8,6),m(2827059));fe.position.set(.09*ue,0,-.16),b.add(fe)}),b}const De=qe();let He=0,he=0;const st=new Ye().makeScale(0,0,0);we.forEach(b=>{if(b.x=b.lane===-1?0:i[b.lane],b.taken=!1,b.kind==="candy")b.iid=He++,b.value=1,he+=1,h.position.set(b.x,b.y,b.z),h.rotation.set(0,b.z,0),h.scale.set(1,1,1),h.updateMatrix(),U.setMatrixAt(b.iid,h.matrix);else if(b.kind==="skull"){b.value=3,he+=3;const z=De.clone();z.position.set(b.x,b.y,b.z),T.add(z),b.mesh=z}else{const z=D[b.kind];b.w=z.w,b.yBot=z.yBot,b.yTop=z.yTop;const J=tt[b.kind].clone();J.position.set(b.x,0,b.z),T.add(J),M(J),b.mesh=J}});const R=[];for(let b=0;b<ee;b++)U.setMatrixAt(Be+b,st),R.push({iid:Be+b,active:!1,z:0,x:0,y:.55});return U.instanceMatrix.needsUpdate=!0,{def:C,theme:A,length:k,items:we,candyIM:U,bonusPool:R,totalSweets:he,skyGroup:be,finale:Te,laneX:i,zeroMatrix:st}}function G(T){for(T.traverse(S=>{S.geometry&&S.geometry.dispose(),S.material&&(Array.isArray(S.material)?S.material:[S.material]).forEach(A=>{["map","emissiveMap"].forEach(k=>{A[k]&&A[k].dispose()}),A.dispose()})});T.children.length;)T.remove(T.children[0]);T.background&&T.background.dispose&&T.background.dispose(),T.background=null}return{DEFS:p,LANE_X:i,buildTrack:I,disposeScene:G}})();function $x(i){const e=new Map,t=new Map,n=i.clone();return kh(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function kh(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)kh(i.children[n],e.children[n],t)}class Qx extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new t_(t)}),this.register(function(t){return new Cu(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Cu(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new b_(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Ks.extractUrlBase(e);a=Ks.resolveURL(l,this.path)}else a=Ks.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ah(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Bh){try{a[it.KHR_BINARY_GLTF]=new x_(e)}catch(f){s&&s(f);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new L_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case it.KHR_MATERIALS_UNLIT:a[f]=new n_;break;case it.KHR_DRACO_MESH_COMPRESSION:a[f]=new __(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[f]=new v_;break;case it.KHR_MESH_QUANTIZATION:a[f]=new M_;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function e_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function Dt(i,e,t){const n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class t_{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Ge(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Jt);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ch(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Gp(u),l.distance=f;break;case"spot":l=new Bp(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class n_{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return mt}extendParams(e,t,n){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class i_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class s_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}}class r_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class a_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}}class o_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];if(t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Jt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Gt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}}class c_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}}class l_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(r[0],r[1],r[2],Jt),Promise.all(s)}}class u_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class h_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(r[0],r[1],r[2],Jt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Gt)),Promise.all(s)}}class f_{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}}class d_{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Dt(this.parser,e,this.name)!==null?On:null}extendMaterialParams(e,t){const n=Dt(this.parser,e,this.name);if(n===null)return Promise.resolve();const s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}}class p_{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class m_{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class g_{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Cu{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class b_{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(const m of f){const M=new Ye,g=new O,p=new ti,x=new O(1,1,1),y=new Zo(m.geometry,m.material,h);for(let _=0;_<h;_++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&x.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,M.compose(g,p,x));for(const _ in c)if(_==="_COLOR_0"){const L=c[_];y.instanceColor=new Yo(L.array,L.itemSize,L.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,c[_]);vt.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Bh="glTF",Os=12,Pu={JSON:1313821514,BIN:5130562};class x_{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Os,r=new DataView(e,Os);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Pu.JSON){const l=new Uint8Array(e,Os+a,o);this.content=n.decode(l)}else if(c===Pu.BIN){const l=Os+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class __{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const f=rc[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=rc[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=os[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const M=d.attributes[m],g=c[m];g!==void 0&&(M.normalized=g)}f(d)},o,l,Jt,h)})})}}class v_{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M_{constructor(){this.name=it.KHR_MESH_QUANTIZATION}}class zh extends _s{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,f=(n-t)/u,h=f*f,d=h*f,m=e*l,M=m-l,g=-2*d+3*h,p=d-h,x=1-g,y=p-h+f;for(let _=0;_!==o;_++){const L=a[M+_+o],w=a[M+_+c]*u,F=a[m+_+o],v=a[m+_]*u;r[_]=x*L+y*w+g*F+p*v}return r}}const y_=new ti;class S_ extends zh{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return y_.fromArray(r).normalize().toArray(r),r}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Lu={9728:Nt,9729:Ft,9984:Ju,9985:Hr,9986:Bs,9987:jn},Du={33071:Rn,33648:Jr,10497:Ci},io={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E_={CUBICSPLINE:void 0,LINEAR:$s,STEP:Zs},so={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function T_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Nc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zn})),i.DefaultMaterial}function yi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function A_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function R_(i){let e;const t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ro(t.attributes):e=i.indices+":"+ro(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ro(i.targets[n]);return e}function ro(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ac(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function C_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const P_=new Ye;class L_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new e_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Up(this.options.manager):this.textureLoader=new Hp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return yi(r,o,s),En(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(Ks.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=io[s.type],o=os[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Ot(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=io[s.type],l=os[s.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let M,g;if(d&&d!==f){const p=Math.floor(h/d),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(x);y||(M=new l(o,p*d,s.count*d/u),y=new lh(M,d/u),t.cache.add(x,y)),g=new tr(y,c,h%d/u,m)}else o===null?M=new l(s.count*c):M=new l(o,h,s.count*c),g=new Ot(M,c,m);if(s.sparse!==void 0){const p=io.SCALAR,x=os[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,L=new x(a[1],y,s.sparse.count*p),w=new l(a[2],_,s.sparse.count*c);o!==null&&(g=new Ot(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let F=0,v=L.length;F<v;F++){const P=L[F];if(g.setX(P,w[F*c]),c>=2&&g.setY(P,w[F*c+1]),c>=3&&g.setZ(P,w[F*c+2]),c>=4&&g.setW(P,w[F*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(r.samplers||{})[a.sampler]||{};return u.magFilter=Lu[h.magFilter]||Ft,u.minFilter=Lu[h.minFilter]||jn,u.wrapS=Du[h.wrapS]||Ci,u.wrapT=Du[h.wrapT]||Ci,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Nt&&u.minFilter!==Ft,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const h=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(M){const g=new Ut(M);g.needsUpdate=!0,h(g)}),t.load(Ks.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),En(f,a),f.userData.mimeType=a.mimeType||C_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ia,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new fh,hn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Nc}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){const f=s[it.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{const f=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Jt),o.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Gt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=An);const u=r.alphaMode||so.OPAQUE;if(u===so.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===so.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==mt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==mt){const f=r.emissiveFactor;o.emissive=new Ge().setRGB(f[0],f[1],f[2],Jt)}return r.emissiveTexture!==void 0&&a!==mt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(l).then(function(){const f=new a(o);return r.name&&(f.name=r.name),En(f,r),t.associations.set(f,{materials:e}),r.extensions&&yi(s,f,r),f})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Iu(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=R_(l),f=s[u];if(f)a.push(f.promise);else{let h;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=Iu(new At,l,t),s[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?T_(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,m=u.length;d<m;d++){const M=u[d],g=a[d];let p;const x=l[d];if(g.mode===an.TRIANGLES||g.mode===an.TRIANGLE_STRIP||g.mode===an.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Rd(M,x):new Re(M,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===an.TRIANGLE_STRIP?p.geometry=Ru(p.geometry,nh):g.mode===an.TRIANGLE_FAN&&(p.geometry=Ru(p.geometry,jo));else if(g.mode===an.LINES)p=new Nd(M,x);else if(g.mode===an.LINE_STRIP)p=new Cc(M,x);else if(g.mode===an.LINE_LOOP)p=new Fd(M,x);else if(g.mode===an.POINTS)p=new Qo(M,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&A_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),En(p,r),g.extensions&&yi(s,p,g),t.assignFinalMaterial(p),f.push(p)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&yi(s,f[0],r),f[0];const h=new ct;r.extensions&&yi(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(en.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ha(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const f=a[l];if(f){o.push(f);const h=new Ye;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ac(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],m=s.samplers[d.sampler],M=d.target,g=M.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;M.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),u.push(M))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],m=f[2],M=f[3],g=f[4],p=[];for(let y=0,_=h.length;y<_;y++){const L=h[y],w=d[y],F=m[y],v=M[y],P=g[y];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();const N=n._createAnimationTracks(L,w,F,v,P);if(N)for(let D=0;D<N.length;D++)p.push(N[D])}const x=new Cp(r,void 0,p);return En(x,s),x})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,P_)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,m=f[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new hh:l.length>1?u=new ct:l.length===1?u=l[0]:u=new vt,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=a),En(u,r),r.extensions&&yi(n,u,r),r.matrix!==void 0){const f=new Ye;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const f=s.associations.get(u);s.associations.set(u,{...f})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new ct;n.name&&(r.name=s.createUniqueName(n.name)),En(r,n),n.extensions&&yi(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++){const h=c[u];h.parent!==null?r.add($x(h)):r.add(h)}const l=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof hn||h instanceof Ut)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}hi[r.path]===hi.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let u;switch(hi[r.path]){case hi.weights:u=ms;break;case hi.rotation:u=gs;break;case hi.translation:case hi.scale:u=bs;break;default:switch(n.itemSize){case 1:u=ms;break;case 2:case 3:default:u=bs;break}break}const f=s.interpolation!==void 0?E_[s.interpolation]:$s,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const M=new u(c[d]+"."+hi[r.path],t.array,h,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),a.push(M)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ac(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof gs?S_:zh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function D_(i,e,t){const n=e.attributes,s=new gn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),o.normalized){const u=ac(os[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new O,c=new O;for(let l=0,u=r.length;l<u;l++){const f=r[l];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const M=ac(os[h.componentType]);c.multiplyScalar(M)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Fn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Iu(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=rc[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return nt.workingColorSpace!==Jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),En(i,e),D_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?w_(i,e.targets,t):i})}var I_=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),y=0;y<p.length;++y){var _=p.charCodeAt(y);x[y]=_>96?_-97:_>64?_-39:_+4}for(var L=0,y=0;y<p.length;++y)x[L++]=x[y]<60?n[x[y]]:(x[y]-60)*64+x[++y];return x.buffer.slice(0,L)}function c(p,x,y,_,L,w,F){var v=p.exports.sbrk,P=_+3&-4,N=v(P*L),D=v(w.length),I=new Uint8Array(p.exports.memory.buffer);I.set(w,D);var G=x(N,_,L,D,w.length);if(G==0&&F&&F(N,P,L),y.set(I.subarray(N,N+_*L)),v(N-v(0)),G!=0)throw new Error("Malformed buffer data: "+G)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],h=0;function d(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(y){var _=y.data;x.pending-=_.count,x.requests[_.id][_.action](_.value),delete x.requests[_.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),y=new Blob([x],{type:"text/javascript"}),_=URL.createObjectURL(y),L=f.length;L<p;++L)f[L]=d(_);for(var L=p;L<f.length;++L)f[L].object.postMessage({});f.length=p,URL.revokeObjectURL(_)}function M(p,x,y,_,L){for(var w=f[0],F=1;F<f.length;++F)f[F].pending<w.pending&&(w=f[F]);return new Promise(function(v,P){var N=new Uint8Array(y),D=++h;w.pending+=p,w.requests[D]={resolve:v,reject:P},w.object.postMessage({id:D,count:p,size:x,source:N,mode:_,filter:L},[N.buffer])})}function g(p){var x=p.data;self.ready.then(function(y){if(!x.id)return self.close();try{var _=new Uint8Array(x.count*x.size);c(y,y.exports[x.mode],_,x.count,x.size,x.source,y.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:_},[_.buffer])}catch(L){self.postMessage({id:x.id,count:x.count,action:"reject",value:L})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,y,_,L){c(r,r.exports.meshopt_decodeVertexBuffer,p,x,y,_,r.exports[l[L]])},decodeIndexBuffer:function(p,x,y,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,x,y,_)},decodeIndexSequence:function(p,x,y,_){c(r,r.exports.meshopt_decodeIndexSequence,p,x,y,_)},decodeGltfBuffer:function(p,x,y,_,L,w){c(r,r.exports[u[L]],p,x,y,_,r.exports[l[w]])},decodeGltfBufferAsync:function(p,x,y,_,L){return f.length>0?M(p,x,y,u[_],l[L]):a.then(function(){var w=new Uint8Array(p*x);return c(r,r.exports[u[_]],w,p,x,y,r.exports[l[L]]),w})}}})();const N_=new URL(""+new URL("kuromi-Bvi0VGs-.glb",import.meta.url).href,import.meta.url).href,ao={x:.16,y:.69,z:.3},Nu=2,Fu=["wink","kiss","flip","karate","twirl","starjump","dance"];function F_(){const t=new la;t.moveTo(5,5),t.bezierCurveTo(5,5,4,0,0,0),t.bezierCurveTo(-6,0,-6,7,-6,7),t.bezierCurveTo(-6,11,-3,0+15.4,5,19),t.bezierCurveTo(12,0+15.4,16,11,16,7),t.bezierCurveTo(16,7,16,0,10,0),t.bezierCurveTo(7,0,5,5,5,5);const n=new rr(t,{depth:4,bevelEnabled:!1});return n.center(),n.rotateZ(Math.PI),n.scale(.016,.016,.016),n}function U_(i,e,t){const n=new la;for(let r=0;r<10;r++){const a=r*Math.PI/5-Math.PI/2,o=r%2===0?i:e;r===0?n.moveTo(Math.cos(a)*o,Math.sin(a)*o):n.lineTo(Math.cos(a)*o,Math.sin(a)*o)}n.closePath();const s=new rr(n,{depth:t,bevelEnabled:!1});return s.translate(0,0,-t/2),s}function O_(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");return e.font='900 52px "Segoe UI", sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillStyle="#6e3da0",e.fillText("♪",32,34),new ph(i)}let oc=null;const k_=new Qx().setMeshoptDecoder(I_).loadAsync(N_).then(i=>{const e=i.scene,n=new gn().setFromObject(e).getSize(new O);e.scale.setScalar(1.35/n.y);const s=new gn().setFromObject(e);e.position.set(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2),oc=e});function B_(){if(!oc)throw new Error("Модель Куроми ещё не загружена (await kuromiReady)");const i=new ct,e=new ct;i.add(e),e.add(oc.clone(!0));const t=new ct,n=new Re(new Lt(.085,16,12),new Sn({color:16117234}));n.scale.set(1,1,.3),t.add(n);const s=new Re(new Xn(.055,.013,8,24,Math.PI*.8),new mt({color:1840930}));s.position.z=.022,s.rotation.z=Math.PI+(Math.PI-Math.PI*.8)/2,t.add(s),t.position.set(ao.x,ao.y,ao.z),t.visible=!1,e.add(t);const r=new Re(F_(),new mt({color:16740275,transparent:!0}));r.visible=!1,e.add(r);const a=[-1,1].map(()=>{const d=new Re(new Xn(.5,.045,6,16,Math.PI*.55),new mt({color:16767334,transparent:!0}));return d.visible=!1,i.add(d),d}),o=U_(.09,.045,.03),c=[];for(let d=0;d<5;d++){const m=new Re(o,new mt({color:16767334,transparent:!0}));m.visible=!1,i.add(m),c.push(m)}const l=[-1,1].map(()=>{const d=new fi(new qn({map:O_(),transparent:!0}));return d.scale.set(.34,.34,1),d.visible=!1,i.add(d),d});function u(){t.visible=r.visible=!1,a.forEach(d=>{d.visible=!1}),c.forEach(d=>{d.visible=!1}),l.forEach(d=>{d.visible=!1})}const f=new Re(new Pc(.42,24),new mt({color:4860498,transparent:!0,opacity:.22,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.02,i.add(f);function h(d){const m=d.t,M=m*(7+d.runSpeed*.35),g=d.sliding,p=d.airborne?1:0,x=d.stumble||0,y=d.squash||0;e.position.y=d.y+Math.max(0,Math.sin(M*2))*.06*(1-p)*(1-g),e.rotation.x=.1+g*.95+p*-.16-x*.5,e.rotation.z=en.clamp(-d.laneVel*.055,-.35,.35)+Math.sin(M)*.06*(1-p)*(1-g)+Math.sin(m*26)*.2*x,e.scale.y=(1-g*.35)*(1-y*.16),e.scale.x=(1+g*.12)*(1+y*.12),e.scale.z=1+g*.08;const _=d.celebrate==null?-1:d.celebrate;u();let L=0;if(_>=0&&_<Nu){const v=Math.min(en.smoothstep(_,0,.45),1-en.smoothstep(_,1.55,Nu)),P=(N,D)=>Math.max(0,1-Math.abs(_-N)/D);switch(d.celebrateMove||"wink"){case"wink":L=Math.PI*v,e.rotation.z+=.14*v,t.visible=_>.65&&_<1.45;break;case"kiss":{L=Math.PI*v,e.rotation.z+=.1*v,t.visible=_>.55&&_<1.5;const N=(_-.7)/.8;if(N>0&&N<1){r.visible=!0,r.position.set(0,.55+N*.35,.3+N*1.1);const D=.5+N*1.1;r.scale.set(D,D,D),r.rotation.y=Math.sin(m*4)*.25,r.material.opacity=N<.7?1:1-(N-.7)/.3}break}case"flip":{e.rotation.x+=Math.PI*2*en.smoothstep(_,.25,1.05);const N=Math.sin(Math.PI*en.clamp((_-.2)/.95,0,1));e.position.y+=N*.85;break}case"karate":{L=Math.PI*.75*v,[.75,1.05,1.35].forEach((N,D)=>{const I=P(N,.14);if(I>0){e.rotation.z+=(D%2?-.45:.45)*I,e.position.y+=I*.08;const G=a[D%2];G.visible=!0,G.position.set(D%2?-.6:.6,.85,-.3),G.rotation.set(0,0,D%2?2.4:-.8),G.material.opacity=I;const T=.7+(1-I)*.5;G.scale.set(T,T,T)}});break}case"twirl":{if(L=Math.PI*4*en.smoothstep(_,.15,1.55),e.position.y+=Math.sin(Math.PI*en.clamp((_-.1)/1.5,0,1))*.25,_>.25&&_<1.7)for(let N=0;N<3;N++){const D=c[N],I=m*7+N*Math.PI*2/3;D.visible=!0,D.position.set(Math.cos(I)*.6,.7+Math.sin(m*5+N)*.15,Math.sin(I)*.6),D.rotation.set(0,I,0),D.scale.setScalar(1),D.material.opacity=Math.min(1,(1.7-_)*2)}break}case"starjump":{const N=P(.35,.2);e.scale.y*=1-N*.18,e.scale.x*=1+N*.12;const D=Math.sin(Math.PI*en.clamp((_-.45)/.9,0,1));if(e.position.y+=D*1.1,e.rotation.z+=Math.sin(_*20)*.05*D,_>.8&&_<1.7){const I=(_-.8)/.9;c.forEach((G,T)=>{const S=T*Math.PI*2/5+.6,C=.3+I*1.2;G.visible=!0,G.position.set(Math.cos(S)*C,.9+D+Math.sin(S)*C*.6-I*.3,-.35),G.rotation.set(0,0,I*6+T),G.scale.setScalar(.8+I*.7),G.material.opacity=1-I})}break}case"dance":{L=Math.PI*v+Math.sin(_*9)*.3*v,e.position.y+=Math.abs(Math.sin(_*Math.PI*4))*.16*v,e.rotation.z+=Math.sin(_*Math.PI*4)*.17*v,_>.3&&_<1.8&&l.forEach((N,D)=>{const I=(_*.9+D*.5)%1;N.visible=!0,N.position.set(D?.7:-.7,.7+I*.8,.1),N.material.opacity=1-I});break}}}e.rotation.y=L;const w=d.y;f.material.opacity=Math.max(.06,.22-w*.07);const F=1+w*.25;f.scale.set(F,F,1)}return{group:i,rig:e,update:h}}const z_=ra.LANE_X;nt.enabled=!1;const cc=[{a:"Корней Чуковский",t:"«Мойдодыр» и «Айболит»",d:"Весёлые стихи-сказки, которые легко читать вслух."},{a:"Самуил Маршак",t:"«Вот какой рассеянный»",d:"Смешные стихи про рассеянного с улицы Бассейной."},{a:"Агния Барто",t:"Стихи для детей",d:"«Игрушки» и другие короткие добрые стихи."},{a:"Владимир Сутеев",t:"«Сказки и картинки»",d:"Маленькие сказки с картинками автора — то, что нужно для первого чтения."},{a:"Николай Носов",t:"«Живая шляпа», «Затейники»",d:"Очень смешные рассказы про друзей и их выдумки."},{a:"Русские народные сказки",t:"«Гуси-лебеди», «Маша и медведь»",d:"Любимые сказки, знакомые с детского сада."},{a:"Александр Пушкин",t:"«Сказка о рыбаке и рыбке»",d:"Первая встреча с великим сказочником."},{a:"Виктор Драгунский",t:"«Денискины рассказы»",d:"Истории про Дениску — добрые и очень весёлые."}];let Uu=Math.floor(Math.random()*cc.length);const ot=i=>document.getElementById(i),lc={menu:ot("menu"),hud:ot("hud"),finish:ot("finish"),pause:ot("pause-overlay"),countdown:ot("countdown"),book:ot("book-break")},pa=ot("game-canvas"),is=ot("confetti-canvas");function kc(i){Object.keys(lc).forEach(e=>lc[e].classList.toggle("visible",e===i))}function gi(i,e){lc[i].classList.toggle("visible",e)}const xs=new Yx({canvas:pa,antialias:!0});xs.setPixelRatio(Math.min(window.devicePixelRatio||1,2));xs.outputColorSpace=Jt;const ss=new Md,Ai=new jt(58,1,.1,400);function Gh(){const i=window.innerWidth,e=window.innerHeight;xs.setSize(i,e,!1),Ai.aspect=i/e,Ai.fov=i<e?70:58,Ai.updateProjectionMatrix()}window.addEventListener("resize",Gh);Gh();let wt="menu",yt=null,Pn=null,We=null,Ou=0,tn=0,Vs=0,uc=0,cs=0;const Vh="kuromiRun.stars";function Hh(){try{return JSON.parse(localStorage.getItem(Vh))||{}}catch{return{}}}function G_(i){localStorage.setItem(Vh,JSON.stringify(i))}function V_(i){let e="";for(let t=0;t<3;t++)e+='<span class="star '+(t<i?"on":"")+'">★</span>';return e}function H_(){const i=Hh(),e=ot("track-cards");e.innerHTML="",ra.DEFS.forEach(t=>{const n=document.createElement("button");n.className="track-card",n.setAttribute("data-track",t.key),n.innerHTML='<span class="card-art" style="background:'+t.grad+'"></span><span class="card-name">'+t.name+'</span><span class="card-sub">'+t.sub+'</span><span class="card-stars">'+V_(i[t.key]||0)+"</span>",n.addEventListener("click",()=>Bc(t.key)),e.appendChild(n)})}async function Bc(i){ft.tap(),await k_,Pn&&ss.remove(Pn.group),ra.disposeScene(ss),yt=ra.buildTrack(ss,i),Pn=B_(),ss.add(Pn.group),We={lane:1,x:0,y:0,vy:0,z:0,airborne:!1,slideT:0,slideOnLand:!1,invuln:0,collected:0,celebT:0,laneV:0,stumbleT:0,landT:0,speed:yt.def.baseSpeed*.5},Vs=0,tn=0,uc=0,cs=0,ot("hud-count").textContent="0",ot("progress-fill").style.width="0%",kc("hud"),W_()}function W_(){wt="countdown";const i=ot("countdown-num");gi("countdown",!0);const e=["3","2","1","Беги!"];let t=0;function n(){t<e.length?(i.textContent=e[t],i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop"),ft.countTick(t===3),t++,setTimeout(n,t===4?600:700)):(gi("countdown",!1),wt="playing",ft.startMusic(yt.def.music))}n()}function hc(i){if(wt!=="playing")return;const e=en.clamp(We.lane+i,0,2);e!==We.lane&&(We.lane=e,ft.swish())}function Wh(){wt==="playing"&&(We.airborne||(We.vy=10.6,We.airborne=!0,We.slideT=0,ft.boing()))}function qh(){wt==="playing"&&(We.airborne?(We.vy=Math.min(We.vy,-16),We.slideOnLand=!0):(We.slideT=.62,ft.swish()))}window.addEventListener("keydown",i=>{const e=i.code;["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space","KeyA","KeyD","KeyW","KeyS"].includes(e)&&i.preventDefault(),e==="ArrowLeft"||e==="KeyA"?hc(-1):e==="ArrowRight"||e==="KeyD"?hc(1):e==="ArrowUp"||e==="Space"||e==="KeyW"?Wh():e==="ArrowDown"||e==="KeyS"?qh():e==="Escape"&&wt==="playing"&&Xh()});let di=null;pa.addEventListener("touchstart",i=>{ft.tap();const e=i.changedTouches[0];di={x:e.clientX,y:e.clientY,id:e.identifier,used:!1}},{passive:!0});pa.addEventListener("touchmove",i=>{if(!di||di.used)return;const e=[...i.changedTouches].find(s=>s.identifier===di.id);if(!e)return;const t=e.clientX-di.x,n=e.clientY-di.y;Math.abs(t)<34&&Math.abs(n)<34||(di.used=!0,Math.abs(t)>Math.abs(n)?hc(t>0?1:-1):n<0?Wh():qh())},{passive:!0});pa.addEventListener("touchend",()=>{di=null},{passive:!0});function Xh(){wt==="playing"&&(wt="paused",ft.stopMusic(),gi("pause",!0))}function q_(){gi("pause",!1),wt==="paused"&&(wt="playing",ft.startMusic(yt.def.music))}ot("btn-pause").addEventListener("click",Xh);ot("btn-resume").addEventListener("click",q_);ot("btn-restart").addEventListener("click",()=>{gi("pause",!1),Bc(yt.def.key)});ot("btn-pause-menu").addEventListener("click",()=>{gi("pause",!1),zc()});function jh(){document.querySelectorAll(".btn-sound").forEach(i=>{i.classList.toggle("muted",!ft.isEnabled()),i.setAttribute("aria-label",ft.isEnabled()?"Выключить звук":"Включить звук")})}document.querySelectorAll(".btn-sound").forEach(i=>{i.addEventListener("click",()=>{ft.tap(),ft.setEnabled(!ft.isEnabled()),jh()})});jh();function zc(){wt="menu",ft.stopMusic(),H_(),kc("menu")}const X_=5;let Gr=null;function j_(){wt="book",ft.stopMusic();const i=cc[Uu%cc.length];Uu++,ot("book-author").textContent=i.a,ot("book-title").textContent=i.t,ot("book-desc").textContent=i.d;const e=ot("btn-book-continue");let t=X_;e.disabled=!0,e.textContent="Бежать дальше! ("+t+")",clearInterval(Gr),Gr=setInterval(()=>{t--,t<=0?(clearInterval(Gr),Gr=null,e.disabled=!1,e.textContent="Бежать дальше!"):e.textContent="Бежать дальше! ("+t+")"},1e3),gi("book",!0)}ot("btn-book-continue").addEventListener("click",()=>{gi("book",!1),wt==="book"&&(wt="playing",ft.startMusic(yt.def.music))});const Kh=2;let ku=-1;function Jh(i){if(!i){let e;do e=Math.floor(Math.random()*Fu.length);while(e===ku);ku=e,i=Fu[e]}We.celebMove=i,We.celebT=Kh,ft.starPop(2)}function Bu(i){const e=We.collected;We.collected+=i,ot("hud-count").textContent=We.collected,Math.floor(We.collected/50)>Math.floor(e/50)&&Jh()}window.__celebrate=i=>{We&&Jh(i)};window.__warp=i=>{We&&(We.z=i)};window.__debug=()=>({state:wt,children:ss.children.length,cam:Ai.position.toArray().map(i=>+i.toFixed(2)),player:We?{x:+We.x.toFixed(2),z:+We.z.toFixed(2)}:null,drawn:xs.info.render.calls,tris:xs.info.render.triangles});function K_(){if(We.invuln>0)return;We.invuln=2,We.stumbleT=.9,cs=.45,ft.thud();const i=Math.min(We.collected,5);if(i>0){We.collected-=i,ot("hud-count").textContent=We.collected;let e=0;for(const t of yt.bonusPool){if(e>=i)break;t.active||(t.active=!0,t.x=We.x,t.y=1,t.z=We.z+.3,t.fly={vx:(Math.random()-.5)*5,vy:4.5+Math.random()*2.5,vz:3.5+Math.random()*3.5},e++)}}uc++,uc%3===0&&setTimeout(()=>{wt==="playing"&&j_()},1200)}function J_(){wt="finishing",ft.stopMusic(),yt.finale?(ft.boom(),yt.finale.start(),cs=.9,setTimeout(zu,4300)):(ft.fanfare(),Yh(),setTimeout(zu,1400))}function zu(){wt="finish",yt.finale&&ft.fanfare();const i=yt.totalSweets?We.collected/yt.totalSweets:0,e=i>=.9?3:i>=.75?2:i>=.5?1:0,t=Hh();(t[yt.def.key]||0)<e&&(t[yt.def.key]=e,G_(t)),ot("finish-count").textContent=We.collected,ot("finish-total").textContent=yt.totalSweets,ot("finish-msg").textContent=e===3?"Невероятно! Ты собрала почти всё!":e===2?"Здорово! Отличный забег!":e===1?"Молодец! Попробуй собрать ещё больше!":"Финиш! В следующий раз получится собрать больше сладостей!";const n=[...document.querySelectorAll("#finish-stars .big-star")];n.forEach(s=>s.classList.remove("earned","pop")),kc("finish"),n.forEach((s,r)=>{r<e&&setTimeout(()=>{s.classList.add("earned","pop"),ft.starPop(r)},500+r*550)}),Yh()}ot("btn-again").addEventListener("click",()=>Bc(yt.def.key));ot("btn-finish-menu").addEventListener("click",zc);let Hs=[];function Yh(){const i=is.width=window.innerWidth;is.height=window.innerHeight;const e=["#ff8fc7","#9b59d0","#fff3df","#ffd966","#9fe8d8"];for(let t=0;t<120;t++)Hs.push({x:Math.random()*i,y:-20-Math.random()*200,vx:(Math.random()-.5)*60,vy:80+Math.random()*160,rot:Math.random()*6,vr:(Math.random()-.5)*8,s:6+Math.random()*7,c:e[t%e.length],life:4})}function Y_(i){const e=is.getContext("2d");e.clearRect(0,0,is.width,is.height),Hs.length&&(Hs.forEach(t=>{t.x+=t.vx*i,t.y+=t.vy*i,t.rot+=t.vr*i,t.life-=i,e.save(),e.translate(t.x,t.y),e.rotate(t.rot),e.fillStyle=t.c,e.fillRect(-t.s/2,-t.s/4,t.s,t.s/2),e.restore()}),Hs=Hs.filter(t=>t.life>0&&t.y<is.height+30))}const yn=new vt;function Z_(i){const e=We,t=yt,n=Math.min(1,e.z/t.length*1.4),s=e.stumbleT>0?0:t.def.baseSpeed+(t.def.maxSpeed-t.def.baseSpeed)*n;e.speed+=en.clamp(s-e.speed,-34*i,6.5*i),e.z+=e.speed*i;const r=z_[e.lane];e.laneV+=((r-e.x)*60-e.laneV*10.5)*i,e.x+=e.laneV*i,e.airborne&&(e.vy-=30*i,e.y+=e.vy*i,e.y<=0&&(e.y=0,e.vy=0,e.airborne=!1,e.landT=.16,e.slideOnLand&&(e.slideT=.55,e.slideOnLand=!1,ft.swish()))),e.slideT>0&&(e.slideT-=i),e.invuln>0&&(e.invuln-=i),e.celebT>0&&(e.celebT-=i),e.stumbleT>0&&(e.stumbleT-=i),e.landT>0&&(e.landT-=i);const a=e.slideT>0?1:0,o=e.y,c=e.y+(a?.68:1.42),l=t.items;for(;Vs<l.length&&l[Vs].z<e.z-4;)Vs++;let u=!1;for(let f=Vs;f<l.length;f++){const h=l[f];if(h.z>e.z+60)break;const d=h.z-e.z;if(h.kind==="candy"||h.kind==="skull")h.taken||(h.kind==="skull"&&h.mesh?(h.mesh.rotation.y+=i*2.4,h.mesh.position.y=h.y+Math.sin(tn*3+h.z)*.08):h.kind==="candy"&&d<40&&(yn.position.set(h.x,h.y+Math.sin(tn*3+h.z)*.07,h.z),yn.rotation.set(0,tn*2.5+h.z,0),yn.scale.set(1,1,1),yn.updateMatrix(),t.candyIM.setMatrixAt(h.iid,yn.matrix),u=!0),Math.abs(d)<1&&Math.abs(h.x-e.x)<.95&&Math.abs(h.y-(e.y+.7))<1.05&&(h.taken=!0,Bu(h.value),h.kind==="skull"?(ft.dingBig(),h.mesh&&(h.mesh.visible=!1)):(ft.ding(),t.candyIM.setMatrixAt(h.iid,t.zeroMatrix),u=!0)));else if(e.invuln<=0&&e.celebT<=0&&Math.abs(d)<.65+e.speed*i){const m=h.w/2+.28;Math.abs(h.x-e.x)<m&&h.yBot<c&&h.yTop>o&&K_()}}for(const f of t.bonusPool)if(f.active){if(f.z<e.z-4){f.active=!1,t.candyIM.setMatrixAt(f.iid,t.zeroMatrix),u=!0;continue}f.fly&&(f.fly.vy-=18*i,f.x=en.clamp(f.x+f.fly.vx*i,-3.1,3.1),f.y+=f.fly.vy*i,f.z+=f.fly.vz*i,f.y<=.55&&f.fly.vy<0&&(f.y=.55,f.fly=null)),yn.position.set(f.x,f.y+(f.fly?0:Math.sin(tn*4+f.z)*.08),f.z),yn.rotation.set(0,tn*(f.fly?7:3),0),yn.scale.set(1.15,1.15,1.15),yn.updateMatrix(),t.candyIM.setMatrixAt(f.iid,yn.matrix),u=!0,!f.fly&&Math.abs(f.z-e.z)<1&&Math.abs(f.x-e.x)<.95&&e.y<1.2&&(f.active=!1,Bu(1),ft.ding(),t.candyIM.setMatrixAt(f.iid,t.zeroMatrix))}u&&(t.candyIM.instanceMatrix.needsUpdate=!0),ot("progress-fill").style.width=Math.min(100,e.z/t.length*100).toFixed(1)+"%",t.finale&&t.finale.update(i,tn),Pn.group.position.set(e.x,0,e.z),Pn.update({t:tn,y:e.y,sliding:a,airborne:e.airborne,laneVel:e.laneV,runSpeed:e.speed,stumble:e.stumbleT>0?Math.min(1,e.stumbleT/.55):0,squash:e.landT>0?e.landT/.16:0,celebrate:e.celebT>0?Kh-e.celebT:-1,celebrateMove:e.celebMove}),Pn.group.visible=e.celebT>0||e.invuln<=0||Math.floor(tn*12)%2===0,e.z>=t.length&&wt==="playing"&&J_()}function $_(i){const e=We;if(e){cs>0&&(cs-=i);const t=Math.max(0,cs),n=(Math.random()-.5)*t*.3,s=(Math.random()-.5)*t*.2;Ai.position.set(e.x*.55+n,2.7+e.y*.3+s,e.z-5.4),Ai.lookAt(e.x*.75,1.15+e.y*.25,e.z+7),yt&&yt.skyGroup&&(yt.skyGroup.position.z=e.z)}xs.render(ss,Ai)}function Zh(i){requestAnimationFrame(Zh);const e=Math.min(.05,(i-Ou)/1e3||.016);if(Ou=i,wt==="playing")tn+=e,Z_(e);else if(wt==="finishing"){if(tn+=e,yt.finale){const t=yt.length+14;We.speed=en.clamp((t-We.z)*1.6,0,We.speed)}else We.speed=Math.max(3,We.speed-8*e);We.z+=We.speed*e,Pn.group.position.set(We.x,0,We.z),Pn.group.visible=!0,Pn.update({t:tn,y:0,sliding:0,airborne:!1,laneVel:0,runSpeed:We.speed}),yt.finale&&yt.finale.update(e,tn),ot("progress-fill").style.width="100%"}wt!=="menu"&&$_(e),Y_(e)}window.addEventListener("pointerdown",()=>ft.tap(),{once:!0});zc();requestAnimationFrame(Zh);
