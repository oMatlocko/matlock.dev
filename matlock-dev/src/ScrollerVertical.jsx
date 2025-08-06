function ScrollerVertical() {

  const items = ["matlock.dev", "➤➤", "homepage", "➤➤", "under contruction", "➤➤","coming soon", "➤➤", "stay tuned", "➤➤"];

  return (
    <div className="scroller-vertical">
      <div className="scroller-vertical-content">
        {items.concat(items).map((item, index) => (
          <div key={index} className="scroller-vertical-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollerVertical;