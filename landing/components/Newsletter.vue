<template>
    <div class="newsletter-section pt-min-100 pb-100 page-bg page-bg-2 page-bg-overlay">
        <div class="container position-relative">
            <div class="section-title section-title-white">
                <h2>Subscribe For Newsletter</h2>
                <p>Subscribe To Our Newsletter & Stay Updated</p>
            </div>
            <form class="newsletter-form">
                <div class="form-group m-0 newsletter-form">
                    <input type="text" name="EMAIL" id="emails" class="form-control" placeholder="Enter Address*">
                    <button class="btn main-btn" type="submit">Subscribe</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Newsletter'
}
</script>