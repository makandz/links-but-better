document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const h1 =
      document.querySelector('h1[data-component="PH_Title"]') ||
      document.querySelector(".prc-PageHeader-Title-p0Mgh");

    const prTitle = h1?.querySelector("span.markdown-title")?.innerText?.trim();
    const firstDivInSidebar = document.querySelector(
      "#partial-discussion-sidebar div"
    );

    if (
      prTitle &&
      firstDivInSidebar &&
      !document.querySelector("#copy-pr-info")
    ) {
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
