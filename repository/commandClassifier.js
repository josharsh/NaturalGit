const natural = require("natural");
const classifier = new natural.BayesClassifier();

//MARK: CLONE
classifier.addDocument("get this repository locally for me", "clone");
classifier.addDocument("dowload the source code", "clone");
classifier.addDocument("get this repository on my system", "clone");
classifier.addDocument("fetch source code to my laptop", "clone");
classifier.addDocument("copy the repository to my local machine", "clone");
classifier.addDocument("duplicate this repository", "clone");
classifier.addDocument("make a local copy of the repository", "clone");
classifier.addDocument("download the repository files", "clone");
classifier.addDocument("get a local copy of the source", "clone");

//MARK: COMMIT
classifier.addDocument("commit the code", "commit");
classifier.addDocument("use git commit", "commit");
classifier.addDocument("save my changes", "commit");
classifier.addDocument("record the changes in the repository", "commit");
classifier.addDocument("save changes to the repository", "commit");
classifier.addDocument("record changes in the version control", "commit");
classifier.addDocument("apply my changes to the repository", "commit");
classifier.addDocument("confirm changes to the repository", "commit");
classifier.addDocument("snapshot changes in the repository", "commit");

//MARK: PUSH
classifier.addDocument("push the code", "push");
classifier.addDocument("push to branch", "push");
classifier.addDocument("send code to remote branch", "push");
classifier.addDocument("push committed code to remote branch", "push");
classifier.addDocument("send changes to the remote repository", "push");
classifier.addDocument("upload code to remote server", "push");
classifier.addDocument("publish changes to the remote branch", "push");
classifier.addDocument("make changes live", "push");
classifier.addDocument("update remote repository with my changes", "push");

//MARK: CHECKOUT
classifier.addDocument("switch branches or restore working tree files", "checkout");
classifier.addDocument("change current branch", "checkout");
classifier.addDocument("use git checkout", "checkout");
classifier.addDocument("switch to another branch", "checkout");
classifier.addDocument("change branch", "checkout");
classifier.addDocument("move to another branch", "checkout");
classifier.addDocument("restore previous state of the branch", "checkout");
classifier.addDocument("revert changes to a previous branch", "checkout");

// //MARK: ADD
// classifier.addDocument("add files to the staging area", "add");
// classifier.addDocument("stage the changes", "add");
// classifier.addDocument("mark changes to be committed", "add");
// classifier.addDocument("prepare changes for commit", "add");
// classifier.addDocument("mark files for commit", "add");
// classifier.addDocument("include changes in next commit", "add");
// classifier.addDocument("add files to next commit", "add");
// classifier.addDocument("include files in the next version", "add");

// //MARK: RESET
// classifier.addDocument("unstage changes", "reset");
// classifier.addDocument("undo changes to the staging area", "reset");
// classifier.addDocument("use git reset", "reset");
// classifier.addDocument("remove changes from staging", "reset");
// classifier.addDocument("unstage changes to the file", "reset");
// classifier.addDocument("remove files from next commit", "reset");
// classifier.addDocument("cancel changes to be committed", "reset");
// classifier.addDocument("remove changes from the index", "reset");

// //MARK: RM
// classifier.addDocument("delete files from the repository", "rm");
// classifier.addDocument("remove files from version control", "rm");
// classifier.addDocument("untrack files", "rm");
// classifier.addDocument("erase files from repository", "rm");
// classifier.addDocument("delete files from git", "rm");
// classifier.addDocument("remove files from working tree and index", "rm");
// classifier.addDocument("delete files from repository", "rm");
// classifier.addDocument("use git rm", "rm");

// //MARK: MV
// classifier.addDocument("rename a file in repository", "mv");
// classifier.addDocument("change file name in repository", "mv");
// classifier.addDocument("move file to another location", "mv");
// classifier.addDocument("update file name", "mv");
// classifier.addDocument("rename file in git", "mv");
// classifier.addDocument("move or rename a file", "mv");
// classifier.addDocument("rename a directory or symlink", "mv");
// classifier.addDocument("use git mv", "mv");

// classifier.addDocument("list, create, or delete branches", "branch");
// classifier.addDocument("manage branches", "branch");
// classifier.addDocument("use git branch", "branch");
// classifier.addDocument("create new branch", "branch");
// classifier.addDocument("list all branches", "branch");
// classifier.addDocument("switch between branches", "branch");

// classifier.addDocument("join two or more development histories together", "merge");
// classifier.addDocument("combine branches", "merge");
// classifier.addDocument("use git merge", "merge");

// classifier.addDocument("reapply commits on top of another base tip", "rebase");
// classifier.addDocument("use git rebase", "rebase");

// classifier.addDocument("apply changes introduced by existing commits", "cherry-pick");
// classifier.addDocument("use git cherry-pick", "cherry-pick");

// classifier.addDocument("download objects and refs from another repository", "fetch");
// classifier.addDocument("get latest code", "fetch");
// classifier.addDocument("use git fetch", "fetch");

// classifier.addDocument("fetch from and integrate with another repository", "pull");
// classifier.addDocument("update local repository with remote", "pull");
// classifier.addDocument("use git pull", "pull");

// classifier.addDocument("manage set of repositories", "remote");

// classifier.addDocument("revert changes", "revert");
// classifier.addDocument("undo changes", "revert");
// classifier.addDocument("use git revert", "revert");

// classifier.addDocument("create a new repository", "init");
// classifier.addDocument("start a new repository", "init");
// classifier.addDocument("use git init", "init");

// classifier.addDocument("list, inspect and manage your version control history", "log");
// classifier.addDocument("use git log", "log");

// classifier.addDocument("show changes between commits, commit and working tree", "diff");
// classifier.addDocument("compare changes", "diff");
// classifier.addDocument("use git diff", "diff");

classifier.train();

module.exports = classifier;
