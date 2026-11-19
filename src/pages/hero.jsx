import MaskedHeading from "../components/maskedheading.jsx";
import forestVideo from "../assets/media-originals/forestVideo.mp4";

function Hero() {
    return (
        <section id="hero" className="flex min-h-screen min-w-screen flxe-col items-center justify-center">
            <MaskedHeading
                text="Early warning. From above."
                mediaType="video"
                src={forestVideo}
                poster="/reel-poster.jpg"
                fillScale={1.25}
                parallax={26}
                reveal="scale"
                trigger="view"
                spotlight={false}
                spotlightRadius={180}
                outline={false}
                duration={1.1}
                stagger={0.09}
                drift={18}
                hoverZoom={0}
                align="center"
                brightness={1}
                saturation={1}
                grayscale={false}
                outlineWidth={1}
                weight={700}
                tracking={-0.03}
                lineHeight={1.06}
                textScale={0.115}
            />
        </section>
    )
}

export default Hero;