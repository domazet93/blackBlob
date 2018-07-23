<template>
    <div class="container">
        <div class="text-center">
            <div class="">
                <navigation></navigation>
            </div>
        </div>
        <div class="contact content">
            <div class="p1">
                <div class="">
                    <h2>Contact</h2>
                </div>
            </div>
            <div class="flex">
                <div class="flex flex-wrap--wrap flex--1 p1">
                    <label for="subject">Subject</label>
                    <input type="text" name="subject" id="subject" v-model="formData.subject">

                    <label for="fullname">Fullname</label>
                    <input type="text" name="fullname" id="fullname" v-model="formData.fullname">

                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="formData.email">
                
                    <div style="width: 100%" class="flex mt-1">
                        <input type="button" class="btn" :class="{ 'mr-1': isLoading }" value="Get in touch" @click="onSubmit()">
                        <img src="~images/loading.svg" v-if="isLoading" class="flex--1" >
                    </div>
                    
                    <div v-if="isError" class="error alert mt-1 p1">
                        <p>Something goes wrong. Check your form again!</p>
                        <a href="#" class="close-btn" @click.prevent="isError=false"><img src="~images/close.svg"></a>
                    </div>
                    <div v-if="isSuccessMail" class="success alert mt-1">
                        <p>Mail sent successfully. We will be in touch shortly!</p>
                        <a href="#" class="close-btn" @click.prevent="isSuccessMail=false"><img src="~images/close.svg"></a>
                    </div>
                </div>
                <div class="flex flex-wrap--wrap flex--2 flex-direction--column p1">
                    <label for="msg">Message</label>
                    <textarea name="msg" id="msg" rows="9" class="flex--1" v-model="formData.msg"></textarea>
                </div>
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
                isError: false,
                isSuccessMail: false,
                URLstring: "",
                isLoading: false
            };
        },
        methods: {
            onSubmit() {
                this.isError = false;
                this.isSuccessMail = false;

                this.isLoading = true;
                if(process.env.NODE_ENV === "development") {
                    this.URLstring = `${config.ROOT_URL}:${config.PORT}`;
                } else if(process.env.NODE_ENV === "production") {
                    this.URLstring = config.ROOT_URL;
                }


                this.$http.post(`${ this.URLstring }/contact/`, this.formData)
                .then(res => {
                    this.isSuccessMail = true;
                    this.isLoading = false;
                })
                .catch(err => {
                    this.isError = true;
                    this.isLoading = false;
                });
            }
        },
        components: {
            Navigation
        }

    };
</script>
