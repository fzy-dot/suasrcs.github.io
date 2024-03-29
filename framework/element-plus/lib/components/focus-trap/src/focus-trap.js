'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../constants/index.js');
var utils = require('./utils.js');
var tokens = require('./tokens.js');
var pluginVue_exportHelper = require('../../../_virtual/plugin-vue_export-helper.js');
var aria = require('../../../constants/aria.js');

const _sfc_main = vue.defineComponent({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean
  },
  emits: [tokens.ON_MOUNT_FOCUS_EVT, tokens.ON_UNMOUNT_FOCUS_EVT],
  setup(props, { emit }) {
    const focusTrapRef = vue.ref();
    const forwardRef = vue.ref(null);
    let lastFocusBeforeMounted;
    let lastFocusAfterMounted;
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === aria.EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = utils.getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container)
            e.preventDefault();
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop)
              utils.tryFocus(first, true);
          } else if (shiftKey && currentFocusingEl === first) {
            e.preventDefault();
            if (loop)
              utils.tryFocus(last, true);
          }
        }
      }
    };
    vue.provide(tokens.FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    const focusOnMount = (e) => {
      emit(tokens.ON_MOUNT_FOCUS_EVT, e);
    };
    const focusOnUnmount = (e) => emit(tokens.ON_UNMOUNT_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = vue.unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      const target = e.target;
      if (target && trapContainer.contains(target)) {
        lastFocusAfterMounted = target;
      } else {
        utils.tryFocus(lastFocusAfterMounted, true);
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = vue.unref(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (!trapContainer.contains(e.relatedTarget)) {
        utils.tryFocus(lastFocusAfterMounted, true);
      }
    };
    const cleanupDocumentListeners = () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("focusout", onFocusOut);
    };
    vue.onMounted(() => {
      const trapContainer = vue.unref(forwardRef);
      if (trapContainer) {
        utils.focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeMounted = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const mountEvent = new Event(tokens.FOCUS_ON_MOUNT, tokens.FOCUS_ON_MOUNT_OPTS);
          trapContainer.addEventListener(tokens.FOCUS_ON_MOUNT, focusOnMount);
          trapContainer.dispatchEvent(mountEvent);
          if (!mountEvent.defaultPrevented) {
            vue.nextTick(() => {
              utils.focusFirstDescendant(utils.obtainAllFocusableElements(trapContainer), true);
              if (document.activeElement === prevFocusedElement) {
                utils.tryFocus(trapContainer);
              }
            });
          }
        }
      }
      vue.watch(() => props.trapped, (trapped) => {
        if (trapped) {
          document.addEventListener("focusin", onFocusIn);
          document.addEventListener("focusout", onFocusOut);
        } else {
          cleanupDocumentListeners();
        }
      }, { immediate: true });
    });
    vue.onBeforeUnmount(() => {
      cleanupDocumentListeners();
      const trapContainer = vue.unref(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(tokens.FOCUS_ON_MOUNT, focusOnMount);
        const unmountEvent = new Event(tokens.FOCUS_ON_UNMOUNT, tokens.FOCUS_ON_MOUNT_OPTS);
        trapContainer.addEventListener(tokens.FOCUS_ON_UNMOUNT, focusOnUnmount);
        trapContainer.dispatchEvent(unmountEvent);
        if (!unmountEvent.defaultPrevented) {
          utils.tryFocus(lastFocusBeforeMounted != null ? lastFocusBeforeMounted : document.body, true);
        }
        trapContainer.removeEventListener(tokens.FOCUS_ON_UNMOUNT, focusOnMount);
        utils.focusableStack.remove(focusLayer);
      }
    });
    return {
      focusTrapRef,
      forwardRef,
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.renderSlot(_ctx.$slots, "default");
}
var ElFocusTrap = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);

exports["default"] = ElFocusTrap;
//# sourceMappingURL=focus-trap.js.map
