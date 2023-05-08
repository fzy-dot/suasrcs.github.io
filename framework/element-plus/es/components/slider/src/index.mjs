import { defineComponent, reactive, computed, toRefs, provide, watch, ref, onMounted, nextTick, onBeforeUnmount, resolveComponent, openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createVNode, createBlock, createCommentVNode, Fragment, renderList } from 'vue';
import { ElInputNumber } from '../../input-number/index.mjs';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import SliderButton from './button.mjs';
import SliderMarker from './marker.mjs';
import { useMarks } from './useMarks.mjs';
import { useSlide } from './useSlide.mjs';
import { useStops } from './useStops.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { isValidComponentSize } from '../../../utils/vue/validator.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '../../../constants/event.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { throwError, debugWarn } from '../../../utils/error.mjs';
import { on, off } from '../../../utils/dom/event.mjs';

const _sfc_main = defineComponent({
  name: "ElSlider",
  components: {
    ElInputNumber,
    SliderButton,
    SliderMarker
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
      validator: isValidComponentSize
    },
    inputSize: {
      type: String,
      validator: isValidComponentSize
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
  emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT],
  setup(props, { emit }) {
    const ns = useNamespace("slider");
    const initData = reactive({
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
    } = useSlide(props, initData, emit);
    const { stops, getStopStyle } = useStops(props, initData, minValue, maxValue);
    const sliderWrapperSize = useSize();
    const sliderInputSize = computed(() => props.inputSize || sliderWrapperSize.value);
    const sliderKls = computed(() => [
      ns.b(),
      ns.m(sliderWrapperSize.value),
      ns.is("vertical", props.vertical),
      { [ns.m("with-input")]: props.showInput }
    ]);
    const markList = useMarks(props);
    useWatch(props, initData, minValue, maxValue, emit, elFormItem);
    const precision = computed(() => {
      const precisions = [props.min, props.max, props.step].map((item) => {
        const decimal = `${item}`.split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    });
    const { sliderWrapper } = useLifecycle(props, initData, resetSize);
    const { firstValue, secondValue, oldValue, dragging, sliderSize } = toRefs(initData);
    const updateDragging = (val) => {
      initData.dragging = val;
    };
    provide("SliderProvider", {
      ...toRefs(props),
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
    emit(UPDATE_MODEL_EVENT, val);
    emit(INPUT_EVENT, val);
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
      throwError("Slider", "min should not be greater than max.");
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
          (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err));
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
          (_b = elFormItem.validate) == null ? void 0 : _b.call(elFormItem, "change").catch((err) => debugWarn(err));
          initData.oldValue = val;
        }
      }
    }
  };
  setValues();
  watch(() => initData.dragging, (val) => {
    if (!val) {
      setValues();
    }
  });
  watch(() => props.modelValue, (val, oldVal) => {
    if (initData.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every((item, index) => item === oldVal[index]) && initData.firstValue === val[0] && initData.secondValue === val[1]) {
      return;
    }
    setValues();
  }, {
    deep: true
  });
  watch(() => [props.min, props.max], () => {
    setValues();
  });
};
const useLifecycle = (props, initData, resetSize) => {
  const sliderWrapper = ref(null);
  onMounted(async () => {
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
    on(window, "resize", resetSize);
    await nextTick();
    resetSize();
  });
  onBeforeUnmount(() => {
    off(window, "resize", resetSize);
  });
  return {
    sliderWrapper
  };
};
const _hoisted_1 = ["aria-valuemin", "aria-valuemax", "aria-orientation", "aria-disabled"];
const _hoisted_2 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_slider_button = resolveComponent("slider-button");
  const _component_slider_marker = resolveComponent("slider-marker");
  const _component_el_input_number = resolveComponent("el-input-number");
  return openBlock(), createElementBlock("div", {
    ref: "sliderWrapper",
    class: normalizeClass(_ctx.sliderKls),
    role: "slider",
    "aria-valuemin": _ctx.min,
    "aria-valuemax": _ctx.max,
    "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
    "aria-disabled": _ctx.sliderDisabled
  }, [
    createElementVNode("div", {
      ref: "slider",
      class: normalizeClass([
        _ctx.ns.e("runway"),
        { "show-input": _ctx.showInput && !_ctx.range },
        _ctx.ns.is("disabled", _ctx.sliderDisabled)
      ]),
      style: normalizeStyle(_ctx.runwayStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onSliderClick && _ctx.onSliderClick(...args))
    }, [
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.e("bar")),
        style: normalizeStyle(_ctx.barStyle)
      }, null, 6),
      createVNode(_component_slider_button, {
        ref: "firstButton",
        "model-value": _ctx.firstValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setFirstValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"]),
      _ctx.range ? (openBlock(), createBlock(_component_slider_button, {
        key: 0,
        ref: "secondButton",
        "model-value": _ctx.secondValue,
        vertical: _ctx.vertical,
        "tooltip-class": _ctx.tooltipClass,
        "onUpdate:modelValue": _ctx.setSecondValue
      }, null, 8, ["model-value", "vertical", "tooltip-class", "onUpdate:modelValue"])) : createCommentVNode("v-if", true),
      _ctx.showStops ? (openBlock(), createElementBlock("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stops, (item, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(_ctx.ns.e("stop")),
            style: normalizeStyle(_ctx.getStopStyle(item))
          }, null, 6);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      _ctx.markList.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
        createElementVNode("div", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.markList, (item, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              style: normalizeStyle(_ctx.getStopStyle(item.position)),
              class: normalizeClass([_ctx.ns.e("stop"), _ctx.ns.e("marks-stop")])
            }, null, 6);
          }), 128))
        ]),
        createElementVNode("div", {
          class: normalizeClass(_ctx.ns.e("marks"))
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.markList, (item, key) => {
            return openBlock(), createBlock(_component_slider_marker, {
              key,
              mark: item.mark,
              style: normalizeStyle(_ctx.getStopStyle(item.position))
            }, null, 8, ["mark", "style"]);
          }), 128))
        ], 2)
      ], 64)) : createCommentVNode("v-if", true)
    ], 6),
    _ctx.showInput && !_ctx.range ? (openBlock(), createBlock(_component_el_input_number, {
      key: 0,
      ref: "input",
      "model-value": _ctx.firstValue,
      class: normalizeClass(_ctx.ns.e("input")),
      step: _ctx.step,
      disabled: _ctx.sliderDisabled,
      controls: _ctx.showInputControls,
      min: _ctx.min,
      max: _ctx.max,
      debounce: _ctx.debounce,
      size: _ctx.sliderInputSize,
      "onUpdate:modelValue": _ctx.setFirstValue,
      onChange: _ctx.emitChange
    }, null, 8, ["model-value", "class", "step", "disabled", "controls", "min", "max", "debounce", "size", "onUpdate:modelValue", "onChange"])) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/slider/src/index.vue"]]);

export { Slider as default };
//# sourceMappingURL=index.mjs.map
