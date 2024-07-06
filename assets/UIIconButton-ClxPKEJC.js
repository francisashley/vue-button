import { av as openBlock, aE as createElementBlock, aA as createBaseVNode, ar as defineComponent, at as computed, au as resolveComponent, aw as createBlock, az as withCtx, aL as normalizeClass, aM as renderSlot, aN as createCommentVNode, aO as resolveDynamicComponent } from "./vendor-10OaiqXE.js";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
const _hoisted_1$1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z",
    opacity: ".2",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "path",
  {
    d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z",
    fill: "currentColor"
  },
  [
    /* @__PURE__ */ createBaseVNode("animateTransform", {
      attributeName: "transform",
      type: "rotate",
      dur: "0.75s",
      values: "0 12 12;360 12 12",
      repeatCount: "indefinite"
    })
  ],
  -1
  /* HOISTED */
);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, [..._hoisted_4]);
}
_sfc_main$2.__file = "src/components/Loader.vue";
const Loader = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/vue-button/vue-button/src/components/Loader.vue"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UIButton",
  props: {
    size: { type: String, required: false, default: "24" },
    type: { type: String, required: false, default: "button" },
    variant: { type: String, required: false, default: "solid" },
    color: { type: String, required: false, default: "primary" },
    active: { type: Boolean, required: false },
    disable: { type: Boolean, required: false, default: false },
    loading: { type: Boolean, required: false, default: false },
    showText: { type: Boolean, required: false, default: true },
    to: { type: String, required: false, default: "" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const htmlType = computed(() => {
      if (props.type === "submit" || props.type === "button")
        return props.type;
      return "button";
    });
    const componentType = computed(() => {
      return props.type === "link" ? resolveComponent("router-link") : "button";
    });
    const classes = computed(() => {
      const size = props.size;
      const color = props.color;
      const variant = props.variant;
      const disable = props.disable;
      const active = props.active;
      const classes2 = [];
      classes2.push(
        {
          "20": "tw-text-xs tw-px-1 tw-py-0.5 tw-gap-1",
          "24": "tw-text-xs tw-px-2 tw-py-1 tw-gap-1",
          "28": "tw-text-xs tw-px-2.5 tw-py-1.5 tw-gap-1.5",
          "32": "tw-text-sm tw-px-2.5 tw-py-1.5 tw-gap-1.5",
          "36": "tw-text-sm tw-px-3 tw-py-2 tw-gap-2",
          "40": "tw-text-sm tw-px-3.5 tw-py-2.5 tw-gap-2.5",
          "44": "tw-text-base tw-px-3.5 tw-py-2.5 tw-gap-2.5"
        }[size]
      );
      if (disable) {
        classes2.push(
          {
            solid: "tw-text-neutral-400 tw-bg-neutral-200 tw-cursor-default",
            soft: "tw-text-neutral-400 tw-bg-neutral-50 tw-cursor-default",
            outline: "!tw-text-neutral-400  tw-ring-1 tw-ring-inset tw-ring-current tw-cursor-default",
            ghost: "tw-text-neutral-400 tw-cursor-default"
          }[variant]
        );
        return classes2;
      }
      const theme = {
        primary: {
          solid: "tw-bg-blue-600 tw-text-white",
          solidHover: "hover:tw-bg-blue-700",
          solidPressed: "active:tw-bg-blue-800",
          solidActive: "tw-bg-blue-700",
          soft: "tw-bg-blue-100 tw-text-blue-800",
          softHover: "hover:tw-bg-blue-200",
          softPressed: "active:tw-bg-blue-300",
          softActive: "!tw-bg-blue-200",
          outline: "tw-text-blue-600 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-blue-200",
          outlinePressed: "active:tw-bg-blue-300",
          outlineActive: "tw-bg-blue-200",
          ghost: "tw-text-blue-600",
          ghostHover: "hover:tw-bg-blue-100",
          ghostPressed: "active:tw-bg-blue-300",
          ghostActive: "tw-bg-blue-200"
        },
        neutral: {
          solid: "tw-bg-neutral-600 tw-text-white",
          solidHover: "hover:tw-bg-neutral-700",
          solidPressed: "active:tw-bg-neutral-800",
          solidActive: "tw-bg-neutral-700",
          soft: "tw-bg-neutral-100 tw-text-neutral-800",
          softHover: "hover:tw-bg-neutral-200",
          softPressed: "active:tw-bg-neutral-300",
          softActive: "!tw-bg-neutral-200",
          outline: "!tw-border-neutral-400 tw-text-neutral-600 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-neutral-200",
          outlinePressed: "active:tw-bg-neutral-300",
          outlineActive: "tw-bg-neutral-200",
          ghost: "tw-text-neutral-600",
          ghostHover: "hover:tw-bg-neutral-100",
          ghostPressed: "active:tw-bg-neutral-300",
          ghostActive: "tw-bg-neutral-200"
        },
        danger: {
          solid: "tw-bg-red-600 tw-text-white",
          solidHover: "hover:tw-bg-red-700",
          solidPressed: "active:tw-bg-red-800",
          solidActive: "tw-bg-red-700",
          soft: "tw-bg-red-100 tw-text-red-800",
          softHover: "hover:tw-bg-red-200",
          softPressed: "active:tw-bg-red-300",
          softActive: "!tw-bg-red-200",
          outline: "!tw-border-red-400 tw-text-red-600 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-red-200",
          outlinePressed: "active:tw-bg-red-300",
          outlineActive: "tw-bg-red-200",
          ghost: "tw-text-red-600",
          ghostHover: "hover:tw-bg-red-100",
          ghostPressed: "active:tw-bg-red-300",
          ghostActive: "tw-bg-red-200"
        },
        success: {
          solid: "tw-bg-green-600 tw-text-white",
          solidHover: "hover:tw-bg-green-700",
          solidPressed: "active:tw-bg-green-800",
          solidActive: "tw-bg-green-700",
          soft: "tw-bg-green-100 tw-text-green-800",
          softHover: "hover:tw-bg-green-200",
          softPressed: "active:tw-bg-green-300",
          softActive: "!tw-bg-green-200",
          outline: "!tw-border-green-400 tw-text-green-600 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-green-200",
          outlinePressed: "active:tw-bg-green-300",
          outlineActive: "tw-bg-green-200",
          ghost: "tw-text-green-600",
          ghostHover: "hover:tw-bg-green-100",
          ghostPressed: "active:tw-bg-green-300",
          ghostActive: "tw-bg-green-200"
        },
        warning: {
          solid: "tw-bg-orange-600 tw-text-white",
          solidHover: "hover:tw-bg-orange-700",
          solidPressed: "active:tw-bg-orange-800",
          solidActive: "tw-bg-orange-700",
          soft: "tw-bg-orange-100 tw-text-orange-800",
          softHover: "hover:tw-bg-orange-200",
          softPressed: "active:tw-bg-orange-300",
          softActive: "!tw-bg-orange-200",
          outline: "!tw-border-orange-400 tw-text-orange-600 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-orange-200",
          outlinePressed: "active:tw-bg-orange-300",
          outlineActive: "tw-bg-orange-200",
          ghost: "tw-text-orange-600",
          ghostHover: "hover:tw-bg-orange-100",
          ghostPressed: "active:tw-bg-orange-300",
          ghostActive: "tw-bg-orange-200"
        },
        light: {
          solid: "tw-bg-neutral-100 tw-text-neutral-950",
          solidHover: "hover:tw-bg-neutral-300",
          solidPressed: "active:tw-bg-neutral-400",
          solidActive: "tw-bg-neutral-300",
          soft: "tw-bg-neutral-100 tw-text-neutral-800",
          softHover: "hover:tw-bg-neutral-200",
          softPressed: "active:tw-bg-neutral-300",
          softActive: "!tw-bg-neutral-200",
          outline: "!tw-border-neutral-100 tw-text-neutral-100 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-neutral-200 hover:tw-text-neutral-950 hover:tw-ring-neutral-200",
          outlinePressed: "active:tw-bg-neutral-300 active:tw-text-neutral-950 active:tw-ring-neutral-300",
          outlineActive: "tw-bg-neutral-200 tw-text-neutral-950 tw-ring-neutral-200",
          ghost: "tw-text-neutral-100",
          ghostHover: "hover:tw-bg-neutral-200 hover:tw-text-neutral-950",
          ghostPressed: "active:tw-bg-neutral-300 active:tw-text-neutral-950",
          ghostActive: "tw-bg-neutral-200 tw-text-neutral-950"
        },
        dark: {
          solid: "tw-bg-neutral-950 tw-text-neutral-100",
          solidHover: "hover:tw-bg-neutral-900",
          solidPressed: "active:tw-bg-neutral-800",
          solidActive: "!tw-bg-neutral-900",
          soft: "tw-bg-neutral-950 tw-text-neutral-100",
          softHover: "hover:tw-bg-neutral-900",
          softPressed: "active:tw-bg-neutral-800",
          softActive: "!tw-bg-neutral-900",
          outline: "!tw-border-neutral-950 tw-text-neutral-950 tw-ring-1 tw-ring-inset tw-ring-current",
          outlineHover: "hover:tw-bg-neutral-900 hover:tw-text-neutral-100 hover:tw-ring-neutral-900",
          outlinePressed: "active:tw-bg-neutral-800 active:tw-text-neutral-100 active:tw-ring-neutral-800",
          outlineActive: "tw-bg-neutral-800 !tw-text-neutral-100 tw-ring-neutral-800",
          ghost: "tw-text-neutral-950",
          ghostHover: "hover:tw-bg-neutral-950 hover:tw-text-neutral-100",
          ghostPressed: "active:tw-bg-neutral-900 active:tw-text-neutral-100",
          ghostActive: "tw-bg-neutral-800 !tw-text-neutral-100"
        }
      };
      switch (variant) {
        case "solid":
          classes2.push(theme[color].solid);
          classes2.push(theme[color].solidPressed);
          classes2.push(active ? theme[color].solidActive : theme[color].solidHover);
          break;
        case "soft":
          classes2.push(theme[color].soft);
          classes2.push(theme[color].softPressed);
          classes2.push(active ? theme[color].softActive : theme[color].softHover);
          break;
        case "outline":
          classes2.push(theme[color].outline);
          classes2.push(theme[color].outlinePressed);
          classes2.push(active ? theme[color].outlineActive : theme[color].outlineHover);
          break;
        case "ghost":
          classes2.push(theme[color].ghost);
          classes2.push(theme[color].ghostPressed);
          classes2.push(active ? theme[color].ghostActive : theme[color].ghostHover);
          break;
      }
      return classes2;
    });
    const iconClasses = computed(() => {
      const size = props.size;
      const classes2 = [];
      classes2.push(
        {
          "20": "tw-h-4 tw-w-4 tw-ml-0.5",
          "24": "tw-h-4 tw-w-4",
          "28": "tw-h-4 tw-w-4",
          "32": "tw-h-5 tw-w-5",
          "36": "tw-h-5 tw-w-5",
          "40": "tw-h-5 tw-w-5",
          "44": "tw-h-6 tw-w-6"
        }[size]
      );
      return classes2;
    });
    const __returned__ = { props, htmlType, componentType, classes, iconClasses, Loader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 1,
  class: "tw-w-full tw-h-full tw-flex"
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($setup.componentType), {
    to: $props.to,
    href: $props.to,
    class: normalizeClass(["tw-text-sm tw-rounded tw-mx-auto tw-font-medium tw-relative tw-inline-flex tw-items-center", $setup.classes]),
    type: $setup.htmlType,
    disable: $props.disable
  }, {
    default: withCtx(() => [
      _ctx.$slots.icon || $props.loading ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass($setup.iconClasses)
        },
        [
          $props.loading ? (openBlock(), createBlock($setup["Loader"], {
            key: 0,
            class: "tw-h-full tw-w-full"
          })) : renderSlot(_ctx.$slots, "icon", { key: 1 })
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      $props.showText ? (openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["to", "href", "class", "type", "disable"]);
}
_sfc_main$1.__file = "src/components/UIButton.vue";
const UIButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/vue-button/vue-button/src/components/UIButton.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UIIconButton",
  props: {
    size: { type: String, required: false, default: "24" },
    type: { type: String, required: false, default: "button" },
    variant: { type: String, required: false, default: "solid" },
    color: { type: String, required: false, default: "primary" },
    active: { type: Boolean, required: false },
    disable: { type: Boolean, required: false, default: false },
    loading: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const classes = computed(() => {
      const size = props.size;
      const classes2 = [];
      classes2.push(
        {
          "20": "tw-h-5 tw-w-5 !tw-p-0.5",
          "24": "tw-h-6 tw-w-6 tw-px-3 !tw-p-1",
          "28": "tw-h-7 tw-w-7 tw-px-4 !tw-p-1.5",
          "32": "tw-h-8 tw-w-8 tw-px-5 !tw-p-1.5",
          "36": "tw-h-9 tw-w-9 tw-px-6 !tw-p-2",
          "40": "tw-h-10 tw-w-10 tw-px-7 !tw-p-2",
          "44": "tw-h-11 tw-w-11 tw-px-8 !tw-p-2.5"
        }[size]
      );
      return classes2;
    });
    const __returned__ = { props, classes, UIButton };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["UIButton"], {
    size: $props.size,
    type: $props.type,
    variant: $props.variant,
    color: $props.color,
    active: $props.active,
    disable: $props.disable,
    loading: $props.loading,
    class: normalizeClass($setup.classes),
    "show-text": !$props.loading
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["size", "type", "variant", "color", "active", "disable", "loading", "class", "show-text"]);
}
_sfc_main.__file = "src/components/UIIconButton.vue";
const UIIconButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/vue-button/vue-button/src/components/UIIconButton.vue"]]);
export {
  UIButton as U,
  _export_sfc as _,
  UIIconButton as a
};
