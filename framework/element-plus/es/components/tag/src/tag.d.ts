import type Tag from './tag.vue';
import type { ExtractPropTypes } from 'vue';
export declare const tagProps: {
    readonly closable: BooleanConstructor;
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "small" | "large", unknown>;
    readonly effect: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "light", unknown, "plain" | "dark" | "light", unknown>;
    readonly round: BooleanConstructor;
};
export declare type TagProps = ExtractPropTypes<typeof tagProps>;
export declare const tagEmits: {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
};
export declare type TagEmits = typeof tagEmits;
export declare type TagInstance = InstanceType<typeof Tag>;
