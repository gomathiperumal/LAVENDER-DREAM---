import { useEffect, useState } from "react";

// ==============================
// ANIME IMAGES
// ==============================

import mikeyAnime from "./mikey_anime.jpg";
import leviAnime from "./levi_anime.jpg";
import sukunaAnime from "./sukuna_anime.png";
import kushinaAnime from "./kushina_anime.jpg";
import valdigoAnime from "./valdigo_anime.jpg";
import luffyAnime from "./luffy_anime.jpg";
import aiyonokojiAnime from "./aiyonokoji_anime.jpg";
import tojiAnime from "./toji_anime.jpg";
import sangaviPhoto from "./sangavi.jpeg";

// ==============================
// COUNTDOWN
// ==============================

const TARGET_DATE = new Date(
  "2026-08-20T00:00:00+05:30"
).getTime();

// Keep TRUE while testing.
// Change to FALSE before the final midnight surprise.
const TEST_MODE = false;

// ==============================
// ANIME DATA
// ==============================

const animeImages = [
  {
    image: mikeyAnime,
    name: "Mikey",
  },
  {
    image: leviAnime,
    name: "Levi",
  },
  {
    image: sukunaAnime,
    name: "Sukuna",
  },
  {
    image: kushinaAnime,
    name: "Kushina",
  },
  {
    image: valdigoAnime,
    name: "Valdigo",
  },
  {
    image: luffyAnime,
    name: "Luffy",
  },
  {
    image: aiyonokojiAnime,
    name: "Aiyonokoji",
  },
  {
    image: tojiAnime,
    name: "Toji",
  },
];

// ==============================
// REMAINING TIME
// ==============================

