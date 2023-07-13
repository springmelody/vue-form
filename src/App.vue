<template>
  <div id="app">
    <SimpleForm />
  </div>
</template>

<script>
import SimpleForm from "@/views/SimpleForm";

export default {
  components: { SimpleForm },
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
