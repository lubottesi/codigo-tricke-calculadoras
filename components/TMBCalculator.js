function TMBCalculator() {
    try {
        const [gender, setGender] = React.useState('feminino');
        const [age, setAge] = React.useState('');
        const [weight, setWeight] = React.useState('');
        const [height, setHeight] = React.useState('');
        const [activityLevel, setActivityLevel] = React.useState('1.55');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateTMB = () => {
            if (!age || !weight || !height) return;
            
            const ageNum = parseFloat(age);
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height);
            const activityNum = parseFloat(activityLevel);
            
            if (ageNum <= 0 || weightNum <= 0 || heightNum <= 0) {
                alert('Por favor, insira valores válidos');
                return;
            }

            let tmb;
            if (gender === 'feminino') {
                tmb = 655 + (9.6 * weightNum) + (1.8 * heightNum) - (4.7 * ageNum);
            } else {
                tmb = 66 + (13.7 * weightNum) + (5 * heightNum) - (6.8 * ageNum);
            }

            const dailyCalories = (tmb * activityNum).toFixed(0);
            setResult(dailyCalories);
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="tmb-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de TMB</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="tmb-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="tmb-gender-input">
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

                <div className="input-group" data-name="tmb-age-input">
                    <label htmlFor="age">Idade:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Digite sua idade"
                    />
                </div>

                <div className="input-group" data-name="tmb-weight-input">
                    <label htmlFor="weight">Peso (kg):</label>
                    <input
                        type="number"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="Digite seu peso"
                    />
                </div>

                <div className="input-group" data-name="tmb-height-input">
                    <label htmlFor="height">Altura (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Digite sua altura"
                    />
                </div>

                <div className="input-group" data-name="tmb-activity-input">
                    <label htmlFor="activity">Nível de Atividade:</label>
                    <select
                        id="activity"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option value="1.55">Leve</option>
                        <option value="1.84">Moderada</option>
                        <option value="2.2">Intensa</option>
                    </select>
                </div>

                <button 
                    className="calculator-button"
                    onClick={calculateTMB}
                    data-name="tmb-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="tmb-result">
                        <p>Seu gasto calórico diário:</p>
                        <p className="result-value">{result} calorias</p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="tmb-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre a TMB</h3>
                            <p className="mb-4">A Taxa Metabólica Basal (TMB) é a quantidade mínima de energia que seu corpo necessita para manter as funções vitais em repouso.</p>
                            <p className="mb-4">
                                <strong>Níveis de Atividade:</strong><br />
                                Leve: Exercícios leves 1-3 vezes por semana<br />
                                Moderada: Exercícios moderados 3-5 vezes por semana<br />
                                Intensa: Exercícios intensos 6-7 vezes por semana
                            </p>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="tmb-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('TMBCalculator component error:', error);
        reportError(error);
        return null;
    }
}
