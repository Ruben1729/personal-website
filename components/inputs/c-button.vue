<template>
    <a class="
    rounded-full
    bg-indigo-500
    hover:bg-indigo-600
    duration-150
    ease-in-out
    cursor-pointer
    py-1
    px-4
    font-medium
    flex
    justify-center
    items-center" type="button" :href="destination" :target="openInNew ? '_blank' : '_self'">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "c-button",
    props: {
        destination: {
            type: String
        },
        openInNew: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>

</style>