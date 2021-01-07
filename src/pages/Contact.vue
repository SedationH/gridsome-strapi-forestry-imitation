<template>
  <Layout>
    <div class="container">
      <div class="title">
        Say hi!
      </div>
      <p>
        Leave me a note with any questions you might have,
        I'll get back to you as soon as possible.
      </p>
      <form name="contact" class="contact-form">
        <div class="sender-info">
          <div>
            <label for="name" class="label">Your name</label
            ><input type="text" name="name" />
          </div>
          <div>
            <label for="email" class="label"
              >Your email</label
            ><input type="email" name="email" />
          </div>
        </div>
        <div class="message">
          <label for="message" class="label">Message</label
          ><textarea
            name="message"
            spellcheck="false"
          ></textarea>
        </div>
        <button class="button">
          Submit form
        </button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  font-size: 4rem;
  margin: 4rem 0;
  font-weight: 700;
}

.sender-info {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  .label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
}

.contact-form {
  margin-top: 4rem;
}

input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}

input:focus,
textarea:focus {
  border-color: var(--color-contrast-2);
}

.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;

  &:hover {
    opacity: 0.6;
  }
}
</style>
