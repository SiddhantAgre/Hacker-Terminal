let text = [
  "Reading your files",
  "Password files Detected",
  "Sending all passwords and personal files to the server",
  "Cleaning up",
  "System Cleared",
];

async function main() {
  async function addItem(text) {
    await randomDelay();
    const div = document.createElement("div");
    div.innerText = text;
    document.body.appendChild(div);
  }

  function randomDelay() {
    return new Promise((resolve, reject) => {
      const timeout = 1 + 5 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 1000);
    });
  }

  const t = setInterval(() => {
    let last = document.getElementsByTagName("div");
    last = last[last.length - 1];
    if (last.innerText.endsWith("...")) {
      last.innerText = last.innerText.slice(0, last.innerText.length - 3);
    } else {
      last.innerText = last.innerText + ".";
    }
  }, 100);

  for (item of text) {
    await addItem(item);
  }
  clearInterval(t);
}
main();
