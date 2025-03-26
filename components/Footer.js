function Footer() {
    try {
        return (
            <footer className="footer" data-name="footer">
                <p data-name="footer-copyright">© 2024 GoFit. Todos os direitos reservados.</p>
                <p data-name="footer-info">Calculadoras fitness para seu bem-estar</p>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
