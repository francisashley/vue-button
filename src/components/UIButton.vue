<template>
  <component
    :is="componentType"
    :to="to"
    :href="to"
    class="tw-text-sm tw-rounded tw-mx-auto tw-font-medium tw-relative tw-inline-flex tw-items-center"
    :class="classes"
    :type="htmlType"
    :disable="disable"
  >
    <div v-if="$slots.icon || loading" :class="iconClasses">
      <Loader v-if="loading" class="tw-h-full tw-w-full" />
      <slot v-else name="icon" />
    </div>
    <div class="tw-w-full tw-h-full tw-flex" v-if="showText">
      <slot />
    </div>
  </component>
</template>

<script lang="ts" setup>
import { computed, resolveComponent } from 'vue'
import Loader from './Loader.vue'

const props = withDefaults(
  defineProps<{
    size?: '20' | '24' | '28' | '32' | '36' | '40' | '44'
    type?: 'button' | 'submit' | 'link'
    variant?: 'solid' | 'soft' | 'outline' | 'ghost'
    color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning' | 'light' | 'dark'
    active?: boolean
    disable?: boolean
    loading?: boolean
    showText?: boolean
    to?: string
  }>(),
  {
    size: '24',
    type: 'button',
    color: 'primary',
    variant: 'solid',
    disable: false,
    loading: false,
    showText: true,
    to: '',
  },
)

const htmlType = computed(() => {
  if (props.type === 'submit' || props.type === 'button') return props.type
  return 'button'
})

const componentType = computed(() => {
  return props.type === 'link' ? resolveComponent('router-link') : 'button'
})

