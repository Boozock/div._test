<template>
    <div :class="['result-card', data.answer.success ? 'success' : 'fail']">
        <h3 class="result-card__question">{{ data.qustion }}</h3>
        <p class="result-card__answer">{{ data.answer.text }}</p>
    </div>
</template>

<script>
export default {
    name: "ResultCard",
    props: ['data'],
}
</script>