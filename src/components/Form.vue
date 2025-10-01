<template>
    <form ref="form" @submit.prevent="handleSubmit">
        <div class="form-input">
            <label>
                nombre
            </label>
            <input type="text" v-model="formData.firstName" />
            <span class="error" v-if="!isValidFirstName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                apellido
            </label>
            <input type="text" v-model="formData.lastName" />
            <span class="error" v-if="!isValidLastName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                email
            </label>
            <input type="text" v-model="formData.email" />
            <span v-if="!isValidEmail" class="error">Please enter a valid email</span>

        </div>
        <fieldset class="form-input">

            <div class="radio-container">
                <div class="radio">
                    <input type="radio" id="info" value="info" v-model="formData.razon" />
                    <label for="info">quiero info</label>
                </div>

                <div class="radio">
                    <input type="radio" id="estar" value="estar" v-model="formData.razon" />
                    <label for="estar">quiero estar</label>
                </div>

            </div>

        </fieldset>

        <div class="form-input">
            <label for="algo">cuentanos algo</label>

            <textarea id="algo" name="algo" rows="5" cols="33" v-model="formData.text"></textarea>
        </div>


        <button type="submit" :disabled="!isFormValid">go</button>

    </form>
</template>


<script setup lang="ts">
import { reactive, computed, ref } from 'vue';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    razon: string;
    text: string;
}

const formData = reactive<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    razon: '',
    text: ''
});


const isValidFirstName = () => formData.firstName.length > 0;
const isValidLastName = () => formData.lastName.length > 0;
const isValidEmail = () => {
    // Simple email validation regex
    const email = formData.email;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
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
    gap: 0.5rem;
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

input,
textarea {
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

fieldset {
    border: none;
}

.radio {
    display: flex;

    input {
        width: auto;
        margin-right: 1rem;
        margin-bottom: 0;
    }
}

.radio-button {
    width: auto;
    margin-right: 16px;
}

.error {
    color: #b00020;
    font-size: 0.9rem;
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