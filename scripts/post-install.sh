#!/usr/bin/env bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  echo 'INSTALLING MACOS DEPENDENCIES'
  bundle install
  bundle exec pod repo update
  bundle exec pod install --project-directory=ios/
  sh scripts/workaround/ios-rctfont-workaround.sh
fi

if [[ "$CI" != "" ]]; then
  echo 'SETTING UP GOOGLE SECRETS'
  sh travis-ci/restore-secrets.sh
else
  echo 'DO NOT FORGET TO SETUP GOOGLE SECRETS ON BOTH ANDROID AND IOS'
fi
