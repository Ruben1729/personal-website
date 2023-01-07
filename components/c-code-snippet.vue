<template>
    <div class="grid grid-cols-1-1fr border-[1px] border-gray-600 rounded-md font-mono bg-slate-800">
        <div class="pl-2 flex justify-center items-center gap-1 border-b-[1px] border-gray-600">
            <div class="w-[10px] h-[10px] bg-rose-400 rounded-full"></div>
            <div class="w-[10px] h-[10px] bg-amber-400 rounded-full"></div>
            <div class="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
        </div>
        <p class="text-gray-400 py-1 border-b-[1px] border-gray-600 text-center">fibonacci.aba</p>
        <template v-for="(line, index) in code">
            <span class="text-gray-500 py-1 pr-4 justify-self-end">{{   index + 1   }}</span>
            <span class="py-1">
                <span v-for="word in line" :class="{'text-indigo-300 font-semibold': keywords.includes(word)}" class="pl-2 align-baseline">{{    word    }}</span>
            </span>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const keywords = ref(['pop', 'while', 'over', 'do', 'swap', 'over', 'end', 'print'])

const code = ref([
    ["0", "1",],
    ["0", "1", "while", "over", "1000", "<", "do"],
    ["\t", "\t", "over", "print"],
    ["\t", "\t", "swap", "over", "+"],
    ["end", "pop", "pop"]
])
</script>

<style scoped>
    .grid-cols-1-1fr {
        grid-template-columns: auto 1fr;
    }
</style>