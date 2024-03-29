import { defineComponent, inject, ref, computed, h, withCtx, renderSlot, withKeys, withModifiers } from 'vue';
import { get } from 'lodash-unified';
import '../../../utils/index.mjs';
import '../../virtual-list/index.mjs';
import '../../../hooks/index.mjs';
import GroupItem from './group-item.mjs';
import OptionItem from './option-item.mjs';
import { selectV2InjectionKey } from './token.mjs';
import _export_sfc from '../../../_virtual/plugin-vue_export-helper.mjs';
import { useNamespace } from '../../../hooks/use-namespace/index.mjs';
import { isUndefined } from '../../../utils/types.mjs';
import { isObject } from '@vue/shared';
import FixedSizeList from '../../virtual-list/src/components/fixed-size-list.mjs';
import DynamicSizeList from '../../virtual-list/src/components/dynamic-size-list.mjs';

const _sfc_main = defineComponent({
  name: "ElSelectDropdown",
  props: {
    data: Array,
    hoveringIndex: Number,
    width: Number
  },
  setup(props) {
    const select = inject(selectV2InjectionKey);
    const ns = useNamespace("select");
    const cachedHeights = ref([]);
    const listRef = ref(null);
    const isSized = computed(() => isUndefined(select.props.estimatedOptionHeight));
    const listProps = computed(() => {
      if (isSized.value) {
        return {
          itemSize: select.props.itemHeight
        };
      }
      return {
        estimatedSize: select.props.estimatedOptionHeight,
        itemSize: (idx) => cachedHeights.value[idx]
      };
    });
    const contains = (arr = [], target) => {
      const {
        props: { valueKey }
      } = select;
      if (!isObject(target)) {
        return arr.includes(target);
      }
      return arr && arr.some((item) => {
        return get(item, valueKey) === get(target, valueKey);
      });
    };
    const isEqual = (selected, target) => {
      if (!isObject(target)) {
        return selected === target;
      } else {
        const { valueKey } = select.props;
        return get(selected, valueKey) === get(target, valueKey);
      }
    };
    const isItemSelected = (modelValue, target) => {
      const { valueKey } = select.props;
      if (select.props.multiple) {
        return contains(modelValue, get(target, valueKey));
      }
      return isEqual(modelValue, get(target, valueKey));
    };
    const isItemDisabled = (modelValue, selected) => {
      const { disabled, multiple, multipleLimit } = select.props;
      return disabled || !selected && (multiple ? multipleLimit > 0 && modelValue.length >= multipleLimit : false);
    };
    const isItemHovering = (target) => props.hoveringIndex === target;
    const scrollToItem = (index) => {
      const list = listRef.value;
      if (list) {
        list.scrollToItem(index);
      }
    };
    const resetScrollTop = () => {
      const list = listRef.value;
      if (list) {
        list.resetScrollTop();
      }
    };
    return {
      ns,
      select,
      listProps,
      listRef,
      isSized,
      isItemDisabled,
      isItemHovering,
      isItemSelected,
      scrollToItem,
      resetScrollTop
    };
  },
  render(_ctx, _cache) {
    var _a;
    const {
      $slots,
      data,
      listProps,
      select,
      isSized,
      width,
      ns,
      isItemDisabled,
      isItemHovering,
      isItemSelected
    } = _ctx;
    const Comp = isSized ? FixedSizeList : DynamicSizeList;
    const {
      props: selectProps,
      onSelect,
      onHover,
      onKeyboardNavigate,
      onKeyboardSelect
    } = select;
    const { height, modelValue, multiple } = selectProps;
    if (data.length === 0) {
      return h("div", {
        class: ns.b("dropdown"),
        style: {
          width: `${width}px`
        }
      }, (_a = $slots.empty) == null ? void 0 : _a.call($slots));
    }
    const ListItem = withCtx((scoped) => {
      const { index, data: data2 } = scoped;
      const item = data2[index];
      if (data2[index].type === "Group") {
        return h(GroupItem, {
          item,
          style: scoped.style,
          height: isSized ? listProps.itemSize : listProps.estimatedSize
        });
      }
      const selected = isItemSelected(modelValue, item);
      const itemDisabled = isItemDisabled(modelValue, selected);
      return h(OptionItem, {
        ...scoped,
        selected,
        disabled: item.disabled || itemDisabled,
        created: !!item.created,
        hovering: isItemHovering(index),
        item,
        onSelect,
        onHover
      }, {
        default: withCtx((props) => {
          return renderSlot($slots, "default", props, () => [
            h("span", item.label)
          ]);
        })
      });
    });
    const List = h(Comp, {
      ref: "listRef",
      className: ns.be("dropdown", "list"),
      data,
      height,
      width,
      total: data.length,
      scrollbarAlwaysOn: selectProps.scrollbarAlwaysOn,
      onKeydown: [
        _cache[1] || (_cache[1] = withKeys(withModifiers(() => onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
        _cache[2] || (_cache[2] = withKeys(withModifiers(() => onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
        _cache[3] || (_cache[3] = withKeys(withModifiers(onKeyboardSelect, ["stop", "prevent"]), ["enter"])),
        _cache[4] || (_cache[4] = withKeys(withModifiers(() => select.expanded = false, ["stop", "prevent"]), ["esc"])),
        _cache[5] || (_cache[5] = withKeys(() => select.expanded = false, ["tab"]))
      ],
      ...listProps
    }, {
      default: ListItem
    });
    return h("div", {
      class: [ns.b("dropdown"), ns.is("multiple", multiple)]
    }, [List]);
  }
});
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/select-v2/src/select-dropdown.vue"]]);

export { ElSelectMenu as default };
//# sourceMappingURL=select-dropdown.mjs.map
