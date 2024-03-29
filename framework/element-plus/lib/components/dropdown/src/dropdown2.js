'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../button/index.js');
var index$2 = require('../../tooltip/index.js');
var index$1 = require('../../scrollbar/index.js');
var index$3 = require('../../icon/index.js');
require('../../focus-trap/index.js');
require('../../roving-focus-group/index.js');
require('../../../utils/index.js');
var iconsVue = require('@element-plus/icons-vue');
require('../../../hooks/index.js');
var dropdown = require('./dropdown.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var focusTrap = require('../../focus-trap/src/focus-trap.js');
var rovingFocusGroup = require('../../roving-focus-group/src/roving-focus-group2.js');
var index$4 = require('../../../hooks/use-namespace/index.js');
var style = require('../../../utils/dom/style.js');
var index$5 = require('../../../hooks/use-common-props/index.js');

const { ButtonGroup: ElButtonGroup } = index.ElButton;
const _sfc_main = vue.defineComponent({
  name: "ElDropdown",
  components: {
    ElButton: index.ElButton,
    ElFocusTrap: focusTrap["default"],
    ElButtonGroup,
    ElScrollbar: index$1.ElScrollbar,
    ElDropdownCollection: dropdown.ElCollection,
    ElTooltip: index$2.ElTooltip,
    ElRovingFocusGroup: rovingFocusGroup["default"],
    ElIcon: index$3.ElIcon,
    ArrowDown: iconsVue.ArrowDown
  },
  props: dropdown.dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = vue.getCurrentInstance();
    const ns = index$4.useNamespace("dropdown");
    const triggeringElementRef = vue.ref();
    const referenceElementRef = vue.ref();
    const popperRef = vue.ref(null);
    const contentRef = vue.ref(null);
    const scrollbar = vue.ref(null);
    const currentTabId = vue.ref(null);
    const isUsingKeyboard = vue.ref(false);
    const wrapStyle = vue.computed(() => ({
      maxHeight: style.addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = vue.computed(() => [ns.m(dropdownSize.value)]);
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
    const dropdownSize = index$5.useSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = vue.unref(contentRef);
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
    vue.provide(tokens.DROPDOWN_INJECTION_KEY, {
      contentRef,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave
    });
    vue.provide("elDropdown", {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: vue.toRef(props, "trigger"),
      hideOnClick: vue.toRef(props, "hideOnClick")
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
  const _component_el_dropdown_collection = vue.resolveComponent("el-dropdown-collection");
  const _component_el_roving_focus_group = vue.resolveComponent("el-roving-focus-group");
  const _component_el_focus_trap = vue.resolveComponent("el-focus-trap");
  const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
  const _component_el_tooltip = vue.resolveComponent("el-tooltip");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_arrow_down = vue.resolveComponent("arrow-down");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_button_group = vue.resolveComponent("el-button-group");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
  }, [
    vue.createVNode(_component_el_tooltip, {
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
    }, vue.createSlots({
      content: vue.withCtx(() => [
        vue.createVNode(_component_el_scrollbar, {
          ref: "scrollbar",
          "wrap-style": _ctx.wrapStyle,
          tag: "div",
          "view-class": _ctx.ns.e("list")
        }, {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_focus_trap, {
              trapped: "",
              onMountOnFocus: _ctx.onMountOnFocus
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_roving_focus_group, {
                  loop: _ctx.loop,
                  "current-tab-id": _ctx.currentTabId,
                  orientation: "horizontal",
                  onCurrentTabIdChange: _ctx.handleCurrentTabIdChange,
                  onEntryFocus: _ctx.handleEntryFocus
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_el_dropdown_collection, null, {
                      default: vue.withCtx(() => [
                        vue.renderSlot(_ctx.$slots, "dropdown")
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
        fn: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(_ctx.dropdownTriggerKls)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2)
        ])
      } : void 0
    ]), 1032, ["effect", "popper-options", "hide-after", "placement", "popper-class", "reference-element", "trigger", "show-after", "virtual-ref", "virtual-triggering", "disabled", "transition"]),
    _ctx.splitButton ? (vue.openBlock(), vue.createBlock(_component_el_button_group, { key: 0 }, {
      default: vue.withCtx(() => [
        vue.createVNode(_component_el_button, vue.mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          disabled: _ctx.disabled,
          onClick: _ctx.handlerMainButtonClick
        }), {
          default: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        }, 16, ["size", "type", "disabled", "onClick"]),
        vue.createVNode(_component_el_button, vue.mergeProps({ ref: "triggeringElementRef" }, _ctx.buttonProps, {
          size: _ctx.dropdownSize,
          type: _ctx.type,
          class: _ctx.ns.e("caret-button"),
          disabled: _ctx.disabled
        }), {
          default: vue.withCtx(() => [
            vue.createVNode(_component_el_icon, {
              class: vue.normalizeClass(_ctx.ns.e("icon"))
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_arrow_down)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 16, ["size", "type", "class", "disabled"])
      ]),
      _: 3
    })) : vue.createCommentVNode("v-if", true)
  ], 2);
}
var Dropdown = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);

exports["default"] = Dropdown;
//# sourceMappingURL=dropdown2.js.map
