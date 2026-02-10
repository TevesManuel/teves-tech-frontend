import { useEffect, useRef } from "preact/hooks";
import "./Hero.css";

export default function Hero() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        if (!vantaRef.current) return;

        if (window.VANTA) {
            // Detectamos si es mobile para reducir la carga visual
            const isMobile = window.innerWidth < 768;

            effectRef.current = window.VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3fb1ff,
                backgroundColor: 0x0,
                // --- AJUSTES PARA MOBILE ---
                points: isMobile ? 17 : 17, // Menos puntos en mobile
                maxDistance: isMobile ? 15 : 24, // Distancia más corta para que no se crucen tanto
                spacing: isMobile ? 15 : 15, // Más espacio entre puntos si usas otras variantes
            });
        }

        // Opcional: Resize handler para que Vanta se entere si giras el celu
        const handleResize = () => {
            if (effectRef.current) {
                effectRef.current.resize();
            }
        };
        window.addEventListener('resize', handleResize);

        return () => {
            if (effectRef.current) effectRef.current.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            id="home"
            ref={vantaRef}   // ← correcto
            style={{
                width: "100%",
                height: "100vh"
            }}
        >
            <div className="HeroTextContainer">
                <h1 style={{width: "100%", margin: 0}}>INNOVAMOS <br /><b style={{
                    background: "linear-gradient(90deg, #568ecb, #6cb9e5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>EL MANAÑA</b>, HOY.</h1>
                <h3 style={{margin: 0}}>Soluciones de software y hardware que impulsan el crecimiento de tu negocio.</h3>
                <a href="https://tvs.ar/wsp"><button className="HeroStartButton">EMPEZAR</button></a>
            </div>
        </div>
    );
}
