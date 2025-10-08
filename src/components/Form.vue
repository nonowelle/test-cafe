<template>
    <form ref="form" @submit.prevent="handleSubmit">
        <div class="form-input">
            <label>
                {{ currentContent.form.name }}
            </label>
            <input type="text" v-model="formData.firstName" @blur="validateEmail" />
            <span class="error" v-if="!isValidFirstName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                {{ currentContent.form.lastName }}
            </label>
            <input type="text" v-model="formData.lastName" />
            <span class="error" v-if="!isValidLastName">This field is required</span>

        </div>
        <div class="form-input">
            <label>
                {{ currentContent.form.email }}
            </label>
            <input type="text" v-model="formData.email" @blur="validateEmail" />
            <span v-if="!isValidEmail" class="error">Please enter a valid email</span>

        </div>
        <fieldset class="form-input">

            <div class="radio-container">
                <div class="radio">
                    <input type="radio" id="info" value="info" v-model="formData.razon" />
                    <label for="info">{{ currentContent.form.info }}</label>
                </div>

                <div class="radio">
                    <input type="radio" id="estar" value="estar" v-model="formData.razon" />
                    <label for="estar">{{ currentContent.form.estar }}</label>
                </div>

            </div>

        </fieldset>

        <div class="form-input">
            <label for="algo">{{ currentContent.form.algo }}</label>

            <textarea id="algo" name="algo" rows="5" cols="33" v-model="formData.text"></textarea>
        </div>


        <button type="submit" :disabled="!isFormValid || submitting">{{ submitting ? 'sending…' : 'go' }}</button>
        <p v-if="submitOk" style="margin: 0.5rem 0; color: var(--color-links);">Thanks! We received your request.</p>
        <p v-if="submitError" class="error">Something went wrong. Please try again.</p>

    </form>
</template>


<script setup lang="ts">
import { reactive, computed, ref } from 'vue';
import { useLanguage } from '@/composables/useLanguage';
const { currentContent } = useLanguage();

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
let isValidEmail = ref(true);

const isValidFirstName = () => formData.firstName.length > 0;

const validateEmail = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        isValidEmail.value = true;
    } else {
        isValidEmail.value = false;
    }
}
const isValidLastName = () => formData.lastName.length > 0;

const isValidReason = () => formData.razon !== null;
const isFormValid = computed(() => isValidFirstName() && isValidLastName() && isValidEmail() && isValidReason());

const validateForm = () => {
    console.log('validating form')
}

const submitting = ref(false);
const submitOk = ref(false);
const submitError = ref(false);

const handleSubmit = async () => {
    validateForm();
    if (!isFormValid.value || submitting.value) return;

    submitting.value = true;
    submitOk.value = false;
    submitError.value = false;

    try {
        const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
        console.log(JSON.stringify(formData))

        const res = await fetch(`${baseUrl}/form`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (!res.ok) throw new Error('Request failed');
        submitOk.value = true;
        // optional: reset form fields
        // Object.assign(formData, { firstName: '', lastName: '', email: '', razon: '', text: '' });
    } catch (e) {
        submitError.value = true;
    } finally {
        submitting.value = false;
    }
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
    text-align: left;
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
    scroll-snap-align: center;

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