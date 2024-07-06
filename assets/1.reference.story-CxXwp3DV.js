import { ar as defineComponent, as as ref, at as computed, au as resolveComponent, av as openBlock, aw as createBlock, ax as xa, ay as le, az as withCtx, aA as createBaseVNode, aB as withDirectives, aC as vModelSelect, aD as vModelCheckbox, aE as createElementBlock, aF as renderList, aG as Fragment, aH as toDisplayString, aI as createVNode, aJ as createSlots, aK as createTextVNode } from "./vendor-10OaiqXE.js";
import { _ as _export_sfc, U as UIButton, a as UIIconButton } from "./UIIconButton-ClxPKEJC.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "1.reference.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const variant = ref("solid");
    const disable = ref(false);
    const active = ref(false);
    const loading = ref(false);
    const icon = ref(false);
    const buttons = computed(() => {
      return ["primary", "neutral", "danger", "success", "warning", "light", "dark"].map((color) => ({
        color,
        variant,
        disable,
        active,
        loading,
        icon
      }));
    });
    const __returned__ = { variant, disable, active, loading, icon, buttons, get UIButton() {
      return UIButton;
    }, get UIIconButton() {
      return UIIconButton;
    }, get RiHeartLine() {
      return xa;
    }, get RiEditLine() {
      return le;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "tw-bg-black tw-p-1 tw-rounded tw-flex tw-gap-4 tw-mb-4" };
const _hoisted_2 = { class: "tw-flex tw-gap-2 tw-items-center tw-p-1" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "label",
  {
    class: "tw-text-white tw-text-xs",
    for: "variant-switch"
  },
  "Variant:",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "option",
  { value: "solid" },
  "Solid",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "option",
  { value: "soft" },
  "Soft",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "option",
  { value: "outline" },
  "Outline",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "option",
  { value: "ghost" },
  "Ghost",
  -1
  /* HOISTED */
);
const _hoisted_8 = [
  _hoisted_4,
  _hoisted_5,
  _hoisted_6,
  _hoisted_7
];
const _hoisted_9 = { class: "tw-flex tw-gap-2 tw-items-center tw-p-1" };
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "label",
  {
    class: "tw-text-white tw-text-xs",
    for: "disable-toggle"
  },
  "Disable:",
  -1
  /* HOISTED */
);
const _hoisted_11 = { class: "tw-flex tw-gap-2 tw-items-center tw-p-1" };
const _hoisted_12 = /* @__PURE__ */ createBaseVNode(
  "label",
  {
    class: "tw-text-white tw-text-xs",
    for: "active-toggle"
  },
  "Active:",
  -1
  /* HOISTED */
);
const _hoisted_13 = { class: "tw-flex tw-gap-2 tw-items-center tw-p-1" };
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "label",
  {
    class: "tw-text-white tw-text-xs",
    for: "active-loading"
  },
  "Loading:",
  -1
  /* HOISTED */
);
const _hoisted_15 = { class: "tw-flex tw-gap-2 tw-items-center tw-p-1" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "label",
  {
    class: "tw-text-white tw-text-xs",
    for: "active-icon"
  },
  "Icon:",
  -1
  /* HOISTED */
);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th"),
      /* @__PURE__ */ createBaseVNode("th", null, "20"),
      /* @__PURE__ */ createBaseVNode("th", null, "24"),
      /* @__PURE__ */ createBaseVNode("th", null, "28"),
      /* @__PURE__ */ createBaseVNode("th", null, "32"),
      /* @__PURE__ */ createBaseVNode("th", null, "36"),
      /* @__PURE__ */ createBaseVNode("th", null, "40"),
      /* @__PURE__ */ createBaseVNode("th", null, "44")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_18 = { class: "tw-whitespace-nowrap" };
