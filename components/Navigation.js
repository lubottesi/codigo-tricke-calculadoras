function Navigation() {
    try {
        return (
            <nav className="navbar" data-name="navigation">
                <div className="nav-container">
                    <a href="/" className="nav-logo" data-name="nav-logo">
                        <img src="https://cdn-icons-png.flaticon.com/512/2936/2936886.png" alt="GoFit Logo" data-name="nav-logo-image" />
                        <span data-name="nav-logo-text">GoFit</span>
                    </a>
                    <ul className="nav-links" data-name="nav-links">
                        <li><a href="/academia" data-name="nav-link-gym">Academia</a></li>
                        <li><a href="/nutricao" data-name="nav-link-nutrition">Nutrição</a></li>
                        <li><a href="/calculadoras" data-name="nav-link-calculators">Calculadoras</a></li>
                        <li><a href="/conteudos" data-name="nav-link-content">Conteúdos</a></li>
                    </ul>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navigation component error:', error);
        reportError(error);
        return null;
    }
}
