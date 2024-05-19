"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{66186:function(e,t,n){n.d(t,{m:function(){return FeatureButton}});var s=n(85893);n(67294);var r=n(41664),a=n.n(r);function FeatureButton(e){let{url:t,message:n}=e;return(0,s.jsx)(a(),{href:t,rel:"noreferrer",target:"_blank",children:(0,s.jsxs)("button",{type:"button",className:"btn btn-no-border btn-sm mb-0 mt-1 px-0 py-2 ms-n2 lift rounded-1",children:[(0,s.jsx)("i",{className:"fe fe-navigation m-2"})," ".concat(n," ")]})})}},21746:function(e,t,n){n.d(t,{Z:function(){return P}});var s=n(85893),r=n(28965),a=n(66261),l=n(67294),o=n(38323),i=n(82010),c=n(30399),d=n(11319),u=n(29758),h=n(635),m=n(81829),p=n(51245);let g={strict:!1,output:"mathml"};function FootnoteLink(e){let{href:t="",children:n,...r}=e,{theme:a,setTheme:l,resolvedTheme:o}=(0,i.F)(),c="#555",d="#d6d6d6";if("object"==typeof n&&null!==n&&Array.isArray(n)&&n.length>0){let e=n[0];if(Number.isInteger(Number(e))||Number.isInteger(Number(e.substring(1,e.length-1))))return(0,s.jsx)("sup",{children:(0,s.jsx)("a",{href:t,target:"_blank",className:"me-1",rel:"noopener noreferrer",style:"dark"===o?{display:"inline-block",borderRadius:"50%",backgroundColor:"#555",color:"#fff",width:"15px",height:"15px",textAlign:"center",textDecoration:"none",lineHeight:"15px",fontSize:"0.80em",fontWeight:"bold"}:{display:"inline-block",borderRadius:"50%",backgroundColor:"#d6d6d6",color:"#333",width:"15px",height:"15px",textAlign:"center",textDecoration:"none",lineHeight:"15px",fontSize:"0.80em",fontWeight:"bold"},onMouseOver:e=>{let t="#888";return e.currentTarget.style.backgroundColor=t,t},onMouseOut:e=>{let t="dark"===o?c:d;return e.currentTarget.style.backgroundColor=t,t},onFocus:e=>{let t="#888";return e.currentTarget.style.backgroundColor=t,t},onBlur:e=>{let t="dark"===o?c:d;return e.currentTarget.style.backgroundColor=t,t},children:Number(e)+1})})}return(0,s.jsx)("a",{href:t,...r,children:n})}function MarkdownChunk(e){let{markdown:t,showRunInCodeMode:n,performMagicEdit:r,isLoggedIn:a,isValidProPlan:l}=e,{theme:p,setTheme:x,resolvedTheme:f}=(0,i.F)(),b={backgroundColor:m.BY,padding:"3px",borderRadius:"8px",color:"white",cursor:"pointer"},j={backgroundColor:"white",padding:"3px",borderRadius:"8px",color:"black",cursor:"pointer"};return(0,s.jsx)(o.D,{remarkPlugins:[c.Z,u.Z],rehypePlugins:[d.Z,[d.Z,g]],className:"fs-5",components:{p:e=>{let{node:t,...n}=e;return(0,s.jsx)("p",{className:"text-black mb-2 text-break",...n})},ul:e=>{let{node:t,...n}=e,r={...n,ordered:"false"};return(0,s.jsx)("ul",{className:"mb-3",...r})},ol:e=>{let{node:t,...n}=e,r={...n,ordered:"true"};return(0,s.jsx)("ol",{className:"mb-2",...r})},a:FootnoteLink,code(e){let{node:t,inline:o,className:i,children:c,style:d,...u}=e;return o?(0,s.jsx)("code",{onClick:()=>{navigator.clipboard.writeText(String(c))},className:i,style:"dark"===f?j:b,...u,children:c}):(0,s.jsx)(h.Z,{highlighterProps:u,url:"",className:i,showRunInCodeMode:n,performMagicEdit:r,isLoggedIn:a,isValidProPlan:l,children:String(c)})}},children:t})}let x=(0,l.memo)(MarkdownChunk);function AnswerMarkdown(e){let{answerText:t,question:n,showRunInCodeMode:r,performMagicEdit:a,webResults:o,citedWebResults:i,setCitedWebResults:c,isLoggedIn:d,isValidProPlan:u}=e;return(0,s.jsx)("div",{children:((e,t,n,o)=>{if(!e)return null;let i=null==n?void 0:n.map(e=>e.url),h=e;if(i&&(h=(0,p.Yg)(h,i)),n&&o){let e=[];for(let t=0;t<n.length;t+=1)h.includes("[".concat(t,"]"))&&n&&e.push(n[t]);let t=/\[([^\]]+)\]\(([^\)]+)\)/g,s=[],r=t.exec(h);for(;null!==r;)s.push({title:r[1],url:r[2]}),r=t.exec(h);s=s.filter((e,t,n)=>n.findIndex(t=>t.url===e.url)===t);for(let t=0;t<s.length;t+=1){let r=s[t];if(r&&n)for(let t=0;t<n.length;t+=1){let{url:s}=r;if(n[t]&&n[t].url===s){let r=!0;for(let t=0;t<e.length;t+=1)e[t].url===s&&(r=!1);r&&e.push(n[t])}}}let a=!0;for(let t=0;t<n.length;t+=1)o.length>0&&o.length===e.length&&(a=!1),0===e.length&&(a=!1);h=h.replace(/(\[\d+\])+/g,(t,s)=>{if(e.length>0){var r;let t=parseInt(s.replace(/\D/g,""),10),a=null===(r=n[t])||void 0===r?void 0:r.url,l=e.findIndex(e=>e.url===a);return"[".concat(l,"]")}return t}),a&&n&&n.length>0&&(0,l.useEffect)(()=>{c(t=>[...e])},[e]),h=h.replace(p.V7,(t,s)=>{if(n){var r;let t=null===(r=n[s])||void 0===r?void 0:r.url,a=null==e?void 0:e.findIndex(e=>e.url===t);return-1===a&&(a=o.length),"".concat(a)}return""})}let m=h.split("```"),g=Math.floor(m.length/2);return m.map((t,n)=>n%2!=0?(0,s.jsx)(x,{markdown:"```".concat(t,"```"),showRunInCodeMode:r,isLoggedIn:d,performMagicEdit:a?t=>1===g?a(e):a(t):void 0,isValidProPlan:u},n):t.trimStart().split("\n\n").map((e,t)=>(0,s.jsx)(x,{markdown:e,showRunInCodeMode:r,isLoggedIn:d,isValidProPlan:u},e)))})(t,0,o,i)})}MarkdownChunk.defaultProps={performMagicEdit:void 0},AnswerMarkdown.defaultProps={webResults:[],citedWebResults:[],setCitedWebResults:()=>{},performMagicEdit:void 0},FootnoteLink.defaultProps={href:""};var f=n(7907),b=n(48794),j=n(66186),w=n(20592),v=n(14258),y=n(93333),k=n(60117),C=n(13662),N=n(11940),S=(0,l.memo)(function(e){let{regenerateAnswer:t,answerIndex:n,requestsLeftForGPT4:r,requestsLeftForPhind70B:a,requestsLeftForClaude:o,session:i}=e,{paymentPlanData:{paymentPlan:c},pendingData:d}=(0,N.$)(),u=i&&r>0,h="Enterprise"===c&&!d,m=i&&o>0,p=a>0,[g,x]=(0,l.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.Z,{message:"Regenerate Answer",children:(0,s.jsx)("i",{className:"fe fe-refresh-cw me-4 dropdown dropdown-toggle",style:{cursor:"pointer",fontSize:"16px"},"data-bs-toggle":"dropdown","aria-expanded":"false"})}),(0,s.jsx)(k.Z,{title:g,setTitle:x}),(0,s.jsxs)("ul",{className:"dropdown-menu container",style:{width:"auto",maxWidth:"none"},children:[(0,s.jsx)("h6",{className:"dtopdown-header text-uppercase",children:" Rewrite answer "}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"dropdown-item",type:"button",onClick:()=>{t(n,"Phind Instant")},children:"Phind Instant"})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"dropdown-item",type:"button",onClick:()=>{p?t(n,"Phind-70B"):x(y.n3)},children:(0,s.jsxs)("div",{children:["Phind-70B",(0,s.jsx)("sub",{style:{fontSize:"11px"},className:"ms-1",children:a>=1e3?"":0===a?"Phind Pro":"".concat(a," left")})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"dropdown-item",type:"button",onClick:()=>{u?t(n,"GPT-4"):x(y.n3)},children:(0,s.jsxs)("div",{children:["GPT-4",(0,s.jsx)("sub",{style:{fontSize:"11px"},className:"ms-1",children:0===r?"Phind Pro":"".concat(r," left")})]})})}),(0,s.jsx)("li",{children:(0,s.jsx)("button",{className:"dropdown-item",type:"button",disabled:h,onClick:()=>{m?t(n,"Claude Opus"):x(y.n3)},children:(0,s.jsxs)("div",{children:["Claude Opus",h?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("br",{}),(0,s.jsx)("sub",{style:{fontSize:"11px",width:"auto",maxWidth:"none"},className:"ms-1",children:"Disabled for enterprise users to guarantee data privacy."})]}):(0,s.jsx)("sub",{style:{fontSize:"11px"},className:"ms-1",children:0===o?"Phind Pro":"".concat(o," left")})]})})}),(0,s.jsx)("li",{children:(0,s.jsxs)("p",{className:"dropdown-item fs-6 text-primary mt-2 mb-0 text-break",children:["Uses refresh in"," ",(0,C.u2)()]})})]})]})});function MessageCard(e){var t,n,o,i,c,d;let u;let{message:h,index:p,isLast:g,handleUserInput:x,pinnedMessages:y,setPinnedMessages:k,setContinueFromMessageIndex:C,continueFromMessageIndex:N,answerModel:P,requestsLeftForGPT4:I,requestsLeftForPhind70B:M,requestsLeftForClaude:A,session:T,regenerateAnswer:R,editAnswer:F,hideContinueFromButton:B,hidePinButton:E,hideRegnerateButton:O,hideEditQuestionButton:L,showRunInCodeMode:_,isLoggedIn:Z,isValidProPlan:q,performMagicEdit:U}=e,G="formatId"in h,W=G?null:h.functionCall,z=!0;((null==W?void 0:W.name)==="START_TASK"||"START_TASK"===h.name||"skip"===h.content)&&(z=!1);let D="function"===h.role&&h.name&&!["SEARCH","ASK_USER","SOLVE","START_TASK"].includes(h.name),[V,H]=(0,l.useState)(!0),[K,Q]=(0,l.useState)([]),[Y,J]=(0,l.useState)(!1),[$,X]=(0,l.useState)(!1),ee=(0,r.Z)((null==W?void 0:W.arguments)||""),et=[];try{et=Object.entries(JSON.parse(ee))}catch(e){}let en="user"===h.role||"ASK_USER"===h.name?"User":"Phind",es=null===(t=h.metadata)||void 0===t?void 0:t.answerModel,[er,ea]=(0,l.useState)(!1),[el,eo]=(0,l.useState)(!1),[ei,ec]=(0,l.useState)(!1),[ed,eu]=(0,l.useState)(null),eh="user"===h.role&&(null!==(d=null==h?void 0:null===(n=h.content)||void 0===n?void 0:n.length)&&void 0!==d?d:0)>=m.jx,em=(0,s.jsxs)("button",{className:"btn btn-no-border btn-sm ms-n1 mb-3 p-0 lift",onClick:()=>{x("skip")},type:"button",children:[(0,s.jsx)("i",{className:"fe fe-chevrons-right"})," ","Skip"]}),[ep,eg]=(0,l.useState)([]);"SEARCH"===h.name&&ep&&ep.length>0&&(u=(0,s.jsxs)("div",{className:"mb-2",children:[(0,s.jsx)("hr",{className:"separator"}),ep.map((e,t)=>(0,s.jsx)(f.Z,{openLinksInNewTab:!0,index:t,webResult:e,pageIndex:0},"web-result-".concat(e.url)))]},"web-answer-".concat(p)));let ex=null!==h&&null!==h.content,ef=ex&&G&&1===h.formatId?h.content.map(e=>"string"===e.type?e.value:"<fn_call>".concat(JSON.stringify(e),"</fn_call>")).join(""):null,eb=ex&&(!G||0===h.formatId)?h.content:null,ej=null!=eb?eb:ef,ew=null!=ej?ej:"",handleClickFeedback=(e,t)=>{ed||(b.n.track("Agent Feedback",{helpful:t,message:h}),eu(t))},handleClickCopy=()=>{var e,t,n,s;G&&1===h.formatId?navigator.clipboard.writeText(null!==(t=null===(e=h.content)||void 0===e?void 0:e.map(e=>"string"===e.type?e.value:"").join("\n"))&&void 0!==t?t:""):navigator.clipboard.writeText(null!==(n=h.content)&&void 0!==n?n:""),ec(!0),b.n.track("Copy Answer",{message:null!==(s=h.content)&&void 0!==s?s:""}),setTimeout(()=>{ec(!1)},2e3)};return(0,s.jsx)("div",{children:z&&(0,s.jsx)(a.W_,{name:"answer-".concat(p),className:"row mt-4 mb-4",children:(0,s.jsx)("div",{className:"col",children:(0,s.jsxs)("div",{onMouseOver:()=>{eo(!0)},onFocus:()=>{eo(!0)},onMouseOut:()=>{eo(!1)},onBlur:()=>{eo(!1)},children:[D&&(0,s.jsxs)("div",{className:"position-absolute end-0 top-0 p-1 m-2 fs-6",style:{cursor:"pointer"},onClick:()=>H(e=>!e),children:["VSCode System Output",(0,s.jsx)("i",{className:"fe m-1 ".concat(V?"fe-chevron-down":"fe-chevron-up")})]}),(0,s.jsx)("div",{style:{paddingTop:"0px",paddingLeft:"0px",paddingRight:"0px",paddingBottom:"1px"},children:(!D||!V)&&(0,s.jsxs)(s.Fragment,{children:[eh&&(0,s.jsx)("div",{className:"m-0 p-0",children:(0,s.jsx)(j.m,{url:m.WW,message:m.Zd},m.WW)}),(0,s.jsxs)("span",{className:"User"===en?"badge bg-secondary mb-2":"badge bg-primary mb-2",onMouseOver:()=>{ea(!0)},onMouseOut:()=>{ea(!1)},onFocus:()=>{ea(!0)},onBlur:()=>{ea(!1)},children:[en,er&&es&&(0,s.jsxs)(s.Fragment,{children:[" | ",es]})]}),(0,s.jsx)("span",{className:"badge bg-primary-soft mb-2 mx-1",children:null==W?void 0:W.name.replace("_"," ")}),"user"===h.role&&(Y?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(v.Z,{placeholder:"Edit your question.",initialQuestionFromCache:null!=ew?ew:"",defaultNumRowsToShow:2,answerModel:P,customSearchHandler:(e,t)=>{ec(!1),J(!1);let n="".concat(e,"\n").concat(t);F(p,n)}}),(0,s.jsx)("button",{className:"btn btn-no-border lift ms-n2 btn-sm py-0",type:"button",onClick:()=>{J(!1)},children:"Cancel"})]}):(0,s.jsxs)("div",{tabIndex:0,onMouseOver:()=>{X(!0)},onMouseOut:()=>{X(!1)},onFocus:()=>{X(!0)},onBlur:()=>{X(!1)},children:[(0,s.jsx)("span",{className:ew.length>2e3?"fs-6 mb-0 font-monospace":"fs-5 mb-0",style:{wordWrap:"break-word",overflowWrap:"break-word"},children:ew.split("\n").map((e,t,n)=>(0,s.jsxs)(l.Fragment,{children:[e.replace(/ /g,"\xa0").replace(/\t/g," "),t!==n.length-1&&(0,s.jsx)("br",{})]},"".concat(e)))}),!L&&(0,s.jsx)("div",{className:"position-absolute bottom-0",children:(0,s.jsx)("button",{className:"btn btn-no-border lift btn-sm ps-0 pt-1 m-0 border-0",type:"button",style:{display:$?"block":"none"},onClick:()=>{b.n.track("Edit Question",{message:h}),J(!0)},children:"Edit Question"})})]})),"user"!==h.role&&(G&&1===h.formatId?null===(o=h.content)||void 0===o?void 0:o.map((e,t)=>{if("string"===e.type)return(0,s.jsx)(AnswerMarkdown,{answerText:e.value,question:"",showRunInCodeMode:_||!1,performMagicEdit:U,isLoggedIn:Z,isValidProPlan:q},"".concat(e.value,":").concat(t));if("function_call"===e.type){var n,r;let a=(null===(n=h.content)||void 0===n?void 0:n.length)===t+1,l=!K.includes(t);return(0,s.jsxs)("div",{style:{cursor:"pointer"},onClick:()=>{l?Q([...K,t]):Q(K.filter(e=>e!==t))},children:[(0,s.jsxs)("h6",{className:"text-uppercase text-muted",children:[(0,s.jsx)("i",{className:"fe fe-chevron-".concat(l?"right":"down")})," ",a?"Running code...":"Ran code"]}),!l&&(0,s.jsx)("div",{className:"bg-dark text-light rounded-1 mb-4",style:{width:"100%",overflowX:"auto",maxWidth:"100%"},children:(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{verticalAlign:"top"},className:"px-5 pt-3",children:(0,s.jsx)("b",{children:"Name"})}),(0,s.jsx)("td",{className:"pt-3",children:(0,s.jsx)("pre",{style:{whiteSpace:"normal"},children:e.function_call.name})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{verticalAlign:"top"},className:"px-5",children:(0,s.jsx)("b",{children:"Args"})}),(0,s.jsx)("td",{children:(0,s.jsx)("pre",{style:{whiteSpace:"normal"},children:e.function_call.args})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{style:{verticalAlign:"top"},className:"px-5",children:(0,s.jsx)("b",{children:"Output"})}),(0,s.jsx)("td",{children:(0,s.jsx)("pre",{style:{whiteSpace:"normal"},children:null!==(r=e.output)&&void 0!==r?r:"(No output)"})})]})]})})})]},"".concat(JSON.stringify(e.function_call),":").concat(t))}return"<error>"}):(0,s.jsx)(AnswerMarkdown,{answerText:ew,question:"",webResults:(null===(c=h.metadata)||void 0===c?void 0:null===(i=c.webResults)||void 0===i?void 0:i.length)>0?h.metadata.webResults:void 0,citedWebResults:ep,setCitedWebResults:eg,performMagicEdit:U,showRunInCodeMode:_||!1,isLoggedIn:Z,isValidProPlan:q})),(0,s.jsx)("div",{className:"mb-2",children:et.map(e=>{let[t,n]=e;return"suggested_followup_questions"!==t?(0,s.jsxs)("p",{className:"card-text my-0 fs-5 text-black",children:[(0,s.jsx)("strong",{children:"query"===t||"second_query"===t?(0,s.jsx)("i",{className:"fe fe-search"}):"".concat(t.replaceAll("_"," "),":")})," ","string"==typeof n?n:JSON.stringify(n)]},t):(0,s.jsxs)("p",{className:"card-text mb-4 fs-5 text-black",children:[(0,s.jsxs)("strong",{children:[t.replaceAll("_"," "),":"]}),(0,s.jsx)("br",{}),n.map(e=>(0,s.jsx)("button",{className:"btn btn-light-card btn-sm m-1 text-wrap text-start",type:"button",onClick:()=>{x(e),b.n.track("Suggested Followup Question",{question:e})},children:e},e))]},t)})}),(0,s.jsx)("div",{className:"position-absolute bottom-0",children:el&&"user"!==h.role&&(0,s.jsxs)(s.Fragment,{children:[g&&!O&&(0,s.jsx)(S,{regenerateAnswer:(e,t)=>{ec(!1),R(e,t)},answerIndex:p,requestsLeftForGPT4:I,requestsLeftForPhind70B:M,requestsLeftForClaude:A,session:T}),!1!==ed&&(0,s.jsx)(w.Z,{message:"Good Answer",children:(0,s.jsx)("i",{className:"fe fe-thumbs-up ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:e=>handleClickFeedback(e,!0)})}),!0!==ed&&(0,s.jsx)(w.Z,{message:"Bad Answer",children:(0,s.jsx)("i",{className:"fe fe-thumbs-down ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:e=>handleClickFeedback(e,!1)})}),ei?(0,s.jsx)("i",{className:"fe fe-check text-success ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>handleClickCopy()}):(0,s.jsx)(w.Z,{message:"Copy Message",children:(0,s.jsx)("i",{className:"fe fe-copy ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>handleClickCopy()})}),!E&&(-1===y.indexOf(p)?(0,s.jsx)(w.Z,{message:"Have the LLM prioritze this message in its answer.",children:(0,s.jsx)("i",{className:"fe fe-star ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>{b.n.track("Pin Message",{message:h,index:p}),k(e=>[...e,p])}})}):(0,s.jsx)(w.Z,{message:"Unpin this message.",children:(0,s.jsx)("i",{className:"fe fe-star text-warning ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>k(e=>e.filter(e=>e!==p))})})),!B&&(0,s.jsx)(w.Z,{message:"Continue from this message",children:N===p?(0,s.jsx)("i",{className:"fe fe-corner-down-left text-primary ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>{C(-1)}}):(0,s.jsx)("i",{className:"fe fe-corner-down-left ms-0 me-4",style:{cursor:"pointer",fontSize:"16px"},onClick:()=>{b.n.track("Continue From Message",{message:h,index:p}),C(p)}})})]})}),(null==W?void 0:W.name)==="ASK_USER"&&g&&em,"SEARCH"===h.name&&ep&&ep.length>0&&u]})}),(0,s.jsx)("div",{className:(h.role,"p-3"),style:{borderRadius:"50%"}})]})})},p)},"div-".concat(h))}MessageCard.defaultProps={hidePinButton:!1,hideContinueFromButton:!1,hideRegnerateButton:!1,hideEditQuestionButton:!1,showRunInCodeMode:!1,performMagicEdit:void 0};var P=(0,l.memo)(MessageCard)},99396:function(e,t,n){n.r(t),n.d(t,{__N_SSP:function(){return F},formatMessagesForBackend:function(){return formatMessagesForBackend}});var s=n(85893),r=n(64487),a=n(41664),l=n.n(a),o=n(11163),i=n(33299),c=n(67294),d=n(66261),u=n(76812),h=n(9008),m=n.n(h),p=n(92981),g=n(12023),x=n(21719),f=n(97910),b=n(14258),j=n(20592),w=n(81829),v=n(53703),y=n(48794),k=n(13662),C=n(93333),N=n(29134),S=n(9862),P=n(21746),I=n(60117),M=n(92218),A=n(12074),T=n(71968),R=n(2086);function replaceCamelCaseMessageKeys(e){let t={...e};return Object.prototype.hasOwnProperty.call(t,"functionCall")&&(t.function_call=t.functionCall,delete t.functionCall),Object.prototype.hasOwnProperty.call(t,"chatCompletionId")&&(t.chat_completion_id=t.chatCompletionId,delete t.chatCompletionId),Object.prototype.hasOwnProperty.call(t,"formatId")&&(t.format_id=t.formatId,delete t.formatId),t}var F=!0;function formatMessagesForBackend(e,t){let n=[...e];return t&&t.forEach(e=>{n[e].metadata={...n[e].metadata,pinned:!0}}),n.map(replaceCamelCaseMessageKeys)}function Agent(e){var t,n;let{cachedMessages:a,numRequestsDoneForGPT4:h,numRequestsDoneForClaude:F,anonUserID:B,phindPlan:E,paidPlanValid:O,initialThreadPrivate:L,chatHistoryEnabled:_,renderingAsComponent:Z,challengeSeeds:q,countryCode:U}=e,{isXs:G,isLg:W,isXl:z}=(0,f.k)(),{isSidebarOpen:D}=(0,A.A)(),{data:V,status:H}=(0,i.useSession)(),[K,Q]=(0,x.Z)("numAnonPremiumRequestsDone",0),Y=E.toLowerCase().includes("enterprise")&&O,J=("Phind Pro"===E||"Phind Pro Yearly"===E)&&O,$=(0,k.WN)(E,O),X=J?w.CF:w.aB,[ee,et]=(0,x.Z)("answerModel",X),[en,es]=(0,c.useState)(ee),[er,ea]=(0,c.useState)(!1),[el,eo]=(0,c.useState)(!1),ei=(0,c.useRef)((0,p.Mc)()),ec=(0,v.R6)(!!O,!!V),[ed,eu]=(0,x.Z)("localRequestsCounter-4/23/24",{anon:0,loggedIn:0}),[eh,em]=(0,x.Z)("enableFunctions",!1),[ep,eg]=(0,c.useState)(!1),[ex,ef]=(0,c.useState)(!1);(0,c.useEffect)(()=>{ef(!0);let handleEsc=e=>{let t=eM||eT;"Escape"!==e.key||t||handleStopGenerating()};return window.addEventListener("keydown",handleEsc),()=>{window.removeEventListener("keydown",handleEsc)}},[]);let[eb,ej]=(0,c.useState)([]),ew=100,ev=100,ey=100,[ek,eC]=(0,c.useState)(0),[eN,eS]=(0,c.useState)(0),[eP,eI]=(0,c.useState)(0);ex&&(V?(ew=(0,k.N7)(E,"GPT-4",O)-(h+ek),ev=(0,k.N7)(E,"Phind-70B",O)-(h-eN),ey=(0,k.N7)(E,"Claude Opus",O)-(F+eP)):"loading"!==H&&(ew=w.a0-K,ev=w.Dv-K,ey=w.a0-K),ew=Math.max(0,ew),ev=Math.max(0,ev),ey=Math.max(0,ey)),(0,c.useEffect)(()=>{void 0!==ee&&(es(ee),eo(!0))},[ee]);let[eM,eA]=(0,c.useState)(""),[eT,eR]=(0,c.useState)(""),[eF,eB]=(0,c.useState)(!1),[eE,eO]=(0,c.useState)({}),[eL,e_]=(0,c.useState)(-1),eZ=(0,k.$j)(eE),eq="";eq=window.navigator.language;let eU=[...a,...eZ],eG=(0,c.useRef)(new AbortController),{signal:eW}=eG.current,ez=(0,o.useRouter)(),{query:eD}=ez,{q:eV,cache:eH,long:eK,home:eQ}=eD;(0,c.useEffect)(()=>{let routeChangeStart=()=>{ei.current=(0,p.Mc)()};return ez.events.on("routeChangeStart",routeChangeStart),()=>{ez.events.off("routeChangeStart",routeChangeStart)}},[ez]);let eY=ee===w.aB||"Phind-70B"===ee||"Phind Instant"===ee||"GPT-4"===ee&&ew<=0,eJ=J||Y?w.dx:w.TW,e$=w.DF;"Phind Instant"===ee?e$=w._H:J||Y?e$=w.jm:V&&(e$=w.FK);let eX=eY?e$:eJ,e0=eK&&window.localStorage&&!Z,e1=e0&&localStorage.getItem("long-question")||"",e2=e0&&localStorage.getItem("long-context")||"",e6=null!=eV?eV:""!==e1.trim()||""!==e2.trim()?"".concat(e1,"\n").concat(e2):"",e3=null!=eH?eH:"",e4=e6||eU.length>0?eU:[{role:"assistant",content:"Hello! This is a vanilla chat interface to experiment with Phind's models. For most dev tasks, we recommend that you use the Ask mode. Ask me a question to get started."}],e7=e4.filter(e=>"assistant"!==e.role).length,e8=e4.filter(e=>"user"===e.role).length;(0,c.useEffect)(()=>{er&&y.n.track("Show Agent Continue Button",{numUserMessages:e8})},[er]),(0,c.useEffect)(()=>{if(!eQ&&ex&&(V||"loading"!==H)&&0===eU.length){var e,t;getAgentResponse(e6,eU,e3),(null==V?void 0:null===(e=V.user)||void 0===e?void 0:e.userId)&&y.n.identify(null==V?void 0:null===(t=V.user)||void 0===t?void 0:t.userId)}},[e6,ez,ex,V]);let handleStopGenerating=()=>{eB(e=>(e&&(y.n.track("Agent Stop Generating"),eG.current.abort(),eG.current=new AbortController),!1))},getAgentResponse=async(e,t,n,s)=>{var a,l;if(V||"Phind-70B"!==ee||Q(e=>e+1),!e.trim()||eF)return;let o=(0,C.ky)(ed,$,!!V,U,eq,eR,eA);if(o)return;let i=ei.current,c=null!=en?en:X,d=null!==(l=null!=s?s:en)&&void 0!==l?l:X,h=e;if((0,N.In)(e,d)>eX){if(!V){eR("Log in for larger context");return}if(!J&&!Y){eA(C.n3);return}h=(0,N.yF)(e,eX,d)}if(!ep&&!$){let e=t.map(e=>e.content).join(" "),n=h+e;if((0,N.In)(n,d)>eX){let e="Some parts of your thread are not used in the context.";V?eA("".concat(e," Upgrade for larger context")):eR("".concat(e," Log in for larger context")),eg(!0)}}eB(!0),ea(!1);let m=[...t];-1!==eL&&(m=m.slice(0,eL+1));let p={role:"user",content:h},g={id:"user.message.".concat(m.length),choices:[{delta:p}]};eO(e=>(0,k.Ih)(e,g)),m.push(p);let x=formatMessagesForBackend(m,eb);(0,S.uE)(h,x,d,q,B,null==V?void 0:null===(a=V.user)||void 0===a?void 0:a.userId,eh).then(async e=>{let s,r=(0,k.Ih)({},g),a=!1,l=(0,u.j)(e=>{if(i!==ei.current){console.warn("Thread UUID changed, ignoring event.");return}if("event"===e.type){let t;if((null==e?void 0:e.event)==="error"){ea(!0);return}let{data:n}=e;try{t=JSON.parse(n),"metadata"===t.type&&("GPT-4"===t.model?(s="GPT-4",V&&eC(e=>e+1)):"Phind-70B"===t.model?(s="Phind-70B",V&&eS(e=>e+1)):"Claude Opus"===t.model&&(s="Claude Opus",V&&eI(e=>e+1)),s&&(es(s),et(s)),s===w.aB&&"GPT-4"===ee&&ew<=0?eA(C.n3):s===w.aB&&"Phind-70B"===ee&&ev<=0?eA(C.n3):s===w.aB&&"Claude Opus"===ee&&ey<=0&&eA(C.n3))}catch(e){console.error(e),ea(!0);return}t.id&&(!a&&s&&t.choices&&t.choices[0]&&t.choices[0].delta&&(t.choices[0].delta.metadata={...t.choices[0].delta.metadata,answerModel:s},a=!0),r=(0,k.Ih)(r,t),eO(e=>(0,k.Ih)(e,t)))}}),o=e.body,d=(0,k.Mz)(o,eW);for await(let e of(0,k.Uj)(d)){let t=new TextDecoder().decode(e);l.feed(t)}if(i!==ei.current){console.warn("Thread UUID changed, ignoring event.");return}ee&&ev>0&&(et(c),es(c));let m=(0,k.$j)(r);eB(!1),await saveChatToDb(t,m,h,n,i)}).catch(e=>{console.error(e),r.Tb(e),ea(!0),eB(!1)})},regenerateAnswer=async(e,t)=>{let n=eU[e-1].content;eU.splice(e-1,2),a.splice(e-1,2);let s=Object.keys(eE);s.sort((e,t)=>eE[e].created-eE[t].created);let r=s[s.length-1],l=s[s.length-2];delete eE[r],delete eE[l],await(0,S.l6)(e3,e-1,2),n&&getAgentResponse(n,eU,e3,t)},editAnswer=async(e,t)=>{a.splice(e,a.length-e);let n=eU.length-e,s=Object.keys(eE);s.sort((e,t)=>eE[e].created-eE[t].created);for(let e=0;e<n;e+=1){let t=s[s.length-1-e];delete eE[t]}eU.splice(e,eU.length-e),await(0,S.l6)(e3,e,n),t&&getAgentResponse(t,eU,e3)};(0,c.useEffect)(()=>{d.OK.scrollTo("answer-".concat(e4.length-1),{duration:650,delay:0,smooth:"easeInOutQuart"})},[e4.length]);let handleUserInput=async(e,t)=>{let n=t?"".concat(e,"\n").concat(t):e;eF||await getAgentResponse(n,eU,e3)};if(!ex)return null;return(0,s.jsxs)(s.Fragment,{children:[!!(null==eU?void 0:eU.length)&&(0,s.jsx)(m(),{children:(0,s.jsx)("title",{children:"Phind - ".concat(eU[0].content)})}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsx)(I.Z,{title:eM,setTitle:eA}),(0,s.jsx)(T.Z,{title:eT,setTitle:eR}),(0,s.jsxs)("div",{className:G?"container-xl p-3":"container-xl",children:[!W&&!z&&(0,s.jsx)("div",{children:(0,s.jsxs)("button",{type:"button",className:"btn btn-no-border p-0 ms-n2 lift btn-sm my-2",onClick:()=>{window.location.href="/"},children:[(0,s.jsx)("i",{className:"mx-2 fe fe-message-square"}),"New Thread"]})}),ex&&(0,s.jsx)(j.Z,{message:"Select your preferred answering model.",children:(0,s.jsx)("div",{className:"mt-1",children:(0,s.jsx)(M.Z,{answerModel:null!==(t=null!=en?en:ee)&&void 0!==t?t:X,setAnswerModel:e=>{ew<=0&&"GPT-4"===e?eA(C.n3):ev<=0&&"Phind-70B"===e?eA(C.n3):ey<=0&&"Claude Opus"===e?eA(C.n3):et(e)},requestsLeftForGPT4:ew,requestsLeftForPhind70B:ev,requestsLeftForClaude:ey,session:V,isPro:J})})}),el&&ee&&"Phind-70B"===ee&&"Phind-70B"!==en&&(0,s.jsx)("div",{children:V?(0,s.jsx)(j.Z,{message:"You get 10 Phind-70B uses each day. Upgrade for higher limits. You have unlimited Phind-34B uses after your Phind-70B uses expire.",placement:"bottom",children:(0,s.jsx)(l(),{className:"btn fs-6 fw-bold text-dark text-decoration-underline",href:"/plans",children:"Upgrade for more daily Phind-70B uses"})}):(0,s.jsx)("button",{className:G?"btn p-0 fs-6 fw-bold text-dark text-decoration-underline":"btn fs-6 fw-bold text-dark text-decoration-underline",type:"button",onClick:()=>{(0,i.signIn)().then(()=>{y.n.track("Sign In")})},children:"Sign in for more Phind-70B uses"})}),el&&ee&&"GPT-4"===ee&&"GPT-4"!==en&&(0,s.jsx)("div",{children:V?(0,s.jsx)(l(),{className:"btn fs-6 fw-bold text-dark text-decoration-underline",href:"/plans",children:"Upgrade for more daily GPT-4 uses"}):(0,s.jsx)("button",{className:G?"btn p-0 fs-6 fw-bold text-dark text-decoration-underline":"btn fs-6 fw-bold text-dark text-decoration-underline",type:"button",onClick:()=>{(0,i.signIn)().then(()=>{y.n.track("Sign In")})},children:"Sign in for more GPT-4 uses"})}),V&&(0,s.jsx)(R.Z,{cacheParam:e3,initialPrivateValue:L},e3),(0,s.jsx)("div",{children:(0,s.jsxs)("span",{className:"fs-6 fw-bold me-2 ms-0",children:[eh?"Search and clarification questions enabled":"Search and clarification questions disabled"," ",(0,s.jsx)(j.Z,{message:"".concat(eh?"Disable":"Enable"," search and clarification questions."),children:(0,s.jsx)("i",{className:"fe ".concat(eh?"fe-cloud":"fe-cloud-lightning"," m-1"),style:{cursor:"pointer"},onClick:()=>{em(!eh),y.n.track("Toggle Search and Clarification Questions",{newValue:!eh})}})})]})}),(0,s.jsx)("div",{className:"mt-8",children:e4.map((e,t)=>{var n;return(0,s.jsx)(P.Z,{message:e,index:t,isLast:t===e4.length-1,handleUserInput:handleUserInput,pinnedMessages:eb,setPinnedMessages:ej,continueFromMessageIndex:eL,setContinueFromMessageIndex:e_,answerModel:null!==(n=null!=en?en:ee)&&void 0!==n?n:X,requestsLeftForGPT4:ew,requestsLeftForPhind70B:ev,requestsLeftForClaude:ey,session:V,regenerateAnswer:regenerateAnswer,editAnswer:editAnswer,showRunInCodeMode:!0,isLoggedIn:!!V,isValidProPlan:!!J},"message-".concat(t))})}),er&&(0,s.jsx)("div",{className:"text-center",children:(0,s.jsxs)("button",{className:"btn btn-primary btn-sm rounded-1",onClick:()=>{getAgentResponse("continue",eU,e3),ea(!1)},type:"button",children:[(0,s.jsx)("i",{className:"mx-2 fe fe-refresh-cw"}),"Continue"]})}),(0,s.jsx)("div",{className:"mb-12",style:{minHeight:"30px"}}),(0,s.jsx)("div",{className:"mt-10"}),e8<ec&&(0,s.jsx)("div",{className:"fixed-bottom bg-gradient-light",style:{pointerEvents:"none"},children:(0,s.jsx)(g.E.div,{initial:{opacity:0,translateY:0,scale:1},animate:{opacity:1,translateY:0,scale:1},transition:{duration:.3},children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:D?"col-2":"col-0"}),(0,s.jsx)("div",{className:D?"col-10":"col-12",style:{pointerEvents:"auto"},children:(0,s.jsxs)("div",{className:G?"container-xl p-3":"container-xl",children:[eF&&(0,s.jsxs)("button",{className:"btn btn-no-border ms-n2 m-0 pb-3 ps-0 btn-sm lift",style:{position:"relative",right:0,top:0},onClick:handleStopGenerating,type:"button",children:[(0,s.jsx)("i",{className:"fe fe-stop-circle m-2"}),"Stop [Esc]"]}),(0,s.jsx)(b.Z,{placeholder:-1!==eL?"Continue from message ".concat(eL+1):"Send message",initialQuestionFromCache:"",defaultNumRowsToShow:1,customSearchHandler:handleUserInput,answerModel:null!==(n=null!=en?en:ee)&&void 0!==n?n:X,maxTokenLimit:eX,inChatMode:!0},e7)]})})]})})}),!eF&&(0,s.jsx)(v.ZP,{isLoggedIn:!!V,numUserMessages:e8,paidPlanValid:!!O})]})]})})})]});async function saveChatToDb(e,t,n,s,a){let l="https://www.phind.com/agent?cache=".concat(s);if(t.length<=0)return;let o={userInput:n,userInputLength:n.length,messageInput:e,newMessages:t,cacheUrl:l,cacheId:s,chatLength:e.length+t.length,phindPlan:E,options:{model:en,language:eq}};_&&a===ei.current&&(s?await(0,S.T6)(s,t).catch(e=>{console.error(e),r.Tb(e)}):await(0,S.ou)(n,t).then(e=>e.json()).then(e=>{o.cacheId=e;let t="https://www.phind.com/agent?cache=".concat(e);o.cacheUrl=t,ez.push({pathname:"/agent",query:{cache:e}},void 0,{shallow:!0})}).catch(e=>{console.error(e),r.Tb(e)})),y.n.track("Agent turn",o),eu(e=>{let t=V?"loggedIn":"anon";return{...e,[t]:e[t]+1}})}}Agent.defaultProps={anonUserID:"",renderingAsComponent:!1},t.default=Agent}}]);