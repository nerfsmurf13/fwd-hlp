<template>
  <section class="section notfound">
    <div class="wrap">
      <p class="code headline">404</p>
      <h1 class="title">Page Not Found</h1>
      <p class="body-copy">That page does not exist.</p>
      <RouterLink to="/" class="btn btn-primary back">Back Home</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.notfound {
  text-align: center;
}

.code {
  font-size: 5rem;
  color: var(--orange);
}

.title {
  font-size: var(--text-h2);
}

.back {
  display: inline-block;
  margin-top: 2rem;
}
</style>
