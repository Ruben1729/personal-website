<template>
    <article class="border-[1px] border-gray-800 bg-slate-800/30 rounded-sm p-5 flex flex-col items-start">
        <h4 class="text-indigo-400 font-semibold">
            <slot name="company"></slot>
        </h4>
        <h3 class="text-3xl font-semibold transition duration-200 ease-in-out">
            <slot name="header"></slot>
        </h3>
        <figure class="flex gap-5 py-5">
            <slot name="images"></slot>
        </figure>
        <p>
            <slot name="content"></slot>
        </p>
        <form v-if="isLink" class="mt-3">
            <CustomButton :destination="destination">
                <span class="align-middle xl:text-base">
                    CHECK CODE
                </span>
                <mdicon class="ml-2 align-middle" size="20" name="chevron-right"/>
            </CustomButton>
        </form>
    </article>
</template>

<script>
import CustomButton from "./inputs/c-button.vue"
export default {
    name: "c-article",
    components: {
        CustomButton
    },
    props: {
        isLink: {
            type: Boolean,
            default: false
        },
        destination: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>