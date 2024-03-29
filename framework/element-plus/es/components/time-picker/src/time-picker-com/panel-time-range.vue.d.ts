import dayjs from 'dayjs';
import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    visible: BooleanConstructor;
    actualVisible: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    nsTime: {
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
    nsPicker: {
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
    arrowControl: any;
    onSetOption: (e: any) => void;
    setMaxSelectionRange: (start: any, end: any) => void;
    setMinSelectionRange: (start: any, end: any) => void;
    btnConfirmDisabled: import("vue").ComputedRef<boolean>;
    handleCancel: () => void;
    handleConfirm: (visible?: boolean) => void;
    t: import("element-plus/es/hooks").Translator;
    showSeconds: import("vue").ComputedRef<boolean>;
    minDate: import("vue").ComputedRef<dayjs.Dayjs>;
    maxDate: import("vue").ComputedRef<dayjs.Dayjs>;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    handleMinChange: (date: any) => void;
    handleMaxChange: (date: any) => void;
    minSelectableRange: import("vue").Ref<never[]>;
    maxSelectableRange: import("vue").Ref<never[]>;
    disabledHours_: (role: any, compare: any) => never[];
    disabledMinutes_: (hour: any, role: any, compare: any) => any;
    disabledSeconds_: (hour: any, minute: any, role: any, compare: any) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select-range" | "pick" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    actualVisible: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
    "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    format: string;
    actualVisible: boolean;
}>;
export default _default;
