export default function Footer() {

    const currentYear = new Date().getFullYear()
    
    return (
        <footer>
          <div className="container footer-inner">
            <span>@ {currentYear} Rabia Portfolio</span>
            <span>Build with next.js APP Router</span>
          </div>
        </footer>
    )
}