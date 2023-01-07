<template>
    <h2 class="text-2xl md:text-3xl tracking-widest pt-16 pb-5">
        <slot></slot>
    </h2>
</template>

<script>
export default {
    name: "c-h2",
    props: {
        value: String
    }
}
</script>

<style scoped>
</style>