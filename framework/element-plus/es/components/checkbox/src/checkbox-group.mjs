import { defineComponent, nextTick, computed, provide, toRefs, watch, h, renderSlot } from 'vue';
import '../../../constants/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { useCheckboxGroup } from './useCheckbox.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { isValidComponentSize } from '../../../utils/vue/validator.mjs';
import { UPDATE_MODEL_EVENT } from '../../../constants/event.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const _sfc_main = defineComponent({
  name: "ElCheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: void 0
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    fill: {
      type: String,
      default: void 0
    },
    textColor: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, { emit, slots }) {
    const { elFormItem } = useCheckboxGroup();
    const checkboxGroupSize = useSize();
    const ns = useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        emit("change", value);
      });
    };
    const modelValue = computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    provide("CheckboxGroup", {
      name: "ElCheckboxGroup",
      modelValue,
      ...toRefs(props),
      checkboxGroupSize,
      changeEvent
    });
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err));
    });
    return () => {
      return h(props.tag, {
        class: ns.b("group"),
        role: "group",
        "aria-label": "checkbox-group"
      }, [renderSlot(slots, "default")]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);

export { CheckboxGroup as default };
//# sourceMappingURL=checkbox-group.mjs.map
