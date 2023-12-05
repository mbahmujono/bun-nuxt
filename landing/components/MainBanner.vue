<template>
    <div class="header header-bg-lg header-bg-shape border-bottom-1">
        <div class="container-fluid p-lg-0">
            <div class="row m-lg-0">
                <div class="col-lg-6 p-lg-0">
                    <div class="max-585 ms-auto">
                        <div class="header-content">
                            <h1 style="font-size: 55px;">Innovative AI Solutions for Measurable Impact</h1>
                            <p>Navigating the complex landscape of today’s market requires more than just ideas – it demands solutions that merge creativity with measurable business outcomes.</p>
                            <div class="button-group button-group-animated">
                                <router-link to="/" class="btn main-btn">
                                    Discover AI Solutions
                                </router-link>
                                <router-link to="/" class="btn main-btn main-btn-white">
                                    Talk with our team
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-image-shape">
            <img src="/assets/images/homepage-one/header-shape.png" alt="shape">
        </div>
        <div class="header-animation-shapes animation-d-none">
            <div class="header-animation-shape"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBanner'
}
</script>