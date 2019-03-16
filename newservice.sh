cp -r boilerplate/ $1
sed -i "s/boilerplate/$1/g" $1/config.sh
sed -i "s/boilerplate/$1/g" $1/app/package.json

cp -r $1/_k8s/boilerplate-deployment.yml $1/_k8s/$1-deployment.yml
sed -i "s/boilerplate/$1/g" $1/_k8s/$1-deployment.yml

cp -r $1/_k8s/boilerplate-client-ip-service.yml $1/_k8s/$1-client-ip-service.yml
sed -i "s/boilerplate/$1/g" $1/_k8s/$1-client-ip-service.yml

