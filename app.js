function App() {
    try {
        const [activeCalculator, setActiveCalculator] = React.useState(null);

        const renderCalculator = () => {
            switch (activeCalculator) {
                case 'imc':
                    return <IMCCalculator />;
                case 'protein':
                    return <ProteinCalculator />;
                case 'tmb':
                    return <TMBCalculator />;
                case 'bodyfat':
                    return <BodyFatCalculator />;
                case 'water':
                    return <WaterCalculator />;
                case 'idealweight':
                    return <IdealWeightCalculator />;
                default:
                    return (
                        <div className="text-center mt-8 p-8 backdrop-blur rounded-lg" data-name="welcome-message">
                            <h2 className="text-3xl font-bold text-white mb-4">Escolha uma Calculadora para Começar</h2>
                            <p className="text-white text-lg mb-8">
                                Conheça nossas ferramentas e escolha a que mais atende às suas necessidades de saúde e bem-estar
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                                {renderFeatureCard(
                                    'IMC',
                                    'Avalie se seu peso está adequado para sua altura',
                                    'fas fa-weight'
                                )}
                                {renderFeatureCard(
                                    'Proteína',
                                    'Calcule sua necessidade diária de proteína',
                                    'fas fa-drumstick-bite'
                                )}
                                {renderFeatureCard(
                                    'TMB',
                                    'Descubra seu gasto calórico diário',
                                    'fas fa-fire'
                                )}
                                {renderFeatureCard(
                                    'Gordura Corporal',
                                    'Calcule seu percentual de gordura corporal',
                                    'fas fa-percentage'
                                )}
                                {renderFeatureCard(
                                    'Água',
                                    'Calcule sua necessidade diária de água',
                                    'fas fa-tint'
                                )}
                                {renderFeatureCard(
                                    'Peso Ideal',
                                    'Descubra seu peso ideal',
                                    'fas fa-balance-scale'
                                )}
                            </div>
                        </div>
                    );
            }
        };

        const renderFeatureCard = (title, description, icon) => (
            <div 
                className="p-6 backdrop-blur rounded-lg border border-white border-opacity-20
                         hover:border-opacity-50 transition-all cursor-pointer"
                onClick={() => setActiveCalculator(title.toLowerCase().replace(' ', ''))}
                data-name={`feature-card-${title.toLowerCase().replace(' ', '')}`}
            >
                <i className={`${icon} text-4xl text-white mb-4`}></i>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-white text-opacity-80">{description}</p>
            </div>
        );

        return (
            <div className="min-h-screen" data-name="app-container">
                <Navigation />
                
                <main className="container mx-auto px-4 py-8" data-name="main-content">
                    <CalculatorMenu onSelect={setActiveCalculator} />
                    
                    <div className="mt-8" data-name="calculator-content">
                        {renderCalculator()}
                    </div>
                </main>
                
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

// Initialize the app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
