'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../utils/index.js');
var index = require('../../icon/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../constants/index.js');
require('../../../hooks/index.js');
var _switch = require('./switch.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index$1 = require('../../../hooks/use-form-item/index.js');
var index$2 = require('../../../hooks/use-common-props/index.js');
var index$3 = require('../../../hooks/use-namespace/index.js');
var event = require('../../../constants/event.js');
var error = require('../../../utils/error.js');
var core = require('@vueuse/core');

const COMPONENT_NAME = "ElSwitch";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  components: { ElIcon: index.ElIcon, Loading: iconsVue.Loading },
  props: _switch.switchProps,
  emits: _switch.switchEmits,
  setup(props, { emit }) {
    const { formItem } = index$1.useFormItem();
    const switchDisabled = index$2.useDisabled(vue.computed(() => props.loading));
    const ns = index$3.useNamespace("switch");
    const switchSize = index$2.useSize();
    const isModelValue = vue.ref(props.modelValue !== false);
    const input = vue.ref();
    const core$1 = vue.ref();
    const switchKls = vue.computed(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    vue.watch(() => props.modelValue, () => {
      isModelValue.value = true;
    });
    vue.watch(() => props.value, () => {
      isModelValue.value = false;
    });
    const actualValue = vue.computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = vue.computed(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(event.UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(event.CHANGE_EVENT, props.inactiveValue);
      emit(event.INPUT_EVENT, props.inactiveValue);
    }
    vue.watch(checked, () => {
      var _a;
      input.value.checked = checked.value;
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error.debugWarn(err));
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(event.UPDATE_MODEL_EVENT, val);
      emit(event.CHANGE_EVENT, val);
      emit(event.INPUT_EVENT, val);
      vue.nextTick(() => {
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
        shared.isPromise(shouldChange),
        core.isBoolean(shouldChange)
      ].some((i) => i);
      if (!isExpectType) {
        error.throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (shared.isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          error.debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const setBackgroundColor = () => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor;
      const coreEl = core$1.value;
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
    vue.onMounted(() => {
      if (props.activeColor || props.inactiveColor || props.borderColor) {
        setBackgroundColor();
      }
      input.value.checked = checked.value;
    });
    return {
      ns,
      input,
      core: core$1,
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
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_loading = vue.resolveComponent("loading");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.switchKls),
    role: "switch",
    "aria-checked": _ctx.checked,
    "aria-disabled": _ctx.switchDisabled,
    onClick: _cache[2] || (_cache[2] = vue.withModifiers((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["prevent"]))
  }, [
    vue.createElementVNode("input", {
      id: _ctx.id,
      ref: "input",
      class: vue.normalizeClass(_ctx.ns.e("input")),
      type: "checkbox",
      name: _ctx.name,
      "true-value": _ctx.activeValue,
      "false-value": _ctx.inactiveValue,
      disabled: _ctx.switchDisabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onKeydown: _cache[1] || (_cache[1] = vue.withKeys((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["enter"]))
    }, null, 42, _hoisted_2),
    !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      class: vue.normalizeClass([
        _ctx.ns.e("label"),
        _ctx.ns.em("label", "left"),
        _ctx.ns.is("active", !_ctx.checked)
      ])
    }, [
      _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      !_ctx.inactiveIcon && _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 1,
        "aria-hidden": _ctx.checked
      }, vue.toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : vue.createCommentVNode("v-if", true)
    ], 2)) : vue.createCommentVNode("v-if", true),
    vue.createElementVNode("span", {
      ref: "core",
      class: vue.normalizeClass(_ctx.ns.e("core")),
      style: vue.normalizeStyle({ width: (_ctx.width || 40) + "px" })
    }, [
      _ctx.inlinePrompt ? (vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        class: vue.normalizeClass(_ctx.ns.e("inner"))
      }, [
        _ctx.activeIcon || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
          _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: vue.normalizeClass([_ctx.ns.is("icon"), _ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")])
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
          _ctx.inactiveIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 1,
            class: vue.normalizeClass([_ctx.ns.is("icon"), !_ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")])
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
        ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
          _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            class: vue.normalizeClass([_ctx.ns.is("text"), _ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")]),
            "aria-hidden": !_ctx.checked
          }, vue.toDisplayString(_ctx.activeText.substring(0, 3)), 11, _hoisted_4)) : vue.createCommentVNode("v-if", true),
          _ctx.inactiveText ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 1,
            class: vue.normalizeClass([_ctx.ns.is("text"), !_ctx.checked ? _ctx.ns.is("show") : _ctx.ns.is("hide")]),
            "aria-hidden": _ctx.checked
          }, vue.toDisplayString(_ctx.inactiveText.substring(0, 3)), 11, _hoisted_5)) : vue.createCommentVNode("v-if", true)
        ], 64)) : vue.createCommentVNode("v-if", true)
      ], 2)) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("div", {
        class: vue.normalizeClass(_ctx.ns.e("action"))
      }, [
        _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: vue.normalizeClass(_ctx.ns.is("loading"))
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_loading)
          ]),
          _: 1
        }, 8, ["class"])) : vue.createCommentVNode("v-if", true)
      ], 2)
    ], 6),
    !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 1,
      class: vue.normalizeClass([
        _ctx.ns.e("label"),
        _ctx.ns.em("label", "right"),
        _ctx.ns.is("active", _ctx.checked)
      ])
    }, [
      _ctx.activeIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, { key: 0 }, {
        default: vue.withCtx(() => [
          (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.activeIcon)))
        ]),
        _: 1
      })) : vue.createCommentVNode("v-if", true),
      !_ctx.activeIcon && _ctx.activeText ? (vue.openBlock(), vue.createElementBlock("span", {
        key: 1,
        "aria-hidden": !_ctx.checked
      }, vue.toDisplayString(_ctx.activeText), 9, _hoisted_6)) : vue.createCommentVNode("v-if", true)
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Switch = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);

exports["default"] = Switch;
//# sourceMappingURL=switch2.js.map
