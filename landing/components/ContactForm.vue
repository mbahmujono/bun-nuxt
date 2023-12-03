<template>
    <div class="contact-form-section pb-100">
        <div class="container">
            <div class="contact-form-box">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact-map contact-form-item">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0059383394196!2d106.77927424018908!3d-6.262946861342753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a89a207731%3A0x13d52340023a73ee!2sPd.%20Indah%20Office%20Tower%203%2C%20Jl.%20Arteri%20Pd.%20Indah%2C%20RT.5%2FRW.3%2C%20Pd.%20Pinang%2C%20Kec.%20Kby.%20Lama%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012310!5e0!3m2!1sid!2sid!4v1701618079608!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-form-item desk-pad-left-40">
                            <div class="section-title text-start section-title-left">
                                <h2>Let's Get In Touch!</h2>
                                <p> Isi formulir di bawah atau hubungi kami langsung untuk memulai dialog tentang bagaimana AI dapat mengubah cara Anda berbisnis.</p>
                            </div>
                            <form class="contact-form">
                                <div class="form-group mb-20">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Your Name*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="email" id="email" class="form-control" placeholder="Your Email*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="phone" id="phone" class="form-control" placeholder="Your Phone*" />
                                </div>
                                <div class="form-group mb-20">
                                    <input type="text" name="subject" id="subject" class="form-control" placeholder="Your Subject*" />
                                </div>
                                <div class="form-group mb-20">
                                    <textarea name="message" class="form-control" id="message" rows="3" placeholder="Your Question*"></textarea>
                                </div>
                                <div class="input-checkbox mb-20">
                                    <input type="checkbox" id="contact1">
                                    <label for="contact1">
                                        Accept 
                                        <router-link to="/terms-of-service">Terms of Service</router-link> 
                                        and 
                                        <router-link to="/privacy-policy">Privacy Policy</router-link>
                                    </label>
                                </div>
                                <div class="form-button">
                                    <button class="btn main-btn full-width" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm'
}
</script>