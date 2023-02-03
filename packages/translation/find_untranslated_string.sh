#!/bin/bash
RED='\033[0;31m'  # Red
if grep __STRING_NOT_TRANSLATED__ locales/*.json ; then 
  echo -e "${RED}Found untranslated string in locales/*.json"
  exit 1; 
fi