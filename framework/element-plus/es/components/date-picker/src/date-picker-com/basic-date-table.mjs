import { defineComponent, ref, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createCommentVNode, Fragment, renderList, createVNode } from 'vue';
import dayjs from 'dayjs';
import '../../../../hooks/index.mjs';
import '../../../../utils/index.mjs';
import ElDatePickerCell from './basic-cell-render.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';
import { castArray } from '../../../../utils/arrays.mjs';

const _sfc_main = defineComponent({
  components: {
    ElDatePickerCell
  },
  props: {
    date: {
      type: Object
    },
    minDate: {
      type: Object
    },
    maxDate: {
      type: Object
    },
    parsedValue: {
      type: [Object, Array]
    },
    selectionMode: {
      type: String,
      default: "day"
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    disabledDate: {
      type: Function
    },
    cellClassName: {
      type: Function
    },
    rangeState: {
      type: Object,
      default: () => ({
        endDate: null,
        selecting: false
      })
    }
  },
  emits: ["changerange", "pick", "select"],
  setup(props, ctx) {
    const { t, lang } = useLocale();
    const lastRow = ref(null);
    const lastColumn = ref(null);
    const tableRows = ref([[], [], [], [], [], []]);
    const firstDayOfWeek = props.date.$locale().weekStart || 7;
    const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_) => _.toLowerCase());
    const offsetDay = computed(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
    });
    const startDate = computed(() => {
      const startDayOfMonth = props.date.startOf("month");
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
    });
    const WEEKS = computed(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
    });
    const rows = computed(() => {
      var _a;
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      const offset = offsetDay.value;
      const rows_ = tableRows.value;
      let count = 1;
      const selectedDate = props.selectionMode === "dates" ? castArray(props.parsedValue) : [];
      const calNow = dayjs().locale(lang.value).startOf("day");
      for (let i = 0; i < 6; i++) {
        const row = rows_[i];
        if (props.showWeekNumber) {
          if (!row[0]) {
            row[0] = {
              type: "week",
              text: startDate.value.add(i * 7 + 1, "day").week()
            };
          }
        }
        for (let j = 0; j < 7; j++) {
          let cell = row[props.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = {
              row: i,
              column: j,
              type: "normal",
              inRange: false,
              start: false,
              end: false
            };
          }
          const index = i * 7 + j;
          const calTime = startDate.value.add(index - offset, "day");
          cell.dayjs = calTime;
          cell.date = calTime.toDate();
          cell.timestamp = calTime.valueOf();
          cell.type = "normal";
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate;
          cell.inRange = props.minDate && calTime.isSameOrAfter(props.minDate, "day") && calEndDate && calTime.isSameOrBefore(calEndDate, "day") || props.minDate && calTime.isSameOrBefore(props.minDate, "day") && calEndDate && calTime.isSameOrAfter(calEndDate, "day");
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = calEndDate && calTime.isSame(calEndDate, "day");
            cell.end = props.minDate && calTime.isSame(props.minDate, "day");
          } else {
            cell.start = props.minDate && calTime.isSame(props.minDate, "day");
            cell.end = calEndDate && calTime.isSame(calEndDate, "day");
          }
          const isToday = calTime.isSame(calNow, "day");
          if (isToday) {
            cell.type = "today";
          }
          if (i >= 0 && i <= 1) {
            const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
            if (j + i * 7 >= numberOfDaysFromPreviousMonth) {
              cell.text = count++;
            } else {
              cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - j % 7) + 1 + i * 7;
              cell.type = "prev-month";
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = "next-month";
            }
          }
          const cellDate = calTime.toDate();
          cell.selected = selectedDate.find((_) => _.valueOf() === calTime.valueOf());
          cell.isSelected = !!cell.selected;
          cell.isCurrent = isCurrent(cell);
          cell.disabled = props.disabledDate && props.disabledDate(cellDate);
          cell.customClass = props.cellClassName && props.cellClassName(cellDate);
          row[props.showWeekNumber ? j + 1 : j] = cell;
        }
        if (props.selectionMode === "week") {
          const start = props.showWeekNumber ? 1 : 0;
          const end = props.showWeekNumber ? 7 : 6;
          const isActive = isWeekActive(row[start + 1]);
          row[start].inRange = isActive;
          row[start].start = isActive;
          row[end].inRange = isActive;
          row[end].end = isActive;
        }
      }
      return rows_;
    });
    const isCurrent = (cell) => {
      return props.selectionMode === "day" && (cell.type === "normal" || cell.type === "today") && cellMatchesDate(cell, props.parsedValue);
    };
    const cellMatchesDate = (cell, date) => {
      if (!date)
        return false;
      return dayjs(date).locale(lang.value).isSame(props.date.date(Number(cell.text)), "day");
    };
    const getCellClasses = (cell) => {
      const classes = [];
      if ((cell.type === "normal" || cell.type === "today") && !cell.disabled) {
        classes.push("available");
        if (cell.type === "today") {
          classes.push("today");
        }
      } else {
        classes.push(cell.type);
      }
      if (isCurrent(cell)) {
        classes.push("current");
      }
      if (cell.inRange && (cell.type === "normal" || cell.type === "today" || props.selectionMode === "week")) {
        classes.push("in-range");
        if (cell.start) {
          classes.push("start-date");
        }
        if (cell.end) {
          classes.push("end-date");
        }
      }
      if (cell.disabled) {
        classes.push("disabled");
      }
      if (cell.selected) {
        classes.push("selected");
      }
      if (cell.customClass) {
        classes.push(cell.customClass);
      }
      return classes.join(" ");
    };
    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value;
      return startDate.value.add(offsetFromStart, "day");
    };
    const handleMouseMove = (event) => {
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        ctx.emit("changerange", {
          selecting: true,
          endDate: getDateOfCell(row, column)
        });
      }
    };
    const handleClick = (event) => {
      let target = event.target;
      while (target) {
        if (target.tagName === "TD") {
          break;
        }
        target = target.parentNode;
      }
      if (!target || target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      const cell = rows.value[row][column];
      if (cell.disabled || cell.type === "week")
        return;
      const newDate = getDateOfCell(row, column);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          ctx.emit("pick", { minDate: newDate, maxDate: null });
          ctx.emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            ctx.emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            ctx.emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          ctx.emit("select", false);
        }
      } else if (props.selectionMode === "day") {
        ctx.emit("pick", newDate);
      } else if (props.selectionMode === "week") {
        const weekNumber = newDate.week();
        const value = `${newDate.year()}w${weekNumber}`;
        ctx.emit("pick", {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf("week")
        });
      } else if (props.selectionMode === "dates") {
        const newValue = cell.selected ? castArray(props.parsedValue).filter((_) => _.valueOf() !== newDate.valueOf()) : castArray(props.parsedValue).concat([newDate]);
        ctx.emit("pick", newValue);
      }
    };
    const isWeekActive = (cell) => {
      if (props.selectionMode !== "week")
        return false;
      let newDate = props.date.startOf("day");
      if (cell.type === "prev-month") {
        newDate = newDate.subtract(1, "month");
      }
      if (cell.type === "next-month") {
        newDate = newDate.add(1, "month");
      }
      newDate = newDate.date(Number.parseInt(cell.text, 10));
      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
        const weekDate = props.parsedValue.subtract(dayOffset, "day");
        return weekDate.isSame(newDate, "day");
      }
      return false;
    };
    return {
      handleMouseMove,
      t,
      rows,
      isWeekActive,
      getCellClasses,
      WEEKS,
      handleClick
    };
  }
});
const _hoisted_1 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_date_picker_cell = resolveComponent("el-date-picker-cell");
  return openBlock(), createElementBlock("table", {
    cellspacing: "0",
    cellpadding: "0",
    class: normalizeClass(["el-date-table", { "is-week-mode": _ctx.selectionMode === "week" }]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args)),
    onMousemove: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseMove && _ctx.handleMouseMove(...args))
  }, [
    createElementVNode("tbody", null, [
      createElementVNode("tr", null, [
        _ctx.showWeekNumber ? (openBlock(), createElementBlock("th", _hoisted_1, toDisplayString(_ctx.t("el.datepicker.week")), 1)) : createCommentVNode("v-if", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.WEEKS, (week, key) => {
          return openBlock(), createElementBlock("th", { key }, toDisplayString(_ctx.t("el.datepicker.weeks." + week)), 1);
        }), 128))
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (row, key) => {
        return openBlock(), createElementBlock("tr", {
          key,
          class: normalizeClass(["el-date-table__row", { current: _ctx.isWeekActive(row[1]) }])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, key_) => {
            return openBlock(), createElementBlock("td", {
              key: key_,
              class: normalizeClass(_ctx.getCellClasses(cell))
            }, [
              createVNode(_component_el_date_picker_cell, { cell }, null, 8, ["cell"])
            ], 2);
          }), 128))
        ], 2);
      }), 128))
    ])
  ], 34);
}
var DateTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);

export { DateTable as default };
//# sourceMappingURL=basic-date-table.mjs.map
