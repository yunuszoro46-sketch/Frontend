#!/bin/bash

# Initialize Frontend Repository Structure
# This script creates all required directories and README files

set -e

echo "🚀 Initializing Frontend repository structure..."

# Define modules
modules=(
  "00-frontend-content-index"
  "01-web-dev-fundamentals"
  "02-html-crash-course"
  "03-css-crash-course"
  "04-javascript-crash-course"
  "05-react-crash-course"
  "06-interview-questions"
  "07-frontend-quiz"
)

# Descriptions for each module
declare -A descriptions=(
  ["00-frontend-content-index"]="Central index and navigation guide for all frontend learning modules"
  ["01-web-dev-fundamentals"]="Foundational concepts of web development and the modern web ecosystem"
  ["02-html-crash-course"]="Quick comprehensive guide to HTML5 markup and semantic elements"
  ["03-css-crash-course"]="Intensive CSS training covering layouts, flexbox, grid, and responsive design"
  ["04-javascript-crash-course"]="Core JavaScript fundamentals, ES6+ features, and async programming"
  ["05-react-crash-course"]="React essentials including components, hooks, state management, and best practices"
  ["06-interview-questions"]="Curated frontend technical interview questions and solution approaches"
  ["07-frontend-quiz"]="Interactive quizzes and assessments for self-evaluation"
)

# Create directories and README files
for module in "${modules[@]}"; do
  mkdir -p "$module"
  
  # Extract readable name from directory name
  readable_name=$(echo "$module" | sed 's/^[0-9]*-//' | sed 's/-/ /g' | sed 's/\b\(.\)/\U\1/g')
  
  # Create README.md with content
  cat > "$module/README.md" << EOF
# $readable_name

## Overview
${descriptions[$module]}

## Contents
- [ ] Add content here

## Learning Objectives
- [ ] Define learning goals

## Resources
- [ ] Add references and resources

## Notes
Add your notes and key takeaways here.
EOF
  
  echo "✅ Created: $module/ with README.md"
done

echo ""
echo "✨ Repository structure initialized successfully!"
echo ""
echo "Directory structure:"
tree -L 1 -d 2>/dev/null || find . -maxdepth 1 -type d -name "[0-9]*" | sort

echo ""
echo "📝 Next steps:"
echo "1. Review each README.md file"
echo "2. Add content to each module"
echo "3. Update the main README.md in the repository root"
echo "4. Commit the changes: git add . && git commit -m 'Initialize repository structure'"
