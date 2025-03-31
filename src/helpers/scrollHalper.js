export default function scrollToElement(elementRef, setState) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.boundingClientRect.top <= window.innerHeight) {
          elementRef.current.classList.add("about-me-section");
          setState(true);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(elementRef.current);

  return () => {
    if (elementRef.current) {
      observer.unobserve(elementRef.current);
    }
  };
}
