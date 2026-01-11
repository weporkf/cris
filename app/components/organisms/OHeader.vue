<script setup lang="ts">
const route = useRoute()
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
  // Prevent body scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

// Handle navigation with programmatic routing - fixes iOS Safari issues
const handleNavClick = async (e: Event, to: string) => {
  e.preventDefault()
  e.stopPropagation()
  
  // Close menu immediately
  closeMobileMenu()
  
  // Navigate programmatically - more reliable on iOS
  if (route.path !== to) {
    await navigateTo(to)
  }
}

// Also close on route change as backup
watch(() => route.path, () => {
  closeMobileMenu()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__inner">
        <ALogo variant="light" />
        
        <nav class="header__nav" :class="{ 'header__nav--open': isMobileMenuOpen }">
          <a
            v-for="link in navLinks" 
            :key="link.to" 
            :href="link.to"
            class="header__nav-link"
            :class="{ 'header__nav-link--active': route.path === link.to }"
            @click="handleNavClick($event, link.to)"
            @touchend="handleNavClick($event, link.to)"
          >
            {{ link.label }}
          </a>
        </nav>
        
        <div class="header__actions">
          <AButton href="/contact" variant="primary" size="sm" class="header__quote-btn">
            Get a Quote
          </AButton>
          
          <button 
            class="header__burger" 
            :class="{ 'header__burger--open': isMobileMenuOpen }"
            @click="toggleMobileMenu"
            type="button"
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
    <div 
      v-show="isMobileMenuOpen" 
      class="header__overlay" 
      @click="closeMobileMenu"
    ></div>
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

.header__nav-link {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-white);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  transition: color var(--transition-fast);
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width var(--transition-normal);
}

.header__nav-link:hover,
.header__nav-link--active {
  color: var(--color-primary);
}

.header__nav-link:hover::after,
.header__nav-link--active::after {
  width: 100%;
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
  align-items: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: relative;
  z-index: 1010;
  -webkit-tap-highlight-color: transparent;
}

.header__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--text-white);
  transition: all var(--transition-normal);
  transform-origin: center;
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
  z-index: 1001;
  opacity: 0;
  animation: fadeIn 0.3s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

/* Mobile */
@media (max-width: 768px) {
  .header__nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    height: 100dvh;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 100px 30px 30px;
    background-color: var(--color-secondary);
    box-shadow: var(--shadow-xl);
    z-index: 1002;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }
  
  .header__nav--open {
    transform: translateX(0);
  }
  
  .header__nav-link {
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 1.1rem;
    display: block;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }
  
  .header__burger {
    display: flex;
  }
  
  .header__quote-btn {
    display: none;
  }
}

@media (max-width: 480px) {
  .header__nav {
    width: 100%;
  }
}
</style>
