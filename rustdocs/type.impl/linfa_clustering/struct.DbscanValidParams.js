(function() {var type_impls = {
"linfa_clustering":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DbscanValidParams%3CF,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#84-105\">source</a><a href=\"#impl-DbscanValidParams%3CF,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: Float, D: Distance&lt;F&gt;, N: NearestNeighbour&gt; <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.tolerance\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#86-88\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_clustering/struct.DbscanValidParams.html#tymethod.tolerance\" class=\"fn\">tolerance</a>(&amp;self) -&gt; F</h4></section></summary><div class=\"docblock\"><p>Nearest neighbour algorithm used for range queries</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.minimum_points\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#92-94\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_clustering/struct.DbscanValidParams.html#tymethod.minimum_points\" class=\"fn\">minimum_points</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Minimum number of neighboring points a point needs to have to be a core<br />\npoint and not a noise point.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.dist_fn\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#97-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_clustering/struct.DbscanValidParams.html#tymethod.dist_fn\" class=\"fn\">dist_fn</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;D</a></h4></section></summary><div class=\"docblock\"><p>Distance metric used in the DBSCAN calculation</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.nn_algo\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#102-104\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_clustering/struct.DbscanValidParams.html#tymethod.nn_algo\" class=\"fn\">nn_algo</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;N</a></h4></section></summary><div class=\"docblock\"><p>Nearest neighbour algorithm used for range queries</p>\n</div></details></div></details>",0,"linfa_clustering::AppxDbscanValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#impl-Debug-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Float, D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + Distance&lt;F&gt;, N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + NearestNeighbour&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","linfa_clustering::AppxDbscanValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3CDatasetBase%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3COption%3Cusize%3E%3E,+Dim%3C%5Busize;+1%5D%3E%3E%3E%3E-for-DbscanValidParams%3CF,+DF,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/algorithm.rs.html#168-181\">source</a><a href=\"#impl-Transformer%3CDatasetBase%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+T%3E,+DatasetBase%3CArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3COption%3Cusize%3E%3E,+Dim%3C%5Busize;+1%5D%3E%3E%3E%3E-for-DbscanValidParams%3CF,+DF,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: Float, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;, DF: Distance&lt;F&gt;, N: NearestNeighbour, T&gt; Transformer&lt;DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">2</a>]&gt;&gt;, T&gt;, DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">2</a>]&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;&gt;&gt; for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, DF, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/algorithm.rs.html#174-180\">source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(\n    &amp;self,\n    dataset: DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;, T&gt;\n) -&gt; DatasetBase&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array1.html\" title=\"type ndarray::aliases::Array1\">Array1</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;&gt;</h4></section></div></details>","Transformer<DatasetBase<ArrayBase<D, Dim<[usize; 2]>>, T>, DatasetBase<ArrayBase<D, Dim<[usize; 2]>>, ArrayBase<OwnedRepr<Option<usize>>, Dim<[usize; 1]>>>>","linfa_clustering::AppxDbscanValidParams"],["<section id=\"impl-StructuralPartialEq-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#impl-StructuralPartialEq-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: Float, D: Distance&lt;F&gt;, N: NearestNeighbour&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h3></section>","StructuralPartialEq","linfa_clustering::AppxDbscanValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#impl-Clone-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Float, D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + Distance&lt;F&gt;, N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + NearestNeighbour&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","linfa_clustering::AppxDbscanValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#impl-PartialEq-for-DbscanValidParams%3CF,+D,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Float, D: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + Distance&lt;F&gt;, N: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + NearestNeighbour&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/hyperparams.rs.html#12\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, D, N&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","linfa_clustering::AppxDbscanValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Transformer%3C%26ArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3COption%3Cusize%3E%3E,+Dim%3C%5Busize;+1%5D%3E%3E%3E-for-DbscanValidParams%3CF,+DF,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/algorithm.rs.html#107-166\">source</a><a href=\"#impl-Transformer%3C%26ArrayBase%3CD,+Dim%3C%5Busize;+2%5D%3E%3E,+ArrayBase%3COwnedRepr%3COption%3Cusize%3E%3E,+Dim%3C%5Busize;+1%5D%3E%3E%3E-for-DbscanValidParams%3CF,+DF,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: Float, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;, DF: Distance&lt;F&gt;, N: NearestNeighbour&gt; Transformer&lt;&amp;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">2</a>]&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;&gt; for <a class=\"struct\" href=\"linfa_clustering/struct.DbscanValidParams.html\" title=\"struct linfa_clustering::DbscanValidParams\">DbscanValidParams</a>&lt;F, DF, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.transform\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_clustering/dbscan/algorithm.rs.html#110-165\">source</a><a href=\"#method.transform\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">transform</a>(&amp;self, observations: &amp;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Ix2.html\" title=\"type ndarray::aliases::Ix2\">Ix2</a>&gt;) -&gt; <a class=\"type\" href=\"https://docs.rs/ndarray/0.15/ndarray/aliases/type.Array1.html\" title=\"type ndarray::aliases::Array1\">Array1</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;&gt;</h4></section></div></details>","Transformer<&ArrayBase<D, Dim<[usize; 2]>>, ArrayBase<OwnedRepr<Option<usize>>, Dim<[usize; 1]>>>","linfa_clustering::AppxDbscanValidParams"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()