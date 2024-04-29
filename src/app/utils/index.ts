export const convertMarkupToHTML = (markup: string): string => {
  // Converts headers
  markup = markup.replace(/(?:^|\n)## (.+)/g, '<h2>$1</h2>');
  markup = markup.replace(/(?:^|\n)# (.+)/g, '<h1>$1</h1>');

  // Converts bold text
  markup = markup.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Converts italic text
  markup = markup.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Converts links
  markup = markup.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  return markup;
};
