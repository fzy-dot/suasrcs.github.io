import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from 'vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElHeader",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    const ns = useNamespace("header");
    return {
      style: computed(() => props.height ? {
        "--el-header-height": props.height
      } : {}),
      ns
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", {
    class: normalizeClass(_ctx.ns.b()),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);

export { Header as default };
//# sourceMappingURL=header.mjs.map
