function WaterCalculator() {
    try {
        const [weight, setWeight] = React.useState('');
        const [activity, setActivity] = React.useState('1.2');
        const [climate, setClimate] = React.useState('1');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateWater = () => {
            if (!weight) {
                alert('Por favor, insira seu peso');
                return;
            }

            const weightNum = parseFloat(weight);
            const activityNum = parseFloat(activity);
            const climateNum = parseFloat(climate);

            // Base calculation: 35ml per kg of body weight
            const baseWater = weightNum * 35;
            // Adjust for activity level and climate
            const totalWater = (baseWater * activityNum * climateNum).toFixed(0);
            
            setResult(totalWater);
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="water-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de Água</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="water-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="water-weight-input">
                    <label htmlFor="weight">Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Digite seu peso"
                    />
                </div>

                <div className="input-group" data-name="water-activity-input">
                    <label htmlFor="activity">Nível de Atividade:</label>
                    <select
                        id="activity"
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                    >
                        <option value="1.2">Sedentário</option>
                        <option value="1.3">Levemente Ativo</option>
                        <option value="1.4">Moderadamente Ativo</option>
                        <option value="1.5">Muito Ativo</option>
                        <option value="1.6">Extremamente Ativo</option>
                    </select>
                </div>

                <div className="input-group" data-name="water-climate-input">
                    <label htmlFor="climate">Clima:</label>
                    <select
                        id="climate"
                        value={climate}
                        onChange={(e) => setClimate(e.target.value)}
                    >
                        <option value="1">Temperado</option>
                        <option value="1.1">Quente</option>
                        <option value="1.2">Muito Quente</option>
                    </select>
                </div>

                <button 
                    className="calculator-button"
                    onClick={calculateWater}
                    data-name="water-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="water-result">
                        <p>Consumo diário recomendado de água:</p>
                        <p className="result-value">{result}ml</p>
                        <p className="text-sm text-gray-600">({(result/1000).toFixed(1)} litros)</p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="water-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre o Consumo de Água</h3>
                            <p className="mb-4">O cálculo é baseado no seu peso e ajustado de acordo com seu nível de atividade física e clima.</p>
                            <p className="mb-4">
                                <strong>Fatores que aumentam a necessidade de água:</strong>
                                <ul className="list-disc pl-5">
                                    <li>Exercício físico intenso</li>
                                    <li>Clima quente</li>
                                    <li>Altitude elevada</li>
                                    <li>Dieta rica em proteínas</li>
                                </ul>
                            </p>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="water-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('WaterCalculator component error:', error);
        reportError(error);
        return null;
    }
}
