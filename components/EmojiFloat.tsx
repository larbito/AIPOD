export function EmojiFloat() {
  const emojis = ['📚', '🧠', '🎨', '👕', '✨', '🖨️', '🧩', '🖍️', '📘']
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {emojis.map((e, i) => (
        <span
          key={i}
          className="absolute text-3xl md:text-5xl opacity-30 dark:opacity-20 animate-float"
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${i * 0.6}s`,
          }}
        >{e}</span>
      ))}
    </div>
  )
}
