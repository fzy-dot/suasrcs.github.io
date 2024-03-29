import { defineComponent, computed, h } from 'vue';
import '../../../hooks/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';

const _sfc_main = defineComponent({
  name: "ElMarker",
  props: {
    mark: {
      type: [String, Object],
      default: () => void 0
    }
  },
  setup(props) {
    const ns = useNamespace("slider");
    const label = computed(() => {
      return typeof props.mark === "string" ? props.mark : props.mark.label;
    });
    return {
      ns,
      label
    };
  },
  render() {
    var _a;
    return h("div", {
      class: this.ns.e("marks-text"),
      style: (_a = this.mark) == null ? void 0 : _a.style
    }, this.label);
  }
});
var SliderMarker = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/slider/src/marker.vue"]]);

export { SliderMarker as default };
//# sourceMappingURL=marker.mjs.map
