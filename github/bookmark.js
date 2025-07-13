javascript: (() => {
  const prTitle = document.querySelector(
    ".js-issue-title.markdown-title"
  )?.innerText;
  if (!prTitle) {
    alert(
      "Could not find the pull request title. Ensure you're on the GitHub PR page."
    );
    return;
  }

  const prId = document.querySelector('bdi.js-issue-title.markdown-title + span')?.innerText ?? '#????';

  const clipboardData = [
    new ClipboardItem({
      "text/plain": new Blob([window.location.href], { type: "text/plain" }),
      "text/html": new Blob(
        [`:git_pr: <a href="${window.location.href}">${prTitle} (${prId})</a>`],
        { type: "text/html" }
      ),
    }),
  ];

  navigator.clipboard.write(clipboardData).catch(() => {
    alert(
      "Failed to copy to clipboard. Click the page to regain focus and try again."
    );
  });
})();
