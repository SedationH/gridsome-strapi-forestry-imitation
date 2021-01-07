<template>
  <Layout>
    <div class="projects container">
      <div class="project-header">
        <h1 class="title">
          {{ project.title }}
        </h1>
        <div class="info">
          <div class="column">
            <h3>Categories</h3>
            <div>photography,pink</div>
          </div>
          <div class="column">
            <h3>Year</h3>
            <div>
              2019
            </div>
          </div>
        </div>
      </div>
      <div
        class="project-content"
        v-html="$options.filters.md(project.content)"
      ></div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  project: strapiProject(id: $id) {
    title
    Categories
    Year
    content
  }
}
</page-query>

<script>
export default {
  computed: {
    project() {
      return this.$page.project
    },
  },
}
</script>

<style lang="scss" scoped>
.projects {
  .project-header {
    margin: 6rem 0 3rem 0;

    .title {
      font-size: 4rem;
      font-weight: 600;
      margin-bottom: 3rem;
    }

    .info {
      display: flex;

      & > div {
        margin-right: 2rem;
      }

      .column > h3 {
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .column > div {
        font-weight: 300;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
