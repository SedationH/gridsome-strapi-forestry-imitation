<template>
  <Layout>
    <div>
      <div class="container">
        <div class="journal-header">
          <h1 class="title">
            a wise person once said...
          </h1>
        </div>
      </div>
      <g-link
        v-for="journal in journals"
        :key="journal.id"
        class="journal-post"
        :to="`/journals/${journal.id}`"
      >
        <div class="container">
          <h2 class="title">
            {{ journal.title }}
          </h2>
          <p class="excerpt">
            {{ journal.excerpt }}
          </p>
        </div>
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query {
	allStrapiJournal {
    edges {
      node {
        id
        title
        excerpt
      }
    }
  }
}
</page-query>

<script>
export default {
  data: () => ({
    title: 'Gridsome with Forestry CMS',
    excerpt:
      'Get up and running with Forestry CMS, a git-backed headless CMS with a slick editing interface.',
  }),

  computed: {
    journals() {
      return (
        this.$page.allStrapiJournal &&
        this.$page.allStrapiJournal.edges.map(
          item => item.node
        )
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.journal-header {
  padding: 4em 0;
  .title {
    font-size: 3rem;
    text-align: center;
  }
}

.journal-post {
  display: block;
  padding: 2rem 0;

  @media (min-width: 560px) {
    padding: 3rem 0;
  }

  @media (min-width: 860) {
    padding: 5rem 0;
  }

  .container {
    max-width: 720px;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
  }

  .excerpt {
    margin-top: 2rem;
    color: var(--color-contrast-1);
  }
}
</style>
