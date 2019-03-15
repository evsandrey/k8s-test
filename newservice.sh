cp -r boilerplate/ $1
sed -i "s/boilerplate/$1/g" $1/config.sh