function getRemainingTime() {
  const difference = TARGET_DATE - Date.now();

  if (difference <= 0) {
    return {
      finished: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    finished: false,

    days: Math.floor(
      difference / (1000 * 60 * 60 * 24)
    ),

    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),

    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),

    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

// ==============================
// APP
// ==============================

function App() {
  const [time, setTime] = useState(
    getRemainingTime()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ==============================
  // BIRTHDAY REVEAL
  // ==============================

  if (time.finished || TEST_MODE) {
    return <BirthdayReveal />;
  }

  // ==============================
  // COUNTDOWN PAGE
  // ==============================

  return (
    <main className="birthday-page">

      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="stars">
        ✦　·　✧　　·　✦　　·　✧　　·　✦
      </div>

      <div className="moon">
        ☾
      </div>

      <div className="petal petal-one">
        🪻
      </div>

      <div className="petal petal-two">
        🪻
      </div>

      <div className="petal petal-three">
        🪻
      </div>

      <section className="content">

        <p className="eyebrow">
          ✦ A LITTLE SURPRISE FOR YOU ✦
        </p>

        <h1>
          Something Special
          <span>
            Is Waiting For You
          </span>
        </h1>

        <div className="divider">
          ───── ✦ ─────
        </div>

        <p className="countdown-title">
          YOUR SURPRISE BEGINS IN
        </p>

        <div className="countdown">

          <TimeBox
            value={time.days}
            label="DAYS"
          />

          <TimeBox
            value={time.hours}
            label="HOURS"
          />

          <TimeBox
            value={time.minutes}
            label="MINUTES"
          />

          <TimeBox
            value={time.seconds}
            label="SECONDS"
          />

        </div>

        <div className="waiting">
          🪻 WAIT FOR IT...
        </div>

        <p className="birthday-date">
          August 20 • 12:00 AM
        </p>

      </section>

    </main>
  );
}

// ==============================
// TIME BOX
// ==============================

function TimeBox({ value, label }) {
  return (
    <div className="time-box">

      <strong>
        {String(value).padStart(2, "0")}
      </strong>

      <small>
        {label}
      </small>

    </div>
  );
}

// ==============================
// BIRTHDAY REVEAL
// ==============================

function BirthdayReveal() {

  return (
    <main className="reveal-page">

      {/* ==============================
          BACKGROUND GLOW
      ============================== */}

      <div className="reveal-glow"></div>

      {/* ==============================
          SPARKLES
      ============================== */}

      <div className="confetti">

        <div className="sparkle-field">

          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>
          <span>✦</span>
          <span>✧</span>

        </div>

        ✨　🪻　✦　💜　✧　🪻　✨　✦

      </div>

      {/* ==============================
          FALLING LAVENDER PETALS
      ============================== */}

      <div className="petal-rain">

        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>
        <span>🪻</span>

      </div>

      <section className="reveal-content">

        {/* ==============================
            BIRTHDAY HEADING
        ============================== */}

        <p className="reveal-small">
          TODAY IS YOUR SPECIAL DAY
        </p>

        <h1 className="birthday-title">
          HAPPY BIRTHDAY
        </h1>

        <h2>
          💜 SANGAVI 💜
        </h2>

        {/* ==============================
            PHOTO
        ============================== */}

        <div className="photo-frame">

          <img
            src={sangaviPhoto}
            alt="Sangavi"
            className="birthday-photo"
          />

        </div>

        {/* ==============================
            BIRTHDAY MESSAGE
        ============================== */}

        <p className="birthday-message">

          Dear Sangavi, 💜

          <br />
          <br />

          May this beautiful new chapter of your life
          be filled with endless happiness, unforgettable
          memories, genuine smiles, and all the dreams
          you've been wishing for.

          <br />
          <br />

          You deserve every beautiful moment today
          and always. Keep smiling, keep shining,
          and never stop being the wonderful person you are. 🪻✨

        </p>

        <div className="reveal-line">
          🪻 ✦ 🪻 ✦ 🪻
        </div>

        {/* ==============================
            ANIME UNIVERSE
        ============================== */}

        <section className="anime-universe">

          <p className="anime-small">
            ✦ HER FAVOURITE UNIVERSE ✦
          </p>

          <h3 className="anime-title">
            🌌 Her Anime Universe 💜
          </h3>

          <p className="anime-subtitle">
            A little world filled with the characters she loves.
          </p>

          <div className="anime-gallery">

            {animeImages.map((anime, index) => (

              <div
                className="anime-card"
                key={anime.name}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >

                <img
                  src={anime.image}
                  alt={anime.name}
                />

                <div className="anime-name">
                  {anime.name}
                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ==============================
            FINAL DECORATION
        ============================== */}

        <div className="reveal-line">
          💜 ✦ 🪻 ✦ 💜 ✦ 🪻 ✦ 💜
        </div>
        {/* ==============================
    BIRTHDAY LETTER
============================== */}

<section className="birthday-letter">

  <div className="letter-glow"></div>

  <p className="letter-small">
    ✦ A LITTLE LETTER FOR YOU ✦
  </p>

  <h3 className="letter-title">
    💌 To Someone Special
  </h3>

  <div className="letter-card">

    <div className="letter-decoration">
      🪻 ✦ 🪻
    </div>

    <p>
      Dear Sangavi, 💜
    </p>

    <p>
      Today is more than just another birthday.
      It is a celebration of the wonderful person
      you are and all the beautiful moments waiting
      for you ahead.
    </p>

    <p>
      May this new chapter bring you endless
      happiness, peaceful days, beautiful memories,
      and countless reasons to smile. ✨
    </p>

    <p>
      May you achieve everything you dream of,
      meet wonderful people along the way,
      and always have the courage to follow
      your heart.
    </p>

    <p>
      Keep smiling, keep shining, and always
      stay the amazing person you are. 🪻
    </p>

    <p className="letter-ending">
      Wishing you a beautiful birthday
      and an even more beautiful year ahead. 💜
    </p>

    <div className="letter-signature">
      With lots of love &amp; wishes 💜
    </div>

    <div className="letter-decoration">
      ✦ 🪻 ✦ 🪻 ✦
    </div>

  </div>

</section>s

      </section>

    </main>
  );
}

export default App;
