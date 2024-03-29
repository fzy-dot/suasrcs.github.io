declare const _default: import("vue").DefineComponent<{
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
    setEvents: <T extends (e: Event) => void>(el: HTMLElement | null | undefined, events: Record<string, T>, type: 'addEventListener' | 'removeEventListener') => void;
    ForwardRef: import("vue").DefineComponent<{
        readonly setRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./forward-ref").RefSetter>, unknown, true, unknown, unknown>;
        readonly onlyChild: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly setRef: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./forward-ref").RefSetter>, unknown, true, unknown, unknown>;
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
export default _default;
