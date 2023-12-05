<template>
    
                 <br/>
            <br/>
             <br/>
             <br/>    
    <v-form @submit.prevent="submitForm">
        <v-app> 
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-text-field      v-model="username" label="Username" dense  :rules="usernameRules" >   </v-text-field> 
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-text-field       dense  type="text" v-model="email" label="Email"  :rules="emailRules" > </v-text-field>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="12" lg="12">
                    <v-text-field       dense  v-model="password" label="Password" type="password" :rules="passwordRules" > </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn type="submit" color="primary">Register</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app>

    </v-form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''//,
          /*  usernameRules: [
                (v) => !!v || 'Username is required',
                (v) => v.length >= 3 || 'Username must be at least 3 characters',
            ],
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                (v) => !!v || 'Password is required',
                (v) => v.length >= 6 || 'Password must be at least 6 characters',
            ], */
        };
    },
    methods: {
        submitForm() {
            // Add your registration logic here
            alert('Registration form submitted');
        },
    },
};
</script>
<style>
.v-input__slot {
  min-height: auto !important;
 display: flex !important;
 align-items: center !important;
 }
</style>