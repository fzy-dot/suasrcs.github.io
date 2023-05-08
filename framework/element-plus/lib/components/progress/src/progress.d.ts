import type { ExtractPropTypes } from 'vue';
declare type Color = {
    color: string;
    percentage: number;
};
declare type ProgressFn = (percentage: number) => string;
export declare const progressProps: {
    readonly type: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "line", unknown, "circle" | "line" | "dashboard", unknown>;
    readonly percentage: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly status: import("element-plus/es/utils").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "exception", unknown>;
    readonly indeterminate: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly duration: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 3, unknown, unknown, unknown>;
    readonly strokeWidth: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 6, unknown, unknown, unknown>;
    readonly strokeLinecap: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<"round" | "inherit" | "butt" | "square">, "round", unknown, unknown, unknown>;
    readonly textInside: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, 126, unknown, unknown, unknown>;
    readonly showText: import("element-plus/es/utils").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly color: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<string | ProgressFn | Color[]>, "", unknown, unknown, unknown>;
    readonly format: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<ProgressFn>, (percentage: number) => string, unknown, unknown, unknown>;
};
export declare type ProgressProps = ExtractPropTypes<typeof progressProps>;
export {};
