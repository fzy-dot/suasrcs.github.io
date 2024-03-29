'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../input-number/index.js');
require('../../../constants/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var button = require('./button.js');
var marker = require('./marker.js');
var useMarks = require('./useMarks.js');
var useSlide = require('./useSlide.js');
var useStops = require('./useStops.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var validator = require('../../../utils/vue/validator.js');
var event = require('../../../constants/event.js');
var index$1 = require('../../../hooks/use-namespace/index.js');
var index$2 = require('../../../hooks/use-common-props/index.js');
var error = require('../../../utils/error.js');
var event$1 = require('../../../utils/dom/event.js');

const _sfc_main = vue.defineComponent({
  name: "ElSlider",
  components: {
    ElInputNumber: index.ElInputNumber,
    SliderButton: button["default"],
    SliderMarker: marker["default"]
  },
  props: {
    modelValue: {
      type: [Number, Array],
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      validator: validator.isValidComponentSize
    },
    inputSize: {
      type: String,
      validator: validator.isValidComponentSize
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: {
      type: Function,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: ""
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String,
      default: void 0
    },
    tooltipClass: {
      type: String,
      default: void 0
    },
    marks: Object
  },
  emits: [event.UPDATE_MODEL_EVENT, event.CHANGE_EVENT, event.INPUT_EVENT],
  setup(props, { emit }) {
    const ns = index$1.useNamespace("slider");
    const initData = vue.reactive({
      firstValue: 0,
      secondValue: 0,
      oldValue: 0,
      dragging: false,
      sliderSize: 1
    });
    const {
      elFormItem,
      slider,
      firstButton,
      secondButton,
      sliderDisabled,
      minValue,
      maxValue,
      runwayStyle,
      barStyle,
      resetSize,
      emitChange,
      onSliderClick,
      setFirstValue,
      setSecondValue
    } = useSlide.useSlide(props, initData, emit);
    const { stops, getStopStyle } = useStops.useStops(props, initData, minValue, maxValue);
    const sliderWrapperSize = index$2.useSize();
    const sliderInputSize = vue.computed(() => props.inputSize || sliderWrapperSize.value);
    const sliderKls = vue.computed(() => [
      ns.b(),
      ns.m(sliderWrapperSize.value),
      ns.is("vertical", props.vertical),
      { [ns.m("with-input")]: props.showInput }
    ]);
    const markList = useMarks.useMarks(props);
    useWatch(props, initData, minValue, maxValue, emit, elFormItem);
    const precision = vue.computed(() => {
      const precisions = [props.min, props.max, props.step].map((item) => {
        const decimal = `${item}`.split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    });
    const { sliderWrapper } = useLifecycle(props, initData, resetSize);
    const { firstValue, secondValue, oldValue, dragging, sliderSize } = vue.toRefs(initData);
    const updateDragging = (val) => {
      initData.dragging = val;
    };
    vue.provide("SliderProvider", {
      ...vue.toRefs(props),
      sliderSize,
      disabled: sliderDisabled,
      precision,
      emitChange,
      resetSize,
      updateDragging
    });
    return {
      ns,
      firstValue,
      secondValue,
      oldValue,
      dragging,
      sliderSize,
      slider,
      firstButton,
      secondButton,
      sliderDisabled,
      runwayStyle,
      barStyle,
      emitChange,
      onSliderClick,
      getStopStyle,
      setFirstValue,
      setSecondValue,
      stops,
      markList,
      sliderWrapper,
      sliderWrapperSize,
      sliderInputSize,
      sliderKls
    };
  }
});
const useWatch = (props, initData, minValue, maxValue, emit, elFormItem) => {
  const _emit = (val) => {
    emit(event.UPDATE_MODEL_EVENT, val);
    emit(event.INPUT_EVENT, val);
  };
  const valueChanged = () => {
    if (props.range) {
      return ![minValue.value, maxValue.value].every((item, index) => item === initData.oldValue[index]);
    } else {
      return props.modelValue !== initData.oldValue;
    }
  };
  const setValues = () => {
    var _a, _b;
    if (props.min > props.max) {
      error.throwError("Slider", "min should not be greater than max.");
      return;
    }
    const val = props.modelValue;
    if (props.range && Array.isArray(val)) {
      if (val[1] < props.min) {
        _emit([props.min, props.min]);
      } else if (val[0] > props.max) {
        _emit([props.max, props.max]);
      } else if (val[0] < props.min) {
        _emit([props.min, val[1]]);
      } else if (val[1] > props.max) {
        _emit([val[0], props.max]);
      } else {
        initData.firstValue = val[0];
        initData.secondValue = val[1];
        if (valueChanged()) {
          (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error.debugWarn(err));
          initData.oldValue = val.slice();
        }
      }
    } else if (!props.range && typeof val === "number" && !Number.isNaN(val)) {
      if (val < props.min) {
        _emit(props.min);
      } else if (val > props.max) {
        _emit(props.max);
      } else {
        initData.firstValue = val;
        if (valueChanged()) {
          (_b = elFormItem.validate) == null ? void 0 : _b.call(elFormItem, "change").catch((err) => error.debugWarn(err));
          initData.oldValue = val;
        }
      }
    }
  };
  setValues();
  vue.watch(() => initData.dragging, (val) => {
    if (!val) {
      setValues();
    }
  });
  vue.watch(() => props.modelValue, (val, oldVal) => {
    if (initData.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index) => item === oldVal[index]) && initData.firstValue === val[0] && initData.secondValue === val[1]) {
      return;
    }
    setValues();
  }, {
    deep: true
  });
  vue.watch(() => [props.min, props.max], () => {
    setValues();
  });
};
const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper = vue.ref(null);
  vue.onMounted(async () => {
    let valuetext;
    if (props.range) {
      if (Array.isArray(props.modelValue)) {
        initData.firstValue = Math.max(props.min, props.modelValue[0]);
        initData.secondValue = Math.min(props.max, props.modelValue[1]);
      } else {
        initData.firstValue = props.min;
        initData.secondValue = props.max;
      }
      initData.oldValue = [initData.firstValue, initData.secondValue];
      valuetext = `${initData.firstValue}-${initData.secondValue}`;
    } else {
      if (typeof props.modelValue !== "number" || Number.isNaN(props.modelValue)) {
        initData.firstValue = props.min;
      } else {
        initData.firstValue = Math.min(props.max, Math.max(props.min, props.modelValue));
      }
      initData.oldValue = initData.firstValue;
      valuetext = initData.firstValue;
    }
    sliderWrapper.value.setAttribute("aria-valuetext", valuetext);
    sliderWrapper.value.setAttribute("aria-label", props.label ? props.label : `slider between ${props.min} and ${props.max}`);
    event$1.on(window, "resize", resetSize);
    await vue.nextTick();
    resetSize();
  });
  vue.onBeforeUnmount(() => {
    event$1.off(window, "resize", resetSize);
  });
  return {
    sliderWrapper
  };
};
const _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-orientation", "aria-disabled"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_slider_button = vue.resolveComponent("slider-button");
  const _component_slider_marker = vue.resolveComponent("slider-marker");
  const _component_el_input_number = vue.resolveComponent("el-input-number");
  return vue.openBlock(), vue.createElementBlock("div", {
    ref: "sliderWrapper",
    class: vue.normalizeClass(_ctx.sliderKls),
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
    "aria-disabled": _ctx.sliderDisabled
  }, [
    vue.createElementVNode("div", {
      ref: "slider",
      class: vue.normalizeClass([
        _ctx.ns.e("runway"),
        { "show-input": _ctx.showInput && !_ctx.range },
        _ctx.ns.is("disabled", _ctx.sliderDisabled)
      ]),
      style: vue.normalizeStyle(_ctx.runwayStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onSliderClick && _ctx.onSliderClick(...args))
    }, [
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.e("bar")),
        style: vue.normalizeStyle(_ctx.barStyle)
      }, null, 6),
      vue.createVNode(_component_slider_button, {
        ref: "firstButton",
        "model-value": _ctx.firstValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setFirstValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"]),
      _ctx.range ? (vue.openBlock(), vue.createBlock(_component_slider_button, {
        key: 0,
        ref: "secondButton",
        "model-value": _ctx.secondValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setSecondValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"])) : vue.createCommentVNode("v-if", true),
      _ctx.showStops ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.stops, (item, key) => {
          return vue.openBlock(), vue.createElementBlock("div", {
            key,
            class: vue.normalizeClass(_ctx.ns.e("stop")),
            style: vue.normalizeStyle(_ctx.getStopStyle(item))
          }, null, 6);
        }), 128))
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.markList.length > 0 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 2 }, [
        vue.createElementVNode("div", null, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.markList, (item, key) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key,
              style: vue.normalizeStyle(_ctx.getStopStyle(item.position)),
              class: vue.normalizeClass([_ctx.ns.e("stop"), _ctx.ns.e("marks-stop")])
            }, null, 6);
          }), 128))
        ]),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(_ctx.ns.e("marks"))
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.markList, (item, key) => {
            return vue.openBlock(), vue.createBlock(_component_slider_marker, {
              key,
              mark: item.mark,
              style: vue.normalizeStyle(_ctx.getStopStyle(item.position))
            }, null, 8, ["mark", "style"]);
          }), 128))
        ], 2)
      ], 64)) : vue.createCommentVNode("v-if", true)
    ], 6),
    _ctx.showInput && !_ctx.range ? (vue.openBlock(), vue.createBlock(_component_el_input_number, {
      key: 0,
      ref: "input",
      "model-value": _ctx.firstValue,
      class: vue.normalizeClass(_ctx.ns.e("input")),
      step: _ctx.step,
      disabled: _ctx.sliderDisabled,
      controls: _ctx.showInputControls,
      min: _ctx.min,
      max: _ctx.max,
      debounce: _ctx.debounce,
      size: _ctx.sliderInputSize,
      "onUpdate:modelValue": _ctx.setFirstValue,
      onChange: _ctx.emitChange
    }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Slider = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/slider/src/index.vue"]]);

exports["default"] = Slider;
//# sourceMappingURL=index.js.map
