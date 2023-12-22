#!/bin/bash
# Functions
timestamp() {
    date +"at %H:%M:%S on %d/%m/%Y"
}


if [ "$(git diff --exit-code)" ]
then
    echo "You have some unstaged changes to add"
elif [ "$(git diff --staged --exit-code)" ]
then 
    echo "You have some staged changes to commit"
    sleep 5s
    eval $(ssh-agent -s)
    ssh-add /home/rabuttsurwa96/.ssh/key_github
    cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/gilbertrabuttsurwa.com/frontend
    git commit --message "Scheculed Auto-Commit $(timestamp)"
    git push origin master  
elif [ "$(git rev-list --count --right-only @{u}...HEAD)" -gt 0 ]
then
    echo "Your local branch is ahead of the remote branch. Push needed."
else
    echo "Your worktree is clean.... for now"
fi