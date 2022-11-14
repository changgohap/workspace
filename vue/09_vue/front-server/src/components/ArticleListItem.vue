<template>
  <div>
    <h5>{{ article.id }}</h5>
    <p>{{ article.title }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    // 아까 내린 articles중 article
    article: Object,
  }
}
</script>

<style>

</style>
