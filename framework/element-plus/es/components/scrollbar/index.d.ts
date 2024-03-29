export declare const ElScrollbar: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly maxHeight: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly native: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly wrapStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
    readonly wrapClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewStyle: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], "", unknown, unknown, unknown>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly always: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly minSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
}, {
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
    scrollbar$: import("vue").Ref<HTMLDivElement | undefined>;
    wrap$: import("vue").Ref<HTMLDivElement | undefined>;
    resize$: import("vue").Ref<HTMLElement | undefined>;
    barRef: import("vue").Ref<any>;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    ratioX: import("vue").Ref<number>;
    ratioY: import("vue").Ref<number>;
    sizeWidth: import("vue").Ref<string>;
    sizeHeight: import("vue").Ref<string>;
    style: import("vue").ComputedRef<import("vue").StyleValue>;
    update: () => void;
    handleScroll: () => void;
    scrollTo: {
        (xCord: number, yCord?: number | undefined): void;
        (options: ScrollToOptions): void;
    };
    setScrollTop: (value: number) => void;
    setScrollLeft: (value: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    scroll: ({ scrollTop, scrollLeft, }: {
        scrollTop: number;
        scrollLeft: number;
    }) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly height: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly maxHeight: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly native: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly wrapStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, "", unknown, unknown, unknown>;
    readonly wrapClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewClass: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor], "", unknown, unknown, unknown>;
    readonly viewStyle: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], "", unknown, unknown, unknown>;
    readonly noresize: BooleanConstructor;
    readonly tag: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "div", unknown, unknown, unknown>;
    readonly always: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly minSize: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
}>> & {
    onScroll?: ((args_0: {
        scrollTop: number;
        scrollLeft: number;
    }) => any) | undefined;
}, {
    height: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    maxHeight: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    always: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    native: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    wrapStyle: import("vue").StyleValue;
    wrapClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewClass: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
    viewStyle: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
    tag: string;
    minSize: number;
    noresize: boolean;
}>> & Record<string, any>;
export default ElScrollbar;
export * from './src/util';
export * from './src/scrollbar';
export * from './src/thumb';
