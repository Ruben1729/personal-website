<template>
    <a
        class="cursor-pointer"
        :class="{
            'opacity-100 duration-150 fade': fade,
            'underline-anim': underline,
        }"
        :href="destination"
        target="_blank"
    >
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "animated-link",
    props: {
        fade: {
            type: Boolean,
            default: true,
        },
        underline: {
            type: Boolean,
            default: true,
        },
        destination: {
            type: String
        }
    },
};
</script>

<style lang="scss" scoped>
/* Underline styles */
a {
    text-decoration: none;
    display: block;
    position: relative;
}
.fade:hover {
    opacity: 0.5;
}
.underline-anim::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}
.underline-anim:hover::after,
.underline-anim:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}
/* Slide in */
.underline-anim {
    overflow: hidden;
}
.underline-anim::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
}
.underline-anim:hover::after,
.underline-anim:focus::after {
    transform: translate3d(0, 0, 0);
}
/* Scale from center */
//li:nth-child(3) a::after {
//    opacity 1;
//    transform: scale(0);
//    transform-origin: center;
//}
//
//li:nth-child(3) a:hover::after,
//li:nth-child(3) a:focus::after{
//    transform: scale(1);
//}
</style>