const classes = computed(() => {
  const size = props.size
  const color = props.color
  const variant = props.variant
  const disable = props.disable
  const active = props.active

  const classes: string[] = []

  // sizes
  classes.push(
    {
      '20': 'tw-text-xs tw-px-1 tw-py-0.5 tw-gap-1',
      '24': 'tw-text-xs tw-px-2 tw-py-1 tw-gap-1',
      '28': 'tw-text-xs tw-px-2.5 tw-py-1.5 tw-gap-1.5',
      '32': 'tw-text-sm tw-px-2.5 tw-py-1.5 tw-gap-1.5',
      '36': 'tw-text-sm tw-px-3 tw-py-2 tw-gap-2',
      '40': 'tw-text-sm tw-px-3.5 tw-py-2.5 tw-gap-2.5',
      '44': 'tw-text-base tw-px-3.5 tw-py-2.5 tw-gap-2.5',
    }[size],
  )

  if (disable) {
    classes.push(
      {
        solid: 'tw-text-neutral-400 tw-bg-neutral-200 tw-cursor-default',
        soft: 'tw-text-neutral-400 tw-bg-neutral-50 tw-cursor-default',
        outline: '!tw-text-neutral-400  tw-ring-1 tw-ring-inset tw-ring-current tw-cursor-default',
        ghost: 'tw-text-neutral-400 tw-cursor-default',
      }[variant],
    )
    return classes
  }

  const theme = {
    primary: {
      solid: 'tw-bg-blue-600 tw-text-white',
      solidHover: 'hover:tw-bg-blue-700',
      solidPressed: 'active:tw-bg-blue-800',
      solidActive: 'tw-bg-blue-700',
      soft: 'tw-bg-blue-100 tw-text-blue-800',
      softHover: 'hover:tw-bg-blue-200',
      softPressed: 'active:tw-bg-blue-300',
      softActive: '!tw-bg-blue-200',
      outline: 'tw-text-blue-600 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-blue-200',
      outlinePressed: 'active:tw-bg-blue-300',
      outlineActive: 'tw-bg-blue-200',
      ghost: 'tw-text-blue-600',
      ghostHover: 'hover:tw-bg-blue-100',
      ghostPressed: 'active:tw-bg-blue-300',
      ghostActive: 'tw-bg-blue-200',
    },
    neutral: {
      solid: 'tw-bg-neutral-600 tw-text-white',
      solidHover: 'hover:tw-bg-neutral-700',
      solidPressed: 'active:tw-bg-neutral-800',
      solidActive: 'tw-bg-neutral-700',
      soft: 'tw-bg-neutral-100 tw-text-neutral-800',
      softHover: 'hover:tw-bg-neutral-200',
      softPressed: 'active:tw-bg-neutral-300',
      softActive: '!tw-bg-neutral-200',
      outline: '!tw-border-neutral-400 tw-text-neutral-600 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-neutral-200',
      outlinePressed: 'active:tw-bg-neutral-300',
      outlineActive: 'tw-bg-neutral-200',
      ghost: 'tw-text-neutral-600',
      ghostHover: 'hover:tw-bg-neutral-100',
      ghostPressed: 'active:tw-bg-neutral-300',
      ghostActive: 'tw-bg-neutral-200',
    },
    danger: {
      solid: 'tw-bg-red-600 tw-text-white',
      solidHover: 'hover:tw-bg-red-700',
      solidPressed: 'active:tw-bg-red-800',
      solidActive: 'tw-bg-red-700',
      soft: 'tw-bg-red-100 tw-text-red-800',
      softHover: 'hover:tw-bg-red-200',
      softPressed: 'active:tw-bg-red-300',
      softActive: '!tw-bg-red-200',
      outline: '!tw-border-red-400 tw-text-red-600 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-red-200',
      outlinePressed: 'active:tw-bg-red-300',
      outlineActive: 'tw-bg-red-200',
      ghost: 'tw-text-red-600',
      ghostHover: 'hover:tw-bg-red-100',
      ghostPressed: 'active:tw-bg-red-300',
      ghostActive: 'tw-bg-red-200',
    },
    success: {
      solid: 'tw-bg-green-600 tw-text-white',
      solidHover: 'hover:tw-bg-green-700',
      solidPressed: 'active:tw-bg-green-800',
      solidActive: 'tw-bg-green-700',
      soft: 'tw-bg-green-100 tw-text-green-800',
      softHover: 'hover:tw-bg-green-200',
      softPressed: 'active:tw-bg-green-300',
      softActive: '!tw-bg-green-200',
      outline: '!tw-border-green-400 tw-text-green-600 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-green-200',
      outlinePressed: 'active:tw-bg-green-300',
      outlineActive: 'tw-bg-green-200',
      ghost: 'tw-text-green-600',
      ghostHover: 'hover:tw-bg-green-100',
      ghostPressed: 'active:tw-bg-green-300',
      ghostActive: 'tw-bg-green-200',
    },
    warning: {
      solid: 'tw-bg-orange-600 tw-text-white',
      solidHover: 'hover:tw-bg-orange-700',
      solidPressed: 'active:tw-bg-orange-800',
      solidActive: 'tw-bg-orange-700',
      soft: 'tw-bg-orange-100 tw-text-orange-800',
      softHover: 'hover:tw-bg-orange-200',
      softPressed: 'active:tw-bg-orange-300',
      softActive: '!tw-bg-orange-200',
      outline: '!tw-border-orange-400 tw-text-orange-600 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-orange-200',
      outlinePressed: 'active:tw-bg-orange-300',
      outlineActive: 'tw-bg-orange-200',
      ghost: 'tw-text-orange-600',
      ghostHover: 'hover:tw-bg-orange-100',
      ghostPressed: 'active:tw-bg-orange-300',
      ghostActive: 'tw-bg-orange-200',
    },
    light: {
      solid: 'tw-bg-neutral-100 tw-text-neutral-950',
      solidHover: 'hover:tw-bg-neutral-300',
      solidPressed: 'active:tw-bg-neutral-400',
      solidActive: 'tw-bg-neutral-300',
      soft: 'tw-bg-neutral-100 tw-text-neutral-800',
      softHover: 'hover:tw-bg-neutral-200',
      softPressed: 'active:tw-bg-neutral-300',
      softActive: '!tw-bg-neutral-200',
      outline: '!tw-border-neutral-100 tw-text-neutral-100 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-neutral-200 hover:tw-text-neutral-950 hover:tw-ring-neutral-200',
      outlinePressed: 'active:tw-bg-neutral-300 active:tw-text-neutral-950 active:tw-ring-neutral-300',
      outlineActive: 'tw-bg-neutral-200 tw-text-neutral-950 tw-ring-neutral-200',
      ghost: 'tw-text-neutral-100',
      ghostHover: 'hover:tw-bg-neutral-200 hover:tw-text-neutral-950',
      ghostPressed: 'active:tw-bg-neutral-300 active:tw-text-neutral-950',
      ghostActive: 'tw-bg-neutral-200 tw-text-neutral-950',
    },
    dark: {
      solid: 'tw-bg-neutral-950 tw-text-neutral-100',
      solidHover: 'hover:tw-bg-neutral-900',
      solidPressed: 'active:tw-bg-neutral-800',
      solidActive: '!tw-bg-neutral-900',
      soft: 'tw-bg-neutral-950 tw-text-neutral-100',
      softHover: 'hover:tw-bg-neutral-900',
      softPressed: 'active:tw-bg-neutral-800',
      softActive: '!tw-bg-neutral-900',
      outline: '!tw-border-neutral-950 tw-text-neutral-950 tw-ring-1 tw-ring-inset tw-ring-current',
      outlineHover: 'hover:tw-bg-neutral-900 hover:tw-text-neutral-100 hover:tw-ring-neutral-900',
      outlinePressed: 'active:tw-bg-neutral-800 active:tw-text-neutral-100 active:tw-ring-neutral-800',
      outlineActive: 'tw-bg-neutral-800 !tw-text-neutral-100 tw-ring-neutral-800',
      ghost: 'tw-text-neutral-950',
      ghostHover: 'hover:tw-bg-neutral-950 hover:tw-text-neutral-100',
      ghostPressed: 'active:tw-bg-neutral-900 active:tw-text-neutral-100',
      ghostActive: 'tw-bg-neutral-800 !tw-text-neutral-100',
    },
  }

  switch (variant) {
    case 'solid':
      classes.push(theme[color].solid)
      classes.push(theme[color].solidPressed)
      classes.push(active ? theme[color].solidActive : theme[color].solidHover)
      break

    case 'soft':
      classes.push(theme[color].soft)
      classes.push(theme[color].softPressed)
      classes.push(active ? theme[color].softActive : theme[color].softHover)
      break

    case 'outline':
      classes.push(theme[color].outline)
      classes.push(theme[color].outlinePressed)
      classes.push(active ? theme[color].outlineActive : theme[color].outlineHover)
      break

    case 'ghost':
      classes.push(theme[color].ghost)
      classes.push(theme[color].ghostPressed)
      classes.push(active ? theme[color].ghostActive : theme[color].ghostHover)
      break
  }

  return classes
})

const iconClasses = computed(() => {
  const size = props.size

  const classes: string[] = []

  classes.push(
    {
      '20': 'tw-h-4 tw-w-4 tw-ml-0.5',
      '24': 'tw-h-4 tw-w-4',
      '28': 'tw-h-4 tw-w-4',
      '32': 'tw-h-5 tw-w-5',
      '36': 'tw-h-5 tw-w-5',
      '40': 'tw-h-5 tw-w-5',
      '44': 'tw-h-6 tw-w-6',
    }[size],
  )

  return classes
})
</script>

<style lang="scss"></style>
