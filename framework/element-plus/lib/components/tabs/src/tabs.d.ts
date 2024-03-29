import type { TabsPaneContext } from 'element-plus/es/tokens';
import type { ComponentInternalInstance, ExtractPropTypes } from 'vue';
import type { Awaitable } from 'element-plus/es/utils';
export declare type TabPanelName = string | number;
export declare const tabsProps: {
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newName: TabPanelName, oldName: TabPanelName) => Awaitable<void | boolean>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
};
export declare type TabsProps = ExtractPropTypes<typeof tabsProps>;
export declare const tabsEmits: {
    "update:modelValue": (name: TabPanelName) => boolean;
    /** @deprecated use `tab-change` instead */
    input: (name: TabPanelName) => boolean;
    'tab-click': (pane: TabsPaneContext, ev: Event) => boolean;
    'tab-change': (name: TabPanelName) => boolean;
    edit: (paneName: TabPanelName | undefined, action: 'remove' | 'add') => boolean;
    'tab-remove': (name: TabPanelName) => boolean;
    'tab-add': () => boolean;
};
export declare type TabsEmits = typeof tabsEmits;
declare const _default: import("vue").DefineComponent<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newName: TabPanelName, oldName: TabPanelName) => Awaitable<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (name: TabPanelName) => boolean;
    /** @deprecated use `tab-change` instead */
    input: (name: TabPanelName) => boolean;
    'tab-click': (pane: {
        uid: number;
        instance: import("vue").ShallowReactive<ComponentInternalInstance>;
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
    'tab-change': (name: TabPanelName) => boolean;
    edit: (paneName: TabPanelName | undefined, action: "remove" | "add") => boolean;
    'tab-remove': (name: TabPanelName) => boolean;
    'tab-add': () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "card" | "border-card", unknown>;
    readonly activeName: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly closable: BooleanConstructor;
    readonly addable: BooleanConstructor;
    readonly modelValue: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly editable: BooleanConstructor;
    readonly tabPosition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "top", unknown, "top" | "right" | "bottom" | "left", unknown>;
    readonly beforeLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(newName: TabPanelName, oldName: TabPanelName) => Awaitable<boolean | void>>, () => boolean, unknown, unknown, unknown>;
    readonly stretch: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((name: TabPanelName) => any) | undefined;
    onInput?: ((name: TabPanelName) => any) | undefined;
    "onTab-click"?: ((pane: {
        uid: number;
        instance: import("vue").ShallowReactive<ComponentInternalInstance>;
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
    "onTab-change"?: ((name: TabPanelName) => any) | undefined;
    onEdit?: ((paneName: TabPanelName | undefined, action: "remove" | "add") => any) | undefined;
    "onTab-remove"?: ((name: TabPanelName) => any) | undefined;
    "onTab-add"?: (() => any) | undefined;
}, {
    type: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "card" | "border-card", unknown>;
    modelValue: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    closable: boolean;
    activeName: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    tabPosition: import("element-plus/es/utils").BuildPropType<StringConstructor, "top" | "right" | "bottom" | "left", unknown>;
    beforeLeave: (newName: TabPanelName, oldName: TabPanelName) => Awaitable<boolean | void>;
    addable: boolean;
    editable: boolean;
    stretch: boolean;
}>;
export default _default;
