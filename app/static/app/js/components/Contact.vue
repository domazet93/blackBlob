<template>
    <div id="contact">
        <div class="row text-center">
            <div class="col-md-4 col-md-offset-4">
                <navigation></navigation>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-md-12 ">
                        <h2>Contact</h2>
                        <div class="row">
                            <div class="col-md-4 contact-body">
                                <div class="alert alert-danger" v-if="isInvalidForm">
                                    <span>Form is not valid</span>
                                </div>
                                <label for="subject">Subject</label>
                                <input type="text" name="subject" id="subject" v-model="formData.subject">

                                <label for="fullname">Fullname</label>
                                <input type="text" name="fullname" id="fullname" v-model="formData.name">

                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="formData.email">
                            </div>
                            <div class="col-md-8 contact-body">
                                <label for="message">Message</label>
                                <textarea  name="message" id="message" rows="9" v-model="formData.msg"></textarea>
                            </div>
                        </div>
                 </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 contact-body">
                <input type="button" class="btn" value="Get in touch" @click="onSubmit()">
            </div>
        </div>
    </div>
</template>

<script>
    import Navigation from "@/components/Navigation";
    import emailValidator from "@/shared/emailValidator";
    export default {
        name: "contact",
        data() {
            return {
                formData: {
                    subject: "",
                    fullname: "",
                    email: "",
                    msg: ""
                },
                emailValidator,
                isInvalidForm: false
            };
        },
        methods: {
            onSubmit() {
                // if(this.checkIsValidForm()) {

                // }
                this.$http.post("http://127.0.0.1:8000/contact/",
                    {
                        subject: "heeey",
                        fullname: "fdgdf dfbvgdf",
                        email: "toni@gmail.gom",
                        text: "ikivnvdf dfbv "
                    }
                );


            },
            // checkIsValidForm() {
            //     if(this.formData.fullname.length < 2) {
            //         return this.isInvalidForm = true;
            //     }
            //     if(emailValidator(this.formData.email) === null) {
            //         return this.isInvalidForm = true;
            //     }
            //     this.isInvalidForm = false;
            // }
        },
        components: {
            Navigation
        }

    };
</script>
