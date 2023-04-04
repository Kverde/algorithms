"use strict";(self.webpackChunkalgorithms_way23_ru=self.webpackChunkalgorithms_way23_ru||[]).push([[4607],{2570:(s,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-29d49d18","path":"/20221119123745.html","title":"Алгоритм k-ближайших соседей","lang":"ru-RU","frontmatter":{"page_type":"algorithm"},"excerpt":"","headers":[{"level":2,"title":"Ссылки","slug":"ссылки","link":"#ссылки","children":[]},{"level":2,"title":"Ссылки на эту заметку","slug":"ссылки-на-эту-заметку","link":"#ссылки-на-эту-заметку","children":[]}],"git":{"updatedTime":1669660493000},"filePathRelative":"20221119123745.md"}')},9857:(s,a,l)=>{l.r(a),l.d(a,{default:()=>B});var t=l(6252);const n=(0,t._)("h1",{id:"алгоритм-k-ближаиших-соседеи",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#алгоритм-k-ближаиших-соседеи","aria-hidden":"true"},"#"),(0,t.Uk)(" Алгоритм k-ближайших соседей")],-1),e=(0,t._)("p",null,"Алгоритм k-ближайших соседей позволяет найти схожие объекты по нескольким признакам. Признаки должны быть выражены в количественном отношении.",-1),p={class:"katex"},m={class:"katex-mathml"},i=(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),(0,t._)("span",{class:"mord mathnormal"},"a")])],-1),c={class:"katex"},r={class:"katex-mathml"},u=(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),(0,t._)("span",{class:"mord mathnormal"},"b")])],-1),h={class:"katex-block"},d={class:"katex-display"},_={class:"katex"},g={class:"katex-mathml"},o=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathnormal">d</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:1.24em;vertical-align:-0.25612499999999994em;"></span><span class="mord sqrt"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.983875em;"><span class="svg-align" style="top:-3.2em;"><span class="pstrut" style="height:3.2em;"></span><span class="mord" style="padding-left:1em;"><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mord mathnormal">a</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mord mathnormal">b</span><span class="mord">2</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.740108em;"><span style="top:-2.9890000000000003em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span><span style="top:-2.9438750000000002em;"><span class="pstrut" style="height:3.2em;"></span><span class="hide-tail" style="min-width:1.02em;height:1.28em;"><svg width="400em" height="1.28em" viewBox="0 0 400000 1296" preserveAspectRatio="xMinYMin slice"><path d="M263,681c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl0 -0\nc4.7,-7.3,11,-11,19,-11\nH40000v40H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM1001 80h400000v40h-400000z"></path></svg></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.25612499999999994em;"><span></span></span></span></span></span></span></span>',1),k=(0,t._)("p",null,"Возможно использование другой формулы, например, метода близости косинусов.",-1),w=(0,t._)("p",null,"Алгоритм используется для",-1),f=(0,t._)("li",null,"Классификации",-1),y=(0,t._)("li",null,"Регрессии",-1),W=(0,t._)("h2",{id:"ссылки",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ссылки","aria-hidden":"true"},"#"),(0,t.Uk)(" Ссылки")],-1),U=(0,t._)("p",null,"138",-1),b=(0,t._)("h2",{id:"ссылки-на-эту-заметку",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ссылки-на-эту-заметку","aria-hidden":"true"},"#"),(0,t.Uk)(" Ссылки на эту заметку")],-1),v=(0,t._)("p",{style:{"text-align":"right"}},[(0,t._)("a",{href:"https://github.com/Kverde/algorithms/blob/main/source/20221119123745.md",target:"_blank"}," Эта заметка на GitHub ")],-1),x=(0,t._)("p",{style:{"text-align":"right"}},[(0,t._)("a",{href:"https://discourse.comtext.space/new-topic?title=%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%20k-%D0%B1%D0%BB%D0%B8%D0%B6%D0%B0%D0%B9%D1%88%D0%B8%D1%85%20%D1%81%D0%BE%D1%81%D0%B5%D0%B4%D0%B5%D0%B9&body=&category=algorithm",target:"_blank"}," Обсудить на форуме ")],-1),D={},B=(0,l(3744).Z)(D,[["render",function(s,a){const l=(0,t.up)("mi"),D=(0,t.up)("mrow"),B=(0,t.up)("annotation"),M=(0,t.up)("semantics"),z=(0,t.up)("math"),L=(0,t.up)("mo"),R=(0,t.up)("mn"),q=(0,t.up)("msup"),C=(0,t.up)("msqrt"),E=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[n,e,(0,t._)("p",null,[(0,t.Uk)("Алгоритм строиться на формуле нахождения расстояний между двумя точками в многомерном пространстве. Например, расстояние при учете признаков "),(0,t._)("span",p,[(0,t._)("span",m,[(0,t.Wm)(z,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("a")])),_:1})])),_:1}),(0,t.Wm)(B,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("a")])),_:1})])),_:1})])),_:1})]),i]),(0,t.Uk)(" и "),(0,t._)("span",c,[(0,t._)("span",r,[(0,t.Wm)(z,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("b")])),_:1})])),_:1}),(0,t.Wm)(B,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("b")])),_:1})])),_:1})])),_:1})]),u]),(0,t.Uk)(" вычисляется по формуле")]),(0,t._)("p",h,[(0,t._)("span",d,[(0,t._)("span",_,[(0,t._)("span",g,[(0,t.Wm)(z,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:(0,t.w5)((()=>[(0,t.Wm)(M,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("d")])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)("=")])),_:1}),(0,t.Wm)(C,null,{default:(0,t.w5)((()=>[(0,t.Wm)(D,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("a")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)("−")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("a")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)("+")])),_:1}),(0,t.Wm)(L,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("b")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("1")])),_:1}),(0,t.Wm)(L,null,{default:(0,t.w5)((()=>[(0,t.Uk)("−")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("b")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1}),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(L,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1}),(0,t.Wm)(R,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,t.Wm)(B,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("d = \\sqrt{(a1 - a2)^2 + (b1 - b2)^2} ")])),_:1})])),_:1})])),_:1})]),o])])]),k,w,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(E,{to:"/20221119124125.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Построения рекомендательных систем")])),_:1})]),f,y]),W,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(E,{to:"/BhargavaGrokaemAlgoritmy2018.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Грокаем алгоритмы. Адитья Бхаргава. Питер. 2018")])),_:1}),(0,t.Uk)(". Глава 10. Алгоритм k ближайших соседей")])]),U,b,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(E,{to:"/20221119124125.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Построение рекомендательных систем")])),_:1})])]),v,x])}]])}}]);