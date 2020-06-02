<template>

    <footer class="footer">
        <div class="upper-footer">
            <div class="footer-item">
                <img alt="location" src="../assets/location.png">
                <h1>آدرس</h1>
                <p>کرج، فلکه اول گوهردشت، دوم ، ساختمات اتیه</p>
            </div>
            <div class="footer-item">
                <img alt="email" src="../assets/email.png">
                <h1>آدرس</h1>
                <p>Info[at]test.com</p>
            </div>
            <div class="footer-item">
                <img alt="phone" src="../assets/phone.png">
                <h1>آدرس</h1>
                <p>+982134606952ه</p>
            </div>

        </div>
        <div class="lower-footer">
            <p >کلیه حقوق مادی و معنوی وبسایت محفوظ ، هرگونه کپی برداری با ذکر منبع بلا مانع میباشد</p>
            <p >Copyright @ 2020 doordis.com allright reserved.</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer{
        background: #2B2B34;
        height: 427px;
        color: #FFFFFF;
    }
    .upper-footer{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 319px;
    }
    .footer-item{
        flex-grow: 3;


    }
    .lower-footer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #24242D;
        height: 108px;
        padding: 0 50px;
    }


</style>