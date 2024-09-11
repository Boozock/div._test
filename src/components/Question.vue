<template>
  <div class="question">
    <h3 class="question__title">{{ data?.question }}</h3>
    <button
      :class="['question__item', {'active': answer.text === active?.text}]"
      v-for="(answer, index) in answers" :key="index"
      @click.prevent="selectAnswer(answer)"
    >
      <span class="question__item_circle"></span>
      <span class="question__item_text">
        {{ answer.text }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ["data"],
  data(){
    return {
      active: null,
      timer: null,
    }
  },
  computed: {
    answers(){
      return [...this.data.answers].sort(() => Math.random() - 0.5)
    }
  },
  methods: {
    selectAnswer(answer){
      let $self = this;

      if(this.timer){
        clearTimeout(this.timer);
      };

      this.active = {...answer};

      this.timer = setTimeout(() => {
        $self.$emit('selectAnswer', {
          qustion: $self.data?.question,
          answer
        });
      }, 1000);
    }
  }
}
</script>
<style scoped>
.question {
  text-align: left;
}
</style>