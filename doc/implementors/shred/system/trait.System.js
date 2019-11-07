(function() {var implementors = {};
implementors["amethyst_animation"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_animation/struct.VertexSkinningSystem.html\" title=\"struct amethyst_animation::VertexSkinningSystem\">VertexSkinningSystem</a>",synthetic:false,types:["amethyst_animation::skinning::systems::VertexSkinningSystem"]},{text:"impl&lt;'a, I, T&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_animation/struct.AnimationControlSystem.html\" title=\"struct amethyst_animation::AnimationControlSystem\">AnimationControlSystem</a>&lt;I, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"amethyst_animation/trait.AnimationSampling.html\" title=\"trait amethyst_animation::AnimationSampling\">AnimationSampling</a> + <a class=\"trait\" href=\"specs/world/comp/trait.Component.html\" title=\"trait specs::world::comp::Component\">Component</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>",synthetic:false,types:["amethyst_animation::systems::control::AnimationControlSystem"]},{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_animation/struct.SamplerInterpolationSystem.html\" title=\"struct amethyst_animation::SamplerInterpolationSystem\">SamplerInterpolationSystem</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"amethyst_animation/trait.AnimationSampling.html\" title=\"trait amethyst_animation::AnimationSampling\">AnimationSampling</a> + <a class=\"trait\" href=\"specs/world/comp/trait.Component.html\" title=\"trait specs::world::comp::Component\">Component</a>,&nbsp;</span>",synthetic:false,types:["amethyst_animation::systems::sampling::SamplerInterpolationSystem"]},];
implementors["amethyst_assets"] = [{text:"impl&lt;'a, T&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.PrefabLoaderSystem.html\" title=\"struct amethyst_assets::PrefabLoaderSystem\">PrefabLoaderSystem</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"amethyst_assets/trait.PrefabData.html\" title=\"trait amethyst_assets::PrefabData\">PrefabData</a>&lt;'a&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["amethyst_assets::prefab::system::PrefabLoaderSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.HotReloadSystem.html\" title=\"struct amethyst_assets::HotReloadSystem\">HotReloadSystem</a>",synthetic:false,types:["amethyst_assets::reload::HotReloadSystem"]},{text:"impl&lt;'a, A&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_assets/struct.Processor.html\" title=\"struct amethyst_assets::Processor\">Processor</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"amethyst_assets/trait.Asset.html\" title=\"trait amethyst_assets::Asset\">Asset</a> + <a class=\"trait\" href=\"amethyst_assets/trait.ProcessableAsset.html\" title=\"trait amethyst_assets::ProcessableAsset\">ProcessableAsset</a>,&nbsp;</span>",synthetic:false,types:["amethyst_assets::storage::Processor"]},];
implementors["amethyst_audio"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_audio/struct.AudioSystem.html\" title=\"struct amethyst_audio::AudioSystem\">AudioSystem</a>",synthetic:false,types:["amethyst_audio::systems::audio::AudioSystem"]},{text:"impl&lt;'a, F, R&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_audio/struct.DjSystem.html\" title=\"struct amethyst_audio::DjSystem\">DjSystem</a>&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut </a>R) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"type\" href=\"amethyst_audio/type.SourceHandle.html\" title=\"type amethyst_audio::SourceHandle\">SourceHandle</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"shred/world/trait.Resource.html\" title=\"trait shred::world::Resource\">Resource</a>,&nbsp;</span>",synthetic:false,types:["amethyst_audio::systems::dj::DjSystem"]},];
implementors["amethyst_controls"] = [{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"amethyst_input/bindings/trait.BindingTypes.html\" title=\"trait amethyst_input::bindings::BindingTypes\">BindingTypes</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_controls/struct.FlyMovementSystem.html\" title=\"struct amethyst_controls::FlyMovementSystem\">FlyMovementSystem</a>&lt;T&gt;",synthetic:false,types:["amethyst_controls::systems::FlyMovementSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_controls/struct.ArcBallRotationSystem.html\" title=\"struct amethyst_controls::ArcBallRotationSystem\">ArcBallRotationSystem</a>",synthetic:false,types:["amethyst_controls::systems::ArcBallRotationSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_controls/struct.FreeRotationSystem.html\" title=\"struct amethyst_controls::FreeRotationSystem\">FreeRotationSystem</a>",synthetic:false,types:["amethyst_controls::systems::FreeRotationSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_controls/struct.MouseFocusUpdateSystem.html\" title=\"struct amethyst_controls::MouseFocusUpdateSystem\">MouseFocusUpdateSystem</a>",synthetic:false,types:["amethyst_controls::systems::MouseFocusUpdateSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_controls/struct.CursorHideSystem.html\" title=\"struct amethyst_controls::CursorHideSystem\">CursorHideSystem</a>",synthetic:false,types:["amethyst_controls::systems::CursorHideSystem"]},];
implementors["amethyst_core"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_core/transform/systems/struct.TransformSystem.html\" title=\"struct amethyst_core::transform::systems::TransformSystem\">TransformSystem</a>",synthetic:false,types:["amethyst_core::transform::systems::TransformSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_core/struct.HideHierarchySystem.html\" title=\"struct amethyst_core::HideHierarchySystem\">HideHierarchySystem</a>",synthetic:false,types:["amethyst_core::hide_system::HideHierarchySystem"]},{text:"impl&lt;'s, S, V:&nbsp;'static&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'s&gt; for <a class=\"struct\" href=\"amethyst_core/struct.Pausable.html\" title=\"struct amethyst_core::Pausable\">Pausable</a>&lt;S, V&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S::<a class=\"type\" href=\"shred/system/trait.System.html#associatedtype.SystemData\" title=\"type shred::system::System::SystemData\">SystemData</a>: <a class=\"trait\" href=\"shred/system/trait.SystemData.html\" title=\"trait shred::system::SystemData\">SystemData</a>&lt;'s&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'s&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,&nbsp;</span>",synthetic:false,types:["amethyst_core::system_ext::Pausable"]},];
implementors["amethyst_input"] = [{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"amethyst_input/trait.BindingTypes.html\" title=\"trait amethyst_input::BindingTypes\">BindingTypes</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_input/struct.InputSystem.html\" title=\"struct amethyst_input::InputSystem\">InputSystem</a>&lt;T&gt;",synthetic:false,types:["amethyst_input::system::InputSystem"]},];
implementors["amethyst_network"] = [{text:"impl&lt;'a, E&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_network/struct.NetSocketSystem.html\" title=\"struct amethyst_network::NetSocketSystem\">NetSocketSystem</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + 'static,&nbsp;</span>",synthetic:false,types:["amethyst_network::network_socket::NetSocketSystem"]},];
implementors["amethyst_rendy"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/sprite_visibility/struct.SpriteVisibilitySortingSystem.html\" title=\"struct amethyst_rendy::sprite_visibility::SpriteVisibilitySortingSystem\">SpriteVisibilitySortingSystem</a>",synthetic:false,types:["amethyst_rendy::sprite_visibility::SpriteVisibilitySortingSystem"]},{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"amethyst_rendy/trait.Backend.html\" title=\"trait amethyst_rendy::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/system/struct.MeshProcessorSystem.html\" title=\"struct amethyst_rendy::system::MeshProcessorSystem\">MeshProcessorSystem</a>&lt;B&gt;",synthetic:false,types:["amethyst_rendy::system::MeshProcessorSystem"]},{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"amethyst_rendy/trait.Backend.html\" title=\"trait amethyst_rendy::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/system/struct.TextureProcessorSystem.html\" title=\"struct amethyst_rendy::system::TextureProcessorSystem\">TextureProcessorSystem</a>&lt;B&gt;",synthetic:false,types:["amethyst_rendy::system::TextureProcessorSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_rendy/visibility/struct.VisibilitySortingSystem.html\" title=\"struct amethyst_rendy::visibility::VisibilitySortingSystem\">VisibilitySortingSystem</a>",synthetic:false,types:["amethyst_rendy::visibility::VisibilitySortingSystem"]},];
implementors["amethyst_ui"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.BlinkSystem.html\" title=\"struct amethyst_ui::BlinkSystem\">BlinkSystem</a>",synthetic:false,types:["amethyst_ui::blink::BlinkSystem"]},{text:"impl&lt;'s&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'s&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiButtonSystem.html\" title=\"struct amethyst_ui::UiButtonSystem\">UiButtonSystem</a>",synthetic:false,types:["amethyst_ui::button::system::UiButtonSystem"]},{text:"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"amethyst_input/bindings/trait.BindingTypes.html\" title=\"trait amethyst_input::bindings::BindingTypes\">BindingTypes</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiMouseSystem.html\" title=\"struct amethyst_ui::UiMouseSystem\">UiMouseSystem</a>&lt;T&gt;",synthetic:false,types:["amethyst_ui::event::UiMouseSystem"]},{text:"impl&lt;'s, T&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'s&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.EventRetriggerSystem.html\" title=\"struct amethyst_ui::EventRetriggerSystem\">EventRetriggerSystem</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: EventRetrigger,&nbsp;</span>",synthetic:false,types:["amethyst_ui::event_retrigger::EventRetriggerSystem"]},{text:"impl&lt;'a, B:&nbsp;<a class=\"trait\" href=\"amethyst_rendy/types/trait.Backend.html\" title=\"trait amethyst_rendy::types::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiGlyphsSystem.html\" title=\"struct amethyst_ui::UiGlyphsSystem\">UiGlyphsSystem</a>&lt;B&gt;",synthetic:false,types:["amethyst_ui::glyphs::UiGlyphsSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiTransformSystem.html\" title=\"struct amethyst_ui::UiTransformSystem\">UiTransformSystem</a>",synthetic:false,types:["amethyst_ui::layout::UiTransformSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.ResizeSystem.html\" title=\"struct amethyst_ui::ResizeSystem\">ResizeSystem</a>",synthetic:false,types:["amethyst_ui::resize::ResizeSystem"]},{text:"impl&lt;'a, G&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.SelectionKeyboardSystem.html\" title=\"struct amethyst_ui::SelectionKeyboardSystem\">SelectionKeyboardSystem</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,&nbsp;</span>",synthetic:false,types:["amethyst_ui::selection::SelectionKeyboardSystem"]},{text:"impl&lt;'a, G, T:&nbsp;<a class=\"trait\" href=\"amethyst_input/bindings/trait.BindingTypes.html\" title=\"trait amethyst_input::bindings::BindingTypes\">BindingTypes</a>&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.SelectionMouseSystem.html\" title=\"struct amethyst_ui::SelectionMouseSystem\">SelectionMouseSystem</a>&lt;G, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,&nbsp;</span>",synthetic:false,types:["amethyst_ui::selection::SelectionMouseSystem"]},{text:"impl&lt;'a, G&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.CacheSelectionOrderSystem.html\" title=\"struct amethyst_ui::CacheSelectionOrderSystem\">CacheSelectionOrderSystem</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["amethyst_ui::selection_order_cache::CacheSelectionOrderSystem"]},{text:"impl&lt;'s&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'s&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.UiSoundSystem.html\" title=\"struct amethyst_ui::UiSoundSystem\">UiSoundSystem</a>",synthetic:false,types:["amethyst_ui::sound::UiSoundSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.TextEditingMouseSystem.html\" title=\"struct amethyst_ui::TextEditingMouseSystem\">TextEditingMouseSystem</a>",synthetic:false,types:["amethyst_ui::text::TextEditingMouseSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_ui/struct.TextEditingInputSystem.html\" title=\"struct amethyst_ui::TextEditingInputSystem\">TextEditingInputSystem</a>",synthetic:false,types:["amethyst_ui::text_editing::TextEditingInputSystem"]},];
implementors["amethyst_utils"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/auto_fov/struct.AutoFovSystem.html\" title=\"struct amethyst_utils::auto_fov::AutoFovSystem\">AutoFovSystem</a>",synthetic:false,types:["amethyst_utils::auto_fov::AutoFovSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/fps_counter/struct.FpsCounterSystem.html\" title=\"struct amethyst_utils::fps_counter::FpsCounterSystem\">FpsCounterSystem</a>",synthetic:false,types:["amethyst_utils::fps_counter::FpsCounterSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/ortho_camera/struct.CameraOrthoSystem.html\" title=\"struct amethyst_utils::ortho_camera::CameraOrthoSystem\">CameraOrthoSystem</a>",synthetic:false,types:["amethyst_utils::ortho_camera::CameraOrthoSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/time_destroy/struct.DestroyAtTimeSystem.html\" title=\"struct amethyst_utils::time_destroy::DestroyAtTimeSystem\">DestroyAtTimeSystem</a>",synthetic:false,types:["amethyst_utils::time_destroy::DestroyAtTimeSystem"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_utils/time_destroy/struct.DestroyInTimeSystem.html\" title=\"struct amethyst_utils::time_destroy::DestroyInTimeSystem\">DestroyInTimeSystem</a>",synthetic:false,types:["amethyst_utils::time_destroy::DestroyInTimeSystem"]},];
implementors["amethyst_window"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"amethyst_window/struct.WindowSystem.html\" title=\"struct amethyst_window::WindowSystem\">WindowSystem</a>",synthetic:false,types:["amethyst_window::system::WindowSystem"]},];
implementors["java_game"] = [{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"java_game/system/character_transform_update/struct.CharacterTransformUpdate.html\" title=\"struct java_game::system::character_transform_update::CharacterTransformUpdate\">CharacterTransformUpdate</a>",synthetic:false,types:["java_game::system::character_transform_update::CharacterTransformUpdate"]},{text:"impl&lt;'a&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"java_game/system/move_normal/struct.MoveNormal.html\" title=\"struct java_game::system::move_normal::MoveNormal\">MoveNormal</a>",synthetic:false,types:["java_game::system::move_normal::MoveNormal"]},];
implementors["specs_hierarchy"] = [{text:"impl&lt;'a, P&gt; <a class=\"trait\" href=\"shred/system/trait.System.html\" title=\"trait shred::system::System\">System</a>&lt;'a&gt; for <a class=\"struct\" href=\"specs_hierarchy/struct.HierarchySystem.html\" title=\"struct specs_hierarchy::HierarchySystem\">HierarchySystem</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"specs/world/comp/trait.Component.html\" title=\"trait specs::world::comp::Component\">Component</a> + <a class=\"trait\" href=\"specs_hierarchy/trait.Parent.html\" title=\"trait specs_hierarchy::Parent\">Parent</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P::<a class=\"type\" href=\"specs/world/comp/trait.Component.html#associatedtype.Storage\" title=\"type specs::world::comp::Component::Storage\">Storage</a>: <a class=\"trait\" href=\"specs/storage/track/trait.Tracked.html\" title=\"trait specs::storage::track::Tracked\">Tracked</a>,&nbsp;</span>",synthetic:false,types:["specs_hierarchy::HierarchySystem"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()