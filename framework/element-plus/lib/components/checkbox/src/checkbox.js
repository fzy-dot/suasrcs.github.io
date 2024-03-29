'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var useCheckbox = require('./useCheckbox.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var validator = require('../../../utils/vue/validator.js');
var event = require('../../../constants/event.js');
var index = require('../../../hooks/use-namespace/index.js');

const _sfc_main = vue.defineComponent({
  name: "ElCheckbox",
  props: {
    modelValue: {
      type: [Number, String, Boolean],
      default: () => void 0
    },
    label: {
      type: [String, Boolean, Number, Object]
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: void 0
    },
    trueLabel: {
      type: [String, Number],
      default: void 0
    },
    falseLabel: {
      type: [String, Number],
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    controls: {
      type: String,
      default: void 0
    },
    border: Boolean,
    size: {
      type: String,
      validator: validator.isValidComponentSize
    },
    tabindex: [String, Number]
  },
  emits: [event.UPDATE_MODEL_EVENT, "change"],
  setup(props) {
    const ns = index.useNamespace("checkbox");
    return {
      ns,
      ...useCheckbox.useCheckbox(props)
    };
  }
});
const _hoisted_1 = ["id", "aria-controls"];
const _hoisted_2 = ["tabindex", "role", "aria-checked"];
const _hoisted_3 = ["aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const _hoisted_4 = ["aria-hidden", "disabled", "value", "name", "tabindex"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("label", {
    id: _ctx.id,
    class: vue.normalizeClass([
      _ctx.ns.b(),
      _ctx.ns.m(_ctx.checkboxSize),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      _ctx.ns.is("bordered", _ctx.border),
      _ctx.ns.is("checked", _ctx.isChecked)
    ]),
    "aria-controls": _ctx.indeterminate ? _ctx.controls : null
  }, [
    vue.createElementVNode("span", {
      class: vue.normalizeClass([
        _ctx.ns.e("input"),
        _ctx.ns.is("disabled", _ctx.isDisabled),
        _ctx.ns.is("checked", _ctx.isChecked),
        _ctx.ns.is("indeterminate", _ctx.indeterminate),
        _ctx.ns.is("focus", _ctx.focus)
      ]),
      tabindex: _ctx.indeterminate ? 0 : void 0,
      role: _ctx.indeterminate ? "checkbox" : void 0,
      "aria-checked": _ctx.indeterminate ? "mixed" : false
    }, [
      vue.createElementVNode("span", {
        class: vue.normalizeClass(_ctx.ns.e("inner"))
      }, null, 2),
      _ctx.trueLabel || _ctx.falseLabel ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 0,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
        class: vue.normalizeClass(_ctx.ns.e("original")),
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        disabled: _ctx.isDisabled,
        "true-value": _ctx.trueLabel,
        "false-value": _ctx.falseLabel,
        onChange: _cache[1] || (_cache[1] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[2] || (_cache[2] = ($event) => _ctx.focus = true),
        onBlur: _cache[3] || (_cache[3] = ($event) => _ctx.focus = false)
      }, null, 42, _hoisted_3)), [
        [vue.vModelCheckbox, _ctx.model]
      ]) : vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
        key: 1,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.model = $event),
        class: vue.normalizeClass(_ctx.ns.e("original")),
        type: "checkbox",
        "aria-hidden": _ctx.indeterminate ? "true" : "false",
        disabled: _ctx.isDisabled,
        value: _ctx.label,
        name: _ctx.name,
        tabindex: _ctx.tabindex,
        onChange: _cache[5] || (_cache[5] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onFocus: _cache[6] || (_cache[6] = ($event) => _ctx.focus = true),
        onBlur: _cache[7] || (_cache[7] = ($event) => _ctx.focus = false)
      }, null, 42, _hoisted_4)), [
        [vue.vModelCheckbox, _ctx.model]
      ])
    ], 10, _hoisted_2),
    _ctx.$slots.default || _ctx.label ? (vue.openBlock(), vue.createElementBlock("span", {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.e("label"))
    }, [
      vue.renderSlot(_ctx.$slots, "default"),
      !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
        vue.createTextVNode(vue.toDisplayString(_ctx.label), 1)
      ], 2112)) : vue.createCommentVNode("v-if", true)
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var Checkbox = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);

exports["default"] = Checkbox;
//# sourceMappingURL=checkbox.js.map
