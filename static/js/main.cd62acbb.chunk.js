(this["webpackJsonpcv-app"]=this["webpackJsonpcv-app"]||[]).push([[0],[,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),a=c(8),s=c.n(a),r=c(4),l=c(2),o=(c(14),c(7),function(e,t){Object(i.useEffect)((function(){function c(c){e.current&&!e.current.contains(c.target)&&t()}return document.addEventListener("mousedown",c),function(){document.removeEventListener("mousedown",c)}}),[e])}),d=c(0);var u=function(e){var t=e.id,c=e.key,n=e.placeholder,a=e.defaultValue,s=e.passInputToParent,r=e.classDefault,u=e.deleteFunction,j=(e.colorSettings,Object(i.useState)(a)),b=Object(l.a)(j,2),f=b[0],O=b[1],p=Object(i.useState)(!1),h=Object(l.a)(p,2),x=h[0],v=h[1],m=Object(i.useRef)(null);return o(m,(function(){v(!1)})),x?Object(d.jsxs)("div",{style:{display:"flex"},ref:m,children:[Object(d.jsx)("input",{id:t,onChange:function(e){e.preventDefault(),O(e.target.value),s&&s(e.target.value,e.target)},type:"text",placeholder:n,defaultValue:f,autoFocus:!0}),u&&Object(d.jsx)("div",{style:{padding:"0 10px",color:"red"},onClick:function(e){u(t),v(!1)},children:"X"})]}):Object(d.jsx)("div",{onClick:function(){v(!0)},className:r,children:f},c)};var j=function(e){var t=e.id,c=e.placeholder,n=e.defaultValue,a=Object(i.useState)({inputValue:n}),s=Object(l.a)(a,2),r=s[0],o=s[1],u=Object(i.useState)(!1),j=Object(l.a)(u,2),b=j[0],f=j[1],O=function(e){e.target.style.height="",e.target.style.height=e.target.scrollHeight+"px"};return b?Object(d.jsx)("textarea",{id:t,onChange:function(e){o({inputValue:e.target.value})},onBlur:function(){f(!1)},type:"text",placeholder:c,defaultValue:r.inputValue,autoFocus:!0,className:"textArea",onFocus:O,onInput:O}):Object(d.jsx)("div",{className:"textArea",onClick:function(){return f(!0)},children:r.inputValue})};c(16);var b=function(e){var t=Object(i.useState)(e),c=Object(l.a)(t,2),n=c[0],a=c[1],s=Object(i.useRef)(null),r=function(e){s.current&&!s.current.contains(e.target)&&a(!1)};return Object(i.useEffect)((function(){return document.addEventListener("click",r,!0),function(){document.removeEventListener("click",r,!0)}}),[]),{ref:s,isVisible:n,setIsVisible:a}},f=function(e){var t=e.icon,c=e.remove,n=e.colorSettings,a=b(!1),s=a.ref,r=a.isVisible,o=a.setIsVisible,u=Object(i.useState)({inputValue:"Profile / Link"}),j=Object(l.a)(u,2),f=j[0],O=j[1];return r?Object(d.jsxs)("div",{ref:s,className:"socialMediaProfile",children:[Object(d.jsx)("input",{onChange:function(e){O({inputValue:e.target.value})},type:"text",placeholder:"Profile / Link",defaultValue:f.inputValue,autoFocus:!0}),Object(d.jsx)("i",{class:t,style:{color:"".concat(n.secondary)}}),Object(d.jsx)("div",{onClick:function(){return c(t)},children:Object(d.jsx)("i",{class:"far fa-trash-alt trashSM"})})]}):Object(d.jsxs)("div",{className:"socialMediaProfile",onClick:function(){return o(!r)},children:[Object(d.jsx)("div",{children:f.inputValue}),Object(d.jsx)("i",{class:t,style:{color:"".concat(n.secondary)}})]})},O=c.p+"static/media/Placeholder.79bfd233.png",p=function(){var e=Object(i.useState)(O),t=Object(l.a)(e,2),c=t[0],n=t[1],a=Object(i.useRef)();return Object(d.jsxs)("div",{className:"imgDiv",children:[Object(d.jsx)("img",{onClick:function(){return a.current.click()},src:c,className:"image"}),Object(d.jsx)("input",{ref:a,type:"file",onChange:function(e){var t=URL.createObjectURL(e.target.files[0]);n(t)},style:{display:"none"}})]})},h=function(e){var t=e.colorSettings,c=Object(i.useState)([]),n=Object(l.a)(c,2),a=n[0],s=n[1],r=Object(i.useState)(!1),o=Object(l.a)(r,2),O=o[0],h=o[1],x=Object(i.useState)(!1),v=Object(l.a)(x,2),m=v[0],g=v[1],S=Object(i.useState)(!1),y=Object(l.a)(S,2),k=y[0],V=y[1],N=b(!1),C=N.ref,I=N.isVisible,D=N.setIsVisible,w=function(e){var t;switch(e){case"LinkedIn":t="fab fa-linkedin-in",h(!0);break;case"Xing":t="fab fa-xing",g(!0);break;case"GitHub":t="fab fa-github",V(!0)}s(a.concat(t))},P=function(e){var t=a.filter((function(t){return t!==e}));switch(e){case"fab fa-linkedin-in":h(!1);break;case"fab fa-xing":g(!1);break;case"fab fa-github":V(!1)}s(t)};return Object(d.jsxs)("div",{id:"personalDiv",onClick:function(){return D(!I)},children:[Object(d.jsx)("div",{className:"pictureDiv",children:Object(d.jsx)(p,{})}),Object(d.jsxs)("div",{className:"personalInfo",children:[Object(d.jsx)(u,{defaultValue:"Max Mustermann",placeholder:"Full Name",classDefault:"name"}),Object(d.jsx)("div",{style:{color:"".concat(t.secondary)},children:Object(d.jsx)(u,{defaultValue:"Web Developer",placeholder:"Profession",id:"professionInput",classDefault:"job"})}),Object(d.jsx)("div",{id:"descriptionDiv",children:Object(d.jsx)(j,{placeholder:"Description",id:"descriptionInput",defaultValue:"Highly seasoned and reliable Entry Level Web Designer with a strong work ethic and customer service and satisfaction record. Adept multitasker capable of bringing simultaneous web page creation and repair projects to completion with full accuracy and efficiency. Able to function well independently with little to no supervision or in coordination with a professional electronic media team."})}),Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsxs)("div",{className:"socialMediaProfile",children:[Object(d.jsx)(u,{defaultValue:"contact@mustermail.com",id:"mailInput",placeholder:"E-Mail"}),Object(d.jsx)("i",{class:"far fa-envelope-open",style:{color:"".concat(t.secondary)}})]}),Object(d.jsxs)("div",{className:"socialMediaProfile",children:[Object(d.jsx)(u,{defaultValue:"0176-576298692",id:"telInput",placeholder:"Telephone"}),Object(d.jsx)("i",{class:"fas fa-mobile-alt",style:{color:"".concat(t.secondary)}})]}),a.map((function(e){return Object(d.jsx)(f,{icon:e,remove:P,colorSettings:t})}))]}),I&&Object(d.jsxs)("div",{ref:C,className:"addContact",children:[!O&&Object(d.jsx)("div",{className:"addSection",style:{color:"".concat(t.primary),filter:"invert(100%)"},onClick:function(){return w("LinkedIn")},children:"+ LinkedIn"}),!m&&Object(d.jsx)("div",{className:"addSection",onClick:function(){return w("Xing")},style:{color:"".concat(t.primary),filter:"invert(100%)"},children:"+ Xing"}),!k&&Object(d.jsx)("div",{className:"addSection",onClick:function(){return w("GitHub")},style:{color:"".concat(t.primary),filter:"invert(100%)"},children:"+ GitHub"})]})]})]})},x=(c(6),function(e){var t=e.deleteSkill,c=e.id,n=b(!1),a=n.ref,s=n.isVisible,r=n.setIsVisible,o=Object(i.useState)("My Skill"),j=Object(l.a)(o,2),f=j[0],O=j[1],p=Object(i.useState)("70"),h=Object(l.a)(p,2),x=h[0],v=h[1];return s?Object(d.jsxs)("div",{ref:a,children:[Object(d.jsx)(u,{placeholder:"Skill Name",defaultValue:f,passInputToParent:function(e){O(e)}}),Object(d.jsx)("input",{type:"range",onChange:function(e){v(e.target.value)}}),Object(d.jsx)("div",{children:Object(d.jsx)("i",{onClick:function(e){return t(c)},class:"far fa-trash-alt trashSM"})})]}):Object(d.jsx)("div",{onClick:function(){r(!s)},children:Object(d.jsxs)("div",{className:"skill",children:[Object(d.jsx)("div",{children:f}),Object(d.jsx)("div",{className:"skillBar",children:Object(d.jsx)("div",{className:"skillPercentage",style:{width:"".concat(x,"%")}})})]})})}),v=c(3),m=c.n(v),g=function(e){var t=e.colorSettings,c=Object(i.useState)(["10","20"]),n=Object(l.a)(c,2),a=n[0],s=n[1],o=Object(i.useState)([{name:"React",id:451},{name:"JavaScript",id:452}]),f=Object(l.a)(o,2),O=f[0],p=f[1],h=b(!1),v=h.ref,g=h.isVisible,S=h.setIsVisible,y=function(e,t){var c=O.map((function(c){return c.id==t.id?Object(r.a)(Object(r.a)({},c),{},{name:e}):c}));p(c)},k=function(e){var t=a.filter((function(t){return t!==e}));s(t)},V=function(e){var t=O.filter((function(t){return e!==t.id}));p(t)};return Object(d.jsxs)("div",{style:{marginTop:"20px",textAlign:"justify",padding:"25px"},onClick:function(){return S(!g)},children:[Object(d.jsx)("h2",{children:"F\xe4higkeiten"}),Object(d.jsx)(j,{defaultValue:"Exceptional creative and analytical skills Extensive familiarity with Photoshop and Flash."}),Object(d.jsx)("div",{class:"tag-container",children:O.map((function(e){return Object(d.jsx)("div",{className:"tag",style:{backgroundColor:"".concat(t.secondary),color:"".concat(t.primary)},children:Object(d.jsx)(u,{id:e.id,placeholder:"Tag",defaultValue:e.name,deleteFunction:V,passInputToParent:y},e.id)})}))}),Object(d.jsx)("div",{className:"bars-container",children:a.map((function(e){return Object(d.jsx)(x,{deleteSkill:k,id:e},e)}))}),g&&Object(d.jsxs)("div",{ref:v,children:[Object(d.jsx)("div",{onClick:function(){s(a.concat(m()()))},className:"addSection",style:{marginTop:"10px",color:"".concat(t.primary),filter:"invert(100%)"},children:"Add Bar"}),Object(d.jsx)("div",{onClick:function(){p(O.concat({name:"Skill",id:m()()}))},className:"addSection",style:{marginTop:"10px",color:"".concat(t.primary),filter:"invert(100%)"},children:"Add Tag"})]})]})},S=(c(18),function(e){var t=e.deleteSection,c=e.id,i=(e.colorSettings,b(!1)),n=i.ref,a=i.isVisible,s=i.setIsVisible;return Object(d.jsxs)("div",{className:"eduSection",id:c,onClick:function(){s(!a)},children:[Object(d.jsxs)("div",{className:"eduHeader",children:[Object(d.jsxs)("div",{className:"date eduDate",children:[Object(d.jsx)(u,{placeholder:"start",defaultValue:"2004"})," ",Object(d.jsx)("p",{style:{paddingLeft:"3px",paddingRight:"3px"},children:"-"}),Object(d.jsx)(u,{placeholder:"End",defaultValue:"2006"})]}),Object(d.jsx)("p",{style:{paddingLeft:"10px",paddingRight:"10px"},children:"|"}),Object(d.jsx)(u,{placeholder:"School",defaultValue:"University of Colombia"})]}),Object(d.jsx)(u,{placeholder:"Graduation",defaultValue:" B.Sc in Management",classDefault:"eduGrad"}),a&&Object(d.jsx)("div",{ref:n,children:Object(d.jsxs)("div",{onClick:function(){t(c)},className:"remove",children:[Object(d.jsx)("i",{class:"far fa-trash-alt trashSection"}),"Remove Section"]})})]})}),y=function(e){var t=e.colorSettings,c=Object(i.useState)(["10","11"]),n=Object(l.a)(c,2),a=n[0],s=n[1],r=b(!1),o=r.ref,u=r.isVisible,j=r.setIsVisible,f=function(){s(a.concat(m()()))},O=function(e){var t=a.filter((function(t){return t!==e}));s(t)};return Object(d.jsxs)("div",{onClick:function(){return j(!u)},children:[Object(d.jsx)("h2",{className:"heading",style:{color:"".concat(t.primary)},children:"Bildung"}),a.map((function(e){return Object(d.jsx)(S,{addSection:f,deleteSection:O,id:e},e)})),u&&Object(d.jsx)("div",{className:"addSection",ref:o,onClick:f,children:"+ Add Section"})]})},k=function(e){var t=e.defaultValue,c=e.placeholder,n=e.id,a=e.deleteFunction,s=e.colorSettings,r=Object(i.useState)({inputValue:t}),o=Object(l.a)(r,2),u=o[0],j=o[1],f=b(!1),O=f.ref,p=f.isVisible,h=f.setIsVisible;return p?Object(d.jsxs)("li",{className:"listItem",ref:O,style:{color:"".concat(s.secondary)},children:[Object(d.jsx)("input",{onChange:function(e){j({inputValue:e.target.value})},type:"text",placeholder:c,defaultValue:u.inputValue,autoFocus:!0}),Object(d.jsx)("div",{onClick:function(){return a(n)},children:Object(d.jsx)("i",{class:"far fa-trash-alt trashItem"})})]}):Object(d.jsx)("li",{className:"listItem",onClick:function(){return h(!p)},style:{color:"".concat(s.secondary)},children:Object(d.jsx)("span",{style:{color:"black"},children:u.inputValue})})},V=function(e){var t=e.colorSettings,c=function(e){var t=s.filter((function(t){return t!==e}));r(t)},n=Object(i.useState)(["1000","2000","3000"]),a=Object(l.a)(n,2),s=a[0],r=a[1],o=b(!1),u=o.ref,j=o.isVisible,f=o.setIsVisible;return Object(d.jsxs)("div",{onClick:function(){return f(!j)},children:[Object(d.jsx)("ul",{className:"list",children:s.map((function(e){return Object(d.jsx)(k,{deleteFunction:c,defaultValue:"This is my Experience",id:e,colorSettings:t},e)}))}),j&&Object(d.jsx)("div",{ref:u,className:"addItemDiv",children:Object(d.jsx)("div",{onClick:function(){r(s.concat(m()()))},children:"+ Add List Item"})})]})},N=(c(19),function(e){e.addSection;var t=e.deleteSection,c=e.id,i=e.colorSettings,n=b(!1),a=n.ref,s=n.isVisible,r=n.setIsVisible;return Object(d.jsxs)("div",{className:"experienceSection",id:c,onClick:function(){return r(!s)},children:[Object(d.jsx)(u,{placeholder:"Date - Date",defaultValue:" November 2018 - Present",classDefault:"date"}),Object(d.jsx)(u,{placeholder:"Position",defaultValue:"Creative Director",classDefault:"position"}),Object(d.jsx)(u,{placeholder:"Company",defaultValue:"Apple Inc., California",classDefault:"company"}),Object(d.jsx)(j,{placeholder:"Description of your Position",defaultValue:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus turpis ex, sed suscipit tortor fermentum id. In eu ipsum odio. Quisque posuere ligula nec erat placerat vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu ornare eros. ",defaultClass:"jobDescription"}),Object(d.jsx)(V,{colorSettings:i}),s&&Object(d.jsx)("div",{ref:a,children:Object(d.jsxs)("div",{onClick:function(){t(c)},className:"remove removeExperience",children:[Object(d.jsx)("i",{class:"far fa-trash-alt trashSection"}),"Remove Experience"]})})]})}),C=function(e){var t=e.colorSettings,c=b(!1),n=c.ref,a=c.isVisible,s=c.setIsVisible,r=Object(i.useState)(["1","2"]),o=Object(l.a)(r,2),u=o[0],j=o[1],f=function(){j(u.concat(m()()))},O=function(e){var t=u.filter((function(t){return t!==e}));j(t)};return Object(d.jsxs)("div",{className:"experienceBlock",onClick:function(){return s(!a)},children:[Object(d.jsx)("h2",{className:"heading",style:{color:"".concat(t.primary)},children:"Erfahrung"}),u.map((function(e){return Object(d.jsx)(N,{addSection:f,deleteSection:O,id:e,colorSettings:t},e)})),a&&Object(d.jsx)("div",{ref:n,onClick:f,className:"addSection",children:"+ Add Experience"})]})},I=(c(20),function(e){var t=e.deleteSection,c=e.id,i=b(!1),n=i.ref,a=i.isVisible,s=i.setIsVisible;return Object(d.jsxs)("div",{className:"awardsSection",id:c,onClick:function(){s(!a)},children:[Object(d.jsx)("div",{className:"eduHeader",children:Object(d.jsxs)("div",{className:"date eduDate",children:[Object(d.jsx)(u,{placeholder:"start",defaultValue:"2004"}),Object(d.jsx)("p",{style:{paddingLeft:"3px",paddingRight:"3px"},children:"-"}),Object(d.jsx)(u,{placeholder:"End",defaultValue:"2006"})]})}),Object(d.jsx)(u,{placeholder:"Graduation",defaultValue:"Stipendium",classDefault:"eduGrad"}),a&&Object(d.jsx)("div",{ref:n,children:Object(d.jsxs)("div",{onClick:function(){t(c)},className:"remove",children:[Object(d.jsx)("i",{class:"far fa-trash-alt trashSection"}),"Remove Section"]})})]})}),D=function(e){var t=e.colorSettings,c=Object(i.useState)(["10"]),n=Object(l.a)(c,2),a=n[0],s=n[1],r=b(!1),o=r.ref,u=r.isVisible,j=r.setIsVisible,f=function(){s(a.concat(m()()))},O=function(e){var t=a.filter((function(t){return t!==e}));s(t)};return Object(d.jsxs)("div",{className:"awards-Container",onClick:function(){return j(!u)},children:[Object(d.jsx)("h2",{className:"heading",style:{color:"".concat(t.primary)},children:"Auszeichnungen"}),a.map((function(e){return Object(d.jsx)(I,{addSection:f,deleteSection:O,id:e},e)})),u&&Object(d.jsx)("div",{className:"addSection",ref:o,onClick:f,children:"+ Add Section"})]})},w=function(e){var t=e.colorSettings;return Object(d.jsxs)("div",{id:"main",className:"isPrinted",children:[Object(d.jsxs)("div",{className:"personalSection",style:{backgroundColor:"".concat(t.primary)},children:[Object(d.jsx)(h,{colorSettings:t}),Object(d.jsx)("div",{className:"skillSection",children:Object(d.jsx)(g,{colorSettings:t})})]}),Object(d.jsxs)("div",{className:"rightSide",children:[Object(d.jsx)(C,{colorSettings:t}),Object(d.jsx)(y,{colorSettings:t}),Object(d.jsx)(D,{colorSettings:t})]})]})},P=(c(21),c(9)),E=function(e){var t=e.colorSettings,c=e.changeColor,i=e.primaryOrSecondary,n=b(),a=n.ref,s=n.isVisible,r=n.setIsVisible;return Object(d.jsxs)("div",{className:"color-view__child",children:[Object(d.jsx)("div",{className:"color-view__square",onClick:function(){return r(!0)},ref:a,style:{backgroundColor:"".concat(t)},children:s&&Object(d.jsx)(P.a,{color:t,onChange:function(e){c(e,i)}})}),Object(d.jsx)("div",{className:"color-view__hex",children:t})]})},L=function(e){var t=e.colorSettings,c=e.changeColor;return Object(d.jsxs)("div",{className:"header notPrinted",children:[Object(d.jsx)("h1",{className:"headingHeader",children:"CVmaker"}),Object(d.jsxs)("div",{className:"color-view",children:[Object(d.jsx)(E,{colorSettings:t.primary,changeColor:c,primaryOrSecondary:"primary"}),Object(d.jsx)(E,{colorSettings:t.secondary,changeColor:c,primaryOrSecondary:"secondary"})]}),Object(d.jsx)("div",{className:"buttonDiv",children:Object(d.jsx)("button",{onClick:function(){return window.print()},children:"Save"})})]})};c(22);var A=function(){var e=Object(i.useState)({primary:"#000000",secondary:"#00b2ff"}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)("div",{id:"App",children:[Object(d.jsx)(L,{colorSettings:c,changeColor:function(e,t){var i;i="primary"===t?Object(r.a)(Object(r.a)({},c),{},{primary:e}):Object(r.a)(Object(r.a)({},c),{},{secondary:e}),n(i)}}),Object(d.jsx)(w,{colorSettings:c}),Object(d.jsx)("p",{className:"printInfo notPrinted",style:{marginTop:"20px"},children:"* Make sure to enable background graphics / images and remove Header / Footer in your print setting."})]})};c(23);s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.cd62acbb.chunk.js.map