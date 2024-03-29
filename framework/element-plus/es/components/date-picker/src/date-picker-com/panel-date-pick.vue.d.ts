import dayjs from 'dayjs';
import type { PropType } from 'vue';
import type { Dayjs } from 'dayjs';
import type { IDatePickerType } from '../date-picker.type';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs | dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<IDatePickerType>;
        required: true;
        validator: (val: string) => val is "year" | "month" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    };
}, {
    handleTimePick: (value: any, visible: any, first: any) => void;
    handleTimePickClose: () => void;
    onTimePickerInputFocus: () => void;
    timePickerVisible: import("vue").Ref<boolean>;
    visibleTime: import("vue").ComputedRef<string | undefined>;
    visibleDate: import("vue").ComputedRef<string | undefined>;
    showTime: import("vue").ComputedRef<boolean>;
    changeToNow: () => void;
    onConfirm: () => void;
    footerVisible: import("vue").ComputedRef<boolean>;
    handleYearPick: (year: any) => void;
    showMonthPicker: () => void;
    showYearPicker: () => void;
    handleMonthPick: (month: any) => void;
    hasShortcuts: import("vue").ComputedRef<boolean>;
    shortcuts: any;
    arrowControl: any;
    disabledDate: any;
    cellClassName: any;
    selectionMode: import("vue").ComputedRef<"day" | IDatePickerType>;
    handleShortcutClick: (shortcut: any) => void;
    prevYear_: () => void;
    nextYear_: () => void;
    prevMonth_: () => void;
    nextMonth_: () => void;
    innerDate: import("vue").Ref<{
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
    t: import("element-plus/es/hooks").Translator;
    yearLabel: import("vue").ComputedRef<string>;
    currentView: import("vue").Ref<string>;
    month: import("vue").ComputedRef<number>;
    handleDatePick: (value: Dayjs) => void;
    handleVisibleTimeChange: (value: any) => void;
    handleVisibleDateChange: (value: any) => void;
    timeFormat: import("vue").ComputedRef<string>;
    userInputTime: import("vue").Ref<null>;
    userInputDate: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("panel-change" | "pick" | "set-picker-option")[], "pick" | "panel-change" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    parsedValue: {
        type: PropType<dayjs.Dayjs | dayjs.Dayjs[]>;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<IDatePickerType>;
        required: true;
        validator: (val: string) => val is "year" | "month" | "date" | "dates" | "week" | "datetime" | "datetimerange" | "daterange" | "monthrange";
    };
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onPanel-change"?: ((...args: any[]) => any) | undefined;
    "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    format: string;
}>;
export default _default;
