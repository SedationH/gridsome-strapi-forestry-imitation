<template>
  <Layout>
    <div class="container">
      <div class="journal-header">
        <h1 class="title">
          {{ journal.title }}
        </h1>
        <div class="info">
          <div class="cloumn">{{ journal.Author }}</div>
          <div class="cloumn">{{ journal.Date }}</div>
        </div>
      </div>
      <div
        class="journal-content"
        v-html="$options.filters.md(journal.content)"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  strapiJournal(id: $id) {
    title
    Author
    Date
    content
  }
}
</page-query>

<script>
export default {
  computed: {
    journal() {
      return this.$page.strapiJournal
    },
  },
}
</script>

<style lang="scss" scoped>
.journal-header {
  margin: 2rem 0 3rem 0;
  .title {
    font-size: 4rem;
    margin: 0 0 4rem;
  }
  .info {
    display: flex;

    & > div {
      margin-right: 3rem;
      font-weight: 300;
      font-size: 0.9rem;
    }
  }
}
</style>
