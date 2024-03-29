import { defineComponent, inject, ref, watch, nextTick, computed, unref, provide, resolveComponent, openBlock, createBlock, mergeProps, withCtx, normalizeClass, normalizeStyle, withModifiers, resolveDynamicComponent, createCommentVNode, createElementBlock, createElementVNode, renderSlot, toDisplayString } from 'vue';
import dayjs from 'dayjs';
import { isEqual } from 'lodash-unified';
import { onClickOutside } from '@vueuse/core';
import '../../../../hooks/index.mjs';
import '../../../../tokens/index.mjs';
import { ElInput } from '../../../input/index.mjs';
import { ElIcon } from '../../../icon/index.mjs';
import { ElTooltip } from '../../../tooltip/index.mjs';
import '../../../../utils/index.mjs';
import '../../../../constants/index.mjs';
import { Clock, Calendar } from '@element-plus/icons-vue';
import { timePickerDefaultProps } from './props.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { isEmpty } from '../../../../utils/types.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../../hooks/use-namespace/index.mjs';
import { formContextKey, formItemContextKey } from '../../../../tokens/form.mjs';
import { debugWarn } from '../../../../utils/error.mjs';
import { useSize } from '../../../../hooks/use-common-props/index.mjs';
import { EVENT_CODE } from '../../../../constants/aria.mjs';

