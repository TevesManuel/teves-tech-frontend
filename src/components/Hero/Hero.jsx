import { useEffect, useRef } from "preact/hooks";
import "./Hero.css";

export default function Hero() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);

    useEffect(() => {
        if (!vantaRef.current) return;

        // esperar a que VANTA exista (CDN)
        if (window.VANTA) {
            effectRef.current = window.VANTA.NET({
                el: vantaRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color: 0x3fb1ff,
                backgroundColor: 0x0,
                points: 17,
                maxDistance: 24
            });
        }

        return () => {
            effectRef.current?.destroy();
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
