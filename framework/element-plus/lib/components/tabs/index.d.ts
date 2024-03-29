export declare const ElTabs: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newName: import("./src/tabs").TabPanelName, oldName: import("./src/tabs").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (name: import("./src/tabs").TabPanelName) => boolean;
    input: (name: import("./src/tabs").TabPanelName) => boolean;
    'tab-click': (pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => boolean;
    'tab-change': (name: import("./src/tabs").TabPanelName) => boolean;
    edit: (paneName: import("./src/tabs").TabPanelName | undefined, action: "remove" | "add") => boolean;
    'tab-remove': (name: import("./src/tabs").TabPanelName) => boolean;
    'tab-add': () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newName: import("./src/tabs").TabPanelName, oldName: import("./src/tabs").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((name: import("./src/tabs").TabPanelName) => any) | undefined;
    onInput?: ((name: import("./src/tabs").TabPanelName) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        instance: import("vue").ShallowReactive<import("vue").ComponentInternalInstance>;
        props: {
            readonly disabled: boolean;
            readonly name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly label: string;
            readonly closable: boolean;
            readonly lazy: boolean;
        };
        paneName: string | number | undefined;
        active: boolean;
        index: string | undefined;
        isClosable: boolean;
    }, ev: Event) => any) | undefined;
    "onTab-change"?: ((name: import("./src/tabs").TabPanelName) => any) | undefined;
    onEdit?: ((paneName: import("./src/tabs").TabPanelName | undefined, action: "remove" | "add") => any) | undefined;
    "onTab-remove"?: ((name: import("./src/tabs").TabPanelName) => any) | undefined;
    "onTab-add"?: (() => any) | undefined;
}, {
    type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    closable: boolean;
    activeName: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    tabPosition: import("element-plus/es/utils").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newName: import("./src/tabs").TabPanelName, oldName: import("./src/tabs").TabPanelName) => import("element-plus/es/utils").Awaitable<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
}>> & {
    TabPane: import("vue").DefineComponent<{
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly closable: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly lazy: BooleanConstructor;
    }, {
        COMPONENT_NAME: string;
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly closable: BooleanConstructor;
            readonly disabled: BooleanConstructor;
            readonly lazy: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        instance: import("vue").ComponentInternalInstance;
        tabsRoot: import("../..").TabsRootContext;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
        };
        index: import("vue").Ref<string | undefined>;
        isClosable: import("vue").ComputedRef<boolean>;
        active: Readonly<import("vue").Ref<boolean>>;
        loaded: import("vue").Ref<boolean>;
        paneName: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
        shouldBeRender: Readonly<import("vue").Ref<boolean>>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly closable: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly lazy: BooleanConstructor;
    }>>, {
        disabled: boolean;
        name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        label: string;
        closable: boolean;
        lazy: boolean;
    }>;
};
export declare const ElTabPane: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
}, {
    COMPONENT_NAME: string;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly closable: BooleanConstructor;
        readonly disabled: BooleanConstructor;
        readonly lazy: BooleanConstructor;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    instance: import("vue").ComponentInternalInstance;
    tabsRoot: import("../..").TabsRootContext;
    ns: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
    };
    index: import("vue").Ref<string | undefined>;
    isClosable: import("vue").ComputedRef<boolean>;
    active: Readonly<import("vue").Ref<boolean>>;
    loaded: import("vue").Ref<boolean>;
    paneName: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined>;
    shouldBeRender: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly name: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly lazy: BooleanConstructor;
}>>, {
    disabled: boolean;
    name: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    label: string;
    closable: boolean;
    lazy: boolean;
}>>;
export default ElTabs;
export * from './src/tabs';
export * from './src/tab-bar';
export * from './src/tab-nav';
export * from './src/tab-pane';
