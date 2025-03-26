function ProteinCalculator() {
    try {
        const [weight, setWeight] = React.useState('');
        const [activityLevel, setActivityLevel] = React.useState('1.2');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateProtein = () => {
            if (!weight || !activityLevel) return;
            
            const weightNum = parseFloat(weight);
            const activityNum = parseFloat(activityLevel);
            
            if (weightNum <= 0) {
                alert('Por favor, insira um peso válido');
                return;
            }

            const proteinPerKg = activityNum;
            const totalProtein = (weightNum * proteinPerKg).toFixed(1);
            
            setResult(totalProtein);
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="protein-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de Proteína</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="protein-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="protein-weight-input">
                    <label htmlFor="weight">Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Digite seu peso"
                    />
                </div>

                <div className="input-group" data-name="protein-activity-input">
                    <label htmlFor="activity">Nível de Atividade:</label>
                    <select
                        id="activity"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option value="1.2">Sedentário</option>
                        <option value="1.4">Leve</option>
                        <option value="1.6">Moderado</option>
                        <option value="1.8">Intenso</option>
                        <option value="2.0">Muito Intenso</option>
                    </select>
                </div>

                <button 
                    className="calculator-button"
                    onClick={calculateProtein}
                    data-name="protein-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="protein-result">
                        <p>Necessidade diária de proteína:</p>
                        <p className="result-value">{result}g</p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="protein-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre o Cálculo de Proteína</h3>
                            <p className="mb-4">A quantidade de proteína necessária varia de acordo com seu nível de atividade física:</p>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Sedentário (1.2g/kg): Pouca ou nenhuma atividade física</li>
                                <li>Leve (1.4g/kg): Exercícios leves 1-3 vezes por semana</li>
                                <li>Moderado (1.6g/kg): Exercícios moderados 3-5 vezes por semana</li>
                                <li>Intenso (1.8g/kg): Exercícios intensos 6-7 vezes por semana</li>
                                <li>Muito Intenso (2.0g/kg): Exercícios muito intensos ou atletas</li>
                            </ul>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="protein-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('ProteinCalculator component error:', error);
        reportError(error);
        return null;
    }
}
