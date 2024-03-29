import { defineComponent, getCurrentInstance, inject, ref, computed, watch, reactive, markRaw, unref, withDirectives, openBlock, createElementBlock, normalizeClass, renderSlot, vShow, createCommentVNode } from 'vue';
import { eagerComputed } from '@vueuse/core';
import '../../../tokens/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { tabPaneProps } from './tab-pane.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { tabsRootContextKey } from '../../../tokens/tabs.mjs';
import { throwError } from '../../../utils/error.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _hoisted_1 = ["id", "aria-hidden", "aria-labelledby"];
const __default__ = {
  name: "ElTabPane"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tabPaneProps,
  setup(__props) {
    const props = __props;
    const COMPONENT_NAME = "ElTabPane";
    const instance = getCurrentInstance();
    const tabsRoot = inject(tabsRootContextKey);
    if (!tabsRoot)
      throwError(COMPONENT_NAME, "usage: <el-tabs><el-tab-pane /></el-tabs/>");
    const ns = useNamespace("tab-pane");
    const index = ref();
    const isClosable = computed(() => props.closable || tabsRoot.props.closable);
    const active = eagerComputed(() => tabsRoot.currentName.value === (props.name || index.value));
    const loaded = ref(active.value);
    const paneName = computed(() => props.name || index.value);
    const shouldBeRender = eagerComputed(() => !props.lazy || loaded.value || active.value);
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    tabsRoot.updatePaneState(reactive({
      uid: instance.uid,
      instance: markRaw(instance),
      props,
      paneName,
      active,
      index,
      isClosable
    }));
    return (_ctx, _cache) => {
      return unref(shouldBeRender) ? withDirectives((openBlock(), createElementBlock("div", {
        key: 0,
        id: `pane-${unref(paneName)}`,
        class: normalizeClass(unref(ns).b()),
        role: "tabpanel",
        "aria-hidden": !unref(active),
        "aria-labelledby": `tab-${unref(paneName)}`
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1)), [
        [vShow, unref(active)]
      ]) : createCommentVNode("v-if", true);
    };
  }
});
var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);

export { TabPane as default };
//# sourceMappingURL=tab-pane2.mjs.map
