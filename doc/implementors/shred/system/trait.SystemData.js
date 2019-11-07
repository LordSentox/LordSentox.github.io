(function() {var implementors = {};
implementors["amethyst_assets"] = [{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.AssetLoaderSystemData.html\" title=\"struct amethyst_assets::AssetLoaderSystemData\">AssetLoaderSystemData</a>&lt;'a, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"amethyst_assets/trait.Asset.html\" title=\"trait amethyst_assets::Asset\">Asset</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.Loader.html\" title=\"struct amethyst_assets::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.AssetStorage.html\" title=\"struct amethyst_assets::AssetStorage\">AssetStorage</a>&lt;A&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_assets::helper::AssetLoaderSystemData"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.PrefabLoader.html\" title=\"struct amethyst_assets::PrefabLoader\">PrefabLoader</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.Loader.html\" title=\"struct amethyst_assets::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/struct.AssetStorage.html\" title=\"struct amethyst_assets::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_assets/struct.Prefab.html\" title=\"struct amethyst_assets::Prefab\">Prefab</a>&lt;T&gt;&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_assets::prefab::PrefabLoader"]},];
implementors["amethyst_rendy"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/shape/struct.ShapeUpload.html\" title=\"struct amethyst_rendy::shape::ShapeUpload\">ShapeUpload</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"enum\" href=\"amethyst_rendy/types/enum.Mesh.html\" title=\"enum amethyst_rendy::types::Mesh\">Mesh</a>&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_rendy::shape::ShapeUpload"]},];
implementors["amethyst_ui"] = [{text:"impl&lt;'a, G:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static, I:&nbsp;<a class=\"trait\" href=\"amethyst_ui/trait.WidgetId.html\" title=\"trait amethyst_ui::WidgetId\">WidgetId</a>&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiButtonBuilderResources.html\" title=\"struct amethyst_ui::UiButtonBuilderResources\">UiButtonBuilderResources</a>&lt;'a, G, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.FontAsset.html\" title=\"struct amethyst_ui::FontAsset\">FontAsset</a>&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"enum\" href=\"amethyst_rendy/types/enum.Texture.html\" title=\"enum amethyst_rendy::types::Texture\">Texture</a>&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.Handle.html\" title=\"struct amethyst_assets::storage::Handle\">Handle</a>&lt;<a class=\"enum\" href=\"amethyst_rendy/types/enum.Texture.html\" title=\"enum amethyst_rendy::types::Texture\">Texture</a>&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.Interactable.html\" title=\"struct amethyst_ui::Interactable\">Interactable</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_core/transform/components/parent/struct.Parent.html\" title=\"struct amethyst_core::transform::components::parent::Parent\">Parent</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiText.html\" title=\"struct amethyst_ui::UiText\">UiText</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiTransform.html\" title=\"struct amethyst_ui::UiTransform\">UiTransform</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.WriteExpect.html\" title=\"type shred::world::data::WriteExpect\">WriteExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.Widgets.html\" title=\"struct amethyst_ui::Widgets\">Widgets</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.UiButton.html\" title=\"struct amethyst_ui::UiButton\">UiButton</a>, I&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiSoundRetrigger.html\" title=\"struct amethyst_ui::UiSoundRetrigger\">UiSoundRetrigger</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiButtonActionRetrigger.html\" title=\"struct amethyst_ui::UiButtonActionRetrigger\">UiButtonActionRetrigger</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.Selectable.html\" title=\"struct amethyst_ui::Selectable\">Selectable</a>&lt;G&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::button::builder::UiButtonBuilderResources"]},{text:"impl&lt;'a, I:&nbsp;<a class=\"trait\" href=\"amethyst_ui/trait.WidgetId.html\" title=\"trait amethyst_ui::WidgetId\">WidgetId</a>&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiLabelBuilderResources.html\" title=\"struct amethyst_ui::UiLabelBuilderResources\">UiLabelBuilderResources</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"amethyst_ui/trait.WidgetId.html\" title=\"trait amethyst_ui::WidgetId\">WidgetId</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.FontAsset.html\" title=\"struct amethyst_ui::FontAsset\">FontAsset</a>&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiText.html\" title=\"struct amethyst_ui::UiText\">UiText</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiTransform.html\" title=\"struct amethyst_ui::UiTransform\">UiTransform</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.WriteExpect.html\" title=\"type shred::world::data::WriteExpect\">WriteExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.Widgets.html\" title=\"struct amethyst_ui::Widgets\">Widgets</a>&lt;<a class=\"struct\" href=\"amethyst_ui/struct.UiLabel.html\" title=\"struct amethyst_ui::UiLabel\">UiLabel</a>, I&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::label::UiLabelBuilderResources"]},{text:"impl&lt;'a, C, W&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiLoader.html\" title=\"struct amethyst_ui::UiLoader\">UiLoader</a>&lt;'a, C, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"amethyst_ui/trait.ToNativeWidget.html\" title=\"trait amethyst_ui::ToNativeWidget\">ToNativeWidget</a>&lt;W&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"amethyst_ui/trait.WidgetId.html\" title=\"trait amethyst_ui::WidgetId\">WidgetId</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"shred/world/data/type.ReadExpect.html\" title=\"type shred::world::data::ReadExpect\">ReadExpect</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/loader/struct.Loader.html\" title=\"struct amethyst_assets::loader::Loader\">Loader</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"shred/world/data/struct.Read.html\" title=\"struct shred::world::data::Read\">Read</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.AssetStorage.html\" title=\"struct amethyst_assets::storage::AssetStorage\">AssetStorage</a>&lt;<a class=\"type\" href=\"amethyst_ui/type.UiPrefab.html\" title=\"type amethyst_ui::UiPrefab\">UiPrefab</a>&lt;C::<a class=\"type\" href=\"amethyst_ui/trait.ToNativeWidget.html#associatedtype.PrefabData\" title=\"type amethyst_ui::ToNativeWidget::PrefabData\">PrefabData</a>, W&gt;&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::prefab::UiLoader"]},{text:"impl&lt;'a, C, W&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiCreator.html\" title=\"struct amethyst_ui::UiCreator\">UiCreator</a>&lt;'a, C, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"amethyst_ui/trait.ToNativeWidget.html\" title=\"trait amethyst_ui::ToNativeWidget\">ToNativeWidget</a>&lt;W&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"amethyst_ui/trait.WidgetId.html\" title=\"trait amethyst_ui::WidgetId\">WidgetId</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"amethyst_ui/struct.UiLoader.html\" title=\"struct amethyst_ui::UiLoader\">UiLoader</a>&lt;'a, C, W&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.WriteStorage.html\" title=\"type specs::storage::data::WriteStorage\">WriteStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_assets/storage/struct.Handle.html\" title=\"struct amethyst_assets::storage::Handle\">Handle</a>&lt;<a class=\"type\" href=\"amethyst_ui/type.UiPrefab.html\" title=\"type amethyst_ui::UiPrefab\">UiPrefab</a>&lt;C::<a class=\"type\" href=\"amethyst_ui/trait.ToNativeWidget.html#associatedtype.PrefabData\" title=\"type amethyst_ui::ToNativeWidget::PrefabData\">PrefabData</a>, W&gt;&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::prefab::UiCreator"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiFinder.html\" title=\"struct amethyst_ui::UiFinder\">UiFinder</a>&lt;'a&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.ReadStorage.html\" title=\"type specs::storage::data::ReadStorage\">ReadStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_ui/struct.UiTransform.html\" title=\"struct amethyst_ui::UiTransform\">UiTransform</a>&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_ui::transform::UiFinder"]},];
implementors["amethyst_utils"] = [{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/tag/struct.TagFinder.html\" title=\"struct amethyst_utils::tag::TagFinder\">TagFinder</a>&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.ReadStorage.html\" title=\"type specs::storage::data::ReadStorage\">ReadStorage</a>&lt;'a, <a class=\"struct\" href=\"amethyst_utils/tag/struct.Tag.html\" title=\"struct amethyst_utils::tag::Tag\">Tag</a>&lt;T&gt;&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["amethyst_utils::tag::TagFinder"]},];
implementors["specs_hierarchy"] = [{text:"impl&lt;'a, P&gt; <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt; for <a class=\"struct\" href=\"specs_hierarchy/struct.ParentData.html\" title=\"struct specs_hierarchy::ParentData\">ParentData</a>&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"specs/world/comp/trait.Component.html\" title=\"trait specs::world::comp::Component\">Component</a> + <a class=\"trait\" href=\"specs_hierarchy/trait.Parent.html\" title=\"trait specs_hierarchy::Parent\">Parent</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"type\" href=\"specs/world/comp/trait.Component.html#associatedtype.Storage\" title=\"type specs::world::comp::Component::Storage\">Storage</a>: <a class=\"trait\" href=\"specs/storage/track/trait.Tracked.html\" title=\"trait specs::storage::track::Tracked\">Tracked</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/world/entity/type.Entities.html\" title=\"type specs::world::entity::Entities\">Entities</a>&lt;'a&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"specs/storage/data/type.ReadStorage.html\" title=\"type specs::storage::data::ReadStorage\">ReadStorage</a>&lt;'a, P&gt;: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'a&gt;,&nbsp;</span>",synthetic:false,types:["specs_hierarchy::ParentData"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()