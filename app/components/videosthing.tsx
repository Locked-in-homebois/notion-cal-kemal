

export default function Videofmonkey() {
    return (
        <video
            className="w-220 h-auto object-cover transform-gpu flex items-center justify-self-center rounded-[12]" autoPlay loop muted playsInline preload="auto"
        >
            <source src="/monkeyvideo.mp4" type="video/mp4" />
        </video>

    )
}