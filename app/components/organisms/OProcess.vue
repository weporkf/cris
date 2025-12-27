<script setup lang="ts">
const steps = [
  { number: 1, title: 'Contact & Free Quote' },
  { number: 2, title: 'Site Visit / Plans Review' },
  { number: 3, title: 'Work Scheduled' },
  { number: 4, title: 'Finish Delivered & Signed Off' },
]
</script>

<template>
  <section class="process section section--dark">
    <div class="container">
      <ASectionTitle 
        title="Our Simple Process"
        subtitle="From first contact to project completion - we make it easy"
        light
      />
      
      <div class="process__steps">
        <div class="process__line"></div>
        <MProcessStep 
          v-for="step in steps" 
          :key="step.number"
          :number="step.number"
          :title="step.title"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-dark) 100%);
}

.process__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  position: relative;
}

.process__line {
  position: absolute;
  top: 35px;
  left: 10%;
  right: 10%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--color-primary) 20%, 
    var(--color-primary) 80%, 
    transparent 100%
  );
  opacity: 0.3;
}

@media (max-width: 1024px) {
  .process__steps {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .process__line {
    display: none;
  }
}

@media (max-width: 640px) {
  .process__steps {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
}
</style>

