import type { CSSProperties } from 'vue';
import type { RuleItem } from 'async-validator';
import type { FormItemContext, FormItemRule, FormValidateFailure } from 'element-plus/es/tokens';
import type { Arrayable } from 'element-plus/es/utils';
import type { FormItemValidateState } from './form-item';
declare const _default: import("vue").DefineComponent<{
    readonly label: StringConstructor;
    readonly labelWidth: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
    readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Arrayable<FormItemRule>>, unknown, unknown, unknown, unknown>;
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
        readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
        readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
        readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Arrayable<FormItemRule>>, unknown, unknown, unknown, unknown>;
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
    formContext: import("element-plus/es/tokens").FormContext | undefined;
    parentFormItemContext: FormItemContext | undefined;
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
    labelStyle: import("vue").ComputedRef<CSSProperties>;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
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
    _rules: import("vue").ComputedRef<FormItemRule[]>;
    validateEnabled: import("vue").ComputedRef<boolean>;
    getFilteredRule: (trigger: string) => RuleItem[];
    isRequired: import("vue").ComputedRef<boolean>;
    shouldShowError: import("vue").ComputedRef<import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>>;
    currentLabel: import("vue").ComputedRef<string>;
    setValidationState: (state: FormItemValidateState) => void;
    onValidationFailed: (error: FormValidateFailure) => void;
    onValidationSucceeded: () => void;
    doValidate: (rules: RuleItem[]) => Promise<true>;
    validate: (trigger: string, callback?: import("element-plus/es/tokens").FormValidateCallback | undefined) => import("element-plus/es/tokens").FormValidationResult;
    clearValidate: () => void;
    resetField: () => void;
    context: FormItemContext;
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
    readonly prop: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("./form-item").FormItemProp>, unknown, unknown, unknown, unknown>;
    readonly required: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, undefined, unknown, unknown, unknown>;
    readonly rules: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<Arrayable<FormItemRule>>, unknown, unknown, unknown, unknown>;
    readonly error: StringConstructor;
    readonly validateStatus: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "success" | "error" | "validating", unknown>;
    readonly for: StringConstructor;
    readonly inlineMessage: import("element-plus/es/utils").BuildPropReturn<readonly [StringConstructor, BooleanConstructor], "", unknown, unknown, unknown>;
    readonly showMessage: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, unknown, unknown, "" | "default" | "small" | "large", unknown>;
}>>, {
    required: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    size: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "default" | "small" | "large", unknown>;
    rules: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<Arrayable<FormItemRule>>, unknown, unknown>;
    labelWidth: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    showMessage: import("element-plus/es/utils").BuildPropType<BooleanConstructor, unknown, unknown>;
    inlineMessage: import("element-plus/es/utils").BuildPropType<readonly [StringConstructor, BooleanConstructor], unknown, unknown>;
    prop: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("./form-item").FormItemProp>, unknown, unknown>;
    validateStatus: import("element-plus/es/utils").BuildPropType<StringConstructor, "" | "success" | "error" | "validating", unknown>;
}>;
export default _default;
