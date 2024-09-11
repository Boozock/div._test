<template>
    <div class="progress-bar">
        <div class="progress-bar__start-max-wrpr">
            <span class="progress-bar__start">0</span>
            <span class="progress-bar__max">
                {{ max }}
            </span>
        </div>
        <div class="progress-bar__line">
            <div class="progress-bar__line-colored" :style="{width: `${(100/(max/current)).toFixed(2)}%`}">
                <span class="progress-bar__current">
                    {{ current }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProgressBar",
    props: ["max", "current"]
}
</script>