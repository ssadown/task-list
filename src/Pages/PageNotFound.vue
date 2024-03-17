<template>
    <div class="wrapper">
        <h1>Страница не найдена!</h1>
        <Button
        :buttonText="'Вернуться назад!'"
        @click="() => {$router.push('/task-list')}"
        />
    </div>
</template>

<script>
import Button from '@/Components/UI/Button.vue'

export default {
    components: {
        Button
    }
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 3vh;
    text-align: center;
}
@media screen and (max-width: 1024px) {
        button {
            width: 80%;
        }
}

</style>