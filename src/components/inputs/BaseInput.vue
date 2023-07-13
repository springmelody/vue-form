<template>
  <label class="mb-2">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="px-2 w-4/12 text-black"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  name: "base-input",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>
