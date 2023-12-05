<!-- form.vue -->

<template>
    <div>
        <b-form @submit.prevent="handleSubmit">
            <b-form-group id="form-group-1" label="Username:" label-for="username">
                <b-form-input id="username" v-model="username" type="text" required
                    placeholder="Enter your username"></b-form-input>
            </b-form-group>

            <!-- Add more form fields as needed -->

            <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            // Add more data properties for other form fields
        };
    },
    methods: {
        handleSubmit() {
            // Handle form submission here
            console.log('Form submitted!');
        },
    },
};
</script>

<!-- Include BootstrapVue via CDN  -->

<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap@4.6.0/dist/css/bootstrap.css"
/>
<link
  type="text/css"
  rel="stylesheet"
  href="https://unpkg.com/bootstrap-vue@2.21.2/dist/bootstrap-vue.css"
/>
