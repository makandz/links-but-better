# Links (but better)

This project will turn your ugly GitHub and Jira links into insightful masterpieces.

**Before:**  
A raw URL  
https://github.com/owner/repo/pull/123  

**After:**  
:git_pr: My Cool Feature (123)

## Features

This bookmarklet (or Arc Boost) works on GitHub pull requests and Jira tickets. When you click the bookmark or Boost button it will generate the following formats:

**GitHub**

```
:git_pr: {PR_NAME} ({PR_ID})
```

**Jira**

```
:jira: ({JIRA_ID}) {JIRA_TITLE}
```

### Supported Browsers

All major browsers that offer bookmark support will work. Arc removed its bookmark bar, so a separate version that uses Arc Boosts is included.

## How to Install

### For Browsers with a Bookmark Bar

1. Make sure your browser’s bookmark bar is always enabled (for example, in Chrome press `Cmd` + `Shift` + `B`).
2. Open the `jira` or `github` folder and copy the contents of `bookmark.js`.
3. Create a new bookmark in your browser and give it any name you like (for example, “Copy Jira/GitHub”).
4. In the URL field, paste the entire script, making sure it begins with `javascript:`.

Now when you visit a GitHub PR or a Jira ticket, clicking that bookmark will automatically copy the formatted link to your clipboard.

### For Arc Browser

Arc uses Boosts instead of bookmarks:

1. Navigate to the script page you want (for example, the GitHub version).
2. Click the Boosts icon at the right of the address bar and choose “New Boost.”
3. Select **Code** › **JS**, then paste in the contents of `arc-boost.js` from the corresponding folder.
4. Reload the page. A new button will appear:
   - On Jira, it shows up near the ticket ID.
   - On GitHub, it appears above the reviewer assignment field.

Click the Boost button to copy the formatted link.
