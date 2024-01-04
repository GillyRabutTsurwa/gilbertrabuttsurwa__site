#!/bin/bash
# Functions
timestamp() {
    date +"at %H:%M:%S on %d/%m/%Y"
}

cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/gilbertrabuttsurwa.com/frontend


if [ "$(git diff --exit-code)" ]
then
    echo "You have some unstaged changes to add"
    git status --porcelain
elif [ "$(git diff --staged --exit-code)" ]
then
    echo "You have some staged changes to commit"
    sleep 5s
    eval $(ssh-agent -s)
    echo "Adding SSH Key to agent to authorise push through this script"
    ssh-add /home/rabuttsurwa96/.ssh/key_github
    echo "Creating auto-commit"
    git commit --message "Scheculed Maintainence Auto-Commit @ $(timestamp)"
    git push origin master
elif [ "$(git rev-list --count --right-only @{u}...HEAD)" -gt 0 ]
then
    echo "Your local branch is $(git rev-list --count --right-only @{u}...HEAD) commits ahead of the remote branch"
    sleep 5s
    echo "Pushing to master"
    git push origin master
else
    echo "Your working tree is clean... for now"
fi

# could be improved, but this code works very well for me
