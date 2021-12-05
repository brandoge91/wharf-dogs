#!/bin/bash

menu_option_one() {
  node js/databaseUtils --wipe
}

menu_option_two() {
  node js/databaseUtils.js --forceadd
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
  echo "    	1  -  Wipe Database"
  echo "    	2  -  Force Add Dog"
  echo "    	0  -  Back"
  echo ""
  echo -n "  Enter selection: "
  read selection
  echo ""
  case $selection in
    1 ) clear ; menu_option_one ; press_enter ;;
    2 ) clear ; menu_option_two ; press_enter ;;
    0 ) clear ; exit ;;
    * ) clear ; incorrect_selection ; press_enter ;;
  esac
done