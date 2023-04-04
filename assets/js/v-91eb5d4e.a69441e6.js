"use strict";(self.webpackChunkalgorithms_way23_ru=self.webpackChunkalgorithms_way23_ru||[]).push([[9834],{9943:(a,n,e)=>{e.r(n),e.d(n,{data:()=>s});const s=JSON.parse('{"key":"v-91eb5d4e","path":"/20221119212521.html","title":"Использование функции max для ограничения числа снизу вместо условия","lang":"ru-RU","frontmatter":{"page_type":"code_tricks"},"excerpt":"","headers":[{"level":2,"title":"Ссылки на эту заметку","slug":"ссылки-на-эту-заметку","link":"#ссылки-на-эту-заметку","children":[]}],"git":{"updatedTime":1669660493000},"filePathRelative":"20221119212521.md"}')},8396:(a,n,e)=>{e.r(n),e.d(n,{default:()=>o});var s=e(6252);const t=[(0,s.uE)('<h1 id="использование-функции-max-для-ограничения-числа-снизу-вместо-условия" tabindex="-1"><a class="header-anchor" href="#использование-функции-max-для-ограничения-числа-снизу-вместо-условия" aria-hidden="true">#</a> Использование функции max для ограничения числа снизу вместо условия</h1><p>В задачах бывает нужно ограничить число снизу, например, может быть дано <code>n</code> и в формуле нужно использовать <code>n - 1</code> за исключением случая когда <code>n</code> равно нулю и в этом случае использовать ноль. Можно сделать это через условие:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>\n    r <span class="token operator">=</span> prepare<span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    r <span class="token operator">=</span> prepare<span class="token punctuation">(</span>n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Для упрощения кода можно использовать функцию <code>max</code> для того чтобы даже если разность будет меньше нуля в функцию всё равно был передан ноль.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>r <span class="token operator">=</span> prepare<span class="token punctuation">(</span><span class="token builtin">max</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ссылки-на-эту-заметку" tabindex="-1"><a class="header-anchor" href="#ссылки-на-эту-заметку" aria-hidden="true">#</a> Ссылки на эту заметку</h2><p style="text-align:right;"><a href="https://github.com/Kverde/algorithms/blob/main/source/20221119212521.md" target="_blank"> Эта заметка на GitHub </a></p><p style="text-align:right;"><a href="https://discourse.comtext.space/new-topic?title=%D0%98%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8%20max%20%D0%B4%D0%BB%D1%8F%20%D0%BE%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D0%BD%D0%B8%D1%8F%20%D1%87%D0%B8%D1%81%D0%BB%D0%B0%20%D1%81%D0%BD%D0%B8%D0%B7%D1%83%20%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%BE%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F&amp;body=&amp;category=algorithm" target="_blank"> Обсудить на форуме </a></p>',8)],p={},o=(0,e(3744).Z)(p,[["render",function(a,n){return(0,s.wg)(),(0,s.iD)("div",null,t)}]])}}]);