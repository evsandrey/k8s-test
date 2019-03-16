cp -r boilerplate/ $1
sed -i "s/boilerplate/$1/g" $1/config.sh
sed -i "s/boilerplate/$1/g" $1/app/package.json

cp -r _k8s/boilerplate-deployment.yml _k8s/$1-deployment.yml
sed -i "s/boilerplate/$1/g" _k8s/$1-deployment.yml

cp -r _k8s/boilerplate-client-ip-service.yml _k8s/$1-client-ip-service.yml
sed -i "s/boilerplate/$1/g" _k8s/$1-client-ip-service.yml

