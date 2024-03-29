import { defineComponent, ref, watch, computed, resolveComponent, openBlock, createElementBlock, normalizeClass, createVNode, withCtx, Fragment, renderList, createBlock } from 'vue';
import { isEqual } from 'lodash-unified';
import { ElSelect, ElOption } from '../../../select/index.mjs';
import '../../../../hooks/index.mjs';
import '../../../../utils/index.mjs';
import { usePagination } from '../usePagination.mjs';
import _export_sfc from '../../../../_virtual/plugin-vue_export-helper.mjs';
import { buildProps, definePropType } from '../../../../utils/vue/props.mjs';
import { mutable } from '../../../../utils/typescript.mjs';
import { useLocale } from '../../../../hooks/use-locale/index.mjs';
import { useNamespace } from '../../../../hooks/use-namespace/index.mjs';

const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: Boolean,
  size: {
    type: String,
    default: "default"
  }
});
const _sfc_main = defineComponent({
  name: "ElPaginationSizes",
  components: {
    ElSelect,
    ElOption
  },
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(props, { emit }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(() => props.pageSizes, (newVal, oldVal) => {
      if (isEqual(newVal, oldVal))
        return;
      if (Array.isArray(newVal)) {
        const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
        emit("page-size-change", pageSize);
      }
    });
    watch(() => props.pageSize, (newVal) => {
      innerPageSize.value = newVal;
    });
    const innerPagesizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null ? void 0 : _a.call(pagination, Number(val));
      }
    }
    return {
      ns,
      innerPagesizes,
      innerPageSize,
      t,
      handleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_option = resolveComponent("el-option");
  const _component_el_select = resolveComponent("el-select");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.ns.e("sizes"))
  }, [
    createVNode(_component_el_select, {
      "model-value": _ctx.innerPageSize,
      disabled: _ctx.disabled,
      "popper-class": _ctx.popperClass,
      size: _ctx.size,
      onChange: _ctx.handleChange
    }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.innerPagesizes, (item) => {
          return openBlock(), createBlock(_component_el_option, {
            key: item,
            value: item,
            label: item + _ctx.t("el.pagination.pagesize")
          }, null, 8, ["value", "label"]);
        }), 128))
      ]),
      _: 1
    }, 8, ["model-value", "disabled", "popper-class", "size", "onChange"])
  ], 2);
}
var Sizes = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);

export { Sizes as default };
//# sourceMappingURL=sizes.mjs.map
