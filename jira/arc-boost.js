document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const breadcrumbSelector = "div.aui-page-header-main > ol";

    const breadcrumbList = document.querySelector(breadcrumbSelector) || document.querySelector("#issuekey-val");
    const ticketIdElem = document.querySelector("#issuekey-val") || document.querySelector("#key-val");
    const ticketTitleElem = document.querySelector("#summary-val");

    if (breadcrumbList && ticketIdElem && ticketTitleElem && !document.querySelector("#copy-ticket-info")) {
      const ticketId = ticketIdElem.innerText;
      const ticketTitle = ticketTitleElem.innerText;
      const jiraUrl = `https://jira.ets.mpi-internal.com/browse/${ticketId}`;

      const copyLink = document.createElement("a");
      copyLink.href = "#";
      copyLink.id = "copy-ticket-info";
      copyLink.innerText = "Copy";
      copyLink.className = "issue-link";

      copyLink.addEventListener("click", (event) => {
        event.preventDefault();
        const clipboardData = [
          new ClipboardItem({
            "text/plain": new Blob([ticketTitle], { type: "text/plain" }),
            "text/html": new Blob(
              [`:jira: <a href="${jiraUrl}">(${ticketId}) ${ticketTitle}</a>`],
              { type: "text/html" }
            ),
          }),
        ];

        navigator.clipboard.write(clipboardData).catch(() => {
          alert("Failed to copy to clipboard. Click the page to regain focus and try again.");
        });
      });

      if (breadcrumbList.matches(breadcrumbSelector)) {
        const listItem = document.createElement("li");
        listItem.appendChild(copyLink);
        breadcrumbList.appendChild(listItem);
      } else {
        breadcrumbList.appendChild(document.createElement("span")).innerText = " / ";
        breadcrumbList.appendChild(copyLink);
      }
    }
  });

  observer.observe(document, { childList: true, subtree: true });
});
