javascript: (() => {
  const ticketIdElement =
    document.querySelector("#issuekey-val") ||
    document.querySelector("#key-val");
  const ticketTitleElement = document.querySelector("#summary-val");

  if (!ticketIdElement || !ticketTitleElement) {
    alert(
      "Could not find the ticket ID and/or title. Ensure you're on the Jira ticket page."
    );
    return;
  }

  const ticketId = ticketIdElement.innerText;
  const ticketTitle = ticketTitleElement.innerText;
  const jiraUrl = `https://jira.ets.mpi-internal.com/browse/${ticketId}`;

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
    alert(
      "Failed to copy to clipboard. Click the page to regain focus and try again."
    );
  });
})();
