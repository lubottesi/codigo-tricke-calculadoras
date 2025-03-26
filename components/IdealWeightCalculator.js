function IdealWeightCalculator() {
    try {
        const [gender, setGender] = React.useState('feminino');
        const [height, setHeight] = React.useState('');
        const [frame, setFrame] = React.useState('medio');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateIdealWeight = () => {
            if (!height) {
                alert('Por favor, insira sua altura');
                return;
            }

            const heightCm = parseFloat(height);
            let baseWeight;

            // Using the Robinson formula (1983)
            if (gender === 'feminino') {
                baseWeight = 49 + 1.7 * ((heightCm - 152.4) / 2.54);
            } else {
                baseWeight = 52 + 1.9 * ((heightCm - 152.4) / 2.54);
            }

            // Adjust for frame size
            let finalWeight;
            switch (frame) {
                case 'pequeno':
                    finalWeight = baseWeight * 0.9;
                    break;
                case 'grande':
                    finalWeight = baseWeight * 1.1;
                    break;
                default:
                    finalWeight = baseWeight;
            }

            setResult({
                ideal: finalWeight.toFixed(1),
                range: {
                    min: (finalWeight * 0.95).toFixed(1),
                    max: (finalWeight * 1.05).toFixed(1)
                }
            });
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="ideal-weight-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de Peso Ideal</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="ideal-weight-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="ideal-weight-gender-input">
                    <label htmlFor="gender">Sexo:</label>
                    <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="feminino">Feminino</option>
                        <option value="masculino">Masculino</option>
                    </select>
                </div>

                <div className="input-group" data-name="ideal-weight-height-input">
                    <label htmlFor="height">Altura (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Digite sua altura"
                    />
                </div>

                <div className="input-group" data-name="ideal-weight-frame-input">
                    <label htmlFor="frame">Estrutura Corporal:</label>
                    <select
                        id="frame"
                        value={frame}
                        onChange={(e) => setFrame(e.target.value)}
                    >
                        <option value="pequeno">Pequena</option>
                        <option value="medio">Média</option>
                        <option value="grande">Grande</option>
                    </select>
                </div>

                <button 
                    className="calculator-button"
                    onClick={calculateIdealWeight}
                    data-name="ideal-weight-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="ideal-weight-result">
                        <p>Peso Ideal:</p>
                        <p className="result-value">{result.ideal} kg</p>
                        <p className="text-sm text-gray-600">
                            Faixa saudável: {result.range.min} - {result.range.max} kg
                        </p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="ideal-weight-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre o Peso Ideal</h3>
                            <p className="mb-4">O cálculo do peso ideal é baseado na fórmula de Robinson (1983) e leva em consideração sua altura, sexo e estrutura corporal.</p>
                            <p className="mb-4">
                                <strong>Estrutura Corporal:</strong>
                                <ul className="list-disc pl-5">
                                    <li>Pequena: Ossos finos, pulsos e tornozelos delgados</li>
                                    <li>Média: Estrutura óssea média</li>
                                    <li>Grande: Ossos largos, estrutura robusta</li>
                                </ul>
                            </p>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="ideal-weight-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('IdealWeightCalculator component error:', error);
        reportError(error);
        return null;
    }
}
