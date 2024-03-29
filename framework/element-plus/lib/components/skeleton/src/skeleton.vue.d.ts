declare const _default: import("vue").DefineComponent<{
    readonly animated: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("../../../utils").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("../../../utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("../../../utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly animated: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly count: import("../../../utils").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
        readonly rows: import("../../../utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
        readonly loading: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly throttle: import("../../../utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
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
    uiLoading: import("vue").Ref<boolean>;
    ElSkeletonItem: import("vue").DefineComponent<{
        readonly variant: import("../../../utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
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
        PictureFilled: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly variant: import("../../../utils").BuildPropReturn<StringConstructor, "text", unknown, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
    }>>, {
        variant: import("../../../utils").BuildPropType<StringConstructor, "text" | "button" | "circle" | "caption" | "image" | "rect" | "h1" | "h3" | "p", unknown>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly animated: import("../../../utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly count: import("../../../utils").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
    readonly rows: import("../../../utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly loading: import("../../../utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly throttle: import("../../../utils").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}>>, {
    loading: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    animated: import("../../../utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    count: number;
    rows: number;
    throttle: number;
}>;
export default _default;
