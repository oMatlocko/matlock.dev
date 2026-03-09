import styles from './ScrollerVertical.module.css';

function ScrollerVertical({ label, repeat = 6 }) {

  const items = ["matlock.dev", "➤➤", label, "➤➤"];

  // repeat the items `repeat` times
  const repeatedItems = Array.from({ length: repeat }, () => items).flat();


  return (
    <div className={styles.scrollerVertical}>
      <div className={styles.scrollerVerticalContent}>
        {repeatedItems.map((item, index) => {
          // only the first set should be read by screen readers
          const isCopy = index >= items.length;
          return (
            <div
              key={index}
              className={styles.scrollerVerticalItem}
              aria-hidden={isCopy ? "true" : undefined}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollerVertical;