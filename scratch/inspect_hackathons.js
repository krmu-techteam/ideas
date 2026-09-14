async function printHackathonCardFull() {
  const res = await fetch('https://hackindia.org/_next/static/chunks/1usnb1qe_1ssq.js');
  const txt = await res.text();
  const idx = txt.indexOf('className:"group flex h-full flex-col overflow-hidden rounded-[6px]');
  console.log(txt.substring(idx - 500, idx + 4000));
}
printHackathonCardFull().catch(console.error);
