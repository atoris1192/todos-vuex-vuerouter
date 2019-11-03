FROM node:10.15.3
WORKDIR /tmp/app
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
RUN ["apt-get", "install", "-y", "tree"]
RUN yarn init -y && yarn add parcel-bundler pug typescript sass stylus firebase
CMD ["/bin/bash"]