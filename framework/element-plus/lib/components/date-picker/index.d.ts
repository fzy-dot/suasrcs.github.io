import type { SFCWithInstall } from 'element-plus/es/utils';
declare const _DatePicker: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./src/date-picker.type").IDatePickerType>;
        default: string;
    };
    id: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | (string | number | Date)[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./src/date-picker.type").IDatePickerType>;
        default: string;
    };
    id: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | (string | number | Date)[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./src/date-picker.type").IDatePickerType;
    disabled: boolean;
    name: string | unknown[];
    modelValue: string | number | Date | (string | number | Date)[];
    editable: boolean;
    popperClass: string;
    popperOptions: Partial<import("@popperjs/core").Options>;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    validateEvent: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    unlinkPanels: boolean;
}>>;
export default _DatePicker;
export declare const ElDatePicker: SFCWithInstall<import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<import("./src/date-picker.type").IDatePickerType>;
        default: string;
    };
    id: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | (string | number | Date)[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<import("./src/date-picker.type").IDatePickerType>;
        default: string;
    };
    id: {
        type: (StringConstructor | ArrayConstructor)[];
    };
    name: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    format: {
        type: StringConstructor;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    prefixIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    size: {
        type: import("vue").PropType<"" | "default" | "small" | "large">;
        validator: (val: string) => val is "" | "default" | "small" | "large";
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    popperOptions: {
        type: import("vue").PropType<Partial<import("@popperjs/core").Options>>;
        default: () => {};
    };
    modelValue: {
        type: import("vue").PropType<string | number | Date | (string | number | Date)[]>;
        default: string;
    };
    rangeSeparator: {
        type: StringConstructor;
        default: string;
    };
    startPlaceholder: StringConstructor;
    endPlaceholder: StringConstructor;
    defaultValue: {
        type: import("vue").PropType<Date | Date[]>;
    };
    defaultTime: {
        type: import("vue").PropType<Date | Date[]>;
    };
    isRange: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledHours: {
        type: FunctionConstructor;
    };
    disabledMinutes: {
        type: FunctionConstructor;
    };
    disabledSeconds: {
        type: FunctionConstructor;
    };
    disabledDate: {
        type: FunctionConstructor;
    };
    cellClassName: {
        type: FunctionConstructor;
    };
    shortcuts: {
        type: ArrayConstructor;
        default: () => never[];
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    unlinkPanels: BooleanConstructor;
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: import("./src/date-picker.type").IDatePickerType;
    disabled: boolean;
    name: string | unknown[];
    modelValue: string | number | Date | (string | number | Date)[];
    editable: boolean;
    popperClass: string;
    popperOptions: Partial<import("@popperjs/core").Options>;
    placeholder: string;
    readonly: boolean;
    clearable: boolean;
    prefixIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    validateEvent: boolean;
    clearIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    rangeSeparator: string;
    isRange: boolean;
    shortcuts: unknown[];
    arrowControl: boolean;
    unlinkPanels: boolean;
}>>;
