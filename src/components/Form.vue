<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-input">
            <label>
                First Name
            </label>
            <input type="text" v-model="formData.firstName" />
            <span class="error" v-if="!isValidFirstName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                Last Name
            </label>
            <input type="text" v-model="formData.lastName" />
            <span class="error" v-if="!isValidLastName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                Email
            </label>
            <input type="text" v-model="formData.email" />
            <span v-if="!isValidEmail" class="error">Please enter a valid email</span>

        </div>

        <button type="submit" :disabled="!isFormValid">Submit</button>

    </form>
</template>


<script setup lang="ts">
import { reactive, computed } from 'vue';

interface FormData {
    firstName: string;
    lastName: string;
    email: string
}

const formData = reactive<FormData>({
    firstName: '',
    lastName: '',
    email: ''
});

const isValidFirstName = computed(() => formData.firstName.length > 0);
const isValidLastName = computed(() => formData.lastName.length > 0);
const isValidEmail = computed(() => formData.email.length > 0);
const isFormValid = computed(() => isValidFirstName.value && isValidLastName.value && isValidEmail.value);

const validateForm = () => {

}

const handleSubmit = () => {
    validateForm();
};

</script>

<style scoped lang="scss">
form {
    width: min(700px, 100%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;

}

.form-input {
    display: flex;
    flex-direction: column;

}

label {
    font-size: 1rem;
    color: var(--color-heading);
    font-weight: 500;
}

input {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-bottom: 6px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
    color: #282829;
    outline: none;
    transition: box-shadow 0.2s ease, border-color 0.2s ease, background 0.2s ease;

    &:focus {
        border-color: var(--color-links);
        box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-links) 20%, transparent);
        background: #fff;
    }
}

.error {
    color: #b00020;
    font-size: 0.7rem;
}

button[type="submit"] {
    align-self: flex-start;
    margin-top: 0.5rem;
    padding: 0.7rem 1.25rem;
    border-radius: 999px;
    border: 1px solid transparent;
    background: var(--color-links);
    color: var(--c-white);
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.1s ease, opacity 0.2s ease, background 0.2s ease;
    scroll-snap-align: start;

    &:hover {
        opacity: 0.95;
    }

    &:active {
        transform: translateY(1px);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
}
</style>