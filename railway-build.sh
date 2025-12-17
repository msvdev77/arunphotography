#!/bin/bash
set -e

echo "Installing Git LFS..."
curl -s https://packagecloud.io/install/repositories/github/git-lfs/script.deb.sh | bash
apt-get install -y git-lfs

echo "Fetching LFS files..."
git lfs install
git lfs pull

echo "Installing dependencies..."
npm ci

echo "Building application..."
npm run build

echo "Build complete!"
