import{S as s,i as a,s as e,e as r,t,a as i,c as l,b as c,d as o,f as h,g as n,h as m,j as d,k as f,l as u,m as g,n as x,o as p,q as v,p as U,r as $,u as j,v as E,w as T}from"./client.74e847f9.js";function w(s){let a,e,p,v,U,$,j,E,T,w,D;return{c(){a=r("main"),e=r("div"),p=r("h1"),v=t(s[0]),U=i(),$=r("audio"),E=i(),T=r("p"),w=r("a"),D=t("Download this podcast"),this.h()},l(r){a=l(r,"MAIN",{style:!0,class:!0});var t=c(a);e=l(t,"DIV",{class:!0});var i=c(e);p=l(i,"H1",{class:!0});var m=c(p);v=o(m,s[0]),m.forEach(h),i.forEach(h),U=n(t),$=l(t,"AUDIO",{src:!0,controls:!0,class:!0}),c($).forEach(h),E=n(t),T=l(t,"P",{});var d=c(T);w=l(d,"A",{href:!0,class:!0});var f=c(w);D=o(f,"Download this podcast"),f.forEach(h),d.forEach(h),t.forEach(h),this.h()},h(){m(p,"class","svelte-ji7rhi"),m(e,"class","header-holder"),$.src!==(j=s[1])&&m($,"src",j),$.controls=!0,m($,"class","svelte-ji7rhi"),m(w,"href",s[1]),m(w,"class","svelte-ji7rhi"),d(a,"background-image",s[2]),m(a,"class","svelte-ji7rhi")},m(s,r){f(s,a,r),u(a,e),u(e,p),u(p,v),u(a,U),u(a,$),u(a,E),u(a,T),u(T,w),u(w,D)},p(s,[e]){1&e&&g(v,s[0]),2&e&&$.src!==(j=s[1])&&m($,"src",j),2&e&&m(w,"href",s[1]),4&e&&d(a,"background-image",s[2])},i:x,o:x,d(s){s&&h(a)}}}function D(s,a,e){let{mixTitle:r}=a,{mixUrl:t}=a,{imageUrl:i}=a;return s.$set=(s=>{"mixTitle"in s&&e(0,r=s.mixTitle),"mixUrl"in s&&e(1,t=s.mixUrl),"imageUrl"in s&&e(2,i=s.imageUrl)}),[r,t,i]}class b extends s{constructor(s){super(),a(this,s,D,w,e,{mixTitle:0,mixUrl:1,imageUrl:2})}}function k(s){let a,e;const r=new b({props:{mixTitle:"The Flex podcast 1",mixUrl:"audio/flex-volume-1.opus",imageUrl:"images/wish.jpg"}});return{c(){a=i(),p(r.$$.fragment),this.h()},l(s){v('[data-svelte="svelte-1tgwdcf"]',document.head).forEach(h),a=n(s),U(r.$$.fragment,s),this.h()},h(){document.title="The Flex"},m(s,t){f(s,a,t),$(r,s,t),e=!0},p:x,i(s){e||(j(r.$$.fragment,s),e=!0)},o(s){E(r.$$.fragment,s),e=!1},d(s){s&&h(a),T(r,s)}}}export default class extends s{constructor(s){super(),a(this,s,null,k,e,{})}}