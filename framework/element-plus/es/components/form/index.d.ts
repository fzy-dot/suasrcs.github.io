import Form from './src/form.vue';
import FormItem from './src/form-item.vue';
export declare const ElForm: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly model: ObjectConstructor;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
    readonly labelPosition: StringConstructor;
    readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
    readonly disabled: BooleanConstructor;
    readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollToError: BooleanConstructor;
}, {
    COMPONENT_NAME: string;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly model: ObjectConstructor;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
        readonly labelPosition: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
        readonly inline: BooleanConstructor;
        readonly inlineMessage: BooleanConstructor;
        readonly statusIcon: BooleanConstructor;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
        readonly disabled: BooleanConstructor;
        readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
        readonly scrollToError: BooleanConstructor;
    }>> & {
        onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
    }>>;
    emit: (event: "validate", prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => void;
    fields: import("../..").FormItemContext[];
    formSize: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
    formClasses: import("vue").ComputedRef<(string | {
        [x: string]: string | boolean | undefined;
    })[]>;
    addField: (field: import("../..").FormItemContext) => void;
    removeField: (field: import("../..").FormItemContext) => void;
    resetFields: (props?: import("element-plus/es/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
    clearValidate: (props?: import("element-plus/es/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined) => void;
    isValidatable: import("vue").ComputedRef<boolean>;
    obtainValidateFields: (props: import("element-plus/es/utils").Arrayable<import("./src/form-item").FormItemProp>) => import("../..").FormItemContext[];
    validate: (callback?: import("../..").FormValidateCallback | undefined) => import("../..").FormValidationResult;
    doValidateField: (props?: import("element-plus/es/utils").Arrayable<import("./src/form-item").FormItemProp>) => Promise<boolean>;
    validateField: (props?: import("element-plus/es/utils").Arrayable<import("./src/form-item").FormItemProp> | undefined, callback?: import("../..").FormValidateCallback | undefined) => import("../..").FormValidationResult;
    scrollToField: (prop: import("./src/form-item").FormItemProp) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validate: (prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly model: ObjectConstructor;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Partial<Record<string, import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>>>, unknown, unknown, unknown, unknown>;
    readonly labelPosition: StringConstructor;
    readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly labelSuffix: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly inline: BooleanConstructor;
    readonly inlineMessage: BooleanConstructor;
    readonly statusIcon: BooleanConstructor;
    readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
    readonly disabled: BooleanConstructor;
    readonly validateOnRuleChange: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly hideRequiredAsterisk: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollToError: BooleanConstructor;
}>> & {
    onValidate?: ((prop: import("./src/form-item").FormItemProp, isValid: boolean, message: string) => any) | undefined;
}, {
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    disabled: boolean;
    rules: Partial<Record<string, import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>>;
    labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    labelSuffix: string;
    showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    validateOnRuleChange: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    hideRequiredAsterisk: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    inline: boolean;
    inlineMessage: boolean;
    statusIcon: boolean;
    scrollToError: boolean;
}>> & {
    FormItem: import("vue").DefineComponent<{
        readonly label: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
        readonly error: StringConstructor;
        readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
        readonly for: StringConstructor;
        readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly label: StringConstructor;
            readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
            readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
            readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
            readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
            readonly error: StringConstructor;
            readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
            readonly for: StringConstructor;
            readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
            readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
            readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
        }>> & {
            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
        }>>;
        slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        formContext: import("../..").FormContext | undefined;
        parentFormItemContext: import("../..").FormItemContext | undefined;
        _size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
        validateState: import("vue").Ref<"" | "success" | "error" | "validating">;
        validateStateDebounced: Readonly<import("vue").Ref<"" | "success" | "error" | "validating">>;
        validateMessage: import("vue").Ref<string>;
        formItemRef: import("vue").Ref<HTMLDivElement | undefined>;
        initialValue: any;
        isResettingField: boolean;
        labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        formItemClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean | undefined;
        })[]>;
        _inlineMessage: import("vue").ComputedRef<boolean>;
        validateClasses: import("vue").ComputedRef<(string | {
            [x: string]: boolean;
        })[]>;
        propString: import("vue").ComputedRef<string>;
        labelFor: import("vue").ComputedRef<string>;
        isNested: boolean;
        fieldValue: import("vue").ComputedRef<any>;
        _rules: import("vue").ComputedRef<import("../..").FormItemRule[]>;
        validateEnabled: import("vue").ComputedRef<boolean>;
        getFilteredRule: (trigger: string) => import("async-validator").RuleItem[];
        isRequired: import("vue").ComputedRef<boolean>;
        shouldShowError: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
        currentLabel: import("vue").ComputedRef<string>;
        setValidationState: (state: "" | "success" | "error" | "validating") => void;
        onValidationFailed: (error: import("../..").FormValidateFailure) => void;
        onValidationSucceeded: () => void;
        doValidate: (rules: import("async-validator").RuleItem[]) => Promise<true>;
        validate: (trigger: string, callback?: import("../..").FormValidateCallback | undefined) => import("../..").FormValidationResult;
        clearValidate: () => void;
        resetField: () => void;
        context: import("../..").FormItemContext;
        FormLabelWrap: import("vue").DefineComponent<{
            isAutoWidth: BooleanConstructor;
            updateAll: BooleanConstructor;
        }, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            isAutoWidth: BooleanConstructor;
            updateAll: BooleanConstructor;
        }>>, {
            isAutoWidth: boolean;
            updateAll: boolean;
        }>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly label: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
        readonly error: StringConstructor;
        readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
        readonly for: StringConstructor;
        readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
    }>>, {
        required: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
        rules: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown>;
        labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
        showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
        inlineMessage: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
        prop: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown>;
        validateStatus: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "error" | "validating", unknown>;
    }>;
};
export default ElForm;
export declare const ElFormItem: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
    readonly label: StringConstructor;
    readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
    readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
    readonly error: StringConstructor;
    readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
    readonly for: StringConstructor;
    readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly label: StringConstructor;
        readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
        readonly error: StringConstructor;
        readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
        readonly for: StringConstructor;
        readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
        readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
        readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    formContext: import("../..").FormContext | undefined;
    parentFormItemContext: import("../..").FormItemContext | undefined;
    _size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
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
    validateState: import("vue").Ref<"" | "success" | "error" | "validating">;
    validateStateDebounced: Readonly<import("vue").Ref<"" | "success" | "error" | "validating">>;
    validateMessage: import("vue").Ref<string>;
    formItemRef: import("vue").Ref<HTMLDivElement | undefined>;
    initialValue: any;
    isResettingField: boolean;
    labelStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
    formItemClasses: import("vue").ComputedRef<(string | {
        [x: string]: boolean | undefined;
    })[]>;
    _inlineMessage: import("vue").ComputedRef<boolean>;
    validateClasses: import("vue").ComputedRef<(string | {
        [x: string]: boolean;
    })[]>;
    propString: import("vue").ComputedRef<string>;
    labelFor: import("vue").ComputedRef<string>;
    isNested: boolean;
    fieldValue: import("vue").ComputedRef<any>;
    _rules: import("vue").ComputedRef<import("../..").FormItemRule[]>;
    validateEnabled: import("vue").ComputedRef<boolean>;
    getFilteredRule: (trigger: string) => import("async-validator").RuleItem[];
    isRequired: import("vue").ComputedRef<boolean>;
    shouldShowError: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
    currentLabel: import("vue").ComputedRef<string>;
    setValidationState: (state: "" | "success" | "error" | "validating") => void;
    onValidationFailed: (error: import("../..").FormValidateFailure) => void;
    onValidationSucceeded: () => void;
    doValidate: (rules: import("async-validator").RuleItem[]) => Promise<true>;
    validate: (trigger: string, callback?: import("../..").FormValidateCallback | undefined) => import("../..").FormValidationResult;
    clearValidate: () => void;
    resetField: () => void;
    context: import("../..").FormItemContext;
    FormLabelWrap: import("vue").DefineComponent<{
        isAutoWidth: BooleanConstructor;
        updateAll: BooleanConstructor;
    }, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        isAutoWidth: BooleanConstructor;
        updateAll: BooleanConstructor;
    }>>, {
        isAutoWidth: boolean;
        updateAll: boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
    readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown, unknown, unknown>;
    readonly error: StringConstructor;
    readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
    readonly for: StringConstructor;
    readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
}>>, {
    required: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    rules: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("element-plus/es/utils").Arrayable<import("../..").FormItemRule>>, unknown, unknown>;
    labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    inlineMessage: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    prop: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("./src/form-item").FormItemProp>, unknown, unknown>;
    validateStatus: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "error" | "validating", unknown>;
}>>;
export * from './src/form';
export * from './src/form-item';
export * from './src/types';
export declare type FormInstance = InstanceType<typeof Form>;
export declare type FormItemInstance = InstanceType<typeof FormItem>;
