import { defineComponent, ref, computed, unref, resolveComponent, openBlock, createBlock, mergeProps, withCtx, createElementBlock, normalizeClass, toDisplayString, createCommentVNode, renderSlot, createTextVNode } from 'vue';
import { ElTooltip } from '../../tooltip/index.mjs';
import '../../popper/index.mjs';
import '../../../utils/index.mjs';
import '../../../hooks/index.mjs';
import { usePopoverProps } from './popover.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { isString } from '@vue/shared';
import { useDeprecateAppendToBody } from '../../popper/src/deprecation.mjs';

const emits = [
  "update:visible",
  "before-enter",
  "before-leave",
  "after-enter",
  "after-leave"
];
const COMPONENT_NAME = "ElPopover";
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElTooltip
  },
  props: usePopoverProps,
  emits,
  setup(props, { emit }) {
    const ns = useNamespace("popover");
    const tooltipRef = ref(null);
    const popperRef = computed(() => {
      var _a;
      return (_a = unref(tooltipRef)) == null ? void 0 : _a.popperRef;
    });
    const width = computed(() => {
      if (isString(props.width)) {
        return props.width;
      }
      return `${props.width}px`;
    });
    const style = computed(() => {
      return [
        {
          width: width.value
        },
        props.popperStyle
      ];
    });
    const kls = computed(() => {
      return [ns.b(), props.popperClass, { [ns.m("plain")]: !!props.content }];
    });
    const gpuAcceleration = computed(() => {
      return props.transition === "el-fade-in-linear";
    });
    const { compatTeleported } = useDeprecateAppendToBody(COMPONENT_NAME, "appendToBody");
    const hide = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.hide();
    };
    const beforeEnter = () => {
      emit("before-enter");
    };
    const beforeLeave = () => {
      emit("before-leave");
    };
    const afterEnter = () => {
      emit("after-enter");
    };
    const afterLeave = () => {
      emit("update:visible", false);
      emit("after-leave");
    };
    return {
      compatTeleported,
      ns,
      kls,
      gpuAcceleration,
      style,
      tooltipRef,
      popperRef,
      hide,
      beforeEnter,
      beforeLeave,
      afterEnter,
      afterLeave
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, mergeProps({ ref: "tooltipRef" }, _ctx.$attrs, {
    trigger: _ctx.trigger,
    placement: _ctx.placement,
    disabled: _ctx.disabled,
    visible: _ctx.visible,
    transition: _ctx.transition,
    "popper-options": _ctx.popperOptions,
    tabindex: _ctx.tabindex,
    "append-to-body": _ctx.appendToBody,
    content: _ctx.content,
    offset: _ctx.offset,
    "show-after": _ctx.showAfter,
    "hide-after": _ctx.hideAfter,
    "auto-close": _ctx.autoClose,
    "show-arrow": _ctx.showArrow,
    "aria-label": _ctx.title,
    effect: _ctx.effect,
    enterable: _ctx.enterable,
    "popper-class": _ctx.kls,
    "popper-style": _ctx.style,
    teleported: _ctx.compatTeleported,
    persistent: _ctx.persistent,
    "gpu-acceleration": _ctx.gpuAcceleration,
    onBeforeShow: _ctx.beforeEnter,
    onBeforeHide: _ctx.beforeLeave,
    onShow: _ctx.afterEnter,
    onHide: _ctx.afterLeave
  }), {
    content: withCtx(() => [
      _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(_ctx.ns.e("title")),
        role: "title"
      }, toDisplayString(_ctx.title), 3)) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.content), 1)
      ])
    ]),
    default: withCtx(() => [
      _ctx.$slots.reference ? renderSlot(_ctx.$slots, "reference", { key: 0 }) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "append-to-body", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onBeforeShow", "onBeforeHide", "onShow", "onHide"]);
}
var Popover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/index.vue"]]);

export { Popover as default };
//# sourceMappingURL=index.mjs.map
