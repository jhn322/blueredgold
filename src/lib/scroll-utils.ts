// Centraliserad konfiguration för applikationens navbar-höjd
export const NAVBAR_HEIGHT = 86; // Exakt höjd från Navbar-komponenten (h-[86px])

/**
 * Scrollar till ett element på sidan med hänsyn till fixed navbar
 * 
 * @param elementId - ID på elementet att scrolla till (med eller utan #)
 * @param offset - Extra offset utöver navbar-höjden (default: 0)
 * @param smooth - Om scrollningen ska vara animerad (default: true)
 */
export function scrollToElement(elementId: string, offset = 0, smooth = true) {
  // Säkerställ att elementId börjar med #
  const selector = elementId.startsWith('#') ? elementId : `#${elementId}`;

  const element = document.querySelector(selector);

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - NAVBAR_HEIGHT - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }
}

/**
 * Kontrollerar om ett element är synligt i viewporten
 * 
 * @param element - Element att kontrollera 
 * @param offset - Extra offset utöver navbar-höjden (default: 0)
 * @returns boolean - true om elementet är synligt
 */
export function isElementInView(element: Element, offset = 0): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= NAVBAR_HEIGHT + offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Scroll till toppen av sidan med hänsyn till animering
 * 
 * @param smooth - Om scrollningen ska vara animerad (default: true)
 */
export function scrollToTop(smooth = true): void {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  });
} 