<template>
  <Card>
    <slot name="avatar"></slot>
    <slot name="title"></slot>
    <slot name="text"></slot>
  </Card>
</template>

<script setup>
import Card from "@/components/cards/Card.vue";
</script>

<style scoped></style>
