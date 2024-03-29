export declare const ElTooltipV2: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly alwaysOn: BooleanConstructor;
    readonly fullTransition: BooleanConstructor;
    readonly transitionProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, null, unknown, unknown, unknown>;
    readonly teleported: BooleanConstructor;
    readonly to: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, "body", unknown, unknown, unknown>;
    readonly ariaLabel: StringConstructor;
    readonly arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly contentClass: StringConstructor;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    readonly reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
    readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
    readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly alwaysOn: BooleanConstructor;
        readonly fullTransition: BooleanConstructor;
        readonly transitionProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, null, unknown, unknown, unknown>;
        readonly teleported: BooleanConstructor;
        readonly to: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, "body", unknown, unknown, unknown>;
        readonly ariaLabel: StringConstructor;
        readonly arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
        readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly contentClass: StringConstructor;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        readonly reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
        readonly strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
        readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly defaultOpen: BooleanConstructor;
        readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    refedProps: import("vue").ToRefs<Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly alwaysOn: BooleanConstructor;
        readonly fullTransition: BooleanConstructor;
        readonly transitionProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, null, unknown, unknown, unknown>;
        readonly teleported: BooleanConstructor;
        readonly to: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, "body", unknown, unknown, unknown>;
        readonly ariaLabel: StringConstructor;
        readonly arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
        readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly contentClass: StringConstructor;
        readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        readonly reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
        readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
        readonly strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
        readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
        readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly defaultOpen: BooleanConstructor;
        readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>>;
    arrowProps: {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        readonly offset?: number | undefined;
        readonly height?: number | undefined;
        readonly width?: number | undefined;
        readonly effect?: string | undefined;
        readonly placement?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown> | undefined;
        readonly strategy?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown> | undefined;
        readonly style?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown> | undefined;
        readonly teleported?: boolean | undefined;
        readonly ariaLabel?: string | undefined;
        readonly onBlur?: ((e: Event) => boolean | void) | undefined;
        readonly onFocus?: ((e: Event) => boolean | void) | undefined;
        readonly open?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly contentClass?: string | undefined;
        readonly onClick?: ((e: Event) => boolean | void) | undefined;
        readonly showArrow?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly to?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, unknown, unknown>;
        readonly onMouseLeave?: ((e: Event) => boolean | void) | undefined;
        readonly onMouseEnter?: ((e: Event) => boolean | void) | undefined;
        readonly reference?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown> | undefined;
        readonly delayDuration?: number | undefined;
        readonly onOpenChange?: ((state: boolean) => void) | undefined;
        readonly "onUpdate:open"?: ((state: boolean) => void) | undefined;
        readonly defaultOpen?: boolean | undefined;
        readonly onMouseDown?: ((e: Event) => boolean | void) | undefined;
        readonly arrowPadding?: number | undefined;
        readonly transitionProps?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, unknown, unknown> | undefined;
        readonly alwaysOn?: boolean | undefined;
        readonly fullTransition?: boolean | undefined;
    };
    contentProps: {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        readonly offset?: number | undefined;
        readonly height?: number | undefined;
        readonly width?: number | undefined;
        readonly effect?: string | undefined;
        readonly placement?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown> | undefined;
        readonly strategy?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown> | undefined;
        readonly style?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown> | undefined;
        readonly teleported?: boolean | undefined;
        readonly ariaLabel?: string | undefined;
        readonly onBlur?: ((e: Event) => boolean | void) | undefined;
        readonly onFocus?: ((e: Event) => boolean | void) | undefined;
        readonly open?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly contentClass?: string | undefined;
        readonly onClick?: ((e: Event) => boolean | void) | undefined;
        readonly showArrow?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly to?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, unknown, unknown>;
        readonly onMouseLeave?: ((e: Event) => boolean | void) | undefined;
        readonly onMouseEnter?: ((e: Event) => boolean | void) | undefined;
        readonly reference?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown> | undefined;
        readonly delayDuration?: number | undefined;
        readonly onOpenChange?: ((state: boolean) => void) | undefined;
        readonly "onUpdate:open"?: ((state: boolean) => void) | undefined;
        readonly defaultOpen?: boolean | undefined;
        readonly onMouseDown?: ((e: Event) => boolean | void) | undefined;
        readonly arrowPadding?: number | undefined;
        readonly transitionProps?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, unknown, unknown> | undefined;
        readonly alwaysOn?: boolean | undefined;
        readonly fullTransition?: boolean | undefined;
    };
    rootProps: {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        readonly offset?: number | undefined;
        readonly height?: number | undefined;
        readonly width?: number | undefined;
        readonly effect?: string | undefined;
        readonly placement?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown> | undefined;
        readonly strategy?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown> | undefined;
        readonly style?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown> | undefined;
        readonly teleported?: boolean | undefined;
        readonly ariaLabel?: string | undefined;
        readonly onBlur?: ((e: Event) => boolean | void) | undefined;
        readonly onFocus?: ((e: Event) => boolean | void) | undefined;
        readonly open?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly contentClass?: string | undefined;
        readonly onClick?: ((e: Event) => boolean | void) | undefined;
        readonly showArrow?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly to?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, unknown, unknown>;
        readonly onMouseLeave?: ((e: Event) => boolean | void) | undefined;
        readonly onMouseEnter?: ((e: Event) => boolean | void) | undefined;
        readonly reference?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown> | undefined;
        readonly delayDuration?: number | undefined;
        readonly onOpenChange?: ((state: boolean) => void) | undefined;
        readonly "onUpdate:open"?: ((state: boolean) => void) | undefined;
        readonly defaultOpen?: boolean | undefined;
        readonly onMouseDown?: ((e: Event) => boolean | void) | undefined;
        readonly arrowPadding?: number | undefined;
        readonly transitionProps?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, unknown, unknown> | undefined;
        readonly alwaysOn?: boolean | undefined;
        readonly fullTransition?: boolean | undefined;
    };
    triggerProps: {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        readonly offset?: number | undefined;
        readonly height?: number | undefined;
        readonly width?: number | undefined;
        readonly effect?: string | undefined;
        readonly placement?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown> | undefined;
        readonly strategy?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown> | undefined;
        readonly style?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown> | undefined;
        readonly teleported?: boolean | undefined;
        readonly ariaLabel?: string | undefined;
        readonly onBlur?: ((e: Event) => boolean | void) | undefined;
        readonly onFocus?: ((e: Event) => boolean | void) | undefined;
        readonly open?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly contentClass?: string | undefined;
        readonly onClick?: ((e: Event) => boolean | void) | undefined;
        readonly showArrow?: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
        readonly to?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, unknown, unknown>;
        readonly onMouseLeave?: ((e: Event) => boolean | void) | undefined;
        readonly onMouseEnter?: ((e: Event) => boolean | void) | undefined;
        readonly reference?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown> | undefined;
        readonly delayDuration?: number | undefined;
        readonly onOpenChange?: ((state: boolean) => void) | undefined;
        readonly "onUpdate:open"?: ((state: boolean) => void) | undefined;
        readonly defaultOpen?: boolean | undefined;
        readonly onMouseDown?: ((e: Event) => boolean | void) | undefined;
        readonly arrowPadding?: number | undefined;
        readonly transitionProps?: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, unknown, unknown> | undefined;
        readonly alwaysOn?: boolean | undefined;
        readonly fullTransition?: boolean | undefined;
    };
    TooltipV2Root: import("vue").DefineComponent<{
        readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly defaultOpen: BooleanConstructor;
        readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
            readonly defaultOpen: BooleanConstructor;
            readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
            readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
            readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        _open: import("vue").Ref<boolean>;
        triggerRef: import("vue").Ref<HTMLElement | null>;
        open: import("vue").WritableComputedRef<boolean>;
        isOpenDelayed: import("vue").ComputedRef<boolean>;
        onDelayedOpen: import("@vueuse/shared").Fn;
        clearTimer: import("@vueuse/shared").Fn;
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
        contentId: import("vue").Ref<string>;
        onNormalOpen: () => void;
        onDelayOpen: () => void;
        onOpen: () => void;
        onClose: () => void;
        onChange: (open: boolean) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
        readonly defaultOpen: BooleanConstructor;
        readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
        readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    }>>, {
        open: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        delayDuration: number;
        onOpenChange: (state: boolean) => void;
        "onUpdate:open": (state: boolean) => void;
        defaultOpen: boolean;
    }>;
    TooltipV2Arrow: import("vue").DefineComponent<{
        side: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/common").TooltipV2Sides>, unknown, true, import("./src/common").TooltipV2Sides, unknown>;
        width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            side: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/common").TooltipV2Sides>, unknown, true, import("./src/common").TooltipV2Sides, unknown>;
            width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
            height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
            style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
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
        arrowRef: import("vue").Ref<HTMLElement | null>;
        arrowStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        side: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/common").TooltipV2Sides>, unknown, true, import("./src/common").TooltipV2Sides, unknown>;
        width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
        style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
    }>>, {
        height: number;
        width: number;
        style: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown>;
    }>;
    TooltipV2Content: import("vue").DefineComponent<{
        nowrap: BooleanConstructor;
        ariaLabel: StringConstructor;
        arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        contentClass: StringConstructor;
        placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
        strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            nowrap: BooleanConstructor;
            ariaLabel: StringConstructor;
            arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
            effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
            contentClass: StringConstructor;
            placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
            reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
            offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
            strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
            showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        triggerRef: import("vue").Ref<HTMLElement | null>;
        contentId: import("vue").Ref<string>;
        placement: import("vue").Ref<import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>>;
        strategy: import("vue").Ref<import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown>>;
        arrowRef: import("vue").Ref<HTMLElement | null>;
        referenceRef: import("vue").Ref<HTMLElement | import("@floating-ui/dom").VirtualElement | undefined>;
        contentRef: import("vue").Ref<HTMLElement | undefined>;
        middlewareData: import("vue").Ref<{
            [x: string]: any;
            arrow?: {
                x?: number | undefined;
                y?: number | undefined;
                centerOffset: number;
            } | undefined;
            autoPlacement?: {
                index?: number | undefined;
                overflows: {
                    placement: import("@floating-ui/core").Placement;
                    overflows: number[];
                }[];
            } | undefined;
            flip?: {
                index?: number | undefined;
                overflows: {
                    placement: import("@floating-ui/core").Placement;
                    overflows: number[];
                }[];
            } | undefined;
            hide?: {
                referenceHidden?: boolean | undefined;
                escaped?: boolean | undefined;
                referenceHiddenOffsets?: {
                    top: number;
                    right: number;
                    bottom: number;
                    left: number;
                } | undefined;
                escapedOffsets?: {
                    top: number;
                    right: number;
                    bottom: number;
                    left: number;
                } | undefined;
            } | undefined;
            offset?: {
                x: number;
                y: number;
            } | undefined;
            shift?: {
                x: number;
                y: number;
            } | undefined;
        }>;
        x: import("vue").Ref<number | undefined>;
        y: import("vue").Ref<number | undefined>;
        update: () => Promise<void>;
        zIndex: number;
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
        side: import("vue").ComputedRef<string>;
        contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        arrowStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        contentClass: import("vue").ComputedRef<(string | undefined)[]>;
        ElVisuallyHidden: import("vue").DefineComponent<{
            style: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
        }, {
            computedStyle: import("vue").ComputedRef<any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            style: {
                type: (ObjectConstructor | StringConstructor | ArrayConstructor)[];
            };
        }>>, {}>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        nowrap: BooleanConstructor;
        ariaLabel: StringConstructor;
        arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
        effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        contentClass: StringConstructor;
        placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
        offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
        strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
        showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    }>>, {
        offset: number;
        effect: string;
        placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
        strategy: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown>;
        nowrap: boolean;
        showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        reference: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown>;
        arrowPadding: number;
    }>;
    TooltipV2Trigger: import("vue").DefineComponent<{
        onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        nowrap: BooleanConstructor;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
            nowrap: BooleanConstructor;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        onClose: () => void;
        onOpen: () => void;
        onDelayOpen: () => void;
        triggerRef: import("vue").Ref<HTMLElement | null>;
        contentId: import("vue").Ref<string>;
        isMousedown: boolean;
        setTriggerRef: (el: HTMLElement | null) => void;
        onMouseup: () => void;
        onMouseenter: (event: Event) => void;
        onMouseleave: (event: Event) => void;
        onMousedown: (event: Event) => void;
        onFocus: (event: Event) => void;
        onBlur: (event: Event) => void;
        onClick: (event: Event) => void;
        events: {
            blur: (event: Event) => void;
            click: (event: Event) => void;
            focus: (event: Event) => void;
            mousedown: (event: Event) => void;
            mouseenter: (event: Event) => void;
            mouseleave: (event: Event) => void;
        };
        setEvents: <T extends (e: Event) => void>(el: HTMLElement | null | undefined, events: Record<string, T>, type: "addEventListener" | "removeEventListener") => void;
        ForwardRef: import("vue").DefineComponent<{
            readonly setRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/forward-ref").RefSetter>, unknown, true, unknown, unknown>;
            readonly onlyChild: BooleanConstructor;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly setRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/forward-ref").RefSetter>, unknown, true, unknown, unknown>;
            readonly onlyChild: BooleanConstructor;
        }>>, {
            onlyChild: boolean;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
        nowrap: BooleanConstructor;
    }>>, {
        onBlur: (e: Event) => boolean | void;
        onFocus: (e: Event) => boolean | void;
        nowrap: boolean;
        onClick: (e: Event) => boolean | void;
        onMouseLeave: (e: Event) => boolean | void;
        onMouseEnter: (e: Event) => boolean | void;
        onMouseDown: (e: Event) => boolean | void;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly alwaysOn: BooleanConstructor;
    readonly fullTransition: BooleanConstructor;
    readonly transitionProps: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, null, unknown, unknown, unknown>;
    readonly teleported: BooleanConstructor;
    readonly to: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, "body", unknown, unknown, unknown>;
    readonly ariaLabel: StringConstructor;
    readonly arrowPadding: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<number>, 5, unknown, unknown, unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly contentClass: StringConstructor;
    readonly placement: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "bottom", unknown, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    readonly reference: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, null, unknown, unknown, unknown>;
    readonly offset: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 8, unknown, unknown, unknown>;
    readonly strategy: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "absolute", unknown, "fixed" | "absolute", unknown>;
    readonly showArrow: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly onBlur: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onClick: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onFocus: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseDown: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseEnter: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly onMouseLeave: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(e: Event) => boolean | void>, unknown, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly height: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 10, unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, null, unknown, unknown, unknown>;
    readonly delayDuration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 300, unknown, unknown, unknown>;
    readonly defaultOpen: BooleanConstructor;
    readonly open: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly onOpenChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
    readonly 'onUpdate:open': import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<(state: boolean) => void>, unknown, unknown, unknown, unknown>;
}>>, {
    offset: number;
    height: number;
    width: number;
    effect: string;
    placement: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Placement>, "top" | "right" | "bottom" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end", unknown>;
    strategy: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("@floating-ui/core").Strategy>, "fixed" | "absolute", unknown>;
    style: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties | null>, unknown, unknown>;
    teleported: boolean;
    onBlur: (e: Event) => boolean | void;
    onFocus: (e: Event) => boolean | void;
    open: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    onClick: (e: Event) => boolean | void;
    showArrow: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    to: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<string | import("vue").RendererElement | null | undefined>, unknown, unknown>;
    onMouseLeave: (e: Event) => boolean | void;
    onMouseEnter: (e: Event) => boolean | void;
    reference: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<HTMLElement | import("@floating-ui/dom").VirtualElement | null>, unknown, unknown>;
    delayDuration: number;
    onOpenChange: (state: boolean) => void;
    "onUpdate:open": (state: boolean) => void;
    defaultOpen: boolean;
    onMouseDown: (e: Event) => boolean | void;
    arrowPadding: number;
    transitionProps: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("vue").TransitionProps | null>, unknown, unknown>;
    alwaysOn: boolean;
    fullTransition: boolean;
}>> & Record<string, any>;
export * from './src/arrow';
export * from './src/content';
export * from './src/root';
export * from './src/tooltip';
export * from './src/trigger';
export default ElTooltipV2;
