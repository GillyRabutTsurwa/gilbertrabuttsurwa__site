#!/bin/bash
cd /home/rabuttsurwa96/Web Development/Projects/Personal/My Sites --gsm/Submodule Dev Environments/website/
git add .
timestamp() {
    date +"at %H:%M:%S on %m/%d/%Y"
}
git commit --message "Regular Auto-Commit $(timestamp)"
git push origin master