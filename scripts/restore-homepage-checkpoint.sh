#!/usr/bin/env bash
# Restore homepage hero to the pre-mobile-3D-restructure checkpoint.
# Tag: checkpoint/homepage-before-mobile-3d-restructure
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"
git fetch origin tag checkpoint/homepage-before-mobile-3d-restructure
git checkout checkpoint/homepage-before-mobile-3d-restructure -- components/HeroSection.tsx
echo "Restored components/HeroSection.tsx from checkpoint/homepage-before-mobile-3d-restructure"
echo "Review, commit, and deploy when ready."
