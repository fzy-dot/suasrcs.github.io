import dayjs from 'dayjs';
import type { PropType } from 'vue';
import type { IDatePickerType } from '../date-picker.type';
declare const _default: import("vue").DefineComponent<{
    unlinkPanels: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    type: {
        type: PropType<IDatePickerType>;
        required: true;
        validator: (val: string) => val is "year" | "month" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    };
}, {
    shortcuts: any;
    disabledDate: any;
    cellClassName: any;
    minTimePickerVisible: import("vue").Ref<boolean>;
    maxTimePickerVisible: import("vue").Ref<boolean>;
    handleMinTimeClose: () => void;
    handleMaxTimeClose: () => void;
    handleShortcutClick: (shortcut: any) => void;
    rangeState: import("vue").Ref<{
        endDate: null;
        selecting: boolean;
    }>;
    minDate: import("vue").Ref<null>;
    maxDate: import("vue").Ref<null>;
    handleRangePick: (val: any, close?: boolean) => void;
    onSelect: (selecting: any) => void;
    handleChangeRange: (val: any) => void;
    btnDisabled: import("vue").ComputedRef<boolean>;
    enableYearArrow: import("vue").ComputedRef<boolean>;
    enableMonthArrow: import("vue").ComputedRef<boolean>;
    rightPrevMonth: () => void;
    rightPrevYear: () => void;
    rightNextMonth: () => void;
    rightNextYear: () => void;
    leftPrevMonth: () => void;
    leftPrevYear: () => void;
    leftNextMonth: () => void;
    leftNextYear: () => void;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    leftLabel: import("vue").ComputedRef<string>;
    rightLabel: import("vue").ComputedRef<string>;
    leftDate: import("vue").Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "year" | "month" | "date" | "dates" | "week" | "D" | "M" | "y" | "weeks" | "months" | "millisecond" | "second" | "minute" | "hour" | "day" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "years" | "d" | "h" | "m" | "s" | "ms" | "w" | "quarter" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
        dayOfYear: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        isSameOrAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSameOrBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
    }>;
    rightDate: import("vue").Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "year" | "month" | "date" | "dates" | "week" | "D" | "M" | "y" | "weeks" | "months" | "millisecond" | "second" | "minute" | "hour" | "day" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "years" | "d" | "h" | "m" | "s" | "ms" | "w" | "quarter" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
        dayOfYear: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        isSameOrAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSameOrBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
    }>;
    showTime: import("vue").ComputedRef<boolean>;
    t: import("element-plus/es/hooks").Translator;
    minVisibleDate: import("vue").ComputedRef<any>;
    maxVisibleDate: import("vue").ComputedRef<any>;
    minVisibleTime: import("vue").ComputedRef<any>;
    maxVisibleTime: import("vue").ComputedRef<any>;
    arrowControl: any;
    handleDateInput: (value: any, type: any) => void;
    handleDateChange: (_: any, type: any) => void;
    handleTimeInput: (value: any, type: any) => void;
    handleTimeChange: (value: any, type: any) => void;
    handleMinTimePick: (value: any, visible: any, first: any) => void;
    handleMaxTimePick: (value: any, visible: any, first: any) => void;
    handleClear: () => void;
    handleConfirm: (visible?: boolean) => void;
    timeFormat: import("vue").ComputedRef<string>;
    clearable: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("calendar-change" | "panel-change" | "pick" | "set-picker-option")[], "pick" | "calendar-change" | "panel-change" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    unlinkPanels: BooleanConstructor;
    parsedValue: {
        type: PropType<dayjs.Dayjs[]>;
    };
    type: {
        type: PropType<IDatePickerType>;
        required: true;
        validator: (val: string) => val is "year" | "month" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    };
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onCalendar-change"?: ((...args: any[]) => any) | undefined;
    "onPanel-change"?: ((...args: any[]) => any) | undefined;
    "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
    unlinkPanels: boolean;
}>;
export default _default;
