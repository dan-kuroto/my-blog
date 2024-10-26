"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[438],{2814:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>z,contentTitle:()=>L,default:()=>_,frontMatter:()=>V,metadata:()=>N,toc:()=>D});var t=i(4848),s=i(8453),r=i(6540),l=i(4164),a=i(3104),o=i(6347),d=i(205),u=i(7485),c=i(1682),h=i(679);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:i}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:i,attributes:t,default:s}}=e;return{value:n,label:i,attributes:t,default:s}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function x(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:i}=e;const t=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,u.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,s=p(e),[l,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=i.find((e=>e.default))??i[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,u]=g({queryString:i,groupId:t}),[c,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,h.Dv)(i);return[t,(0,r.useCallback)((e=>{i&&s.set(e)}),[i,s])]}({groupId:t}),j=(()=>{const e=o??c;return x({value:e,tabValues:s})?e:null})();(0,d.A)((()=>{j&&a(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var b=i(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:i,selectedValue:s,selectValue:r,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const n=e.currentTarget,i=d.indexOf(n),t=o[i].value;t!==s&&(u(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=d.indexOf(e.currentTarget)+1;n=d[i]??d[0];break}case"ArrowLeft":{const i=d.indexOf(e.currentTarget)-1;n=d[i]??d[d.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:c,...r,className:(0,l.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function q(e){let{lazy:n,children:i,selectedValue:s}=e;const a=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=j(e);return(0,t.jsxs)("div",{className:(0,l.A)("tabs-container",v.tabList),children:[(0,t.jsx)(f,{...n,...e}),(0,t.jsx)(q,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,t.jsx)(y,{...e,children:m(e.children)},String(n))}const k={tabItem:"tabItem_Ymn6"};function C(e){let{children:n,hidden:i,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,l.A)(k.tabItem,s),hidden:i,children:n})}const S=()=>{const[e,n]=(0,r.useState)(!0);return(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>n(!e),children:"Toggle"}),(0,t.jsx)("div",{style:{transition:"height 0.3s ease",overflow:"hidden",height:e?"auto":0},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})]})},E=()=>{const[e,n]=(0,r.useState)(!0);return(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>n(!e),children:"Toggle"}),(0,t.jsx)("div",{style:{interpolateSize:"allow-keywords",transition:"height 0.3s ease",overflow:"hidden",height:e?"auto":0},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})]})},R=()=>{const[e,n]=(0,r.useState)(!0);return(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>n(!e),children:"Toggle"}),(0,t.jsx)("div",{style:{transition:"grid-template-rows 0.3s ease",overflow:"hidden",display:"grid",gridTemplateRows:e?"1fr":"0fr"},children:(0,t.jsx)("div",{style:{minHeight:0},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})})]})},T=()=>{const[e,n]=(0,r.useState)(!0);return(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>n(!e),children:"Toggle"}),(0,t.jsx)("div",{style:{transition:"transform 0.3s ease",overflow:"hidden",transform:e?"scaleY(1)":"scaleY(0)",transformOrigin:"top"},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})]})},A=()=>{const[e,n]=(0,r.useState)(!0);return(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>n(!e),children:"Toggle"}),(0,t.jsx)("div",{style:{transition:"max-height 0.3s ease",overflow:"hidden",maxHeight:e?1e3:0},children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})]})},I=()=>{const e=(0,r.useRef)(null),n=(0,r.useRef)(!0),[i,s]=(0,r.useState)();return(0,r.useEffect)((()=>{if(!e.current)return;const n=e.current.getBoundingClientRect();s(n.height)}),[]),(0,t.jsxs)("div",{style:{padding:10,backgroundColor:"lightgray",borderRadius:5},children:[(0,t.jsx)("button",{onClick:()=>{if(n.current)s(0);else if(e.current){const n=e.current.getBoundingClientRect();s(n.height)}n.current=!n.current},children:"Toggle"}),(0,t.jsx)("div",{style:{transition:"height 0.3s ease",overflow:"hidden",height:i},children:(0,t.jsx)("div",{ref:e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus sint iste at possimus quibusdam iusto accusantium et, itaque explicabo laboriosam neque minima deleniti labore expedita magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi aspernatur quis est nesciunt molestiae."})})]})},V={sidebar_position:2},L="\u5982\u4f55\u5b9e\u73b0\u9ad8\u5ea6\u81ea\u52a8\u7684\u8fc7\u6e21\u52a8\u753b",N={id:"front-end/2/index",title:"\u5982\u4f55\u5b9e\u73b0\u9ad8\u5ea6\u81ea\u52a8\u7684\u8fc7\u6e21\u52a8\u753b",description:"\u524d\u6bb5\u65f6\u95f4\uff0c\u4e00\u4e2a\u770b\u4f3c\u7b80\u5355\u7684\u95ee\u9898\u8ba9\u6211\u72af\u4e86\u96be\uff1a",source:"@site/docs/front-end/2/index.mdx",sourceDirName:"front-end/2",slug:"/front-end/2/",permalink:"/my-blog/docs/front-end/2/",draft:!1,unlisted:!1,editUrl:"https://github.com/dan-kuroto/my-blog/tree/main/docs/front-end/2/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4e2d\u6587\u6587\u4ef6\u540d\u5bfc\u81f4\u751f\u4ea7\u73af\u5883\u90e8\u5206\u56fe\u7247\u65e0\u6cd5\u52a0\u8f7d",permalink:"/my-blog/docs/front-end/1"},next:{title:"Create a Document",permalink:"/my-blog/docs/front-end/create-a-document"}},z={},D=[{value:"0. \u76f4\u63a5\u4f7f\u7528 <code>height: auto</code> \u4e3a\u4ec0\u4e48\u4e0d\u884c\uff1f",id:"0-\u76f4\u63a5\u4f7f\u7528-height-auto-\u4e3a\u4ec0\u4e48\u4e0d\u884c",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a",level:3},{value:"1. <code>interpolate-size: allow-keywords</code>",id:"1-interpolate-size-allow-keywords",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a-1",level:3},{value:"2. <code>grid-template-rows</code>",id:"2-grid-template-rows",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-2",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a-2",level:3},{value:"3. <code>transform: scaleY</code>",id:"3-transform-scaley",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-3",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a-3",level:3},{value:"4. <code>max-height</code>",id:"4-max-height",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-4",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a-4",level:3},{value:"5. \u653e\u5f03\u7eaf css\uff0c\u7528 js \u8f85\u52a9\u5b9e\u73b0",id:"5-\u653e\u5f03\u7eaf-css\u7528-js-\u8f85\u52a9\u5b9e\u73b0",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-5",level:3},{value:"\u6548\u679c\u6f14\u793a",id:"\u6548\u679c\u6f14\u793a-5",level:3}];function O(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u5982\u4f55\u5b9e\u73b0\u9ad8\u5ea6\u81ea\u52a8\u7684\u8fc7\u6e21\u52a8\u753b",children:"\u5982\u4f55\u5b9e\u73b0\u9ad8\u5ea6\u81ea\u52a8\u7684\u8fc7\u6e21\u52a8\u753b"})}),"\n",(0,t.jsx)(n.p,{children:"\u524d\u6bb5\u65f6\u95f4\uff0c\u4e00\u4e2a\u770b\u4f3c\u7b80\u5355\u7684\u95ee\u9898\u8ba9\u6211\u72af\u4e86\u96be\uff1a"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u4f55\u8ba9\u4e00\u4e2a\u5143\u7d20\u5728\u96f6\u9ad8\u5ea6\u548c\u81ea\u52a8\u9ad8\u5ea6\u4e4b\u95f4\u5207\u6362\u7684\u65f6\u5019\u80fd\u663e\u793a\u51fa\u8fc7\u6e21\u52a8\u753b\uff08\u5373\u6298\u53e0\u52a8\u753b\uff09\uff1f\u80fd\u4e0d\u80fd\u7528\u7eafCSS\u6765\u5b9e\u73b0\uff1f"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"\u672c\u6587\u4e2d\u7684\u4ee3\u7801\u91c7\u7528\u4e86react hooks\u5199\u6cd5\uff0c\u4f46\u8fd9\u53ea\u662f\u4e3a\u4e86\u8282\u7701\u7bc7\u5e45\uff08\u4ee3\u7801\u91cf\uff09\uff0c\u8fd9\u4e2a\u95ee\u9898\u4e0ereact\u65e0\u5173\uff0c\u5176\u4ed6\u6846\u67b6\u6216\u8005\u539f\u751fhtml+css+js\u90fd\u662f\u4e00\u4e2a\u9053\u7406\u3002"})}),"\n",(0,t.jsxs)(n.h2,{id:"0-\u76f4\u63a5\u4f7f\u7528-height-auto-\u4e3a\u4ec0\u4e48\u4e0d\u884c",children:["0. \u76f4\u63a5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"height: auto"})," \u4e3a\u4ec0\u4e48\u4e0d\u884c\uff1f"]}),"\n",(0,t.jsxs)(n.p,{children:["\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u52a8\u753b\u662f\u6570\u503c\u7684\u53d8\u5316\uff0c\u800c ",(0,t.jsx)(n.code,{children:"auto"})," \u662f\u4e00\u4e2a\u5173\u952e\u5b57\uff0c\u4e0d\u662f\u4e00\u4e2a\u6570\u503c\uff0c\u8981\u600e\u4e48\u4ea7\u751f\u8fc7\u6e21\u6548\u679c\u5462\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo0.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>\n      <button onClick={() => setOpen(!open)}>Toggle</button>\n      <div\n        // highlight-start\n        style={{\n          transition: "height 0.3s ease",\n          overflow: "hidden",\n          height: open ? "auto" : 0,\n        }}\n        // highlight-end\n      >\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus\n        sint iste at possimus quibusdam iusto accusantium et, itaque explicabo\n        laboriosam neque minima deleniti labore expedita magnam sequi dolorum,\n        debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex,\n        fuga inventore quas vitae aliquam aliquid modi aspernatur quis est\n        nesciunt molestiae.\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a",children:"\u6548\u679c\u6f14\u793a"}),"\n",(0,t.jsx)(n.p,{children:"\u4e0d\u652f\u6301\u52a8\u753b\u6548\u679c\u3002"}),"\n","\n",(0,t.jsx)(S,{}),"\n",(0,t.jsxs)(n.h2,{id:"1-interpolate-size-allow-keywords",children:["1. ",(0,t.jsx)(n.code,{children:"interpolate-size: allow-keywords"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u662f",(0,t.jsx)(n.strong,{children:"\u6700\u7b80\u5355\u7684\u89e3\u6cd5"}),"\uff0c",(0,t.jsx)(n.code,{children:"transition"})," + ",(0,t.jsx)(n.code,{children:"height: auto"})," \u7684\u505a\u6cd5\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"auto"})," \u662f\u5173\u952e\u5b57\u800c\u975e\u6570\u503c\u56e0\u6b64\u65e0\u6cd5\u5b9e\u73b0\u52a8\u753b\uff0c\u4f46 ",(0,t.jsx)(n.code,{children:"calc-size"})," \u548c ",(0,t.jsx)(n.code,{children:"interpolate-size"})," \u7684\u51fa\u73b0\u6539\u53d8\u4e86\u8fd9\u4e00\u5207\u3002"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"calc-size"})," : \u7528\u6cd5\u4e0e ",(0,t.jsx)(n.code,{children:"calc"})," \u7c7b\u4f3c\uff0c\u53ef\u4ee5\u628a ",(0,t.jsx)(n.code,{children:"auto"})," \u7b49\u5173\u952e\u5b57\u5f53\u4f5c\u6570\u503c\u6765\u8ba1\u7b97\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"interpolate-size"})," : \u9ed8\u8ba4\u503c\u662f ",(0,t.jsx)(n.code,{children:"numeric-only"}),"\uff0c\u53ea\u5141\u8bb8\u6570\u503c\u4ea7\u751f\u8fc7\u6e21\u6548\u679c\uff0c\u4f46\u662f\u5f53\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(n.code,{children:"allow-keywords"}),"\uff0c\u5c31\u53ef\u4ee5\u7528\u5173\u952e\u5b57\u4ea7\u751f\u8fc7\u6e21\u6548\u679c\u4e86\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u8003\u8651\u5230\u517c\u5bb9\u6027\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"interpolate-size: allow-keywords"}),"\uff0c\u8fd9\u6837\u5c31\u7b97\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\uff0c\u4e5f\u53ea\u662f\u6ca1\u6709\u52a8\u753b\u6548\u679c\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u529f\u80fd\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b-1",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd9\u91cc\u4f7f\u7528\u4e86 jsx \u8bed\u6cd5\uff0c\u6240\u4ee5 ",(0,t.jsx)(n.code,{children:"interpolate-size"})," \u9700\u8981\u5199\u6210\u5c0f\u9a7c\u5cf0\u5f62\u5f0f ",(0,t.jsx)(n.code,{children:"interpolateSize"}),"\uff0c\u5982\u679c\u662f\u7eaf css \u5219\u4e0d\u9700\u8981\u8fd9\u6837\u3002"]}),"\n"]}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo1.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <div style={{padding: 10, backgroundColor: "lightgray", borderRadius: 5}}>\n      <button onClick={() => setOpen(!open)}>Toggle</button>\n      <div\n        style={{\n          // highlight-start\n          interpolateSize: "allow-keywords",\n          // highlight-end\n          transition: "height 0.3s ease",\n          overflow: "hidden",\n          height: open ? "auto" : 0,\n        }}\n      >\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus\n        sint iste at possimus quibusdam iusto accusantium et, itaque explicabo\n        laboriosam neque minima deleniti labore expedita magnam sequi dolorum,\n        debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex,\n        fuga inventore quas vitae aliquam aliquid modi aspernatur quis est\n        nesciunt molestiae.\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a-1",children:"\u6548\u679c\u6f14\u793a"}),"\n","\n",(0,t.jsx)(E,{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["\u663e\u7136\uff0c\u5728\u4e0d\u8003\u8651\u517c\u5bb9\u6027\u3001\u786e\u4fdd\u6d4f\u89c8\u5668\u4e00\u5b9a\u652f\u6301\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u662f\u6700\u7b80\u5355\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u53ea\u8981\u4e00\u884c\u4ee3\u7801\uff0c\u800c\u4e14\u7531\u4e8e ",(0,t.jsx)(n.code,{children:"interpolate-size"})," \u662f\u4e00\u4e2a\u53ef\u7ee7\u627f\u7684\u5c5e\u6027\uff0c\u6240\u4ee5\u5b8c\u5168\u53ef\u4ee5",(0,t.jsx)(n.strong,{children:"\u76f4\u63a5\u5728\u6839\u5143\u7d20\u4e0a\u8bbe\u7f6e"}),"\uff0c\u5168\u5c40\u751f\u6548\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u7136\uff0c\u8fd9\u4e00\u65b9\u6848\u7684\u7f3a\u70b9\u5c31\u662f",(0,t.jsx)(n.strong,{children:"\u517c\u5bb9\u6027"}),"\uff0c\u6bd4\u5982Chrome\u6d4f\u89c8\u5668\u662f\u4ece",(0,t.jsx)(n.strong,{children:"129\u7248\u672c"}),"\u624d\u5f00\u59cb\u652f\u6301\u7684\uff0c\u4f7f\u7528\u65f6\u4e00\u5b9a\u8981\u786e\u8ba4\u76ee\u6807\u6d4f\u89c8\u5668\u662f\u5426\u652f\u6301\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u60f3\u8981\u66f4\u597d\u7684\u517c\u5bb9\u6027\uff0c\u90a3\u4e48\u53ef\u4ee5\u8003\u8651\u4e0b\u9762\u7684\u65b9\u6cd5\u3002"}),"\n",(0,t.jsxs)(n.h2,{id:"2-grid-template-rows",children:["2. ",(0,t.jsx)(n.code,{children:"grid-template-rows"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u79cd\u65b9\u6cd5\u653e\u5f03\u4e86 ",(0,t.jsx)(n.code,{children:"height"})," \u5c5e\u6027\uff0c\u800c\u662f\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"grid"})," \u5e03\u5c40\u7684 ",(0,t.jsx)(n.code,{children:"fr"})," \u5355\u4f4d\u6765\u5b9e\u73b0\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5355\u4f4d ",(0,t.jsx)(n.code,{children:"fr"})," \u5b9a\u4e49\u4e86\u7f51\u683c\u8f68\u9053\u5927\u5c0f\u7684\u5f39\u6027\u7cfb\u6570\uff0c\u56e0\u6b64\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"grid-template-rows: {number}fr"})," \u5c31\u53ef\u4ee5\u907f\u514d ",(0,t.jsx)(n.code,{children:"auto"})," \u8fd9\u79cd\u5173\u952e\u5b57\uff0c\u652f\u6301\u8fc7\u6e21\u4e86\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u96f6\u9ad8\u5ea6\u65f6\u4e0d\u80fd\u5199\u6210 ",(0,t.jsx)(n.code,{children:"0"}),"\u3001",(0,t.jsx)(n.code,{children:"0px"}),"\u3001",(0,t.jsx)(n.code,{children:"0%"})," \u7b49\u5f62\u5f0f\uff0c\u5fc5\u987b\u5199 ",(0,t.jsx)(n.code,{children:"0fr"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u5fc5\u987b\u8981\u5bf9\u5b50\u5143\u7d20\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"min-height: 0"}),"\uff0c\u5426\u5219 ",(0,t.jsx)(n.code,{children:"0fr"})," \u65f6\u9ad8\u5ea6\u7531 grid \u6700\u5c0f\u5c3a\u5bf8\u51b3\u5b9a\uff0c\u65e0\u6cd5\u5b9e\u73b0\u6298\u53e0\u6548\u679c\u3002"]}),"\n"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b-2",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo2.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>\n      <button onClick={() => setOpen(!open)}>Toggle</button>\n      <div\n        style={{\n          transition: "grid-template-rows 0.3s ease",\n          overflow: "hidden",\n          // highlight-start\n          display: "grid",\n          gridTemplateRows: open ? "1fr" : "0fr",\n          // highlight-end\n        }}\n      >\n        // highlight-start\n        <div style={{ minHeight: 0 }}>\n        // highlight-end\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex\n          repellendus sint iste at possimus quibusdam iusto accusantium et,\n          itaque explicabo laboriosam neque minima deleniti labore expedita\n          magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium\n          consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi\n          aspernatur quis est nesciunt molestiae.\n        </div>\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a-2",children:"\u6548\u679c\u6f14\u793a"}),"\n","\n",(0,t.jsx)(R,{}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u65b9\u6848\u6bd4\u8d77 ",(0,t.jsx)(n.code,{children:"interpolate-size"})," \u7684\u517c\u5bb9\u6027\u9ad8\u4e00\u4e9b\uff0c\u4f46\u4ecd\u9700\u8981",(0,t.jsx)(n.strong,{children:"chrome\u7248\u672c>=107"}),"\u3002"]}),"\n",(0,t.jsxs)(n.h2,{id:"3-transform-scaley",children:["3. ",(0,t.jsx)(n.code,{children:"transform: scaleY"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e5f\u662f\u7eafCSS\u7684\u89e3\u51b3\u65b9\u6848\uff0c\u4e0e\u524d\u4e24\u79cd\u65b9\u6848\u76f8\u6bd4",(0,t.jsx)(n.strong,{children:"\u517c\u5bb9\u6027\u597d"}),"\uff0c\u4f46\u6709\u4e24\u4e2a\u5927\u95ee\u9898\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728",(0,t.jsx)(n.strong,{children:"\u9ad8\u5ea6\u53d8\u5316\u65f6\uff0c\u5143\u7d20\u7684\u5185\u5bb9\u4e5f\u4f1a\u88ab\u7f29\u653e\uff0c\u5bfc\u81f4\u5185\u5bb9\u53d8\u5f62"}),"\uff08\u770b\u8d77\u6765\u4e0d\u50cf\u662f\u6536\u8d77\u6548\u679c\uff0c\u5012\u50cf\u662f\u65e5\u5386\u90a3\u79cd\u7acb\u4f53\u7ffb\u8f6c\u7684\u6548\u679c\uff09"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4e0d\u4f1a\u771f\u6b63\u6539\u53d8\u5143\u7d20\u7684\u9ad8\u5ea6\uff0c\u53ea\u662f\u89c6\u89c9\u4e0a\u7684\u53d8\u5316\uff0c\u6240\u4ee5",(0,t.jsx)(n.strong,{children:"\u5143\u7d20\u7684\u9ad8\u5ea6\u5728\u53d8\u5316\u65f6\uff0c\u4f1a\u5360\u636e\u539f\u6765\u7684\u7a7a\u95f4"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b-3",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"transform-origin: top"})," \u662f\u4e3a\u4e86\u8ba9\u5143\u7d20\u4ece\u9876\u90e8\u5f00\u59cb\u6536\u8d77\uff0c\u5426\u5219\u9ed8\u8ba4\u662f\u4ece\u4e2d\u95f4\u6536\u8d77\u3002"]}),"\n"]}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo3.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>\n      <button onClick={() => setOpen(!open)}>Toggle</button>\n      <div\n        style={{\n          transition: "transform 0.3s ease",\n          overflow: "hidden",\n          // highlight-start\n          transform: open ? "scaleY(1)" : "scaleY(0)",\n          transformOrigin: "top",\n          // highlight-end\n        }}\n      >\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus\n        sint iste at possimus quibusdam iusto accusantium et, itaque explicabo\n        laboriosam neque minima deleniti labore expedita magnam sequi dolorum,\n        debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex,\n        fuga inventore quas vitae aliquam aliquid modi aspernatur quis est\n        nesciunt molestiae.\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a-3",children:"\u6548\u679c\u6f14\u793a"}),"\n",(0,t.jsx)(n.p,{children:"\u867d\u7136\u4ea7\u751f\u4e86\u6536\u8d77\u7684\u52a8\u753b\u6548\u679c\uff0c\u4f46\u5185\u5bb9\u6709\u53d8\u5f62\u3001\u4e14\u6536\u8d77\u540e\u7559\u4e0b\u4e86\u4e00\u5757\u7a7a\u767d\u533a\u57df\uff08\u56e0\u4e3a\u5143\u7d20\u7684\u9ad8\u5ea6\u5e76\u6ca1\u6709\u771f\u6b63\u53d8\u5316\uff09\u3002"}),"\n","\n",(0,t.jsx)(T,{}),"\n",(0,t.jsxs)(n.h2,{id:"4-max-height",children:["4. ",(0,t.jsx)(n.code,{children:"max-height"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u8fd9\u4e2a\u65b9\u6848\u548c ",(0,t.jsx)(n.code,{children:"transform"})," \u65b9\u6848\u7c7b\u4f3c\uff0c\u4e5f\u662f \u7eafCSS\u3001\u517c\u5bb9\u6027\u597d\uff0c\u4f46\u662f\u4f1a\u6709\u4e00\u4e9b\u95ee\u9898\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u7b80\u5355\u6765\u8bf4\uff0c\u6536\u8d77\u65f6\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"max-height: 0"}),"\uff0c\u5c55\u5f00\u65f6\u8bbe\u7f6e ",(0,t.jsx)(n.code,{children:"max-height: 1000px"}),"\uff08\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u503c\uff09\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u5b9e\u73b0\u6536\u8d77\u5c55\u5f00\u7684\u6548\u679c\uff0c\u76f8\u6bd4\u4e0a\u4e00\u4e2a\u65b9\u6848\uff0c\u5185\u5bb9\u4e0d\u4f1a\u53d8\u5f62\u3001\u4e5f\u662f\u771f\u6b63\u5730\u6539\u53d8\u4e86\u5143\u7d20\u7684\u9ad8\u5ea6\uff0c\u4f46\u5e26\u6765\u4e86\u65b0\u7684\u95ee\u9898\uff1a"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5c55\u5f00\u65f6 ",(0,t.jsx)(n.code,{children:"max-height"})," \u8981\u8bbe\u7f6e\u4e00\u4e2a\u8db3\u591f\u5927\u7684\u503c\uff0c\u4f46\u591a\u5927\u7b97\u201c\u8db3\u591f\u5927\u201d\u5462\uff1f\u8fd9\u4e2a\u503c\u80af\u5b9a\u4e0d\u80fd\u8bbe\u5c0f\u4e86\uff0c\u4f46\u5982\u679c\u4f60\u60f3\u4e00\u52b3\u6c38\u9038\uff0c\u8bbe\u7f6e\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"9999999px"})," \u4e4b\u7c7b\u7684\uff0c\u90a3\u786e\u5b9e\u201c\u8db3\u591f\u5927\u201d\u4e86\uff0c\u4f46\u522b\u5fd8\u4e86\uff0c\u8fd9\u79cd\u65b9\u6848\u4e0b\u8fc7\u6e21\u52a8\u753b\u662f\u7531 ",(0,t.jsx)(n.code,{children:"max-height"})," \u63a7\u5236\u7684\u2014\u2014"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6211\u4eec\u628a ",(0,t.jsx)(n.code,{children:"max-height"})," \u5728\u8fc7\u6e21\u52a8\u753b\u8fc7\u7a0b\u4e2d\u5206\u4e3a\u4e09\u4e2a\u65f6\u671f\uff1a"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u5927\u4e8e\u7b49\u4e8e\u771f\u5b9e\u9ad8\u5ea6\uff08\u5bf9\u5143\u7d20\u663e\u793a\u9ad8\u5ea6\u65e0\u5f71\u54cd\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u5c0f\u4e8e\u771f\u5b9e\u9ad8\u5ea6\uff08\u5f71\u54cd\u5143\u7d20\u7684\u663e\u793a\u9ad8\u5ea6\uff09"}),"\n",(0,t.jsx)(n.li,{children:"\u96f6\uff08\u5143\u7d20\u9690\u85cf\uff09"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c ",(0,t.jsx)(n.code,{children:"max-height"})," \u7684\u503c\u592a\u5927\uff0c\u90a3\u4e48\u5c31\u4f1a\u6709\u4e00\u4e2a\u5f88\u957f\u7684\u65f6\u95f4\u6bb5\uff0c\u5904\u5728\u201c\u5927\u4e8e\u7b49\u4e8e\u771f\u5b9e\u9ad8\u5ea6\u201d\u8fd9\u4e00\u65f6\u671f\uff0c\u5728\u7528\u6237\u770b\u6765\uff0c\u8fd9\u4e2a\u65f6\u5019\u52a8\u753b\u662f\u505c\u6ede\u7684\uff0c\u76f4\u5230\u8fdb\u5165\u4e86\u201c\u5c0f\u4e8e\u771f\u5b9e\u9ad8\u5ea6\u201d\u65f6\u671f\uff0c\u52a8\u753b\u624d\u4f1a\u7ee7\u7eed\u8fdb\u884c\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e5f\u5c31\u662f\u8bf4\uff0c",(0,t.jsx)(n.strong,{children:"\u52a8\u753b\u7684\u5f00\u59cb\u6216\u7ed3\u675f\u662f\u6709\u505c\u987f\u65f6\u95f4\u7684"}),"\uff0c\u8fd9\u4e2a\u505c\u987f\u7684\u65f6\u95f4\u53d6\u51b3\u4e8e ",(0,t.jsx)(n.code,{children:"max-height"})," \u7684\u503c\uff0c\u8fd9\u4e2a\u503c\u4e0d\u80fd\u592a\u5927\uff0c\u4e5f\u4e0d\u80fd\u592a\u5c0f\uff0c\u8981\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u6765\u8c03\u6574\uff0c\u8fd9\u5c31\u662f\u8fd9\u4e2a\u65b9\u6848\u7684\u7f3a\u70b9\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b-4",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo4.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react";\n\nexport default () => {\n  const [open, setOpen] = useState(true);\n\n  return (\n    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>\n      <button onClick={() => setOpen(!open)}>Toggle</button>\n      <div\n        style={{\n          transition: "max-height 0.3s ease",\n          overflow: "hidden",\n          // highlight-start\n          maxHeight: open ? 1000 : 0,\n          // highlight-end\n        }}\n      >\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus\n        sint iste at possimus quibusdam iusto accusantium et, itaque explicabo\n        laboriosam neque minima deleniti labore expedita magnam sequi dolorum,\n        debitis modi nulla. Aliquid ipsum laudantium consectetur labore? Ex,\n        fuga inventore quas vitae aliquam aliquid modi aspernatur quis est\n        nesciunt molestiae.\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a-4",children:"\u6548\u679c\u6f14\u793a"}),"\n",(0,t.jsx)(n.p,{children:"\u80fd\u660e\u663e\u611f\u89c9\u5230\u6536\u8d77\u52a8\u753b\u5f00\u59cb\u65f6\u6709\u5ef6\u8fdf\uff0c\u5c55\u5f00\u52a8\u753b\u5219\u662f\u901f\u5ea6\u5f88\u5feb\uff08\u56e0\u4e3a\u7ed3\u675f\u540e\u505c\u987f\u65f6\u95f4\u7684\u5b58\u5728\u4f7f\u5b9e\u9645\u7684\u9ad8\u5ea6\u53d8\u5316\u65f6\u95f4\u88ab\u6324\u538b\u5f97\u66f4\u77ed\u4e86\uff09\u3002"}),"\n","\n",(0,t.jsx)(A,{}),"\n",(0,t.jsx)(n.h2,{id:"5-\u653e\u5f03\u7eaf-css\u7528-js-\u8f85\u52a9\u5b9e\u73b0",children:"5. \u653e\u5f03\u7eaf css\uff0c\u7528 js \u8f85\u52a9\u5b9e\u73b0"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u4f20\u7edf\u3001\u6700\u76f4\u63a5\u3001\u517c\u5bb9\u6027\u597d\u3001\u89c6\u89c9\u6548\u679c\u65e0\u7f3a\u9677\u7684\u6700\u7ec8\u89e3\u51b3\u65b9\u6848\uff1a"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u653e\u5f03\u201c\u7eafCSS\u5b9e\u73b0\u201d\u7684\u575a\u6301\uff0c\u7528js\u6765\u5b9e\u73b0\u3002"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u4e2a\u65b9\u6848\u7684\u7f3a\u70b9\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u9700\u8981\u7528 JS \u83b7\u53d6\u5143\u7d20\u7684\u771f\u5b9e\u9ad8\u5ea6\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u4e00\u6b21 reflow","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f46\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0c\u4ec5\u4ec5\u662f\u5728\u6536\u8d77\u6216\u5c55\u5f00\u7684\u65f6\u5019\u89e6\u53d1\u4e00\u6b21\uff0c\u5bf9\u6027\u80fd\u7684\u5f71\u54cd\u53ef\u4ee5\u8bf4\u5fae\u4e4e\u5176\u5fae"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5b9e\u73b0\u8d77\u6765\u7a0d\u5fae\u9ebb\u70e6\u4e00\u70b9","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e0d\u8fc7\u5176\u5b9e\u4e5f\u6ca1\u591a\u51e0\u884c\u4ee3\u7801"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.del,{children:"\u653e\u5f03\u4e86\u201c\u7eafCSS\u5b9e\u73b0\u201d\u7684\u575a\u6301\uff0c\u5bf9\u6211\u8fd9\u4e2a\u5f3a\u8feb\u75c7\u6765\u8bf4\u592a\u5c48\u8fb1\u4e86"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8bdd\u867d\u5982\u6b64\uff0c\u6211\u6700\u540e\u7528\u7684\u8fd8\u662f\u8fd9\u4e2a\u65b9\u6848\uff0c\u56e0\u4e3a\u516c\u53f8\u9879\u76ee\u662f\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u4e0a\u7684 ",(0,t.jsx)(n.code,{children:"Taro"})," \u9879\u76ee\uff0c\u5728\u4fdd\u8bc1\u89c6\u89c9\u6548\u679c\u7684\u524d\u63d0\u4e0b\uff0c\u8fd9\u4e2a\u65b9\u6848\u786e\u5b9e\u662f\u517c\u5bb9\u6027\u6700\u597d\u7684\u2026\u2026"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4ee3\u7801\u793a\u4f8b-5",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u8fd9\u91cc\u4f7f\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"useRef"})," \u6765\u83b7\u53d6\u5143\u7d20\u7684\u771f\u5b9e\u9ad8\u5ea6\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u7528 ",(0,t.jsx)(n.code,{children:"document.getElementById"})," \u7b49\u65b9\u6cd5\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:["\u5982\u679c\u5185\u5bb9\u7684\u9ad8\u5ea6\u662f\u52a8\u6001\u53d8\u5316\u7684\uff0c\u53ef\u4ee5\u7528 ",(0,t.jsx)(n.code,{children:"ResizeObserver"})," \u6765\u76d1\u542c\u9ad8\u5ea6\u53d8\u5316\u3002\u8fd9\u91cc\u4e3a\u4e86\u7b80\u5355\uff0c\u5c31\u9ed8\u8ba4\u5185\u5bb9\u9ad8\u5ea6\u4e0d\u53d8\u4e86\u3002"]}),"\n"]})}),"\n",(0,t.jsx)(w,{children:(0,t.jsx)(C,{value:"Demo5.tsx",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'import { useEffect, useRef, useState } from "react";\n\nexport default () => {\n  const wrapperRef = useRef<HTMLDivElement>(null);\n  const open = useRef(true);\n  const [height, setHeight] = useState<number>();\n\n  const handleToggle = () => {\n    if (open.current) {\n      setHeight(0);\n    } else if (wrapperRef.current) {\n      // highlight-start\n      // \u8bbe\u7f6e\u5916\u90e8\u5bb9\u5668\u9ad8\u5ea6\u4e3a\u5185\u5bb9\u9ad8\u5ea6\n      const rect = wrapperRef.current.getBoundingClientRect();\n      setHeight(rect.height);\n      // highlight-end\n    }\n    open.current = !open.current;\n  };\n\n  useEffect(() => {\n    if (!wrapperRef.current) {\n      return;\n    }\n    // highlight-start\n    // \u521d\u59cb\u5316\u65f6\u83b7\u53d6\u4e00\u4e0b\u5185\u5bb9\u9ad8\u5ea6\uff0c\u5426\u5219\u7b2c\u4e00\u6b21\u70b9\u51fb\u6536\u8d77\u7684\u65f6\u5019\u6ca1\u6709\u52a8\u753b\u6548\u679c\uff08\u5982\u679c\u613f\u610f\u521d\u59cb\u4e3a\u6536\u8d77\u72b6\u6001\uff0c\u8bbe\u7f6e\u9ad8\u5ea6\u521d\u503c\u4e3a0\u4e5f\u53ef\uff09\n    const rect = wrapperRef.current.getBoundingClientRect();\n    setHeight(rect.height);\n    // highlight-end\n  }, []);\n\n  return (\n    <div style={{ padding: 10, backgroundColor: "lightgray", borderRadius: 5 }}>\n      <button onClick={handleToggle}>Toggle</button>\n      <div\n        style={{\n          transition: "height 0.3s ease",\n          overflow: "hidden",\n          // highlight-next-line\n          height: height,\n        }}\n      >\n        <div ref={wrapperRef}>\n          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex\n          repellendus sint iste at possimus quibusdam iusto accusantium et,\n          itaque explicabo laboriosam neque minima deleniti labore expedita\n          magnam sequi dolorum, debitis modi nulla. Aliquid ipsum laudantium\n          consectetur labore? Ex, fuga inventore quas vitae aliquam aliquid modi\n          aspernatur quis est nesciunt molestiae.\n        </div>\n      </div>\n    </div>\n  );\n};\n'})})})}),"\n",(0,t.jsx)(n.h3,{id:"\u6548\u679c\u6f14\u793a-5",children:"\u6548\u679c\u6f14\u793a"}),"\n","\n",(0,t.jsx)(I,{})]})}function _(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(O,{...e})}):O(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(6540);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);