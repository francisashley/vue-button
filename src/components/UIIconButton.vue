<template>
  <UIButton
    :size="size"
    :type="type"
    :variant="variant"
    :color="color"
    :active="active"
    :disable="disable"
    :loading="loading"
    :class="classes"
    :show-text="!loading"
  >
    <slot />
  </UIButton>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import UIButton from './UIButton.vue'

const props = withDefaults(
  defineProps<{
    size?: '20' | '24' | '28' | '32' | '36' | '40' | '44'
    type?: 'button' | 'submit'
    variant?: 'solid' | 'soft' | 'outline' | 'ghost'
    color?: 'primary' | 'neutral' | 'danger' | 'success' | 'warning' | 'light' | 'dark'
    active?: boolean
    disable?: boolean
    loading?: boolean
  }>(),
  {
    size: '24',
    type: 'button',
    color: 'primary',
    variant: 'solid',
    disable: false,
    loading: false,
  },
)

const classes = computed(() => {
  const size = props.size
  const classes: string[] = []

  // sizes
  classes.push(
    {
      '20': 'tw-h-5 tw-w-5 !tw-p-0.5',
      '24': 'tw-h-6 tw-w-6 tw-px-3 !tw-p-1',
      '28': 'tw-h-7 tw-w-7 tw-px-4 !tw-p-1.5',
      '32': 'tw-h-8 tw-w-8 tw-px-5 !tw-p-1.5',
      '36': 'tw-h-9 tw-w-9 tw-px-6 !tw-p-2',
      '40': 'tw-h-10 tw-w-10 tw-px-7 !tw-p-2',
      '44': 'tw-h-11 tw-w-11 tw-px-8 !tw-p-2.5',
    }[size],
  )

  return classes
})
</script>
