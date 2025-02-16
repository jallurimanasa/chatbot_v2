export const findBestMatch = (input: string, knowledgeBase: KnowledgeEntry[]): KnowledgeEntry | null => {
  if (!input.trim() || knowledgeBase.length === 0) return null;

  const normalizedInput = input.toLowerCase();
  const words = normalizedInput.split(/\s+/);

  // Find all entries that match at least one keyword
  const matches = knowledgeBase
    .map(entry => ({
      entry,
      score: words.reduce((acc, word) => 
        acc + entry.keywords.some(keyword => 
          keyword.toLowerCase() === word || word.includes(keyword.toLowerCase()) || keyword.toLowerCase().includes(word)
        ) ? 1 : 0
      , 0)
    }))
    .filter(match => match.score > 0); // Keep only meaningful matches

  // Sort by score (highest keyword match wins)
  matches.sort((a, b) => b.score - a.score);

  return matches.length > 0 ? matches[0].entry : null;
};
