import type { RowEventHandlers, TableV2RowProps } from '../row';
declare const TableV2Row: import("vue").DefineComponent<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly depth: NumberConstructor;
    readonly expandColumnKey: StringConstructor;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly isScrolling: BooleanConstructor;
    readonly onRowExpand: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowExpandHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHover: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowHoverHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHeightChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowHeightChangeHandler>, unknown, unknown, unknown, unknown>;
    readonly rowData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, true, unknown, unknown>;
    readonly rowEventHandlers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowEventHandlers<any>>, unknown, unknown, unknown, unknown>;
    readonly rowIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../types").KeyType>, "id", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly class: StringConstructor;
    readonly columns: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../common").AnyColumn[]>, unknown, true, unknown, unknown>;
    readonly depth: NumberConstructor;
    readonly expandColumnKey: StringConstructor;
    readonly estimatedRowHeight: {
        readonly default: undefined;
        readonly type: import("vue").PropType<number>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        readonly __elPropsReservedKey: true;
    };
    readonly isScrolling: BooleanConstructor;
    readonly onRowExpand: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowExpandHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHover: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowHoverHandler<any>>, unknown, unknown, unknown, unknown>;
    readonly onRowHeightChange: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../row").RowHeightChangeHandler>, unknown, unknown, unknown, unknown>;
    readonly rowData: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<any>, unknown, true, unknown, unknown>;
    readonly rowEventHandlers: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<RowEventHandlers<any>>, unknown, unknown, unknown, unknown>;
    readonly rowIndex: import("element-plus/es/utils").BuildPropReturn<NumberConstructor, unknown, true, unknown, unknown>;
    readonly rowKey: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("../types").KeyType>, "id", unknown, unknown, unknown>;
    readonly style: import("element-plus/es/utils").BuildPropReturn<import("element-plus/es/utils").PropWrapper<import("vue").CSSProperties>, unknown, unknown, unknown, unknown>;
}>>, {
    style: import("vue").CSSProperties;
    rowKey: import("element-plus/es/utils").BuildPropType<import("element-plus/es/utils").PropWrapper<import("../types").KeyType>, unknown, unknown>;
    isScrolling: boolean;
    estimatedRowHeight: number;
    onRowExpand: import("../row").RowExpandHandler<any>;
    onRowHover: import("../row").RowHoverHandler<any>;
    onRowHeightChange: import("../row").RowHeightChangeHandler;
    rowEventHandlers: RowEventHandlers<any>;
}>;
export default TableV2Row;
export declare type TableV2RowCellRenderParam = {
    column: TableV2RowProps['columns'][number];
    columns: TableV2RowProps['columns'];
    columnIndex: number;
    depth: number;
    rowData: any;
    rowIndex: number;
    isScrolling: boolean;
    expandIconProps?: {
        rowData: any;
        rowIndex: number;
        onExpand: (expand: boolean) => void;
    };
};
