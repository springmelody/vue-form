<template>
  <div>
    <input
      type="checkbox"
      :checked="modelValue"
      class="field"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="pl-1" v-if="label">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "base-checkbox",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
