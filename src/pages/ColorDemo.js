import { useState } from 'react';

export default function ColorDemo() {
    const greenRGB = 'rgb(0, 128, 0)';
    const redRGB = 'rgb(255, 0, 0)';
    const [backgroundColor, setBackgroundColor] = useState(greenRGB);

    const handleColorChange = () => {
        setBackgroundColor(prevColor => prevColor === greenRGB ? redRGB : greenRGB);
    };

    return (
        <div
            data-testid="colorDemoContainer"
            style={{
                backgroundColor: backgroundColor,
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <button
                data-testid="changeColorButton"
                onClick={handleColorChange}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Change Color
            </button>
        </div>
    );
} 