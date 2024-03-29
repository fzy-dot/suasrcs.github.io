'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dayjs = require('dayjs');
var lodashUnified = require('lodash-unified');
require('../../../../hooks/index.js');
require('../../../../constants/index.js');
var basicTimeSpinner = require('./basic-time-spinner.js');
var useTimePicker = require('./useTimePicker.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../../hooks/use-locale/index.js');
var index$1 = require('../../../../hooks/use-namespace/index.js');
var aria = require('../../../../constants/aria.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

const makeSelectRange = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const _sfc_main = vue.defineComponent({
  components: { TimeSpinner: basicTimeSpinner["default"] },
  props: {
    visible: Boolean,
    actualVisible: Boolean,
    parsedValue: {
      type: [Array]
    },
    format: {
      type: String,
      default: ""
    }
  },
  emits: ["pick", "select-range", "set-picker-option"],
  setup(props, ctx) {
    const { t, lang } = index.useLocale();
    const nsTime = index$1.useNamespace("time");
    const nsPicker = index$1.useNamespace("picker");
    const minDate = vue.computed(() => props.parsedValue[0]);
    const maxDate = vue.computed(() => props.parsedValue[1]);
    const oldValue = useTimePicker.useOldValue(props);
    const handleCancel = () => {
      ctx.emit("pick", oldValue.value, false);
    };
    const showSeconds = vue.computed(() => {
      return props.format.includes("ss");
    });
    const amPmMode = vue.computed(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const minSelectableRange = vue.ref([]);
    const maxSelectableRange = vue.ref([]);
    const handleConfirm = (visible = false) => {
      ctx.emit("pick", [minDate.value, maxDate.value], visible);
    };
    const handleMinChange = (date) => {
      handleChange(date.millisecond(0), maxDate.value);
    };
    const handleMaxChange = (date) => {
      handleChange(minDate.value, date.millisecond(0));
    };
    const isValidValue = (_date) => {
      const parsedDate = _date.map((_) => dayjs__default["default"](_).locale(lang.value));
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1]);
    };
    const handleChange = (_minDate, _maxDate) => {
      ctx.emit("pick", [_minDate, _maxDate], true);
    };
    const btnConfirmDisabled = vue.computed(() => {
      return minDate.value > maxDate.value;
    });
    const selectionRange = vue.ref([0, 2]);
    const setMinSelectionRange = (start, end) => {
      ctx.emit("select-range", start, end, "min");
      selectionRange.value = [start, end];
    };
    const offset = vue.computed(() => showSeconds.value ? 11 : 8);
    const setMaxSelectionRange = (start, end) => {
      ctx.emit("select-range", start, end, "max");
      selectionRange.value = [start + offset.value, end + offset.value];
    };
    const changeSelectionRange = (step) => {
      const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      const half = list.length / 2;
      if (next < half) {
        timePickerOptions["start_emitSelectRange"](mapping[next]);
      } else {
        timePickerOptions["end_emitSelectRange"](mapping[next - half]);
      }
    };
    const handleKeydown = (event) => {
      const code = event.code;
      if (code === aria.EVENT_CODE.left || code === aria.EVENT_CODE.right) {
        const step = code === aria.EVENT_CODE.left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if (code === aria.EVENT_CODE.up || code === aria.EVENT_CODE.down) {
        const step = code === aria.EVENT_CODE.up ? -1 : 1;
        const role = selectionRange.value[0] < offset.value ? "start" : "end";
        timePickerOptions[`${role}_scrollDown`](step);
        event.preventDefault();
        return;
      }
    };
    const disabledHours_ = (role, compare) => {
      const defaultDisable = disabledHours ? disabledHours(role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? maxDate.value : minDate.value);
      const compareHour = compareDate.hour();
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1);
      return lodashUnified.union(defaultDisable, nextDisable);
    };
    const disabledMinutes_ = (hour, role, compare) => {
      const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? maxDate.value : minDate.value);
      const compareHour = compareDate.hour();
      if (hour !== compareHour) {
        return defaultDisable;
      }
      const compareMinute = compareDate.minute();
      const nextDisable = isStart ? makeSelectRange(compareMinute + 1, 59) : makeSelectRange(0, compareMinute - 1);
      return lodashUnified.union(defaultDisable, nextDisable);
    };
    const disabledSeconds_ = (hour, minute, role, compare) => {
      const defaultDisable = disabledSeconds ? disabledSeconds(hour, minute, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? maxDate.value : minDate.value);
      const compareHour = compareDate.hour();
      const compareMinute = compareDate.minute();
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultDisable;
      }
      const compareSecond = compareDate.second();
      const nextDisable = isStart ? makeSelectRange(compareSecond + 1, 59) : makeSelectRange(0, compareSecond - 1);
      return lodashUnified.union(defaultDisable, nextDisable);
    };
    const getRangeAvailableTime = (dates) => {
      return dates.map((_, index) => getRangeAvailableTimeEach(dates[0], dates[1], index === 0 ? "start" : "end"));
    };
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = useTimePicker.getAvailableArrs(disabledHours_, disabledMinutes_, disabledSeconds_);
    const getRangeAvailableTimeEach = (startDate, endDate, role) => {
      const availableMap = {
        hour: getAvailableHours,
        minute: getAvailableMinutes,
        second: getAvailableSeconds
      };
      const isStart = role === "start";
      let result = isStart ? startDate : endDate;
      const compareDate = isStart ? endDate : startDate;
      ["hour", "minute", "second"].forEach((_) => {
        if (availableMap[_]) {
          let availableArr;
          const method = availableMap[_];
          if (_ === "minute") {
            availableArr = method(result.hour(), role, compareDate);
          } else if (_ === "second") {
            availableArr = method(result.hour(), result.minute(), role, compareDate);
          } else {
            availableArr = method(role, compareDate);
          }
          if (availableArr && availableArr.length && !availableArr.includes(result[_]())) {
            const pos = isStart ? 0 : availableArr.length - 1;
            result = result[_](availableArr[pos]);
          }
        }
      });
      return result;
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      if (Array.isArray(value)) {
        return value.map((_) => dayjs__default["default"](_, props.format).locale(lang.value));
      }
      return dayjs__default["default"](value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      if (Array.isArray(value)) {
        return value.map((_) => _.format(props.format));
      }
      return value.format(props.format);
    };
    const getDefaultValue = () => {
      if (Array.isArray(defaultValue)) {
        return defaultValue.map((_) => dayjs__default["default"](_).locale(lang.value));
      }
      const defaultDay = dayjs__default["default"](defaultValue).locale(lang.value);
      return [defaultDay, defaultDay.add(60, "m")];
    };
    ctx.emit("set-picker-option", ["formatToString", formatToString]);
    ctx.emit("set-picker-option", ["parseUserInput", parseUserInput]);
    ctx.emit("set-picker-option", ["isValidValue", isValidValue]);
    ctx.emit("set-picker-option", ["handleKeydown", handleKeydown]);
    ctx.emit("set-picker-option", ["getDefaultValue", getDefaultValue]);
    ctx.emit("set-picker-option", [
      "getRangeAvailableTime",
      getRangeAvailableTime
    ]);
    const timePickerOptions = {};
    const onSetOption = (e) => {
      timePickerOptions[e[0]] = e[1];
    };
    const pickerBase = vue.inject("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    return {
      nsTime,
      nsPicker,
      arrowControl,
      onSetOption,
      setMaxSelectionRange,
      setMinSelectionRange,
      btnConfirmDisabled,
      handleCancel,
      handleConfirm,
      t,
      showSeconds,
      minDate,
      maxDate,
      amPmMode,
      handleMinChange,
      handleMaxChange,
      minSelectableRange,
      maxSelectableRange,
      disabledHours_,
      disabledMinutes_,
      disabledSeconds_
    };
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_time_spinner = vue.resolveComponent("time-spinner");
  return _ctx.actualVisible ? (vue.openBlock(), vue.createElementBlock("div", {
    key: 0,
    class: vue.normalizeClass([_ctx.nsTime.b("range-picker"), _ctx.nsPicker.b("panel")])
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.nsTime.be("range-picker", "content"))
    }, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.nsTime.be("range-picker", "cell"))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.nsTime.be("range-picker", "header"))
        }, vue.toDisplayString(_ctx.t("el.datepicker.startTime")), 3),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([
            _ctx.nsTime.be("range-picker", "body"),
            _ctx.nsTime.be("panel", "content"),
            _ctx.nsTime.is("arrow", _ctx.arrowControl),
            { "has-seconds": _ctx.showSeconds }
          ])
        }, [
          vue.createVNode(_component_time_spinner, {
            ref: "minSpinner",
            role: "start",
            "show-seconds": _ctx.showSeconds,
            "am-pm-mode": _ctx.amPmMode,
            "arrow-control": _ctx.arrowControl,
            "spinner-date": _ctx.minDate,
            "disabled-hours": _ctx.disabledHours_,
            "disabled-minutes": _ctx.disabledMinutes_,
            "disabled-seconds": _ctx.disabledSeconds_,
            onChange: _ctx.handleMinChange,
            onSetOption: _ctx.onSetOption,
            onSelectRange: _ctx.setMinSelectionRange
          }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2)
      ], 2),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.nsTime.be("range-picker", "cell"))
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.nsTime.be("range-picker", "header"))
        }, vue.toDisplayString(_ctx.t("el.datepicker.endTime")), 3),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([
            _ctx.nsTime.be("range-picker", "body"),
            _ctx.nsTime.be("panel", "content"),
            _ctx.nsTime.is("arrow", _ctx.arrowControl),
            { "has-seconds": _ctx.showSeconds }
          ])
        }, [
          vue.createVNode(_component_time_spinner, {
            ref: "maxSpinner",
            role: "end",
            "show-seconds": _ctx.showSeconds,
            "am-pm-mode": _ctx.amPmMode,
            "arrow-control": _ctx.arrowControl,
            "spinner-date": _ctx.maxDate,
            "disabled-hours": _ctx.disabledHours_,
            "disabled-minutes": _ctx.disabledMinutes_,
            "disabled-seconds": _ctx.disabledSeconds_,
            onChange: _ctx.handleMaxChange,
            onSetOption: _ctx.onSetOption,
            onSelectRange: _ctx.setMaxSelectionRange
          }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onChange", "onSetOption", "onSelectRange"])
        ], 2)
      ], 2)
    ], 2),
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.nsTime.be("panel", "footer"))
    }, [
      vue.createElementVNode("button", {
        type: "button",
        class: vue.normalizeClass([_ctx.nsTime.be("panel", "btn"), "cancel"]),
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleCancel())
      }, vue.toDisplayString(_ctx.t("el.datepicker.cancel")), 3),
      vue.createElementVNode("button", {
        type: "button",
        class: vue.normalizeClass([_ctx.nsTime.be("panel", "btn"), "confirm"]),
        disabled: _ctx.btnConfirmDisabled,
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleConfirm())
      }, vue.toDisplayString(_ctx.t("el.datepicker.confirm")), 11, _hoisted_1)
    ], 2)
  ], 2)) : vue.createCommentVNode("v-if", true);
}
var TimeRangePanel = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);

exports["default"] = TimeRangePanel;
//# sourceMappingURL=panel-time-range.js.map
