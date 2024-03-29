declare const _default: import("vue").DefineComponent<{
    readonly appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
    readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly persistent: BooleanConstructor;
    readonly ariaLabel: StringConstructor;
    readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
    readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
    readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
    readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly pure: BooleanConstructor;
    readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
    readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
    readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly zIndex: NumberConstructor;
    readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
    readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
    readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
    readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
}, {
    ariaHidden: import("vue").ComputedRef<boolean>;
    entering: import("vue").Ref<boolean>;
    leaving: import("vue").Ref<boolean>;
    id: import("vue").Ref<string>;
    intermediateOpen: import("vue").Ref<boolean>;
    contentStyle: import("vue").ComputedRef<any>;
    contentRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            offset: number;
            effect: string;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus/es/components/popper").Placement, unknown>;
            popperClass: string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            boundariesPadding: number;
            fallbackPlacements: import("element-plus/es/components/popper").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import("element-plus/es/components/popper").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            style: import("vue").StyleValue;
            className: string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            visible: boolean;
            pure: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            readonly visible: BooleanConstructor;
            readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly pure: BooleanConstructor;
            readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly zIndex: NumberConstructor;
            readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
            readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
            readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
            readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        }>> & {
            onMouseleave?: ((...args: any[]) => any) | undefined;
            onMouseenter?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "offset" | "effect" | "placement" | "popperClass" | "boundariesPadding" | "fallbackPlacements" | "gpuAcceleration" | "popperOptions" | "strategy" | "style" | "className" | "enterable" | "popperStyle" | "referenceEl" | "stopPopperMouseEvent" | "visible" | "pure">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "mouseenter" | "mouseleave", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            readonly visible: BooleanConstructor;
            readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly pure: BooleanConstructor;
            readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly zIndex: NumberConstructor;
            readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
            readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
            readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
            readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        }>> & {
            onMouseleave?: ((...args: any[]) => any) | undefined;
            onMouseenter?: ((...args: any[]) => any) | undefined;
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
                readonly visible: BooleanConstructor;
                readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly pure: BooleanConstructor;
                readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | (string | {
                    [x: string]: boolean;
                } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
                readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
                readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
                readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly zIndex: NumberConstructor;
                readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
                readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
                readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
                readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
                readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
                readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
                readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
            }>> & {
                onMouseleave?: ((...args: any[]) => any) | undefined;
                onMouseenter?: ((...args: any[]) => any) | undefined;
            }>>;
            popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
            contentRef: import("vue").Ref<HTMLElement | undefined>;
            triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
            nextZIndex: () => number;
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
            popperContentRef: import("vue").Ref<HTMLElement | undefined>;
            arrowRef: import("vue").Ref<HTMLElement | undefined>;
            arrowOffset: import("vue").Ref<number | undefined>;
            contentZIndex: import("vue").Ref<number>;
            computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
            contentStyle: import("vue").ComputedRef<any>;
            contentClass: import("vue").ComputedRef<((string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
            createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
                referenceEl: any;
                popperContentEl: any;
                arrowEl: any;
            }) => import("@popperjs/core").Instance;
            updatePopper: (shouldUpdateZIndex?: boolean) => void;
            togglePopperAlive: () => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("mouseenter" | "mouseleave")[], string, {
            offset: number;
            effect: string;
            placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus/es/components/popper").Placement, unknown>;
            popperClass: string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            boundariesPadding: number;
            fallbackPlacements: import("element-plus/es/components/popper").Placement[];
            gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperOptions: Partial<import("element-plus/es/components/popper").Options>;
            strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
            style: import("vue").StyleValue;
            className: string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[];
            enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            popperStyle: import("vue").StyleValue;
            referenceEl: HTMLElement;
            stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
            visible: boolean;
            pure: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
        readonly visible: BooleanConstructor;
        readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly pure: BooleanConstructor;
        readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
        readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
        readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
        readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly zIndex: NumberConstructor;
        readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
        readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
        readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
        readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
        readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
    }>> & {
        onMouseleave?: ((...args: any[]) => any) | undefined;
        onMouseenter?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
            readonly visible: BooleanConstructor;
            readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly pure: BooleanConstructor;
            readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | (string | {
                [x: string]: boolean;
            } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
            readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
            readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
            readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly zIndex: NumberConstructor;
            readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
            readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
            readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
            readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
            readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
            readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
        }>> & {
            onMouseleave?: ((...args: any[]) => any) | undefined;
            onMouseenter?: ((...args: any[]) => any) | undefined;
        }>>;
        popperInstanceRef: import("vue").Ref<import("@popperjs/core").Instance | undefined>;
        contentRef: import("vue").Ref<HTMLElement | undefined>;
        triggerRef: import("vue").Ref<import("../../..").Measurable | undefined>;
        nextZIndex: () => number;
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
        popperContentRef: import("vue").Ref<HTMLElement | undefined>;
        arrowRef: import("vue").Ref<HTMLElement | undefined>;
        arrowOffset: import("vue").Ref<number | undefined>;
        contentZIndex: import("vue").Ref<number>;
        computedReference: import("vue").ComputedRef<import("../../..").Measurable | undefined>;
        contentStyle: import("vue").ComputedRef<any>;
        contentClass: import("vue").ComputedRef<((string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | (string | {
            [x: string]: boolean;
        } | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined)[]>;
        createPopperInstance: ({ referenceEl, popperContentEl, arrowEl }: {
            referenceEl: any;
            popperContentEl: any;
            arrowEl: any;
        }) => import("@popperjs/core").Instance;
        updatePopper: (shouldUpdateZIndex?: boolean) => void;
        togglePopperAlive: () => void;
    }> & {} & {} & import("vue").ComponentCustomProperties) | null>;
    destroyed: import("vue").Ref<boolean>;
    shouldRender: import("vue").ComputedRef<boolean>;
    shouldShow: import("vue").ComputedRef<boolean>;
    open: import("vue").Ref<boolean>;
    onAfterShow: () => void;
    onBeforeEnter: () => void;
    onBeforeLeave: () => void;
    onContentEnter: (event: unknown) => void;
    onContentLeave: (event: unknown) => void;
    onTransitionLeave: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly appendTo: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
    readonly content: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly rawContent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly persistent: BooleanConstructor;
    readonly ariaLabel: StringConstructor;
    readonly visible: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<boolean | null>, null, unknown, unknown, unknown>;
    readonly transition: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "el-fade-in-linear", unknown, unknown, unknown>;
    readonly teleported: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly disabled: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly className: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "dark", unknown, unknown, unknown>;
    readonly enterable: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly pure: BooleanConstructor;
    readonly popperClass: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[]>, unknown, unknown, unknown, unknown>;
    readonly popperStyle: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly referenceEl: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement>, unknown, unknown, unknown, unknown>;
    readonly stopPopperMouseEvent: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly zIndex: NumberConstructor;
    readonly boundariesPadding: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly fallbackPlacements: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/components/popper").Placement[]>, () => never[], unknown, unknown, unknown>;
    readonly gpuAcceleration: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 12, unknown, unknown, unknown>;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "bottom", unknown, import("element-plus/es/components/popper").Placement, unknown>;
    readonly popperOptions: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<import("element-plus/es/components/popper").Options>>, () => {}, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "absolute", unknown, "fixed" | "absolute", unknown>;
    readonly showAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly hideAfter: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 200, unknown, unknown, unknown>;
}>>, {
    disabled: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    offset: number;
    effect: string;
    placement: import("element-plus/es/utils").BuildPropType<StringConstructor, import("element-plus/es/components/popper").Placement, unknown>;
    popperClass: string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[];
    showAfter: number;
    hideAfter: number;
    boundariesPadding: number;
    fallbackPlacements: import("element-plus/es/components/popper").Placement[];
    gpuAcceleration: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    popperOptions: Partial<import("element-plus/es/components/popper").Options>;
    strategy: import("element-plus/es/utils").BuildPropType<StringConstructor, "fixed" | "absolute", unknown>;
    style: import("vue").StyleValue;
    className: string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | (string | {
        [x: string]: boolean;
    } | any)[])[])[])[])[])[])[])[])[])[])[];
    enterable: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    popperStyle: import("vue").StyleValue;
    referenceEl: HTMLElement;
    stopPopperMouseEvent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    visible: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<boolean | null>, unknown, unknown>;
    pure: boolean;
    appendTo: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | HTMLElement>, unknown, unknown>;
    content: string;
    rawContent: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    transition: string;
    teleported: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    persistent: boolean;
}>;
export default _default;
