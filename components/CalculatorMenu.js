function CalculatorMenu({ onSelect }) {
    try {
        const calculators = [
            { id: 'imc', name: 'IMC' },
            { id: 'protein', name: 'Proteína' },
            { id: 'tmb', name: 'TMB' },
            { id: 'bodyfat', name: 'Gordura' },
            { id: 'water', name: 'Água' },
            { id: 'idealweight', name: 'Peso Ideal' }
        ];

        return (
            <div className="flex flex-wrap justify-center gap-4 mt-32 mb-8" data-name="calculator-menu">
                {calculators.map(calc => (
                    <button
                        key={calc.id}
                        onClick={() => onSelect(calc.id)}
                        className="px-6 py-3 text-white font-bold uppercase rounded-full 
                                 bg-gradient-to-r from-cyan-400 to-blue-500 
                                 hover:from-cyan-500 hover:to-blue-600
                                 transform hover:scale-105 transition-all
                                 shadow-lg hover:shadow-xl"
                        data-name={`calculator-button-${calc.id}`}
                    >
                        {calc.name}
                    </button>
                ))}
            </div>
        );
    } catch (error) {
        console.error('CalculatorMenu component error:', error);
        reportError(error);
        return null;
    }
}
