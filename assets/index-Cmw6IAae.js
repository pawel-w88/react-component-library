import{j as e,r as i,L as v,a as b,c as f,R as y}from"./vendor-jP28AFus.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const u=({onClick:s,children:n})=>e.jsx("button",{className:"Button",onClick:s,children:n}),x=({type:s,placeholder:n,value:t,onChange:a})=>e.jsx("input",{className:"Input",type:s,placeholder:n,value:t,onChange:a}),N=({onSubmit:s,children:n})=>e.jsx("form",{className:"Form",onSubmit:s,children:n}),C=({type:s,message:n})=>e.jsx("div",{className:`Alert ${s}`,children:n}),D=({isOpen:s,onClose:n,children:t})=>s?e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"Modal",children:[e.jsx("button",{onClick:n,className:"modal-close-button",children:"X"}),e.jsx("div",{className:"modal-content",children:t})]})}):null,k=({children:s})=>e.jsx("nav",{className:"Navbar ",children:s}),S=({defalutTab:s,children:n})=>{const[t,a]=i.useState(s||0);return e.jsxs("div",{className:"Tabs",children:[e.jsx("div",{className:"Tab-buttons",children:n.map((o,r)=>e.jsx("button",{onClick:()=>a(r),className:r===t?"active":"",children:o.props.label},r))}),e.jsx("div",{className:"Tab-content",children:n[t]})]})},z=({children:s})=>e.jsx("div",{className:"Card ",children:s}),P=({items:s})=>e.jsx("ul",{className:"List ",children:s.map((n,t)=>e.jsx("li",{className:"List-item ",children:n},t))}),w=({columns:s,data:n})=>e.jsxs("table",{className:"DataTable ",children:[e.jsx("thead",{children:e.jsx("tr",{children:s.map((t,a)=>e.jsx("th",{children:t},a))})}),e.jsx("tbody",{children:n.map((t,a)=>e.jsx("tr",{children:t.map((o,r)=>e.jsx("td",{children:o},r))},a))})]}),T=({currentPage:s,totalPages:n,onPageChange:t})=>e.jsxs("div",{className:"Pagination ",children:[e.jsx("button",{onClick:()=>t(s-1),disabled:s===1,children:"prev"}),e.jsxs("span",{children:[s," from ",n]}),e.jsx("button",{onClick:()=>t(s+1),disabled:s===n,children:"next"})]}),I=({filters:s,onChange:n})=>e.jsx("div",{className:"Filters ",children:s.map((t,a)=>e.jsx("input",{type:"text",placeholder:"{`Wpisz ${filter}`}",onChange:o=>n(t,o.target.value)},a))}),O=({onChange:s})=>e.jsx("div",{className:"SearchBar ",children:e.jsx("input",{type:"text",placeholder:"Wpisz frazę",onChange:n=>s(n.target.value)})}),F=({data:s})=>e.jsx("div",{className:"DataVisualization",children:s&&e.jsx("ul",{children:s.map((n,t)=>e.jsx("li",{children:n.title},t))})}),M=({text:s,children:n})=>{const[t,a]=i.useState(!1),o=()=>{a(!0)},r=()=>{a(!1)};return e.jsxs("div",{className:"tooltip-container",onMouseEnter:o,onMouseLeave:r,children:[n,t&&e.jsx("div",{className:"tooltip-text",children:s})]})},L=({progress:s})=>e.jsx("div",{className:"ProgressBar ",children:e.jsx("div",{className:"progress",style:{width:`${s}%`}})}),j=()=>e.jsx("div",{className:"Spinners "}),p=({name:s,size:n=24,color:t="currentColor"})=>{const a=v[s];return a?e.jsx(a,{size:n,color:t}):(console.error(`Nie znaleziono ikony o nazwie ${s}`),null)},A=({onSelectDate:s})=>e.jsx("input",{className:"DataPicker ",type:"date",onChange:n=>s(n.target.value)}),E=({onFileUpload:s})=>e.jsx("input",{className:"FileUploader ",type:"file",onChange:n=>s(n.target.files[0])}),B=({onDrop:s,children:n})=>{const t=o=>{o.preventDefault();const r=o.dataTransfer.files[0];s(r)},a=o=>{o.preventDefault()};return e.jsx("div",{className:"DragAndDrop",onDrop:t,onDragOver:a,children:n})},U=({url:s,method:n,data:t,onSuccess:a,onError:o})=>{const[r,l]=i.useState(!1),c=async()=>{l(!0);try{const d=await b[n.toLowerCase()](s,t);a(d.data)}catch(d){o(d)}finally{l(!1)}};return e.jsx("div",{children:r?e.jsx(j,{}):e.jsx("button",{onClick:c,children:"Wyślij żądanie"})})},h=({data:s})=>e.jsx("div",{children:s&&e.jsx("ul",{children:s.map(n=>e.jsxs("li",{children:[n.title," ",n.body]},n.id))})}),W=({fetchData:s,onDataFetched:n})=>{const[t,a]=i.useState(null),[o,r]=i.useState(!0);return i.useEffect(()=>{(async()=>{try{const c=await s();a(c.data),r(!1)}catch(c){console.error("Wystąpił błąd podczas pobierania danych:",c),r(!1)}})()},[s,n]),e.jsx(e.Fragment,{children:o?e.jsx(j,{}):e.jsx(e.Fragment,{children:t&&e.jsx(h,{data:t})})})},V=({items:s})=>e.jsx("div",{className:"Sidebar ",children:e.jsx("ul",{children:s.map((n,t)=>e.jsx("li",{children:n},t))})}),$=({paths:s})=>e.jsx("div",{className:"Breadcrumbs ",children:s.map((n,t)=>e.jsxs("span",{children:[n,t!==s.lenght-1&&e.jsx("span",{children:" > "})]},t))}),R=({title:s,options:n})=>{const[t,a]=i.useState(!1),o=()=>{a(!t)},r=l=>{console.log(l),a(!1)};return e.jsxs("div",{className:"DropdownMenu",children:[e.jsxs("div",{className:"dropdown-header",onClick:o,children:[e.jsx("span",{children:s}),e.jsx("span",{className:`icon ${t?"open":""}`,children:t?"▲":"▼"})]}),t&&e.jsx("ul",{className:"dropdown-options",children:n.map((l,c)=>e.jsx("li",{onClick:()=>r(l),children:l},c))})]})},Z=({images:s})=>{const[n,t]=i.useState(0),a=()=>{t(r=>r===0?s.length-1:r-1)},o=()=>{t(r=>r===s.length-1?0:r+1)};return e.jsxs("div",{className:"ImageSlider ",children:[e.jsx("button",{onClick:a,children:"<"}),e.jsx("img",{src:s[n],alt:`Image ${n+1}`}),e.jsx("button",{onClick:o,children:">"})]})},K=({src:s})=>e.jsx("div",{className:"VideoPlayer ",children:e.jsxs("video",{controls:!0,children:[e.jsx("source",{src:s,type:"video/mp4"}),"Your browser does not support the video tag."]})}),G=({src:s})=>e.jsx("div",{className:"AudioPlayer ",children:e.jsxs("audio",{controls:!0,children:[e.jsx("source",{src:s,type:"audio/mpeg"}),"Your browser does not support the audio tag."]})}),q=({images:s})=>{const[n,t]=i.useState(null),a=o=>{t(o)};return e.jsx("div",{className:"Gallery ",children:s.map((o,r)=>e.jsx("img",{src:o,alt:`Image ${r+1}`,className:r===n?"selected":"",onClick:()=>a(r)},r))})},H=()=>{const s=["ID","Nazwa","Cena"],n=[[1,"Produkt 1",10],[2,"Produkt 2",20],[3,"Produkt 3",30]],t=5,a=1,o=d=>console.log("Zmiana strony:",d),r=["Nazwa","Cena"],l=(d,g)=>console.log("Zmiana filtra:",d,g),c=d=>console.log("Wyszukiwanie:",d);return e.jsxs("div",{className:"DataProcesingComponents ",children:[e.jsx("h2",{children:"Data Procesing "}),e.jsx(w,{columns:s,data:n}),e.jsx(F,{data:n}),e.jsx(T,{currentPage:a,totalPages:t,onChange:o}),e.jsx(I,{filters:r,onChange:l}),e.jsx(O,{onChange:c})]})},Y=()=>{const[s,n]=i.useState(""),t=r=>{n(r)},a=r=>{console.log("Przesłano plik:",r)},o=r=>{console.log("Przeciągnięto i upuszczono plik:",r)};return e.jsxs("div",{className:"ToolsCopmonents",children:[e.jsx("h2",{children:"Tool Components"}),e.jsx(M,{text:"To jest podpowiedź dla przycisku",children:e.jsx(u,{children:"Przycisk z podpowiedzią"})}),e.jsx("br",{}),e.jsx(L,{progress:50}),e.jsx(j,{}),e.jsx("p",{children:e.jsx(p,{name:"User",size:32,color:"white"})}),e.jsx("p",{children:e.jsx(p,{name:"Trash",size:32,color:"white"})}),e.jsx(A,{onSelectDate:t}),e.jsxs("p",{children:["Wybrana data: ",s]}),e.jsx(E,{onFileUpload:a}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(B,{onDrop:o,children:e.jsx("div",{children:"Przeciągnij i upuść plik tutaj"})})]})},X=()=>{const[s,n]=i.useState(null),[t,a]=i.useState(null),o=c=>{n(c),console.log("Sukces!",c)},r=async()=>{try{return await(await fetch("https://jsonplaceholder.typicode.com/posts/")).json()}catch(c){throw c}},l=c=>{a(c)};return e.jsxs("div",{className:"ServerCommunicateComponents ",children:[e.jsx("h2",{children:"Server Communicate"}),e.jsx(U,{url:"https://jsonplaceholder.typicode.com/posts/",method:"GET",onSuccess:o,onError:console.error}),s&&e.jsx(h,{data:s}),e.jsx(W,{fetchData:r,onDataFetched:l}),t&&e.jsxs("div",{children:[e.jsx("h3",{children:"Dane z DataCache:"}),e.jsx(h,{data:t})]})]})},J=()=>{const s=["Home","About","Services","Contact"],n=["Home","Products","Category","Product Name"],t=["Option 1","Option 2","Option 3"];return e.jsxs("div",{className:"NaviMenuComponents ",children:[e.jsx("h2",{children:"NaviMenuComponents"}),e.jsx(R,{title:"Options",options:t}),e.jsx(V,{items:s}),e.jsx($,{paths:n})]})},m=["image1.jpg","image2.jpg","image3.jpg"],Q="video.mp4",_="audio.mp3",ee=()=>e.jsxs("div",{className:"MultimediaComponents ",children:[e.jsx("h3",{children:"Image Slider Example"}),e.jsx(Z,{images:m}),e.jsx("h3",{children:"Video Player Example"}),e.jsx(K,{src:Q}),e.jsx("h3",{children:"Audio Player Example"}),e.jsx(G,{src:_}),e.jsx("h3",{children:"Gallery Example"}),e.jsx(q,{images:m})]}),se=s=>{s.preventDefault(),console.log("Wysłano formularz")},ne=()=>e.jsxs("div",{className:"UiComponents ",children:[e.jsx("h2",{children:"UI Components"}),e.jsx(u,{onClick:()=>alert("Kliknięto!"),children:"Kliknij mnie"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(x,{type:"text",placeholder:"Wpisz coś..."}),e.jsx("h3",{children:"FORM"}),e.jsxs(N,{onSubmit:se,children:[e.jsx(x,{type:"text",placeholder:"Wpisz coś..."}),e.jsx(u,{type:"submit",children:"Wyślij"})]}),e.jsx("br",{}),e.jsx(C,{type:"info",message:"To jest komunikat informacyjny"}),e.jsx("br",{}),e.jsx(D,{isOpen:!0,onClose:()=>console.log("Zamknięto modal"),children:"Treść modala"}),e.jsx("br",{}),e.jsxs(k,{children:[e.jsx(u,{children:"Strona główna"}),e.jsx(u,{children:"O nas"}),e.jsx(u,{children:"Kontakt"})]}),e.jsx("br",{}),e.jsxs(S,{defaultTab:0,children:[e.jsx("div",{label:"Zakładka 1",children:"Treść zakładki 1"}),e.jsx("div",{label:"Zakładka 2",children:"Treść zakładki 2"}),e.jsx("div",{label:"Zakładka 3",children:"Treść zakładki 3"})]}),e.jsx("br",{}),e.jsx(z,{children:"Treść karty"}),e.jsx(P,{items:["Pierwszy element","Drugi element","Trzeci element"]})]});function te(){return e.jsxs("div",{className:"App",children:[e.jsx("h1",{children:"Biblioteka Komponentów"}),e.jsx(J,{}),e.jsx(ee,{}),e.jsx(ne,{}),e.jsx(H,{}),e.jsx(Y,{}),e.jsx(X,{})]})}f.createRoot(document.getElementById("root")).render(e.jsx(y.StrictMode,{children:e.jsx(te,{})}));
