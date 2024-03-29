export declare const ElSpace: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly class: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, "", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
    readonly alignment: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string>, "center", unknown, unknown, unknown>;
    readonly prefixCls: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly spacer: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").VNodeChild>, null, unknown, unknown, unknown>;
    readonly wrap: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fill: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fillRatio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 100, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, NumberConstructor], unknown, unknown, "" | "default" | "small" | "large", number | [number, number]>;
}, () => string | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | {
    [name: string]: unknown;
    $stable?: boolean | undefined;
} | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly direction: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "horizontal", unknown, "horizontal" | "vertical", unknown>;
    readonly class: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, "", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
    readonly alignment: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string>, "center", unknown, unknown, unknown>;
    readonly prefixCls: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly spacer: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").VNodeChild>, null, unknown, unknown, unknown>;
    readonly wrap: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fill: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly fillRatio: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 100, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, NumberConstructor], unknown, unknown, "" | "default" | "small" | "large", number | [number, number]>;
}>>, {
    size: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor, NumberConstructor], "" | "default" | "small" | "large", number | [number, number]>;
    fill: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    style: import("vue").StyleValue;
    direction: import("element-plus/es/utils").BuildPropType<StringConstructor, "horizontal" | "vertical", unknown>;
    wrap: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    class: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | string[] | Record<string, boolean>>, unknown, unknown>;
    alignment: string;
    prefixCls: string;
    spacer: import("vue").VNodeChild;
    fillRatio: number;
}>> & Record<string, any>;
export default ElSpace;
export * from './src/space';
export * from './src/use-space';
