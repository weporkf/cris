<script setup lang="ts">
const testimonials = [
  {
    quote: 'PAC provided top-notch finishes and kept everything on schedule. Highly recommended!',
    author: 'Main Contractor',
    role: 'London',
  },
  {
    quote: 'Professional, tidy, and efficient. We\'ll be using them again.',
    author: 'Homeowner',
    role: 'North London',
  },
]
</script>

<template>
  <section class="testimonials section section--light">
    <div class="container">
      <ASectionTitle 
        title="What Our Clients Say"
        subtitle="Trusted by contractors and homeowners across London"
      />
      
      <div class="testimonials__grid">
        <MTestimonialCard 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          :quote="testimonial.quote"
          :author="testimonial.author"
          :role="testimonial.role"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>

