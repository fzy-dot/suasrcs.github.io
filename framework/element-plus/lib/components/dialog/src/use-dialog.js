'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
require('../../../hooks/index.js');
require('../../../constants/index.js');
require('../../../utils/index.js');
var index = require('../../../hooks/use-z-index/index.js');
var event = require('../../../constants/event.js');
var index$1 = require('../../../hooks/use-lockscreen/index.js');
var index$2 = require('../../../hooks/use-modal/index.js');
var index$3 = require('../../../hooks/use-restore-active/index.js');

const useDialog = (props, targetRef) => {
  const instance = vue.getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = index.useZIndex();
  let lastPosition = "";
  const visible = vue.ref(false);
  const closed = vue.ref(false);
  const rendered = vue.ref(false);
  const zIndex = vue.ref(props.zIndex || nextZIndex());
  let openTimer = void 0;
  let closeTimer = void 0;
  const normalizeWidth = vue.computed(() => core.isNumber(props.width) ? `${props.width}px` : props.width);
  const style = vue.computed(() => {
    const style2 = {};
    const varPrefix = `--el-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      if (props.width) {
        style2[`${varPrefix}-width`] = normalizeWidth.value;
      }
    }
    return style2;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(event.UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
  }
  function beforeLeave() {
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ;
      ({ stop: openTimer } = core.useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ;
      ({ stop: closeTimer } = core.useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!core.isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  if (props.lockScroll) {
    index$1.useLockscreen(visible);
  }
  if (props.closeOnPressEscape) {
    index$2.useModal({
      handleClose
    }, visible);
  }
  index$3.useRestoreActive(visible);
  vue.watch(() => props.modelValue, (val) => {
    if (val) {
      closed.value = false;
      open();
      rendered.value = true;
      emit("open");
      zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
      vue.nextTick(() => {
        if (targetRef.value) {
          targetRef.value.scrollTop = 0;
        }
      });
    } else {
      if (visible.value) {
        close();
      }
    }
  });
  vue.watch(() => props.fullscreen, (val) => {
    if (!targetRef.value)
      return;
    if (val) {
      lastPosition = targetRef.value.style.transform;
      targetRef.value.style.transform = "";
    } else {
      targetRef.value.style.transform = lastPosition;
    }
  });
  vue.onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    closed,
    style,
    rendered,
    visible,
    zIndex
  };
};

exports.useDialog = useDialog;
//# sourceMappingURL=use-dialog.js.map
