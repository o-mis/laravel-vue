<template>
    <div id="dice">
      <button v-on:click="onClick">サイコロを振る</button>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("初のVue.js!");
    },
};
</script>
