echo "DOG PROGRAM GOING. IS THERE A DOG? $1" 

if [ $1 = 'true' ]
then
echo "dog is there. this is true"
mv /home/runner/wharf-dogs/cur/picture.jpg /home/runner/wharf-dogs/yes
fi

if [ $1 = 'false' ]
then
echo 'the dog is not there'
mv /home/runner/wharf-dogs/cur/picture.jpg /home/runner/wharf-dogs/old
fi

