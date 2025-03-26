function IMCCalculator() {
    try {
        const [weight, setWeight] = React.useState('');
        const [height, setHeight] = React.useState('');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateIMC = () => {
            if (!weight || !height) return;
            
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height);
            
            if (weightNum <= 0 || heightNum <= 0) {
                alert('Por favor, insira valores válidos');
                return;
            }

            const imc = weightNum / (heightNum * heightNum);
            let classification = '';

            if (imc < 18.5) classification = 'Abaixo do peso';
            else if (imc < 24.9) classification = 'Peso normal';
            else if (imc < 29.9) classification = 'Sobrepeso';
            else classification = 'Obesidade';

            setResult({ imc: imc.toFixed(2), classification });
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="imc-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de IMC</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="imc-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="imc-weight-input">
                    <label htmlFor="weight">Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Digite seu peso"
                    />
                </div>

                <div className="input-group" data-name="imc-height-input">
                    <label htmlFor="height">Altura (m):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Digite sua altura"
                        step="0.01"
                    />
                </div>

                <button 
                    className="calculator-button"
                    onClick={calculateIMC}
                    data-name="imc-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="imc-result">
                        <p>Seu IMC: <span className="result-value">{result.imc}</span></p>
                        <p>Classificação: <span className="result-value">{result.classification}</span></p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="imc-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre o IMC</h3>
                            <p className="mb-4">O Índice de Massa Corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
                            <p className="mb-4">
                                <strong>Classificação:</strong><br />
                                {'Abaixo do peso: IMC < 18.5'}<br />
                                {'Peso normal: 18.5 ≤ IMC < 24.9'}<br />
                                {'Sobrepeso: 25.0 ≤ IMC < 29.9'}<br />
                                {'Obesidade: IMC ≥ 30.0'}
                            </p>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="imc-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('IMCCalculator component error:', error);
        reportError(error);
        return null;
    }
}
