import { defineComponent, ref, provide, computed, openBlock, createBlock, Teleport, createVNode, Transition, unref, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createSlots, renderSlot, createCommentVNode, vShow } from 'vue';
import { ElOverlay } from '../../overlay/index.mjs';
import '../../../hooks/index.mjs';
import '../../../tokens/index.mjs';
import ElDialogContent from './dialog-content2.mjs';
import { dialogProps, dialogEmits } from './dialog.mjs';
import { useDialog } from './use-dialog.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { dialogInjectionKey } from '../../../tokens/dialog.mjs';
import { useSameTarget } from '../../../hooks/use-same-target/index.mjs';
import { useDraggable } from '../../../hooks/use-draggable/index.mjs';

const __default__ = {
  name: "ElDialog"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const {
      visible,
      style,
      rendered,
      zIndex,
      afterEnter,
      afterLeave,
      beforeLeave,
      handleClose,
      onModalClick
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const draggable = computed(() => props.draggable && !props.fullscreen);
    useDraggable(dialogRef, headerRef, draggable);
    expose({
      visible
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        to: "body",
        disabled: !_ctx.appendToBody
      }, [
        createVNode(Transition, {
          name: "dialog-fade",
          onAfterEnter: unref(afterEnter),
          onAfterLeave: unref(afterLeave),
          onBeforeLeave: unref(beforeLeave)
        }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(ElOverlay), {
              "custom-mask-event": "",
              mask: _ctx.modal,
              "overlay-class": _ctx.modalClass,
              "z-index": unref(zIndex)
            }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  class: normalizeClass(`${unref(ns).namespace.value}-overlay-dialog`),
                  onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                  onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                  onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                }, [
                  unref(rendered) ? (openBlock(), createBlock(ElDialogContent, {
                    key: 0,
                    "custom-class": _ctx.customClass,
                    center: _ctx.center,
                    "close-icon": _ctx.closeIcon,
                    draggable: unref(draggable),
                    fullscreen: _ctx.fullscreen,
                    "show-close": _ctx.showClose,
                    style: normalizeStyle(unref(style)),
                    title: _ctx.title,
                    onClose: unref(handleClose)
                  }, createSlots({
                    title: withCtx(() => [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 2
                  }, [
                    _ctx.$slots.footer ? {
                      name: "footer",
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, "footer")
                      ])
                    } : void 0
                  ]), 1032, ["custom-class", "center", "close-icon", "draggable", "fullscreen", "show-close", "style", "title", "onClose"])) : createCommentVNode("v-if", true)
                ], 34)
              ]),
              _: 3
            }, 8, ["mask", "overlay-class", "z-index"]), [
              [vShow, unref(visible)]
            ])
          ]),
          _: 3
        }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
      ], 8, ["disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);

export { Dialog as default };
//# sourceMappingURL=dialog2.mjs.map
