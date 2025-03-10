export default function Topbar() {
    return (
      <header>
        <a href="/" className="logo">
          <span className="logo-icon">📚</span>
          <span>stydyRival</span>
        </a>
        <div className="auth-buttons">
          <a href="/login" className="button-outline no-margin">ログイン</a>
          <a href="/signup" className="button-primary">新規登録</a>
        </div>
      </header>
    )
}