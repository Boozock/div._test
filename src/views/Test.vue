<template>
  <div class="container">
    <h1 class="main_title">Тестирование</h1>

    <Question
      :data="questions[step-1]"
      @selectAnswer="selectAnswer"
    />

    <ProgressBar
      :max="questions?.length || 1"
      :current="step"
    />
  </div>
</template>

<script>
import Question from '@/components/Question.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import { questions } from "@/mockdata/questions";

export default {
  name: 'Test',
  components: {
    Question,
    ProgressBar,
  },
  data(){
    return {
      step: 1,
    }
  },
  computed: {
    questions(){
      return questions.sort(() => Math.random() - 0.5);
    }
  },
  methods: {
    selectAnswer(answer){
      console.log('this.step:', this.step, "this.questions?.length", this.questions?.length);
      
      if(this.step === (this.questions?.length)){
        this.$router.push("/result");
        return;
      }

      this.$store.commit("setResult", answer);

      this.step += 1;
    }
  }
}
</script>