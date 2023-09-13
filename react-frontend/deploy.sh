echo "Switching to master..."
git checkout master


echo "Building application..."
npm run build

echo "Deploying files to server"
scp -r build/* ubuntu@52.91.67.245:/var/www/surfjournal/

echo "Done"



