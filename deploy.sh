#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to GitHub Pages

echo "🚀 Deploying Abdul Basit's Portfolio to GitHub Pages..."

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Error: Not in a git repository"
    echo "Please run this script from your portfolio directory"
    exit 1
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  Warning: You have uncommitted changes"
    read -p "Do you want to commit them? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "📝 Committing changes..."
        git add .
        read -p "Enter commit message: " commit_message
        git commit -m "$commit_message"
    else
        echo "❌ Please commit your changes before deploying"
        exit 1
    fi
fi

# Push to main branch
echo "📤 Pushing to main branch..."
git push origin main

# Check if push was successful
if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub Pages!"
    echo "🌐 Your site will be available at: https://abdulbaaesit.github.io"
    echo "📋 Note: It may take a few minutes for changes to appear"
else
    echo "❌ Deployment failed. Please check your git configuration and try again."
    exit 1
fi

echo "🎉 Deployment complete!"
