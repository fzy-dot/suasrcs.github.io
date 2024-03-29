'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
var result = require('./result.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../hooks/use-namespace/index.js');
var index$1 = require('../../../hooks/use-deprecated/index.js');

const COMPONENT_NAME = "ElResult";
const _sfc_main = vue.defineComponent({
  name: COMPONENT_NAME,
  props: result.resultProps,
  setup(props, { slots }) {
    const ns = index.useNamespace("result");
    index$1.useDeprecated({
      scope: COMPONENT_NAME,
      type: "Slot",
      from: "subTitle",
      replacement: "sub-title",
      version: "2.1.3",
      ref: "https://github.com/element-plus/element-plus/pull/6636/"
    }, vue.computed(() => !!slots.subTitle));
    const resultIcon = vue.computed(() => {
      const icon = props.icon;
      const iconClass = icon && result.IconMap[icon] ? result.IconMap[icon] : "icon-info";
      const iconComponent = result.IconComponentMap[iconClass] || result.IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return {
      ns,
      resultIcon
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(_ctx.ns.b())
  }, [
    vue.createElementVNode("div", {
      class: vue.normalizeClass(_ctx.ns.e("icon"))
    }, [
      vue.renderSlot(_ctx.$slots, "icon", {}, () => [
        _ctx.resultIcon.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.resultIcon.component), {
          key: 0,
          class: vue.normalizeClass(_ctx.resultIcon.class)
        }, null, 8, ["class"])) : vue.createCommentVNode("v-if", true)
      ])
    ], 2),
    _ctx.title || _ctx.$slots.title ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(_ctx.ns.e("title"))
    }, [
      vue.renderSlot(_ctx.$slots, "title", {}, () => [
        vue.createElementVNode("p", null, vue.toDisplayString(_ctx.title), 1)
      ])
    ], 2)) : vue.createCommentVNode("v-if", true),
    _ctx.subTitle || _ctx.$slots["sub-title"] ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 1,
      class: vue.normalizeClass(_ctx.ns.e("subtitle"))
    }, [
      vue.renderSlot(_ctx.$slots, "sub-title", {}, () => [
        vue.createElementVNode("p", null, vue.toDisplayString(_ctx.subTitle), 1)
      ])
    ], 2)) : vue.createCommentVNode("v-if", true),
    _ctx.$slots.extra ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 2,
      class: vue.normalizeClass(_ctx.ns.e("extra"))
    }, [
      vue.renderSlot(_ctx.$slots, "extra")
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 2);
}
var Result = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);

exports["default"] = Result;
//# sourceMappingURL=result2.js.map
