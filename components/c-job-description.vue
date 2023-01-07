<template>
    <article class="bg-slate-900 border-[1px] border-gray-800 p-5 rounded-md flex flex-col items-start relative">
        <h3 class="text-indigo-400 font-semibold">
            <slot name="company"></slot>
        </h3>
        <h2 class="text-3xl font-semibold transition duration-200 ease-in-out">
            <slot name="position"></slot>
        </h2>
        <h6>
            <slot name="date"></slot>
        </h6>
        <figure class="flex gap-5 py-5">
            <slot name="images"></slot>
        </figure>
        <ul>
            <slot name="content"></slot>
        </ul>
        <form>
            <slot name="more"></slot>
        </form>
    </article>
</template>

<script setup>

</script>

<style scoped>

</style>