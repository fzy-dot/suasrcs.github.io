import { defineComponent, inject, reactive, ref, computed, watch, h, toRefs, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, renderSlot, createElementVNode, toDisplayString, createCommentVNode } from 'vue';
import { ElButton } from '../../button/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import '../../../constants/index.mjs';
import '../../../hooks/index.mjs';
import '../../../tokens/index.mjs';
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue';
import '../../../utils/index.mjs';
import TransferPanel from './transfer-panel.mjs';
import { useComputedData } from './useComputedData.mjs';
import { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT, useCheckedChange } from './useCheckedChange.mjs';
import { useMove } from './useMove.mjs';
import './transfer.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../../constants/event.mjs';
import { useLocale } from '../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { formItemContextKey } from '../../../tokens/form.mjs';
import { debugWarn } from '../../../utils/error.mjs';

const _sfc_main = defineComponent({
  name: "ElTransfer",
  components: {
    TransferPanel,
    ElButton,
    ElIcon,
    ArrowLeft,
    ArrowRight
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    titles: {
      type: Array,
      default: () => []
    },
    buttonTexts: {
      type: Array,
      default: () => []
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default: () => []
    },
    rightDefaultChecked: {
      type: Array,
      default: () => []
    },
    renderContent: Function,
    modelValue: {
      type: Array,
      default: () => []
    },
    format: {
      type: Object,
      default: () => ({})
    },
    filterable: {
      type: Boolean,
      default: false
    },
    props: {
      type: Object,
      default: () => ({
        label: "label",
        key: "key",
        disabled: "disabled"
      })
    },
    targetOrder: {
      type: String,
      default: "original",
      validator: (val) => {
        return ["original", "push", "unshift"].includes(val);
      }
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    LEFT_CHECK_CHANGE_EVENT,
    RIGHT_CHECK_CHANGE_EVENT
  ],
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("transfer");
    const elFormItem = inject(formItemContextKey, {});
    const checkedState = reactive({
      leftChecked: [],
      rightChecked: []
    });
    const { propsKey, sourceData, targetData } = useComputedData(props);
    const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange(checkedState, emit);
    const { addToLeft, addToRight } = useMove(props, checkedState, propsKey, emit);
    const leftPanel = ref();
    const rightPanel = ref();
    const clearQuery = (which) => {
      switch (which) {
        case "left":
          leftPanel.value.query = "";
          break;
        case "right":
          rightPanel.value.query = "";
          break;
      }
    };
    const hasButtonTexts = computed(() => props.buttonTexts.length === 2);
    const leftPanelTitle = computed(() => props.titles[0] || t("el.transfer.titles.0"));
    const rightPanelTitle = computed(() => props.titles[1] || t("el.transfer.titles.1"));
    const panelFilterPlaceholder = computed(() => props.filterPlaceholder || t("el.transfer.filterPlaceholder"));
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn(err));
    });
    const optionRender = computed(() => (option) => {
      if (props.renderContent)
        return props.renderContent(h, option);
      if (slots.default)
        return slots.default({ option });
      return h("span", option[props.props.label] || option[props.props.key]);
    });
    return {
      ns,
      sourceData,
      targetData,
      onSourceCheckedChange,
      onTargetCheckedChange,
      addToLeft,
      addToRight,
      ...toRefs(checkedState),
      hasButtonTexts,
      leftPanelTitle,
      rightPanelTitle,
      panelFilterPlaceholder,
      clearQuery,
      leftPanel,
      rightPanel,
      optionRender
    };
  }
});
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_transfer_panel = resolveComponent("transfer-panel");
  const _component_arrow_left = resolveComponent("arrow-left");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_right = resolveComponent("arrow-right");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.ns.b())
  }, [
    createVNode(_component_transfer_panel, {
      ref: "leftPanel",
      data: _ctx.sourceData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      title: _ctx.leftPanelTitle,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      "default-checked": _ctx.leftDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onSourceCheckedChange
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "left-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "title", "filterable", "format", "filter-method", "default-checked", "props", "onCheckedChange"]),
    createElementVNode("div", {
      class: normalizeClass(_ctx.ns.e("buttons"))
    }, [
      createVNode(_component_el_button, {
        type: "primary",
        class: normalizeClass([_ctx.ns.e("button"), _ctx.ns.is("with-texts", _ctx.hasButtonTexts)]),
        disabled: _ctx.rightChecked.length === 0,
        onClick: _ctx.addToLeft
      }, {
        default: withCtx(() => [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_arrow_left)
            ]),
            _: 1
          }),
          _ctx.buttonTexts[0] !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString(_ctx.buttonTexts[0]), 1)) : createCommentVNode("v-if", true)
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"]),
      createVNode(_component_el_button, {
        type: "primary",
        class: normalizeClass([_ctx.ns.e("button"), _ctx.ns.is("with-texts", _ctx.hasButtonTexts)]),
        disabled: _ctx.leftChecked.length === 0,
        onClick: _ctx.addToRight
      }, {
        default: withCtx(() => [
          _ctx.buttonTexts[1] !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.buttonTexts[1]), 1)) : createCommentVNode("v-if", true),
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              createVNode(_component_arrow_right)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "onClick"])
    ], 2),
    createVNode(_component_transfer_panel, {
      ref: "rightPanel",
      data: _ctx.targetData,
      "option-render": _ctx.optionRender,
      placeholder: _ctx.panelFilterPlaceholder,
      filterable: _ctx.filterable,
      format: _ctx.format,
      "filter-method": _ctx.filterMethod,
      title: _ctx.rightPanelTitle,
      "default-checked": _ctx.rightDefaultChecked,
      props: _ctx.props,
      onCheckedChange: _ctx.onTargetCheckedChange
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "right-footer")
      ]),
      _: 3
    }, 8, ["data", "option-render", "placeholder", "filterable", "format", "filter-method", "title", "default-checked", "props", "onCheckedChange"])
  ], 2);
}
var Transfer = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/transfer/src/index.vue"]]);

export { Transfer as default };
//# sourceMappingURL=index.mjs.map
