import { useEffect, useMemo, useRef, useState } from "react";

const INTRO_MESSAGES = [
  "Hi RockSan...",
  "Nikuambie kitu?",
  "Of late nimekuwa nikismile sana, sijui mbona",
  "So wacha nikuulize kitu kidogo...",
];

function App() {
  const [stage, setStage] = useState("intro");
  const [introStep, setIntroStep] = useState(0);
  const [textFade, setTextFade] = useState(false);
  const [yesScale, setYesScale] = useState(1);
  const [noPosition, setNoPosition] = useState(null);
  const noBtnRef = useRef(null);
  const successVideoRef = useRef(null);

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${16 + Math.random() * 24}px`,
        delay: `${Math.random() * 12}s`,
        duration: `${11 + Math.random() * 11}s`,
      })),
    [],
  );
  const partyPieces = useMemo(
    () =>
      Array.from({ length: 220 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 0.45}s`,
        duration: `${1.2 + Math.random() * 1.2}s`,
        drift: `${-40 + Math.random() * 80}px`,
        color: ["#ff5d9a", "#facc15", "#22c55e", "#60a5fa", "#ffffff"][
          Math.floor(Math.random() * 5)
        ],
      })),
    [],
  );

  const nextIntroStep = () => {
    setTextFade(true);

    window.setTimeout(() => {
      if (introStep < INTRO_MESSAGES.length - 1) {
        setIntroStep((prev) => prev + 1);
        setTextFade(false);
        return;
      }

      setStage("question");
      setTextFade(false);
    }, 320);
  };

  const dodgeNoButton = () => {
    setYesScale((prev) => Math.min(prev + 0.14, 2.4));

    const noBtn = noBtnRef.current;
    if (!noBtn) return;

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;
    const nextX = Math.max(padding, Math.random() * maxX);
    const nextY = Math.max(padding, Math.random() * maxY);

    setNoPosition({ left: nextX, top: nextY });
  };

  const acceptProposal = () => {
    setStage("success");
  };

  const resetFlow = () => {
    setStage("intro");
    setIntroStep(0);
    setTextFade(false);
    setYesScale(1);
    setNoPosition(null);
  };

  useEffect(() => {
    if (stage !== "success" || !successVideoRef.current) return;

    const video = successVideoRef.current;
    video.muted = false;
    video.volume = 1;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [stage]);

  return (
    <div className="valentine-page">
      <div className="hearts-layer" aria-hidden="true">
        {floatingHearts.map((heart) => (
          <span
            key={heart.id}
            className="float-heart"
            style={{
              left: heart.left,
              fontSize: heart.size,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      {stage === "intro" && (
        <section className="card fade-in">
          <h1 className={`intro-text ${textFade ? "fade-out" : "fade-in"}`}>
            {INTRO_MESSAGES[introStep]}
          </h1>
          //show
          <p className="intro-sub">I have something beautiful to ask you.</p>
          <button type="button" className="primary-btn" onClick={nextIntroStep}>
            Click Me
          </button>
        </section>
      )}

      {stage === "question" && (
        <section className="question-wrap fade-in">
          <div className="hero-heart">❤️</div>
          <h2 className="script-title">Will you be my Valentine?</h2>
          <p className="question-sub">(Nitakununulia ringoz na lollipop 🍭😂)</p>

          <div className="action-row">
            <button
              type="button"
              className="yes-btn"
              style={{ transform: `scale(${yesScale})` }}
              onClick={acceptProposal}
            >
              YES!
            </button>
            <button
              type="button"
              ref={noBtnRef}
              className="no-btn"
              style={
                noPosition
                  ? { position: "fixed", left: noPosition.left, top: noPosition.top }
                  : undefined
              }
              onMouseEnter={dodgeNoButton}
              onClick={dodgeNoButton}
            >
              No
            </button>
          </div>
        </section>
      )}

      {stage === "success" && (
        <>
          <div className="party-layer" aria-hidden="true">
            <span className="party-popper left">🎉</span>
            <span className="party-popper right">🎊</span>
            {partyPieces.map((piece) => (
              <span
                key={piece.id}
                className="party-piece"
                style={{
                  left: piece.left,
                  backgroundColor: piece.color,
                  animationDelay: piece.delay,
                  animationDuration: piece.duration,
                  "--drift": piece.drift,
                }}
              />
            ))}
          </div>

          <section className="card success-card success-video-card fade-in">
            <video
              ref={successVideoRef}
              className="success-video"
              src="/roxy.mp4"
              autoPlay
              loop
              playsInline
              preload="auto"
            />
            <div className="success-video-overlay" />

            <div className="success-content">
              <div className="success-emoji">🥰🎉</div>
              <h2 className="script-title">She said YES!</h2>
              <p className="success-copy">
                Roxy Wanjeeeee, chum chum.
                <br />I love you! ❤️
              </p>
              <button type="button" className="ghost-btn" onClick={resetFlow}>
                Start Again
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default App;
