"use strict";(self.webpackChunkalgorithms_way23_ru=self.webpackChunkalgorithms_way23_ru||[]).push([[4214],{6720:(a,s,l)=>{l.r(s),l.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-57b215f6","path":"/20221027223051.html","title":"Сложность алгоритмов","lang":"ru-RU","frontmatter":{"page_type":"concept"},"excerpt":"","headers":[{"level":2,"title":"О-большое","slug":"о-большое","link":"#о-большое","children":[]},{"level":2,"title":"Сложность и физические характеристики","slug":"сложность-и-физические-характеристики","link":"#сложность-и-физические-характеристики","children":[]},{"level":2,"title":"Константы в О-большом","slug":"константы-в-о-большом","link":"#константы-в-о-большом","children":[]},{"level":2,"title":"Использование нотации О-большое","slug":"использование-нотации-о-большое","link":"#использование-нотации-о-большое","children":[]},{"level":2,"title":"Ссылки","slug":"ссылки","link":"#ссылки","children":[]},{"level":2,"title":"Ссылки на эту заметку","slug":"ссылки-на-эту-заметку","link":"#ссылки-на-эту-заметку","children":[]}],"git":{"updatedTime":1669660493000},"filePathRelative":"20221027223051.md"}')},4474:(a,s,l)=>{l.r(s),l.d(s,{default:()=>wa});var t=l(6252);const n=(0,t._)("h1",{id:"сложность-алгоритмов",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#сложность-алгоритмов","aria-hidden":"true"},"#"),(0,t.Uk)(" Сложность алгоритмов")],-1),e=(0,t._)("p",null,"Назначение анализа сложности алгоритмов — оценка того как ведет себя алгоритм при увеличении объема входящих данных. Анализ сложности может быть проведен с точки зрения скорости выполнения алгоритма и объема потребляемой памяти.",-1),p=(0,t._)("h2",{id:"о-большое",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#о-большое","aria-hidden":"true"},"#"),(0,t.Uk)(" О-большое")],-1),m={class:"katex"},c={class:"katex-mathml"},r=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span>',1),i={class:"katex"},h={class:"katex-mathml"},u=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span>',1),d={class:"katex"},_={class:"katex-mathml"},w=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141079999999999em;vertical-align:0em;"></span><span class="mord"><span class="mord">3</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">9</span></span></span>',1),g={class:"katex"},o={class:"katex-mathml"},f=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span>',1),k={class:"katex"},W={class:"katex-mathml"},U=(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),(0,t._)("span",{class:"mord mathnormal"},"n")])],-1),x=(0,t._)("p",null,"Часто встречаемые порядки сложности алгоритмов:",-1),y={class:"katex"},v={class:"katex-mathml"},M=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:-0.03588em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mclose">)</span></span></span>',1),b={class:"katex"},O={class:"katex-mathml"},D=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span>',1),E={class:"katex"},z={class:"katex-mathml"},L=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.01968em;">l</span><span class="mord mathnormal">o</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">g</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.30110799999999993em;"><span style="top:-2.5500000000000003em;margin-left:-0.03588em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span><span class="mclose">)</span></span></span>',1),B={class:"katex"},C={class:"katex-mathml"},A=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span>',1),G={class:"katex"},R={class:"katex-mathml"},H=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">!</span><span class="mclose">)</span></span></span>',1),J=(0,t._)("h2",{id:"сложность-и-физические-характеристики",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#сложность-и-физические-характеристики","aria-hidden":"true"},"#"),(0,t.Uk)(" Сложность и физические характеристики")],-1),K=(0,t._)("p",null,"Анализ сложности применительно к скорости и памяти не определяет физические характеристики алгоритма. О-большое не связано с измерением времени в секундах или памяти в байтах. Сложность определяет зависимость между объемом входных данных и количеством операций алгоритма или объемом памяти. Точное время выполнения алгоритма будет зависит от аппаратного обеспечения компьютера на котором будет запущен алгоритм, сложность же напротив универсальна и платформонезависима.",-1),N=(0,t._)("h2",{id:"константы-в-о-большом",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#константы-в-о-большом","aria-hidden":"true"},"#"),(0,t.Uk)(" Константы в О-большом")],-1),P=(0,t._)("p",null,"Так как в нотации О-большое имеет значение только порядок роста, то при его расчете не учитываются константы. Это приводит к тому, что при небольших значения алгоритмы с большим порядком роста могут работать быстрее чем с меньшим.",-1),S={class:"katex"},T={class:"katex-mathml"},Z=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1.064108em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141079999999999em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mclose">)</span></span></span>',1),j={class:"katex"},q={class:"katex-mathml"},F=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222222222222222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span>',1),I={class:"katex"},Q={class:"katex-mathml"},V=(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.43056em","vertical-align":"0em"}}),(0,t._)("span",{class:"mord mathnormal"},"c")])],-1),X={class:"katex"},Y={class:"katex-mathml"},$=(0,t._)("span",{class:"katex-html","aria-hidden":"true"},[(0,t._)("span",{class:"base"},[(0,t._)("span",{class:"strut",style:{height:"0.69444em","vertical-align":"0em"}}),(0,t._)("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])],-1),aa={class:"katex"},sa={class:"katex-mathml"},la=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathnormal">c</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">2</span></span></span>',1),ta={class:"katex"},na={class:"katex-mathml"},ea=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.69444em;vertical-align:0em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2777777777777778em;"></span></span><span class="base"><span class="strut" style="height:0.64444em;vertical-align:0em;"></span><span class="mord">1</span><span class="mord">0</span><span class="mord">0</span></span></span>',1),pa={class:"katex"},ma={class:"katex-mathml"},ca=(0,t.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span>',1),ra=(0,t._)("h2",{id:"использование-нотации-о-большое",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#использование-нотации-о-большое","aria-hidden":"true"},"#"),(0,t.Uk)(" Использование нотации О-большое")],-1),ia=(0,t._)("p",null,"Анализ сложности удобно применять для коммуникации, если разработчики знакомы с нотацией О-большое, то достаточно сказать какую сложность имеет алгоритм и всем станут понятны перспективы его использования.",-1),ha=(0,t._)("p",null,"Другое назначение нотации — способ сравнения алгоритмов между собой.",-1),ua=(0,t._)("h2",{id:"ссылки",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ссылки","aria-hidden":"true"},"#"),(0,t.Uk)(" Ссылки")],-1),da=(0,t.uE)('<h2 id="ссылки-на-эту-заметку" tabindex="-1"><a class="header-anchor" href="#ссылки-на-эту-заметку" aria-hidden="true">#</a> Ссылки на эту заметку</h2><p style="text-align:right;"><a href="https://github.com/Kverde/algorithms/blob/main/source/20221027223051.md" target="_blank"> Эта заметка на GitHub </a></p><p style="text-align:right;"><a href="https://discourse.comtext.space/new-topic?title=%D0%A1%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D0%BE%D0%B2&amp;body=&amp;category=algorithm" target="_blank"> Обсудить на форуме </a></p>',3),_a={},wa=(0,l(3744).Z)(_a,[["render",function(a,s){const l=(0,t.up)("mi"),_a=(0,t.up)("mo"),wa=(0,t.up)("mrow"),ga=(0,t.up)("annotation"),oa=(0,t.up)("semantics"),fa=(0,t.up)("math"),ka=(0,t.up)("mn"),Wa=(0,t.up)("msup"),Ua=(0,t.up)("msub"),xa=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)("div",null,[n,e,p,(0,t._)("p",null,[(0,t.Uk)("Для анализа сложности применяется специальная математическая нотация — О-большое. О-большое определяет порядок роста в худшем случае. Это означает, что для алгоритма со сложностью "),(0,t._)("span",m,[(0,t._)("span",c,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n)")])),_:1})])),_:1})])),_:1})]),r]),(0,t.Uk)(" при увеличении входных данных в 3 раза потребуется в 3 раза больше времени на выполнение, а для алгоритма со сложностью "),(0,t._)("span",i,[(0,t._)("span",h,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(Wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n^2)")])),_:1})])),_:1})])),_:1})]),u]),(0,t.Uk)(" при таким же увеличении входных данных в 3 раза время выполнения увеличится уже в "),(0,t._)("span",d,[(0,t._)("span",_,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(Wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("3")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("=")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("9")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("3^2 = 9")])),_:1})])),_:1})])),_:1})]),w]),(0,t.Uk)(" раз.")]),(0,t._)("p",null,[(0,t.Uk)("Так как О-большое определяет именно худший случай, то для алгоритма со сложностью "),(0,t._)("span",g,[(0,t._)("span",o,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n)")])),_:1})])),_:1})])),_:1})]),f]),(0,t.Uk)(" в любом случае не потребует больше чем "),(0,t._)("span",k,[(0,t._)("span",W,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1})])),_:1})])),_:1})]),U]),(0,t.Uk)(" операций.")]),x,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("span",y,[(0,t._)("span",v,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("l")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("o")])),_:1}),(0,t.Wm)(Ua,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("g")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(log_{2}(n))")])),_:1})])),_:1})])),_:1})]),M])]),(0,t._)("li",null,[(0,t._)("span",b,[(0,t._)("span",O,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n)")])),_:1})])),_:1})])),_:1})]),D])]),(0,t._)("li",null,[(0,t._)("span",E,[(0,t._)("span",z,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("∗")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("l")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("o")])),_:1}),(0,t.Wm)(Ua,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("g")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n * log_{2}(n))")])),_:1})])),_:1})])),_:1})]),L])]),(0,t._)("li",null,[(0,t._)("span",B,[(0,t._)("span",C,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(Wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n^2)")])),_:1})])),_:1})])),_:1})]),A])]),(0,t._)("li",null,[(0,t._)("span",G,[(0,t._)("span",R,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("!")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n!)")])),_:1})])),_:1})])),_:1})]),H])])]),J,K,N,P,(0,t._)("p",null,[(0,t.Uk)("Например, есть два алгоритма со сложностью "),(0,t._)("span",S,[(0,t._)("span",T,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("c")])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("∗")])),_:1}),(0,t.Wm)(Wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(c * n^2)")])),_:1})])),_:1})])),_:1})]),Z]),(0,t.Uk)(" и "),(0,t._)("span",j,[(0,t._)("span",q,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("k")])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("∗")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(k * n)")])),_:1})])),_:1})])),_:1})]),F]),(0,t.Uk)(". Константы "),(0,t._)("span",I,[(0,t._)("span",Q,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("c")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("c")])),_:1})])),_:1})])),_:1})]),V]),(0,t.Uk)(" и "),(0,t._)("span",X,[(0,t._)("span",Y,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("k")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("k")])),_:1})])),_:1})])),_:1})]),$]),(0,t.Uk)(" не используются в расчете О-большого, но в реальных алгоритмах они могут означать количество операций (сравнений, присваиваний и др.). Если "),(0,t._)("span",aa,[(0,t._)("span",sa,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("c")])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("=")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("2")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("c = 2")])),_:1})])),_:1})])),_:1})]),la]),(0,t.Uk)(", а "),(0,t._)("span",ta,[(0,t._)("span",na,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("k")])),_:1}),(0,t.Wm)(_a,null,{default:(0,t.w5)((()=>[(0,t.Uk)("=")])),_:1}),(0,t.Wm)(ka,null,{default:(0,t.w5)((()=>[(0,t.Uk)("100")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("k=100")])),_:1})])),_:1})])),_:1})]),ea]),(0,t.Uk)(". то при размере входных данных равном 10, алгоритмы будут выполнятся за 200 и 1000, получается, что алгоритм со сложностью "),(0,t._)("span",pa,[(0,t._)("span",ma,[(0,t.Wm)(fa,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,t.w5)((()=>[(0,t.Wm)(oa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(wa,null,{default:(0,t.w5)((()=>[(0,t.Wm)(l,{mathvariant:"script"},{default:(0,t.w5)((()=>[(0,t.Uk)("O")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)("(")])),_:1}),(0,t.Wm)(l,null,{default:(0,t.w5)((()=>[(0,t.Uk)("n")])),_:1}),(0,t.Wm)(_a,{stretchy:"false"},{default:(0,t.w5)((()=>[(0,t.Uk)(")")])),_:1})])),_:1}),(0,t.Wm)(ga,{encoding:"application/x-tex"},{default:(0,t.w5)((()=>[(0,t.Uk)("\\mathcal{O}(n)")])),_:1})])),_:1})])),_:1})]),ca]),(0,t.Uk)(" выполняется быстрее. Но если размер данных увеличится до 100, то соотношение изменится: 100000 и 1000. При росте входных данных разница будет только расти.")]),ra,ia,ha,ua,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Wm)(xa,{to:"/BhargavaGrokaemAlgoritmy2018.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Грокаем алгоритмы. Адитья Бхаргава. Питер. 2018")])),_:1}),(0,t.Uk)(". Глава 1. Знакомство с алгоритмами. «О-большое»")]),(0,t._)("li",null,[(0,t.Wm)(xa,{to:"/BhargavaGrokaemAlgoritmy2018.html"},{default:(0,t.w5)((()=>[(0,t.Uk)("Грокаем алгоритмы. Адитья Бхаргава. Питер. 2018")])),_:1}),(0,t.Uk)(". Глава 4. Быстрая сортировка. Снова об «О-большом»")])]),da])}]])}}]);