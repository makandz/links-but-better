javascript:(() => {
  const h1 =
    document.querySelector('h1[data-component="PH_Title"]') ||
    document.querySelector(".prc-PageHeader-Title-p0Mgh");

  const prTitle = h1?.querySelector("span.markdown-title")?.innerText?.trim();
  if (!prTitle) {
    alert("Failed to copy. Ensure you're on the GitHub PR page. If it's still not working, see if there's an update to the bookmarklet.");
    return;
  }

  const url = window.location.href;

  const clipboardData = [
    new ClipboardItem({
      "text/plain": new Blob([url], { type: "text/plain" }),
      "text/html": new Blob(
        [`:git_pr: <a href="${url}">${prTitle}</a>`],
        { type: "text/html" }
      ),
    }),
  ];

  navigator.clipboard.write(clipboardData).catch(() => {
    alert("Failed to copy to clipboard. Click the page to regain focus and try again.");
  });
})();
