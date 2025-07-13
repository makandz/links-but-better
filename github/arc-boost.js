document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const prTitleElement = document.querySelector(
      ".js-issue-title.markdown-title"
    );
    const prIdElement = document.querySelector(
      "bdi.js-issue-title.markdown-title + span"
    );
    const firstDivInSidebar = document.querySelector(
      "#partial-discussion-sidebar div"
    );

    if (
      prTitleElement &&
      firstDivInSidebar &&
      prTitleElement.innerText &&
      !document.querySelector("#copy-pr-info")
    ) {
      const prTitle = prTitleElement.innerText;
      const prId = prIdElement?.innerText ?? "#????";

      const copyLink = document.createElement("a");
      copyLink.href = "#";
      copyLink.id = "copy-pr-info";
      copyLink.innerText = "Copy PR Info";
      copyLink.style.display = "block";
      copyLink.style.marginBottom = "10px";
      copyLink.className =
        "text-bold discussion-sidebar-heading discussion-sidebar-toggle hx_rsm-trigger";

      copyLink.addEventListener("click", (event) => {
        event.preventDefault();
        const clipboardData = [
          new ClipboardItem({
            "text/plain": new Blob([window.location.href], {
              type: "text/plain",
            }),
            "text/html": new Blob(
              [
                `:git_pr: <a href="${window.location.href}">${prTitle} (${prId})</a>`,
              ],
              { type: "text/html" }
            ),
          }),
        ];

        navigator.clipboard.write(clipboardData).catch(() => {
          alert(
            "Failed to copy to clipboard. Click the page to regain focus and try again."
          );
        });
      });

      firstDivInSidebar.insertBefore(copyLink, firstDivInSidebar.firstChild);
    }
  });

  observer.observe(document, { childList: true, subtree: true });
});
