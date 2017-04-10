<template>
    <div id="contact">
        <navigation></navigation>
        <h2>Contact</h2>
        <div class="row">
            <div class="col-md-8 contact-body">
                <div class="alert alert-danger" v-if="isInvalidForm">
                    <span>Form is not valid</span>
                </div>
                <input type="text" name="fullname" placeholder="Fullname" v-model="formData.name">
                <input type="email" placeholder="Email" v-model="formData.email">
                <textarea placeholder="Message" rows="10" v-model="formData.msg"></textarea>
                <input type="button" class="btn" value="Get in touch" @click="onSubmit()">
            </div>
            <div class="col-md-4">
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
                    name: "",
                    email: "",
                    msg: ""
                },
                emailValidator,
                isInvalidForm: false
            };
        },
        methods: {
            onSubmit() {
                this.checkIsValidForm();
            },
            checkIsValidForm() {
                if(this.formData.name.length < 2) {
                    return this.isInvalidForm = true;
                }
                if(emailValidator(this.formData.email) === null) {
                    return this.isInvalidForm = true;
                }
                this.isInvalidForm = false;
            }
        },
        components: {
            Navigation
        }

    };
</script>