const _hoisted_19 = { class: "tw-p-1" };
const _hoisted_20 = { class: "tw-p-1" };
const _hoisted_21 = { class: "tw-p-1" };
const _hoisted_22 = { class: "tw-p-1" };
const _hoisted_23 = { class: "tw-p-1" };
const _hoisted_24 = { class: "tw-p-1" };
const _hoisted_25 = { class: "tw-p-1" };
const _hoisted_26 = { class: "tw-p-1" };
const _hoisted_27 = /* @__PURE__ */ createBaseVNode(
  "thead",
  null,
  [
    /* @__PURE__ */ createBaseVNode("tr", null, [
      /* @__PURE__ */ createBaseVNode("th"),
      /* @__PURE__ */ createBaseVNode("th", null, "20"),
      /* @__PURE__ */ createBaseVNode("th", null, "24"),
      /* @__PURE__ */ createBaseVNode("th", null, "28"),
      /* @__PURE__ */ createBaseVNode("th", null, "32"),
      /* @__PURE__ */ createBaseVNode("th", null, "36"),
      /* @__PURE__ */ createBaseVNode("th", null, "40"),
      /* @__PURE__ */ createBaseVNode("th", null, "44")
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_28 = { class: "tw-whitespace-nowrap" };
const _hoisted_29 = { class: "tw-p-1" };
const _hoisted_30 = { class: "tw-p-1" };
const _hoisted_31 = { class: "tw-p-1" };
const _hoisted_32 = { class: "tw-p-1" };
const _hoisted_33 = { class: "tw-p-1" };
const _hoisted_34 = { class: "tw-p-1" };
const _hoisted_35 = { class: "tw-p-1" };
const _hoisted_36 = { class: "tw-p-1" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "1. Reference",
    source: "-"
  }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        createBaseVNode("fieldset", _hoisted_2, [
          _hoisted_3,
          withDirectives(createBaseVNode(
            "select",
            {
              class: "tw-w-20 tw-rounded-sm tw-p-0.25 tw-text-sm",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.variant = $event),
              id: "variant-switch"
            },
            [..._hoisted_8],
            512
            /* NEED_PATCH */
          ), [
            [vModelSelect, $setup.variant]
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_9, [
          _hoisted_10,
          withDirectives(createBaseVNode(
            "input",
            {
              type: "checkbox",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.disable = $event),
              id: "disable-toggle"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelCheckbox, $setup.disable]
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_11, [
          _hoisted_12,
          withDirectives(createBaseVNode(
            "input",
            {
              type: "checkbox",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.active = $event),
              id: "active-toggle"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelCheckbox, $setup.active]
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_13, [
          _hoisted_14,
          withDirectives(createBaseVNode(
            "input",
            {
              type: "checkbox",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.loading = $event),
              id: "active-loading"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelCheckbox, $setup.loading]
          ])
        ]),
        createBaseVNode("fieldset", _hoisted_15, [
          _hoisted_16,
          withDirectives(createBaseVNode(
            "input",
            {
              type: "checkbox",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.icon = $event),
              id: "active-icon"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelCheckbox, $setup.icon]
          ])
        ])
      ]),
      createBaseVNode("table", null, [
        _hoisted_17,
        createBaseVNode("tbody", _hoisted_18, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.buttons, (button, i) => {
              return openBlock(), createElementBlock("tr", { key: i }, [
                createBaseVNode(
                  "td",
                  _hoisted_19,
                  toDisplayString(button.color),
                  1
                  /* TEXT */
                ),
                createBaseVNode("td", _hoisted_20, [
                  createVNode($setup["UIButton"], {
                    size: "20",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_21, [
                  createVNode($setup["UIButton"], {
                    size: "24",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_22, [
                  createVNode($setup["UIButton"], {
                    size: "28",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_23, [
                  createVNode($setup["UIButton"], {
                    size: "32",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_24, [
                  createVNode($setup["UIButton"], {
                    size: "36",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_25, [
                  createVNode($setup["UIButton"], {
                    size: "40",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_26, [
                  createVNode($setup["UIButton"], {
                    size: "44",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, createSlots({
                    default: withCtx(() => [
                      createTextVNode(" Button ")
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, [
                    button.icon.value ? {
                      name: "icon",
                      fn: withCtx(() => [
                        createVNode($setup["RiEditLine"], { class: "tw-w-full tw-h-full" })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["color", "variant", "disable", "active", "loading"])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      createBaseVNode("table", null, [
        _hoisted_27,
        createBaseVNode("tbody", _hoisted_28, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.buttons, (button, i) => {
              return openBlock(), createElementBlock("tr", { key: i }, [
                createBaseVNode(
                  "td",
                  _hoisted_29,
                  toDisplayString(button.color),
                  1
                  /* TEXT */
                ),
                createBaseVNode("td", _hoisted_30, [
                  createVNode($setup["UIIconButton"], {
                    size: "20",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_31, [
                  createVNode($setup["UIIconButton"], {
                    size: "24",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_32, [
                  createVNode($setup["UIIconButton"], {
                    size: "28",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_33, [
                  createVNode($setup["UIIconButton"], {
                    size: "32",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_34, [
                  createVNode($setup["UIIconButton"], {
                    size: "36",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_35, [
                  createVNode($setup["UIIconButton"], {
                    size: "40",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ]),
                createBaseVNode("td", _hoisted_36, [
                  createVNode($setup["UIIconButton"], {
                    size: "44",
                    color: button.color,
                    variant: button.variant.value,
                    disable: button.disable.value,
                    active: button.active.value,
                    loading: button.loading.value
                  }, {
                    default: withCtx(() => [
                      createVNode($setup["RiHeartLine"], { class: "tw-w-full tw-h-full" })
                    ]),
                    _: 2
                    /* DYNAMIC */
                  }, 1032, ["color", "variant", "disable", "active", "loading"])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/stories/1.reference.story.vue";
const _1_reference_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-button/vue-button/src/stories/1.reference.story.vue"]]);
export {
  _1_reference_story as default
};
