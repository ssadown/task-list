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

<style>

</style>