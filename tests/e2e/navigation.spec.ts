import { test, expect } from '@playwright/test'

test.describe('Mobile Navigation', () => {
    test.beforeEach(async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 })
    })

    test('burger menu opens and closes', async ({ page }) => {
        await page.goto('/')

        // Burger should be visible on mobile
        const burger = page.locator('.header__burger')
        await expect(burger).toBeVisible()

        // Nav should be hidden initially (transformed off-screen)
        const nav = page.locator('.header__nav')
        await expect(nav).not.toHaveClass(/header__nav--open/)

        // Click burger to open menu
        await burger.click()
        await expect(nav).toHaveClass(/header__nav--open/)

        // Overlay should be visible
        const overlay = page.locator('.header__overlay')
        await expect(overlay).toBeVisible()

        // Click overlay to close menu
        await overlay.click()
        await expect(nav).not.toHaveClass(/header__nav--open/)
    })

    test('can navigate from Home to Services via burger menu', async ({ page }) => {
        await page.goto('/')

        // Open burger menu
        await page.locator('.header__burger').click()

        // Wait for menu to open
        await expect(page.locator('.header__nav')).toHaveClass(/header__nav--open/)

        // Click on Services link
        await page.locator('.header__nav-link:has-text("Services")').click()

        // Should navigate to services page
        await expect(page).toHaveURL('/services')

        // Menu should be closed
        await expect(page.locator('.header__nav')).not.toHaveClass(/header__nav--open/)
    })

    test('can navigate from Services to Home via burger menu', async ({ page }) => {
        await page.goto('/services')

        // Open burger menu
        await page.locator('.header__burger').click()
        await expect(page.locator('.header__nav')).toHaveClass(/header__nav--open/)

        // Click on Home link
        await page.locator('.header__nav-link:has-text("Home")').click()

        // Should navigate to home page
        await expect(page).toHaveURL('/')

        // Menu should be closed
        await expect(page.locator('.header__nav')).not.toHaveClass(/header__nav--open/)
    })

    test('navigation works after returning to Home - critical iOS bug test', async ({ page }) => {
        // Start on home page
        await page.goto('/')

        // Navigate to Services
        await page.locator('.header__burger').click()
        await page.locator('.header__nav-link:has-text("Services")').click()
        await expect(page).toHaveURL('/services')

        // Navigate back to Home
        await page.locator('.header__burger').click()
        await page.locator('.header__nav-link:has-text("Home")').click()
        await expect(page).toHaveURL('/')

        // THIS IS THE CRITICAL TEST: Navigation should still work after returning to Home
        await page.locator('.header__burger').click()
        await expect(page.locator('.header__nav')).toHaveClass(/header__nav--open/)

        // Try to navigate to Gallery
        await page.locator('.header__nav-link:has-text("Gallery")').click()
        await expect(page).toHaveURL('/gallery')

        // And navigate to Contact
        await page.locator('.header__burger').click()
        await page.locator('.header__nav-link:has-text("Contact")').click()
        await expect(page).toHaveURL('/contact')

        // And back to Home again
        await page.locator('.header__burger').click()
        await page.locator('.header__nav-link:has-text("Home")').click()
        await expect(page).toHaveURL('/')
    })

    test('all navigation links are clickable after multiple navigations', async ({ page }) => {
        const routes = ['/', '/services', '/gallery', '/contact']

        await page.goto('/')

        // Navigate through all pages multiple times
        for (let round = 0; round < 2; round++) {
            for (const targetRoute of routes) {
                const currentUrl = page.url()

                // Skip if already on target route
                if (currentUrl.endsWith(targetRoute) || (targetRoute === '/' && currentUrl.endsWith(':3000/'))) {
                    continue
                }

                // Open burger and navigate
                await page.locator('.header__burger').click()
                await expect(page.locator('.header__nav')).toHaveClass(/header__nav--open/)

                const linkText = targetRoute === '/' ? 'Home' :
                    targetRoute === '/services' ? 'Services' :
                        targetRoute === '/gallery' ? 'Gallery' : 'Contact'

                await page.locator(`.header__nav-link:has-text("${linkText}")`).click()

                // Verify navigation succeeded
                if (targetRoute === '/') {
                    await expect(page).toHaveURL(/\/$/)
                } else {
                    await expect(page).toHaveURL(targetRoute)
                }

                // Verify menu closed
                await expect(page.locator('.header__nav')).not.toHaveClass(/header__nav--open/)
            }
        }
    })

    test('body scroll is locked when menu is open', async ({ page }) => {
        await page.goto('/')

        // Open menu
        await page.locator('.header__burger').click()
        await expect(page.locator('.header__nav')).toHaveClass(/header__nav--open/)

        // Body should have overflow hidden
        const bodyOverflow = await page.evaluate(() => document.body.style.overflow)
        expect(bodyOverflow).toBe('hidden')

        // Close menu
        await page.locator('.header__overlay').click()
        await expect(page.locator('.header__nav')).not.toHaveClass(/header__nav--open/)

        // Body overflow should be reset
        const bodyOverflowAfter = await page.evaluate(() => document.body.style.overflow)
        expect(bodyOverflowAfter).toBe('')
    })
})

test.describe('Desktop Navigation', () => {
    test('burger menu is hidden on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 })
        await page.goto('/')

        const burger = page.locator('.header__burger')
        await expect(burger).toBeHidden()

        // Nav links should be visible
        const navLinks = page.locator('.header__nav-link')
        await expect(navLinks.first()).toBeVisible()
    })

    test('navigation works on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1280, height: 720 })
        await page.goto('/')

        // Click on Services
        await page.locator('.header__nav-link:has-text("Services")').click()
        await expect(page).toHaveURL('/services')

        // Click on Home
        await page.locator('.header__nav-link:has-text("Home")').click()
        await expect(page).toHaveURL('/')
    })
})
