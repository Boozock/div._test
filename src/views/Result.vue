<template>
  <div class="container result-page-container" v-if="getResult?.length">
    <h1 class="main_title">{{ titleAndSubtitle.title }}</h1>
    <p class="sub_title" v-html="titleAndSubtitle.subtitle"></p>

    <ResultCard
        v-for="(item, index) in getResult"
        :key="index"
        :data="item"
    />

    <a href="#" class="btn" @click.prevent="again">
        Пройти еще раз
    </a>
  </div>
</template>

<script>
import ResultCard from '@/components/ResultCard.vue';

export default {
  name: 'Result',
  components: {
    ResultCard,
  },
  computed: {
    getResult(){
        return this.$store.getters.getResult;
    },
    successAnswersCount(){
        return this.getResult?.filter(item => item.answer?.success)?.length;
    },
    titleAndSubtitle(){
        return this.successAnswersCount === this.getResult?.length ?
                { title: "Поздравляем!", subtitle: "Вы правильно ответили на все вопросы. </br> Вы действительно отлично разбираетесь в IT. " } :
            this.successAnswersCount === 0 ? 
                { title: "Упс :(", subtitle: "Вы неправильно ответили на все вопросы. </br> Нужно подучить теорию." } :
                { title: "Хороший результат!", subtitle: `Вы ответили правильно на ${this.successAnswersCount} вопросов. </br> Так держать!` };
    }
  },
  methods: {
    again(){
        this.$store.dispatch('again');
        this.$router.replace("/");
    }
  },
  created(){
    if(!this.getResult?.length){
        this.$router.replace("/");
    }
  }
}
</script>