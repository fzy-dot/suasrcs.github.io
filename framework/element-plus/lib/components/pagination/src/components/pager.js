'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var iconsVue = require('@element-plus/icons-vue');
require('../../../../hooks/index.js');
var pluginVue_exportHelper = require('../../../../_virtual/plugin-vue_export-helper.js');
var index = require('../../../../hooks/use-namespace/index.js');

const paginationPagerProps = {
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
};
const _sfc_main = vue.defineComponent({
  name: "ElPaginationPager",
  components: {
    DArrowLeft: iconsVue.DArrowLeft,
    DArrowRight: iconsVue.DArrowRight,
    MoreFilled: iconsVue.MoreFilled
  },
  props: paginationPagerProps,
  emits: ["change"],
  setup(props, { emit }) {
    const nsPager = index.useNamespace("pager");
    const nsIcon = index.useNamespace("icon");
    const showPrevMore = vue.ref(false);
    const showNextMore = vue.ref(false);
    const quickPrevHover = vue.ref(false);
    const quickNextHover = vue.ref(false);
    const pagers = vue.computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    vue.watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) {
          showPrevMore.value = true;
        }
        if (props.currentPage < props.pageCount - halfPagerCount) {
          showNextMore.value = true;
        }
      }
    });
    function onMouseenter(direction) {
      if (props.disabled)
        return;
      if (direction === "left") {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit("change", newPage);
        }
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit("change", newPage);
      }
    }
    return {
      showPrevMore,
      showNextMore,
      quickPrevHover,
      quickNextHover,
      pagers,
      nsPager,
      nsIcon,
      onMouseenter,
      onPagerClick,
      onEnter
    };
  }
});
const _hoisted_1 = ["aria-current"];
const _hoisted_2 = ["aria-current"];
const _hoisted_3 = ["aria-current"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_d_arrow_left = vue.resolveComponent("d-arrow-left");
  const _component_more_filled = vue.resolveComponent("more-filled");
  const _component_d_arrow_right = vue.resolveComponent("d-arrow-right");
  return vue.openBlock(), vue.createElementBlock("ul", {
    class: vue.normalizeClass(_ctx.nsPager.b()),
    onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onPagerClick && _ctx.onPagerClick(...args)),
    onKeyup: _cache[5] || (_cache[5] = vue.withKeys((...args) => _ctx.onEnter && _ctx.onEnter(...args), ["enter"]))
  }, [
    _ctx.pageCount > 0 ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 0,
      class: vue.normalizeClass([[
        _ctx.nsPager.is("active", _ctx.currentPage === 1),
        _ctx.nsPager.is("disabled", _ctx.disabled)
      ], "number"]),
      "aria-current": _ctx.currentPage === 1,
      tabindex: "0"
    }, " 1 ", 10, _hoisted_1)) : vue.createCommentVNode("v-if", true),
    _ctx.showPrevMore ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 1,
      class: vue.normalizeClass([
        "more",
        "btn-quickprev",
        _ctx.nsIcon.b(),
        _ctx.nsPager.is("disabled", _ctx.disabled)
      ]),
      onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.onMouseenter("left")),
      onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.quickPrevHover = false)
    }, [
      _ctx.quickPrevHover ? (vue.openBlock(), vue.createBlock(_component_d_arrow_left, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : vue.createCommentVNode("v-if", true),
    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.pagers, (pager) => {
      return vue.openBlock(), vue.createElementBlock("li", {
        key: pager,
        class: vue.normalizeClass([[
          _ctx.nsPager.is("active", _ctx.currentPage === pager),
          _ctx.nsPager.is("disabled", _ctx.disabled)
        ], "number"]),
        "aria-current": _ctx.currentPage === pager,
        tabindex: "0"
      }, vue.toDisplayString(pager), 11, _hoisted_2);
    }), 128)),
    _ctx.showNextMore ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 2,
      class: vue.normalizeClass([
        "more",
        "btn-quicknext",
        _ctx.nsIcon.b(),
        _ctx.nsPager.is("disabled", _ctx.disabled)
      ]),
      onMouseenter: _cache[2] || (_cache[2] = ($event) => _ctx.onMouseenter("right")),
      onMouseleave: _cache[3] || (_cache[3] = ($event) => _ctx.quickNextHover = false)
    }, [
      _ctx.quickNextHover ? (vue.openBlock(), vue.createBlock(_component_d_arrow_right, { key: 0 })) : (vue.openBlock(), vue.createBlock(_component_more_filled, { key: 1 }))
    ], 34)) : vue.createCommentVNode("v-if", true),
    _ctx.pageCount > 1 ? (vue.openBlock(), vue.createElementBlock("li", {
      key: 3,
      class: vue.normalizeClass([[
        _ctx.nsPager.is("active", _ctx.currentPage === _ctx.pageCount),
        _ctx.nsPager.is("disabled", _ctx.disabled)
      ], "number"]),
      "aria-current": _ctx.currentPage === _ctx.pageCount,
      tabindex: "0"
    }, vue.toDisplayString(_ctx.pageCount), 11, _hoisted_3)) : vue.createCommentVNode("v-if", true)
  ], 34);
}
var Pager = /* @__PURE__ */ pluginVue_exportHelper["default"](_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);

exports["default"] = Pager;
//# sourceMappingURL=pager.js.map
