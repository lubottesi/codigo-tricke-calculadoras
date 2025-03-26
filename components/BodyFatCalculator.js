function BodyFatCalculator() {
    try {
        const [gender, setGender] = React.useState('feminino');
        const [waist, setWaist] = React.useState('');
        const [neck, setNeck] = React.useState('');
        const [height, setHeight] = React.useState('');
        const [hip, setHip] = React.useState('');
        const [result, setResult] = React.useState(null);
        const [showInfo, setShowInfo] = React.useState(false);

        const calculateBodyFat = () => {
            if (!waist || !neck || !height || (gender === 'feminino' && !hip)) {
                alert('Por favor, preencha todos os campos');
                return;
            }

            const waistNum = parseFloat(waist);
            const neckNum = parseFloat(neck);
            const heightNum = parseFloat(height);
            const hipNum = parseFloat(hip);

            let bodyFat;
            if (gender === 'feminino') {
                bodyFat = 495 / (1.29579 - 0.35004 * Math.log10(waistNum + hipNum - neckNum) + 
                          0.22100 * Math.log10(heightNum)) - 450;
            } else {
                bodyFat = 495 / (1.0324 - 0.19077 * Math.log10(waistNum - neckNum) + 
                          0.15456 * Math.log10(heightNum)) - 450;
            }

            setResult(bodyFat.toFixed(1));
        };

        return (
            <div className="calculator-container max-w-md mx-auto" data-name="bodyfat-calculator">
                <div className="flex items-center justify-center mb-6">
                    <h2 className="calculator-title">Calculadora de Gordura Corporal</h2>
                    <button 
                        className="info-button"
                        onClick={() => setShowInfo(true)}
                        data-name="bodyfat-info-button"
                    >
                        ?
                    </button>
                </div>

                <div className="input-group" data-name="bodyfat-gender-input">
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

                <div className="input-group" data-name="bodyfat-waist-input">
                    <label htmlFor="waist">Cintura (cm):</label>
                    <input
                        type="number"
                        id="waist"
                        value={waist}
                        onChange={(e) => setWaist(e.target.value)}
                        placeholder="Medida da cintura"
                    />
                </div>

                <div className="input-group" data-name="bodyfat-neck-input">
                    <label htmlFor="neck">Pescoço (cm):</label>
                    <input
                        type="number"
                        id="neck"
                        value={neck}
                        onChange={(e) => setNeck(e.target.value)}
                        placeholder="Medida do pescoço"
                    />
                </div>

                <div className="input-group" data-name="bodyfat-height-input">
                    <label htmlFor="height">Altura (cm):</label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        placeholder="Sua altura"
                    />
                </div>

                {gender === 'feminino' && (
                    <div className="input-group" data-name="bodyfat-hip-input">
                        <label htmlFor="hip">Quadril (cm):</label>
                        <input
                            type="number"
                            id="hip"
                            value={hip}
                            onChange={(e) => setHip(e.target.value)}
                            placeholder="Medida do quadril"
                        />
                    </div>
                )}

                <button 
                    className="calculator-button"
                    onClick={calculateBodyFat}
                    data-name="bodyfat-calculate-button"
                >
                    Calcular
                </button>

                {result && (
                    <div className="result" data-name="bodyfat-result">
                        <p>Percentual de Gordura Corporal:</p>
                        <p className="result-value">{result}%</p>
                    </div>
                )}

                {showInfo && (
                    <div>
                        <div className="info-modal-backdrop" onClick={() => setShowInfo(false)} />
                        <div className="info-modal" data-name="bodyfat-info-modal">
                            <h3 className="text-xl font-bold mb-4">Sobre o Cálculo de Gordura Corporal</h3>
                            <p className="mb-4">Este método usa a Fórmula da Marinha dos EUA para estimar o percentual de gordura corporal.</p>
                            <p className="mb-4">
                                <strong>Classificação (Homens):</strong><br />
                                Essencial: 2-5%<br />
                                Atlético: 6-13%<br />
                                Fitness: 14-17%<br />
                                Aceitável: 18-24%<br />
                                Obesidade: 25%+
                            </p>
                            <p className="mb-4">
                                <strong>Classificação (Mulheres):</strong><br />
                                Essencial: 10-13%<br />
                                Atlético: 14-20%<br />
                                Fitness: 21-24%<br />
                                Aceitável: 25-31%<br />
                                Obesidade: 32%+
                            </p>
                            <button 
                                className="calculator-button"
                                onClick={() => setShowInfo(false)}
                                data-name="bodyfat-info-close-button"
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    } catch (error) {
        console.error('BodyFatCalculator component error:', error);
        reportError(error);
        return null;
    }
}
