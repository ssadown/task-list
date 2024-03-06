<template>
    <button>
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    props: {
        buttonText: String,
    }
}
</script>

<style lang="scss" scoped>
    button {
        width: 30%;
        height: 10%;
        margin-top: 40px;
        border: 1px solid rgb(0, 13, 18);
        outline: 0;
        border-radius: 16px;
        font-size: 100%;
        transition-duration: 0.4s;
        cursor: pointer;
        background-color: transparent;
    }
    button:hover {
        background-color: rgb(0, 13, 18);
        color:white
    }
</style>