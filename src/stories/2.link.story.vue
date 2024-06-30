<template>
  <Story title="2. Link type" source="-">
    Button (default)
    <br />
    <UIButton size="20">Click me</UIButton>
    <br />
    Submit (form)
    <br />
    <UIButton size="20" type="submit">Click me</UIButton>
    <br />
    Link (internal)
    <br />
    <UIButton size="20" type="link" to="/somewhere">Click me</UIButton>
    <br />
    Button (external)
    <br />
    <UIButton size="20" type="link" to="http://google.com" target="New_blank" rel="noopener noreferrer">
      Click me
    </UIButton>
  </Story>
</template>

<script lang="ts" setup>
import { UIButton } from '../index'
</script>
