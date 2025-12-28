<script setup lang="ts">
const faqs = [
  {
    question: 'Do you cover London?',
    answer: 'Yes, we cover all areas of London including North, South, East and West London, as well as surrounding areas like Essex and Hertfordshire. Contact us to confirm availability in your specific area.',
  },
  {
    question: 'Do you do small & big jobs?',
    answer: 'Absolutely! We handle projects of all sizes, from single room renovations to large commercial developments. Every job receives the same high-quality attention to detail.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes, PAC Construction Solutions LTD is fully insured with comprehensive public liability insurance. We can provide proof of insurance upon request.',
  },
  {
    question: 'Do you leave surfaces ready to paint?',
    answer: 'Yes, our tape and jointing service provides a smooth, ready-to-paint finish. We ensure all joints are seamlessly finished and sanded to a high standard, saving you time and additional preparation work.',
  },
]
</script>

<template>
  <section class="faq section">
    <div class="container">
      <ASectionTitle 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
      />
      
      <div class="faq__list">
        <MAccordionItem 
          v-for="(faq, index) in faqs" 
          :key="index"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>
      
      <div class="faq__cta">
        <p class="faq__cta-text">Still have questions?</p>
        <AButton href="/contact" variant="primary">
          Contact Us
        </AButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: linear-gradient(180deg, var(--color-light) 0%, var(--color-white) 100%);
}

.faq__list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 800px;
  margin: 0 auto 40px;
}

.faq__cta {
  text-align: center;
}

.faq__cta-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 15px;
}
</style>
