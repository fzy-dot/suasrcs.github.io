import { defineComponent, computed, ref, watch, nextTick, onMounted, resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, withKeys, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, toDisplayString, normalizeStyle, Fragment, createVNode } from 'vue';
import { isPromise } from '@vue/shared';
import '../../../utils/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Loading } from '@element-plus/icons-vue';
import '../../../constants/index.mjs';
import '../../../hooks/index.mjs';
import { switchProps, switchEmits } from './switch.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index.mjs';
import { useDisabled, useSize } from '../../../hooks/use-common-props/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '../../../constants/event.mjs';
import { debugWarn, throwError } from '../../../utils/error.mjs';
import { isBoolean } from '@vueuse/core';

const COMPONENT_NAME = "ElSwitch";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon, Loading },
  props: switchProps,
  emits: switchEmits,
  setup(props, { emit }) {
    const { formItem } = useFormItem();
    const switchDisabled = useDisabled(computed(() => props.loading));
    const ns = useNamespace("switch");
    const switchSize = useSize();
    const isModelValue = ref(props.modelValue !== false);
    const input = ref();
    const core = ref();
    const switchKls = computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    watch(() => props.modelValue, () => {
      isModelValue.value = true;
    });
    watch(() => props.value, () => {
      isModelValue.value = false;
    });
    const actualValue = computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    watch(checked, () => {
      var _a;
      input.value.checked = checked.value;
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => debugWarn(err));
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isExpectType = [
        isPromise(shouldChange),
        isBoolean(shouldChange)
      ].some((i) => i);
      if (!isExpectType) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const setBackgroundColor = () => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor;
      const coreEl = core.value;
      if (props.borderColor)
        coreEl.style.borderColor = props.borderColor;
      else if (!props.borderColor)
        coreEl.style.borderColor = newColor;
      coreEl.style.backgroundColor = newColor;
      coreEl.children[0].style.color = newColor;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    onMounted(() => {
      if (props.activeColor || props.inactiveColor || props.borderColor) {
        setBackgroundColor();
      }
      input.value.checked = checked.value;
    });
    return {
      ns,
      input,
      core,
      switchDisabled,
      checked,
      switchKls,
      handleChange,
      switchValue,
      focus
    };
  }
});
const _hoisted_1 = ["aria-checked", "aria-disabled"];
const _hoisted_2 = ["id", "name", "true-value", "false-value", "disabled"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_loading = resolveComponent("loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.switchKls),
    role: "switch",
    "aria-checked": _ctx.checked,
    "aria-disabled": _ctx.switchDisabled,
    onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.id,
      ref: "input",
      class: normalizeClass(_ctx.ns.e("input")),
      type: "checkbox",
      name: _ctx.name,
      "true-value": _ctx.activeValue,
      "false-value": _ctx.inactiveValue,
      disabled: _ctx.switchDisabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["enter"]))
    }, null, 42, _hoisted_2),
    !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([
        _ctx.ns.e("label"),
        _ctx.ns.em("label", "left"),
        _ctx.ns.is("active", !_ctx.checked)
      ])
    }, [
      _ctx.inactiveIcon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": _ctx.checked
      }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true),
    createElementVNode("span", {
      ref: "core",
      class: normalizeClass(_ctx.ns.e("core")),
      style: normalizeStyle({ width: (_ctx.width || 40) + "px" })
    }, [
      _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.ns.e("inner"))
      }, [
        _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.activeIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass([_ctx.ns.is("icon"), _ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          _ctx.inactiveIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 1,
            class: normalizeClass([_ctx.ns.is("icon"), !_ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass([_ctx.ns.is("text"), _ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")]),
            "aria-hidden": !_ctx.checked
          }, toDisplayString(_ctx.activeText.substring(0, 3)), 11, _hoisted_4)) : createCommentVNode("v-if", true),
          _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass([_ctx.ns.is("text"), !_ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")]),
            "aria-hidden": _ctx.checked
          }, toDisplayString(_ctx.inactiveText.substring(0, 3)), 11, _hoisted_5)) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ], 2)) : createCommentVNode("v-if", true),
      createElementVNode("div", {
        class: normalizeClass(_ctx.ns.e("action"))
      }, [
        _ctx.loading ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: normalizeClass(_ctx.ns.is("loading"))
        }, {
          default: withCtx(() => [
            createVNode(_component_loading)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("v-if", true)
      ], 2)
    ], 6),
    !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass([
        _ctx.ns.e("label"),
        _ctx.ns.em("label", "right"),
        _ctx.ns.is("active", _ctx.checked)
      ])
    }, [
      _ctx.activeIcon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": !_ctx.checked
      }, toDisplayString(_ctx.activeText), 9, _hoisted_6)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Switch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);

export { Switch as default };
//# sourceMappingURL=switch2.mjs.map
