<template>
  <section class="cta">
    <div class="cta__background">
      <div class="cta__pattern"></div>
    </div>
    
    <div class="container">
      <div class="cta__content">
        <h2 class="cta__title">Ready for perfectly smooth walls and ceilings?</h2>
        <p class="cta__subtitle">Contact us today for a free tape & jointing quote!</p>
        <AButton href="/contact" variant="primary" size="lg">
          Get a Free Quote
        </AButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  padding: 80px 0;
  overflow: hidden;
}

.cta__background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  z-index: -2;
}

.cta__pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 30%);
  z-index: -1;
}

.cta__content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta__title {
  color: var(--color-dark);
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  margin-bottom: 15px;
}

.cta__subtitle {
  color: var(--color-secondary);
  font-size: 1.1rem;
  margin-bottom: 25px;
  opacity: 0.9;
}

.cta :deep(.btn--primary) {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: var(--text-white);
}

.cta :deep(.btn--primary:hover) {
  background: var(--color-dark);
  border-color: var(--color-dark);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

@media (max-width: 640px) {
  .cta {
    padding: 60px 0;
  }
}
</style>

