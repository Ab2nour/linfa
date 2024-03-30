(function() {var implementors = {
"linfa":[],
"linfa_svm":[["impl&lt;'a&gt; Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt;"],["impl Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f32.html\">f32</a>&gt;"],["impl Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt;"],["impl&lt;'a&gt; Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.f64.html\">f64</a>&gt;"],["impl&lt;'a, F: Float, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;&gt; Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;F, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.bool.html\">bool</a>&gt;"],["impl&lt;F: Float, D: <a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;&gt; Predict&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.array.html\">1</a>]&gt;&gt;, Pr&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;F, Pr&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()