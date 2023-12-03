<script setup>
const carouselItems = ref([
            {
                id: 1,
                title: 'Energy Production Demand Forecasting',
                desc: 'Implementasi Machine Learning memungkinkan PT I mengantisipasi produksi energi dari sumber terbarukan yang tidak stabil. Model ML meningkatkan keandalan suplai listrik, menghindari pemadaman dan memaksimalkan efisiensi operasional dalam aktivitas pengurangan dampak lingkungan.',
                image: '/assets/images/testimonial-1.jpg',
                name: 'Power Grid',
                address: 'Indonesia'
            },
            {
                id: 2,
                title: 'Supply Chain Demand Forecasting',
                desc: 'Perusahaan Franchise Ritel terbesar di Indonesia menggunakan model ML untuk memprediksi permintaan produk dan mengoptimalkan persediaan di setiap gerai. Model ML kami meningkatkan akurasi prediksi permintaan produk hingga 30% dan mengurangi biaya persediaan hingga 20%.',
                image: '/assets/images/testimonial-2.jpg',
                name: 'Retail Chain',
                address: 'Indonesia'
            },
            {
                id: 3,
                title: 'Marketing Campaign Optimization',
                desc: 'Analisa prediktif kami membantu perusahaan asuransi meningkatkan efektivitas kampanye pemasaran mereka dari sales history dan 40 faktor variable kampanye. Model ML kami meningkatkan akurasi prediksi konversi hingga 40% dan mengurangi biaya pemasaran hingga 30%.',
                image: '/assets/images/testimonial-3.jpg',
                name: 'Insurance Company',
                address: 'Indonesia'
            },
            {
                id: 4,
                title: 'AI Backend',
                desc: 'Sebuah startup unicorn di Indonesia menggunakan Rancangan Foundational Model dari AI kami untuk membangun AI backend mereka. Model AI kami meningkatkan kecepatan generatif aplikasi hingga 200% dan meningkatkan kepatuhan respons terhadap instruksi 37% lebih akurat dibandingkan produk API ChatGPT 4 dari OpenAI.',
                image: '/assets/images/testimonial-4.jpg',
                name: 'Startup',
                address: 'Indonesia'
            },
        ]);

const breakpoints = ref({
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        });
</script>

<template>
    <div class="testimonial-section p-tb-100 position-relative">
        <div class="section-inner-center-shape animation-d-none">
            <img src="../../assets/images/round-shape.png" alt="shape">
        </div>
        <div class="container">
            <div class="section-title">
                <small>Klien Kami</small>
                <h2>Customer Success Stories dan Use Cases</h2>
            </div>
            <div class="testimonial-carousel default-carousel">
                <Carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                    :wrap-around="true"
                >
                    <Slide 
                        v-for="slide in carouselItems" 
                        :key="slide.id"
                    >
                        <div class="testimonial-card">
                            <div class="testimonial-card-body">
                                <div class="testimonial-card-inner-header">
                                    <h3>{{ slide.title }}</h3>
                                    <div class="testimonial-quote">
                                        <i class="icofont-quote-left"></i>
                                    </div>
                                </div>
                                <p class="testimonial-para">{{slide.desc}}</p>
                                <ul class="review-star-list">
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                    <li class="starred"><i class="icofont-star"></i></li>
                                </ul>
                            </div>
                            <div class="testimonial-card-info">
                                <div class="testimonial-card-info-thumb">
                                    <img :src="slide.image" alt="testimonial">
                                </div>
                                <div class="testimonial-card-info-text">
                                    <h3 class="testimonial-name">{{slide.name}}</h3>
                                    <p class="testimonial-address">{{slide.address}}</p>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Navigation>
                            <template #next>
                                <i class='icofont-arrow-right'></i>
                            </template>
                            <template #prev>
                                <i class='icofont-arrow-left'></i>
                            </template>
                        </Navigation>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

