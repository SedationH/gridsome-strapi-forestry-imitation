<template>
  <div class="layout">
    <header class="header">
      <div class="container">
        <div class="left">
          <g-link to="/">
            <Logo class="logo" />
          </g-link>
        </div>
        <nav class="right nav">
          <g-link class="nav__link" to="/journal"
            >Journal</g-link
          >
          <g-link class="nav__link" to="/contact"
            >Say Hi!</g-link
          >
        </nav>
      </div>
    </header>
    <main class="main">
      <slot />
    </main>
    <footer class="footer">
      <div class="container">
        <span>Copyright © {{ new Date() | date }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/assets/img/logo.svg'
export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 6rem;

  & > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .logo {
    height: 1.5rem;
  }

  .nav {
    font-size: 0.9rem;

    &__link {
      margin-right: 3rem;
      font-weight: 600;
      border-bottom: 1px solid transparent;
      padding-bottom: 8px;

      &:last-of-type {
        margin-right: 0;
      }

      &.active {
        border-color: inherit;
      }
    }
  }
}

.main {
  padding-top: 6rem;
}

.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}
</style>
