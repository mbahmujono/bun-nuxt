<template>
    <div class="header header-bg-lg header-bg-shape border-bottom-1">
        <div class="container-fluid p-lg-0">
            <div class="row m-lg-0">
                <div class="col-lg-6 p-lg-0">
                    <div class="max-585 ms-auto">
                        <div class="header-content">
                            <h1>Inovasi Terkini, Hasil Nyata</h1>
                            <p>Pahami data pelanggan lebih dalam, percepat proses bisnis dan optimalkan operasional dengan model AI dan ML enterprise-grade kami.</p>
                            <div class="button-group button-group-animated">
                                <router-link to="/" class="btn main-btn">
                                    Jelajahi Solusi Kami
                                </router-link>
                                <router-link to="/" class="btn main-btn main-btn-white">
                                    Hubungi Kami
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