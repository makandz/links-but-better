# Links (but better)

This project will turn your ugly GitHub and Jira links into insightful masterpieces.

**Before:**  
A raw URL  
https://github.com/owner/repo/pull/123  

**After:**  
:git_pr: My Cool Feature

## Features

This bookmarklet (or Arc Boost) works on GitHub pull requests and Jira tickets. When you click the bookmark or Boost button it will generate the following formats:

**GitHub**

```
:git_pr: {PR_NAME}
```

**Jira**

```
:jira_1: ({JIRA_ID}) {JIRA_TITLE}
```

Depending on your Jira version, both self-hosted (legacy) and cloud-hosted Jira instances are supported.

### Supported Browsers

All major browsers that offer bookmark support will work. Arc removed its bookmark bar, so a separate version that uses Arc Boosts is included.

**Note:** Jira Cloud currently only supports Chrome bookmarks. Arc Boost support coming soon!

## How to Install

### For Browsers with a Bookmark Bar

1. Make sure your browser's bookmark bar is always enabled (for example, in Chrome press `Cmd` + `Shift` + `B`).
2. Choose the folder for your needs:
   - `github` - For GitHub pull requests
   - `jira-legacy` - For self-hosted Jira instances (older versions)
   - `jira-cloud` - For Jira Cloud
3. Open the folder and copy the contents of `bookmark.js`.
4. Create a new bookmark in your browser and give it any name you like (for example, "Copy Jira/GitHub").
5. In the URL field, paste the entire script, making sure it begins with `javascript:`.

Now when you visit a GitHub PR or a Jira ticket, clicking that bookmark will automatically copy the formatted link to your clipboard.

### For Arc Browser

Arc uses Boosts instead of bookmarks:

1. Navigate to the script page you want (for example, the GitHub version).
2. Click the Boosts icon at the right of the address bar and choose "New Boost."
3. Select **Code** › **JS**, then paste in the contents of `arc-boost.js` from the corresponding folder.
   - **Available for:** `github` and `jira-legacy` only
   - **Jira Cloud:** Arc Boost is not supported.. yet.
4. Reload the page. A new button will appear:
   - On Jira, it shows up near the ticket ID.
   - On GitHub, it appears above the reviewer assignment field.

Click the Boost button to copy the formatted link.
