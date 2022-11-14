<template>
  <div class="article-list">
    <h3>Article List</h3>
    <!-- 결국 article의 제목이든 content든 개개인의 article을 조회할수 있어야함으로 article in articles에서 article을 prop으로 내려줄 필요가 있다 -->
    <ArticleListItem
      v-for="article in articles"
      :key="article.id"
      :article="article" 
    />
    <!-- :article -> name "article"-> data -->
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'

export default {
  name: 'ArticleList',
  components: {
    ArticleListItem
  },
  // computed는 반드시 return이 필요
  computed: {
    articles() {
      return this.$store.state.articles 
      // 출력자체는 배열이기떄문에 articleLIstitem이 반복, so template부분에 articleListitem에 prop data를 내려줘야함 반복을 돌면서,
    }
  }
}
</script>

<style>
.article-list {
  text-align: start;
}
</style>
