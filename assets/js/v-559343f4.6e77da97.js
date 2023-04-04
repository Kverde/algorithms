"use strict";(self.webpackChunkalgorithms_way23_ru=self.webpackChunkalgorithms_way23_ru||[]).push([[1520],{3425:(a,n,e)=>{e.r(n),e.d(n,{data:()=>l});const l=JSON.parse('{"key":"v-559343f4","path":"/20221023135032.html","title":"Линейный поиск (Linear search)","lang":"ru-RU","frontmatter":{"page_type":"algorithm"},"excerpt":"","headers":[{"level":2,"title":"Псевдокод","slug":"псевдокод","link":"#псевдокод","children":[]},{"level":2,"title":"Пример на Python","slug":"пример-на-python","link":"#пример-на-python","children":[]},{"level":2,"title":"Требования","slug":"требования","link":"#требования","children":[]},{"level":2,"title":"Варианты алгоритма","slug":"варианты-алгоритма","link":"#варианты-алгоритма","children":[]},{"level":2,"title":"Анализ сложности","slug":"анализ-сложности","link":"#анализ-сложности","children":[]},{"level":2,"title":"Связанные алгоритмы","slug":"связанные-алгоритмы","link":"#связанные-алгоритмы","children":[]},{"level":2,"title":"Ссылки на эту заметку","slug":"ссылки-на-эту-заметку","link":"#ссылки-на-эту-заметку","children":[]}],"git":{"updatedTime":1669660493000},"filePathRelative":"20221023135032.md"}')},3060:(a,n,e)=>{e.r(n),e.d(n,{default:()=>W});var l=e(6252);const s=(0,l._)("h1",{id:"линеиныи-поиск-linear-search",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#линеиныи-поиск-linear-search","aria-hidden":"true"},"#"),(0,l.Uk)(" Линейный поиск (Linear search)")],-1),t=(0,l._)("p",null,"Алгоритм может использоваться для:",-1),i=(0,l._)("ul",null,[(0,l._)("li",null,"Проверки наличия элемента в коллекции"),(0,l._)("li",null,"Поиска индекса элемента в коллекции"),(0,l._)("li",null,"Поиска элемента в коллекции по определённому признаку")],-1),r=(0,l._)("h2",{id:"псевдокод",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#псевдокод","aria-hidden":"true"},"#"),(0,l.Uk)(" Псевдокод")],-1),d=(0,l.uE)('<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>алгоритм линейный_поиск(последовательность, искомый_элемент)\nначало\n  для каждого элемента в последовательности\n    если элемент равен искомомый_элемент\n      то возвращаем индекс элемента и завершаем алгоритм\n  \n  возвращаем -1\nконец\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="пример-на-python" tabindex="-1"><a class="header-anchor" href="#пример-на-python" aria-hidden="true">#</a> Пример на Python</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">linear_search</span><span class="token punctuation">(</span>lst<span class="token punctuation">,</span> element<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> i<span class="token punctuation">,</span> item <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>lst<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">if</span> item <span class="token operator">==</span> element<span class="token punctuation">:</span>\n            <span class="token keyword">return</span> i\n\n    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="требования" tabindex="-1"><a class="header-anchor" href="#требования" aria-hidden="true">#</a> Требования</h2>',4),u=(0,l._)("h2",{id:"варианты-алгоритма",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#варианты-алгоритма","aria-hidden":"true"},"#"),(0,l.Uk)(" Варианты алгоритма")],-1),p=(0,l._)("p",null,"Для определения искомого элемента может использоваться не только простое сравнение но и любое другое условие, например, вместе искомого элемента в функцию линейного поиска может передаваться функция-предикат.",-1),c=(0,l._)("p",null,[(0,l.Uk)("Линейный поиск может искать больше одного элемента, в этом случае лучше использовать "),(0,l._)("code",null,"filter"),(0,l.Uk)(".")],-1),h=(0,l._)("p",null,"Линейный поиск может применяться для поиска минимального или максимального элемента.",-1),m=(0,l._)("h2",{id:"анализ-сложности",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#анализ-сложности","aria-hidden":"true"},"#"),(0,l.Uk)(" Анализ сложности")],-1),o={class:"katex"},k={class:"katex-mathml"},_=(0,l.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>',1),v={class:"katex"},f={class:"katex-mathml"},w=(0,l.uE)('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span>',1),g=(0,l._)("h2",{id:"связанные-алгоритмы",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#связанные-алгоритмы","aria-hidden":"true"},"#"),(0,l.Uk)(" Связанные алгоритмы")],-1),U=(0,l._)("h2",{id:"ссылки-на-эту-заметку",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#ссылки-на-эту-заметку","aria-hidden":"true"},"#"),(0,l.Uk)(" Ссылки на эту заметку")],-1),b=(0,l._)("p",{style:{"text-align":"right"}},[(0,l._)("a",{href:"https://github.com/Kverde/algorithms/blob/main/source/20221023135032.md",target:"_blank"}," Эта заметка на GitHub ")],-1),y=(0,l._)("p",{style:{"text-align":"right"}},[(0,l._)("a",{href:"https://discourse.comtext.space/new-topic?title=%D0%9B%D0%B8%D0%BD%D0%B5%D0%B9%D0%BD%D1%8B%D0%B9%20%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%20%28Linear%20search%29&body=&category=algorithm",target:"_blank"}," Обсудить на форуме ")],-1),x={},W=(0,e(3744).Z)(x,[["render",function(a,n){const e=(0,l.up)("RouterLink"),x=(0,l.up)("mi"),W=(0,l.up)("mo"),D=(0,l.up)("mrow"),B=(0,l.up)("annotation"),O=(0,l.up)("semantics"),L=(0,l.up)("math"),M=(0,l.up)("mn");return(0,l.wg)(),(0,l.iD)("div",null,[s,(0,l._)("p",null,[(0,l.Uk)("Линейный поиск — алгоритм поиска в неупорядоченном "),(0,l.Wm)(e,{to:"/20221025215309.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("массиве")])),_:1}),(0,l.Uk)(" или "),(0,l.Wm)(e,{to:"/20221024232535.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("связанном списке")])),_:1}),(0,l.Uk)(".")]),t,i,r,(0,l._)("p",null,[(0,l.Uk)("Алгоритм линейного поиска предельно прост: последовательно перебираем элементы коллекции пока не найден нужный элемент. Если элемент не найден, то возвращаем признак его отсутствия. Так как индексом элемента может быть только "),(0,l.Wm)(e,{to:"/20221108225922.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("натуральное число")])),_:1}),(0,l.Uk)(", то, обычно, в качестве признака отсутствия элемента в коллекции, функция линейного поиска возвращает число -1.")]),d,(0,l._)("p",null,[(0,l.Uk)("Для линейного поиска нет особых требований к входным данным. "),(0,l.Wm)(e,{to:"/20221108225121.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Произвольный доступ")])),_:1}),(0,l.Uk)(" для входной коллекции не обязателен, сортировка тоже не требуется.")]),u,p,c,h,m,(0,l._)("p",null,[(0,l.Uk)("Алгоритм выполняет количество действие пропорционально размеру входной коллекции поэтому временная сложность равна "),(0,l._)("span",o,[(0,l._)("span",k,[(0,l.Wm)(L,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{mathvariant:"script"},{default:(0,l.w5)((()=>[(0,l.Uk)("O")])),_:1}),(0,l.Wm)(W,{stretchy:"false"},{default:(0,l.w5)((()=>[(0,l.Uk)("(")])),_:1}),(0,l.Wm)(x,{mathvariant:"script"},{default:(0,l.w5)((()=>[(0,l.Uk)("n")])),_:1}),(0,l.Wm)(W,{stretchy:"false"},{default:(0,l.w5)((()=>[(0,l.Uk)(")")])),_:1})])),_:1}),(0,l.Wm)(B,{encoding:"application/x-tex"},{default:(0,l.w5)((()=>[(0,l.Uk)("\\mathcal{O(n)}")])),_:1})])),_:1})])),_:1})]),_]),(0,l.Uk)(".")]),(0,l._)("p",null,[(0,l.Uk)("Потребление памяти не зависит от размера входной коллекции — используется только несколько локальных переменных, поэтому потребление памяти равно "),(0,l._)("span",v,[(0,l._)("span",f,[(0,l.Wm)(L,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:(0,l.w5)((()=>[(0,l.Wm)(O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(x,{mathvariant:"script"},{default:(0,l.w5)((()=>[(0,l.Uk)("O")])),_:1}),(0,l.Wm)(W,{stretchy:"false"},{default:(0,l.w5)((()=>[(0,l.Uk)("(")])),_:1}),(0,l.Wm)(M,{mathvariant:"script"},{default:(0,l.w5)((()=>[(0,l.Uk)("1")])),_:1}),(0,l.Wm)(W,{stretchy:"false"},{default:(0,l.w5)((()=>[(0,l.Uk)(")")])),_:1})])),_:1}),(0,l.Wm)(B,{encoding:"application/x-tex"},{default:(0,l.w5)((()=>[(0,l.Uk)("\\mathcal{O(1)}")])),_:1})])),_:1})])),_:1})]),w]),(0,l.Uk)(".")]),g,(0,l._)("p",null,[(0,l.Uk)("Если массив отсортирован то более эффективно использовать "),(0,l.Wm)(e,{to:"/20221025215226.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("бинарный поиск")])),_:1}),(0,l.Uk)(".")]),U,(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(e,{to:"/20221025215226.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Бинарный поиск (Binary search)")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"/20221123224315.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Инвариант")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"/20221124190034.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Использование барьера для упрощения условия перебора списка")])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"/20221023134905.html"},{default:(0,l.w5)((()=>[(0,l.Uk)("Сортировка выбором (Selection sort)")])),_:1})])]),b,y])}]])}}]);