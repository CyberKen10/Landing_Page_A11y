// Form handling module
export class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }

    init() {
        if (!this.form) return;

        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupValidation();
    }

    handleSubmit(e) {
        e.preventDefault();

        // Basic validation
        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = '#dc3545';
                isValid = false;
            } else {
                field.style.borderColor = '#e9ecef';
            }
        });

        if (isValid) {
            // Here would go the logic to send the form
            alert('¡Gracias por tu interés! Te contactaremos pronto con más información sobre A11i Detector.');

            // Reset the form
            this.form.reset();
        } else {
            alert('Por favor, completa todos los campos obligatorios.');
        }
    }

    setupValidation() {
        const formInputs = this.form.querySelectorAll('input, select, textarea');

        formInputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.style.borderColor = '#dc3545';
                } else {
                    input.style.borderColor = '#e9ecef';
                }
            });

            input.addEventListener('focus', () => {
                input.style.borderColor = '#0066cc';
            });
        });
    }
}
