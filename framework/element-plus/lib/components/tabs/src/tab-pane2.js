'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../tokens/index.js');
require('../../../utils/index.js');
require('../../../hooks/index.js');
var tabPane = require('./tab-pane.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var tabs = require('../../../tokens/tabs.js');
var error = require('../../../utils/error.js');
var index = require('../../../hooks/use-namespace/index.js');

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = {
  name: "ElTabPane"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: tabPane.tabPaneProps,
  setup(__props) {
    const props = __props;
    const COMPONENT_NAME = "ElTabPane";
    const instance = vue.getCurrentInstance();
    const tabsRoot = vue.inject(tabs.tabsRootContextKey);
    if (!tabsRoot)
      error.throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = index.useNamespace("tab-pane");
    const index$1 = vue.ref();
    const isClosable = vue.computed(() => props.closable || tabsRoot.props.closable);
    const active = core.eagerComputed(() => tabsRoot.currentName.value === (props.name || index$1.value));
    const loaded = vue.ref(active.value);
    const paneName = vue.computed(() => props.name || index$1.value);
    const shouldBeRender = core.eagerComputed(() => !props.lazy || loaded.value || active.value);
    vue.watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(vue.reactive({
      uid: instance.uid,
      instance: vue.markRaw(instance),
      props,
      paneName,
      active,
      index: index$1,
      isClosable
    }));
    return (_ctx, _cache) => {
      return vue.unref(shouldBeRender) ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
        key: 0,
        id: `pane-${vue.unref(paneName)}`,
        class: vue.normalizeClass(vue.unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !vue.unref(active),
        "aria-labelledby": `tab-${vue.unref(paneName)}`
      }, [
        vue.renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1)), [
        [vue.vShow, vue.unref(active)]
      ]) : vue.createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);

exports["default"] = TabPane;
//# sourceMappingURL=tab-pane2.js.map
