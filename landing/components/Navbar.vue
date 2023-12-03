<template>
    <div :class="['fixed-top', {'non-fixed': isSticky}]">
        <div class="topbar">
            <div class="container">
                <div class="topbar-inner">
                    <div class="row justify-content-center justify-content-lg-between">
                        <div class="topbar-item topbar-left">
                            <ul class="topbar-list">
                                <li>
                                    <i class="icofont-headphone"></i>
                                    <a href="tel:+6281703106180">+62 817 031 06180</a>
                                </li>
                                <li>
                                    <i class="icofont-ui-message"></i>
                                    <a href="mailto:info@matter.co.id">info@matter.co.id</a>
                                </li>
                            </ul>
                        </div>
                        <div class="topbar-item topbar-right">
                            <ul class="topbar-list">
                                <li>
                                    <i class="icofont-paper-plane"></i>
                                    <nuxt-link to="/contact">Buat Jadwal</nuxt-link>
                                </li>
                                <li 
                                    class="search-option"
                                    @click="overlay = !overlay"
                                    :aria-pressed="overlay ? 'true' : 'false'"
                                    v-bind:class="{ 'overlay': button_overlay_state }"
                                    v-on:click="button_overlay_state = !button_overlay_state"
                                >
                                    <i class="icofont-search-1"></i>
                                    <a href="#" class="search-popup">Search</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div :class="['navbar-area sticky-black', {'is-sticky': isSticky}]">
            <div class="main-nav">
                <div class="container">
                    <nav class="navbar navbar-expand-md navbar-light">
                        <nuxt-link class="navbar-brand" to="/">
                            <img src="~/assets/images/logo.png" alt="logo" class="logo">
                        </nuxt-link>                      
                        <div 
                            class="navbar-toggler"
                            @click="active = !active" 
                            :aria-pressed="active ? 'true' : 'false'"
                            v-bind:class="{ 'active': button_active_state }"
                            v-on:click="button_active_state = !button_active_state"
                        >
                            <i class="icofont-navigation-menu"></i>
                            <i class="icofont-close"></i>
                        </div>

                        <div class="navbar-collapse">
                            <ul class="navbar-nav mx-auto">
                                <li class="nav-item">
                                    <nuxt-link to="/" :class="'nav-link'">
                                                Home
                                    </nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/" class="nav-link">
                                        About Us
                                    </nuxt-link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Services</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Services
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Single Service
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Pages</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Pricing
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                FAQ's
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Our Team
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Projects</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Projects
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Single Project
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Case Study</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <nuxt-link to="/cases" class="nav-link">
                                                        Case
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Cases Two Columns
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Single Case
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Testimonial
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Our Clients
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Careers
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Products</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Products
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Single Product
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Cart
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Checkout
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Users</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Authentication
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Forget Password
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        My Account
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        My Orders
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        My Addresses
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#" class="nav-link dropdown-toggle">Others</a>
                                            <ul class="dropdown-menu">
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Demo Product
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Feedback
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Terms Of Service
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Privacy Policy
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Search Page
                                                    </nuxt-link>
                                                </li>
                                                <li class="nav-item">
                                                    <nuxt-link to="/" class="nav-link">
                                                        Coming Soon
                                                    </nuxt-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link dropdown-toggle">Blogs</a>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Blogs Grid
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Blogs Right Sidebar
                                            </nuxt-link>
                                        </li>
                                        <li class="nav-item">
                                            <nuxt-link to="/" class="nav-link">
                                                Single Blog
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <nuxt-link to="/" class="nav-link">Contact</nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div class="navbar-option">
                            <div class="navbar-option-item">
                                <nuxt-link to="/" class="btn main-btn">
                                    Login Or Register
                                </nuxt-link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="search-overlay" :class="{ search: overlay }">
            <div 
                class="search-close"
                @click="overlay = !overlay"
            >
                <i class="icofont-close"></i>
            </div>
            <div class="search-form-area">
                <div class="search-area-logo">
                    <nuxt-link to="/">
                        <img src="/assets/images/logo-white.png" alt="logo">
                    </nuxt-link>
                </div>
                <form>
                    <div class="form-group search-form-group">
                        <input type="text" placeholder="Search..." class="form-control" autofocus="autofocus">
                        <button>
                            <i class="icofont-search-1"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {
            isSticky: false,
            isMenu: false,
            active: false,
            button_active_state: false,
            overlay: false,
            button_overlay_state: false,
        }
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isSticky = true
            } else {
                that.isSticky = false
            }
        })
    }
}
</script>