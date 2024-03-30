(function() {var type_impls = {
"linfa_reduction":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#104-116\">source</a><a href=\"#impl-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: ProjectionMethod, R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.target_dim\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#105-107\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html#tymethod.target_dim\" class=\"fn\">target_dim</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>&gt;</h4></section><section id=\"method.eps\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#109-111\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html#tymethod.eps\" class=\"fn\">eps</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt;</h4></section><section id=\"method.rng\" class=\"method\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#113-115\">source</a><h4 class=\"code-header\">pub fn <a href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html#tymethod.rng\" class=\"fn\">rng</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;R</a></h4></section></div></details>",0,"linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"],["<section id=\"impl-StructuralPartialEq-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#impl-StructuralPartialEq-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: ProjectionMethod, R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h3></section>","StructuralPartialEq","linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Fit%3CRec,+T,+ReductionError%3E-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#27-57\">source</a><a href=\"#impl-Fit%3CRec,+T,+ReductionError%3E-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, Proj, Rec, T, R&gt; Fit&lt;Rec, T, <a class=\"enum\" href=\"linfa_reduction/enum.ReductionError.html\" title=\"enum linfa_reduction::ReductionError\">ReductionError</a>&gt; for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;<div class=\"where\">where\n    F: Float,\n    Proj: ProjectionMethod,\n    Rec: Records&lt;Elem = F&gt;,\n    R: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Proj::RandomDistribution: <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/distributions/distribution/trait.Distribution.html\" title=\"trait rand::distributions::distribution::Distribution\">Distribution</a>&lt;F&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Object\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Object\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Object</a> = <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjection.html\" title=\"struct linfa_reduction::random_projection::RandomProjection\">RandomProjection</a>&lt;Proj, F&gt;</h4></section><section id=\"method.fit\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/algorithms.rs.html#37-56\">source</a><a href=\"#method.fit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">fit</a>(\n    &amp;self,\n    dataset: &amp;DatasetBase&lt;Rec, T&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::Object, <a class=\"enum\" href=\"linfa_reduction/enum.ReductionError.html\" title=\"enum linfa_reduction::ReductionError\">ReductionError</a>&gt;</h4></section></div></details>","Fit<Rec, T, ReductionError>","linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#impl-Clone-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + ProjectionMethod, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#impl-Debug-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + ProjectionMethod, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#impl-PartialEq-for-RandomProjectionValidParams%3CProj,+R%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Proj: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + ProjectionMethod, R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand/rng/trait.Rng.html\" title=\"trait rand::rng::Rng\">Rng</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linfa_reduction/random_projection/hyperparams.rs.html#70\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"linfa_reduction/random_projection/struct.RandomProjectionValidParams.html\" title=\"struct linfa_reduction::random_projection::RandomProjectionValidParams\">RandomProjectionValidParams</a>&lt;Proj, R&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","linfa_reduction::random_projection::GaussianRandomProjectionValidParams","linfa_reduction::random_projection::SparseRandomProjectionValidParams"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()