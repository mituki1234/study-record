export default function Hero(){
    return (
        <section className="hero">
        <div className="hero-content">
          <h1>勉強時間を記録して<span className="hero-highlight">友達と競い合おう</span></h1>
          <span>studyrivalは勉強時間を簡単に記録し、
            友達とリアルタイムで競争できる新しい学習アプリです。モチベーションを維持し、一緒に成長しましょう
          </span>
        </div>
        <div className="hero-buttons">
          <a href="/signup" className="button-primary no-margin">今すぐ始める</a>
          <a href="/about" className="button-outline">詳細を見る</a>
        </div>
      </section>
    )
}