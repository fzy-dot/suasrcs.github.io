'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../icon/index.js');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var index = require('../../input/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
var inputNumber = require('./input-number.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$2 = require('../../../directives/repeat-click/index.js');
var index$3 = require('../../../hooks/use-form-item/index.js');
var index$4 = require('../../../hooks/use-namespace/index.js');
var types = require('../../../utils/types.js');
var error = require('../../../utils/error.js');
var index$5 = require('../../../hooks/use-common-props/index.js');
var core = require('@vueuse/core');

const _sfc_main = vue.defineComponent({
  name: "ElInputNumber",
  components: {
    ElInput: index.ElInput,
    ElIcon: index$1.ElIcon,
    ArrowUp: iconsVue.ArrowUp,
    ArrowDown: iconsVue.ArrowDown,
    Plus: iconsVue.Plus,
    Minus: iconsVue.Minus
  },
  directives: {
    RepeatClick: index$2["default"]
  },
  props: inputNumber.inputNumberProps,
  emits: inputNumber.inputNumberEmits,
  setup(props, { emit }) {
    const input = vue.ref();
    const data = vue.reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = index$3.useFormItem();
    const ns = index$4.useNamespace("input-number");
    const minDisabled = vue.computed(() => ensurePrecision(props.modelValue, -1) < props.min);
    const maxDisabled = vue.computed(() => ensurePrecision(props.modelValue) > props.max);
    const numPrecision = vue.computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (!types.isUndefined(props.precision)) {
        if (stepPrecision > props.precision) {
          error.debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = vue.computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = index$5.useSize();
    const inputNumberDisabled = index$5.useDisabled();
    const displayValue = vue.computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (core.isNumber(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (!types.isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (types.isUndefined(pre))
        pre = numPrecision.value;
      return Number.parseFloat(`${Math.round(num * 10 ** pre) / 10 ** pre}`);
    };
    const getPrecision = (value) => {
      if (types.isUndefined(value))
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!core.isNumber(val))
        return data.currentValue;
      val = core.isNumber(val) ? val : Number.NaN;
      return toPrecision(val + props.step * coefficient);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly } = props;
      let newVal = Number(value);
      if (value === null) {
        newVal = Number.NaN;
      }
      if (!Number.isNaN(newVal)) {
        if (stepStrictly) {
          newVal = Math.round(newVal / step) * step;
        }
        if (!types.isUndefined(precision)) {
          newVal = toPrecision(newVal, precision);
        }
        if (newVal > max || newVal < min) {
          newVal = newVal > max ? max : min;
          update && emit("update:modelValue", newVal);
        }
      }
      return newVal;
    };
    const setCurrentValue = (value) => {
      var _a;
      const oldVal = data.currentValue;
      let newVal = verifyValue(value);
      if (oldVal === newVal)
        return;
      if (Number.isNaN(newVal)) {
        newVal = void 0;
      }
      data.userInput = null;
      emit("update:modelValue", newVal);
      emit("input", newVal);
      emit("change", newVal, oldVal);
      (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error.debugWarn(err));
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      return data.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number(value) : "";
      if (core.isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      emit("blur", event);
      (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => error.debugWarn(err));
    };
    vue.watch(() => props.modelValue, (value) => {
      const newVal = verifyValue(value, true);
      data.currentValue = newVal;
      data.userInput = null;
    }, { immediate: true });
    vue.onMounted(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput.setAttribute("role", "spinbutton");
      innerInput.setAttribute("aria-valuemax", String(props.max));
      innerInput.setAttribute("aria-valuemin", String(props.min));
      innerInput.setAttribute("aria-valuenow", String(data.currentValue));
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!core.isNumber(props.modelValue)) {
        let val = Number(props.modelValue);
        if (Number.isNaN(val)) {
          val = void 0;
        }
        emit("update:modelValue", val);
      }
    });
    vue.onUpdated(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", data.currentValue);
    });
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur,
      handleFocus,
      handleBlur,
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_down = vue.resolveComponent("arrow-down");
  const _component_minus = vue.resolveComponent("minus");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_arrow_up = vue.resolveComponent("arrow-up");
  const _component_plus = vue.resolveComponent("plus");
  const _component_el_input = vue.resolveComponent("el-input");
  const _directive_repeat_click = vue.resolveDirective("repeat-click");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.inputNumberSize),
      _ctx.ns.is("disabled", _ctx.inputNumberDisabled),
      _ctx.ns.is("without-controls", !_ctx.controls),
      _ctx.ns.is("controls-right", _ctx.controlsAtRight)
    ]),
    onDragstart: _cache[2] || (_cache[2] = vue.withModifiers(() => {
    }, ["prevent"]))
  }, [
    _ctx.controls ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      role: "button",
      class: vue.normalizeClass([_ctx.ns.e("decrease"), _ctx.ns.is("disabled", _ctx.minDisabled)]),
      onKeydown: _cache[0] || (_cache[0] = vue.withKeys((...args) => _ctx.decrease && _ctx.decrease(...args), ["enter"]))
    }, [
      vue.createVNode(_component_el_icon, null, {
        default: vue.withCtx(() => [
          _ctx.controlsAtRight ? (vue.openBlock(), vue.createBlock(_component_arrow_down, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_minus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.decrease]
    ]) : vue.createCommentVNode("v-if", true),
    _ctx.controls ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
      key: 1,
      role: "button",
      class: vue.normalizeClass([_ctx.ns.e("increase"), _ctx.ns.is("disabled", _ctx.maxDisabled)]),
      onKeydown: _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.increase && _ctx.increase(...args), ["enter"]))
    }, [
      vue.createVNode(_component_el_icon, null, {
        default: vue.withCtx(() => [
          _ctx.controlsAtRight ? (vue.openBlock(), vue.createBlock(_component_arrow_up, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_plus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.increase]
    ]) : vue.createCommentVNode("v-if", true),
    vue.createVNode(_component_el_input, {
      ref: "input",
      type: "number",
      step: _ctx.step,
      "model-value": _ctx.displayValue,
      placeholder: _ctx.placeholder,
      disabled: _ctx.inputNumberDisabled,
      size: _ctx.inputNumberSize,
      max: _ctx.max,
      min: _ctx.min,
      name: _ctx.name,
      label: _ctx.label,
      "validate-event": false,
      onKeydown: [
        vue.withKeys(vue.withModifiers(_ctx.increase, ["prevent"]), ["up"]),
        vue.withKeys(vue.withModifiers(_ctx.decrease, ["prevent"]), ["down"])
      ],
      onBlur: _ctx.handleBlur,
      onFocus: _ctx.handleFocus,
      onInput: _ctx.handleInput,
      onChange: _ctx.handleInputChange
    }, null, 8, ["step", "model-value", "placeholder", "disabled", "size", "max", "min", "name", "label", "onKeydown", "onBlur", "onFocus", "onInput", "onChange"])
  ], 34);
}
var InputNumber = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);

exports["default"] = InputNumber;
//# sourceMappingURL=input-number2.js.map
