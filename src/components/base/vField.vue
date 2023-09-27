<template>
  <label
    class="w-full px-4 py-2 border-[1px] border-gray-300 rounded-md"
    :for="forName"
  >
    <span class="text-sm font-light mb-2 block text-gray-500">{{
      placeholder
    }}</span>
    <input
      @input="$emit('update:modelValue', $event.target.value)"
      class="h-[16px] block w-full outline-none text-base"
      :type="type"
      :id="forName"
      :name="forName"
      :value="modelValue"
    />
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
  },
  type: {
    type: String,
    default: "text",
  },
  forName: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
