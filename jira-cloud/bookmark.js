javascript: (() => {
  const ticketIdElement = document.querySelector(
    'a[data-testid="issue.views.issue-base.foundation.breadcrumbs.current-issue.item"]'
  );

  const ticketTitleElement = document.querySelector(
    'h1[data-testid="issue.views.issue-base.foundation.summary.heading"]'
  );

  if (!ticketIdElement || !ticketTitleElement) {
    alert(
      "Could not find the ticket ID and/or title. Ensure you're on the Jira ticket page."
    );
    return;
  }

  const ticketId = ticketIdElement.innerText;
  const ticketTitle = ticketTitleElement.innerText;
  const jiraUrl = `${window.location.origin}/browse/${ticketId}`;

  const clipboardData = [
    new ClipboardItem({
      "text/plain": new Blob([ticketTitle], { type: "text/plain" }),
      "text/html": new Blob(
        [`:jira_1: <a href="${jiraUrl}">(${ticketId}) ${ticketTitle}</a>`],
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
