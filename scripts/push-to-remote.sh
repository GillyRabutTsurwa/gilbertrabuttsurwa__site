#!/bin/bash
# Functions
timestamp() {
    date +"at %H:%M:%S on %d/%m/%Y"
}

eval $(ssh-agent -s)
ssh-add /home/rabuttsurwa96/.ssh/key_github
echo "Initiating Auto Staging & Committing"
cd /home/rabuttsurwa96/Web\ Development/Projects/Personal/My\ Sites\ --gsm/Submodule\ Dev\ Environments/website/
git add .
git commit --message "Scheculed Auto-Commit $(timestamp)"
git push origin master