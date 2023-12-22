#!/bin/bash
# Functions
timestamp() {
    date +"at %H:%M:%S on %d/%m/%Y"
}

eval $(ssh-agent -s)
ssh-add /home/rabuttsurwa96/.ssh/key_github

if [ "$(git diff --exit-code)" ]
then
    echo "You have some changes to add"
elif [ "$(git diff --staged --exit-code)" ]
then 
    echo "You have some staged changes to commit"
    sleep 5s
    cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/gilbertrabuttsurwa.com/frontend
    git commit --message "Scheculed Auto-Commit $(timestamp)"
    git push origin master  
else
    echo "Your worktree is clean.... for now"
fi




# echo "Initiating Auto Staging & Committing"
# cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/website/
# git add .
# git commit --message "Scheculed Auto-Commit $(timestamp)"
# git push origin master