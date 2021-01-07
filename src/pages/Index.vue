<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">
          Simplicity. Aesthetics. Value.
        </h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer
          &amp; Art Director focused on digital design for
          brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <div
          class="project"
          v-for="project in projects"
          :key="project.id"
        >
          <g-link
            class="project-link"
            :to="`projects/${project.id}`"
            :project="project"
          >
            <g-image
              class="project-img"
              v-if="project.cover"
              :src="project.cover.url | file"
              fit="cover"
              height="560"
            ></g-image>
            <h3 class="project-title">Banana</h3>
            <div class="categories">
              <span class="category">photography</span>
              <span class="category">pink</span>
            </div>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  projects: allStrapiProject(order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        Categories
        Year
        cover {
          url
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    projects() {
      return (
        this.$page.projects &&
        this.$page.projects.edges.map(item => item.node)
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  text-align: center;

  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 4rem 0 8rem;

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin: 0 0 2rem;
  }

  .hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    opacity: 0.6;
  }
}

.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  .project {
    grid-column: auto / span 2;
    text-align: center;

    @media (min-width: 920px) {
      &:nth-child(3n + 1) {
        grid-column: auto / span 2;
      }

      & {
        grid-column: auto / span 1;
      }
    }

    &-title {
      font-size: 1rem;
      color: var(--color-contrast);
      margin: 2rem 0 1rem;
      font-weight: 600;
    }

    &-img {
      /* height: 560px;
      object-fit: cover; */
    }

    .categories {
      font-size: 0.8rem;
      color: var(--color-contrast-1);

      .category {
        margin-right: 0.8rem;
      }
    }
  }
}
</style>
