<template>
    <nav class="invisible xl:visible z-30 fixed h-[100vh] flex flex-col gap-5 justify-center self-start font-semibold">
        <a v-for="(link, index) in navigationLinks" :href="`#${link}`" class="cursor-pointer grid grid-cols-2 hover:text-indigo-400 duration-150">
            <span class="text-indigo-400 justify-self-center">{{    `0${index}.`  }}</span>
            <span :class="{'text-indigo-400 duration-200': activeSection === index}">{{    link    }}</span>
        </a>
    </nav>
    <nav v-if="!isMobileNavOpen" class="visible xl:invisible z-30 absolute top-0 right-0 flex flex-col gap-5 justify-center self-start font-semibold p-10">
        <mdicon @click="isMobileNavOpen = true" class="text-indigo-400" size="35" name="menu"/>
    </nav>
    <nav v-else class="z-30 visible xl:invisible w-[100vw] h-[100vh] bg-fixed fixed bg-slate-900 grid grid-rows-1-1fr-1 p-10">
        <a class="justify-self-end" @click="isMobileNavOpen=false"><mdicon class="text-indigo-400" size="35" name="close"/></a>
        <div class="justify-self-center text-center flex flex-col gap-5">
            <a @click="isMobileNavOpen=false" v-for="(link, index) in navigationLinks" :href="`#${link}`"
               class="text-3xl">
                {{    link    }}
            </a>
        </div>
        <a></a>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps(['navigationLinks', 'activeSection'])
const isMobileNavOpen = ref(false)

</script>

<style scoped>
.grid-rows-1-1fr-1 {
    grid-template-rows: 1fr auto 1fr;
}
</style>