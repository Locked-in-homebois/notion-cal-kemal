

export default function Videofmonkey() {
    return (
        <video
            className="w-220 flex justify-self-center rounded-xl mt-16" autoPlay loop muted playsInline preload="auto"
        >
            <source src="/monkeyvideo.mp4" type="video/mp4" />
        </video>

    )
}