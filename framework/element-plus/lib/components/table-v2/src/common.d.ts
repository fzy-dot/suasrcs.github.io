import type { CSSProperties } from 'vue';
import type { Column, KeyType } from './types';
export declare type AnyColumn = Column<any>;
/**
 * @Note even though we can use `string[] | string` as the type but for
 * convenience here we only use `string` as the acceptable value here.
 */
export declare const classType: StringConstructor;
export declare const columns: {
    readonly type: import("element-plus/es/utils").PropWrapper<AnyColumn[]>;
    readonly required: true;
};
export declare const column: {
    readonly type: import("element-plus/es/utils").PropWrapper<AnyColumn>;
};
export declare const fixedDataType: {
    readonly type: import("element-plus/es/utils").PropWrapper<any[]>;
};
export declare const dataType: {
    readonly required: true;
    readonly type: import("element-plus/es/utils").PropWrapper<any[]>;
};
export declare const expandColumnKey: StringConstructor;
export declare const expandKeys: {
    readonly type: import("element-plus/es/utils").PropWrapper<KeyType[]>;
    readonly default: () => never[];
};
export declare const requiredNumber: {
    readonly type: NumberConstructor;
    readonly required: true;
};
export declare const rowKey: {
    readonly type: import("element-plus/es/utils").PropWrapper<KeyType>;
    readonly default: "id";
};
/**
 * @note even though we can use `StyleValue` but that would be difficult for us to mapping them,
 * so we only use `CSSProperties` as the acceptable value here.
 */
export declare const styleType: {
    type: import("element-plus/es/utils").PropWrapper<CSSProperties>;
};
