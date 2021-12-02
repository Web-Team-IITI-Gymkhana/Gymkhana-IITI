## Contributing to Gymkhana Central Website

### Submitting a Pull Request (PR)

1. Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate existing efforts.

2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. 
   Discussing the design upfront helps to ensure that we're ready to accept your work.

3. Fork the Gymkhana-IITI repo.

4. In your forked repository, make your changes in a new git branch:
   - git checkout -b my-fix-branch master

5. Commit your changes using a descriptive commit message that follows our commit message conventions. Adherence to these conventions is 
necessary because release notes are automatically generated from these messages.
   - git commit --all

6. Push your branch to GitHub:
   - git push origin my-fix-branch

7. In GitHub, send a pull request to Gymkhana-IITI:master.

### Reviewing a Pull Request

The central committee in charge of managing the repository reserves the right to accept or reject pull requests 
 
#### Addressing review feedback

1. Make the required updates to the code.

2. Create a fixup commit and push to your GitHub repository (this will update your Pull Request):
	- git commit --all --fixup HEAD
	- git push

#### Updating the commit message

The reviewer might often suggest changes to a commit message. In order to update the commit message of the last commit on your branch:

1. Check out your branch:
	- git checkout my-fix-branch

2. Amend the last commit and modify the commit message:
	- git commit --amend

3. Push to your GitHub repository:
	- git push --force-with-lease


#### After your pull request is merged
After your pull request is merged, you can safely delete your branch and pull the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows
	- git push origin --delete my-fix-branch

- Check out the master branch:
	- git checkout master -f

- Delete the local branch:
	- git branch -D my-fix-branch

- Update your master with the latest upstream version:
	- git pull --ff upstream master