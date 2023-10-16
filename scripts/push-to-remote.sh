#!/bin/bash
cd .
git add .
timestamp() {
    date +"at %H:%M:%S on %m/%d/%Y"
}
git commit --message "Regular Auto-Commit $(timestamp)"
git push origin master