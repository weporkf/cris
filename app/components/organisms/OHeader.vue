<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__inner">
        <ALogo variant="light" />
        
        <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
          <MNavLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </MNavLink>
        </nav>
        
        <div class="header__actions">
          <AButton href="/contact" variant="primary" size="sm">
            Get a Quote
          </AButton>
          
          <button 
            class="header__burger" 
            :class="{ 'header__burger--open': isMobileMenuOpen }"
            @click="toggleMobileMenu"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div 
        v-if="isMobileMenuOpen" 
        class="header__overlay" 
        @click="closeMobileMenu"
      ></div>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 15px 0;
  transition: all var(--transition-normal);
}

.header--scrolled {
  background-color: rgba(26, 26, 46, 0.98);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  box-shadow: var(--shadow-md);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 28px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.header__burger span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-white);
  transition: all var(--transition-normal);
}

.header__burger--open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.header__burger--open span:nth-child(2) {
  opacity: 0;
}

.header__burger--open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.header__overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-normal);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .header__nav {
    position: fixed;
    top: 0;
    right: -300px;
    width: 280px;
    height: 100vh;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 80px 30px 30px;
    background-color: var(--color-secondary);
    transition: right var(--transition-normal);
    box-shadow: var(--shadow-xl);
  }
  
  .header__nav--open {
    right: 0;
  }
  
  .header__nav :deep(.nav-link) {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .header__burger {
    display: flex;
  }
  
  .header__actions .btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .header__nav {
    width: 100%;
    right: -100%;
  }
}
</style>
