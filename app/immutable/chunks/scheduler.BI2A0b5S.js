function x(){}const z=t=>t;function k(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function D(){return Object.create(null)}function j(t){t.forEach(w)}function M(t){return typeof t=="function"}function A(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function B(t){return Object.keys(t).length===0}function E(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function F(t,n,e){t.$$.on_destroy.push(E(n,e))}function P(t,n,e,o){if(t){const s=y(t,n,e,o);return t[0](s)}}function y(t,n,e,o){return t[1]&&o?k(e.ctx.slice(),t[1](o(n))):e.ctx}function S(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(n.dirty===void 0)return s;if(typeof s=="object"){const l=[],_=Math.max(n.dirty.length,s.length);for(let u=0;u<_;u+=1)l[u]=n.dirty[u]|s[u];return l}return n.dirty|s}return n.dirty}function U(t,n,e,o,s,l){if(s){const _=y(n,e,o,l);t.p(_,s)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}function H(t,n,e){return t.set(e),n}let f;function d(t){f=t}function i(){if(!f)throw new Error("Function called outside component initialization");return f}function I(t){i().$$.on_mount.push(t)}function J(t){i().$$.after_update.push(t)}function K(t){i().$$.on_destroy.push(t)}function L(t,n){return i().$$.context.set(t,n),n}function N(t){return i().$$.context.get(t)}const a=[],b=[];let c=[];const p=[],m=Promise.resolve();let g=!1;function v(){g||(g=!0,m.then(O))}function Q(){return v(),m}function C(t){c.push(t)}function R(t){p.push(t)}const h=new Set;let r=0;function O(){if(r!==0)return;const t=f;do{try{for(;r<a.length;){const n=a[r];r++,d(n),q(n.$$)}}catch(n){throw a.length=0,r=0,n}for(d(null),a.length=0,r=0;b.length;)b.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;p.length;)p.pop()();g=!1,h.clear(),d(t)}function q(t){if(t.fragment!==null){t.update(),j(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}function T(t){const n=[],e=[];c.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),c=n}export{L as A,N as B,k as C,z as D,K as E,E as a,J as b,F as c,b as d,D as e,O as f,B as g,C as h,M as i,w as j,T as k,f as l,d as m,x as n,I as o,a as p,v as q,j as r,A as s,Q as t,P as u,U as v,G as w,S as x,R as y,H as z};