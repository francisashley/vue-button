<template>
  <Story title="1. Reference" source="-">
    <div class="tw-bg-black tw-p-1 tw-rounded tw-flex tw-gap-4 tw-mb-4">
      <fieldset class="tw-flex tw-gap-2 tw-items-center tw-p-1">
        <label class="tw-text-white tw-text-xs" for="variant-switch">Variant:</label>
        <select class="tw-w-20 tw-rounded-sm tw-p-0.25 tw-text-sm" v-model="variant" id="variant-switch">
          <option value="solid">Solid</option>
          <option value="soft">Soft</option>
          <option value="outline">Outline</option>
          <option value="ghost">Ghost</option>
        </select>
      </fieldset>
      <fieldset class="tw-flex tw-gap-2 tw-items-center tw-p-1">
        <label class="tw-text-white tw-text-xs" for="disable-toggle">Disable:</label>
        <input type="checkbox" v-model="disable" id="disable-toggle" />
      </fieldset>
      <fieldset class="tw-flex tw-gap-2 tw-items-center tw-p-1">
        <label class="tw-text-white tw-text-xs" for="active-toggle">Active:</label>
        <input type="checkbox" v-model="active" id="active-toggle" />
      </fieldset>
      <fieldset class="tw-flex tw-gap-2 tw-items-center tw-p-1">
        <label class="tw-text-white tw-text-xs" for="active-loading">Loading:</label>
        <input type="checkbox" v-model="loading" id="active-loading" />
      </fieldset>
      <fieldset class="tw-flex tw-gap-2 tw-items-center tw-p-1">
        <label class="tw-text-white tw-text-xs" for="active-icon">Icon:</label>
        <input type="checkbox" v-model="icon" id="active-icon" />
      </fieldset>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>20</th>
          <th>24</th>
          <th>28</th>
          <th>32</th>
          <th>36</th>
          <th>40</th>
          <th>44</th>
        </tr>
      </thead>
      <tbody class="tw-whitespace-nowrap">
        <tr v-for="(button, i) in buttons" :key="i">
          <td class="tw-p-1">
            {{ button.color }}
          </td>
          <td class="tw-p-1">
            <UIButton
              size="20"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="24"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="28"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="32"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="36"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="40"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
          <td class="tw-p-1">
            <UIButton
              size="44"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <template #icon v-if="button.icon.value">
                <RiEditLine class="tw-w-full tw-h-full" />
              </template>
              Button
            </UIButton>
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>20</th>
          <th>24</th>
          <th>28</th>
          <th>32</th>
          <th>36</th>
          <th>40</th>
          <th>44</th>
        </tr>
      </thead>
      <tbody class="tw-whitespace-nowrap">
        <tr v-for="(button, i) in buttons" :key="i">
          <td class="tw-p-1">
            {{ button.color }}
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="20"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="24"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="28"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="32"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="36"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="40"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
          <td class="tw-p-1">
            <UIIconButton
              size="44"
              :color="button.color"
              :variant="button.variant.value"
              :disable="button.disable.value"
              :active="button.active.value"
              :loading="button.loading.value"
            >
              <RiHeartLine class="tw-w-full tw-h-full" />
            </UIIconButton>
          </td>
        </tr>
      </tbody>
    </table>
  </Story>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { UIButton, UIIconButton } from '../index'
import { RiHeartLine, RiEditLine } from '@remixicon/vue'

const variant = ref<'solid' | 'soft' | 'outline' | 'ghost'>('solid')
const disable = ref<boolean>(false)
const active = ref<boolean>(false)
const loading = ref<boolean>(false)
const icon = ref<boolean>(false)

const buttons = computed(() => {
  return (['primary', 'neutral', 'danger', 'success', 'warning'] as const).map((color) => ({
    color,
    variant,
    disable,
    active,
    loading,
    icon,
  }))
})
</script>
