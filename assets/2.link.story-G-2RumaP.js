import { ar as defineComponent, au as resolveComponent, av as openBlock, aw as createBlock, az as withCtx, aK as createTextVNode, aI as createVNode, aA as createBaseVNode } from "./vendor-10OaiqXE.js";
import { _ as _export_sfc, U as UIButton } from "./UIIconButton-ClxPKEJC.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "2.link.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get UIButton() {
      return UIButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "2. Link type",
    source: "-"
  }, {
    default: withCtx(() => [
      createTextVNode(" Button (default) "),
      _hoisted_1,
      createVNode($setup["UIButton"], { size: "20" }, {
        default: withCtx(() => [
          createTextVNode("Click me")
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_2,
      createTextVNode(" Submit (form) "),
      _hoisted_3,
      createVNode($setup["UIButton"], {
        size: "20",
        type: "submit"
      }, {
        default: withCtx(() => [
          createTextVNode("Click me")
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_4,
      createTextVNode(" Link (internal) "),
      _hoisted_5,
      createVNode($setup["UIButton"], {
        size: "20",
        type: "link",
        to: "/somewhere"
      }, {
        default: withCtx(() => [
          createTextVNode("Click me")
        ]),
        _: 1
        /* STABLE */
      }),
      _hoisted_6,
      createTextVNode(" Button (external) "),
      _hoisted_7,
      createVNode($setup["UIButton"], {
        size: "20",
        type: "link",
        to: "http://google.com",
        target: "New_blank",
        rel: "noopener noreferrer"
      }, {
        default: withCtx(() => [
          createTextVNode(" Click me ")
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/2.link.story.vue";
const _2_link_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-button/vue-button/src/stories/2.link.story.vue"]]);
export {
  _2_link_story as default
};
