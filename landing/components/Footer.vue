<template>
    <footer class="bg-off-white footer">
        <div class="footer-shapes">
            <div class="footer-shape">
                <img src="~/assets/images/shape-1.png" alt="shape">
            </div>
            <div class="footer-shape footer-round-shape">
                <img src="~/assets/images/shape-2.png" alt="shape">
            </div>
        </div>
        <div class="footer-upper pt-100 pb-80 position-relative">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3">
                        <div class="footer-content-item">
                            <div class="footer-logo">
                                <router-link to="/">
                                    <img src="~/assets/images/logo.png" alt="logo">
                                </router-link>
                            </div>
                            <div class="footer-details">
                                <p>Matter AI Automation and Developer Services</p>
                                <ul class="social-list social-list-btn">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="icofont-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="icofont-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i class="icofont-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i class="icofont-pinterest"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Useful Links</h3>
                            </div>
                            <ul class="footer-details footer-list">
                                <li><router-link to="/">About Us</router-link></li>
                                <li><router-link to="/">News & Blogs</router-link></li>
                                <li><router-link to="/">Services</router-link></li>
                                <li><router-link to="/">Products</router-link></li>
                                <li><router-link to="/">Our Pricing</router-link></li>
                                <li><router-link to="/">Contact</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Services</h3>
                            </div>
                            <ul class="footer-details footer-list">
                                <li><router-link to="/">Robotic Automation</router-link></li>
                                <li><router-link to="/">Predictive Analysis</router-link></li>
                                <li><router-link to="/">Deep Learning</router-link></li>
                                <li><router-link to="/">Statistic Modeling</router-link></li>
                                <li><router-link to="/">Data Mining</router-link></li>
                                <li><router-link to="/">Security & Surveillance</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-6 col-lg-3">
                        <div class="footer-content-list footer-content-item desk-pad-left-70">
                            <div class="footer-content-title">
                                <h3>Contact</h3>
                            </div>
                            <div class="footer-details footer-address">
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Phone:</h4>
                                        <p><a href="tel:+6281703106180">(+62) 817 031 06180</a></p>
                                    </div>
                                </div>
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Email:</h4>
                                        <p><a href="mailto:info@matter.co.id">info@matter.co.id</a></p>
                                    </div>
                                </div>
                                <div class="footer-address-item">
                                    <div class="footer-address-text">
                                        <h4>Address:</h4>
                                        <p>Pondok Indah Office Tower 3 Fl.17, Jakarta Selatan, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-lower bg-blue position-relative">
            <div class="container">
                <div class="footer-copyright-text footer-copyright-text-white">
                    <p>Copyright ©{{currentYear}} Matter.</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    }
}
</script>