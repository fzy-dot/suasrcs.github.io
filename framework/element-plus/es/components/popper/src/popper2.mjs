import { defineComponent, ref, provide, renderSlot } from 'vue';
import '../../../tokens/index.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { POPPER_INJECTION_KEY } from '../../../tokens/popper.mjs';

const __default__ = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props, { expose }) {
    const triggerRef = ref();
    const popperInstanceRef = ref();
    const contentRef = ref();
    const referenceRef = ref();
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef
    };
    expose(popperProvides);
    provide(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return renderSlot(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);

export { Popper as default };
//# sourceMappingURL=popper2.mjs.map
