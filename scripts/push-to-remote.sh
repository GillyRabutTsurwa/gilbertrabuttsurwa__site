#!/bin/bash
# Functions
timestamp() {
    date +"at %H:%M:%S on %m/%d/%Y"
}

export GIT_SSH_COMMAND="ssh -i /home/rabuttsurwa96/.ssh/id_github"
echo "Committing & Pushing to Remote"
cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/website/
git add .
git commit --message "Regular Auto-Commit $(timestamp)"
git push