document.addEventListener("DOMContentLoaded", () => {
  let loading = 1;
  const duration = 5000;
  const max = 100;
  const intervalTime = duration / max;
  const biteIds = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  const numBites = biteIds.length;
  const biteTime = Math.floor(max / numBites);
  let bitesTaken = 0;

  setInterval(() => {
    if (loading <= max) {
      if (loading === biteTime * (bitesTaken + 1)) {
        document.getElementById(biteIds[bitesTaken]).style.opacity = '1';
        bitesTaken++;
      }
      loading++;
    } else {
      biteIds.forEach(id => {
        document.getElementById(id).style.opacity = '0';
      });
      loading = 0;
      bitesTaken = 0;
    }
  }, intervalTime);
});
