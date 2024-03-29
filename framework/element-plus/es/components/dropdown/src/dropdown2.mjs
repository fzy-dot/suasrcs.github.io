import { defineComponent, getCurrentInstance, ref, computed, unref, provide, toRef, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, createSlots, withCtx, renderSlot, createElementVNode, createBlock, mergeProps, createCommentVNode } from 'vue';
import { ElButton } from '../../button/index.mjs';
import { ElTooltip } from '../../tooltip/index.mjs';
import { ElScrollbar } from '../../scrollbar/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../focus-trap/index.mjs';
import '../../roving-focus-group/index.mjs';
import '../../../utils/index.mjs';
import { ArrowDown } from '@element-plus/icons-vue';
import '../../../hooks/index.mjs';
import { ElCollection, dropdownProps } from './dropdown.mjs';
import { DROPDOWN_INJECTION_KEY } from './tokens.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import ElFocusTrap from '../../focus-trap/src/focus-trap.mjs';
import ElRovingFocusGroup from '../../roving-focus-group/src/roving-focus-group2.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { addUnit } from '../../../utils/dom/style.mjs';
import { useSize } from '../../../hooks/use-common-props/index.mjs';

const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main = defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElFocusTrap,
    ElButtonGroup,
    ElScrollbar,
    ElDropdownCollection: ElCollection,
    ElTooltip,
    ElRovingFocusGroup,
    ElIcon,
    ArrowDown
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref(null);
    const contentRef = ref(null);
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    function handleClick() {
      handleClose();
    }
    function handleClose() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose();
    }
    function handleOpen() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onOpen();
    }
    const dropdownSize = useSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      contentEl == null ? void 0 : contentEl.focus();
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleEntryFocus(e) {
      if (!isUsingKeyboard.value) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick")
    });
    const onMountOnFocus = (e) => {
      var _a, _b;
      e.preventDefault();
      (_b = (_a = contentRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a, {
        preventScroll: true
      });
    };
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleEntryFocus,
      handleClose,
      handleOpen,
      onMountOnFocus,
      popperRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_dropdown_collection = resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_focus_trap = resolveComponent("el-focus-trap");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    createVNode(_component_el_tooltip, {
      ref: "popperRef",
      effect: _ctx.effect,
      "fallback-placements": ["bottom", "top"],
      "popper-options": _ctx.popperOptions,
      "gpu-acceleration": false,
      "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
      "manual-mode": true,
      placement: _ctx.placement,
      "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
      "reference-element": (_a = _ctx.referenceElementRef) == null ? void 0 : _a.$el,
      trigger: _ctx.trigger,
      "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
      "stop-popper-mouse-event": false,
      "virtual-ref": _ctx.triggeringElementRef,
      "virtual-triggering": _ctx.splitButton,
      disabled: _ctx.disabled,
      "append-to-body": "",
      pure: "",
      transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
      persistent: "",
      onShow: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("visible-change", true)),
      onHide: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("visible-change", false))
    }, createSlots({
      content: withCtx(() => [
        createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: withCtx(() => [
            createVNode(_component_el_focus_trap, {
              trapped: "",
              onMountOnFocus: _ctx.onMountOnFocus
            }, {
              default: withCtx(() => [
                createVNode(_component_el_roving_focus_group, {
                  loop: _ctx.loop,
                  "current-tab-id": _ctx.currentTabId,
                  orientation: "horizontal",
                  onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
                  onEntryFocus: _ctx.handleEntryFocus
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_dropdown_collection, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "dropdown")
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange", "onEntryFocus"])
              ]),
              _: 3
            }, 8, ["onMountOnFocus"])
          ]),
          _: 3
        }, 8, ["wrap-style", "view-class"])
      ]),
      _: 2
    }, [
      !_ctx.splitButton ? {
        name: "default",
        fn: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(_ctx.dropdownTriggerKls)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ])
      } : void 0
    ]), 1032, ["effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition"]),
    _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "onClick"]),
        createVNode(_component_el_button, mergeProps({ ref: "triggeringElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled
        }), {
          default: withCtx(() => [
            createVNode(_component_el_icon, {
              class: normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: withCtx(() => [
                createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["size", "type", "class", "disabled"])
      ]),
      _: 3
    })) : createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);

export { Dropdown as default };
//# sourceMappingURL=dropdown2.mjs.map
