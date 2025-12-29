// Language selector module
export class LanguageSelector {
    constructor(selectorId) {
        this.select = document.getElementById(selectorId);
        this.label = document.getElementById('languageSelectorLabel');
        this.liveRegion = document.querySelector('[aria-live]');
        this.init();
    }

    init() {
        if (!this.select) return;

        // Set initial state
        this.updateLabels();

        this.select.addEventListener('change', (e) => this.handleLanguageChange(e));
    }

    handleLanguageChange(e) {
        const selectedLang = e.target.value;

        // Update labels and live region
        this.updateLabels();

        // Announce change to screen readers
        if (this.liveRegion) {
            this.liveRegion.textContent = `Idioma cambiado a ${selectedLang === 'es' ? 'Español' : 'Inglés'}`;
        }

        // Here would go the logic to change the language
        // For now just log the selection
        console.log(`Idioma cambiado a: ${selectedLang}`);

        // In a real implementation, here we would load translations
        // and update the page content
    }

    updateLabels() {
        const currentLang = this.select.value;
        const langText = currentLang === 'es' ? 'Español' : 'Inglés';

        // Update label text
        if (this.label) {
            this.label.textContent = `Selector de idioma. Idioma actual: ${langText}`;
        }
    }
}
