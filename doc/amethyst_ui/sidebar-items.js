initSidebarItems({"enum":[["Anchor","Indicated where the anchor is, relative to the parent (or to the screen, if there is no parent). Follow a normal english Y,X naming."],["LineMode","How lines should behave when they are longer than the maximum line length."],["NoCustomUi","Type used when no custom ui is desired"],["ScaleMode","Indicates if the position and margins should be calculated in pixel or relative to their parent size."],["Stretch","Indicates if a component should be stretched."],["UiButtonActionType","Describes the type of a `UiButtonAction`."],["UiEventType","The type of ui event. Click happens if you start and stop clicking on the same ui element."],["UiImage","Image used UI widgets, often as background."],["UiWidget","Loadable ui components"]],"fn":[["default_system_font","Returns the default system font."],["get_all_font_handles","Returns all the handles to the system fonts."],["get_default_font","Get the system default fonts. If unable to, gets the local square.ttf font."],["list_system_font_families","Lists all installed font families on the system."],["targeted","Checks if an interactable entity is at the position `pos` and doesn't have anything on top blocking the check. If you have a non-interactable entity over an interactable entity, it will consider the interactable one blocked, depending on if `pos` is over the non-interactable one or not."]],"macro":[["define_widget","This macro allows you to define what components can be attached to a widget, and will automatically generate getters for all components you specify. For each component, you are required to specify which entity handle the component will be attached to."],["define_widget_component_fn_impl","Helper macro used inside `widget_components`"]],"struct":[["BlinkSystem","System updating the `Blink` component."],["CacheSelectionOrderSystem","System in charge of updating the CachedSelectionOrder resource on each frame."],["CachedSelectionOrder","A cache sorted by tab order and then by Entity. Used to quickly find the next or previous selectable entities."],["DrawUi","A UI drawing pass that draws UI elements and text in screen-space"],["DrawUiDesc","A UI drawing pass that draws UI elements and text in screen-space"],["EventRetriggerSystem","Links up the given in- and output types' `EventChannel`s listening to incoming events and calling `apply` on the respective `Retrigger` components."],["EventRetriggerSystemDesc","Builds an `EventRetriggerSystem`."],["FontAsset","A loaded set of fonts from a file."],["Interactable","A component that tags an entity as reactive to ui events. Will only work if the entity has a UiTransform component attached to it. Without this, the ui element will not generate events."],["RenderUi","A [RenderPlugin] for rendering UI elements."],["ResizeSystem","This system rearranges UI elements whenever the screen is resized using their `UiResize` component."],["ResizeSystemDesc","Builds a `ResizeSystem`."],["Selectable","Component indicating that a Ui entity is selectable. Generic Type: - G: Selection Group. Used to determine which entities can be selected together at the same time."],["Selected","Component indicating that a Ui entity is currently selected."],["SelectionKeyboardSystem","System managing the selection of entities. Reacts to `UiEvent`. Reacts to Tab and Shift+Tab."],["SelectionKeyboardSystemDesc","Builds a `SelectionKeyboardSystem`."],["SelectionMouseSystem","System handling the clicks on ui entities and selecting them, if applicable."],["SelectionMouseSystemDesc","Builds a `SelectionMouseSystem`."],["TextEditing","If this component is attached to an entity with a UiText then that UiText is editable. This component also controls how that editing works."],["TextEditingInputSystem","System managing the keyboard inputs for the editable text fields. ## Features * Adds and removes text. * Moves selection cursor. * Grows and shrinks selected text zone."],["TextEditingInputSystemDesc","Builds a `TextEditingInputSystem`."],["TextEditingMouseSystem","This system processes the underlying UI data as needed."],["TextEditingMouseSystemDesc","Builds a `TextEditingMouseSystem`."],["TtfFormat","Loads font files, supports TrueType and some OpenType files."],["UiBundle","UI bundle"],["UiButton","A $t widget, containing references to its associated entities."],["UiButtonAction","Describes an action targeted at a `UiButton`."],["UiButtonActionRetrigger","Attach this to an entity with a `UiButton` attached to it to trigger specific events when a user interaction happens."],["UiButtonBuilder","Convenience structure for building a button"],["UiButtonBuilderResources","Container for all the resources the builder needs to make a new UiButton."],["UiButtonData","Loadable `UiButton` data"],["UiButtonSystem","This system manages button mouse events.  It changes images and text colors, as well as playing audio when necessary."],["UiButtonSystemDesc","Builds a `UiButtonSystem`."],["UiCreator","Ui Creator, wrapper around loading and creating a UI directly."],["UiEvent","A ui event instance."],["UiFinder","Utility `SystemData` for finding UI entities based on `UiTransform` id"],["UiFormat","Ui format."],["UiGlyphsSystem","Manages the text editing cursor create, deletion and position."],["UiGlyphsSystemDesc","Builds a `UiGlyphsSystem`."],["UiImagePrefab","Loadable `UiImage` data. Adds UiImage component to the entity."],["UiLabel","A $t widget, containing references to its associated entities."],["UiLabelBuilder","Convenience structure for building a label"],["UiLabelBuilderResources","Container for all the resources the builder needs to make a new UiLabel."],["UiLoader","Specialised UI loader"],["UiMouseSystem","The system that generates events for `Interactable` enabled entities. The generic types A and B represent the A and B generic parameter of the InputHandler<A,B>."],["UiPlaySoundAction","Action that will trigger a sound to play in `UiSoundSystem`."],["UiResize","Whenever the window is resized the function in this component will be called on this entity's UiTransform, along with the new width and height of the window."],["UiSoundRetrigger","Attach this to an entity to play the respective sound when a `UiEvent` targets the entity."],["UiSoundSystem","Handles any dispatches `UiPlaySoundAction`s and plays the received sounds through the set `Output`."],["UiSoundSystemDesc","Builds a `UiSoundSystem`."],["UiText","A component used to display text in this entity's UiTransform"],["UiTextData","Loadable `UiText` data"],["UiTransform","The UiTransform represents the transformation of a ui element. Values are in pixel and the position is calculated from the bottom left of the screen to the center of the ui element's area."],["UiTransformData","Loadable `UiTransform` data. By default z is equal to one."],["UiTransformSystem","Manages the `Parent` component on entities having `UiTransform` It does almost the same as the `TransformSystem`, but with some differences, like `UiTransform` alignment and stretching."],["UiTransformSystemDesc","Builds a `UiTransformSystem`."],["Widgets","Widgets is an alias for a HashMap containing widgets mapped by their respective Id type. It's meant to be used as a resource for every widget type."]],"trait":[["EventReceiver","Describes anything that can receive events one by one or in batches. This lets whoever wants to receive triggered events decide on how they want to receive them, instead of forcing them to construct certain data structures such as a `Vec`."],["ToNativeWidget","Create native `UiWidget` from custom UI"],["Widget","A widget is an object that keeps track of all components and entities that make up an element of the user interface. Using the widget_components! macro, it's possible to generate methods that let you easily retrieve all components for a widget, and basically annotate which components the widget will definitely or maybe contain. Widgets are stored in their respective `Widgets` resource and referred to by their associated Id type. A widget will generally only contain fields for the entity Ids it consist of."],["WidgetId","A WidgetId is the type by which the different widgets of a type will be differentiated when you create and retrieve them. Generally you'll want something here that can generate a random id with a low chance of collision, since auto generation will be used whenever you don't explicitly don't provide an id to widget builders. It's possible to use something like a bare enum as a WidgetId, but be aware that whenever you're not supplying a WidgetId, you'll probably overwrite an existing widget that had the same default id."]],"type":[["FontHandle","A handle to font data stored with `amethyst_assets`."],["UiButtonActionRetriggerSystem","Provides an `EventRetriggerSystem` that will handle incoming `UiEvents` and trigger `UiButtonAction`s for `UiButton`s with an attached `UiButtonActionRetrigger` component."],["UiButtonActionRetriggerSystemDesc","Builds a `UiButtonActionRetriggerSystem`."],["UiLoaderSystem","Prefab loader system for UI"],["UiLoaderSystemDesc","Builds a `UiLoaderSystem`."],["UiPrefab","Ui prefab"],["UiSoundRetriggerSystem","Provides an `EventRetriggerSystem` that will handle incoming `UiEvent`s and trigger `UiPlaySoundAction`s for entities with attached `UiSoundRetrigger` components."],["UiSoundRetriggerSystemDesc","Builds a `UiSoundRetriggerSystem`."]]});