const dateEquals = function(a, b) {
  const aIsDate = a instanceof Date;
  const bIsDate = b instanceof Date;
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a === b;
  }
  return false;
};
const valueEquals = function(a, b) {
  const aIsArray = Array.isArray(a);
  const bIsArray = Array.isArray(b);
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};
const parser = function(date, format, lang) {
  const day = isEmpty(format) || format === "x" ? dayjs(date).locale(lang) : dayjs(date, format).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date, format, lang) {
  if (isEmpty(format))
    return date;
  if (format === "x")
    return +date;
  return dayjs(date).locale(lang).format(format);
};
const _sfc_main = defineComponent({
  name: "Picker",
  components: {
    ElInput,
    ElTooltip,
    ElIcon
  },
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change"
  ],
  setup(props, ctx) {
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const elForm = inject(formContextKey, {});
    const elFormItem = inject(formItemContextKey, {});
    const elPopperOptions = inject("ElPopperOptions", {});
    const refPopper = ref();
    const inputRef = ref();
    const pickerVisible = ref(false);
    const pickerActualVisible = ref(false);
    const valueOnOpen = ref(null);
    watch(pickerVisible, (val) => {
      var _a;
      if (!val) {
        userInput.value = null;
        nextTick(() => {
          emitChange(props.modelValue);
        });
        ctx.emit("blur");
        blurInput();
        props.validateEvent && ((_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur").catch((err) => debugWarn(err)));
      } else {
        valueOnOpen.value = props.modelValue;
      }
    });
    const emitChange = (val, isClear) => {
      var _a;
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        ctx.emit("change", val);
        props.validateEvent && ((_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err)));
      }
    };
    const emitInput = (val) => {
      if (!valueEquals(props.modelValue, val)) {
        let formatValue;
        if (Array.isArray(val)) {
          formatValue = val.map((_) => formatter(_, props.valueFormat, lang.value));
        } else if (val) {
          formatValue = formatter(val, props.valueFormat, lang.value);
        }
        ctx.emit("update:modelValue", val ? formatValue : val, lang.value);
      }
    };
    const refInput = computed(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const refStartInput = computed(() => {
      return refInput == null ? void 0 : refInput.value[0];
    });
    const refEndInput = computed(() => {
      return refInput == null ? void 0 : refInput.value[1];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const onPick = (date = "", visible = false) => {
      pickerVisible.value = visible;
      let result;
      if (Array.isArray(date)) {
        result = date.map((_) => _.toDate());
      } else {
        result = date ? date.toDate() : date;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      ctx.emit("visible-change", true);
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      ctx.emit("visible-change", false);
    };
    const focus = (focusStartInput = true) => {
      let input = refStartInput.value;
      if (!focusStartInput && isRangeInput.value) {
        input = refEndInput.value;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocus = (e) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value)
        return;
      pickerVisible.value = true;
      ctx.emit("focus", e);
    };
    const handleBlur = () => {
      var _a;
      (_a = refPopper.value) == null ? void 0 : _a.onClose();
      blurInput();
    };
    const pickerDisabled = computed(() => {
      return props.disabled || elForm.disabled;
    });
    const parsedValue = computed(() => {
      let result;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          result = pickerOptions.value.getDefaultValue();
        }
      } else {
        if (Array.isArray(props.modelValue)) {
          result = props.modelValue.map((_) => parser(_, props.valueFormat, lang.value));
        } else {
          result = parser(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(result);
        if (!isEqual(availableResult, result)) {
          result = availableResult;
          emitInput(Array.isArray(result) ? result.map((_) => _.toDate()) : result.toDate());
        }
      }
      if (Array.isArray(result) && result.some((_) => !_)) {
        result = [];
      }
      return result;
    });
    const displayValue = computed(() => {
      if (!pickerOptions.value.panelReady)
        return;
      const formattedValue = formatDayjsToString(parsedValue.value);
      if (Array.isArray(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return;
      if (!pickerVisible.value && valueIsEmpty.value)
        return;
      if (formattedValue) {
        return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = computed(() => props.type.includes("time"));
    const isTimePicker = computed(() => props.type.startsWith("time"));
    const isDatesPicker = computed(() => props.type === "dates");
    const triggerIcon = computed(() => props.prefixIcon || (isTimeLikePicker.value ? Clock : Calendar));
    const showClose = ref(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        emitInput(null);
        emitChange(null, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = computed(() => {
      return !props.modelValue || Array.isArray(props.modelValue) && !props.modelValue.length;
    });
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const isRangeInput = computed(() => {
      return props.type.includes("range");
    });
    const pickerSize = useSize();
    const popperPaneRef = computed(() => {
      var _a, _b;
      return (_b = (_a = refPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const popperEl = computed(() => {
      var _a, _b;
      return (_b = (_a = unref(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = computed(() => {
      var _a;
      if (unref(isRangeInput)) {
        return unref(inputRef);
      }
      return (_a = unref(inputRef)) == null ? void 0 : _a.$el;
    });
    onClickOutside(actualInputRef, (e) => {
      const unrefedPopperEl = unref(popperEl);
      const inputEl = unref(actualInputRef);
      if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || e.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = ref(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput(Array.isArray(value) ? value.map((_) => _.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(null);
        emitChange(null);
        userInput.value = null;
      }
    };
    const blurInput = () => {
      refInput.value.forEach((input) => input.blur());
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      if (code === EVENT_CODE.esc) {
        pickerVisible.value = false;
        event.stopPropagation();
        return;
      }
      if (code === EVENT_CODE.tab) {
        if (!isRangeInput.value) {
          handleChange();
          pickerVisible.value = false;
          event.stopPropagation();
        } else {
          setTimeout(() => {
            if (!refInput.value.includes(document.activeElement)) {
              pickerVisible.value = false;
              blurInput();
            }
          }, 0);
        }
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydown) {
        pickerOptions.value.handleKeydown(event);
      }
    };
    const onUserInput = (e) => {
      userInput.value = e;
    };
    const handleStartInput = (event) => {
      if (userInput.value) {
        userInput.value = [event.target.value, userInput.value[1]];
      } else {
        userInput.value = [event.target.value, null];
      }
    };
    const handleEndInput = (event) => {
      if (userInput.value) {
        userInput.value = [userInput.value[0], event.target.value];
      } else {
        userInput.value = [null, event.target.value];
      }
    };
    const handleStartChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[0]);
      if (value && value.isValid()) {
        userInput.value = [formatDayjsToString(value), displayValue.value[1]];
        const newValue = [value, parsedValue.value && parsedValue.value[1]];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      const value = parseUserInputToDayjs(userInput.value && userInput.value[1]);
      if (value && value.isValid()) {
        userInput.value = [displayValue.value[0], formatDayjsToString(value)];
        const newValue = [parsedValue.value && parsedValue.value[0], value];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = ref({});
    const onSetPickerOption = (e) => {
      pickerOptions.value[e[0]] = e[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e) => {
      ctx.emit("calendar-change", e);
    };
    const onPanelChange = (value, mode, view) => {
      ctx.emit("panel-change", value, mode, view);
    };
    provide("EP_PICKER_BASE", {
      props
    });
    return {
      nsDate,
      nsInput,
      nsRange,
      elPopperOptions,
      isDatesPicker,
      handleEndChange,
      handleStartChange,
      handleStartInput,
      handleEndInput,
      onUserInput,
      handleChange,
      handleKeydown,
      popperPaneRef,
      onClickOutside,
      pickerSize,
      isRangeInput,
      onMouseLeave,
      onMouseEnter,
      onClearIconClick,
      showClose,
      triggerIcon,
      onPick,
      handleFocus,
      handleBlur,
      pickerVisible,
      pickerActualVisible,
      displayValue,
      parsedValue,
      setSelectionRange,
      refPopper,
      inputRef,
      pickerDisabled,
      onSetPickerOption,
      onCalendarChange,
      onPanelChange,
      focus,
      onShow,
      onBeforeShow,
      onHide
    };
  }
});
const _hoisted_1 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const _hoisted_2 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_input = resolveComponent("el-input");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({
    ref: "refPopper",
    visible: _ctx.pickerVisible,
    "onUpdate:visible": _cache[17] || (_cache[17] = ($event) => _ctx.pickerVisible = $event),
    effect: "light",
    pure: "",
    trigger: "click"
  }, _ctx.$attrs, {
    "append-to-body": "",
    transition: `${_ctx.nsDate.namespace.value}-zoom-in-top`,
    "popper-class": [`${_ctx.nsDate.namespace.value}-picker__popper`, _ctx.popperClass],
    "popper-options": _ctx.elPopperOptions,
    "fallback-placements": ["bottom", "top", "right", "left"],
    "gpu-acceleration": false,
    "stop-popper-mouse-event": false,
    "hide-after": 0,
    persistent: "",
    onBeforeShow: _ctx.onBeforeShow,
    onShow: _ctx.onShow,
    onHide: _ctx.onHide
  }), {
    default: withCtx(() => [
      !_ctx.isRangeInput ? (openBlock(), createBlock(_component_el_input, {
        key: 0,
        id: _ctx.id,
        ref: "inputRef",
        "model-value": _ctx.displayValue,
        name: _ctx.name,
        size: _ctx.pickerSize,
        disabled: _ctx.pickerDisabled,
        placeholder: _ctx.placeholder,
        class: normalizeClass([_ctx.nsDate.b("editor"), _ctx.nsDate.bm("editor", _ctx.type), _ctx.$attrs.class]),
        style: normalizeStyle(_ctx.$attrs.style),
        readonly: !_ctx.editable || _ctx.readonly || _ctx.isDatesPicker || _ctx.type === "week",
        onInput: _ctx.onUserInput,
        onFocus: _ctx.handleFocus,
        onKeydown: _ctx.handleKeydown,
        onChange: _ctx.handleChange,
        onMouseenter: _ctx.onMouseEnter,
        onMouseleave: _ctx.onMouseLeave,
        onClick: _cache[0] || (_cache[0] = withModifiers(() => {
        }, ["stop"]))
      }, {
        prefix: withCtx(() => [
          _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(_ctx.nsInput.e("icon")),
            onClick: _ctx.handleFocus
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ]),
        suffix: withCtx(() => [
          _ctx.showClose && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(`${_ctx.nsInput.e("icon")} clear-icon`),
            onClick: _ctx.onClearIconClick
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "onInput", "onFocus", "onKeydown", "onChange", "onMouseenter", "onMouseleave"])) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: "inputRef",
        class: normalizeClass([
          _ctx.nsDate.b("editor"),
          _ctx.nsDate.bm("editor", _ctx.type),
          _ctx.nsInput.e("inner"),
          _ctx.nsDate.is("disabled", _ctx.pickerDisabled),
          _ctx.nsDate.is("active", _ctx.pickerVisible),
          _ctx.nsRange.b("editor"),
          _ctx.pickerSize ? _ctx.nsRange.bm("editor", _ctx.pickerSize) : "",
          _ctx.$attrs.class
        ]),
        style: normalizeStyle(_ctx.$attrs.style),
        onClick: _cache[7] || (_cache[7] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onMouseenter: _cache[8] || (_cache[8] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
        onMouseleave: _cache[9] || (_cache[9] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args)),
        onKeydown: _cache[10] || (_cache[10] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }, [
        _ctx.triggerIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass([_ctx.nsInput.e("icon"), _ctx.nsRange.e("icon")]),
          onClick: _ctx.handleFocus
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.triggerIcon)))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[0],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[0],
          placeholder: _ctx.startPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[0],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: normalizeClass(_ctx.nsRange.b("input")),
          onInput: _cache[1] || (_cache[1] = (...args) => _ctx.handleStartInput && _ctx.handleStartInput(...args)),
          onChange: _cache[2] || (_cache[2] = (...args) => _ctx.handleStartChange && _ctx.handleStartChange(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args))
        }, null, 42, _hoisted_1),
        renderSlot(_ctx.$slots, "range-separator", {}, () => [
          createElementVNode("span", {
            class: normalizeClass(_ctx.nsRange.b("separator"))
          }, toDisplayString(_ctx.rangeSeparator), 3)
        ]),
        createElementVNode("input", {
          id: _ctx.id && _ctx.id[1],
          autocomplete: "off",
          name: _ctx.name && _ctx.name[1],
          placeholder: _ctx.endPlaceholder,
          value: _ctx.displayValue && _ctx.displayValue[1],
          disabled: _ctx.pickerDisabled,
          readonly: !_ctx.editable || _ctx.readonly,
          class: normalizeClass(_ctx.nsRange.b("input")),
          onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
          onInput: _cache[5] || (_cache[5] = (...args) => _ctx.handleEndInput && _ctx.handleEndInput(...args)),
          onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleEndChange && _ctx.handleEndChange(...args))
        }, null, 42, _hoisted_2),
        _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
          key: 1,
          class: normalizeClass([
            _ctx.nsInput.e("icon"),
            _ctx.nsRange.e("close-icon"),
            {
              [_ctx.nsRange.e("close-icon--hidden")]: !_ctx.showClose
            }
          ]),
          onClick: _ctx.onClearIconClick
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 38))
    ]),
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        visible: _ctx.pickerVisible,
        actualVisible: _ctx.pickerActualVisible,
        parsedValue: _ctx.parsedValue,
        format: _ctx.format,
        unlinkPanels: _ctx.unlinkPanels,
        type: _ctx.type,
        defaultValue: _ctx.defaultValue,
        onPick: _cache[11] || (_cache[11] = (...args) => _ctx.onPick && _ctx.onPick(...args)),
        onSelectRange: _cache[12] || (_cache[12] = (...args) => _ctx.setSelectionRange && _ctx.setSelectionRange(...args)),
        onSetPickerOption: _cache[13] || (_cache[13] = (...args) => _ctx.onSetPickerOption && _ctx.onSetPickerOption(...args)),
        onCalendarChange: _cache[14] || (_cache[14] = (...args) => _ctx.onCalendarChange && _ctx.onCalendarChange(...args)),
        onPanelChange: _cache[15] || (_cache[15] = (...args) => _ctx.onPanelChange && _ctx.onPanelChange(...args)),
        onMousedown: _cache[16] || (_cache[16] = withModifiers(() => {
        }, ["stop"]))
      })
    ]),
    _: 3
  }, 16, ["visible", "transition", "popper-class", "popper-options", "onBeforeShow", "onShow", "onHide"]);
}
var CommonPicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);

export { CommonPicker as default };
//# sourceMappingURL=picker.mjs.map
