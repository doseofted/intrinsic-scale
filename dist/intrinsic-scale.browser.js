/*! npm.im/intrinsic-scale */
!function(i){"use strict";function n(i){return function(n,t,c,r){var e=c/r,s=n/t,u=n,a=t;return(i?e>s:e<s)?a=u/e:u=a*e,{width:u,height:a,x:(n-u)/2,y:(t-a)/2}}}var t=n(!0),c=n(!1);i.contain=t,i.cover=c}(this.intrinsicScale=this.intrinsicScale||{});