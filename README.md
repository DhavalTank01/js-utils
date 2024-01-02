<h1 id="javascript-utility-package-dhavaltankjs-utils">JavaScript Utility Package (@dhavaltank/js-utils)</h1>
<p>A collection of functions i use regularly and don&#39;t want to write again</p>
<h2 id="installation">Installation</h2>
<p>Install my-project with npm</p>
<pre><code class="language-bash">npm install --save @dhavaltank/js-utils
yarn add @dhavaltank/js-utils
</code></pre>
<h3 id="utils-functions">Utils Functions</h3>
<h4 id="capitalizefirstletterstr"><code>capitalizeFirstLetter(str)</code></h4>
<p>Capitalizes a string</p>
<p>@params str: string (required)</p>
<pre><code class="language-typescript">import { capitalizeFirstLetter } from &quot;@dhavaltank/js-utils&quot;;
capitalizeFirstLetter(&quot;hello world&quot;); // &#39;Hello world&#39;
</code></pre>
<h4 id="titlecasestr"><code>titleCase(str)</code></h4>
<p>title case a string (capital first latter of each word)</p>
<p>@params str: string (required)</p>
<pre><code class="language-typescript">import { titleCase } from &quot;@dhavaltank/js-utils&quot;;
titleCase(&quot;hello world&quot;); // &#39;Hello World&#39;
</code></pre>
<h4 id="getinitialsstr"><code>getInitials(str)</code></h4>
<p>it will return initial latter of given word</p>
<p>@params str: string (required)</p>
<pre><code class="language-typescript">import { getInitials } from &quot;@dhavaltank/js-utils&quot;;
getInitials(&quot;hello&quot;); // &#39;H&#39;
getInitials(&quot;hello world&quot;); // &#39;HW&#39;
getInitials(&quot;hello world User&quot;); // &#39;HU&#39;
</code></pre>
<h4 id="addellipsisstr"><code>addEllipsis(str)</code></h4>
<p>it will add ellipsis at the end of string</p>
<p>@params str: string (required)</p>
<p>@params length: number (required)
defualt: 10</p>
<pre><code class="language-typescript">import { addEllipsis } from &quot;@dhavaltank/js-utils&quot;;
addEllipsis(&quot;hello world User&quot;); // &#39;HU&#39;
</code></pre>
<h2 id="authors">Authors</h2>
<ul>
<li><a href="https://www.github.com/dhavaltank01">Dhaval Tank</a></li>
</ul>
<h1 id="hi-im-dhaval-tank-👋">Hi, I&#39;m Dhaval Tank! 👋</h1>
<h2 id="🚀-about-me">🚀 About Me</h2>
<p>I&#39;m a MERN stack developer.</p>
<h2 id="license">License</h2>
<p><a href="https://choosealicense.com/licenses/mit/">MIT</a></p>
<h2 id="contributing">Contributing</h2>
<p>Contributions are always welcome!
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update tests as appropriate. </p>
