<template>
    <input
    :placeholder="placeholderText"
    type="text"
    :valueText="loginValue"
    @input="updateValue"
/>
</template>

<script>
export default {
    props: {
        valueText: String,
        placeholderText: String
    },
    methods: {
        updateValue(event) {
            this.$emit('update:valueText', event.target.value)
        }
    }
}
</script>

<style>
input {
    width: 30%;
    height: 10%;
    margin-top: 40px;
    border: 1px solid rgb(0, 13, 18);
    outline: 0;
    border-radius: 16px;
    text-indent: 15px;
    font-size: 100%;
}
</style>