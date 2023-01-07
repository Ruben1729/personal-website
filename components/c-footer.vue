<template>
    <footer class="border-t-[1px] border-gray-700 bg-slate-900 grid justify-center md:justify-start md:grid-cols-6 z-50 py-16">
        <div></div>
        <div></div>
        <ul class="flex flex-col items-start gap-2 md:gap-5 my-5 md:my-0">
            <li>
                <h2 class="text-indigo-400 font-semibold">
                    REACH OUT
                </h2>
            </li>
            <li>
                <a href="https://github.com/Ruben1729" target="_blank" class="flex gap-3 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    <mdicon size="30" name="github"/>
                    Github
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ruben-sanchez-3a643917a/" target="_blank" class="flex gap-3 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    <mdicon size="30" name="linkedin"/>
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="mailto: ruben.e.sanchez.a@gmail.com" class="flex gap-3 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    <mdicon size="30" name="at"/> Email
                </a>
            </li>
        </ul>
        <ul class="flex flex-col items-start gap-2 md:gap-5 my-5 md:my-0">
            <li>
                <h2 class="text-indigo-400 font-semibold">
                    PROJECTS
                </h2>
            </li>
            <li>
                <a href="https://reachloyalty.app/" target="_blank" class="flex gap-1 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    ReachLoyalty <mdicon size="20" name="open-in-new"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/space-concordia-spacecraft/kronos" target="_blank" class="flex gap-3 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    Kronos <mdicon size="20" name="open-in-new"/>
                </a>
            </li>
            <li>
                <a href="https://github.com/Ruben1729/abacus-lang" target="_blank" class="flex gap-3 items-center cursor-pointer hover:text-indigo-400 duration-150">
                    AbacusLang <mdicon size="20" name="open-in-new"/>
                </a>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
    name: "c-footer"
}
</script>

<style scoped>

</style>