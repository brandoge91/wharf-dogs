#!/bin/bash

menu_option_one() {
  export GOOGLE_APPLICATION_CREDENTIALS='/home/runner/wharf-dogs/config.json' && node index.js picture.jpg
}

menu_option_two() {
  node index.js
}

menu_option_three() {
  export GOOGLE_APPLICATION_CREDENTIALS='/home/runner/wharf-dogs/config.json' && node index.js picture.jpg --debug
}

menu_option_four() {
  sh bash/db.sh
}

press_enter() {
  echo ""
  echo -n "	Press Enter to Go Back "
  read
  clear
}

incorrect_selection() {
  echo "Incorrect selection! Try again."
}

until [ "$selection" = "0" ]; do
  clear
  echo ""
  echo "    	1  -  Start Analyzation Process"
  echo "    	2  -  View Dogs"
  echo "    	3  -  Start Debug Session"
  echo "    	4  -  Database Configuration"
  echo "    	0  -  Quit"
  echo ""
  echo -n "  Enter selection: "
  read selection
  echo ""
  case $selection in
    1 ) clear ; menu_option_one ; press_enter ;;
    2 ) clear ; menu_option_two ; press_enter ;;
    3 ) clear ; menu_option_three ; press_enter ;;
    4 ) clear ; menu_option_four ;;
    0 ) clear ; exit ;;
    * ) clear ; incorrect_selection ; press_enter ;;
  esac
done