export default function renderLink(text, href) {
    const link = document.createElement('a');
    link.href = href;
    link.textContent = text;
    return link;
  }
  