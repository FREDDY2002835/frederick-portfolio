export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>&copy; {year} Frederick Muhimuzi</span>
        <div className="footer-links">
          <a href="https://github.com/FREDDY2002835" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/fred-rick-63988441b" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:aganzemuhimuzi8@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}